---
id: cb-intro-bulk
title: Introduction into Bulk jobs
sidebar_label: Introduction
---

Diffbot's Bulk Processor lets you send a large quantity of URLs through a [Diffbot extraction API](api-basics-index) for fast, asynchronous processing.

The Bulk Processor sends all submitted page URLs to a Diffbot API (either automatic or custom). All structured page results are then compiled into a single "collection," which can be downloaded in full or searched using the [Search API](cb-basics-search).

Note: The Bulk Processor is not a crawler: it does not spider a site for additional links. You must supply each URL you wish to process. For crawling/spidering, see [Crawlbot](cb-basics-cb).

## Data Retention

Inactive bulk jobs will be deleted within ten days of completion. This includes the extracted data as well as the job meta information (name, settings, etc.).

“Active” jobs are those that are not in a permanently “paused” state. Currently active jobs will not be deleted or removed from your account. After a job finishes, it will be subject to regular deletion policies.

## Bulk Processing Basics

- [Diffbot Regex Syntax](explain-regex)
- [When is bulk job data deleted?](explain-when-crawl-bulk-data-deleted)
- [Bulk Processing URL Report](explain-bulk-url-report)
- [Do Diffbot APIs Follow Redirects?](explain-apis-follow-redirects)
- [Do Diffbot APIs Execute JavaScript?](explain-apis-javascript-support)
- [Using Diffbot Proxy Servers / Proxy IPs](explain-using-different-proxies)

## Bulk Processing specifics

- [Using the Bulk API Querystring Parameter](guides-crawlbot-bulk-querystring-parameter)
