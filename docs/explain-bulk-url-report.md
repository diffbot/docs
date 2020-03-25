---
id: explain-bulk-url-report
title: Bulk Processing URL Report
sidebar_label: Bulk Processing URL Report
---

The URL Report provides status on every URL crawled and/or processed by a Crawlbot or Bulk API job.

The report is a comma-separated-values (CSV) file, and is available to download from your crawl or bulk job status page as soon as a job has begun - 

![Download the URL report using the "Detailed URL report (CSV)" link.](/img/url_report.png)

... or, using the [Crawlbot API](api-crawlbot-api) or [Bulk Service API](api-bulk), via the `https://api.diffbot.com/v3/crawl/data` or `http://api.diffbot.com/v3/bulk/data` endpoints.

Each row corresponds to a single URL evaluated, and provides the following information:

| Column | Description |
| ------ | ----------- |
| URL | Web page URL (normalized). Note that due to [URL normalization](https://en.wikipedia.org/wiki/URL_normalization), URL Report values may not match submitted URLs exactly. |
| Doc ID | Document ID of the crawled page. This corresponds to the `parentUrlDocId` field returned in crawl or bulk job JSON data. |
| URL Discovered Time | Time the URL was first seen/encountered. |
| Crawled Time | Time the URL was crawled (downloaded and its source spidered for links). |
| Content Length | Number of characters comprising the HTML source. |
| Duplicate Of | If the page source is an exact duplicate of another page, the Doc ID of the duplicate page will be returned. |
| Redirects | Number of redirects pursued before arriving at the final destination URL. |
| Redirected To | Ultimate destination URL if redirected. |
| Robots.txt Crawl Delay (ms) | If the page is subject to a robots.txt "crawl delay" the value in milliseconds will be returned. |
| Crawl Round | If the crawl is a repeating/recurring crawl, the crawl "round" in which this URL was evaluated. Note: URLs will be duplicated for each round in which they are crawled. |
| Crawl Try # | If there is an error crawling the page (spidering for links), any retries will be enumerated. |
| Hop Count | This indicates the page's distance from seed(s): "1" indicates the URL was linked-to from a seed; "2" indicates the URL appeared on a page that itself was linked-to from a seed. Hops can be used to narrow crawling via Crawlbot's `maxHops` argument. |
| Crawl Status | Returns "Success" if the page was successfully crawled (spidered for links). |
| Diffbot URI | If the page was processed via a Diffbot API, and an object—product, article, image, discussion, etc.—found, the object's `diffbotUri` will be returned. |
| Process Attempted | Indicates if the page was sent to a Diffbot API for processing. |
| Process Response | Indicates whether or not the Diffbot processing was successful. |
| Proxy Used | Indicates whether or not a proxy IP address was used for the URL. [Read more on proxies](explain-using-different-proxies). |