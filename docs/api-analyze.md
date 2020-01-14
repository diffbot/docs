---
id: api-analyze
title: Analyze API
sidebar_label: Analyze API
---

<div id="docBody">
<p>The Diffbot Analyze API visually analyzes a web page, identifies its "page-type," and determines which Diffbot extraction API (if any) is appropriate. Pages that match a supported extraction API -- articles, discussions, images, products or videos -- <strong>will be automatically extracted</strong> and returned in the Analyze API response.</p>
<p>Pages not currently supported by an extraction API will return "other."</p>

<h3 id="request">Request</h3>
<div class="indent">
<p>To use the Analyze API, perform a HTTP GET request on the following endpoint:</p>
  

```text
https://api.diffbot.com/v3/analyze?token=...&amp;url=...
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
<td class=" default"><div>Web page URL of the analyze to process (URL encoded)</div></td>
</tr>

<tr>
<td colspan="2" class="header">Optional arguments</td>
</tr>
<tr>
<td class=""><code>mode</code></td>
<td class=" optional"><div>By default the Analyze API will fully extract all pages that match an existing Automatic API -- articles, products or image pages. Set <code>mode</code> to a specific page-type (e.g., <code>mode=article</code>) to extract content only from that specific page-type. All other pages will simply return the default Analyze fields.</div></td>
</tr>
<tr>
<td class=""><code>fallback</code></td>
<td class=" optional"><div>Force any non-extracted pages (those with a <code>type</code> of "other") through a specific API. For example, to route all "other" pages through the Article API, pass <code>&amp;fallback=article</code>. Pages that utilize this functionality will return a <code>fallbackType</code> field at the top-level of the response and a <code>originalType</code> field within each extracted object, both of which will indicate the fallback API used.</div></td>
</tr>
<tr>
<td class=""><code>fields</code></td>
<td class=" optional"><div>Specify optional fields to be returned from any fully-extracted pages, e.g.: <code>&amp;fields=querystring,links</code>.<br><br>See available fields within each API's individual documentation pages.</div></td>
</tr>
<tr>
<td class=""><code>discussion</code></td>
<td class=" optional"><div>Pass <code>discussion=false</code> to disable automatic extraction of comments or reviews from pages identified as articles or products. This will not affect pages identified as discussions.</div></td>
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


</div>
<h3 id="response">Response</h3>
<p>The Analyze API returns data in JSON format.</p>
<p>Each response includes a <code>request</code> object (which returns request-specific metadata), and an <code>objects</code> array, which will include the extracted information for all objects on a submitted page.</p>
<p>If the Analyze API identifies the submitted page as an article, discussion thread, product or image, the associated object(s) from the page will be returned automatically in the <code>objects</code> array.</p>
<p>The default fields returned:</p>

<!--{fields}--><table class="controls table table-bordered" id="fields" border="0" cellpadding="5">
<thead><tr>
<th>Field</th>
<th>Description</th>
</tr></thead>

<tr>
<td class=""><code>title</code></td>
<td class=" default"><div>Title of the page.</div></td>
</tr>
<tr>
<td class=""><code>type</code></td>
<td class=" default"><div>Page-type of the submitted URL, either <code>article</code>, <code>discussion</code>, <code>image</code>, <code>product</code>, <code>video</code> or -- if not a <a href="https://diffbot.com/products/automatic">supported page</a> -- <code>other</code>.</div></td>
</tr>
<tr>
<td class=""><code>humanLanguage</code></td>
<td class=" default"><div>Returns the (spoken/human) language of the submitted page, using two-letter <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">ISO 639-1 nomenclature</a>.</div></td>
</tr>

<tr>
<td colspan="2" class="header">Optional fields, available using <code>fields=</code> argument</td>
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
<tr>
<td class=""><code>breadcrumb</code></td>
<td class=" optional"><div>Returns a top-level array (<code>breadcrumb</code>) of URLs and link text from page breadcrumbs.</div></td>
</tr>
</table>
<!--{endfields}-->


<h3 id="sampleresponse">Example Response</h3>
<p>Because the below classified page is an article, its full contents are extracted using the Article API:</p>
<div class="indent">
  

```text
{
  "request": {
    "pageUrl": "http://tcrn.ch/Jw7ZKw",
    "resolvedPageUrl": "http://techcrunch.com/2012/05/31/diffbot-raises-2-million-seed-round-for-web-content-extraction-technology/",
    "api": "analyze",
    "options": [],
    "fields": "",
    "version": 3
  },
  "objects": [
    {
      "type": "article",
      "resolvedPageUrl": "http://techcrunch.com/2012/05/31/diffbot-raises-2-million-seed-round-for-web-content-extraction-technology/",
      "pageUrl": "http://tcrn.ch/Jw7ZKw",
      "human_language": "en",
      "text": "Diffbot , the super-geeky/awesome visual learning robot technology which aims to \"see\" the web the way that people do, is today announcing a new infusion of capital. The company has closed $2 million in funding from a number of technology veterans, including EarthLink founder Sky Dayton ; Andy Bechtolsheim , co-founder of Sun Microsystems; Joi Ito , Director of MIT Media Lab; Brad Garlinghouse , CEO of YouSendIt ( and formerly of TechCrunch parent company AOL ), Maynard Webb , Chairman of the Board at LiveOps, formerly eBay COO; Elad Gil , VP of Corporate Strategy at Twitter; Jonathan Heiliger , former VP of Technical Operations at Facebook; Redbeacon co-founder Aaron Lee ; and founder of VitalSigns Montgomery Kersten .\nMatrix Partners also participated in the round. Of the new investors, Sky Dayton will be the first to join Diffbot's board and will be taking an active role in the company, including plans to go hands-on with various Diffbot projects.\nLast August, the company publicly debuted its first APIs , which allow developers to build apps that can automatically extract meaning from web pages. For example, the Front Page API is able to analyze site homepages, and understands the difference between article text, headlines, bylines, ads, etc. The Article API can then extract clean article text, images and videos. Another example of Diffbot in action is the \"follow API,\" which can track the changes made to a website.\nToday, Diffbot has categorized the web into about 20 different page types, including homepages and article pages, which are the first two types it can now identity. Going forward, Diffbot plans train its bots to recognize all the other types of pages, including product pages, social networking profiles, recipe pages, review pages, and more.\nIts APIs have been put to use by AOL (again: disclosure, TC parent) in its news magazine AOL Editions , as well as by companies like Nuance , SocMetrics , and others. Diffbot says it's now processing 100 million API calls per month on behalf of its customers. Thousands of developers are using the APIs, the company notes, but paying customers are only in the \"tens.\" Correction: we're now told they have \"a lot more!\"\nDiffbot founder and CEO Michael Tung (aka \"Diffbot Mike\") says the new funding will be put towards new hires and expanding its resources. "More than that, we're receiving a huge vote of confidence from veterans who have built massive companies and understand the fine points of building for scale, maintaining uptime and delivering the absolute highest standards of service."\nTung is a patent attorney and Stanford PhD student who left the doctoral program to pursue Diffbot, thanks to seed funding from Stanford's incubator, StartX . Diffbot was StartX's first investment. With today's funding, Diffbot total raise is $2 million and change.",
      "title": "Diffbot Raises $2 Million Angel Round For Web Content Extraction Technology",
      "images": [
        {
        "primary": "true",
        "url": "http://tctechcrunch2011.files.wordpress.com/2012/05/diffbot_9.png?w=300"
        }
      ],
      "date": "Thu, 31 May 2012 07:00:00 GMT"
    }
}
  
```


</div>
<!--<p>If <code>&stats</code> is passed, you will receive a confidence breakdown across all possible page-types. The following shows the output from a YouTube page, which is most likely a "video" page in the <code>types</code> array:
<div class="indent">
  

```text
{
  "request": {
    "pageUrl": "pageUrl": "http://www.youtube.com/watch?v=VNv3EZEUgok",
    "api": "analyze",
    "options": [
      "stats"
    ],
    "fields": "",
    "version": 3
  },
  {
    "type": "other",
    "human_language": "en",
    "title": "Create a Custom API Using Diffbot's Custom API Toolkit",
    "stats": {
       "types": {
          "article": 0.12,
          "audio": 0.15,
          "chart": 0.01,
          "discussion": 0.03,
          "document": 0.04,
          "download": 0.01,
          "error": 0.00,
          "event": 0.00,
          "faq": 0.02,
          "frontpage": 0.12,
          "game": 0.01,
          "image": 0.02,
          "job": 0.02,
          "location": 0.08,
          "product": 0.09,
          "profile": 0.09,
          "recipe": 0.08,
          "reviewslist": 0.09,
          "serp": 0.06,
          "video": 0.93
        }
      },
  }
  
```


</div>
<h3 id="pagetypes">Page Types</h3>
<p>The "other" classification of page-types includes the following. To receive the confidence breakdown for each of these sub-types, you must request the <code>stats</code> field using <code>&fields=stats</code>.</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr><th>Page Type</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>audio</code></td><td>A music or audio player.</td></tr>
<tr><td><code>chart</code></td><td>A graph or chart, typically financial.</td></tr>
<tr><td><code>document</code></td><td>An embedded or downloadable document or slideshow.</td></tr>
<tr><td><code>download</code></td><td>A downloadable file.</td></tr>
<tr><td><code>error</code></td><td>Error page, e.g. 404. </td></tr>
<tr><td><code>event</code></td><td>A page detailing specific event information, e.g. time/date/location.</td></tr>
<tr><td><code>faq</code></td><td>A page of multiple frequently asked questions, or a single FAQ entry.</td></tr>
<tr><td><code>game</code></td><td>A playable game.</td></tr>
<tr><td><code>job</code></td><td>A job posting.</td></tr>
<tr><td><code>location</code></td><td>A page detailing location information, typically including an address and/or map.</td></tr>
<tr><td><code>profile</code></td><td>A person or user profile page.</td></tr>
<tr><td><code>recipe</code></td><td>Page detailing recipe instructions and ingredients.</td></tr>
<tr><td><code>reviewslist</code></td><td>A list of user reviews.</td></tr>
<tr><td><code>serp</code></td><td>A Search Engine Results Page</td></tr>
<tr><td><code>video</code></td><td>An individual video.</td></tr>
</tbody>
</table>

<h3>Training/Correcting the PageClassifier API</h3>
<p>To improve the PageClassifier you can POST corrected URLs and labels to the Diffbot Training API. To do so, prepare a POST to the following endpoint:</p>
  	

```text
http://www.diffbot.com/api/train/pageclassifier
```


<p>Provide the following parameters:</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr><th>parameter</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>token</code></td><td>Developer <a href="/pricing">token</a></td></tr>
<tr><td><code>url</code></td><td>URL to train or correct (URLEncoded)</td></tr>
<tr><td><code>label</code></td><td>The correct page-type from the above list, OR, if you simply know that the Page Classifier label is wrong, you may prepend this incorrect label with "not_" - so a page incorrectly classified as Article could be corrected as <code>not_article</code></td></tr>
</tbody>
</table>
<p>Example:</p>
  	

```text
curl -v -F "token=..." \
        -F "url=http://www.youtube.com/watch?v=waIBA6_0GQc" \
        -F "label=video" \
        http://www.diffbot.com/api/train/pageclassifier
```


<p>Or, to specify simply that a page is wrongly classified, use the <code>not_</code> convention:</p>
    

```text
curl -v -F "token=..." \
        -F "url=http://www.youtube.com/watch?v=waIBA6_0GQc" \
        -F "label=not_article" \
        http://www.diffbot.com/api/train/pageclassifier
```



-->
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
<p>If your content is not publicly available (e.g., behind a firewall), you can POST markup or plain text directly to the Analyze API endpoint for analysis. Note that the quality of analysis is dependent on many factors, among them the accessibility of page assets (images, CSS) and how reliant the page layout is on those that are unavailable.</p>
  

```text
https://api.diffbot.com/v3/analyze?token=...&amp;url=...
```


<p>Please note that the <code>url</code> argument is still required, and will be used to resolve any relative links contained in the markup.</p>
<p>Provide the content to analyze as your POST body, and specify the <code>Content-Type</code> header as <code>text/html</code>.</p>
<p><strong>HTML Post Sample</strong>:</p>
  

```text
curl -H "Content-Type: text/html" -d '&lt;html&gt;&lt;head&gt;&lt;title&gt;Something to Buy&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;h2&gt;A Pair of Jeans&lt;/h2&gt;&lt;div&gt;Price: $31.99&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;' 'https://api.diffbot.com/v3/analyze?token=...&amp;url=http%3A%2F%2Fstore.diffbot.com'
```



</div>