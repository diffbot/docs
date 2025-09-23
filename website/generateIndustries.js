/*
 *   --------------------------------------------------------------------------------------
 *   Diffbot Knowledge Graph Industries Generator (Author: @jeromechoo)
 *   --------------------------------------------------------------------------------------
 *   - Sources published industry reference from https://kg.diffbot.com/kg/ontology
 *     and builds a single markdown file (which are then rendered into HTML by Docusaurus).
 *   - Running this script is not necessary with each production build of docs.diffbot.com,
 *     but is highly recommended to ensure the latest ontology is available.
 * 
 * 
 */

const fs = require("fs").promises;
const { render } = require("mustache");
const axios = require("axios");

// Recursively loop through each object to ensure a defined 'children' property (even if empty)
// -- This fixes weak typing collision, resulting in mustache inadvertently accessing parent scopes when property is null in current scope
const ensureChildrenProperty = (arr) => {
    arr.forEach((item) => {
        if (!item['children']) {
            item['children'] = [];
        }
        else {
            ensureChildrenProperty(item['children'])
        }
    })
    return arr;
}

// // Read the file
// fs.readFile("ontology.tmp.json", 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//         return;
//     }

//     try {
//         // Parse the JSON content
//         const jsonData = JSON.parse(data);
//         console.log('JSON Data:', jsonData);
//     } catch (err) {
//         console.error('Error parsing JSON:', err);
//     }
// });


// axios.get('https://kg.diffbot.com/kg/ontology')
// .then((response) => {
//     // generateIndustries(response['data'])
// })
// .then(());

const run = async () => {
    // const response = await axios.get('https://kg.diffbot.com/kg/ontology')
    // const result = await fs.writeFile('ontology.json', JSON.stringify(response['data']))
    console.log("Reading saved ontology file...")
    const ontology = await fs.readFile('ontology.tmp.json', 'utf8')
    const jsonData = JSON.parse(ontology);
    generateIndustries(jsonData)
}

const generateIndustries = async (ont) => {
// Template Model for Industry Categories
    var industries = ont['taxonomies']['OrganizationCategory']['categories'];
    industries = ensureChildrenProperty(industries);
    // -- Convert to Array for mustache template iteration
    let industriesArray = [];
    for (let industry in industries) {
        industriesArray.push(industries[industry]);
    }

    // Template Model for Employment Categories
    var employmentCategories = ont['taxonomies']['EmploymentCategory']['categories'];
    employmentCategories = ensureChildrenProperty(employmentCategories);
    // -- Convert to Arrays for mustache template iteration
    let employmentCategoriesByType = {};
    for (let category in employmentCategories) {
        if (!employmentCategoriesByType[employmentCategories[category]["info"]["facet"]]) {
            employmentCategoriesByType[employmentCategories[category]["info"]["facet"]] = [];
        }
        employmentCategoriesByType[employmentCategories[category]["info"]["facet"]].push(employmentCategories[category]);
    }

    // Template Model for Article Categories
    var articleCategories = ont['taxonomies']['ArticleCategory']['categories'];
    articleCategories = ensureChildrenProperty(articleCategories);
    // -- Convert to Array for mustache template iteration
    let articleCategoriesArray = [];
    for (let industry in articleCategories) {
        articleCategoriesArray.push(articleCategories[industry]);
    }

    // Template Model for Technology Categories
    var technologyCategories = ont['taxonomies']['TechnologyCategory']['categories'];
    technologyCategories = ensureChildrenProperty(technologyCategories);
    // -- Convert to Array for mustache template iteration
    let technologyCategoriesArray = [];
    for (let cat in technologyCategories) {
        technologyCategoriesArray.push(technologyCategories[cat]);
    }

    var templateModel = {
        industries: industriesArray,
        employmentCategories: employmentCategoriesByType,
        articleCategories: articleCategoriesArray,
        technologyCategories: technologyCategoriesArray
    };


    // Get Industries Template
    let industriesTemplate = await fs.readFile("./static/md/kg-industries.md", 'utf-8')

    // Render Industries Template
    let industriesOutput = render(industriesTemplate, templateModel);
    console.log(`Rendered Industry Reference! Generating Markdown.../docs/kg-industry-list.md`);
    await fs.writeFile(`../docs/kg-industry-list.md`, industriesOutput);

    // Get Employment Categories Template
    let employmentCategoriesTemplate = await fs.readFile("./static/md/kg-employment-categories.md", 'utf-8')

    // Render Employment Categories Template
    let employmentCategoriesOutput = render(employmentCategoriesTemplate, templateModel);
    console.log(`Rendered Employment Categories Reference! Generating Markdown.../docs/kg-employment-categories-list.md`);
    await fs.writeFile(`../docs/kg-employment-categories-list.md`, employmentCategoriesOutput);

    // Get Article Categories Template
    let articleCategoriesTemplate = await fs.readFile("./static/md/kg-article-categories.md", 'utf-8')

    // Render Article Categories Template
    let articleCategoriesOutput = render(articleCategoriesTemplate, templateModel);
    console.log(`Rendered Article Category Reference! Generating Markdown.../docs/kg-article-categories-list.md`);
    await fs.writeFile(`../docs/kg-article-categories-list.md`, articleCategoriesOutput);

    // Get Techbology Categories Template
    let technologyCategoriesTemplate = await fs.readFile("./static/md/kg-technology-categories.md", 'utf-8')

    // Render Technology Categories Template
    let technologyCategoriesOutput = render(technologyCategoriesTemplate, templateModel);
    console.log(`Rendered Technology Category Reference! Generating Markdown.../docs/kg-technology-categories-list.md`);
    await fs.writeFile(`../docs/kg-technology-categories-list.md`, technologyCategoriesOutput);
}

run()