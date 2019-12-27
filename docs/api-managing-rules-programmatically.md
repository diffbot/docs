---
id: api-managing-rules-programmatically
title: Managing Custom Rules Programmatically
sidebar_label: Managing Custom Rules Programmatically
todo: Modify links to old Dashboard
todo: Modify links to old API docs
---

<div id="docBody">
            <p>You can manage your Custom API using our Custom Rule Management API.</p>

<h3 id="request">Retrieving Existing Rules</h3>
<p>To retrieve your existing rules, perform a HTTP GET request on the following endpoint:</p>
<pre class="code">https://api.diffbot.com/v3/custom</pre>
<p>Provide the following arguments:</p>
<table class="controls table table-bordered" id="arguments" border="0" cellpadding="5">
  <thead><tr>
<th>Argument</th>
<th>Description</th>
</tr></thead>

        <tr>
            <td class=""><code>token</code></td>
            <td class=" default"><div>Developer token</div></td>
        </tr>
</table>


<p>This returns a JSON-formatted ruleset which corresponds to the UI elements of the <a href="/dev/customize">Custom API Toolkit</a>.</p>

  <table class="controls table table-bordered" border="0" cellpadding="5">
  <thead><tr>
<th>Field</th>
<th>Description</th>
</tr></thead>
  <tbody>
  <tr>
<td><code>urlPattern</code></td>
<td>Regular expression used to match URLs to the appropriate rule.</td>
</tr>
  <tr>
<td><code>api</code></td>
<td>Diffbot API against which the ruleset should be appled. The <code>api</code> value should include the <code>/api/</code> string, e.g. <code>/api/article</code>.</td>
</tr>
  <tr>
<td><code>rules</code></td>
<td>An array of rules applying to individual fields of the Diffbot API. The <code>rules</code> array can be empty (<code>rules=[]</code>), but the field must be included in API requests.</td>
</tr>
  <tr>
<td class="tags indent"><code>name</code></td>
<td class="indent">Field to correct (e.g., <code>title</code>) or add (e.g., <code>customCategory</code>).</td>
</tr>
  <tr>
<td class="tags indent"><code>selector</code></td>
<td class="indent">CSS selector to find the appropriate content on the page.</td>
</tr>
  <tr>
<td class="tags indent"><code>value</code></td>
<td class="indent">Optional: a specific value to hard-code, in lieu of a selector.</td>
</tr>
  <tr>
<td class="tags indent"><code>filters</code></td>
<td class="indent">Optional: additional options to replace content, ignore selectors, or extract HTML attribute values. See below.</td>
</tr>
  <tr><td colspan="2"><strong>Optional arguments:</strong></td></tr>
  <tr>
<td><code>testUrl</code></td>
<td>A sample URL used to preview your rule within the <a href="/dev/customize">Custom API Toolkit</a>.</td>
</tr>
  <tr>
<td><code>prefilters</code></td>
<td>An array of selectors that should be completely dropped from the DOM. These selectors will be fully ignored by all Diffbot processing.</td>
</tr>
  <tr>
<td><code>renderOptions</code></td>
<td>Querystring arguments to be passed to the Diffbot rendering engine, e.g. <code>wait=5000</code>.</td>
</tr>
  <tr>
<td><code>xForwardHeaders</code></td>
<td>An object containing any custom headers to be passed along in all requests to URLs matching the <code>urlPattern</code>. Header values can either be a single string, or an array of strings (from which one will be selected at request-time). Custom headers can include:</td>
</tr>
  <tr>
<td class="tags indent"><code>User-Agent</code></td>
<td class="indent">User agent to use in place of Diffbot default.</td>
</tr>
  <tr>
<td class="tags indent"><code>Referer</code></td>
<td class="indent">Custom referer to use in place of Diffbot default.</td>
</tr>
  <tr>
<td class="tags indent"><code>Cookie</code></td>
<td class="indent">Custom cookie content to be sent with all requests.</td>
</tr>
  <tr>
<td class="tags indent"><code>Accept-Language</code></td>
<td class="indent">Custom accept-language header to be sent.</td>
</tr>
  <tr>
<td class="tags indent"><code>X-Evaluate</code></td>
<td class="indent">Custom Javascript to be executed at render-time. See <a href="#x-evaluate">Custom Javascript</a> below.</td>
</tr>

</tbody>
  </table>

<p>Rules for nested arrays (e.g., <code>images</code> or <code>videos</code> in the <a href="api-article">Article API</a>, or <code>products</code> in the <a href="api-product">Product API</a>) should be nested within the <code>rules</code> object.</p>

<h4>Rule Filters (Optional)</h4>
<p>A rule's <code>filters</code> element can contain multiple entries, which correspond to the filters within the API Toolkit. Each filter should contain:</p>

  <table class="controls table table-bordered" border="0" cellpadding="5">
  <thead><tr>
<th>Field</th>
<th>Description</th>
</tr></thead>
  <tbody>
  <tr>
<td><code>type</code></td>
<td>Type of filter, either <code>replace</code>, <code>exclude</code> (ignore), or <code>attribute</code>.</td>
</tr>
  <tr>
<td><code>args</code></td>
<td>Argument(s) to be used for the filter. If you are replacing content, your <code>args</code> should be a comma-separated list of the regular expression to search for and the expression to replace with. If you are excluding content, your <code>args</code> should enumerate the CSS selector(s) to ignore. If you are attempting to retrieve an HTML attribute, specify the attribute (e.g. <code>src</code>) in your <code>args</code> value.</td>
</tr>
</tbody>
  </table>
<h4 id="x-evaluate">Custom Javascript</h4>
<p>Using the <code>X-Evaluate</code> custom header, you can inject your own Javascript code into web pages. Custom Javascript will be executed once the DOM has loaded.</p>
<p>Your custom Javascript should be provided as a text string and contained in its own function. You must also include the special functions <code>start()</code> and <code>end()</code> to indicate the beginning and end of your custom script. Once <code>end()</code> fires, the updated document will be processed by your chosen extraction API.</p>
<p>It's recommended that your <code>end()</code> function be offset using <code>setTimeout</code> (see <a href="http://www.w3schools.com/js/js_timing.asp" target="_blank">JavaScript Timing Events</a>) in order to accommodate your primary function processing. Additionally, if your custom Javascript requires access to Ajax-delivered content, it may be necessary to offset your entire function using <code>setTimeout</code> in order to delay the start of your processing.</p>
<p>The following sample <code>X-Evaluate</code> header waits one-half second after the DOM has loaded, enacts a click on the <code>a.loadMore</code> element, then waits 800 milliseconds before signaling the <code>end()</code>:</p>
<pre>
function() {
    start();
    setTimeout(function() {
        var loadMoreNode = document.querySelector('a.loadMore');
        if (loadMoreNode != null) {
            loadMoreNode.click();
            setTimeout(function() {
                end();
            }, 800);
        } else {
            end();
        }
    }, 500);
}
</pre>

<p>Delivered as a rule:</p>
<pre>"xForwardHeaders": {
   "X-Evaluate": "function() {start();setTimeout(function(){var loadMoreNode=document.querySelector('a.loadMore');if (loadMoreNode != null) {loadMoreNode.click();setTimeout(function(){end();}, 800);} else {end();}},500);}"
}</pre>

<hr>

<h3>Sample Ruleset</h3>
<p>The following ruleset JSON gives an example of many of the fields and functionality described above.</p>

<pre>
{
    "urlPattern": "(http(s)?://)?(.*\\.)?support.diffbot.com.*",
    "testUrl": "http://support.diffbot.com/crawlbot/using-zapier-with-crawlbot-or-bulk-api-jobs/",
    "api": "/api/article",
    "prefilters": ["#footer",".advertisement-block"],
    "renderOptions": "wait=10000",
    "xForwardHeaders": {
      "Cookie": [
        "cookie value 1",
        "cookie value 2"
      ],
      "Referer": "http://www.diffbot.com",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36"
    }
    "rules": [
    {
      "selector": ".entry-content p",
      "name": "text"
    },
    {
      "selector": ".entry-content img",
      "name": "images",
      "rules": [
        {
          "name": "primary",
          "value": "true"
        },
        {
          "selector": "img",
          "name": "url",
          "filters": [
            {
              "args": [
                "src"
              ],
              "type": "attribute"
            }
          ]
        }
      ]
    }
  ]
}
</pre>
<p>The above:</p>
<ul>
  <li>Specifies a URL pattern regular expression that matches *.support.diffbot.com</li>
  <li>Includes a <code>testUrl</code> -- for preview in the Custom API UI.</li>
  <li>Specifies the API (<code>/api/article</code>).</li>
  <li>Then, within the <code>rules</code> object:
    <ul>
      <li>A simple selector to override the <code>text</code> (and <code>html</code>) field.</li>
      <li>A selector for the <code>images</code> parent container, with its own sub-array of rules for individual images.</li>
      <li>A filter on the specific image <code>url</code> field to retrieve the elements <code>src</code> attribute.</li>
    </ul>
  </li>
</ul>
<hr>
<h3>Creating or Updating Rules</h3>

<p>An individual rule is determined by a unique <code>urlPattern</code> and <code>api</code> combination. Create or update rules by POSTing to the following endpoint:

</p>
<pre class="code">https://api.diffbot.com/v3/custom</pre>

<p>Append the following querystring arguments to your POST URL:</p>

<table class="controls table table-bordered" id="arguments" border="0" cellpadding="5">
  <thead><tr>
<th>Argument</th>
<th>Description</th>
</tr></thead>
        <tr>
            <td class=""><code>token</code></td>
            <td class=" default"><div>Developer token</div></td>
        </tr>
        <tr>
            <td colspan="2" class="header">Optional arguments</td>
        </tr>
        <tr>
            <td class=""><code>replace</code></td>
            <td class=" default"><div>Hash code of a single ruleset to update. This allows you to update an existing rule's API or <code>urlPattern</code> without adding a new set.</div></td>
        </tr>
</table>

<p>Your POST body should either contain a JSON array of JSON objects -- corresponding to the above fields -- or a single JSON object.</p>
<p>To update or add a single ruleset, send a single JSON object. This will add the new ruleset to your token's rules (or update an existing  <code>urlPattern</code> and <code>api</code> pair). To update a ruleset while changing either the <code>api</code> or <code>urlPattern</code>, send that ruleset's hashcode, as returned from the ruleset's last update.</p>
<p>To update/overwrite all rules for your token, send a JSON array of objects. This will replace all rulesets for your token.</p>

<h4 id="response">Response
</h4>
<p>Updating or creating rules will return a JSON response containing an array of <code>hashes</code>. These hashes represent each of your updated or created rules, and can be used to update individual rules.</p>
<pre>{
  "hashes":
    [
      "507a31ce",
      "ax7n3sa1",
      "z992ns6c"
    ]
}</pre>

            </div>