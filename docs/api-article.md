---
id: api-article
title: Article Extraction API
sidebar_label: Article Extraction API
todo: Modify links to old API docs
---

The Article API is used to extract clean article text and other data from news articles, blog posts and other text-heavy pages. Retrieve the full-text, cleaned and [normalized HTML](api-article-html.md), related images and videos, author, date, tags—automatically, from any article on any site.


## Request

To use the Article API, perform a HTTP GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/article
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |
| `url` | Web page URL of the article to process (URL encoded) </td></tr><td colspan="2">**Optional arguments**</td> |
| `fields` | Used to specify optional fields to be returned by the Article API. See the [Fields](#the-fields-argument) section below. |
| `paging` | Pass `paging=false` to disable automatic concatenation of multiple-page articles. (By default, Diffbot will concatenate up to 20 pages of a single article.) [More on automatic concatenation](guides-multi-page-articles-discussions.md). |
| `maxTags` | Set the maximum number of automatically-generated tags to return. By default a maximum of ten tags will be returned. |
| `tagConfidence` | Set the minimum relevance `score` of tags to return, between 0.0 and 1.0. By default only tags with a score equal to or above 0.5 will be returned. |
| `discussion` | Pass `discussion=false` to disable automatic extraction of article comments. See [below](#comment-extraction). |
| `timeout` | Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000). |
| `callback` | Use for jsonp requests. Needed for cross-domain ajax. |

### The fields argument

Use the `fields` argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or `*` to return all sub-fields.

For example, to return `links` and `meta` (in addition to the default fields), your `&fields` argument would be:

```plaintext
&fields=links,meta
```

## Response

The Article API returns data in JSON format.

Each V3 response includes a `request` object (which returns request-specific metadata), and an `objects` array, which will include the extracted information for all objects on a submitted page. At the moment, **only a single object** will be returned for Article API requests.

Objects in the Article API's `objects` array will include the following fields:

| Field | Description |
| :---- | :---------- |
| `type` | Type of object (always `article`). |
| `title` | Title of the article. |
| `text` | Full text of the article. |
| `html` | Diffbot-normalized HTML of the extracted article. Please see the [HTML Specification](api-article-html.md) for a breakdown of elements and attributes returned. |
| `date` | Date of extracted article, normalized in most cases to [RFC 1123 (HTTP/1.1)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3). |
| `estimatedDate` | If an article's date is ambiguous, Diffbot will attempt to estimate a more specific timestamp using various factors. This will not be generated for articles older than two days, or articles without an identified `date`. |
| `author` | Article author. |
| `authorUrl` | URL of the author profile page, if available. |
| `discussion` | Article comments, as extracted by the Diffbot Discussion API. See [below](#comment-extraction). |
| `humanLanguage` | Returns the (spoken/human) language of the submitted page, using two-letter [ISO 639-1 nomenclature](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). |
| `numPages` | Number of pages automatically concatenated to form the `text` or `html` response. By default, Diffbot will automatically concatenate up to 20 pages of an article. [More on automatic concatenation](guides-multi-page-articles-discussions.md). |
| `nextPages` | Array of all page URLs concatenated in a multipage article. [More on automatic concatenation](guides-multi-page-articles-discussions.md). |
| `siteName` | The plain-text name of the site (e.g. `The New York Times` or `Diffbot`). If no site name is automatically determined, the root domain (`diffbot.com`) will be returned. |
| `publisherRegion` | If known, the region of the article publication. |
| `publisherCountry` | If known, the country of the article publication. |
| `pageUrl` | URL of submitted page / page from which the article is extracted. |
| `resolvedPageUrl` | Returned if the `pageUrl` redirects to another URL. |
| `tags` | Array of tags/entities, generated from analysis of the extracted `text` and cross-referenced with [DBpedia](https://wiki.dbpedia.org/About) and other data sources. Language-specific tags will be returned if the source text is in English, Chinese, French, German, Spanish or Russian. |
| &#x21B3;`label` | Name of the entity or tag. |
| &#x21B3;`count` | Number of appearances the entity makes within the text content. |
| &#x21B3;`score` | Rating of the entity's relevance to the overall text content (range of 0 to 1) based on various factors. |
| &#x21B3;`rdfTypes` | If the entity can be represented by multiple resources, all of the possible URIs will be returned. |
| &#x21B3;`type` | This legacy field is a simplified precursor to `rdfTypes`, and will return either `organization` or `person` if the entity is either of those types. |
| &#x21B3;`uri` | Link to the primary Diffbot entity for this tag in the [Diffbot Knowledge Graph](https://www.diffbot.com/knowledge-graph/). On older articles, this might be the URI to the entity at DBpedia or another data source, but in most cases it will lead to Diffbot's KG entry which will contain more information about the tag. |
| `images` | Array of images, if present within the article body. |
| &#x21B3;`url` |Fully resolved link to image. If the image `SRC` is encoded as base64 data, the complete data URI will be returned. |
| &#x21B3;`title` | Description or caption of the image. |
| &#x21B3;`height` | Height of image as (re-)sized via browser/CSS. |
| &#x21B3;`width` | Width of image as (re-)sized via browser/CSS. |
| &#x21B3;`naturalHeight` | Raw image height, in pixels. |
| &#x21B3;`naturalWidth` | Raw image width, in pixels. |
| &#x21B3;`primary` | Returns `true` if image is identified as primary based on visual analysis. |
| &#x21B3;`diffbotUri` | Internal ID used for indexing. |
| `videos` | Array of videos, if present within the article body. |
| &#x21B3;`url` | Fully resolved link to source video content. |
| &#x21B3;`naturalHeight` | Source video height, in pixels, if available. |
| &#x21B3;`naturalWidth` | Source video width, in pixels, if available. |
| &#x21B3;`primary` | Returns `true` if video is identified as primary based on visual analysis. |
| &#x21B3;`diffbotUri` | Internal ID used for indexing. |
| `breadcrumb` | Returns a top-level array (`breadcrumb`) of URLs and link text from page breadcrumbs. |
| `diffbotUri` | Unique object ID. The `diffbotUri` is generated from the values of various Article fields and uniquely identifies the object. This can be used for deduplication. </td></tr><td colspan="2">**Optional fields, available using `fields=` argument**</td> |
| `quotes` | Returns quotes found in the article text and who said them. For English-language text only. |
| `sentiment` | Returns the sentiment score of the analyzed article text, a value ranging from -1.0 (very negative) to 1.0 (very positive). For English-language text only. |
| `links` | Returns a top-level object (`links`) containing all hyperlinks found on the page. |
| `meta` | Returns a top-level object (`meta`) containing the full contents of page `meta` tags, including sub-arrays for [OpenGraph](https://ogp.me/) tags, [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup) metadata, [schema.org](https://www.schema.org) microdata, and -- if available -- [oEmbed](https://www.oembed.com) metadata. |
| `querystring` | Returns any key/value pairs present in the URL querystring. Items without a discrete value will be returned as `true`. |

## Comment Extraction

By default the Article API will attempt to extract comments from article pages, using integrated functionality from the Diffbot Discussion API. Comment data will be returned in the `discussion` object (nested within the primary article object). The full syntax for discussion data is available in the [Discussion API documentation](api-discussion).

Discussion extraction can be disabled using the argument `discussion=false`. Note that if a page has recently been processed by Diffbot, cached comments may be returned even if `discussion=false` is passed.

## Advanced Text Analysis Powered by Semantria

<img src="/img/semantria.png" style="float:right;">Our [native integration with Semantria](guides-semantria.md) optionally allows extracted article content to be fully processed for categorization, entity and keyword extraction, and sentiment analysis. See [documentation](api-semantria.md) for information on how to integrate your Semantria account with Diffbot's Article API.

## Example Response

The following request --

```plaintext
https://api.diffbot.com/v3/article?token=...&url=http%3A%2F%2Fblog.diffbot.com%2Fdiffbots-new-product-api-teaches-robots-to-shop-online
```
-- will result in this API response:

```json
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
          "url": "http://www.youtube.com/embed/lfcri5ungRo?version=3&rel=1&fs=1&autohide=2&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent",
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
      "html": "<p>Diffbot&rsquo;s human wranglers are proud today to announce the release of our newest product: an API for&hellip; products!</p>\n<p>The <a href=\"http://www.diffbot.com/products/automatic/product\">Product API</a> can be used for extracting clean, structured data from any e-commerce product page. It automatically makes available all the product data you&rsquo;d expect: price, discount/savings amount, shipping cost, product description, any relevant product images, SKU and/or other product IDs.</p>\n<p>Even cooler: pair the Product API with <a href=\"http://www.diffbot.com/products/crawlbot\">Crawlbot</a>, our intelligent site-spidering tool, and let Diffbot determine which pages are products, then automatically structure the entire catalog. Here&rsquo;s a quick demonstration of Crawlbot at work:</p>\n<figure><iframe frameborder=\"0\" src=\"http://www.youtube.com/embed/lfcri5ungRo?version=3&rel=1&fs=1&autohide=2&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent\"></iframe></figure>\n<p>We&rsquo;ve developed the Product API over the course of two years, building upon our core vision technology that&rsquo;s extracted structured data from billions of web pages, and training our machine learning systems using data from tens of thousands of unique shopping sites. We can&rsquo;t wait for you to try it out.</p>\n<p>What are you waiting for? Check out the <a href=\"http://www.diffbot.com/products/automatic/product\">Product API documentation</a> and dive on in! If you need a token, check out our <a href=\"http://www.diffbot.com/pricing\">pricing and plans</a> (including our Free plan).</p>\n<p>Questions? Hit us up at <a href=\"mailto:support@diffbot.com\">support@diffbot.com</a>.</p>",
      "text": "Diffbot's human wranglers are proud today to announce the release of our newest product: an API for\u2026 products!\nThe Product API can be used for extracting clean, structured data from any e-commerce product page. It automatically makes available all the product data you'd expect: price, discount/savings amount, shipping cost, product description, any relevant product images, SKU and/or other product IDs.\nEven cooler: pair the Product API with Crawlbot, our intelligent site-spidering tool, and let Diffbot determine which pages are products, then automatically structure the entire catalog. Here's a quick demonstration of Crawlbot at work:\nWe've developed the Product API over the course of two years, building upon our core vision technology that's extracted structured data from billions of web pages, and training our machine learning systems using data from tens of thousands of unique shopping sites. We can't wait for you to try it out.\nWhat are you waiting for? Check out the Product API documentation and dive on in! If you need a token, check out our pricing and plans (including our Free plan).\nQuestions? Hit us up at support@diffbot.com.",
      "resolvedPageUrl": "http://blog.diffbot.com/diffbots-new-product-api-teaches-robots-to-shop-online/"
    }
  ]
}
```

## Authentication

You can supply Diffbot with basic authentication credentials or custom HTTP headers (see below) to access intranet pages or other sites that require a login.

### Basic Authentication

To access pages that require a login/password (using [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)), include the username and password in your `url` parameter, e.g.: `url=http%3A%2F%2FUSERNAME:PASSWORD@www.diffbot.com`.

## Custom HTTP Headers

You can supply Diffbot APIs with custom HTTP headers that will be passed along when making requests to third-party sites. These can be used to define specific Referer, User-Agent, Cookie or any other values.

Custom headers should be sent as HTTP headers in your request to `https://api.diffbot.com`, and prepended with `X-Forward-`.

For instance, to send custom `User-Agent`, `Referer` and `My-Custom-Header` header values:

| Desired Header | Send to api.diffbot.com |
| :-- | :-- |
| `User-Agent:Diffbot` | `X-Forward-User-Agent:Diffbot` |
| `Referer:diffbot.com` | `X-Forward-Referer:diffbot.com` |
| `My-Custom-Header:CustomValue` | `X-Forward-My-Custom-Header:CustomValue` |

## Custom Javascript

<div class="alert">This functionality is currently in beta.</div>

Using the `X-Evaluate` custom header (sent as `X-Forward-X-Evaluate`), you can inject your own Javascript code into web pages. Custom Javascript will be executed once the DOM has loaded.

Custom Javascript should be provided as a text string and contained in its own function. You must also include the special functions `start()` and `end()` to indicate the beginning and end of your custom script. Once `end()` fires, the updated document will be processed by your chosen extraction API.

It's recommended that your `end()` function be offset using `setTimeout` (see [JavaScript Timing Events](https://www.w3schools.com/js/js_timing.asp)) in order to accommodate your primary function processing. Additionally, if your custom Javascript requires access to Ajax-delivered content, it may be necessary to offset your entire function using `setTimeout` in order to delay the start of your processing.

The following sample `X-Evaluate` header waits one-half second after the DOM has loaded, enacts a click on the `a.loadMore` element, then waits 800 milliseconds before signaling the `end()`:


```js
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

Delivered as a string value as a custom header:

```json
"X-Forward-X-Evaluate": "function() {start();setTimeout(function(){var loadMoreNode=document.querySelector('a.loadMore');if (loadMoreNode != null) {loadMoreNode.click();setTimeout(function(){end();}, 800);} else {end();}},500);}"
```

## Posting Content

If your content is not publicly available (e.g., behind a firewall), you can POST markup or plain text directly to the Article API endpoint for analysis:

```plaintext
https://api.diffbot.com/v3/article?token=...&url=...
```

Please note that if you submit HTML, the `url` argument is still required, and will be used to resolve any relative links contained in the markup.

Provide the content to analyze as your POST body, and specify the `Content-Type` header as `text/html` (for full markup) or `text/plain` (for text-only).

### HTML Post Sample

```plaintext
curl -H "Content-Type: text/html" -d '<html><body><p>Now is the time for all good robots to come to the aid of their-- oh never mind, run!</p></body></html>' 'https://api.diffbot.com/v3/article?token=...&url=http%3A%2F%2Fblog.diffbot.com'
```

### Plaintext Post Sample

```plaintext
curl -H "Content-Type: text/plain" -d 'Now is the time for all good robots to come to the aid of their-- oh never mind, run!' 'https://api.diffbot.com/v3/article?token=...&fields=tags,text'
```
