---
id: api-search
title: Search API
sidebar_label: Search API
---

Diffbot's Search API allows you to search the extracted content of your Diffbot "collections." A collection is a discrete <a href="/dev/crawl">Crawlbot</a> or <a href="/dev/bulk">Bulk API</a> job, and includes all of the web pages processed within that job.

In order to search a collection, you must first create that collection using either Crawlbot or the Bulk API. A collection can be searched before a crawl or bulk job is finished.

## Request

To use the Search API, perform a GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/search
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://www.diffbot.com/pricing) |
| `query` | Search query. Must be [URL-encoded](https://en.wikipedia.org/wiki/Percent-encoding). Please see [query operators](#query-operators) below. |
| `col` | Name of the collection (Crawlbot or Bulk job name) to search. </td></tr><tr><td colspan="2">**Optional arguments**</td> |
| `num` | Number of results to return. Default is 20. To return all results in the search, pass `num=all`. |
| `start` | Ordinal position of first result to return. (First position is 0.) Default is 0. |

## Query Operators

The `query` argument contains the actual search contents you wish to perform on your collection(s). Multiple operators and values can be combined.

| query= | Returns... |
| :----- | :--------- |
| computer vision | All objects containing "computer" and "vision" anywhere in all Diffbot-extracted fields. |
| "web page analysis" | All objects containing the phrase "web page analysis" anywhere in all Diffbot-extracted fields. |
| author:"John Henry" | All objects containing "John Henry" in the `author` field. All Diffbot fields within a collection can be queried against.<br><br>**Other examples:** tags:"Barack Obama", offerPrice:10.00 |
| images.caption:flower | All objects containing "flower" in the `caption` field within a nested `images` array.<br><br>**Other example:** images.url:amazon.com |
| type:article | All objects identified as articles / processed by the Article API.<br><br>**Other examples:** type:product, type:image |
| football -49ers | All objects containing "football" but not containing "49ers," in all Diffbot-extracted fields.<br><br>**Other examples:** title:pantene -title:conditioner, text:diffbot -author:"farhad manjoo" |
| john OR paul | Objects containing either "john" or "paul" in Diffbot-extracted fields. `OR` must be capitalized.<br><br>**Other examples:** title:ukraine OR title:putin, "bill clinton" OR "george bush", title:"puppy chow" OR text:"dog food" |
| george AND ringo | Objects containing both "george" and "ringo" in Diffbot-extracted fields. `AND` must be capitalized.<br><br>**Other examples:** title:lakers AND text:basketball, "red sox" AND author:"bill simmons" |
| (obama OR clinton) AND president | Objects containing either "obama" or "clinton," and also "president." Parentheses can be used to nest Boolean queries.<br><br>**Other examples:** (title:diffbot AND title:robots) OR title:startup |
| site:diffbot.com | All objects extracted from diffbot.com. The site operator queries against values in the `pageUrl` and `resolvedPageUrl` fields. |
| sortby:timestamp | Objects sorted (descending) by the specified Diffbot field. Must be a numeric (e.g. "offerPrice") or date field. For date formatting, see [Date Queries](#date-queries) below. |
| revsortby:date | Objects sorted (ascending) by the specified Diffbot field. Must be a numeric or date field. For date formatting, see [Date Queries](#date-queries) below. |
| min:timestamp:1426784899 | All objects indexed (processed) after March 19, 2015 (in Unix epoch time). The `min` or `max` operators work only with numeric or date fields. For date formatting options, see [Date Queries](#date-queries) below. |
| max:offerPrice:1000 | All objects with an offerPrice value equal to or less than "1000." Must be a numeric or date field. For date formatting options, see [Date Queries](#date-queries) below. |

### Query URL Encoding

Be sure to [URL-encode](https://en.wikipedia.org/wiki/Percent-encoding) your query. The following examples show some sample queries properly encoded.

| Query | URL-Encoded Query |
| :---- | :---------------- |
| computer vision | computer%20vision |
| obama type:article sortby:date | obama%20type%3Aarticle%20sortby%3Adate |
| text:cats author:"Jet Li" min:date:1399669321 | text%3Acats%20author%3A%22Jet%20Li%22%20min%3Adate%3A1399669321 |
| min:date:"Thu, 22 May 2014 00:00:00 GMT" | min%3Adate%3A%22Thu%2C%2022%20May%202014%2000%3A00%3A00%20GMT%22 |

The space character can be represented by "%20" or the "+"-sign.

### Date Queries

You can query against Diffbot API `date` fields (the extracted article or discussion post date, for instance), or against the `timestamp` field, which represents the time of an object's indexing into the collection.

The `timestamp` field can be used to [return the latest content](guides-download-latest-round-crawl-results.md) from a crawl or bulk job (e.g. `min:timestamp:2015-03-01`, for instance only the objects found in the last crawl round, or since the last search was run.

When querying dates, your date values should be in one the following formats:

- [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), e.g. `2014-05-09` or `2014-05-10T17:40:25+00:00`
- [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time), e.g. `1399669321`
- [RFC 1123 (HTTP/1.1)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3), e.g. `"Fri, 09 May 2014 23:41:22 GMT"`

Be sure to wrap any space-containing date strings in quotation marks.

## Response

The Search API returns all matching objects found in the collection(s) searched in a JSON format.

Each response includes a `request` object (metadata specific to the search request), and an `objects` array, which will include the extracted information for all matching objects.

The specific fields returned within each object depend upon the type of each object, and the fields requested in the Crawlbot or Bulk API jobs that populate your collection(s).

```json
{
  "request": {
    "num": 20,
    "col": "sampleCollection",
    "start": 0,
    "token": "...",
    "query": "diffy"
  },
  "objects": [
    {
    "type": "article",
    "title": "Diffbot's New Product API Teaches Robots to Shop Online",
    "author": "John Davi",
    "date": "Wed, 31 Jul 2013 08:00:00 GMT",
    "videos": [
      {
        "primary": "true",
        "url": "http://www.youtube.com/embed/lfcri5ungRo?feature=oembed"
      }
    ],
    "tags": [
      "e-commerce",
      "SaaS"
    ],
    "pageUrl": "http://blog.diffbot.com/diffbots-new-product-api-teaches-robots-to-shop-online/",
    "humanLanguage": "en",
    "text": "Diffbot's human wranglers are proud today to announce the release of our newest product: an API for... products!\nThe Product API can be used for extracting clean, structured data from any e-commerce product page. It automatically makes available all the product data you'd expect: price, discount/savings amount, shipping cost, product description, any relevant product images, SKU and/or other product IDs.\nEven cooler: pair the Product API with Crawlbot, our intelligent site-spidering tool, and let Diffbot determine which pages are products, then automatically structure the entire catalog. Here's a quick demonstration of Crawlbot at work:\nWe've developed the Product API over the course of two years, building upon our core vision technology that's extracted structured data from billions of web pages, and training our machine learning systems using data from tens of thousands of unique shopping sites. We can't wait for you to try it out.\nWhat are you waiting for? Check out the Product API documentation and dive on in! If you need a token, check out our pricing and plans (including our Free plan).\nQuestions? Hit us up at support@diffbot.com.",
    "html": "<p>Diffbot’s human wranglers are proud today to announce the release of our newest product: an API for… products!</p><p>The <a href=\"http://www.diffbot.com/products/automatic/product\">Product API</a> can be used for extracting clean, structured data from any e-commerce product page. It automatically makes available all the product data you’d expect: price, discount/savings amount, shipping cost, product description, any relevant product images, SKU and/or other product IDs.</p><p>Even cooler: pair the Product API with <a href=\"http://www.diffbot.com/products/crawlbot\">Crawlbot</a>, our intelligent site-spidering tool, and let Diffbot determine which pages are products, then automatically structure the entire catalog. Here’s a quick demonstration of Crawlbot at work:</p><figure><iframe frameborder=\"0\" src=\"http://www.youtube.com/embed/lfcri5ungRo?feature=oembed\"></iframe></figure><p>We’ve developed the Product API over the course of two years, building upon our core vision technology that’s extracted structured data from billions of web pages, and training our machine learning systems using data from tens of thousands of unique shopping sites. We can’t wait for you to try it out.</p><p>What are you waiting for? Check out the <a href=\"http://www.diffbot.com/products/automatic/product\">Product API documentation</a> and dive on in! If you need a token, check out our <a href=\"http://www.diffbot.com/pricing\">pricing and plans</a> (including our Free plan).</p><p>Questions? Hit us up at <a href=\"mailto:support@diffbot.com\">support@diffbot.com</a>.</p>",
    "diffbotUri": "article|3|768070723"
    }
  ]
}
```

## Example Searches

#### The most recently-written 40 articles in the "dailycrawl" collection.

- query: `type:article sortby:date`
- col: `dailycrawl`
- num: `40`

```plaintext
https://api.diffbot.com/v3/search?token=...&num=40&col=dailycrawl&query=type%3Aarticle%20sortby%3Adate
```

#### 100 articles written by Bill Simmons, at Grantland.com, from the "sports" collection, ordered by oldest first.

- query: `type:article author:"Bill Simmons" site:grandland.com revsortby:date`
- col: `sports`
- num: `100`

```plaintext
https://api.diffbot.com/v3/search?token=...&num=100&col=sports&query=type%3Aarticle%20author%3A%22Bill%20Simmons%22%20site%3Agrandland.com%20revsortby%3Adate
```

#### 20 articles mentioning "ukraine" or "Russia" in the main text, ordered by most recently indexed/crawled, from the "russiatoday" collections:

- query: `text:ukraine OR text:russia sortby:timestamp`

```plaintext
https://api.diffbot.com/v3/search?token=...&col=russiatoday&query=text%3Aukraine%20OR%20text%3Arussia%20sortby%3Atimestamp
```

#### The second page of 20 products with "Nike" in the title, between $40 and $50, from the "shoestores" collection:

- query: `type:product title:nike min:offerPrice:40 max:offerPrice:50`
- col: `shoestores`
- start: `20`

```plaintext
https://api.diffbot.com/v3/search?token=...&col=shoestores&start=20query=type%3Aproduct%20title%3Anike%20min%3AofferPrice%3A40%20max%3AofferPrice%3A50
```
