---
id: explain-what-counts-as-api-call
title: What counts as an API call?
sidebar_label: What counts as an API call?
---

Each time you send a URL to a Diffbot API it counts as an API call. Repeated pages are counted as additional API calls. [Errors](error-errors) are not counted as API calls.

## Analyze API Requests

Pages sent to the [Analyze API](api-intro-analyze) count as a single API call, even if the submitted link results in an article, product, discussion or other page-type extraction. (There is no double-charge for extracted pages.)

## Multiple-Page Articles, Discussions or Custom APIs

If an article or discussion includes multiple concatenated pages — [read more about page-concatenation](guides-multi-page-articles-discussions) — each individual page will count as a separate API call.

## Crawlbot API, Bulk API and the Search API

Individual URLs sent via the Bulk API count as individual API calls. E.g., a bulk job containing 500 URLs will incur 500 API calls.
There is no charge for use of Crawlbot or our Bulk API; calls to those APIs are not charged. Within a crawl, pages that are merely crawled for links are not counted as API calls. Any pages processed within a crawl count as API calls. ([Read about the difference between “crawled” and “processed” pages](explain-crawling-versus-processing))

[Search API](cb-intro-search) requests for download of individual crawl or bulk job data are not charged.

## Proxy Usage

Calls that require use of [Diffbot proxy servers](explain-using-different-proxies) will bill at a rate of 2x; that is, each page processed using a proxy will count as two API calls.
