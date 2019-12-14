---
id: explain-what-counts-as-api-call
title: What counts as an API call?
sidebar_label: What counts as an API call?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Diffbot pricing is based on the number of individual web pages extracted by our <a title="Diffbot Automatic APIs" href="https://www.diffbot.com/products/automatic">Automatic</a> or <a title="Custom APIs" href="http://www.diffbot.com/products/custom">Custom</a> APIs. Each time you send a URL to a Diffbot API it counts as an API call. Repeated pages are counted as additional API calls.</p>
<p><strong>Analyze API Requests</strong></p>
<p>Pages sent to the <a href="https://www.diffbot.com/products/automatic/analyze">Analyze API</a> count as a <strong>single</strong> API call, even if the submitted link results in an article, product, discussion or other page-type extraction. (There is no double-charge for extracted pages.)</p>
<p><strong>Multiple-Page Articles, Discussions or Custom APIs</strong></p>
<p>If an article or discussion includes multiple concatenated pages — <a title="How Diffbot handles multiple-page articles" href="guides-multi-page-articles-discussions">read more about page-concatenation</a> — each individual page will count as a separate API call.</p>
<p><strong>Crawlbot API, Bulk API and the Search API</strong></p>
<p>Individual URLs sent via the Bulk API count as individual API calls. E.g., a bulk job containing 500 URLs will incur 500 API calls.</p>
<p>There is no charge for use of Crawlbot or our Bulk API; calls to those APIs are not charged. Within a crawl, pages that are merely crawled for links are not counted as API calls. Any pages <strong>processed</strong> within a crawl count as API calls. (<a title="What’s the difference between crawling and processing?" href="explain-crawling-versus-processing">Read about the difference between “crawled” and “processed” pages</a>.)</p>
<p><a href="https://www.diffbot.com/dev/docs/searc/h">Search API</a> requests for download of individual crawl or bulk job data are not charged.</p>
<p><strong>Proxy Usage</strong></p>
<p>Calls that require use of <a title="Using Diffbot Proxy Servers / Proxy IPs" href="explain-using-different-proxies">Diffbot proxy servers</a> will bill at a rate of 2x; that is, each page processed using a proxy will count as two API calls.</p>
<p><strong>Error Responses</strong></p>
<p>Requests that result in a Diffbot <a href="https://www.diffbot.com/dev/docs/error/">error response</a> are not billed or counted as API calls.</p>
			</div>
