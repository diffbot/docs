---
id: explain-cvp
title: The Difference Between Crawling and Processing
sidebar_label: Crawling vs Processing
---

<p>Crawlbot serves as both a web spider — pursuing and collecting links — and also as&nbsp;controller of Diffbot’s&nbsp;<a href="http://www.diffbot.com/products/automatic">automatic</a> and&nbsp;<a href="http://www.diffbot.com/products/custom">custom</a> extraction APIs. These functions are contained within the&nbsp;<em>crawling</em> and&nbsp;<em>processing</em>&nbsp;sections of the Crawlbot interface and API.</p>
<p><strong>Page Crawling</strong></p>
<p>A page is said to be&nbsp;<em>crawled&nbsp;</em>when it is evaluated for additional links to follow, or for links to be processed. A crawled page is not automatically processed by a Diffbot extraction API unless the page also matches the processing criteria. (If there are no crawling or processing restrictions, then <strong>all</strong> pages will be both crawled and processed.)</p>
<p>Crawled pages can be limited based on the following:</p>
<ul>
<li><strong>Crawl Patterns</strong>: only pages whose URLs match one of the pattern strings will be spidered for additional links.</li>
<li><strong>Crawl Regular Expression</strong>: only pages whose URLs match the regular expression will be crawled for additional links.</li>
<li>The above options can be combined; however, if you enter a Processing Regular Expression it will override a Processing Pattern.</li>
</ul>
<p><strong style="line-height: 1.5em;">Page Processing</strong></p>
<p>A web page is said to be <em>processed</em> if it is submitted to a Diffbot API for extraction. This can either be an automatic API (Article, Product, Image, etc.) or a Custom API.</p>
<p>Crawlbot determines which URLs to hand off for processing based on the following parameters:</p>
<ul>
<li>By default, if there is no processing restriction, every spidered/crawled page will also be processed by your specified extraction API.</li>
<li>If you enter a Crawling Pattern (or Regular Expression) and no Processing Pattern (or Processing Regular Expression), your Crawling Pattern (RegEx) will act for both crawling and processing.</li>
<li><span style="line-height: 1.5em;">If you enter one or more Processing Patterns, only pages whose URLs match (at least one of) your patterns will be processed.</span></li>
<li>If you enter a Processing Regular Expression, only pages whose URLs match the regular expression will be processed.</li>
<li>If you enter one or more HTML Processing Patterns, only pages whose markup contains (one of) your patterns will be processed.</li>
</ul>
<p>HTML Processing Patterns can be combined with Processing Patterns or Regular Expressions; however, a Processing Regular Expression will override a Processing Pattern.</p>
<p>A page does not have to be&nbsp;<em>crawled</em> to be processed, but its URL must at least appear on a crawled page, and it must match a processing pattern, in order to be discovered and handed off to a Diffbot API.</p>

Crawlbot will restrict its crawl to the same subdomain(s) as your seed URL(s), unless your seed lacks a subdomain (<code>diffbot.com</code>) or uses the ‘www’ subdomain, in which case the entire domain will be spidered. See [Restricting Crawls to Domains and Subdomains](guides-restrict-domain) for more information.
<p>&nbsp;</p>