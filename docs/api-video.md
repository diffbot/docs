---
id: api-video
title: Video Extraction API
sidebar_label: Video Extraction API
---

<div id="docBody">


          <div class="tabbable">


        <div class="tab-content">
          <div class="tab-pane active" id="v3">
          <div class="alert">The Video API is currently in beta.</div>

            <p>The Video API automatically extracts detailed video information—including most metadata, thumbnail images, direct video URL and embed code—from nearly any video page or video platform on the web.</p>
            <h3 id="request">Request</h3>
  <p>To use the Video API, perform a HTTP GET request on the following endpoint:</p>
  <pre class="code">https://api.diffbot.com/v3/video</pre>
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
            <td class=" default"><div>Web page URL of the video to process (URL encoded)</div></td>
        </tr>

        <tr>
            <td colspan="2" class="header">Optional arguments</td>
        </tr>
        <tr>
            <td class=""><code>fields</code></td>
            <td class=" optional"><div>Used to specify optional fields to be returned by the Video API. See the <a href="#fields">Fields</a> section below.</div></td>
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

<!--  <h4 id="fields">The fields argument</h4>
  <p>Use the <code>fields</code> argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or <code>*</code> to return all sub-fields.</p>
-->
<h3 id="response">Response</h3>
  <p>Diffbot's V3 APIs return information about <strong>all</strong> identified objects on a submitted page.</p>
  <p>Each V3 response includes a <code>request</code> object (which returns request-specific metadata), and an <code>objects</code> array, which will include the extracted information for all objects on a submitted page.</p>
<p>Objects in the Product API's <code>objects</code> array will include the following fields:</p>

<!--{fields}--><table class="controls table table-bordered" id="fields" border="0" cellpadding="5">
	<thead><tr>
<th>Field</th>
<th>Description</th>
</tr></thead>

        <tr>
            <td class=""><code>type</code></td>
            <td class=" default"><div>Type of object (always <code>video</code>).</div></td>
        </tr>
        <tr>
            <td class=""><code>pageUrl</code></td>
            <td class=" default"><div>URL of submitted page / page from which the video is extracted.</div></td>
        </tr>
        <tr>
            <td class=""><code>resolvedPageUrl</code></td>
            <td class=" default"><div>Returned if the <code>pageUrl</code> redirects to another URL.</div></td>
        </tr>
        <tr>
            <td class=""><code>title</code></td>
            <td class=" default"><div>Title of the video.</div></td>
        </tr>
        <tr>
            <td class=""><code>text</code></td>
            <td class=" default"><div>Text description, if available, of the video.</div></td>
        </tr>
        <tr>
            <td class=""><code>url</code></td>
            <td class=" default"><div>Direct link to source video file, if available.</div></td>
        </tr>
        <tr>
            <td class=""><code>html</code></td>
            <td class=" default"><div>Embeddable HTML of the video (if available), typically an <code>IFRAME</code> or <code>VIDEO</code> object.</div></td>
        </tr>
        <tr>
            <td class=""><code>embedUrl</code></td>
            <td class=" default"><div>Embeddable URL, if available.</div></td>
        </tr>
        <tr>
            <td class=""><code>author</code></td>
            <td class=" default"><div>Video uploader or creator, if available.</div></td>
        </tr>
        <tr>
            <td class=""><code>date</code></td>
            <td class=" default"><div>Date of extracted video, normalized in most cases to <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3">RFC 1123 (HTTP/1.1)</a>.</div></td>
        </tr>
        <tr>
            <td class=""><code>duration</code></td>
            <td class=" default"><div>Duration in seconds of the Video.</div></td>
        </tr>
        <tr>
            <td class=""><code>viewCount</code></td>
            <td class=" default"><div>Number of Video views, if available on the page.</div></td>
        </tr>
        <tr>
            <td class=""><code>naturalHeight</code></td>
            <td class=" default"><div>Raw video height, if available, in pixels.</div></td>
        </tr>
        <tr>
            <td class=""><code>naturalWidth</code></td>
            <td class=" default"><div>Raw video width, if available, in pixels.</div></td>
        </tr>
        <tr>
            <td class="parent"><code>images</code></td>
            <td class="parent default"><div>Array of images, if present within the video.</div></td>
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
            <td class=""><code>mime</code></td>
            <td class=" default"><div>MIME type, if available, as specified by the Video's "Content-Type."</div></td>
        </tr>
        <tr>
            <td class=""><code>humanLanguage</code></td>
            <td class=" default"><div>Returns the (spoken/human) language of the submitted page, using two-letter <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">ISO 639-1 nomenclature</a>.</div></td>
        </tr>
        <tr>
            <td class=""><code>diffbotUri</code></td>
            <td class=" default"><div>Unique object ID. The <code>diffbotUri</code> is generated from the values of various Video fields and uniquely identifies the object. This can be used for deduplication.</div></td>
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
<div class="indent">
  <pre class="code">
{
  "request": {
    "pageUrl": "https://www.youtube.com/watch?v=VNv3EZEUgok",
    "api": "video",
    "version": 3
  },
  {
  "objects": [
    {
      "type": "video",
      "title": "Create a Custom API Using Diffbot's Custom API Toolkit",
      "text": "This demonstration shows how to create a completely custom API using Diffbot's Custom API Toolkit. In it we show how to extract the \"What's Hot\" / Trending links from http://www.mashable.com.",
      "pageUrl": "https://www.youtube.com/watch?v=VNv3EZEUgok",
      "embedUrl": "http://www.youtube.com/v/VNv3EZEUgok?autohide=1&amp;version=3",
      "humanLanguage": "en",
      "date": "Fri, 02 Aug 2013 07:00:00 GMT",
      "url": "https://r5---sn-qxo7sn7r.googlevideo.com/videoplayback?signature=3F99256DF92E9095B47FAC373A4BAADC5DBF3D36.D840BFEA083EE15085D0FE1F2F4C724551E7A4D7&amp;sver=3&amp;fexp=911305%2C912108%2C916944%2C930666%2C932404%2C940000%2C947209%2C947215%2C948124%2C948900%2C952302%2C952901%2C953912%2C957103%2C957201%2C958603&amp;ratebypass=yes&amp;requiressl=yes&amp;ipbits=0&amp;sparams=id%2Cip%2Cipbits%2Citag%2Cmm%2Cms%2Cmv%2Cratebypass%2Crequiressl%2Csource%2Cupn%2Cexpire&amp;key=yt5&amp;ip=146.148.32.139&amp;itag=22&amp;source=youtube&amp;mv=u&amp;ms=au&amp;mm=31&amp;mt=1415157849&amp;id=o-AJ5iG1T6_yn-_qUHjcNok6XqTznNX6LXeagB6-mm8XQM&amp;expire=1415179514&amp;upn=wMziid6h3DY",
      "author": "Diffbot",
      "html": "&lt;iframe width=\"459\" height=\"344\" src=\"http://www.youtube.com/embed/VNv3EZEUgok?feature=oembed\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
      "mime": "video/mp4",
      "duration": 343,
      "naturalWidth": 1280,
      "naturalHeight": 720,
      "viewCount": 1000
      "images": [
        {
          "title": "Create a Custom API Using Diffbot's Custom API Toolkit",
          "url": "http://i.ytimg.com/vi/VNv3EZEUgok/hqdefault.jpg",
        }
      ]
      "diffbotUri": "video|3|566075164",
    }
  ],
}</pre>
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

<p>Delivered as a string value as a custom header:</p>
<pre>"X-Forward-X-Evaluate": "function() {start();setTimeout(function(){var loadMoreNode=document.querySelector('a.loadMore');if (loadMoreNode != null) {loadMoreNode.click();setTimeout(function(){end();}, 800);} else {end();}},500);}"</pre>

<h3 id="posting">Posting Content</h3>
  <p>If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to the Product API endpoint for analysis:
  </p>
<pre class="code">https://api.diffbot.com/v3/video?token=...&amp;url=...</pre>
  <p>Please note that the <code>url</code> argument is still required, and will be used to resolve any relative links contained in the markup.</p>
  <p>Provide the content to analyze as your POST body, and specify the <code>Content-Type</code> header as <code>text/html</code>.</p>

          </div>


        </div>


        </div>






            </div>