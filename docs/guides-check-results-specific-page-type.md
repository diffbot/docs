---
id: guides-check-results-specific-page-type
title: How can I check how many articles, products or other pages have been found?
sidebar_label: How can I check how many articles, products or other pages have been found?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>The easiest way to use Crawlbot is paired with our Analyze API. Analyze determines the page-type of every page it processes, and for <a href="http://www.diffbot.com/products/automatic">supported pages</a> (articles, products, etc.) the content will be automatically extracted and its structured data indexed as part of your crawl.</p>
<p>Crawlbot’s interface in the Developer Dashboard (and the Crawlbot API) tracks the number of pages processed during a crawl. If you’re using the Analyze API, this simply tells you how many pages have been analyzed, <strong>not</strong> how many individual products or articles or other pages have been discovered on the site.</p>
<div id="attachment_281" style="width: 704px" class="wp-caption aligncenter">
<a href="https://support.diffbot.com/wp-content/uploads/2015/05/Screenshot-2015-05-19-16.13.02.png"><img aria-describedby="caption-attachment-281" class="size-full wp-image-281" alt="Crawlbot status" src="/docs/img/Screenshot-2015-05-19-16.13.02.png" width="694" height="335" srcset="https://support.diffbot.com/wp-content/uploads/2015/05/Screenshot-2015-05-19-16.13.02.png 694w, https://support.diffbot.com/wp-content/uploads/2015/05/Screenshot-2015-05-19-16.13.02-300x144.png 300w" sizes="(max-width: 694px) 100vw, 694px"></a><p id="caption-attachment-281" class="wp-caption-text">Crawlbot indicates that 76,280 pages have been processed by the Analyze API.</p>
</div>
<p>If you want to track how many of a specific page-type have been found, you’ll want to use our <a href="http://www.diffbot.com/dev/docs/search">Search API</a>. By regularly running queries against your particular crawl, you can get to-the-second updates on exactly how much content has been indexed.</p>
<p>For example, in a crawl named <code>diffbotShopping</code>, to track how many products have been found (at any time during or after the crawl), you would execute a <code>type:product</code> query as follows (substituting your token for the sample below):</p>
<pre><code>http://api.diffbot.com/v3/search?token=sampletoken&amp;col=diffbotShopping&amp;query=type:product</code></pre>
<p>This will return the complete data from the 20 most recently extracted products, and the <code>hits</code> element — a realtime count of the number of matching objects.</p>
<div id="attachment_286" style="width: 391px" class="wp-caption aligncenter">
<a href="https://support.diffbot.com/wp-content/uploads/2015/05/ss_2015-0519_838.png"><img aria-describedby="caption-attachment-286" class="size-full wp-image-286" title="Hits" alt="Hits" src="/docs/img/ss_2015-0519_838.png" width="381" height="168" srcset="https://support.diffbot.com/wp-content/uploads/2015/05/ss_2015-0519_838.png 381w, https://support.diffbot.com/wp-content/uploads/2015/05/ss_2015-0519_838-300x132.png 300w" sizes="(max-width: 381px) 100vw, 381px"></a><p id="caption-attachment-286" class="wp-caption-text">14,411 products have been found so far</p>
</div>
<p>For other page-types or even more granular data-counts you can execute similar queries: (see <a href="https://www.diffbot.com/dev/docs/search">Search API documentation</a> for complete query syntax)</p>
<table>
<tbody>
<tr>
<td>Articles</td>
<td><code>query=type:article</code></td>
</tr>
<tr>
<td>Discussion Posts</td>
<td><code>query=type:post</code></td>
</tr>
<tr>
<td>Images</td>
<td><code>query=type:image</code></td>
</tr>
<tr>
<td>Products under $20</td>
<td><code>query=type:product max:offerPrice:20.00</code></td>
</tr>
<tr>
<td>Articles written on May 19, 2015</td>
<td><code>query=type:article min:date:2015-05-19 max:date:2015-05-19</code></td>
</tr>
</tbody>
</table>
			</div>
