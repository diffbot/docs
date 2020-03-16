---
id: cb-basics-bulk
title: Introduction into Bulk jobs
sidebar_label: Introduction into Bulk jobs
---

Diffbot's Bulk Processor lets you send a large quantity of URLs through a [Diffbot extraction API](api-basics-index) for fast, asynchronous processing.

The Bulk Processor sends all submitted page URLs to a Diffbot API (either automatic or custom). All structured page results are then compiled into a single "collection," which can be downloaded in full or searched using the [Search API](cb-basics-search).

Note: The Bulk Processor is not a crawler: it does not spider a site for additional links. You must supply each URL you wish to process. For crawling/spidering, see [Crawlbot](cb-basics-cb).

### Creating a Bulk Job

Each bulk job requires the following:

- a name (e.g. NewProducts).
- Multiple URLs to process, one per line. If you are on the Startup plan, jobs require at least 50 URLs.
- A Diffbot API to be used for processing pages.

![Setting up a bulk job](/img/bulk.png)

The above image shows how to extract all the articles from Diffbot's old knowledgebase.

### Passing Diffbot API Querystring Arguments

The Bulk Processor hands off URLs to [specific Diffbot APIs](https://diffbot.com/products/automatic) for processing. Each of these APIs has optional querystring arguments that can be used to modify the information returned -- most commonly the `fields` argument, for adding optional fields to the Diffbot response.

> Note: Top-level fields in our V3 APIs (e.g., "links" or "meta") will not be indexed or captured in bulk jobs.

### Notifications

You can choose to be notified at the conclusion of each bulk job, either by [webhook](http://en.wikipedia.org/wiki/Webhook) or email.

For webhook, you will need to supply a URL that is capable of receiving a POST request. One alternative to building your own: use the Diffbot app on [Zapier](https://zapier.com/zapbook/diffbot/) to receive webhook notifications.

### Accessing Bulk Job Data

> Note: Completed or paused bulk jobs will be automatically deleted after thirty days. Unlimited storage and searching is available with the [Pro plan](https://www.diffbot.com/pricing).

You can access processed data anytime during your bulk job, or after it completes. There are two download options within the interface:

- Full JSON Output: A single file, in valid JSON, containing all of the processed objects from your job.
- CSV Output: A single comma-separated-values file of the **top-level** objects. Nested elements (article images, tags, etc.) will not be returned in the CSV.

If you only want to access a subset of your data, the [Search API](cb-basics-search) allows much more flexibility in searching and retrieving only the matching items from queries.

## Bulk Processing Basics

- [Diffbot Regex Syntax](explain-regex)
- [Are bulk processing URLs returned in the same order as submitted?](explain-bulk-processing-results-ordering)
- [How quickly does the Bulk Service process web pages?](explain-bulk-processing-speed)
- [When is bulk job data deleted?](explain-when-crawl-bulk-data-deleted)
- [Bulk Processing URL Report](explain-bulk-url-report)
- [Do Diffbot APIs Follow Redirects?](explain-apis-follow-redirects)
- [Do Diffbot APIs Execute JavaScript?](explain-apis-javascript-support)

## Bulk Processing specifics

- [Using the Bulk API Querystring Parameter](guides-crawlbot-bulk-querystring-parameter)
