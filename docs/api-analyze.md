---
id: api-analyze
title: Analyze API
sidebar_label: Analyze API
---

The Diffbot Analyze API visually analyzes a web page, identifies its "page-type," and determines which Diffbot [extraction API](api-basics-index) (if any) is appropriate. Pages that match a supported extraction API -- articles, discussions, images, products or videos -- **will be automatically extracted** and returned in the Analyze API response.

Pages not currently supported by an extraction API will return "other."

## Request

To use the Analyze API, perform a HTTP GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/analyze?token=...&url=...
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |
| `url` | Web page URL of the analyze to process (URL encoded)</td></tr><td colspan="2">**Optional arguments**</td> |
| `mode` | By default the Analyze API will fully extract all pages that match an existing Automatic API -- articles, products or image pages. Set `mode` to a specific page-type (e.g., `mode=article`) to extract content only from that specific page-type. All other pages will simply return the default Analyze fields. |
| `fallback` | Force any non-extracted pages (those with a `type` of "other") through a specific API. For example, to route all "other" pages through the Article API, pass `&fallback=article`. Pages that utilize this functionality will return a `fallbackType` field at the top-level of the response and a `originalType` field within each extracted object, both of which will indicate the fallback API used. [Learn more about the fallback parameter](explain-analyze-api-fallback) |
| `fields` | Specify optional fields to be returned from any fully-extracted pages, e.g.: `&fields=querystring,links`.<br><br>See available fields within each API's individual documentation pages. |
| `discussion` | Pass `discussion=false` to disable automatic extraction of comments or reviews from pages identified as articles or products. This will not affect pages identified as discussions. |
| `timeout` | Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000). |
| `callback` | Use for jsonp requests. Needed for cross-domain ajax.|
| `proxy` | Leave value empty to use default proxies, or specify an IP address of a custom proxy that will be used to fetch the target page, instead of Diffbot's default IPs/proxies. (Ex: `&proxy` or `&proxy=168.212.226.204`) |
| `proxyAuth` | Used to specify the authentication parameters that will be used with a custom proxy specified in the `&proxy` parameter. (Ex: `&proxyAuth=username:password`) |


## Response

The Analyze API returns data in JSON format.

Each response includes a `request` object (which returns request-specific metadata), and an `objects` array, which will include the extracted information for all objects on a submitted page.

If the Analyze API identifies the submitted page as an article, discussion thread, product or image, the associated object(s) from the page will be returned automatically in the `objects` array.

The default fields returned:

| Field | Description |
| :---- | :---------- |
| `title` | Title of the page. |
| `type` | Page-type of the submitted URL, either `article`, `discussion`, `image`, `product`, `video` or -- if not a [supported page](https://diffbot.com/products/automatic) -- `other`. |
| `humanLanguage` | Returns the (spoken/human) language of the submitted page, using two-letter [ISO 639-1 nomenclature](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).</td></tr><td colspan="2">**Optional fields, available using `fields=` argument**</td> |
| `links` | Returns a top-level object (`links`) containing all hyperlinks found on the page. |
| `meta` | Returns a top-level object (`meta`) containing the full contents of page `meta` tags, including sub-arrays for [OpenGraph](https://ogp.me/) tags, [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup) metadata, [schema.org](https://www.schema.org) microdata, and -- if available -- [oEmbed](https://www.oembed.com) metadata. |
| `querystring` | Returns any key/value pairs present in the URL querystring. Items without a discrete value will be returned as `true`. |
| `breadcrumb` |Returns a top-level array (`breadcrumb`) of URLs and link text from page breadcrumbs. |

## Example Response

Because the below classified page is an article, its full contents are extracted using the Article API:

```json
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
      "text": "Diffbot , the super-geeky/awesome visual learning robot technology which aims to \"see\" the web the way that people do, is today announcing a new infusion of capital. The company has closed $2 million in funding from a number of technology veterans, including EarthLink founder Sky Dayton ; Andy Bechtolsheim , co-founder of Sun Microsystems; Joi Ito , Director of MIT Media Lab; Brad Garlinghouse , CEO of YouSendIt ( and formerly of TechCrunch parent company AOL ), Maynard Webb , Chairman of the Board at LiveOps, formerly eBay COO; Elad Gil , VP of Corporate Strategy at Twitter; Jonathan Heiliger , former VP of Technical Operations at Facebook; Redbeacon co-founder Aaron Lee ; and founder of VitalSigns Montgomery Kersten .\nMatrix Partners also participated in the round. Of the new investors, Sky Dayton will be the first to join Diffbot's board and will be taking an active role in the company, including plans to go hands-on with various Diffbot projects.\nLast August, the company publicly debuted its first APIs , which allow developers to build apps that can automatically extract meaning from web pages. For example, the Front Page API is able to analyze site homepages, and understands the difference between article text, headlines, bylines, ads, etc. The Article API can then extract clean article text, images and videos. Another example of Diffbot in action is the \"follow API,\" which can track the changes made to a website.\nToday, Diffbot has categorized the web into about 20 different page types, including homepages and article pages, which are the first two types it can now identity. Going forward, Diffbot plans train its bots to recognize all the other types of pages, including product pages, social networking profiles, recipe pages, review pages, and more.\nIts APIs have been put to use by AOL (again: disclosure, TC parent) in its news magazine AOL Editions , as well as by companies like Nuance , SocMetrics , and others. Diffbot says it's now processing 100 million API calls per month on behalf of its customers. Thousands of developers are using the APIs, the company notes, but paying customers are only in the \"tens.\" Correction: we're now told they have \"a lot more!\"\nDiffbot founder and CEO Michael Tung (aka \"Diffbot Mike\") says the new funding will be put towards new hires and expanding its resources. \"More than that, we're receiving a huge vote of confidence from veterans who have built massive companies and understand the fine points of building for scale, maintaining uptime and delivering the absolute highest standards of service.\"\nTung is a patent attorney and Stanford PhD student who left the doctoral program to pursue Diffbot, thanks to seed funding from Stanford's incubator, StartX . Diffbot was StartX's first investment. With today's funding, Diffbot total raise is $2 million and change.",
      "title": "Diffbot Raises $2 Million Angel Round For Web Content Extraction Technology",
      "images": [
        {
        "primary": "true",
        "url": "http://tctechcrunch2011.files.wordpress.com/2012/05/diffbot_9.png?w=300"
        }
      ],
      "date": "Thu, 31 May 2012 07:00:00 GMT"
    }
  ]
}
```

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

## Posting Content

If your content is not publicly available (e.g., behind a firewall), you can POST markup or plain text directly to the Analyze API endpoint for analysis. Note that the quality of analysis is dependent on many factors, among them the accessibility of page assets (images, CSS) and how reliant the page layout is on those that are unavailable.

```plaintext
https://api.diffbot.com/v3/analyze?token=...&url=...
```

Please note that the `url` argument is still required, and will be used to resolve any relative links contained in the markup.

Provide the content to analyze as your POST body, and specify the `Content-Type` header as `text/html`.

### HTML Post Sample

```plaintext
curl -H "Content-Type: text/html" -d '<html><head><title>Something to Buy</title></head><body><h2>A Pair of Jeans</h2><div>Price: $31.99</div></body></html>' 'https://api.diffbot.com/v3/analyze?token=...&url=http%3A%2F%2Fstore.diffbot.com'
```
