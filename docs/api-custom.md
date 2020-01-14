---
id: api-custom
title: Custom APIs
sidebar_label: Custom APIs
todo: Modify link beginning with "support.diffbot.com/topics"
todo: Modify links to old API docs
todo: Modify links to old Dashboard
---

<div id="docBody">
<p>Custom APIs allow you to extract nearly anything from nearly any site using Diffbot's powerful rendering engine.</p>
<div class="alert alert-info">
<strong>Related:</strong> <a href="http://support.diffbot.com/topics/apitoolkit/" target="_blank">API Toolkit Support</a> | <a href="api-managing-rules-programmatically">Managing Rules Programmatically</a> | <a href="tutorials-custom-video">Video Tutorials</a>
</div>
<h3 id="request">Creating a New API</h3>
<p>You first need to create a custom API using our <a href="/dev/customize">API Toolkit</a>. Point-and-click or use CSS selectors to identify the content you wish to extract from a sample page. Your new API will be ready immediately, either for individual calls, your own app integration, or from within <a href="/dev/crawl">Crawlbot</a> or our <a href="/dev/bulk">Bulk API</a> systems.</p>

<p>Custom APIs use Diffbot's cloud-based rendering engine, and fully execute most page-level Javascript in order to access Ajax-delivered elements.</p>

<p>For assistance in creating your custom API, please see <a href="api-selectors-filters">Selectors and Filters</a>.</p>

<h3 id="request">Request</h3>
<div class="indent">
<p>To access your Custom API, perform a HTTP GET request on the API you created in the <a href="/dev/customize">API Toolkit</a>:</p>
  

```text
https://api.diffbot.com/v3/{your API name}?token=...&amp;url=...
```


<p>Provide the following arguments:</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Argument</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>token</code></td>
<td>Developer <a href="https://diffbot.com/pricing">token</a>
</td>
</tr>
<tr>
<td><code>url</code></td>
<td>URL to process (<a href="http://en.wikipedia.org/wiki/Percent-encoding" target="_blank">URL encoded</a>)</td>
</tr>
<tr><td colspan="2"><strong>Optional parameters</strong></td></tr>
<tr class="opt">
<td><code>callback</code></td>
<td>Use for jsonp requests. Needed for cross-domain ajax.</td>
</tr>
<tr class="opt">
<td><code>timeout</code></td>
<td>Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000).</td>
</tr>
</tbody>
</table>
<h3 id="response">Response</h3>
<p>Custom APIs return data in JSON format.</p>

<p>Each response includes a <code>request</code> object (which returns request-specific metadata), and an <code>objects</code> array, which will include the extracted information for all objects on a submitted page.</p>

<p>For Custom APIs the <code>objects</code> array will always contain a single object, and all custom fields and collections will be returned therein.

</p>
<h3 id="authenticating">Authentication</h3>
<p>You can supply Diffbot with basic authentication credentials or custom HTTP headers (see below) to access intranet pages or other sites that require a login.</p>

<h4>Basic Authentication</h4>
<p>To access pages that require a login/password (using <a href="http://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">basic access authentication</a>), include the username and password in your <code>url</code> parameter, e.g.: <code>url=http%3A%2F%2FUSERNAME:PASSWORD@www.diffbot.com</code>.</p>

<h3 id="customheaders">Custom HTTP Headers</h3>
<p>You can supply Diffbot APIs with custom HTTP headers that will be passed along when making requests to third-party sites. These can be used to define specific Referer, User-Agent, Cookie or any other values.</p>
<p>Custom headers should be sent as HTTP headers in your request to <code>https://api.diffbot.com</code>, and prepended with <code>X-Forward-</code>.</p>
<p>For instance, to send custom <code>User-Agent</code>, <code>Referer</code> and <code>My-Custom-Header</code> header values:</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Desired Header</th>
<th>Send to api.diffbot.com</th>
</tr></thead>
<tbody>
<tr>
<td><code>User-Agent:Diffbot</code></td>
<td><code>X-Forward-User-Agent:Diffbot</code></td>
</tr>
<tr>
<td><code>Referer:diffbot.com</code></td>
<td><code>X-Forward-Referer:diffbot.com</code></td>
</tr>
<tr>
<td><code>My-Custom-Header:CustomValue</code></td>
<td><code>X-Forward-My-Custom-Header:CustomValue</code></td>
</tr>
</tbody>
</table>

<h3 id="x-evaluate">Custom Javascript</h3>
<div class="alert">This functionality is currently in beta.</div>
<p>Using the <code>X-Evaluate</code> custom header (sent as <code>X-Forward-X-Evaluate</code>), you can inject your own Javascript code into web pages. Custom Javascript will be executed once the DOM has loaded.</p>
<p>Custom Javascript should be provided as a text string and contained in its own function. You must also include the special functions <code>start()</code> and <code>end()</code> to indicate the beginning and end of your custom script. Once <code>end()</code> fires, the updated document will be processed by your chosen extraction API.</p>
<p>It's recommended that your <code>end()</code> function be offset using <code>setTimeout</code> (see <a href="http://www.w3schools.com/js/js_timing.asp" target="_blank">JavaScript Timing Events</a>) in order to accommodate your primary function processing. Additionally, if your custom Javascript requires access to Ajax-delivered content, it may be necessary to offset your entire function using <code>setTimeout</code> in order to delay the start of your processing.</p>
<p>The following sample <code>X-Evaluate</code> header waits one-half second after the DOM has loaded, enacts a click on the <code>a.loadMore</code> element, then waits 800 milliseconds before signaling the <code>end()</code>:</p>


```text
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
```



<p>Delivered as a string value as a custom header:</p>


```text
"X-Forward-X-Evaluate": "function() {start();setTimeout(function(){var loadMoreNode=document.querySelector('a.loadMore');if (loadMoreNode != null) {loadMoreNode.click();setTimeout(function(){end();}, 800);} else {end();}},500);}"
```



<h3 id="posting">Posting Content</h3>
<p>If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to your Custom API endpoint for analysis:
</p>


```text
https://api.diffbot.com/v3/yourcustomapi?token=...&amp;url=...
```


<p>Please note that the <code>url</code> argument is still required, and will be used to resolve any relative links contained in the markup.</p>
<p>Provide the content to analyze as your POST body, and specify the <code>Content-Type</code> header as <code>text/html</code>.</p>
<p><strong>HTML Post Sample</strong>:</p>
  

```text
curl -H "Content-Type: text/html" -d '&lt;html&gt;&lt;body&gt;&lt;h2&gt;A Pair of Jeans&lt;/h2&gt;&lt;div&gt;Price: $31.99&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;' https://api.diffbot.com/v3/yourcustomapi?token=...&amp;url=http%3A%2F%2Fstore.diffbot.com
```



</div>
</div>