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

axios.get('https://kg.diffbot.com/kg/ontology')
.then((response) => {
    // Template Model
    var industries = response['data']['industryCategories'];
    // -- Convert to Array for mustache template iteration
    let industriesArray = [];
    for (var industry in industries) {
        industriesArray.push(industries[industry]);
    }
    var templateModel = {
        industries: industriesArray
    };


    // Get Template
    let template = fs.readFileSync("./static/md/kg-industries.md").toString();

    // Render Template
    let output = render(template, templateModel);
    console.log(`Rendered Industry Reference! Writing Markdown...`);
    fs.writeFileSync(`../docs/kg-industry-list.md`, output);

});