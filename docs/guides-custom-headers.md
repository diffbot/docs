---
id: guides-custom-headers
title: How do I set custom headers in API calls or while crawling?
sidebar_label: How do I set custom headers in API calls or while crawling?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Diffbot supports setting/sending the following custom headers for direct API calls, while crawling, and within bulk processing jobs. These headers will be used when requesting content from third-party sites:</p>
<ul>
<li>User-Agent</li>
<li>Referer</li>
<li>Cookie</li>
<li>Accept-Language</li>
</ul>
<p><strong>Direct API Calls</strong></p>
<p>To send a custom header in a direct API call (Automatic or Custom APIs), send your desired value using the <code>X-Forward</code> prefix as a header in your request to <code>http://api.diffbot.com</code>. For example, to have Diffbot use a Referer of “http://www.diffbot.com” in requests, send a header of <code>X-Forward-Referer=http://www.diffbot.com</code> in your API call.</p>
<p>More details can be found within the documentation of individual APIs at <a href="https://www.diffbot.com/dev/docs">https://www.diffbot.com/dev/docs</a>.</p>
<p><strong>While Crawling or Bulk Processing</strong></p>
<p>If you wish to use custom headers while crawling or in the processing of a bulk job, your headers need to be sent in your initial request to <code>http://api.diffbot.com/v3/bulk</code> or <code>http://api.diffbot.com/v3/crawl</code>. Thereafter your custom headers will be used while crawling for links, and in any extraction processing.</p>
<p>To send custom headers in your Crawlbot or Bulk service API requests, send multiple <code>customHeaders</code> values in your POST body (Bulk jobs or Crawlbot jobs) or GET request (Crawlbot only). Headers should be delimited by a colon and URL-encoded:</p>
<pre>&amp;customHeaders=Referer%3Ahttp%3A%2F%2Fwww.diffbot.com&amp;customHeaders=Accept-Language%3Aen-us</pre>
			</div>
