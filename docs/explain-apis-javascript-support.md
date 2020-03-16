---
id: explain-apis-javascript-support
title: Do Diffbot APIs execute Javascript?
sidebar_label: Do Diffbot APIs execute Javascript?
---

Diffbot [Automatic APIs](api-basics-index) execute page-level Javascript at render-time, and for the most part **will** be able to access Ajax-delivered content. Note that while creating a custom API you will sometimes not be able to preview Javascript-delivered content (see [related support article](error-missing-preview)), but it will be accessible when making actual API calls.

Crawlbot does not execute Javascript when harvesting/collecting links by default, but it can be modified to do so while using the [Analyze API](api-basics-analyze). See [How to find and access Ajax-generated links while crawling](guides-crawling-ajax-generated-links) for details on enabling this functionality.
