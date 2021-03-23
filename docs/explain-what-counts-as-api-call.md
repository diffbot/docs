---
id: explain-what-counts-as-api-call
title: What counts as an API credit?
sidebar_label: What counts as an API credit?
---

Each time you send a URL to a Diffbot API it costs a credit. Repeated pages spend additional credits. [Errors](error-errors) do not spend credits.

## Analyze API Requests

Pages sent to the [Analyze API](api-intro-analyze) spend a single credit, even if the submitted link results in an article, product, discussion or other page-type extraction. (There is no double-charge for extracted pages.)

## Multiple-Page Articles, Discussions or Custom APIs

If an article or discussion includes multiple concatenated pages — [read more about page-concatenation](guides-multi-page-articles-discussions) — each individual page will spend a credit.

## Crawlbot API, Bulk API and the Search API

Individual URLs sent via the Bulk API count as individual API credits. E.g., a bulk job containing 500 URLs will cost 500 credits.
There is no charge for use of Crawlbot or our Bulk API; calls to those APIs do not spend credits. Within a crawl, pages that are merely crawled for links are not counted as API calls so they do not spend credits. Any pages processed within a crawl do cost credits. ([Read about the difference between “crawled” and “processed” pages](explain-crawling-versus-processing))

[Search API](cb-intro-search) requests for download of individual crawl or bulk job data have no effect on your credit balance.

## Proxy Usage

Calls that require use of [Diffbot proxy servers](explain-using-different-proxies) will bill at a rate of 2x; that is, each page processed using a proxy will cost two credits.

## KG

Using the [knowledge graph](https://www.diffbot.com/products/knowledge-graph/) has a cost of 25 credits per entity processed. Searching the KG does not affect the credit balance, but downloading entities returned by the search does. The 25 credits per entity cost is not affected by child entities on an entity. Examples:

- searching for organizations of name "Diffbot" incurs no cost
- downloading or opening Diffbot's entity in the UI with all its employee, location, and other metadata costs 25 credits
- downloading or opening an employee's page linked from Diffbot's page incurs another 25 credits cost
- when using the UI, the results are cached for about five minutes during which a refresh will not re-incur the 25 credit cost
