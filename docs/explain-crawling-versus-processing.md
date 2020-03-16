---
id: explain-crawling-versus-processing
title: The Difference Between Crawling and Processing
sidebar_label: Crawling vs Processing
---

Crawlbot serves as both a web spider — pursuing and collecting links — and also as controller of Diffbot’s [automatic](api-basics-index) and [custom](api-basics-custom) extraction APIs. These functions are contained within the crawling and processing sections of the Crawlbot interface and API.

## Page Crawling

A page is said to be crawled when it is evaluated for additional links to follow, or for links to be processed. A crawled page is not automatically processed by a Diffbot extraction API unless the page also matches the processing criteria. (If there are no crawling or processing restrictions, then all pages will be both crawled and processed.)

Crawled pages can be limited based on the following:

- Crawl Patterns: only pages whose URLs match one of the pattern strings will be spidered for additional links.
- Crawl Regular Expression: only pages whose URLs match the regular expression will be crawled for additional links.- 
The above options can be combined; however, if you enter a Processing Regular Expression it will override a Processing Pattern.

## Page Processing

A web page is said to be processed if it is submitted to a Diffbot API for extraction. This can either be an automatic API (Article, Product, Image, etc.) or a Custom API.

Crawlbot determines which URLs to hand off for processing based on the following parameters:

- By default, if there is no processing restriction, every spidered/crawled page will also be processed by your specified extraction API.
- If you enter a Crawling Pattern (or Regular Expression) and no Processing Pattern (or Processing Regular Expression), your Crawling Pattern (RegEx) will act for both crawling and processing.
- If you enter one or more Processing Patterns, only pages whose URLs match (at least one of) your patterns will be processed.
- If you enter a Processing Regular Expression, only pages whose URLs match the regular expression will be processed.
- If you enter one or more HTML Processing Patterns, only pages whose markup contains (one of) your patterns will be processed.

HTML Processing Patterns can be combined with Processing Patterns or Regular Expressions; however, a Processing Regular Expression will override a Processing Pattern.

A page does not have to be crawled to be processed, but its URL must at least appear on a crawled page, and it must match a processing pattern, in order to be discovered and handed off to a Diffbot API.

Crawlbot will restrict its crawl to the same subdomain(s) as your seed URL(s), unless your seed lacks a subdomain (diffbot.com) or uses the ‘www’ subdomain, in which case the entire domain will be spidered. See [Restricting Crawls to Domains and Subdomains](guides-restrict-domain) for more information.
