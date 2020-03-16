function resizeIframe(obj) {
    // No worky except under same origin :(
    console.log("in onload");
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

(function (funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if (document.readyState === "complete") {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function (callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function () {
                callback(context);
            }, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({
                fn: callback,
                ctx: context
            });
        }
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);

docReady(function () {
    const wideMode = document.querySelector(".wrapper-wide") !== null;

    if (wideMode) {
        // Remove footer
        document.querySelector("footer").remove();
    }


    // Build the dropdown
    let dropdownHtml = '<div class="dropdown"><a href="/docs/en/kg-index" class="dropbtn">Knowledge Graph</a><div class="dropdown-content">';
    dropdownHtml += '<a href="/kgapi">KG API Reference</a>';
    dropdownHtml += '<a href="/enhance">Enhance API Reference</a>';
    dropdownHtml += '<a href="/ontology">Ontology Docs</a>';
    dropdownHtml += '<a href="/docs/en/dql-index">Diffbot Query Language</a>';
    dropdownHtml += '</div></div>';

    // Build the dropdown for API
    dropdownHtml += '<div class="dropdown"><a href="/docs/en/api-basics-index" class="dropbtn">Automatic API</a><div class="dropdown-content">';
    dropdownHtml += '<a href="/docs/en/api-basics-index">Basics</a>';
    dropdownHtml += '<a href="/docs/en/api-usage-index">Usage Examples</a>';
    dropdownHtml += '<a href="/docs/en/api-intro">API Reference</a>';
    dropdownHtml += '</div></div>';

    // Build the dropdown for Batch
    dropdownHtml += '<div class="dropdown"><a href="/docs/en/cb-basics-index" class="dropbtn">Batch Services</a><div class="dropdown-content">';
    dropdownHtml += '<a href="/docs/en/cb-basics-index">Basics</a>';
    dropdownHtml += '<a href="/docs/en/cb-usage-index">Usage Examples</a>';
    dropdownHtml += '<a href="/docs/en/api-cb">API Reference</a>';
    dropdownHtml += '</div></div>';

    // Insert into top nav
    let currentNav = document.querySelector("ul.nav-site").innerHTML;
    document.querySelector("ul.nav-site").innerHTML = dropdownHtml + currentNav;

    // Check if there is an H3 Knowledge Graph heading in the sidebar
    let inKgSection = false;
    let headings = document.querySelectorAll("h3.navGroupCategoryTitle");
    headings.forEach(function(element){
        console.log(element);
        console.log(element.innerHTML);
        if (element.innerHTML.indexOf("Knowledge Graph") === 0) {
            inKgSection = true;
        }
    });

    // Add a subsection into the sidebar for API docs
    if (inKgSection) {
        console.log("Writing new section");
        let newSection = '<div class="navGroup subNavGroup"><h4 class="navGroupSubcategoryTitle">API Reference Docs</h4><ul><li class="navListItem"><a class="navItem" href="/kgapi">Knowledge Graph API Reference</a></li><li class="navListItem"><a class="navItem" href="/enhance">Enhance API Reference</a></li><li class="navListItem"><a class="navItem" href="/ontology">Ontology Reference</a></li></ul></div>'
        document.querySelector(".toc .toggleNav .navGroups .navGroup>ul").innerHTML += newSection;
    }

    // Store sidebar in localstorage if exists
    let sidebar = document.querySelector("#docsNav");
    if (null !== sidebar) {
        localStorage.setItem("docsNav", sidebar.innerHTML);
    }

    // If there is no sidebar on this page, insert the previous sidebar
    if (null === sidebar) {
    let docMainWrapper = document.querySelector(".docMainWrapper");
    if (null !== docMainWrapper) {
        docMainWrapper.innerHTML = '<div class="docsNavContainer" id="docsNav">' 
            + localStorage.getItem("docsNav") 
            + "</div>" 
            + docMainWrapper.innerHTML;
        }
    }
})