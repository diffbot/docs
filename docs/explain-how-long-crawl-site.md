---
id: explain-how-long-crawl-site
title: How long does it take to crawl a site?
sidebar_label: How long does it take to crawl a site?
---

Many things affect Crawlbot’s speed when crawling and processing a site. These include:

- Size of a site
- The number of pages to be processed by a Diffbot extraction API
- Overall performance/responsiveness of a site
- Any specific crawling restrictions

Fundamentally, a larger site will take longer to crawl and process. A site with 100 pages will be finished in seconds, whereas a site with 1,000,000 pages will take much longer.

Likewise, the more pages processed by a Diffbot API, the longer your crawl job will take. If you are using our Analyze API to automatically identify and extract page-types, this will most commonly process every page on the site. (See [What's the difference between crawling and processing](explain-crawling-versus-processing)).

Many sites are simply slower to respond than others. In some cases this is due to physical distance (a single server in Australia will be much slower to respond than a site with multiple points-of-presence or a CDN infrastructure), and in others this may be due to instruction in the site’s robots.txt file: specifically the `crawlDelay` parameter, to which Crawlbot [adheres by default](cb-intro-cb).

Finally, the overall load on Crawlbot is a factor, as our spiders are distributed evenly across our active customers. We regularly increase the number of available servers based on need, but periods of high activity can reduce the number of spiders available. If you need dedicated crawling or processing hardware, [contact us](mailto:sales@diffbot.com) about our additional plans.

## Ways to Speed Up Crawlbot

The most convenient way to improve performance of Crawlbot is by using [crawling and processing patterns](guides-patterns) (or regular expressions) to specify exactly which sections of a site to crawl and process.

For instance, if you are only interested in a specific subdomain, make sure that your crawl pattern or regular expression limits your crawling to that subdomain.

In limited cases ignoring a site’s `robots.txt` instruction is possible, but generally only with permission of the site to be crawled.

Extracted data is available as soon as it has been processed — both for download and via our [Search API](api-search) — even while a crawl continues. Even if a crawl hasn’t finished you can still start to work with the data being extracted.
