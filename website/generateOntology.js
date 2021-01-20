/*
 *   --------------------------------------------------------------------------------------
 *   Diffbot Knowledge Graph Ontology Generator (Author: @jeromechoo)
 *   --------------------------------------------------------------------------------------
 *   - Sources published ontology from https://kg.diffbot.com/kg/enhance_endpoint/ont_docs
 *     and builds markdown files (which are then rendered into HTML by Docusaurus).
 *   - Running this script is not necessary with each production build of docs.diffbot.com,
 *     but is highly recommended to ensure the latest ontology is available.
 *   - Note that not all entities are displayed. Supported entities in ENTITYTYPES const.
 *
 */

let fs = require("fs");
let { render } = require("mustache");

// Template helpers
const templateHelpers = {
    lowercase: (text) => {
        return (text, render) => {
            return render(text).toLowerCase();
        }
    }
}

// Supported entity types and props
const ENTITYTYPES = {
    Article: { 
        title: "Article",
        id: "kg-ont-article",
        description: "The article entity type encompasses news, blog posts, and content that fit the 'Article' archetype.",
        helpers: templateHelpers
    }
};

// Translates technical content type definitions to layman descriptions & examples
const CONTENTTYPES = {
  DDateTime: {
    name: "DateTime",
    example:
      "{'str': 'd2021-01-12T20:14:38', 'precision': 4, 'timestamp': 1610482478000}",
  },
};

// Delete and replace later with Axios GET of https://kg.diffbot.com/kg/enhance_endpoint/ont_docs
const ontology = {
  typedocs: {
    Article: {
      name: "Article",
      typeHierarchy: ["Article", "GlobalIndexDiffbotEntity"],
      fields: {
        date: {
          name: "date",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: true,
          isLinkedEntity: false,
          contentType: "DDateTime",
          isDeprecated: false,
          isHidden: false,
        },
        nextPages: {
          name: "nextPages",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: true,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        sentiment: {
          name: "sentiment",
          desc:
            "Sentiment of the article. Positive sentiments have positive values and negative sentiments have a negative value.",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "Double",
          isDeprecated: false,
          isHidden: false,
        },
        images: {
          name: "images",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: true,
          isComposite: true,
          isLinkedEntity: false,
          contentType: "GlobalIndexImage",
          isDeprecated: false,
          isHidden: false,
        },
        author: {
          name: "author",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        nextPage: {
          name: "nextPage",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        publisherRegion: {
          name: "publisherRegion",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        icon: {
          name: "icon",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        estimatedDate: {
          name: "estimatedDate",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: true,
          isLinkedEntity: false,
          contentType: "DDateTime",
          isDeprecated: false,
          isHidden: false,
        },
        siteName: {
          name: "siteName",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        language: {
          name: "language",
          desc: "Refers to the language in which an Article is written",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        videos: {
          name: "videos",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: true,
          isComposite: true,
          isLinkedEntity: false,
          contentType: "GlobalIndexVideo",
          isDeprecated: false,
          isHidden: false,
        },
        discussion: {
          name: "discussion",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: true,
          isLinkedEntity: false,
          contentType: "GIDiscussionField",
          isDeprecated: false,
          isHidden: false,
        },
        title: {
          name: "title",
          desc: "Title of the Article",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        tags: {
          name: "tags",
          desc:
            "Array of tags/entities, generated from analysis of the extracted text and cross-referenced with DBpedia and other data sources. Language-specific tags will be returned if the source text is in English, Chinese, French, German, Spanish or Russian.",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: true,
          isComposite: true,
          isLinkedEntity: false,
          contentType: "GlobalIndexTag",
          isDeprecated: false,
          isHidden: false,
        },
        quotes: {
          name: "quotes",
          desc:
            "Returns quotes found in the article text and who said them. For English-language text only",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: true,
          isComposite: true,
          isLinkedEntity: false,
          contentType: "GlobalIndexQuote",
          isDeprecated: false,
          isHidden: false,
        },
        publisherCountry: {
          name: "publisherCountry",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        numPages: {
          name: "numPages",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "Integer",
          isDeprecated: false,
          isHidden: false,
        },
        breadcrumb: {
          name: "breadcrumb",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: true,
          isComposite: true,
          isLinkedEntity: false,
          contentType: "GlobalIndexBreadcrumb",
          isDeprecated: false,
          isHidden: false,
        },
        authorUrl: {
          name: "authorUrl",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        html: {
          name: "html",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
        text: {
          name: "text",
          desc: "",
          deprecated: false,
          linkedEntity: false,
          hidden: false,
          isFact: false,
          isEnum: false,
          isList: false,
          isComposite: false,
          isLinkedEntity: false,
          contentType: "String",
          isDeprecated: false,
          isHidden: false,
        },
      },
    },
  },
};

// Transforms ont_docs to Mustache consumable JSON
const ontTransform = (entity) => {
    let templateModel = ENTITYTYPES[entity.name];
    let fieldNames = Object.keys(entity["fields"]);
    let fields = fieldNames.map(fieldName => {
        return entity["fields"][fieldName]
    });
    templateModel["fields"] = fields;
    return templateModel;
};

// Get Template Model
let articleModel = ontTransform(ontology['typedocs']['Article']);

// Get Template
let template = fs.readFileSync("./static/md/entity-ontology.md").toString();

// Render Template
let output = render(template, articleModel);
console.log("Rendered! Writing Markdown...");
fs.writeFileSync(`../docs/${articleModel.id}.md`, output);