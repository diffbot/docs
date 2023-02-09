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

let fs = require("fs");
let { render } = require("mustache");
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

axios.get('https://kg.diffbot.com/kg/ontology')
.then((response) => {
    
    // Template Model for Industry Categories
    var industries = response['data']['taxonomies']['IndustryCategory']['categories'];
    industries = ensureChildrenProperty(industries);
    // -- Convert to Array for mustache template iteration
    let industriesArray = [];
    for (let industry in industries) {
        industriesArray.push(industries[industry]);
    }

    // Template Model for Employment Categories
    var employmentCategories = response['data']['taxonomies']['EmploymentCategory']['categories'];
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
    var articleCategories = response['data']['taxonomies']['ArticleCategory']['categories'];
    articleCategories = ensureChildrenProperty(articleCategories);
    // -- Convert to Array for mustache template iteration
    let articleCategoriesArray = [];
    for (let industry in articleCategories) {
        articleCategoriesArray.push(articleCategories[industry]);
    }

    var templateModel = {
        industries: industriesArray,
        employmentCategories: employmentCategoriesByType,
        articleCategories: articleCategoriesArray
    };


    // Get Industries Template
    let industriesTemplate = fs.readFileSync("./static/md/kg-industries.md").toString();

    // Render Industries Template
    let industriesOutput = render(industriesTemplate, templateModel);
    console.log(`Rendered Industry Reference! Generating Markdown.../docs/kg-industry-list.md`);
    fs.writeFileSync(`../docs/kg-industry-list.md`, industriesOutput);

    // Get Employment Categories Template
    let employmentCategoriesTemplate = fs.readFileSync("./static/md/kg-employment-categories.md").toString();

    // Render Employment Categories Template
    let employmentCategoriesOutput = render(employmentCategoriesTemplate, templateModel);
    console.log(`Rendered Employment Categories Reference! Generating Markdown.../docs/kg-employment-categories-list.md`);
    fs.writeFileSync(`../docs/kg-employment-categories-list.md`, employmentCategoriesOutput);

    // Get Article Categories Template
    let articleCategoriesTemplate = fs.readFileSync("./static/md/kg-article-categories.md").toString();

    // Render Article Categories Template
    let articleCategoriesOutput = render(articleCategoriesTemplate, templateModel);
    console.log(`Rendered Article Category Reference! Generating Markdown.../docs/kg-article-categories-list.md`);
    fs.writeFileSync(`../docs/kg-article-categories-list.md`, articleCategoriesOutput);

});