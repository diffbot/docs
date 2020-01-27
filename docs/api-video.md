---
id: api-video
title: Video Extraction API
sidebar_label: Video Extraction API
---

<div class="alert">The Video API is currently in beta.</div>

The Video API automatically extracts detailed video information—including most metadata, thumbnail images, direct video URL and embed code—from nearly any video page or video platform on the web.

## Request

To use the Video API, perform a HTTP GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/video
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |
| `url` | Web page URL of the video to process (URL encoded) </td></tr><tr><td colspan="2">**Optional arguments**</td> |
| `fields` | Used to specify optional fields to be returned by the Video API. See the [Fields](#the-fields-argument) section below. |
| `timeout` | Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000). |
| `callback` | Use for jsonp requests. Needed for cross-domain ajax. |

### The fields argument

Use the `fields` argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or `*` to return all sub-fields.

For example, to return `links` and `meta` (in addition to the default fields), your `&fields` argument would be:

```plaintext
&fields=links,meta
```

## Response

Diffbot's V3 APIs return information about **all** identified objects on a submitted page.

Each V3 response includes a `request` object (which returns request-specific metadata), and an `objects` array, which will include the extracted information for all objects on a submitted page.

Objects in the Product API's `objects` array will include the following fields:

| Field | Description |
| :---- | :---------- |
| `type` | Type of object (always `video`). |
| `pageUrl` | URL of submitted page / page from which the video is extracted. |
| `resolvedPageUrl` | Returned if the `pageUrl` redirects to another URL. |
| `title` | Title of the video. |
| `text` | Text description, if available, of the video. |
| `url` | Direct link to source video file, if available. |
| `html` | Embeddable HTML of the video (if available), typically an `IFRAME` or `VIDEO` object. |
| `embedUrl` | Embeddable URL, if available. |
| `author` | Video uploader or creator, if available. |
| `date` | Date of extracted video, normalized in most cases to [RFC 1123 (HTTP/1.1)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3). |
| `duration` | Duration in seconds of the Video. |
| `viewCount` | Number of Video views, if available on the page. |
| `naturalHeight` | Raw video height, if available, in pixels. |
| `naturalWidth` | Raw video width, if available, in pixels. |
| `images` | Array of images, if present within the video. |
| &#x21B3;`url` |Fully resolved link to image. If the image `SRC` is encoded as base64 data, the complete data URI will be returned. |
| &#x21B3;`title` | Description or caption of the image. |
| `mime` | MIME type, if available, as specified by the Video's "Content-Type." |
| `humanLanguage` | Returns the (spoken/human) language of the submitted page, using two-letter [ISO 639-1 nomenclature](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). |
| `diffbotUri` | Unique object ID. The `diffbotUri` is generated from the values of various Video fields and uniquely identifies the object. This can be used for deduplication. </td></tr><tr><td colspan="2">**Optional fields, available using `fields=` argument**</td> |
| `links` | Returns a top-level object (`links`) containing all hyperlinks found on the page. |
| `meta` | Returns a top-level object (`meta`) containing the full contents of page `meta` tags, including sub-arrays for [OpenGraph](https://ogp.me/) tags, [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup) metadata, [schema.org](https://www.schema.org) microdata, and -- if available -- [oEmbed](https://www.oembed.com) metadata. |
| `querystring` | Returns any key/value pairs present in the URL querystring. Items without a discrete value will be returned as `true`. |
| `breadcrumb` | Returns a top-level array (`breadcrumb`) of URLs and link text from page breadcrumbs. |

## Example Response

```json
{
  "request": {
    "pageUrl": "https://www.youtube.com/watch?v=VNv3EZEUgok",
    "api": "video",
    "version": 3
  },
  "objects": [
    {
      "type": "video",
      "title": "Create a Custom API Using Diffbot's Custom API Toolkit",
      "text": "This demonstration shows how to create a completely custom API using Diffbot's Custom API Toolkit. In it we show how to extract the \"What's Hot\" / Trending links from http://www.mashable.com.",
      "pageUrl": "https://www.youtube.com/watch?v=VNv3EZEUgok",
      "embedUrl": "http://www.youtube.com/v/VNv3EZEUgok?autohide=1&version=3",
      "humanLanguage": "en",
      "date": "Fri, 02 Aug 2013 07:00:00 GMT",
      "url": "https://r5---sn-qxo7sn7r.googlevideo.com/videoplayback?signature=3F99256DF92E9095B47FAC373A4BAADC5DBF3D36.D840BFEA083EE15085D0FE1F2F4C724551E7A4D7&sver=3&fexp=911305%2C912108%2C916944%2C930666%2C932404%2C940000%2C947209%2C947215%2C948124%2C948900%2C952302%2C952901%2C953912%2C957103%2C957201%2C958603&ratebypass=yes&requiressl=yes&ipbits=0&sparams=id%2Cip%2Cipbits%2Citag%2Cmm%2Cms%2Cmv%2Cratebypass%2Crequiressl%2Csource%2Cupn%2Cexpire&key=yt5&ip=146.148.32.139&itag=22&source=youtube&mv=u&ms=au&mm=31&mt=1415157849&id=o-AJ5iG1T6_yn-_qUHjcNok6XqTznNX6LXeagB6-mm8XQM&expire=1415179514&upn=wMziid6h3DY",
      "author": "Diffbot",
      "html": "<iframe width=\"459\" height=\"344\" src=\"http://www.youtube.com/embed/VNv3EZEUgok?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe>",
      "mime": "video/mp4",
      "duration": 343,
      "naturalWidth": 1280,
      "naturalHeight": 720,
      "viewCount": 1000,
      "images": [
        {
          "title": "Create a Custom API Using Diffbot's Custom API Toolkit",
          "url": "http://i.ytimg.com/vi/VNv3EZEUgok/hqdefault.jpg",
        }
      ],
      "diffbotUri": "video|3|566075164"
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

If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to the Product API endpoint for analysis:

```plaintext
https://api.diffbot.com/v3/video?token=...&url=...
```

Please note that the `url` argument is still required, and will be used to resolve any relative links contained in the markup.

Provide the content to analyze as your POST body, and specify the `Content-Type` header as `text/html`.
