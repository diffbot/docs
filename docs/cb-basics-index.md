---
id: cb-basics-index
title: Explaining Diffbot's Batch Services
sidebar_label: >> START HERE <<
todo: Turn into nice custom landing page
---

Apart from individually executing [Automatic APIs](api-basics-index), Diffbot also allows you to use these APIs in bulk through the Crawl and Bulk service.

[Crawlbot](cb-intro-cb) makes it possible to crawl and process an entire domain, harvest links automatically and process them using the designated automatic or custom API.

[Bulk jobs](cb-intro-bulk) let you submit a list of several (or several thousand!) links for processing by a select API.

The result of both these services is a collection of objects like those the Automatic APIs would produce. This collection can be downloaded for offline processing and ingestion into your own database, or it can be searched directly on Diffbot's servers using the [Search API](cb-intro-search).

You can use the Crawlbot, Bulk jobs, or the Search API directly from our [dashboard](tutorials-new-dashboard), or programmatically through the [appropriate APIs](api-cb).
