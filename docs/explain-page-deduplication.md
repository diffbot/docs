---
id: explain-page-deduplication
title: How does Diffbot handle duplicate pages/content while crawling?
sidebar_label: How does Diffbot handle duplicate pages/content while crawling?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Crawlbot will often encounter duplicate pages (with different URLs) while canvassing a site. There are a handful of ways Diffbot helps you handle these duplicates:</p>
<p><strong>Pages with duplicate HTML sources will be ignored while crawling</strong></p>
<p>While crawling (spidering for links), and before sending a URL to be processed, Crawlbot examines the raw HTML source of each page and compares it to the source HTML of all previously-spidered pages. Any exact matches to previously-seen pages will be flagged as duplicates and ignored.</p>
<p>The duplicate comparison is made on the raw HTML source only. Only when processing a page will Javascript be executed.</p>
<p>The <a href="https://www.diffbot.com/dev/docs/crawl/url-report.jsp">Crawlbot URL Report</a> — available from each crawl’s status page, or via the Crawlbot API — will note each duplicate URL, and the document ID (docId) of the page it duplicates.</p>
<p>Note: If your crawl takes advantage of our Analyze API’s ability to <a title="How to find and access Ajax-generated links while crawling" href="guides-crawling-ajax-generated-links">execute Javascript to find Ajax-delivered links</a>, Crawlbot’s duplication detection will be disabled. This is because Ajax-powered sites can have identical HTML source code for multiple pages, even though the actual on-page content (when Javascript is fully executed) is quite different.</p>
<p><strong>Pages with a different canonical link definition will be ignored</strong></p>
<p><em>Note: This behavior can be disabled on an individual crawl basis via the <code>useCanonical</code> argument in the <a href="https://www.diffbot.com/dev/docs/crawl/api.jsp">Crawlbot API</a>.</em></p>
<p>Two things will happen when a page contains a <a href="https://en.wikipedia.org/wiki/Canonical_link_element" target="_blank">canonical link element</a> different from its own URL:</p>
<ol>
<li>The current page will be skipped/ignored as a duplicate.</li>
<li>The canonical URL will be automatically added to the Crawlbot queue (if not already in the queue)</li>
</ol>
<p>Similar to above, duplicate pages will be so identified in the <a href="https://www.diffbot.com/dev/docs/crawl/url-report.jsp">Crawlbot URL Report</a>.</p>
<p><strong>Duplicated extractions will have the same diffbotUri</strong></p>
<p>Each Diffbot JSON object contains the <code>diffbotUri</code> field. The value is uniquely calculated from a subset of extracted fields and can be used to uniquely identify the extracted content. The <code>diffbotUri</code> will be the same across duplicate extractions.</p>
<p>For example, the <code>diffbotUri</code> value for this page is <code>article|3|-897978830</code>.</p>
<p>For URLs that are not exact-source duplicates (and are thus not ignored while crawling), but that result in the same extracted output, the <code>diffbotUri</code> values will be the same. When you process your crawl data, filtering and removing objects with the same <code>diffbotUri</code> will allow you to retain only one example of each entity.</p>
			</div>
