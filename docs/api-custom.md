---
id: api-custom
title: Custom APIs
sidebar_label: Custom APIs
todo: Modify link beginning with "support.diffbot.com/topics"
todo: Modify links to old API docs
todo: Modify links to old Dashboard
---

Custom APIs allow you to extract nearly anything from nearly any site using Diffbot's powerful rendering engine.

<div class="info"><strong>Related:</strong> <a href="https://support.diffbot.com/topics/apitoolkit/" target="_blank">API Toolkit Support</a> | <a href="api-managing-rules-programmatically">Managing Rules Programmatically</a> | <a href="tutorials-custom-video">Video Tutorials</a></div>

## Creating a New API

You first need to create a custom API using our <a href="/dev/customize">API Toolkit</a>. Point-and-click or use CSS selectors to identify the content you wish to extract from a sample page. Your new API will be ready immediately, either for individual calls, your own app integration, or from within <a href="/dev/crawl">Crawlbot</a> or our <a href="/dev/bulk">Bulk API</a> systems.

Custom APIs use Diffbot's cloud-based rendering engine, and fully execute most page-level Javascript in order to access Ajax-delivered elements.

For assistance in creating your custom API, please see [Selectors and Filters](api-selectors-filters.md).

## Request

To access your Custom API, perform a HTTP GET request on the API you created in the <a href="/dev/customize">API Toolkit</a>:

```plaintext
https://api.diffbot.com/v3/{your API name}?token=...&url=...
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://diffbot.com/pricing) |
| `url` | URL to process ([URL encoded](https://en.wikipedia.org/wiki/Percent-encoding)) </td></tr><td colspan="2">**Optional arguments**</td> |
| `callback` | Use for jsonp requests. Needed for cross-domain ajax. |
| `timeout` | Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000). |

## Response

Custom APIs return data in JSON format.

Each response includes a `request` object (which returns request-specific metadata), and an `objects` array, which will include the extracted information for all objects on a submitted page.

For Custom APIs the `objects` array will always contain a single object, and all custom fields and collections will be returned therein.

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

If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to your Custom API endpoint for analysis:

```plaintext
https://api.diffbot.com/v3/{your API name}?token=...&url=...
```

Please note that the `url` argument is still required, and will be used to resolve any relative links contained in the markup.

Provide the content to analyze as your POST body, and specify the `Content-Type` header as `text/html`.

### HTML Post Sample

```plaintext
curl -H "Content-Type: text/html" -d '<html><body><h2>A Pair of Jeans</h2><div>Price: $31.99</div></body></html>' https://api.diffbot.com/v3/yourcustomapi?token=...&url=http%3A%2F%2Fstore.diffbot.com
```
