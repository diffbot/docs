---
id: api-image
title: Image Extraction API
sidebar_label: Image Extraction API
---

<div id="docBody">

<p>The Image API identifies the primary image(s) of a submitted web page and returns comprehensive information and metadata for each image.</p>
            
<h3 id="request">Request</h3>
<p>To use the Image API, perform a HTTP GET request on the following endpoint:</p>
  

```text
https://api.diffbot.com/v3/image
```


<p>Provide the following arguments:</p>

<!--{arguments}--><table class="controls table table-bordered" id="arguments" border="0" cellpadding="5">
<thead><tr>
<th>Argument</th>
<th>Description</th>
</tr></thead>

<tr>
<td class=""><code>token</code></td>
<td class=" default"><div>Developer token</div></td>
</tr>
<tr>
<td class=""><code>url</code></td>
<td class=" default"><div>Web page URL of the image to process (URL encoded)</div></td>
</tr>

<tr>
<td colspan="2" class="header">Optional arguments</td>
</tr>
<tr>
<td class=""><code>fields</code></td>
<td class=" optional"><div>Used to specify optional fields to be returned by the Image API. See the <a href="#fields">Fields</a> section below.</div></td>
</tr>
<tr>
<td class=""><code>timeout</code></td>
<td class=" optional"><div>Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000).</div></td>
</tr>
<tr>
<td class=""><code>callback</code></td>
<td class=" optional"><div>Use for jsonp requests. Needed for cross-domain ajax.</div></td>
</tr>
</table>
<!--{endarguments}-->

<h4 id="fields">The fields argument</h4>
<p>Use the <code>fields</code> argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or <code>*</code> to return all sub-fields.</p>
<p>For example, to return <code>meta</code> (in addition to the default fields), your &amp;fields argument would be:</p>
  

```text
&amp;fields=meta
```


<h3 id="response">Response</h3>
<p>The Image API returns data in JSON format.</p>
<p>Each V3 response includes a <code>request</code> object (which returns request-specific metadata), and an <code>objects</code> array, which will include the extracted information for all images on a submitted page.</p>
<p>Objects in the Image API's <code>objects</code> array will include the following fields:</p>

<!--{fields}--><table class="controls table table-bordered" id="fields" border="0" cellpadding="5">
<thead><tr>
<th>Field</th>
<th>Description</th>
</tr></thead>

<tr>
<td class=""><code>type</code></td>
<td class=" default"><div>Type of object (always <code>image</code>).</div></td>
</tr>
<tr>
<td class=""><code>url</code></td>
<td class=" default"><div>Direct link to image file.</div></td>
</tr>
<tr>
<td class=""><code>title</code></td>
<td class=" default"><div>Title or caption of the image, if available.</div></td>
</tr>
<tr>
<td class=""><code>naturalHeight</code></td>
<td class=" default"><div>Raw image height, in pixels.</div></td>
</tr>
<tr>
<td class=""><code>naturalWidth</code></td>
<td class=" default"><div>Raw image width, in pixels.</div></td>
</tr>
<tr>
<td class=""><code>humanLanguage</code></td>
<td class=" default"><div>Returns the (spoken/human) language of the submitted page, using two-letter <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">ISO 639-1 nomenclature</a>.</div></td>
</tr>
<tr>
<td class=""><code>anchorUrl</code></td>
<td class=" default"><div>If the image is hyperlinked, returns the destination URL.</div></td>
</tr>
<tr>
<td class=""><code>pageUrl</code></td>
<td class=" default"><div>URL of submitted page / page from which the image is extracted.</div></td>
</tr>
<tr>
<td class=""><code>resolvedPageUrl</code></td>
<td class=" default"><div>Returned if the <code>pageUrl</code> redirects to another URL.</div></td>
</tr>
<tr>
<td class=""><code>xpath</code></td>
<td class=" default"><div>XPath expression identifying the image node.</div></td>
</tr>
<tr>
<td class=""><code>diffbotUri</code></td>
<td class=" default"><div>Unique object ID. The <code>diffbotUri</code> is generated from the values of various Image fields and uniquely identifies the object. This can be used for deduplication.</div></td>
</tr>

<tr>
<td colspan="2" class="header">Optional fields, available using <code>fields=</code> argument</td>
</tr>
<tr>
<td class=""><code>displayHeight</code></td>
<td class=" optional"><div>Height of image as presented in the browser (and as sized via browser/CSS, if resized).</div></td>
</tr>
<tr>
<td class=""><code>displayWidth</code></td>
<td class=" optional"><div>Width of image as presented in the browser (and as sized via browser/CSS, if resized).</div></td>
</tr>
<tr>
<td class=""><code>links</code></td>
<td class=" optional"><div>Returns a top-level object (<code>links</code>) containing all hyperlinks found on the page.</div></td>
</tr>
<tr>
<td class=""><code>meta</code></td>
<td class=" optional"><div>Comma-separated list of image-embedded metadata (e.g., EXIF, XMP, ICC Profile), if available within the image file.</div></td>
</tr>
<tr>
<td class=""><code>querystring</code></td>
<td class=" optional"><div>Returns any key/value pairs present in the URL querystring. Items without a discrete value will be returned as <code>true</code>.</div></td>
</tr>
<tr>
<td class=""><code>breadcrumb</code></td>
<td class=" optional"><div>Returns a top-level array (<code>breadcrumb</code>) of URLs and link text from page breadcrumbs.</div></td>
</tr>
</table>
<!--{endfields}-->

<h3 id="sampleresponse">Example Response</h3>
<div class="indent">
  

```text

{
  "request": {
    "pageUrl": "http://www.diffbot.com/products",
    "api": "image",
    "options": [],
    "fields": "",
    "version": 3
  },
  {
  "objects": [
    {
      "title": "Diffy, climbing a mountain",
      "naturalHeight": 1158,
      "diffbotUri": "image|3|-1897071612",
      "pageUrl": "http://www.diffbot.com/products",
      "humanLanguage": "en",
      "naturalWidth": 950,
      "date": "Oct 19, 2013",
      "type": "image",
      "url": "http://www.diffbot.com/images/image_diffy_sample.png",
      "xpath": "/HTML/BODY/DIV[@class='main']/DIV[@id='primaryImage']/IMG"
    },
    {
      "title": "Diffy atop said mountain",
      "naturalHeight": 1120,
      "diffbotUri": "image|3|-1221792290",
      "pageUrl": "http://www.diffbot.com/products",
      "humanLanguage": "en",
      "naturalWidth": 920,
      "anchorUrl": "http://www.diffbot.com",
      "date": "Oct 21, 2013",
      "type": "image",
      "url": "http://www.diffbot.com/images/image_atopmountain_sample.png",
      "xpath": "/HTML/BODY/DIV[@class='main']/DIV[@id='secondaryImage']/A/IMG"
    },
  ],
}
```


</div>

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
<p>If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to the Image API endpoint for analysis:
</p>


```text
https://api.diffbot.com/v3/image?token=...&amp;url=...
```


<p>Please note that the <code>url</code> argument is still required, and will be used to resolve any relative links contained in the markup.</p>
<p>Provide the content to analyze as your POST body, and specify the <code>Content-Type</code> header as <code>text/html</code>.</p>
<p><strong>HTML Post Sample</strong>:</p>
  

```text

curl -H "Content-Type: text/html" -d '&lt;html&gt;&lt;body&gt;&lt;h2&gt;Diffy the Robot&lt;/h2&gt;&lt;div&gt;&lt;img src="diffy-b.png"&gt;&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;' 'https://api.diffbot.com/v3/image?token=...&amp;url=http%3A%2F%2Fwww.diffbot.com'
```




</div>