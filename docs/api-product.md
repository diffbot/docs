---
id: api-product
title: Product Extraction API
sidebar_label: Product Extraction API
---

The Product API automatically extracts complete data from any shopping or e-commerce product page. Retrieve full pricing information, product IDs (SKU, UPC, MPN), images, product specifications, brand and more.

## Request

To use the Product API, perform a HTTP GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/product
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |
| `url` | Web page URL of the product to process (URL encoded) </td></tr><tr><td colspan="2">**Optional arguments**</td> |
| `fields` | Used to specify optional fields to be returned by the Product API. See the [Fields](#the-fields-argument) section below. |
| `discussion` | Pass `discussion=false` to disable automatic extraction of product reviews. See [below](#review-extraction). |
| `timeout` | Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000). |
| `callback` | Use for jsonp requests. Needed for cross-domain ajax. |
| `proxy` | Used to specify the IP address of a custom proxy that will be used to fetch the target page, instead of Diffbot's default IPs/proxies. (Ex: `&proxy=168.212.226.204`) |
| `proxyAuth` | Used to specify the authentication parameters that will be used with the proxy specified in the `&proxy` parameter. (Ex: `&proxyAuth=username:password`) |

### The fields argument

Use the `fields` argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or `*` to return all sub-fields.

For example, to return `links` and `meta` (in addition to the default fields), your `&fields` argument would be:</p>

```plaintext
&fields=links,meta
```

## Response

The Product API returns data in JSON format.

Each V3 response includes a `request` object (which returns request-specific metadata), and an `objects` array, which will include the extracted information for all objects on a submitted page.

Objects in the Product API's `objects` array will include the following fields:

| Field | Description |
| :---- | :---------- |
| `type` | Type of object (always `product`). |
| `pageUrl` | URL of submitted page / page from which the product is extracted. |
| `resolvedPageUrl` | Returned if the `pageUrl` redirects to another URL. |
| `title` | Title of the product. |
| `text` | Text description, if available, of the product. |
| `brand` | Item's brand name. |
| `offerPrice` | Offer or actual/final price of the product. |
| `regularPrice` | Regular or original price of the product, if available. |
| `shippingAmount` | Shipping price. |
| `saveAmount` | Discount or amount saved off the regular price. |
| `offerPriceDetails` | `offerPrice` separated into its constituent parts: `amount`, `symbol`, and full `text`. |
| `regularPriceDetails` | `regularPrice` separated into its constituent parts: `amount`, `symbol`, and full `text`. |
| `saveAmountDetails` | `saveAmount` separated into its constituent parts: `amount`, `symbol`, full `text`, and whether or not it is a `percentage` value. |
| `productId` | Diffbot-determined unique product ID. If `upc`, `isbn`, `mpn` or `sku` are identified on the page, `productId` will select from these values in the above order. |
| `upc` | Universal Product Code (UPC/EAN), if available. |
| `sku` | Stock Keeping Unit -- store/vendor inventory number or identifier. |
| `mpn` | Manufacturer's Product Number. |
| `isbn` | International Standard Book Number (ISBN), if available. |
| `specs` | If a specifications table or similar data is available on the product page, individual specifications will be returned in the `specs` object as name/value pairs. Names will be normalized to lowercase with spaces replaced by underscores, e.g. `display_resolution`. |
| `images` | Array of images, if present within the product. |
| &#x21B3;`url` |Fully resolved link to image. If the image `SRC` is encoded as base64 data, the complete data URI will be returned. |
| &#x21B3;`title` | Description or caption of the image. |
| &#x21B3;`height` | Height of image as (re-)sized via browser/CSS. |
| &#x21B3;`width` | Width of image as (re-)sized via browser/CSS. |
| &#x21B3;`naturalHeight` | Raw image height, in pixels. |
| &#x21B3;`naturalWidth` | Raw image width, in pixels. |
| &#x21B3;`primary` | Returns `true` if image is identified as primary based on visual analysis. |
| &#x21B3;`xpath` | XPath expression identifying the image node. |
| &#x21B3;`diffbotUri` | Internal ID used for indexing. |
| `discussion` | Product reviews, as extracted by the Diffbot Discussion API. See [below](#review-extraction). |
| `prefixCode` | Country of origin as identified by UPC/ISBN. |
| `productOrigin` | If available, two-character ISO country code where the product was produced. |
| `humanLanguage` | Returns the (spoken/human) language of the submitted page, using two-letter [ISO 639-1 nomenclature](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). |
| `diffbotUri` | Unique object ID. The `diffbotUri` is generated from the values of various Product fields and uniquely identifies the object. This can be used for deduplication. </td></tr><tr><td colspan="2">**Optional fields, available using `fields=` argument**</td> |
| `links` | Returns a top-level object (`links`) containing all hyperlinks found on the page. |
| `meta` | Returns a top-level object (`meta`) containing the full contents of page `meta` tags, including sub-arrays for [OpenGraph](https://ogp.me/) tags, [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup) metadata, [schema.org](https://www.schema.org) microdata, and -- if available -- [oEmbed](https://www.oembed.com) metadata. |
| `querystring` | Returns any key/value pairs present in the URL querystring. Items without a discrete value will be returned as `true`. |
| `breadcrumb` | Returns a top-level array (`breadcrumb`) of URLs and link text from page breadcrumbs. </td></tr><tr><td colspan="2">**The following fields are in an early beta stage:**</td> |
| `availability` | Item's availability, either `true` or `false`. |
| `category` | Returns an inferred category from Diffbot's [product categorization taxonomy](api-product-categories.md). |
| `colors` | Returns array of product color options. |
| `normalizedSpecs` | Returns normalized specifications if a specifications table (or similar element) is found on the product page. [More details on normalization](#normalized-specs). |
| `multipleProducts` | Returns `true` if multiple products are distinctly available on the product page. |
| `priceRange` | If the product is available in a range of prices, the minimum and maximum values will be returned. The lowest price will also be returned as the `offerPrice`. |
| &#x21B3;`minPrice` | The minimum price for the offered item. |
| &#x21B3;`maxPrice` | The maximum price for the offered item. |
| `quantityPrices` | If the product is available with quantity-based discounts, all identifiable price points will be returned. The lowest price will also be returned as the `offerPrice`. |
| &#x21B3;`minQuantity` | The minimum quantity required to purchase for the associated price. |
| &#x21B3;`price` | Price of the specific quantity level. |
| `size` | Size(s) available, if identified on the page. |

## Review Extraction

By default the Product API will attempt to extract user reviews from product pages, using integrated functionality from the Diffbot Discussion API. Review data will be returned in the `discussion` object (nested within the primary product object). The full syntax for discussion data is available in the [Discussion API documentation](api-discussion.md).

Discussion extraction can be disabled using the argument `discussion=false`. Note that if a page has recently been processed by Diffbot, cached reviews may be returned even if `discussion=false` is passed.

## Normalized Specs

The `normalizedSpecs` field returns a product's automatically standardized/sanitized specifications, if a specs table and/or similar elements are detected on a page. Numeric values for many specifications are normalized into a standard units.

### Data Returned

Each key will return an array of values. Single-value specifications will contain a single-element array. For each value, the following possible fields will be returned:

| Field | Description |
| :---- | :---------- |
| `cleanLiteral` | A sanitized version of the text string. |
| `unit` | Normalized output unit, if applicable, per below table. |
| `value` | Normalized output value, if applicable, according to the `unit`. |

### Example Response

```json
"normalizedSpecs_beta": {
  "color": [
    {
      "unit": "rgbHex",
      "cleanLiteral": "Fluorescent Pink",
      "value": "FF1493"
    },
    {
      "unit": "rgbHex",
      "cleanLiteral": "Soft White",
      "value": "E0E4DF"
    },
    {
      "unit": "rgbHex",
      "cleanLiteral": "Diffbot Blue",
      "value": "112532"
    },
  ],
  "dataCapacity": [
    {
      "unit": "KILOBYTE",
      "cleanLiteral": "1.0 TB",
      "value": 1073741824
    }
  ],
  "minOperatingTemperature": [
    {
      "unit": "CELSIUS",
      "cleanLiteral": "32.0 F",
      "value": -0.00000799999999756551
    }
  ],
  "shippingDepth": [
    {
      "unit": "METER",
      "cleanLiteral": "5.6 in",
      "value": 0.1422
    }
  ],
  "shippingWeight": [
    {
      "unit": "KILOGRAM",
      "cleanLiteral": "0.3 lb",
      "value": 0.1361
    }
  ] ,
  "sku": [
    {
      "cleanLiteral": "A8237"
    }
  ]
}
```

### List of Normalized Keys

| Normalized Key | Type | Normalized Value Unit |
| :------------- | :--- | :-------------------- |
| `armLength` | numeric | meter |
| `audioJackDiameter` | numeric | meter |
| `batteryCapacity` | numeric | coulomb |
| `bookFormat` | string | n/a |
| `brand` | string | n/a |
| `busClockFrequency` | numeric | hertz |
| `bust` | numeric | meter |
| `dataCapacity` | numeric | kilobyte |
| `chest` | numeric | meter |
| `circumference` | numeric | meter |
| `clockFrequency` | numeric | hertz |
| `color` | string | rgb hex value |
| `condition` | string | n/a |
| `copyingSpeed` | numeric | pageperminute |
| `cordLength` | numeric | meter |
| `countryOfOrigin` | string | n/a |
| `dataReadSpeed` | numeric | kilobytepersecond |
| `dataTransmissionSpeed` | numeric | kilobytepersecond |
| `dataWriteSpeed` | numeric | kilobytepersecond |
| `depth` | numeric | meter |
| `diameter` | numeric | meter |
| `fileSize` | numeric | kilobyte |
| `focalLength` | numeric | meter |
| `fuelConsumptionCity` | numeric | literperkilometer |
| `fuelConsumptionCombined` | numeric | literperkilometer |
| `fuelConsumptionHighway` | numeric | literperkilometer |
| `gender` | string | n/a |
| `genre` | string | n/a |
| `gpuFrequencyClock` | numeric | hertz |
| `heel` | numeric | meter |
| `height` | numeric | meter |
| `hips` | numeric | meter |
| `impedance` | numeric | OHM |
| `inkColor` | string | n/a |
| `innerDiameter` | numeric | meter |
| `inputVoltage` | numeric | volt |
| `inseam` | numeric | meter |
| `language` | string | n/a |
| `length` | numeric | meter |
| `lensDiameter` | numeric | meter |
| `lensWidth` | numeric | meter |
| `material` | string | n/a |
| `maxFocalLength` | numeric | meter |
| `maxFrequencyResponse` | numeric | hertz |
| `maxWeight` | numeric | kilogram |
| `maxWeightCapacity` | numeric | kilogram |
| `maxOperatingTemperature` | numeric | celsius |
| `maxStorageTemperature` | numeric | celsius |
| `memoryClockFrequency` | numeric | hertz |
| `mileage` | numeric | meter |
| `minFocalLength` | numeric | meter |
| `minFrequencyResponse` | numeric | hertz |
| `minWeight` | numeric | kilogram |
| `minWeightCapacity` | numeric | kilogram |
| `minOperatingTemperature` | numeric | celsius |
| `minStorageTemperature` | numeric | celsius |
| `mpn` | string | n/a |
| `neck` | numeric | meter |
| `operating_temperature` | numeric | celsius |
| `opticalWaveLength` | numeric | meter |
| `outerDiameter` | numeric | meter |
| `outputVoltage` | numeric | volt |
| `power` | numeric | watt |
| `powerConsumption` | numeric | watt |
| `powerConsumptionIdle` | numeric | watt |
| `powerDeveloped` | numeric | watt |
| `powerRMS` | numeric | watt |
| `printSpeedBlack` | numeric | pageperminute |
| `printSpeedColor` | numeric | pageperminute |
| `printSpeedCombined` | numeric | pageperminute |
| `processorCache` | numeric | kilobyte |
| `processorClockFrequency` | numeric | hertz |
| `publisher` | string | n/a |
| `ramSize` | numeric | kilobyte |
| `refreshRate` | numeric | hertz |
| `resolutionX` | numeric | n/a |
| `resolutionY` | numeric | n/a |
| `screenDiagonal` | numeric | meter |
| `shippingDepth` | numeric | meter |
| `shippingHeight` | numeric | meter |
| `shippingLength` | numeric | meter |
| `shippingWeight` | numeric | kilogram |
| `shippingWidth` | numeric | meter |
| `shoulders` | numeric | meter |
| `sku` | string | n/a |
| `sleeveLength` | numeric | meter |
| `style` | string | n/a |
| `subtitlesLanguage` | string | n/a |
| `supportedRamSize` | numeric | kilobyte |
| `thermalDesignPower` | numeric | watt |
| `waist` | numeric | meter |
| `warrantyDuration` | numeric | second |
| `waterResistance` | numeric | meter |
| `weight` | numeric | kilogram |
| `weightCapacity` | numeric | kilogram |
| `wheelDiameter` | numeric | meter |
| `width` | numeric | meter |

## Example Response

```json
{
  "request": {
    "pageUrl": "http://store.livrada.com/collections/all/products/before-i-go-to-sleep",
    "api": "product",
    "options": [],
    "fields": "title,text,offerPrice,regularPrice,saveAmount,pageUrl,images",
    "version": 3
  },
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
      ],
      "diffbotUri": "product|1|937176621"
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

If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to the Product API endpoint for analysis:

```plaintext
https://api.diffbot.com/v3/product?token=...&url=...
```

Please note that the `url` argument is still required, and will be used to resolve any relative links contained in the markup.

Provide the content to analyze as your POST body, and specify the `Content-Type` header as `text/html`.

### HTML Post Sample

```plaintext
curl -H "Content-Type: text/html" -d '<html><head><title>Something to Buy</title></head><body><h2>A Pair of Jeans</h2><div>Price: $31.99</div></body></html>' 'https://api.diffbot.com/v3/product?token=...&url=http%3A%2F%2Fstore.diffbot.com'
```
