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

### Speed and Results Ordering

The Bulk API/Bulk Processing service simultaneously extracts data from multiple pages at once, and indexes the data as it is returned from Diffbot APIs.

Because many factors enter in to when data is successfully returned — among them the speed of a site’s response, the need for retries if a site returns a temporary error, and the potential for incorrect or invalid URLs — there is no reliable order to the output of a downloaded CSV or JSON result set.

The performance of Diffbot’s Bulk processing web extraction service depends on many of the same factors. The most common reason for a bulk job returning data more slowly than expected, however, is if a job’s URLs are from a limited number of sources and/or if a job’s URLs are from very popular sources. Diffbot has a global queue in order to maintain a level of politeness toward individual domains and IP addresses (and prevent overloading individual servers and sites). A bulk job with URLs from a single domain will finish much more slowly than one with URLs from many different locations.

Note that spreading out URLs across many different jobs will have no performance effect, as our global queue prevents visiting a single site too often from any part of Diffbot’s infrastructure.

## Bulk Processing Basics

- [Diffbot Regex Syntax](explain-regex)
- [When is bulk job data deleted?](explain-when-crawl-bulk-data-deleted)
- [Bulk Processing URL Report](explain-bulk-url-report)
- [Do Diffbot APIs Follow Redirects?](explain-apis-follow-redirects)
- [Do Diffbot APIs Execute JavaScript?](explain-apis-javascript-support)

## Bulk Processing specifics

- [Using the Bulk API Querystring Parameter](guides-crawlbot-bulk-querystring-parameter)
