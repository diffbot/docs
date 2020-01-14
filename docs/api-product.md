---
id: api-product
title: Product Extraction API
sidebar_label: Product Extraction API
todo: Modify links to old API docs
---

<div id="docBody">

<p>The Product API automatically extracts complete data from any shopping or e-commerce product page. Retrieve full pricing information, product IDs (SKU, UPC, MPN), images, product specifications, brand and more.</p>
              
<h3 id="request">Request</h3>
<p>To use the Product API, perform a HTTP GET request on the following endpoint:</p>
  

```text
https://api.diffbot.com/v3/product
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
<td class=" default"><div>Web page URL of the product to process (URL encoded)</div></td>
</tr>

<tr>
<td colspan="2" class="header">Optional arguments</td>
</tr>
<tr>
<td class=""><code>fields</code></td>
<td class=" optional"><div>Used to specify optional fields to be returned by the Product API. See the <a href="#fields">Fields</a> section below.</div></td>
</tr>
<tr>
<td class=""><code>discussion</code></td>
<td class=" optional"><div>Pass <code>discussion=false</code> to disable automatic extraction of product reviews. See <a href="#discussion">below</a>.</div></td>
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
<p>For example, to return <code>links</code> and <code>meta</code> (in addition to the default fields), your &amp;fields argument would be:</p>
  

```text
&amp;fields=links,meta
```


<h3 id="response">Response</h3>
<p>The Product API returns data in JSON format.</p>
<p>Each V3 response includes a <code>request</code> object (which returns request-specific metadata), and an <code>objects</code> array, which will include the extracted information for all objects on a submitted page.</p>
<p>Objects in the Product API's <code>objects</code> array will include the following fields:</p>

<!--{fields}--><table class="controls table table-bordered" id="fields" border="0" cellpadding="5">
<thead><tr>
<th>Field</th>
<th>Description</th>
</tr></thead>

<tr>
<td class=""><code>type</code></td>
<td class=" default"><div>Type of object (always <code>product</code>).</div></td>
</tr>
<tr>
<td class=""><code>pageUrl</code></td>
<td class=" default"><div>URL of submitted page / page from which the product is extracted.</div></td>
</tr>
<tr>
<td class=""><code>resolvedPageUrl</code></td>
<td class=" default"><div>Returned if the <code>pageUrl</code> redirects to another URL.</div></td>
</tr>
<tr>
<td class=""><code>title</code></td>
<td class=" default"><div>Title of the product.</div></td>
</tr>
<tr>
<td class=""><code>text</code></td>
<td class=" default"><div>Text description, if available, of the product.</div></td>
</tr>
<tr>
<td class=""><code>brand</code></td>
<td class=" default"><div>Item's brand name.</div></td>
</tr>
<tr>
<td class=""><code>offerPrice</code></td>
<td class=" default"><div>Offer or actual/final price of the product.</div></td>
</tr>
<tr>
<td class=""><code>regularPrice</code></td>
<td class=" default"><div>Regular or original price of the product, if available.</div></td>
</tr>
<tr>
<td class=""><code>shippingAmount</code></td>
<td class=" default"><div>Shipping price.</div></td>
</tr>
<tr>
<td class=""><code>saveAmount</code></td>
<td class=" default"><div>Discount or amount saved off the regular price.</div></td>
</tr>
<tr>
<td class=""><code>offerPriceDetails</code></td>
<td class=" default"><div>
<code>offerPrice</code> separated into its constituent parts: <code>amount</code>, <code>symbol</code>, and full <code>text</code>.</div></td>
</tr>
<tr>
<td class=""><code>regularPriceDetails</code></td>
<td class=" default"><div>
<code>regularPrice</code> separated into its constituent parts: <code>amount</code>, <code>symbol</code>, and full <code>text</code>.</div></td>
</tr>
<tr>
<td class=""><code>saveAmountDetails</code></td>
<td class=" default"><div>
<code>saveAmount</code> separated into its constituent parts: <code>amount</code>, <code>symbol</code>, full <code>text</code>, and whether or not it is a <code>percentage</code> value.</div></td>
</tr>
<tr>
<td class=""><code>productId</code></td>
<td class=" default"><div>Diffbot-determined unique product ID. If <code>upc</code>, <code>isbn</code>, <code>mpn</code> or <code>sku</code> are identified on the page, <code>productId</code> will select from these values in the above order.</div></td>
</tr>
<tr>
<td class=""><code>upc</code></td>
<td class=" default"><div>Universal Product Code (UPC/EAN), if available.</div></td>
</tr>
<tr>
<td class=""><code>sku</code></td>
<td class=" default"><div>Stock Keeping Unit -- store/vendor inventory number or identifier.</div></td>
</tr>
<tr>
<td class=""><code>mpn</code></td>
<td class=" default"><div>Manufacturer's Product Number.</div></td>
</tr>
<tr>
<td class=""><code>isbn</code></td>
<td class=" default"><div>International Standard Book Number (ISBN), if available.</div></td>
</tr>
<tr>
<td class=""><code>specs</code></td>
<td class=" default"><div>If a specifications table or similar data is available on the product page, individual specifications will be returned in the <code>specs</code> object as name/value pairs. Names will be normalized to lowercase with spaces replaced by underscores, e.g. <code>display_resolution</code>.</div></td>
</tr>
<tr>
<td class="parent"><code>images</code></td>
<td class="parent default"><div>Array of images, if present within the product.</div></td>
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
<td class="images indent"><code>xpath</code></td>
<td class="images indent default"><div>XPath expression identifying the image node.</div></td>
</tr>
<tr>
<td class="images indent"><code>diffbotUri</code></td>
<td class="images indent default"><div>Internal ID used for indexing.</div></td>
</tr>
<tr>
<td class=""><code>discussion</code></td>
<td class=" default"><div>Product reviews, as extracted by the Diffbot Discussion API. See <a href="#discussion">below</a>.</div></td>
</tr>
<tr>
<td class=""><code>prefixCode</code></td>
<td class=" default"><div>Country of origin as identified by UPC/ISBN.</div></td>
</tr>
<tr>
<td class=""><code>productOrigin</code></td>
<td class=" default"><div>If available, two-character ISO country code where the product was produced.</div></td>
</tr>
<tr>
<td class=""><code>humanLanguage</code></td>
<td class=" default"><div>Returns the (spoken/human) language of the submitted page, using two-letter <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">ISO 639-1 nomenclature</a>.</div></td>
</tr>
<tr>
<td class=""><code>diffbotUri</code></td>
<td class=" default"><div>Unique object ID. The <code>diffbotUri</code> is generated from the values of various Product fields and uniquely identifies the object. This can be used for deduplication.</div></td>
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

<tr>
<td colspan="2" class="header">The following fields are in an early beta stage:</td>
</tr>
<tr>
<td class=""><code>availability</code></td>
<td class=" experimental"><div>Item's availability, either <code>true</code> or <code>false</code>.</div></td>
</tr>
<tr>
<td class=""><code>category</code></td>
<td class=" experimental"><div>Returns an inferred category from Diffbot's <a href="api-product-categories">product categorization taxonomy</a>.</div></td>
</tr>
<tr>
<td class=""><code>colors</code></td>
<td class=" experimental"><div>Returns array of product color options.</div></td>
</tr>
<tr>
<td class=""><code>normalizedSpecs</code></td>
<td class=" experimental"><div>Returns normalized specifications if a specifications table (or similar element) is found on the product page. <a href="api-product-normalized-specs">More details on normalization</a>.</div></td>
</tr>
<tr>
<td class=""><code>multipleProducts</code></td>
<td class=" experimental"><div>Returns <code>true</code> if multiple products are distinctly available on the product page.</div></td>
</tr>
<tr>
<td class="parent"><code>priceRange</code></td>
<td class="parent experimental"><div>If the product is available in a range of prices, the minimum and maximum values will be returned. The lowest price will also be returned as the <code>offerPrice</code>.</div></td>
</tr>
<tr>
<td class="priceRange indent"><code>minPrice</code></td>
<td class="priceRange indent experimental"><div>The minimum price for the offered item.</div></td>
</tr>
<tr>
<td class="priceRange indent"><code>maxPrice</code></td>
<td class="priceRange indent experimental"><div>The maximum price for the offered item.</div></td>
</tr>
<tr>
<td class="parent"><code>quantityPrices</code></td>
<td class="parent experimental"><div>If the product is available with quantity-based discounts, all identifiable price points will be returned. The lowest price will also be returned as the <code>offerPrice</code>.</div></td>
</tr>
<tr>
<td class="quantityPrices indent"><code>minQuantity</code></td>
<td class="quantityPrices indent experimental"><div>The minimum quantity required to purchase for the associated price.</div></td>
</tr>
<tr>
<td class="quantityPrices indent"><code>price</code></td>
<td class="quantityPrices indent experimental"><div>Price of the specific quantity level.</div></td>
</tr>

<tr>
<td class=""><code>size</code></td>
<td class=" experimental"><div>Size(s) available, if identified on the page.</div></td>
</tr>
</table>
<!--{endfields}-->

<h3 id="discussion">Review Extraction</h3>
<p>By default the Product API will attempt to extract user reviews from product pages, using integrated functionality from the Diffbot Discussion API. Review data will be returned in the <code>discussion</code> object (nested within the primary product object). The full syntax for discussion data is available in the <a href="api-discussion">Discussion API documentation</a>.</p>
<p>Discussion extraction can be disabled using the argument <code>discussion=false</code>. Note that if a page has recently been processed by Diffbot, cached reviews may be returned even if <code>discussion=false</code> is passed.</p>

<h3 id="sampleresponse">Example Response</h3>
<div class="indent">
  

```text
{
  "request": {
    "pageUrl": "http://store.livrada.com/collections/all/products/before-i-go-to-sleep",
    "api": "product",
    "options": [],
    "fields": "title,text,offerPrice,regularPrice,saveAmount,pageUrl,images",
    "version": 3
  },
  {
  "objects": [
    {
      "type": "product",
      "title": "Before I Go To Sleep",
      "text": "Memories define us. So what if you lost yours every time you went to sleep? Your name, your identity, your past, even the people you love -- all forgotten overnight. And the one person you trust may be telling you only half the story. Before I Go To Sleep is a disturbing psychological thriller in which an amnesiac desperately tries to uncover the truth about who she is and who she can trust.",
      "offerPrice": "$7.99",
      "regularPrice": "$9.99",
      "saveAmount": "$2.00",
      "pageUrl": "http://store.livrada.com/collections/all/products/before-i-go-to-sleep",
      "images": [
        {
          "title": "Before I Go to Sleep cover",
          "url": "http://cdn.shopify.com/s/files/1/0184/6296/products/BeforeIGoToSleep_large.png?946",
          "xpath": "/HTML[@class='no-js']/BODY[@id='page-product']/DIV[@class='content-frame']/DIV[@class='content']/DIV[@class='content-shop']/DIV[@class='row']/DIV[@class='span5']/DIV[@class='product-thumbs']/UL/LI[@class='first-image']/A[@class='single_image']/IMG",
          "diffbotUri": "image|1|768070723"
        }
      ]
      "diffbotUri": "product|1|937176621"
    }
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
<p>If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to the Product API endpoint for analysis:
</p>


```text
https://api.diffbot.com/v3/product?token=...&amp;url=...
```


<p>Please note that the <code>url</code> argument is still required, and will be used to resolve any relative links contained in the markup.</p>
<p>Provide the content to analyze as your POST body, and specify the <code>Content-Type</code> header as <code>text/html</code>.</p>
<p><strong>HTML Post Sample</strong>:</p>
  

```text
curl -H "Content-Type: text/html" -d '&lt;html&gt;&lt;head&gt;&lt;title&gt;Something to Buy&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;h2&gt;A Pair of Jeans&lt;/h2&gt;&lt;div&gt;Price: $31.99&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;' 'https://api.diffbot.com/v3/product?token=...&amp;url=http%3A%2F%2Fstore.diffbot.com'
```




</div>