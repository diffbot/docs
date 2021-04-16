---
id: api-crawlbot-api
title: Crawlbot API
sidebar_label: Crawlbot API
todo: Modify links to old Dashboard
todo: Modify links to old API docs
---

The Crawlbot API allows you to programmatically manage <a href="https://app.diffbot.com/crawls/">Crawlbot</a> crawls and retrieve output. Crawlbot API responses are in JSON format.

## Creating or Updating a Crawl

**Note that the limit of active crawls on a single token is 1000. More information [here](error-too-many-collections.md).**

To create a crawl, make a POST request to `https://api.diffbot.com/v3/crawl`.

Provide the following data:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://www.diffbot.com/pricing). |
| `name` | Job name. This should be a unique identifier and can be used to modify your crawl or retrieve its output. |
| `seeds` | Seed URL(s). Must be [URL encoded](https://en.wikipedia.org/wiki/Percent-encoding). Separate multiple URLs with whitespace to spider multiple sites within the same crawl. If the seed contains a non-www subdomain ("https://blog.diffbot.com" or "https://docs.diffbot.com") Crawlbot will restrict spidering to the specified **subdomain**. |
| `apiUrl` | Full Diffbot API URL through which to process pages. E.g., `&apiUrl=https://api.diffbot.com/v3/article` to process matching links via the [Article API](https://www.diffbot.com/products/automatic/article). The Diffbot API URL can include querystring parameters to tailor the output. For example, `&apiUrl=https://api.diffbot.com/v3/product?fields=querystring,meta` will process matching links using the [Product API](https://www.diffbot.com/products/automatic/product), and also return the `querystring` and `meta` fields.<br><br>To automatically identify and process content using our [Analyze API](https://www.diffbot.com/products/automatic/analyze) (Smart Processing), pass `apiUrl=https://api.diffbot.com/v3/analyze?mode=auto` to return all page-types. See full Analyze API documentation under the <a href="/">Automatic APIs documentation</a>.<br><br>Be sure to [URL encode](https://en.wikipedia.org/wiki/Percent-encoding) your Diffbot API actions. |

You can refine your crawl using the following optional controls. [Read more on crawling versus processing](explain-crawling-versus-processing.md).

| Argument | Description |
| :------- | :---------- |
| `urlCrawlPattern` | Specify &#124;&#124;-separated **strings** to limit pages crawled to those whose URLs contain *any* of the content strings. You can use the exclamation point to specify a negative string, e.g. `!product` to exclude URLs containing the string "product," and the `^` and `$` characters to limit matches to the beginning or end of the URL.<br><br>The use of a `urlCrawlPattern` will allow Crawlbot to spider outside of the seed domain; it will follow all matching URLs regardless of domain. |
| `urlCrawlRegEx` | Specify a regular expression to limit pages **crawled** to those URLs that contain a match to your expression. This will override any `urlCrawlPattern` value. |
| `urlProcessPattern` | Specify &#124;&#124;-separated **strings** to limit pages processed to those whose URLs contain *any* of the content strings. You can use the exclamation point to specify a negative string, e.g. `!/category` to exclude URLs containing the string "/category," and the `^` and `$` characters to limit matches to the beginning or end of the URL. |
| `urlProcessRegEx` | Specify a regular expression to limit pages **processed** to those URLs that contain a match to your expression. This will override any `urlProcessPattern` value. |
| `pageProcessPattern` | Specify &#124;&#124;-separated strings to limit pages **processed** to those whose HTML contains *any* of the content strings. |

Additional (optional) Parameters:

| Argument | Description |
| :------- | :---------- |
| `customHeaders` | Set multiple custom headers to be used while crawling and processing pages sent to Diffbot APIs. Each header should be sent in its own `customHeaders` argument, with a colon delimiting the header name and value, and should be URL-encoded. For example, `&customHeaders=Accept-Language%3Aen-us`. [See more information on using this functionality](guides-custom-headers-crawl). |
| `useCanonical` | Pass `useCanonical=0` to disable deduplication of pages based on a canonical link definition. [See more](explain-page-deduplication.md). |
| `obeyRobots` | Pass `obeyRobots=0` to ignore a site's robots.txt instructions. |
| `restrictDomain` | Pass `restrictDomain=0` to allow limited crawling across subdomains/domains. [See more](guides-restrict-domain.md). |
| `useProxies` | Set value to `1` to force the use of proxy IPs for the crawl. This will utilize proxy servers for both crawling and processing of pages. |
| `maxHops` | Specify the depth of your crawl. A `maxHops=0` will limit **processing** to the seed URL(s) only -- no other links will be processed; `maxHops=1` will process all (otherwise matching) pages whose links appear on seed URL(s); `maxHops=2` will process pages whose links appear on those pages; and so on.<br><br>By default (`maxHops=-1`) Crawlbot will crawl and process links at any depth. |
| `maxToCrawl` | Specify max pages to spider. Default: 100,000. |
| `maxToProcess` | Specify max pages to process through Diffbot APIs. Default: 100,000. |
| `maxToCrawlPerSubdomain` | Specify max pages to spider per subdomain. Default: no limit (-1) |
| `maxToProcessPerSubdomain` | Specify max pages to process per subdomain. Default: no limit (-1) |
| `notifyEmail` | Send a message to this email address when the crawl hits the `maxToCrawl` or `maxToProcess` limit, or when the crawl completes. |
| `notifyWebhook` | Pass a URL to be notified when the crawl hits the `maxToCrawl` or `maxToProcess` limit, or when the crawl completes. You will receive a POST with `X-Crawl-Name` and `X-Crawl-Status` in the headers, and the job's [JSON metadata](#json-metadata) in the POST body. Note that in webhook POSTs the parent `jobs` will not be sent—only the individual job object will be returned.<br><br>We've integrated with Zapier to make webhooks even more powerful; [read more](guides-zapier.md) on what you can do with Zapier and Diffbot. |
| `crawlDelay` | Wait this many seconds between each URL crawled from a single IP address. Specify the number of seconds as an integer or floating-point number (e.g., `crawlDelay=0.25`). |
| `repeat` | Specify the number of days as a floating-point (e.g. `repeat=7.0`) to repeat this crawl. By default crawls will not be repeated. |
| `seedRecrawlFrequency` | Useful for specifying a frequency, in number of days, to recrawl seed urls, which is independent of the overall recrawl frequency given by `repeat`. Defaults to `seedRecrawlFrequency=-1` to use the default frequency. |
| `onlyProcessIfNew` | By default repeat crawls will only process new (previously unprocessed) pages. Set to 0 (`onlyProcessIfNew=0`) to process all content on repeat crawls. |
| `maxRounds` | Specify the maximum number of crawl repeats. By default (`maxRounds=0`) repeating crawls will continue indefinitely. |

<!--
<h4><a name="filterExpressions"></a>URL Filter Expressions</h4>
<p>Crawlbot 2.0 features a powerful URL filtering engine allowing you to process URLs via myriad Diffbot APIs. You may pass multiple filters in each crawl. Each filter consists of an `expression` (the content to match) and an `action` (the processing or crawling action to take).</p>
<p>Filters are processed in the order in which they are sent in the querystring. URLs can only match a single filter.</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<tbody>
<tr><td colspan="2">**Expression options**</td></tr>
<tr><td>`expression=*`</td><td>Matches all (remaining) pages. If this is the first filter expression it will match all pages.</td></tr>
<tr><td>`expression=*string*`</td><td>Matches all (remaining) URLs containing the text string.</td></tr>
<tr><td>`expression=^*string*`</td><td>Matches all (remaining) URLs starting with the text string.</td></tr>
<tr><td>`expression=$*string*`</td><td>Matches all (remaining) URLs ending with the text string.</td></tr>
<tr><td>
<div>`expression=!*string*`,<br />
`expression=!^*string*`,<br />
`expression=!$*string*`</td><td>Matches all (remaining) URLs *not* containing, starting with, or ending with the text string.</td></tr>
<tr><td colspan="2">Multiple expressions can be combined in the same filter using `&&`. This will require all expressions to match. Ampersands should be url-encoded, e.g. `&expression=products%26%26^https%26%26!$.html`.</td></tr>

<tr><td colspan="2">**Filter actions**</td></tr>
<tr><td>`action=doNotCrawl`</td><td>Do not crawl/visit the matching pages.</td></tr>
<tr><td>`action=doNotProcess`</td><td>Do not process the matching pages. Will still crawl the matching pages for links.</td></tr>
<tr><td>`action=*Diffbot API*`</td><td>Process the matching pages via the specified Diffbot API.
</td></tr>
</tbody>
</table>
-->

### Response

Upon adding a new crawl, you will receive a success message in the JSON response, in addition to full crawl details:

```json
"response": "Successfully added urls for spidering."
```

Please note that if you get the "Too Many Collections" error, you hit our 1000-active-crawls limit. More information [here](error-too-many-collections.md).

## Pausing, Restarting or Deleting Crawls

You can manage your crawls by making POST requests to the same endpoint, `https://api.diffbot.com/v3/crawl`.

Provide the following data:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://diffbot.com/pricing). |
| `name` | Job name as defined when the crawl was created. </td></tr><td colspan="2">**Job-control arguments** |
| `roundStart` | Pass `roundStart=1` to force the start of a new crawl "round" (manually repeat the crawl). If `onlyProcessIfNew` is set to 1 (default), only newly-created pages will be processed. |
| `pause` | Pass `pause=1` to pause a crawl. Pass `pause=0` to resume a paused crawl. |
| `restart` | Restart removes all crawled data while maintaining crawl settings. Pass `restart=1` to restart a crawl. |
| `delete` | Pass `delete=1` to delete a crawl, and all associated data, completely. |

## Retrieving Crawlbot API Data

To download results please make a GET request to `https://api.diffbot.com/v3/crawl/data`. Provide the following arguments based on the data you need. By default the complete extracted JSON data will be downloaded.

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://diffbot.com/pricing). |
| `name` | Name of the crawl whose data you wish to download. |
| `format` | Request `format=csv` to download the extracted data in CSV format (default: `json`). Note that CSV files will only contain top-level fields. </td></tr><td colspan="2">**For diagnostic data:**</td> |
| `type` | Request `type=urls` to retrieve the crawl [URL Report](explain-crawl-url-report.md) (CSV). |
| `num` | Pass an integer value (e.g. `num=100`) to request a subset of URLs, most recently crawled first. |

## Using the Search API to Retrieve Crawl Data

You can also use Diffbot's [Search API](api-search.md) to fine-tune the data retrieved from your Crawlbot or Bulk API jobs.

[Search API documentation](api-search.md)

## Viewing Crawl Details

Your crawls (along with any Bulk API jobs) will be returned in the `jobs` object in a request made to `https://api.diffbot.com/v3/crawl`.

To retrieve a single crawl's details, provide the crawl's `name` in your request:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://diffbot.com/pricing). |
| `name` | Name of crawl to retrieve. |

To view all crawls (and bulk jobs), simply omit the `name` parameter: `https://api.diffbot.com/v3/crawl?token={{token}}`

<a name="json-metadata"></a>

### Response

This will return a JSON response of your token's crawls (and Bulk API) jobs in the `jobs` object. If you have specified a single job name, only one job's details will be returned.

Sample response from a single crawl:

```json
{
  "jobs": [
    {
      "name": "crawlJob",
      "type": "crawl",
      "jobCreationTimeUTC": 1427410692,
      "jobCompletionTimeUTC": 1427410798,
      "jobStatus": {
        "status": 9,
        "message": "Job has completed and no repeat is scheduled."
      },
      "sentJobDoneNotification": 1,
      "objectsFound": 177,
      "urlsHarvested": 2152,
      "pageCrawlAttempts": 367,
      "pageCrawlSuccesses": 365,
      "pageCrawlSuccessesThisRound": 365,
      "pageProcessAttempts": 210,
      "pageProcessSuccesses": 210,
      "pageProcessSuccessesThisRound": 210,
      "maxRounds": 0,
      "repeat": 0.0,
      "crawlDelay": 0.25,
      "obeyRobots": 1,
      "maxToCrawl": 100000,
      "maxToProcess": 100000,
      "onlyProcessIfNew": 1,
      "seeds": "http://docs.diffbot.com",
      "roundsCompleted": 0,
      "roundStartTime": 0,
      "currentTime": 1443822683,
      "currentTimeUTC": 1443822683,
      "apiUrl": "https://api.diffbot.com/v3/analyze",
      "urlCrawlPattern": "",
      "urlProcessPattern": "",
      "pageProcessPattern": "",
      "urlCrawlRegEx": "",
      "urlProcessRegEx": "",
      "maxHops": -1,
      "downloadJson": "http://api.diffbot.com/v3/crawl/download/sampletoken-crawlJob_data.json",
      "downloadUrls": "http://api.diffbot.com/v3/crawl/download/sampletoken-crawlJob_urls.csv",
      "notifyEmail": "support@diffbot.com",
      "notifyWebhook": "http://www.diffbot.com"
    }
  ]
}
```

## Status Codes

The `jobStatus` object will return the following status codes and associated messages:

| Status | Message |
| :----- | :------ |
| 0 | Job is initializing |
| 1 | Job has reached maxRounds limit |
| 2 | Job has reached maxToCrawl limit |
| 3 | Job has reached maxToProcess limit |
| 4 | Next round to start in _____ seconds |
| 5 | No URLs were added to the crawl |
| 6 | Job paused |
| 7 | Job in progress |
| 8 | All crawling temporarily paused by root administrator for maintenance |
| 9 | Job has completed and no repeat is scheduled |
| 10 | Failed to crawl any seed<br>*Indicates a problem retrieving links from the seed URL(s)* |
