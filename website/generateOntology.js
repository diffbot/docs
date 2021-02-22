/*
 *   --------------------------------------------------------------------------------------
 *   Diffbot Knowledge Graph Ontology Generator (Author: @jeromechoo)
 *   --------------------------------------------------------------------------------------
 *   - Sources published ontology from https://kg.diffbot.com/kg/enhance_endpoint/ont_docs
 *     and builds markdown files (which are then rendered into HTML by Docusaurus).
 *   - Running this script is not necessary with each production build of docs.diffbot.com,
 *     but is highly recommended to ensure the latest ontology is available.
 * 
 *   ADDING A NEW ENTITY?
 *   - Note that not all entities are displayed. Supported entities in entityTypes var.
 *   - After adding a new supported entity, add a link to this entity in sidebars.json
 * 
 */

let fs = require("fs");
let { render } = require("mustache");
const axios = require("axios");

// Delete this
const DIFFBOTTOKEN = ""

// Template helpers
const templateHelpers = {
    lowercase: (text) => {
        return (text, render) => {
            return render(text).toLowerCase();
        }
    }
}

// Supported entity types and props
var entityTypes = {
    DiffbotEntity: { 
        title: "All",
        id: "kg-ont-diffbotentity",
        description: "All Knowledge Graph entities will include the fields below, which are often generalized, linking, or metadata attributes common to all records. \n\nSee the left navigation panel for fields and attributes for specific entities,",
        helpers: templateHelpers
    },
    Article: { 
        title: "Article",
        id: "kg-ont-article",
        description: "The article entity type encompasses news, blog posts, and article content known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/ART128524946192.json"
    },
    Organization: { 
        title: "Organization",
        id: "kg-ont-organization",
        description: "The organization entity type encompasses corporations, local businesses, non-profits, and other organizations known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/EHb0_0NEcMwyY8b083taTTw.json"
    },
    Person: { 
        title: "Person",
        id: "kg-ont-person",
        description: "The person entity type encompasses all people known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/EyLhQX8YeNWOH19RPpdU7Kg.json"
    },
    Place: { 
        title: "Place",
        id: "kg-ont-place",
        description: "The place entity type encompasses cities, landmarks, countries, administrative areas, and other locations known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A.json"
    },
    CreativeWork: { 
        title: "CreativeWork",
        id: "kg-ont-creativework",
        description: "The Creative Work entity type encompasses movies, tv shows, musicals, scripts, and other creative works known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/E36UrGbGyPzC0zOFH52H0-w.json"
    },
    Product: { 
        title: "Product",
        id: "kg-ont-product",
        description: "The product entity type encompasses products found throughout the web known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/PRD306806.json"
    },
    Image: { 
        title: "Image",
        id: "kg-ont-image",
        description: "The Image entity type encompasses images found throughout the web and known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/IMG90666.json"
    },
    Video: { 
        title: "Video",
        id: "kg-ont-video",
        description: "The Video entity type encompasses videos found throughout the web and known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/VID2021988.json"
    },
    Event: { 
        title: "Event",
        id: "kg-ont-event",
        description: "The Event entity type encompasses webinars, meet ups, conferences, and other events known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/EvAo5Nr_VPVyS20xVOuuduQ.json"
    },
    Discussion: { 
        title: "Discussion",
        id: "kg-ont-discussion",
        description: "The Discussion entity type encompasses forum and other similar discussions found throughout the web and known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/DISC5631557.json"
    },
    AdministrativeArea: { 
        title: "AdministrativeArea",
        id: "kg-ont-administrativearea",
        description: "The Administrative Area entity type encompasses all cities, regions, counties, sub-regions, provinces, and countries known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
        helpers: templateHelpers,
        exampleRecord: "https://app.diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A.json"
    },
    // ROLE ONTOLOGY IS MISSING
    // Role: { 
    //     title: "Role",
    //     id: "kg-ont-role",
    //     description: "The Role entity type encompasses all roles known to the Knowledge Graph. \n\nNote that fields are not guaranteed to exist in every entity record.",
    //     helpers: templateHelpers
    // },
};

// Translates technical content type definitions to layman descriptions & examples
const CONTENTTYPES = {
  DDateTime: {
    name: "DateTime",
    example:
      "{'str': 'd2021-01-12T20:14:38', 'precision': 4, 'timestamp': 1610482478000}",
  },
};

const buildFieldExample = (fieldName, fieldEntity, ontDocs, exampleRecord) => {
// Truncate example records
if (exampleRecord && exampleRecord[fieldName]) {
    exampleRecord[fieldName] = Array.isArray(exampleRecord[fieldName]) ? exampleRecord[fieldName].slice(0, 3) : exampleRecord[fieldName];
}

// Build object/list examples for each field
let example = {};
    // String & Intangible/Misc/DegreeEntity Types
    if (
        fieldEntity["fields"][fieldName]["contentType"] === "String" ||
        (fieldEntity["fields"][fieldName]["leType"] && fieldEntity["fields"][fieldName]["leType"][0] === "Intangible") ||
        (fieldEntity["fields"][fieldName]["leType"] && fieldEntity["fields"][fieldName]["leType"][0] === "Miscellaneous") ||
        (fieldEntity["fields"][fieldName]["leType"] && fieldEntity["fields"][fieldName]["leType"][0] === "DegreeEntity")
        ) {
            example = exampleRecord && exampleRecord[fieldName] ? exampleRecord[fieldName] : "";
    }
    // Numerical Type
    else if (
        fieldEntity["fields"][fieldName]["contentType"] === "Short" || 
        fieldEntity["fields"][fieldName]["contentType"] === "Long" ||
        fieldEntity["fields"][fieldName]["contentType"] === "Double" ||
        fieldEntity["fields"][fieldName]["contentType"] === "Integer") 
        {
            example = exampleRecord && exampleRecord[fieldName] ? exampleRecord[fieldName] : 0;
    }
    // Boolean Type
    else if (fieldEntity["fields"][fieldName]["contentType"] === "Boolean") {
        example = false;
    }
    // Composite Type
    else if (fieldEntity["fields"][fieldName]["isComposite"] === true) {
        let compositeField = ontDocs["compositedocs"][fieldEntity["fields"][fieldName]["contentType"]];
        let compositeSubFieldNames = Object.keys(compositeField["fields"]);

        if (exampleRecord && exampleRecord[fieldName]) {
            example = exampleRecord[fieldName];
        }
        else {
            if (fieldEntity["fields"][fieldName]["isList"] === true) {
                example = [{}];
            }
            compositeSubFieldNames.forEach(subFieldName => {
                if (fieldEntity["fields"][fieldName]["isList"] === true) {
                    example[0][subFieldName] = buildFieldExample(subFieldName, compositeField, ontDocs, exampleRecord && exampleRecord[fieldName] ? exampleRecord[fieldName] : false);
                }
                else {
                    example[subFieldName] = buildFieldExample(subFieldName, compositeField, ontDocs, exampleRecord && exampleRecord[fieldName] ? exampleRecord[fieldName] : false);
                }
            })
        }
    }
    // Linked Entity Type
    else if (
        fieldEntity["fields"][fieldName]["isLinkedEntity"] === true &&
        fieldEntity["fields"][fieldName]["leType"]
    ) {
        // The call stack becomes insane here if we try to build this example with Linked Entities, so we'll just set string references if example doesn't exist
        if (exampleRecord && exampleRecord[fieldName]) {
            example = exampleRecord[fieldName];
        }
        else {
            let linkedentityTypes = fieldEntity["fields"][fieldName]["leType"];
            example = `[See ${linkedentityTypes.join(' or ')}]`;
        }
    }
    // List Type
    else if (fieldEntity["fields"][fieldName]["isList"] === true) {
        example = [];
    }
    // Other/Non-Declared Type
    else {
        example = exampleRecord && exampleRecord[fieldName] ? exampleRecord[fieldName] : "";
    }

return example;
};

// Transforms ont_docs to Mustache consumable JSON
const ontTransform = (ontDocsEntity, ontDocs) => {
    // Grab starting model
    let templateModel = entityTypes[ontDocsEntity.name];
    // Add fields to the model (and transform to array)
    let fieldNames = Object.keys(ontDocsEntity["fields"]).sort();
    let fields = fieldNames.map(fieldName => {
        if (!ontDocsEntity["fields"][fieldName]["example"]) {
            ontDocsEntity["fields"][fieldName]["example"] = {}
        }
        ontDocsEntity["fields"][fieldName]["example"][fieldName] = buildFieldExample(fieldName, ontDocsEntity, ontDocs, templateModel['exampleRecord']);
        ontDocsEntity["fields"][fieldName]["example"] = JSON.stringify(ontDocsEntity["fields"][fieldName]["example"], null, "\t");
        
        return ontDocsEntity["fields"][fieldName]
    });
    templateModel["fields"] = fields;
    return templateModel;
};

// Gets example records (if available) from the KG
const getExamples = (entityTypes) => {
    let entities = Object.keys(entityTypes);
    let promises = [];
    for (entityIndex in entities) {
        let entityTemplate = entityTypes[entities[entityIndex]];
        if (entityTemplate['exampleRecord']) {
            promises.push(axios.get(`${entityTemplate['exampleRecord']}?token=${DIFFBOTTOKEN}`).then((response) => {
                let example = {}
                example[entityTemplate.title] = response.data;
                return example;
            }));
        }
    }
    return Promise.all(promises);
};


getExamples(entityTypes)
.then((examples) => {
    for (exampleIndex in examples) {
        let entityType = Object.keys(examples[exampleIndex])[0];
        entityTypes[entityType]['exampleRecord'] = examples[exampleIndex][entityType];
    }
    return axios.get('https://kg.diffbot.com/kg/enhance_endpoint/ont_docs')
})
.then((response) => {
    var ontology = response.data;

    // Get all supported entity types and loop
    var supportedEntities = Object.keys(entityTypes);
    for (supportedEntityIndex in supportedEntities) {

        // Get Template Model
        let entityModel = ontTransform(ontology['typedocs'][supportedEntities[supportedEntityIndex]], ontology);

        // Get Template
        let template = fs.readFileSync("./static/md/entity-ontology.md").toString();

        // Render Template
        let output = render(template, entityModel);
        console.log(`Rendered ${entityModel.title} Ontology! Writing Markdown...`);
        fs.writeFileSync(`../docs/${entityModel.id}.md`, output);

    }
});