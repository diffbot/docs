---
id: guides-injecting-javascript-replaying-ajax
title: Injecting JavaScript into Custom API and replaying AJAX calls
sidebar_label: Injecting JavaScript into Custom API and replaying AJAX calls
---

<div class="entry-content">
		<p>Example: we need a category from a webshop like <a href="https://www.balenciaga.com/hk/top_cod12022446qd.html">Balenciaga.com</a>.</p>
<p><img src="/docs/img/balenciaga.png" alt=""></p>
<p>We can see that the category is somewhat contained in the URL ("top") but there must be something more obvious. If we look through the network calls issued as the page is loading, we’ll notice some things.</p>
<p><img src="/docs/img/balenciaga02.png" alt=""></p>
<p>Through trial and error, we can inspect each of the individual calls being made via JavaScript as the page is getting loaded until we reach a useful one. GetDataLayer is the one we need.</p>
<p><img src="/docs/img/03.png" alt=""></p>
<p>This is one of the few calls that return JSON data rather than text or HTML, indicating it’s used to populate data in a template, the template being a blank "product" page. Let’s scroll down.</p>
<p><img src="/docs/img/04.png" alt=""></p>
<p>Bingo! Product category is neatly fetched for us.</p>
<p>But we cannot access the data from an XHR call unless we either re-issue the call with custom JavaScript, or find it stored somewhere in the page.  The latter is simpler so let’s try that approach first.</p>
<h3 id="ipt_kb_toc_1308_0">Grabbing from the page</h3>
<p>We start our search by trying to find which element in the DOM might be related to this data. If we go to the Elements tab of the dev tools, we can search for the category "tops" which we’ve identified in the above network call. This will lead us to the following element:</p>
<p><img src="/docs/img/05.png" alt=""></p>
<p>We can see that it’s part of the value of the attribute called "data-ytos-track". Data attributes are fetched in JavaScript without the "data" prefix, so let’s see if there’s an "ytos-track" object in the JavaScript environment we could use.</p>
<p>Enter the console, and if you just start typing <code>y</code>, you’ll notice <code>yTos</code> appear in the list.</p>
<p><img src="/docs/img/06.png" alt=""></p>
<p>A few minutes of exploration later, and we can find the product category and micro category under <code>yTos.configuration.dataLayer</code>.</p>
<p><img src="/docs/img/07.png" alt=""></p>
<p>Now it’s just a matter of a simple JS script we’ll inject into the headers. This should do:</p>
<pre><code class="language-js">function() {
    start();

    // Add an element into the DOM from which we'll select (in the CUSTOM API) some of the values we generate with X-evaluate
    document.body.innerHTML += '&lt;div id="diffbot-output"&gt;&lt;/div&gt;';
    var node = document.createElement("div");
    node.id = "output";
    document.getElementById("container").appendChild(node);

    // Define the categories by extracting them from the JS object in the page
    var productCategory = yTos.configuration.dataLayer.product_category;
    var productMicro = yTos.configuration.dataLayer.product_micro;

    // Put the values into the generated elements
    document.querySelector("#diffbot-output").innerHTML += '&lt;div class="productCategory"&gt;' + productCategory + '&lt;/div&gt;';
    document.querySelector("#diffbot-output").innerHTML += '&lt;div class="productMicro"&gt;' + productMicro + '&lt;/div&gt;';

    end();
}
</code></pre>
<p>This should be <a href="https://www.minifier.org/">minified</a> and then placed into your <a href="http://tldrify.com/jao">X-evaluate header for the API call</a>.</p>
<p>Note: <em>The <a href="https://app.diffbot.com">New Dashboard</a> provides the functionality in the UI, but if you don’t have access to it yet, please <a href="mailto:support@diffbot.com">talk to support</a>.</em></p>
<h3 id="ipt_kb_toc_1308_1">Repeating the XHR call</h3>
<p>Sometimes the JS data fetched via a network call won’t be pasted into the DOM so obviously, and we’ll need to get creative. We’ll need to re-request the network call, but then grab the data for ourselves. Here’s the script to do that in the above case:</p>
<pre><code class="language-js">function() {
    start();

    // Prepare a new AJAX call
    var xhr = new XMLHttpRequest();
    var arr = location.href.match(/_[a-z]+(\w+)\.html+/);
    var id = arr[1];
    // Cancel call if there's no ID (no SKU) in the URL
    if (undefined === arr[1] || arr[1] === '') {
        end();
    }
    
    // Add element into which we'll put the output
    document.body.innerHTML += '&lt;div id="diffbot-output"&gt;&lt;/div&gt;';
    
    // Initiate an AJAX call to the site's data provider API, and inject the code we harvested from the URL.
    xhr.open('GET', 'https://www.balenciaga.com/yTos/api/Plugins/SeoPluginApi/GetDataLayer?itemCode10=' + id + '&amp;itemSiteCode=BALENCIAGA_HK&amp;controller=item&amp;area=&amp;action=index');

    // Define an event listener which executes when the AJAX call completes
    xhr.onload = function() {

        // Create an output element in the DOM
        var node = document.createElement("div");
        node.id = "output";
        document.getElementById("container").appendChild(node);
        
        // If the call was successful
        if (xhr.status === 200) {

            // Grab categories and inject them into the placeholder elements
            var productCategory = JSON.parse(xhr.responseText)['product_category'];
            var productMicro = JSON.parse(xhr.responseText)['product_micro'];
            document.querySelector("#diffbot-output").innerHTML += '&lt;div class="productCategory"&gt;' + productCategory + '&lt;/div&gt;';
            document.querySelector("#diffbot-output").innerHTML += '&lt;div class="productMicro"&gt;' + productMicro + '&lt;/div&gt;';

            // Otherwise, write out the error into the output element
        } else {
            document.querySelector("#diffbot-output").innerText = "Error";
        }

        // Once this is all done, give the browser 0.5 seconds to sober up and finalize, then call end.
        setTimeout(function() {
            end();
        }, 500);
    };

    // Call the AJAX request
    xhr.send();

    // Wait up to 10 seconds for the AJAX request to finish, if still not done, cancel by calling end.
    setTimeout(function() {
        end();
    }, 10000);
}
</code></pre>
<p>Arguably much more complex and slower, but helps when you don’t have access to the data in the page’s environment like above. Again, this needs to be minified and included in the headers of the Diffbot API request.</p>
<h3 id="ipt_kb_toc_1308_2">Results</h3>
<p>The results are as expected. Alongside a typical Diffbot category which is assumed, we have two very precise vendor-provided categories.</p>
<p><img src="/docs/img/08.png" alt=""></p>
			</div>
