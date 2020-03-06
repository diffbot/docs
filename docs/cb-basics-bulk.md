---
id: cb-basics-bulk
title: Introduction into Bulk jobs
sidebar_label: Introduction into Bulk jobs
---

Diffbot's Bulk Processor lets you send a large quantity of URLs through a [Diffbot extraction API](api-basics-index) for fast, asynchronous processing.

The Bulk Processor sends all submitted page URLs to a Diffbot API (either automatic or custom). All structured page results are then compiled into a single "collection," which can be downloaded in full or searched using the [Search API](cb-basics-search).

Note: The Bulk Processor is not a crawler: it does not spider a site for additional links. You must supply each URL you wish to process. For crawling/spidering, see [Crawlbot](cb-basics-cb).

## Bulk Processing Basics

- [Bulk Processing Tutorial](tutorials-bulk)
- [Diffbot Regex Syntax](explain-regex)
- [Are bulk processing URLs returned in the same order as submitted?](explain-bulk-processing-results-ordering)
- [How quickly does the Bulk Service process web pages?](explain-bulk-processing-speed)
- [When is bulk job data deleted?](explain-when-crawl-bulk-data-deleted)
- [Bulk Processing URL Report](explain-bulk-url-report)

## Bulk Processing specifics

- [Using the Bulk API Querystring Parameter](guides-crawlbot-bulk-querystring-parameter)
