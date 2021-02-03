/*
 *   --------------------------------------------------------------------------------------
 *   Generate Sidebar Anchor Links (Author: @jeromechoo)
 *   --------------------------------------------------------------------------------------
 *   - Docusaurus v1 (or v2 for that matter) does not support anchor links in the sidebar.
 *     This is ridiculous and easy to do. So this script fixes it. 
 *   - This script works by reading sidebars.json, finding any anchor link references, and
 *     generating the appropriate sidebar link for it. 
 * 
 *   Known Issues: 
 *   - For i18n - currently only supports the /docs/en directory structure. 
 *   - Not compatible with YARN RUN START (only functions in production build)
 * 
 *   How to Add an Anchor Link to the Sidebar:
 *   - The same way you add any link to a sidebar. Include the file name, but in this case
 *     include the anchor name as a hash value (like HTML).
 * 
 */

const fs = require('fs');
const parse = require('node-html-parser').parse;

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function removeDuplicatesFromArray(arr) {
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
      
    return arr.filter(onlyUnique);
}

const findAnchors = (someArray) => {
    let anchors = [];
    let docs = [];
    let tempDocs = [];
    let anchorFound = false;
    for (index in someArray) {
        if (typeof(someArray[index]) === "string") {
            tempDocs.push(someArray[index].split('#')[0]);
            if (someArray[index].indexOf('#') > -1) {
                anchorFound = true;
                let id = {};
                id[index] = someArray[index];
                anchors.push(id);
            }
        }
        else if (typeof(someArray[index] === "object")) {
            // Subcategory, iterate through ids
            let subTempDocs = [];
            let subAnchorFound = false;
            for (let subCatIndex in someArray[index]['ids']) {
                subTempDocs.push(someArray[index]['ids'][subCatIndex].split('#')[0]);
                if (someArray[index]['ids'][subCatIndex].indexOf('#') > -1) {
                    subAnchorFound = true;
                    anchorFound = true;
                    let id = {};
                    let subId = {};
                    subId[subCatIndex] = someArray[index]['ids'][subCatIndex];
                    id[index] = [subId];
                    anchors.push(id);
                }
            }
            if (subAnchorFound) { docs = docs.concat(subTempDocs) }
        }
    }
    if (anchorFound) { docs = docs.concat(tempDocs) }

    docs = removeDuplicatesFromArray(docs);

    return [anchors, docs];
}

const generateSidebarAnchors = () => {

    let rawSidebars = fs.readFileSync('sidebars.json');
    let sidebars = JSON.parse(rawSidebars);
    let docs = [];
    let newSidebarLinks = {};

    // Iterate Thru Top Level Nav Structure
    for (let [sidebarKey, sidebarValue] of Object.entries(sidebars)) {
        // Iterate Thru Category Headers
        for (let [categoryKey, categoryValue] of Object.entries(sidebarValue)) {
            let response = findAnchors(categoryValue) // 0: anchors, 1: docs
            if (response[0].length > 0) {
                newSidebarLinks[categoryKey] = response[0];
            }
            docs = docs.concat(response[1]);
        }
    }
    console.log(JSON.stringify(newSidebarLinks));
    console.log(docs);
    
    // Write to Relevant HTML Files (in /build)
    for (let doc in docs) {
        fs.readFile(`./build/docs/docs/en/${docs[doc]}.html`, 'utf8', (err,html)=>{
            if (err){
               throw err;
            }
            else {
                const root = parse(html);
                let allNavGroups = root.querySelectorAll('.navGroup');
                const navGroups = allNavGroups.filter(el => el.rawAttrs.indexOf('subNavGroup') === -1); // Filter out SubNavs (html-node-parser doesn't support pseudo-selectors)
                for (navGroup in navGroups) {
                    let newNavModel = newSidebarLinks[navGroups[navGroup].querySelector('h3').text]; // Use navGroup header to select correct sidebar
                    for (let nav in newNavModel) {
                        for (let [navKey, navValue] of Object.entries(newNavModel[nav])) {
                            if (typeof(navValue) === "string") {
                                // Nav Item
                                let navTarget = navGroups[navGroup].querySelectorAll('ul .navListItem, ul .subNavGroup')[Number(navKey)+1];
                                let navTitle = toTitleCase(navValue.split('#')[1].replace(/-/g, " "));
                                navTarget.insertAdjacentHTML('afterend', 
                                `
                                    <li class="navListItem"><a class="navItem" href="/docs/en/${navValue}">${navTitle}</a></li>
                                `)
                            }
                            else {
                                // Subcategory
                                let navTarget = navGroups[navGroup].querySelectorAll('ul .navListItem, ul .subNavGroup')[Number(navKey)+1];
                                for (let subNav in navValue) {
                                    for (let [subNavKey, subNavValue] of Object.entries(navValue[subNav])) {
                                        let subNavTarget = navTarget.querySelectorAll('li.navListItem')[Number(subNavKey)-1];
                                        let subNavTitle = toTitleCase(subNavValue.split('#')[1].replace(/-/g, " "));
                                        subNavTarget.insertAdjacentHTML('afterend', 
                                        `
                                            <li class="navListItem"><a class="navItem" href="/docs/en/${subNavValue}">${subNavTitle}</a></li>
                                        `)
                                    }
                                }
                            }
                        }
                    }
                }
                fs.writeFile(`./build/docs/docs/en/${docs[doc]}.html`, root.toString(), (err) => {
                    if (err) { console.log(err); } else { console.log(`Anchor links Successfully Appended to ${docs[doc]}.html`) }
                    fs.copyFile(`./build/docs/docs/en/${docs[doc]}.html`, `./build/docs/docs/en/${docs[doc]}/index.html`, (err) => {
                        if (err.syscall !== 'copyfile') { console.log(err) }
                    });
                })
            }
        });
    }

};

module.exports = generateSidebarAnchors();