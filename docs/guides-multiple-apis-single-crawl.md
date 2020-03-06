---
id: guides-multiple-apis-single-crawl
title: Can multiple Diffbot extraction APIs be used in a single crawl?
sidebar_label: Can multiple Diffbot extraction APIs be used in a single crawl?
---

Crawlbot crawls are meant to work with a single Diffbot extraction API. If you wish to process multiple types of pages through separate APIs, your options are:

## Use the Analyze API

The [Analyze API](api-basics-analyze) will automatically determine the page-type of each page crawled, and structure the data from supported pages. This content can be filtered using the [Search API](cb-basics-search), or the JSON downloaded in full and filtered using the `type` field.

## Set up Multiple Crawls

To explicitly use multiple APIs for crawling a single site, you'll need to set-up multiple crawls, each using an independent API. You can use Crawlbot's multiple mechanisms [for controlling/narrowing your crawls](guides-patterns) to ensure that each separate crawl job only processes the right type of pages.