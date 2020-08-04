function resizeIframe(obj) {
  // No worky except under same origin :(
  console.log("in onload");
  obj.style.height =
    obj.contentWindow.document.documentElement.scrollHeight + "px";
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
        ctx: context,
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
  };
})("docReady", window);

docReady(function () {
  const wideMode = document.querySelector(".wrapper-wide") !== null;

  if (wideMode) {
    // Remove footer
    document.querySelector("footer").remove();
  }

  // Build the dropdown
  let dropDown1 = document.createElement("div");
  dropDown1.classList.add("dropdown");
  let dd1html =
    '<a href="/docs/en/kg-index" class="dropbtn">Knowledge Graph</a><div class="dropdown-content">';
  dd1html += '<a href="/kgapi">KG API Reference</a>';
  dd1html += '<a href="/enhance">Enhance API Reference</a>';
  dd1html += '<a href="/ontology">Ontology Docs</a>';
  dd1html += '<a href="/docs/en/dql-index">Diffbot Query Language</a>';
  dd1html += "</div>";
  dropDown1.innerHTML = dd1html;

  // Build the dropdown for API
  let dropDown2 = document.createElement("div");
  dropDown2.classList.add("dropdown");
  let dd2html =
    '<a href="/docs/en/api-basics-index" class="dropbtn">Extraction</a><div class="dropdown-content">';
  dd2html += '<a href="/docs/en/api-intro-product">Product API</a>';
  dd2html += '<a href="/docs/en/api-intro-article">Article API</a>';
  dd2html += '<a href="/docs/en/api-intro-analyze">Analyze API</a>';
  dd2html += '<a href="/docs/en/api-event">Event API</a>';
  dd2html += '<a href="/docs/en/api-intro-image">Image API</a>';
  dd2html += '<a href="/docs/en/api-intro-video">Video API</a>';
  dd2html += '<a href="/docs/en/api-intro-discussion">Discussion API</a>';
  dd2html += '<a href="/docs/en/api-intro-custom">Custom API</a>';
  dd2html += '<a href="/docs/en/api-intro-account">Account API</a>';
  dd2html += "</div>";
  dropDown2.innerHTML = dd2html;

  // Build the dropdown for Batch
  let dropDown3 = document.createElement("div");
  dropDown3.classList.add("dropdown");
  let dd3html =
    '<a href="/docs/en/cb-basics-index" class="dropbtn">Crawling</a><div class="dropdown-content">';
  dd3html += '<a href="/docs/en/cb-intro-cb">Crawlbot</a>';
  dd3html += '<a href="/docs/en/cb-intro-bulk">Bulk Jobs</a>';
  dd3html += '<a href="/docs/en/cb-intro-search">Search API</a>';
  dd3html += "</div>";
  dropDown3.innerHTML = dd3html;

  // Build the dropdown for natural language
  let dropDown4 = document.createElement("div");
  dropDown4.classList.add("dropdown");
  let dd4html =
    '<a href="/docs/en/nl-index" class="dropbtn">Natural Language</a><div class="dropdown-content">';
  dd4html += '<a href="/docs/en/nl-index">Home</a>';
  dd4html += '<a href="/docs/en/nl-quickstart">Quickstart</a>';
  dd4html += "</div>";
  dropDown4.innerHTML = dd4html;

  // Insert into top nav
  //let currentNav = document.querySelector("ul.nav-site").innerHTML;
  //document.querySelector("ul.nav-site").innerHTML = dropdownHtml + currentNav;
  let currentNav = document.querySelector("ul.nav-site");
  currentNav.prepend(dropDown4);
  currentNav.prepend(dropDown1);
  currentNav.prepend(dropDown3);
  currentNav.prepend(dropDown2);

  // Check if there is an H3 Knowledge Graph heading in the sidebar
  let inKgSection = false;
  let headings = document.querySelectorAll("h3.navGroupCategoryTitle");
  headings.forEach(function (element) {
    console.log(element);
    console.log(element.innerHTML);
    if (element.innerHTML.indexOf("Knowledge Graph") === 0) {
      inKgSection = true;
    }
  });

  // Add a subsection into the sidebar for API docs
  if (inKgSection) {
    console.log("Writing new section");
    let newSection =
      '<div class="navGroup subNavGroup"><h4 class="navGroupSubcategoryTitle">API Reference Docs</h4><ul><li class="navListItem"><a class="navItem" href="/kgapi">Knowledge Graph API Reference</a></li><li class="navListItem"><a class="navItem" href="/enhance">Enhance API Reference</a></li><li class="navListItem"><a class="navItem" href="/ontology">Ontology Reference</a></li></ul></div>';
    document.querySelector(
      ".toc .toggleNav .navGroups .navGroup>ul"
    ).innerHTML += newSection;
  }

  // Store sidebar in localstorage if exists
  let sidebar = document.querySelector("#docsNav");
  if (null !== sidebar) {
    localStorage.setItem("docsNav", sidebar.innerHTML);
  }

  // If there is no sidebar on this page, insert the previous sidebar
  // Limit to non-basics pages - we want supercategory landing pages to be without sidebar
  if (null === sidebar && location.href.indexOf("-basics-") === -1) {
    let docMainWrapper = document.querySelector(".docMainWrapper");
    if (null !== docMainWrapper) {
      docMainWrapper.innerHTML =
        '<div class="docsNavContainer" id="docsNav">' +
        localStorage.getItem("docsNav") +
        "</div>" +
        docMainWrapper.innerHTML;
    }
  }

  // Add fathom analytics
  let script = document.createElement("script");
  script.setAttribute("src", "https://cdn.usefathom.com/3.js");
  script.setAttribute("site", "OGXCNLPJ");
  document.querySelector("body").appendChild(script);

  // Add Segment
  !(function () {
    var analytics = (window.analytics = window.analytics || []);
    if (!analytics.initialize)
      if (analytics.invoked)
        window.console &&
          console.error &&
          console.error("Segment snippet included twice.");
      else {
        analytics.invoked = !0;
        analytics.methods = [
          "trackSubmit",
          "trackClick",
          "trackLink",
          "trackForm",
          "pageview",
          "identify",
          "reset",
          "group",
          "track",
          "ready",
          "alias",
          "debug",
          "page",
          "once",
          "off",
          "on",
          "addSourceMiddleware",
          "addIntegrationMiddleware",
          "setAnonymousId",
          "addDestinationMiddleware",
        ];
        analytics.factory = function (e) {
          return function () {
            var t = Array.prototype.slice.call(arguments);
            t.unshift(e);
            analytics.push(t);
            return analytics;
          };
        };
        for (var e = 0; e < analytics.methods.length; e++) {
          var t = analytics.methods[e];
          analytics[t] = analytics.factory(t);
        }
        analytics.load = function (e, t) {
          var n = document.createElement("script");
          n.type = "text/javascript";
          n.async = !0;
          n.src =
            "https://cdn.segment.com/analytics.js/v1/" +
            e +
            "/analytics.min.js";
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(n, a);
          analytics._loadOptions = t;
        };
        analytics.SNIPPET_VERSION = "4.1.0";
        analytics.load("sQoH4GafKS6QYcbQHc4aQVX3grmKkJJM");
        analytics.page();
      }
    return true;
  })();
});
