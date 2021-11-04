---
id: guides-crawlbot-custom-proxies
title: How to apply custom proxies to Crawlbot
sidebar_label: Crawling with Custom Proxies
---

You can apply your own custom proxies to a Crawl job by adding the **&proxy** and **&proxyAuth** API parameters to the API querystring on your job.  The proxy will only be applied to pages that are actually Processed, not those that are only Crawled (see [The Difference Between Crawling and Processing](explain-crawling-versus-processing)), so we must also force Crawlbot to Process all pages by adding **&links**.  An example API querystring might look like this:

`links&proxy=proxy.example.com:8081&proxyAuth=user:pass`

When applying **&links** to enable custom proxies, remember to apply Processing Patterns or other Processing restrictions as needed to prevent unintended URLs from being extracted.
