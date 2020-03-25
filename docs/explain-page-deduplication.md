---
id: explain-page-deduplication
title: How does Diffbot handle duplicate pages/content while crawling?
sidebar_label: How does Diffbot handle duplicate pages/content while crawling?
---


Crawlbot will often encounter duplicate pages (with different URLs) while canvassing a site. There are a handful of ways Diffbot helps you handle these duplicates:

- Pages with duplicate HTML sources will be ignored while crawling.
    
    While crawling (spidering for links), and before sending a URL to be processed, Crawlbot examines the raw HTML source of each page and compares it to the source HTML of all previously-spidered pages. Any exact matches to previously-seen pages will be flagged as duplicates and ignored.

    The duplicate comparison is made on the raw HTML source only. Only when processing a page will Javascript be executed.

- The [Crawlbot URL Report](explain-crawl-url-report) — available from each crawl’s status page, or via the Crawlbot API — will note each duplicate URL, and the document ID (docId) of the page it duplicates.

    Note: If your crawl takes advantage of our Analyze API’s ability to [execute Javascript to find Ajax-delivered links](guides-crawling-ajax-generated-links), Crawlbot’s duplication detection will be disabled. This is because Ajax-powered sites can have identical HTML source code for multiple pages, even though the actual on-page content (when Javascript is fully executed) is quite different.

- Pages with a different canonical link definition will be ignored

    > Note: This behavior can be disabled on an individual crawl basis via the `useCanonical` argument in the [Crawlbot API](api-crawlbot-api).

    Two things will happen when a page contains a [canonical link element](https://en.wikipedia.org/wiki/Canonical_link_element) different from its own URL:
    
        - The current page will be skipped/ignored as a duplicate.
        - The canonical URL will be automatically added to the Crawlbot queue (if not already in the queue)

    Similar to above, duplicate pages will be so identified in the [Crawlbot URL Report](explain-crawl-url-report).

- Duplicated extractions will have the same `diffbotUri`

    Each Diffbot JSON object contains the `diffbotUri` field. The value is uniquely calculated from a subset of extracted fields and can be used to uniquely identify the extracted content. The `diffbotUri` will be the same across duplicate extractions.

    For URLs that are not exact-source duplicates (and are thus not ignored while crawling), but that result in the same extracted output, the `diffbotUri` values will be the same. When you process your crawl data, filtering and removing objects with the same `diffbotUri` will allow you to retain only one example of each entity.
