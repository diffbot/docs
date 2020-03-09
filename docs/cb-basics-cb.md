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

## Crawlbot debugging

- [Too Many Collections Error](error-too-many-collections)
- [Why is my crawl not crawling (and other uncommon crawl problems)?](guides-troubleshooting-crawls)
- [What does “all crawling temporarily paused by root administrator…” mean?](error-all-crawling-temporarily-paused)

## Crawlbot specifics

- [Crawl and Processing Patterns and Regexes](guides-patterns)
- [Limiting crawl depth](guides-crawl-depth)
- [Restricting Crawls to Domains and Subdomains](guides-restrict-domain)
- [Using the Crawlbot querystring parameter](guides-crawlbot-bulk-querystring-parameter)
- [Can Crawlbot use a site map (or sitemap) as a crawling seed?](guides-sitemap-as-seed)
- [Can I limit processing to articles written before, after or between certain dates?](guides-limit-article-processing-publishing-date)
- [Can I spider multiple sites in the same crawl? Is there a limit to the number of seed URLs?](guides-multiple-crawl-seeds)
- [Can multiple Diffbot extraction APIs be used in a single crawl?](guides-multiple-apis-single-crawl)
- [Does Crawlbot support authenticated crawling?](guides-authenticated-crawling)
- [How are repeating/recurring crawls scheduled?](guides-recurring-crawls)
- [How can I check how many articles, products or other pages have been found?](guides-check-results-specific-page-type)
- [How can I crawl (news) sites and monitor/extract only recent content?](guides-extract-recent-news-content)
- [How do I stop a “never-ending” crawl due to dynamic URLs or querystrings?](guides-neverending-crawl-dynamic-urls)
- [How to find and access Ajax-generated links while crawling](guides-crawling-ajax-generated-links)
- [In a recurring crawl, how do I download only the latest round’s content?](guides-download-latest-round-crawl-results)