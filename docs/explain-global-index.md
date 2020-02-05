---
id: explain-global-index
title: Diffbot's Global Index
sidebar_label: Global Index
---

This page explains how the [Global Index](https://www.diffbot.com/products/globalindex/) works and what it's for.

## How do I access the Global Index?

Access to the Global Index requires a [paid subscription](http://www.diffbot.com/pricing) to a Diffbot Plus, Professional or Enterprise plan. Each plan provides a monthly allotment of Global Index search queries in addition to regular extraction API calls.

The Global Index is built atop the Diffbot [Search API](api-search) and is populated by Diffbot’s [Article](api-article) and [Discussion](api-discussion) APIs; as such, API syntax and data output are consistent with the rest of the Diffbot platform.

Our updated Developer Dashboard — scheduled for a Q1 2020 release — also offers a UI for performing Global Index searches. Contact us if you are interested in acquiring beta access to the [new Dashboard](tutorials-new-dashboard).

## How often are sites crawled in the Global Index?

The Global Index is continuously crawling, adding new content every second from its tens of thousands of global sources.

While many sites are crawled near constantly — i.e., every few minutes — there is no specific determination for a particular site’s crawl frequency. Each site’s crawling interval is based on a number of factors, including the site’s global relevance, the frequency of publication (weekly or monthly publishers are crawled less frequently than daily outlets), and the sheer amount of content (larger sites are crawled more frequently than smaller sites).

## What sites are included in the Global Index?

Diffbot’s Global Index for News is constantly crawling tens of thousands of news and blog sites from around the world, structuring all content into a comprehensive news database.

We do not provide a complete list of sources as we are continually updating and adjusting the sites we crawl. If you’d like to confirm the presence of certain sites please contact us (or perform a `site:domain.com` search to see all indexed content from the site in question).

Wherever possible, we are happy to include additional relevant news sources that are not currently in the crawling pool. If sources are not determined to be broadly applicable, we will let you know and can assist you in creating distinct Crawlbot crawls to monitor these additional sites.