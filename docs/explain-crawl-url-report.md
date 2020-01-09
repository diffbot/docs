---
id: explain-crawl-url-report
title: Crawlbot URL Report
sidebar_label: Crawlbot URL Report
todo: Modify links to old API docs
---

<div id="docBody">
<p>The URL Report provides status on every URL crawled and/or processed by a Crawlbot or Bulk API job.</p>

<p>The report is a comma-separated-values (CSV) file, and is available to download from your crawl or bulk job status page as soon as a job has begun—</p>

<figure>
<div>
<img src="/img/url_report_0.png">
</div>
<figcaption>Download the URL report using the "Detailed URL report (CSV)" link.</figcaption>
</figure>

<p>—or, using the <a href="api-crawlbot-api">Crawlbot API</a> or <a href="api-bulk">Bulk Service API</a>, via the <code>http://api.diffbot.com/v3/crawl/data</code> or <code>http://api.diffbot.com/v3/bulk/data</code> endpoints.</p>

<p>Each row corresponds to a single URL evaluated, and provides the following information:</p>
<table class="controls table table-bordered urls">
<thead><tr>
<th>Column</th>
<th>Description</th>
</tr></thead>
<tr>
<td>URL</td>
<td>Web page URL (normalized). Note that due to <a href="https://en.wikipedia.org/wiki/URL_normalization">URL normalization</a>, URL Report values may not match submitted URLs exactly.</td>
</tr>
<tr>
<td>Doc ID</td>
<td>Document ID of the crawled page. This corresponds to the <code>parentUrlDocId</code> field returned in crawl or bulk job JSON data.</td>
</tr>
<tr>
<td>URL Discovered Time</td>
<td>Time the URL was first seen/encountered.</td>
</tr>
<tr>
<td>Crawled Time</td>
<td>Time the URL was crawled (downloaded and its source spidered for links).</td>
</tr>
<tr>
<td>Content Length</td>
<td>Number of characters comprising the HTML source.</td>
</tr>
<tr>
<td>Duplicate Of</td>
<td>If the page source is an exact duplicate of another page, the Doc ID of the duplicate page will be returned.</td>
</tr>
<tr>
<td>Redirects</td>
<td>Number of redirects pursued before arriving at the final destination URL.</td>
</tr>
<tr>
<td>Redirected To</td>
<td>Ultimate destination URL if redirected.</td>
</tr>
<tr>
<td>Robots.txt Crawl Delay (ms)</td>
<td>If the page is subject to a robots.txt "crawl delay" the value in milliseconds will be returned.</td>
</tr>
<tr>
<td>Crawl Round</td>
<td>If the crawl is a repeating/recurring crawl, the crawl "round" in which this URL was evaluated. Note: URLs will be duplicated for each round in which they are crawled.</td>
</tr>
<tr>
<td>Crawl Try #</td>
<td>If there is an error crawling the page (spidering for links), any retries will be enumerated.</td>
</tr>
<tr>
<td>Hop Count</td>
<td>This indicates the page's distance from seed(s): "1" indicates the URL was linked-to from a seed; "2" indicates the URL appeared on a page that itself was linked-to from a seed. Hops can be used to narrow crawling via Crawlbot's <code>maxHops</code> argument.</td>
</tr>
<tr>
<td>Crawl Status</td>
<td>Returns "Success" if the page was successfully crawled (spidered for links).</td>
</tr>
<tr>
<td>Diffbot URI</td>
<td>If the page was processed via a Diffbot API, and an object—product, article, image, discussion, etc.—found, the object's <code>diffbotUri</code> will be returned.</td>
</tr>
<tr>
<td>Process Attempted</td>
<td>Indicates if the page was sent to a Diffbot API for processing.</td>
</tr>
<tr>
<td>Process Response</td>
<td>Indicates whether or not the Diffbot processing was successful.</td>
</tr>
<tr>
<td>Proxy Used</td>
<td>Indicates whether or not a proxy IP address was used for the URL. <a href="explain-using-different-proxies">Read more on proxies</a>.</td>
</tr>
</table>

</div>