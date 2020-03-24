---
id: cb-basics-cb
title: Introduction into Crawlbot
sidebar_label: Introduction into Crawlbot
---

Crawlbot works hand-in-hand with a [Diffbot API](api-basics-index) (either automatic or custom). It quickly spiders a site for appropriate links and hands these links to a Diffbot API for processing. All structured page results are then compiled into a single "collection," which can be downloaded in full or searched using the [Search API](cb-basics-search).

Crawlbot is limited to Extraction API Plus plans and above, and is accessible in the Developer Dashboard here.

Note that the limit of active crawls on a single token is 1000. More information [here](error-too-many-collections).

## Crawlbot basics

- [Crawlbot Basic Walkthrough](tutorials-crawl)
- [Crawlbot Video Tutorials](tutorials-crawl-video)
- [Crawlbot API](api-crawlbot-api)
- [Crawling vs Processing](explain-crawling-versus-processing)
- [Does Crawlbot respect the robots.txt protocol?](explain-robots-txt)
- [How does Diffbot handle duplicate pages/content while crawling?](explain-page-deduplication)
- [How long does it take to crawl a site?](explain-how-long-crawl-site)
- [When is crawl or bulk job data deleted?](explain-when-crawl-bulk-data-deleted)
- [Crawlbot URL Report](explain-crawl-url-report)
- [Do Diffbot APIs Follow Redirects?](explain-apis-follow-redirects)
- [Do Diffbot APIs Execute JavaScript?](explain-apis-javascript-support)
- [Does crawlbot process hashtag-links?](explain-hashtag-links)

## Crawlbot debugging

- [Too Many Collections Error](error-too-many-collections)
- [Why is my crawl not crawling (and other uncommon crawl problems)?](guides-troubleshooting-crawls)
- [What does “all crawling temporarily paused by root administrator…” mean?](error-all-crawling-temporarily-paused)
