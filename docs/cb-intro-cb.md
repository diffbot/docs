---
id: cb-intro-cb
title: Introduction into Crawlbot
sidebar_label: Introduction
---

Crawlbot works hand-in-hand with a [Diffbot API](api-basics-index) (either automatic or custom). It quickly spiders a site for appropriate links and hands these links to a Diffbot API for processing. All structured page results are then compiled into a single "collection," which can be downloaded in full or searched using the [Search API](cb-basics-search).

Crawlbot is limited to Extraction API Plus plans and above, and is accessible in the Developer Dashboard here. Note that the limit of active crawls on a single token is 1000. More information [here](error-too-many-collections).

## Robots.txt

By default Crawlbot adheres to a site’s robots.txt instructions, including the     disallow     and     crawl-delay     directives.    

In specific cases — typically because of a partnership or agreement you have with the site to be crawled — the robots.txt instruction can be ignored/overridden. This is often faster than waiting for the third-party site to update its robots.txt file.

To whitelist Crawlbot for a site, specify the “Diffbot” user-agent in the site’s robots.txt:

```txt
User-agent: Diffbot 
Disallow
```

Note that Crawlbot does not adhere to the `Allow` directive.

## Data Retention

Depending on your [Diffbot Plan](http://www.diffbot.com/pricing/), inactive crawls will be removed from your account either 14 or 30 days after completion.

This includes the extracted data as well as the job meta information (name, settings, etc.).

“Active” crawls are those that are recurring/repeating and that are not in a permanently “paused” state. Currently active jobs will not be deleted or removed from your account. After a recurring crawl completes its final round it will be subject to regular deletion policies.

## Crawlbot basics

- [Crawlbot Basic Walkthrough](tutorials-crawl)
- [Crawlbot Video Tutorials](tutorials-crawl-video)
- [Crawlbot API](api-crawlbot-api)
- [Crawling vs Processing](explain-crawling-versus-processing)
- [How does Diffbot handle duplicate pages/content while crawling?](explain-page-deduplication)
- [How long does it take to crawl a site?](explain-how-long-crawl-site)
- [When is crawl or bulk job data deleted?](explain-when-crawl-bulk-data-deleted)
- [Crawlbot URL Report](explain-crawl-url-report)
- [Do Diffbot APIs Follow Redirects?](explain-apis-follow-redirects)
- [Do Diffbot APIs Execute JavaScript?](explain-apis-javascript-support)
- [Does crawlbot process hashtag-links?](explain-hashtag-links)
- [Using Diffbot Proxy Servers / Proxy IPs](explain-using-different-proxies)
- [Sending Custom Headers during jobs](guides-custom-headers-crawl)

## Crawlbot debugging

- [Too Many Collections Error](error-too-many-collections)
- [Why is my crawl not crawling (and other uncommon crawl problems)?](guides-troubleshooting-crawls)
- [What does “all crawling temporarily paused by root administrator…” mean?](error-all-crawling-temporarily-paused)
