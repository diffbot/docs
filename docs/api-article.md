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
| `proxy` | Leave value empty to use default proxies, or specify an IP address of a custom proxy that will be used to fetch the target page, instead of Diffbot's default IPs/proxies. (Ex: `&proxy` or `&proxy=168.212.226.204`) |
| `proxyAuth` | Used to specify the authentication parameters that will be used with a custom proxy specified in the `&proxy` parameter. (Ex: `&proxyAuth=username:password`) |
| `naturalLanguage` | Used to request the output of the Diffbot Natural Language API in the field `naturalLanguage`. Example: `&naturalLanguage=entities,facts,categories,sentiment`. |

### The fields argument

Use the `fields` argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or `*` to return all sub-fields.

For example, to return `links` and `meta` (in addition to the default fields), your `&fields` argument would be:

```plaintext
&fields=links,meta
```

### The naturalLanguage argument

The Diffbot Natural Language API is the service used by the Article API to extract tags and sentiment for an article. Use the `naturalLanguage` argument to receive the full output of the Natural Language API in the field `naturalLanguage` in the JSON response. Please refer to the [Natural Language API](nl-index.md) documentation for a complete list of available fields, including all `entities` (such as people, organizations, products and topics) mentioned in the article as well as `facts` describing the relationships between them (such as `Apple Inc; founded by; Steve Jobs`).


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
| `location`| Location mentioned at the beginning of the article. |
| `pageUrl` | URL of submitted page / page from which the article is extracted. |
| `resolvedPageUrl` | Returned if the `pageUrl` redirects to another URL. |
| `tags` | Array of tags/entities, generated from analysis of the extracted `text` and cross-referenced with [DBpedia](https://wiki.dbpedia.org/About) and other data sources. Language-specific tags will be returned if the source text is in English, Chinese, French, German, Spanish, Russian, Japanese, Dutch, Polish, Norwegian, Danish or Swedish. |
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
| `diffbotUri` | Unique object ID. The `diffbotUri` is generated from the values of various Article fields and uniquely identifies the object. This can be used for deduplication. |
| `sentiment` | Returns the sentiment score of the analyzed article text, a value ranging from -1.0 (very negative) to 1.0 (very positive). </td></tr><td colspan="2">**Optional fields, available using `fields=` argument**</td> |
| `quotes` | Returns quotes found in the article text and who said them. For English-language text only. |
| `links` | Returns a top-level object (`links`) containing all hyperlinks found on the page. |
| `meta` | Returns a top-level object (`meta`) containing the full contents of page `meta` tags, including sub-arrays for [OpenGraph](https://ogp.me/) tags, [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup) metadata, [schema.org](https://www.schema.org) microdata, and -- if available -- [oEmbed](https://www.oembed.com) metadata. |
| `querystring` | Returns any key/value pairs present in the URL querystring. Items without a discrete value will be returned as `true`. |
| `naturalLanguage` | Returns the output of the [Diffbot Natural Language API](nl-index.md) for this article. |

## Comment Extraction

By default the Article API will attempt to extract comments from article pages, using integrated functionality from the Diffbot Discussion API. Comment data will be returned in the `discussion` object (nested within the primary article object). The full syntax for discussion data is available in the [Discussion API documentation](api-discussion).

Discussion extraction can be disabled using the argument `discussion=false`. Note that if a page has recently been processed by Diffbot, cached comments may be returned even if `discussion=false` is passed.

## Authentication

You can supply Diffbot with basic authentication credentials or custom HTTP headers (see below) to access intranet pages or other sites that require a login.

### Basic Authentication

To access pages that require a login/password (using [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)), include the username and password in your `url` parameter, e.g.: `url=http%3A%2F%2FUSERNAME:PASSWORD@www.diffbot.com`.

## Custom HTTP Headers and JavaScript

> See here for a full guide on [using custom headers in direct API calls](guides-custom-headers-api).

### Custom headers

You can supply Diffbot APIs with custom HTTP headers that will be passed along when making requests to third-party sites. These can be used to define specific Referer, User-Agent, Cookie or any other values.

Custom headers should be sent as HTTP headers in your request to `https://api.diffbot.com`, and prepended with `X-Forward-`.

For instance, to send custom `User-Agent`, `Referer` and `My-Custom-Header` header values:

| Desired Header | Send to api.diffbot.com |
| :-- | :-- |
| `User-Agent:Diffbot` | `X-Forward-User-Agent:Diffbot` |
| `Referer:diffbot.com` | `X-Forward-Referer:diffbot.com` |
| `My-Custom-Header:CustomValue` | `X-Forward-My-Custom-Header:CustomValue` |

### Custom Javascript

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

> Note: X-Evaluate will only be executed if called from the API the rule resides in. If you have an X-Evaluate script in your Article API rule and make a request with the Analyze API that identifies the page as an article, the X-Evaluate will not be executed.


#### Saving Data to a Custom Field Using Javascript

We support a custom function `save(_name_, _value_)` that can be used to save Javascript data directly to the JSON output of an extraction API.  For example, the following code will grab the JSON object from a `<script>` tag wholesale, and output the entire object to the JSON output of the Extraction API:

```js
function() {
    start();
    setTimeout(function() {
        var jsonNode = document.querySelector('script#PRODUCT_PROPERTIES');
        if (jsonNode !== null) {
            save("json", JSON.parse(jsonNode.innerText));
            setTimeout(function() {
                end();
            }, 800);
        } else {
            end();
        }
    }, 500);
}
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
