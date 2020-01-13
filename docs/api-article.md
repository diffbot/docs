---
id: api-article
title: Article Extraction API
sidebar_label: Article Extraction API
todo: Modify links to old API docs
---

<div id="docBody">

<p>The Article API is used to extract clean article text and other data from news articles, blog posts and other text-heavy pages. Retrieve the full-text, cleaned and <a href="html/">normalized HTML</a>, related images and videos, author, date, tags—automatically, from any article on any site.</p>


<h3 id="request">Request</h3>
<p>To use the Article API, perform a HTTP GET request on the following endpoint:</p>
  

```text
https://api.diffbot.com/v3/article
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
<td class=" default"><div>Web page URL of the article to process (URL encoded)</div></td>
</tr>

<tr>
<td colspan="2" class="header">Optional arguments</td>
</tr>
<tr>
<td class=""><code>fields</code></td>
<td class=" optional"><div>Used to specify optional fields to be returned by the Article API. See the <a href="#fields">Fields</a> section below.</div></td>
</tr>
<tr>
<td class=""><code>paging</code></td>
<td class=" optional"><div>Pass <code>paging=false</code> to disable automatic concatenation of multiple-page articles. (By default, Diffbot will concatenate up to 20 pages of a single article.) <a href="guides-multi-page-articles-discussions">More on automatic concatenation</a>.</div></td>
</tr>
<tr>
<td class=""><code>maxTags</code></td>
<td class=" optional"><div>Set the maximum number of automatically-generated tags to return. By default a maximum of ten tags will be returned.</div></td>
</tr>
<tr>
<td class=""><code>tagConfidence</code></td>
<td class=" optional"><div>Set the minimum relevance <code>score</code> of tags to return, between 0.0 and 1.0. By default only tags with a score equal to or above 0.5 will be returned.</div></td>
</tr>
<tr>
<td class=""><code>discussion</code></td>
<td class=" optional"><div>Pass <code>discussion=false</code> to disable automatic extraction of article comments. See <a href="#discussion">below</a>.</div></td>
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

<h4>The fields argument</h4>
<p>Use the <code>fields</code> argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or <code>*</code> to return all sub-fields.</p>
<p>For example, to return <code>links</code> and <code>meta</code> (in addition to the default fields), your &amp;fields argument would be:</p>
  

```text
&amp;fields=links,meta
```




<h3 id="response">Response</h3>
<p>The Article API returns data in JSON format.</p>
<p>Each V3 response includes a <code>request</code> object (which returns request-specific metadata), and an <code>objects</code> array, which will include the extracted information for all objects on a submitted page. At the moment, <strong>only a single object</strong> will be returned for Article API requests.</p>
<p>Objects in the Article API's <code>objects</code> array will include the following fields:</p>


<!--{fields}--><table class="controls table table-bordered" id="fields" border="0" cellpadding="5">
<thead><tr>
<th>Field</th>
<th>Description</th>
</tr></thead>

<tr>
<td class=""><code>type</code></td>
<td class=" default"><div>Type of object (always <code>article</code>).</div></td>
</tr>
<tr>
<td class=""><code>title</code></td>
<td class=" default"><div>Title of the article.</div></td>
</tr>
<tr>
<td class=""><code>text</code></td>
<td class=" default"><div>Full text of the article.</div></td>
</tr>
<tr>
<td class=""><code>html</code></td>
<td class=" default"><div>Diffbot-normalized HTML of the extracted article. Please see the <a href="api-article-html">HTML Specification</a> for a breakdown of elements and attributes returned.</div></td>
</tr>
<tr>
<td class=""><code>date</code></td>
<td class=" default"><div>Date of extracted article, normalized in most cases to <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3">RFC 1123 (HTTP/1.1)</a>.</div></td>
</tr>
<tr>
<td class=""><code>estimatedDate</code></td>
<td class=" default"><div>If an article's date is ambiguous, Diffbot will attempt to estimate a more specific timestamp using various factors. This will not be generated for articles older than two days, or articles without an identified <code>date</code>.</div></td>
</tr>
<tr>
<td class=""><code>author</code></td>
<td class=" default"><div>Article author.</div></td>
</tr>
<tr>
<td class=""><code>authorUrl</code></td>
<td class=" default"><div>URL of the author profile page, if available.</div></td>
</tr>
<tr>
<td class=""><code>discussion</code></td>
<td class=" default"><div>Article comments, as extracted by the Diffbot Discussion API. See <a href="#discussion">below</a>.</div></td>
</tr>
<tr>
<td class=""><code>humanLanguage</code></td>
<td class=" default"><div>Returns the (spoken/human) language of the submitted page, using two-letter <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">ISO 639-1 nomenclature</a>.</div></td>
</tr>
<tr>
<td class=""><code>numPages</code></td>
<td class=" default"><div>Number of pages automatically concatenated to form the <code>text</code> or <code>html</code> response. By default, Diffbot will automatically concatenate up to 20 pages of an article. <a href="guides-multi-page-articles-discussions">More on automatic concatenation</a>.</div></td>
</tr>
<tr>
<td class=""><code>nextPages</code></td>
<td class=" default"><div>Array of all page URLs concatenated in a multipage article. <a href="guides-multi-page-articles-discussions">More on automatic concatenation</a>.</div></td>
</tr>
<tr>
<td class=""><code>siteName</code></td>
<td class=" default"><div>The plain-text name of the site (e.g. <code>The New York Times</code> or <code>Diffbot</code>). If no site name is automatically determined, the root domain (<code>diffbot.com</code>) will be returned.</div></td>
</tr>
<tr>
<td class=""><code>publisherRegion</code></td>
<td class=" default"><div>If known, the region of the article publication.</div></td>
</tr>
<tr>
<td class=""><code>publisherCountry</code></td>
<td class=" default"><div>If known, the country of the article publication.</div></td>
</tr>
<tr>
<td class=""><code>pageUrl</code></td>
<td class=" default"><div>URL of submitted page / page from which the article is extracted.</div></td>
</tr>
<tr>
<td class=""><code>resolvedPageUrl</code></td>
<td class=" default"><div>Returned if the <code>pageUrl</code> redirects to another URL.</div></td>
</tr>
<tr>
<td class="parent"><code>tags</code></td>
<td class="parent default"><div>Array of tags/entities, generated from analysis of the extracted <code>text</code> and cross-referenced with <a href="http://wiki.dbpedia.org/About" target="_new">DBpedia</a> and other data sources. Language-specific tags will be returned if the source text is in English, Chinese, French, German, Spanish or Russian.</div></td>
</tr>
<tr>
<td class="tags indent"><code>label</code></td>
<td class="tags indent default"><div>Name of the entity or tag.</div></td>
</tr>
<tr>
<td class="tags indent"><code>count</code></td>
<td class="tags indent default"><div>Number of appearances the entity makes within the text content.</div></td>
</tr>
<tr>
<td class="tags indent"><code>score</code></td>
<td class="tags indent default"><div>Rating of the entity's relevance to the overall text content (range of 0 to 1) based on various factors.</div></td>
</tr>
<tr>
<td class="tags indent"><code>rdfTypes</code></td>
<td class="tags indent default"><div>If the entity can be represented by multiple resources, all of the possible URIs will be returned.</div></td>
</tr>
<tr>
<td class="tags indent"><code>type</code></td>
<td class="tags indent default"><div>This legacy field is a simplified precursor to <code>rdfTypes</code>, and will return either <code>organization</code> or <code>person</code> if the entity is either of those types.</div></td>
</tr>
<tr>
<td class="tags indent"><code>uri</code></td>
<td class="tags indent default"><div>Link to the primary Diffbot entity for this tag in the <a href="https://www.diffbot.com/knowledge-graph/">Diffbot Knowledge Graph</a>. On older articles, this might be the URI to the entity at DBpedia or another data source, but in most cases it will lead to Diffbot's KG entry which will contain more information about the tag.</div></td>
</tr>
<tr>
<td class="parent"><code>images</code></td>
<td class="parent default"><div>Array of images, if present within the article body.</div></td>
</tr>
<tr>
<td class="images indent"><code>url</code></td>
<td class="images indent default"><div>Fully resolved link to image. If the image <code>SRC</code> is encoded as base64 data, the complete data URI will be returned.</div></td>
</tr>
<tr>
<td class="images indent"><code>title</code></td>
<td class="images indent default"><div>Description or caption of the image.</div></td>
</tr>
<tr>
<td class="images indent"><code>height</code></td>
<td class="images indent default"><div>Height of image as (re-)sized via browser/CSS.</div></td>
</tr>
<tr>
<td class="images indent"><code>width</code></td>
<td class="images indent default"><div>Width of image as (re-)sized via browser/CSS.</div></td>
</tr>
<tr>
<td class="images indent"><code>naturalHeight</code></td>
<td class="images indent default"><div>Raw image height, in pixels.</div></td>
</tr>
<tr>
<td class="images indent"><code>naturalWidth</code></td>
<td class="images indent default"><div>Raw image width, in pixels.</div></td>
</tr>
<tr>
<td class="images indent"><code>primary</code></td>
<td class="images indent default"><div>Returns <code>true</code> if image is identified as primary based on visual analysis.</div></td>
</tr>
<tr>
<td class="images indent"><code>diffbotUri</code></td>
<td class="images indent default"><div>Internal ID used for indexing.</div></td>
</tr>
<tr>
<td class="parent"><code>videos</code></td>
<td class="parent default"><div>Array of videos, if present within the article body.</div></td>
</tr>
<tr>
<td class="videos indent"><code>url</code></td>
<td class="videos indent default"><div>Fully resolved link to source video content.</div></td>
</tr>
<tr>
<td class="videos indent"><code>naturalHeight</code></td>
<td class="videos indent default"><div>Source video height, in pixels, if available.</div></td>
</tr>
<tr>
<td class="videos indent"><code>naturalWidth</code></td>
<td class="videos indent default"><div>Source video width, in pixels, if available.</div></td>
</tr>
<tr>
<td class="videos indent"><code>primary</code></td>
<td class="videos indent default"><div>Returns <code>true</code> if video is identified as primary based on visual analysis.</div></td>
</tr>
<tr>
<td class="videos indent"><code>diffbotUri</code></td>
<td class="videos indent default"><div>Internal ID used for indexing.</div></td>
</tr>
<tr>
<td class=""><code>breadcrumb</code></td>
<td class=" default"><div>Returns a top-level array (<code>breadcrumb</code>) of URLs and link text from page breadcrumbs.</div></td>
</tr>
<tr>
<td class=""><code>diffbotUri</code></td>
<td class=" default"><div>Unique object ID. The <code>diffbotUri</code> is generated from the values of various Article fields and uniquely identifies the object. This can be used for deduplication.</div></td>
</tr>

<tr>
<td colspan="2" class="header">Optional fields, available using <code>fields=</code> argument</td>
</tr>
<tr>
<td class=""><code>quotes</code></td>
<td class=" optional"><div>Returns quotes found in the article text and who said them. For English-language text only.</div></td>
</tr>
<tr>
<td class=""><code>sentiment</code></td>
<td class=" optional"><div>Returns the sentiment score of the analyzed article text, a value ranging from -1.0 (very negative) to 1.0 (very positive). For English-language text only.</div></td>
</tr>
<tr>
<td class=""><code>links</code></td>
<td class=" optional"><div>Returns a top-level object (<code>links</code>) containing all hyperlinks found on the page.</div></td>
</tr>
<tr>
<td class=""><code>meta</code></td>
<td class=" optional"><div>Returns a top-level object (<code>meta</code>) containing the full contents of page <code>meta</code> tags, including sub-arrays for <a href="http://ogp.me/" target="_new">OpenGraph</a> tags, <a href="https://dev.twitter.com/docs/cards/markup-reference" target="_new">Twitter Card</a> metadata, <a href="http://www.schema.org" target="_new">schema.org</a> microdata, and -- if available -- <a href="http://www.oembed.com" target="_new">oEmbed</a> metadata.</div></td>
</tr>
<tr>
<td class=""><code>querystring</code></td>
<td class=" optional"><div>Returns any key/value pairs present in the URL querystring. Items without a discrete value will be returned as <code>true</code>.</div></td>
</tr>
</table>
<!--{endfields}-->
<h3 id="discussion">Comment Extraction</h3>
<p>By default the Article API will attempt to extract comments from article pages, using integrated functionality from the Diffbot Discussion API. Comment data will be returned in the <code>discussion</code> object (nested within the primary article object). The full syntax for discussion data is available in the <a href="api-discussion">Discussion API documentation</a>.</p>

<p>Discussion extraction can be disabled using the argument <code>discussion=false</code>. Note that if a page has recently been processed by Diffbot, cached comments may be returned even if <code>discussion=false</code> is passed.</p>

<h3 id="semantria">Advanced Text Analysis Powered by Semantria</h3>
<p></p>
<div class="pull-right span3"><img src="/img/semantria.png"></div>Our <a href="guides-semantria">native integration with Semantria</a> optionally allows extracted article content to be fully processed for categorization, entity and keyword extraction, and sentiment analysis. See <a href="api-semantria">documentation</a> for information on how to integrate your Semantria account with Diffbot's Article API.

<h3 id="sampleresponse">Example Response</h3>
<p>The following request --</p>
  

```text
https://api.diffbot.com/v3/article?token=...&amp;url=http%3A%2F%2Fblog.diffbot.com%2Fdiffbots-new-product-api-teaches-robots-to-shop-online
```


<p>-- will result in this API response:</p>

<!--{codesample1}-->

```text
{
  "request": {
    "pageUrl": "http://blog.diffbot.com/diffbots-new-product-api-teaches-robots-to-shop-online",
    "api": "article",
    "version": 3,
    "resolvedPageUrl": "http://blog.diffbot.com/diffbots-new-product-api-teaches-robots-to-shop-online/"
  },
  "objects": [
    {
      "date": "Wed, 31 Jul 2013 00:00:00 GMT",
      "images": [
        {
          "naturalHeight": 360,
          "width": 0,
          "diffbotUri": "image|3|1069194852",
          "url": "http://img.youtube.com/vi/lfcri5ungRo/0.jpg",
          "naturalWidth": 480,
          "primary": true,
          "height": 0
        }
      ],
      "author": "John Davi",
      "estimatedDate": "Wed, 31 Jul 2013 00:00:00 GMT",
      "publisherRegion": "North America",
      "icon": "http://i1.wp.com/blog.diffbot.com/wp-content/uploads/cropped-Artboard-1.png?fit=180%2C180",
      "diffbotUri": "article|3|-820542508",
      "siteName": "Diffblog",
      "videos": [
        {
          "diffbotUri": "video|3|-576904516",
          "url": "http://www.youtube.com/embed/lfcri5ungRo?version=3&amp;rel=1&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent",
          "primary": true
        }
      ],
      "type": "article",
      "title": "Diffbot's New Product API Teaches Robots to Shop Online",
      "tags": [
        {
          "score": 0.76,
          "count": 6,
          "label": "Application programming interface",
          "uri": "http://dbpedia.org/resource/Application_programming_interface",
          "rdfTypes": [
            "http://www.w3.org/2002/07/owl#Thing"
          ]
        },
        {
          "score": 0.66,
          "count": 2,
          "label": "Data model",
          "uri": "http://dbpedia.org/resource/Data_model"
        },
        {
          "score": 0.64,
          "count": 1,
          "label": "Diffbot",
          "uri": "http://dbpedia.org/resource/Diffbot",
          "rdfTypes": [
            "http://dbpedia.org/ontology/Company",
            "http://dbpedia.org/ontology/Organisation",
            "http://dbpedia.org/ontology/Agent",
            "http://www.w3.org/2002/07/owl#Thing"
          ]
        },
        {
          "score": 0.5,
          "count": 1,
          "label": "Web crawler",
          "uri": "http://dbpedia.org/resource/Web_crawler",
          "rdfTypes": [
            "http://www.w3.org/2002/07/owl#Thing"
          ]
        }
      ],
      "publisherCountry": "Diffbot HQ",
      "humanLanguage": "en",
      "authorUrl": "http://blog.diffbot.com/author/johndavi/",
      "pageUrl": "http://blog.diffbot.com/diffbots-new-product-api-teaches-robots-to-shop-online",
      "html": "&lt;p&gt;Diffbot&amp;rsquo;s human wranglers are proud today to announce the release of our newest product: an API for&amp;hellip; products!&lt;/p&gt;\n&lt;p&gt;The &lt;a href=\"http://www.diffbot.com/products/automatic/product\"&gt;Product API&lt;/a&gt; can be used for extracting clean, structured data from any e-commerce product page. It automatically makes available all the product data you&amp;rsquo;d expect: price, discount/savings amount, shipping cost, product description, any relevant product images, SKU and/or other product IDs.&lt;/p&gt;\n&lt;p&gt;Even cooler: pair the Product API with &lt;a href=\"http://www.diffbot.com/products/crawlbot\"&gt;Crawlbot&lt;/a&gt;, our intelligent site-spidering tool, and let Diffbot determine which pages are products, then automatically structure the entire catalog. Here&amp;rsquo;s a quick demonstration of Crawlbot at work:&lt;/p&gt;\n&lt;figure&gt;&lt;iframe frameborder=\"0\" src=\"http://www.youtube.com/embed/lfcri5ungRo?version=3&amp;rel=1&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent\"&gt;&lt;/iframe&gt;&lt;/figure&gt;\n&lt;p&gt;We&amp;rsquo;ve developed the Product API over the course of two years, building upon our core vision technology that&amp;rsquo;s extracted structured data from billions of web pages, and training our machine learning systems using data from tens of thousands of unique shopping sites. We can&amp;rsquo;t wait for you to try it out.&lt;/p&gt;\n&lt;p&gt;What are you waiting for? Check out the &lt;a href=\"http://www.diffbot.com/products/automatic/product\"&gt;Product API documentation&lt;/a&gt; and dive on in! If you need a token, check out our &lt;a href=\"http://www.diffbot.com/pricing\"&gt;pricing and plans&lt;/a&gt; (including our Free plan).&lt;/p&gt;\n&lt;p&gt;Questions? Hit us up at &lt;a href=\"mailto:support@diffbot.com\"&gt;support@diffbot.com&lt;/a&gt;.&lt;/p&gt;",
      "text": "Diffbot's human wranglers are proud today to announce the release of our newest product: an API for\u2026 products!\nThe Product API can be used for extracting clean, structured data from any e-commerce product page. It automatically makes available all the product data you'd expect: price, discount/savings amount, shipping cost, product description, any relevant product images, SKU and/or other product IDs.\nEven cooler: pair the Product API with Crawlbot, our intelligent site-spidering tool, and let Diffbot determine which pages are products, then automatically structure the entire catalog. Here's a quick demonstration of Crawlbot at work:\nWe've developed the Product API over the course of two years, building upon our core vision technology that's extracted structured data from billions of web pages, and training our machine learning systems using data from tens of thousands of unique shopping sites. We can't wait for you to try it out.\nWhat are you waiting for? Check out the Product API documentation and dive on in! If you need a token, check out our pricing and plans (including our Free plan).\nQuestions? Hit us up at support@diffbot.com.",
      "resolvedPageUrl": "http://blog.diffbot.com/diffbots-new-product-api-teaches-robots-to-shop-online/"
    }
  ]
}
```


<!--{endcodesample1}-->

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
<p>If your content is not publicly available (e.g., behind a firewall), you can POST markup or plain text directly to the Article API endpoint for analysis:
</p>


```text
https://api.diffbot.com/v3/article?token=...&amp;url=...
```


<p>Please note that if you submit HTML, the <code>url</code> argument is still required, and will be used to resolve any relative links contained in the markup.</p>
<p>Provide the content to analyze as your POST body, and specify the <code>Content-Type</code> header as <code>text/html</code> (for full markup) or <code>text/plain</code> (for text-only).</p>
<p><strong>HTML Post Sample</strong>:</p>
  

```text
curl -H "Content-Type: text/html" -d '&lt;html&gt;&lt;body&gt;&lt;p&gt;Now is the time for all good robots to come to the aid of their-- oh never mind, run!&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;' 'https://api.diffbot.com/v3/article?token=...&amp;url=http%3A%2F%2Fblog.diffbot.com'
```


<p><strong>Plaintext Post Sample</strong>:</p>
  

```text
curl -H "Content-Type: text/plain" -d 'Now is the time for all good robots to come to the aid of their-- oh never mind, run!' 'https://api.diffbot.com/v3/article?token=...&amp;fields=tags,text'
```



</div>