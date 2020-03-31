---
id: guides-crawling-ajax-generated-links
title: How to find and access JavaScript-generated links while crawling
sidebar_label: Crawling JavaScript-generated links
---

Diffbot Automatic and Custom APIs automatically execute Javascript, but Crawlbot does not execute Javascript by default while spidering a site for links. Doing so is slow and usually redundant, as most sites’ links are typically available in the raw HTML source.

Some sites deliver the majority of their content via JavaScript. If you need to access rendered pages to discover a site’s links, you can do so via the following:

1. Use the Analyze API

    Accessing a site’s Ajax-delivered links requires the use of Diffbot’s [Analyze API](api-intro-analyze). The Analyze API automatically identifies a page’s type, and processes those pages supported by extraction APIs.

2. Add `&links` as a Diffbot Querystring Argument

    Adding the argument `&links` uses Diffbot core API link-extracting functionality to return all links found on a page. Crawlbot will use these additional links, found within the rendered page, to augment those found in the raw source.

    `![](/img/ss_2015-0717_854.png)

    If you are using the [Crawlbot API](api-crawlbot-api), simply append `&links` to your `apiUrl`: `https://api.diffbot.com/v3/analyze?links`

3. Include your seed page (and any other JS-requiring pages) in your processing pattern(s) or regular expression.

    Make sure you broaden your processing patterns or processing regular expression, or remove them entirely.

    In order to find Ajax-generated links, your seed URL(s) (and, commonly, other “listing” pages) will need to be processed. If your processing pattern or regular expression is too narrow, not all JavaScript-generated links will be discovered. Minimally, please be sure that your seed URLs match any processing patterns — otherwise, if all site links are generated via Ajax, your crawl may stall completely.

## A note on deduplication

When using `&links` in a crawl, Crawlbot’s default [duplicate page detection](explain-page-deduplication) will be disabled. This is because Ajax-powered sites can have identical HTML source code for multiple pages, even though the actual on-page content (when JavaScript is fully executed) is quite different.

## Additional note for recurring crawls: Do not “Only Process New Pages”

If “Only Process New Pages” is set to “on,” only brand new URLs will be processed in subsequent crawl rounds. But in order to find Ajax-generated links per the above solution, pages will have to be re-processed each crawl round in order to discover new links.

If you are crawling an Ajax-heavy site regularly using the above method (e.g., for new products or new articles), please make sure you process all pages each round in order to find new URLs.
