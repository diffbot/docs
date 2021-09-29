---
id: api-image
title: Image Extraction API
sidebar_label: Image Extraction API
---

The Image API identifies the primary image(s) of a submitted web page and returns comprehensive information and metadata for each image.

## Request

To use the Image API, perform a HTTP GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/image
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |
| `url` | Web page URL of the image to process (URL encoded) </td></tr><tr><td colspan="2">**Optional arguments**</td> |
| `fields` | Used to specify optional fields to be returned by the Image API. See the [Fields](#the-fields-argument) section below. |
| `timeout` | Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000). |
| `callback` | Use for jsonp requests. Needed for cross-domain ajax. |
| `proxy` | Leave value empty to use default proxies, or specify an IP address of a custom proxy that will be used to fetch the target page, instead of Diffbot's default IPs/proxies. (Ex: `&proxy` or `&proxy=168.212.226.204`) |
| `proxyAuth` | Used to specify the authentication parameters that will be used with a custom proxy specified in the `&proxy` parameter. (Ex: `&proxyAuth=username:password`) |

### The fields argument

Use the `fields` argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or `*` to return all sub-fields.

For example, to return `meta` (in addition to the default fields), your `&fields` argument would be:

```plaintext
&fields=meta
```

## Response

The Image API returns data in JSON format.

Each V3 response includes a `request` object (which returns request-specific metadata), and an `objects` array, which will include the extracted information for all images on a submitted page.

Objects in the Image API's `objects` array will include the following fields:

| Field | Description |
| :---- | :---------- |
| `type` | Type of object (always `image`). |
| `url` | Direct link to image file. |
| `title` | Title or caption of the image, if available. |
| `naturalHeight` | Raw image height, in pixels. |
| `naturalWidth` | Raw image width, in pixels. |
| `humanLanguage` | Returns the (spoken/human) language of the submitted page, using two-letter [ISO 639-1 nomenclature](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).. |
| `anchorUrl` | If the image is hyperlinked, returns the destination URL. |
| `pageUrl` | URL of submitted page / page from which the image is extracted. |
| `resolvedPageUrl` | Returned if the `pageUrl` redirects to another URL. |
| `xpath` | XPath expression identifying the image node. |
| `diffbotUri` | Unique object ID. The `diffbotUri` is generated from the values of various Image fields and uniquely identifies the object. This can be used for deduplication. </td></tr><tr><td colspan="2">**Optional fields, available using `fields=` argument**</td> |
| `displayHeight` | Height of image as presented in the browser (and as sized via browser/CSS, if resized). |
| `displayWidth` | Width of image as presented in the browser (and as sized via browser/CSS, if resized). |
| `links` | Returns a top-level object (`links`) containing all hyperlinks found on the page. |
| `meta` | Comma-separated list of image-embedded metadata (e.g., EXIF, XMP, ICC Profile), if available within the image file. |
| `querystring` | Returns any key/value pairs present in the URL querystring. Items without a discrete value will be returned as `true`. |
| `breadcrumb` | Returns a top-level array (`breadcrumb`) of URLs and link text from page breadcrumbs. |

## Example Response

```json
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

If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to the Image API endpoint for analysis:

```plaintext
https://api.diffbot.com/v3/image?token=...&url=...
```

Please note that the `url` argument is still required, and will be used to resolve any relative links contained in the markup.

Provide the content to analyze as your POST body, and specify the `Content-Type` header as `text/html`.

### HTML Post Sample

```plaintext
curl -H "Content-Type: text/html" -d '<html><body><h2>Diffy the Robot</h2><div><img src="diffy-b.png"></div></body></html>' 'https://api.diffbot.com/v3/image?token=...&url=http%3A%2F%2Fwww.diffbot.com'
```
