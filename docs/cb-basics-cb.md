---
id: cb-basics-cb
title: Basic Usage of Crawlbot
sidebar_label: Basic Usage
---

This tutorial will guide you through creating a simple crawljob.

## MaxHops

Use the parameter `maxHops` to specify the depth of your crawl from your seed URL(s). A value of `0` will limit crawling only to your seed(s). `maxHops=1` will spider all links from your seed URL(s); `maxHops=2` will follow the links on those pages; etc.

A `maxHops` setting of `-1` (default) will spider all links at any depth.

This can be used in conjunction with [URL crawl patterns](guides-patterns) to fine tune your crawl further.

## Querystring parameter

Crawlbot serves as a controller for sending pages to the appropriate Diffbot API for processing/extraction. By default, these will be generic requests to the appropriate API and will return the default fields from that API.

For example, Crawlbot URLs handed to the Article API will be equivalent to calling `https://api.diffbot.com/v3/article?url=[url]`

You can adjust individual API fields returned or the parameters of extraction API requests via the Crawlbot querystring field.
For example, to specify certain fields and adjust the timeout value in your Article API requests, enter `timeout=10000&fields=title,text,meta` in the querystring field:

![](/img/ss_2014-0205_52.png)

This will pass `&timeout=10000&fields=title,text,meta` in each Article API request.
