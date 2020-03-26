---
id: api-bulk
title: Bulk API
sidebar_label: Bulk API
---

The Bulk API allows you to submit large numbers of URLs for Diffbot API processing. It is built atop the [Crawlbot](api-crawlbot-api) API and shares much of the same underlying model. Both APIs return data in JSON format.

## Creating a Bulk Job

To create a bulk job, make a POST request to `https://api.diffbot.com/v3/bulk`.

Set your `Content-Type` header to `application/x-www-form-urlencoded` (not `multipart/form-data`). POST body content should be in querystring format (key/value pairs), e.g.:

```plaintext
name=bulkTest&token=sampletoken&urls=https://www.diffbot.com https://blog.diffbot.com&apiUrl=https://api.diffbot.com/v3/analyze
```

Your POST body should contain the following fields:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://www.diffbot.com/pricing) |
| `name` | Job name. This should be a unique identifier and will be used to modify your bulk job and retrieve its output. |
| `urls` | Space-delimited list of URLs to process. If you are on the Startup plan, jobs must contain at least 50 URLs. |
| `apiUrl` | The full Diffbot API to be used for each URL. For instance, to process each URL via the article API, supply `https://api.diffbot.com/v3/article`. You may also include API parameters, e.g. `https://api.diffbot.com/v3/article?fields=meta,tags`. </td></tr><td colspan="2">**Optional arguments**</td> |
| `customHeaders` | Set custom headers to be used for processing each URL. Send multiple `customHeaders` values in your POST body, with header keys/values delimited by a colon (and URL-encoded). [See more information on using this functionality](guides-custom-headers-crawl). |
| `notifyEmail` | Send a message to this email address when the bulk job completes. |
| `notifyWebhook` | Pass a URL to be notified when the bulk job completes. You will receive a POST with the full [JSON response](#response) in the POST body. |
| `obeyRobots` | Pass `obeyRobots=0` to ignore a site's robots.txt instructions. |
| `repeat` | Specify the number of days as a floating-point (e.g. `repeat=7.0`) to repeat this job. By default bulk jobs will not be repeated. |
| `maxRounds` | Specify the maximum number of repeats. Use `maxRounds=-1` to continually repeat. |
| `pageProcessPattern` | Enter &#124;&#124;-separated strings to limit pages processed to those whose HTML contains *any* of the content strings. If a page does not contain at least one of the strings, it will be ignored. |

### Response

Upon adding a new bulk job, you will receive a success message in the JSON response, in addition to full job details:

```json
"response": "Successfully added urls for spidering."
```

## Pausing, Deleting or Restarting Bulk Jobs

You can manage your bulk jobs by making GET requests to the same endpoint, `https://api.diffbot.com/v3/bulk`.

Provide the following data:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://www.diffbot.com/pricing) |
| `name` | Job name as defined when the bulk was created. |
| `pause` | Pass `pause=1` to pause a bulk job. Pass `pause=0` to resume a paused job. |
| `restart` | Pass `restart=1` to restart a bulk job. This will erase all processed data and re-process all of the submitted URLs. |
| `delete` | Pass `delete=1` to delete a job, and all associated data, completely. |

## Retrieving Bulk Job Data

To download results please make a GET request to `https://api.diffbot.com/v3/bulk/data`. Provide the following arguments based on the data you need. By default the complete extracted JSON data will be downloaded.

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://www.diffbot.com/pricing) |
| `name` | Name of the bulk job whose data you wish to download. |
| `format` | Request `format=csv` to download the extracted data in CSV format (default: `json`). Note that CSV files will only contain top-level fields. </td></tr><td colspan="2">**For diagnostic data:**</td> |
| `type` | Request `type=urls` to retrieve the bulk [URL Report](explain-bulk-url-report.md) (CSV). |
| `num` | Pass an integer value (e.g. `num=100`) to request a subset of URLs, most recently processed first. |

## Using the Search API to Retrieve Bulk Job Data

You can also use Diffbot's [Search API](api-search.md) to fine-tune the data retrieved from your Crawlbot or Bulk API jobs.

[Search API documentation](api-search.md)

## Viewing Bulk Job Details

Your active bulk jobs (along with any Crawlbot crawls) will be returned in the `jobs` object in a request made to `https://api.diffbot.com/v3/bulk`.

To retrieve a single job's details, provide the job's `name` in your request:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://www.diffbot.com/pricing) |
| `name` | Name of bulk job (or crawl) to retrieve. |

To view all bulk jobs (and crawls), simply omit the `name` parameter: `https://api.diffbot.com/v3/bulk?token={{token}}`

### Response

This will return a JSON response of your token's Bulk API jobs (and crawls). Sample response from a single job:

```json
{
  "jobs": [
    {
      "name": "bulkJob",
      "type": "bulk",
      "jobCreationTimeUTC": 1426872272,
      "jobCompletionTimeUTC": 1426872504,
      "jobStatus": {
        "status": 9,
        "message": "Job has completed and no repeat is scheduled."
      },
      "sentJobDoneNotification": 1,
      "objectsFound": 100,
      "urlsHarvested": 200,
      "pageCrawlAttempts": 100,
      "pageCrawlSuccesses": 100,
      "pageCrawlSuccessesThisRound": 100,
      "pageProcessAttempts": 100,
      "pageProcessSuccesses": 100,
      "pageProcessSuccessesThisRound": 100,
      "maxRounds": 0,
      "repeat": 0.0,
      "crawlDelay": 0.25,
      "obeyRobots": 0,
      "roundsCompleted": 0,
      "roundStartTime": 0,
      "currentTime": 1443822680,
      "currentTimeUTC": 1443822680,
      "apiUrl": "https://api.diffbot.com/v3/analyze",
      "urlCrawlPattern": "",
      "urlProcessPattern": "",
      "pageProcessPattern": "",
      "urlCrawlRegEx": "",
      "urlProcessRegEx": "",
      "maxHops": -1,
      "downloadJson": "https://api.diffbot.com/v3/bulk/download/sampletoken-bulkJob_data.json",
      "downloadUrls": "https://api.diffbot.com/v3/bulk/download/sampletoken-bulkJob_urls.csv",
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
| 6 | Job paused |
| 7 | Job in progress |
| 8 | All crawling temporarily paused by root administrator for maintenance. |
| 9 | Job has completed and no repeat is scheduled |


<!--<tr><td>1</td><td>Job has reached maxRounds limit</td></tr>
<tr><td>2</td><td>Job has reached maxToCrawl limit</td></tr>
<tr><td>3</td><td>Job has reached maxToProcess limit</td></tr>
<tr><td>4</td><td>Next round to start in _____ seconds</td></tr>
<tr><td>5</td><td>No URLs were added to the crawl</td></tr>-->
