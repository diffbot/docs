---
id: api-event
title: Event Extraction API
sidebar_label: Event Extraction API
todo: Modify links to old API docs
---

The Event API automatically extracts data from any single entity event page. Retrieve full event information, dates, location and address information, images and event descriptions.

## Request

To use the Event API, perform a HTTP GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/event
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |
| `url` | Web page URL of the event to process (URL encoded) </td></tr><tr><td colspan="2">**Optional arguments**</td> |
| `fields` | Used to specify optional fields to be returned by the Event API. See the [Fields](#the-fields-argument) section below. |
| `timeout` | Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000). |
| `callback` | Use for jsonp requests. Needed for cross-domain ajax. |

### The fields argument

Use the `fields` argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or `*` to return all sub-fields.

For example, to return `links` and `meta` (in addition to the default fields), your `&fields` argument would be:</p>

```plaintext
&fields=links,meta
```

## Response

The Event API returns data in JSON format.

Each V3 response includes a `request` object (which returns request-specific metadata), and an `objects` array, which will include the extracted information for all objects on a submitted page.

Objects in the Event API's `objects` array will include the following fields:

| Field | Description |
| :---- | :---------- |
| `type` | Type of object (always `event`). |
| `pageUrl` | URL of submitted page / page from which the event is extracted. |
| `resolvedPageUrl` | Returned if the `pageUrl` redirects to another URL. |
| `title` | Title of the event. |
| `startDate` | Start date of extracted event in GMT, normalized in most cases to [RFC 1123 (HTTP/1.1)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3). If no start time was found, the time is midnight.|
| `endDate` | End date of extracted event in GMT, normalized in most cases to [RFC 1123 (HTTP/1.1)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3). If no end time was found, the time is midnight.|
| `isFullDay` | Returns true if no time was found and the event runs the whole day.|
| `description` | Text description, if available, of the event. |
| `venue` | The name of the venue, if available. |
| `location` | Parsed address information, if parsable address is provided.|
| &#x21B3;`country` | Country of the location.|
| &#x21B3;`isCurrent` | Returns true if the address is current. |
| &#x21B3;`address` | Address string. |
| &#x21B3;`city` | City name. |
| &#x21B3;`street` | The street information of the address. |
| &#x21B3;`subregion` | The subregion of the city or area. |
| &#x21B3;`latitude` | Latitude of the geographic coordinate of the address. |
| &#x21B3;`longitude` | Longitude of the geographic coordinate of the address. |
| &#x21B3;`postalCode` | Postal code of the address. |
| &#x21B3;`region` | The regi. |
| &#x21B3;`precision` | The precision score of the parsed address. |
| `images` | Array of images, if present within the event page. |
| &#x21B3;`url` |Fully resolved link to image. If the image `SRC` is encoded as base64 data, the complete data URI will be returned. |
| &#x21B3;`title` | Description or caption of the image. |
| &#x21B3;`height` | Height of image as (re-)sized via browser/CSS. |
| &#x21B3;`width` | Width of image as (re-)sized via browser/CSS. |
| &#x21B3;`naturalHeight` | Raw image height, in pixels. |
| &#x21B3;`naturalWidth` | Raw image width, in pixels. |
| &#x21B3;`primary` | Returns `true` if image is identified as primary based on visual analysis. |
| &#x21B3;`xpath` | XPath expression identifying the image node. |
| &#x21B3;`diffbotUri` | Internal ID used for indexing. |
| `humanLanguage` | Returns the (spoken/human) language of the submitted page, using two-letter [ISO 639-1 nomenclature](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). |
| `meta` | Returns a top-level object (`meta`) containing the full contents of page `meta` tags, including sub-arrays for [OpenGraph](https://ogp.me/) tags, [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup) metadata, [schema.org](https://www.schema.org) microdata, and -- if available -- [oEmbed](https://www.oembed.com) metadata. |
| `diffbotUri` | Unique object ID. The `diffbotUri` is generated from the values of various event fields and uniquely identifies the object. This can be used for deduplication.|


## Example Response

```json
{
   "request":{
      "pageUrl":"https://www.eventbrite.com/e/graphql-summit-2018-tickets-46601841362",
      "api":"event",
      "version":3
   },
   "objects":[
      {
         "venue":"The Regency Center",
         "images":[
            {
               "naturalHeight":0,
               "width":720,
               "diffbotUri":"image|3|2088675194",
               "url":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F45534724%2F182934487936%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=e73c0be202c2cd939dcd3e809d96e093",
               "naturalWidth":0,
               "primary":true,
               "height":360
            }
         ],
         "isFullDay":false,
         "endDate":"Fri, 09 Nov 2018 01:00:00 GMT",
         "humanLanguage":"en",
         "diffbotUri":"event|3|-2069254052",
         "description":"​Join over 850 developers at the 3rd annual GraphQL Summit, the world's largest conference dedicated to GraphQL. Whether you're just getting started or a veteran GraphQL practitioner, this is the must-attend developer conference of the year.\nChoose from 40+ sessions across two tracks at one of San Francisco's most historic event venues\n​See how teams at top startups and enterprises are modernizing their platforms by using GraphQL in complex production environments\nHear where the technology is heading next, directly from the leaders of GraphQL's major open source projects\nMeet top solution providers from around the world - all under one roof.\nEnroll in hands-on workshops and classroom training to boost your skills to get the most out of GraphQL.\nGraphQL Summit Day Code of Conduct\nWe believe our community and events should be truly open for everyone. As such, we are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, disability, ethnicity, or religion. Our event code of conduct outlines our expectations for participant behavior, as well as the consequences for unacceptable behavior.\n*GraphQL Summit is hosted at the Regency Center which is an accessible space with elevator access*",
         "pageUrl":"https://archives.diffbot.com/replay/4F02A5A651C6767544362C27B1D9BAC1/",
         "location":{
            "country":{
               "name":"United States",
               "diffbotUri":"http://diffbot.com/entity/A01d4EK33MmCosgI2KXa4-A",
               "websiteUris":[
                  "wikidata.org/entity/Q30"
               ],
               "targetDiffbotUri":"http://diffbot.com/entity/A01d4EK33MmCosgI2KXa4-A",
               "surfaceForm":"United States"
            },
            "isCurrent":true,
            "address":"1300 Van Ness Ave, San Francisco, California",
            "city":{
               "name":"San Francisco",
               "diffbotUri":"http://diffbot.com/entity/A8AV-O2v0MBuACAY7pFZzbg",
               "websiteUris":[
                  "wikidata.org/entity/Q62"
               ],
               "targetDiffbotUri":"http://diffbot.com/entity/A8AV-O2v0MBuACAY7pFZzbg",
               "surfaceForm":"San Francisco"
            },
            "street":"1300 Van Ness Ave",
            "subregion":{
               "name":"San Francisco County",
               "diffbotUri":"http://diffbot.com/entity/A8AV-O2v0MBuACAY7pFZzbg",
               "websiteUris":[
                  "wikidata.org/entity/Q62"
               ],
               "targetDiffbotUri":"http://diffbot.com/entity/A8AV-O2v0MBuACAY7pFZzbg",
               "surfaceForm":"San Francisco County"
            },
            "latitude":37.78785705566406,
            "precision":0.10000000149011612,
            "postalCode":"94109",
            "region":{
               "name":"California",
               "diffbotUri":"http://diffbot.com/entity/Al0_8ehooNxOPT36Y4RdV9w",
               "websiteUris":[
                  "wikidata.org/entity/Q99"
               ],
               "targetDiffbotUri":"http://diffbot.com/entity/Al0_8ehooNxOPT36Y4RdV9w",
               "surfaceForm":"California"
            },
            "longitude":-122.42138671875
         },
         "type":"event",
         "title":"GraphQL Summit 2018",
         "startDate":"Wed, 07 Nov 2018 16:30:00 GMT"
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

If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to the Event API endpoint for analysis:

```plaintext
https://api.diffbot.com/v3/event?token=...&url=...
```

Please note that the `url` argument is still required, and will be used to resolve any relative links contained in the markup.

Provide the content to analyze as your POST body, and specify the `Content-Type` header as `text/html`.

### HTML Post Sample

```plaintext
curl -H "Content-Type: text/html" -d '<html><head><title>Some Event Name</title></head><body><h2>Come join us on February 22nd, 2020</h2><div> at the Chase Center, 1301 2nd Ave, Seattle, WA 98101</div></body></html>' 'https://api.diffbot.com/v3/event?token=...&url=http%3A%2F%2Fstore.diffbot.com'
```
