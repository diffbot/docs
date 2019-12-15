---
id: guides-improving-response-times
title: Improving API response times
sidebar_label: Improving API response times
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Generally Diffbot processing and visual analysis takes just a couple of seconds. Why, then, can an API response take longer than that?</p>
<p>The overwhelming majority of time in a Diffbot request is taken up by fetching content from the requested (third-party) site. The site’s physical location, responsiveness, and overall Internet traffic will dictate the latency in the request.</p>
<p>That said, there are a some things you can try to help make your Diffbot processing even faster:</p>
<p><strong>Disable Comment/Review Extraction (Article and Product APIs only)</strong></p>
<p>The Article and Product APIs automatically identify and extract user comments and reviews from article and product pages. If you do not need comment or review data, you can disable this functionality using the argument <code>discussion=false</code>. While comment extraction is typically very fast, this can have a noticeable performance improvement on pages with many comments or reviews.</p>
<p><strong>Disable Multiple-Page Concatenation (Article API only)</strong></p>
<p>Diffbot’s Article API will automatically <a title="Automatically concatenating pages using the ‘nextPage’ field" href="guides-concatenate-multipage-articles">concatenate</a> (string-together) multiple pages of an article. For articles with many pages, this will result in a number of individual requests made to the third-party server, which will add to the response time. If you do not wish to have pages concatenated / full article contents returned, pass along the argument <code>paging=false</code> to ensure that only the first page of content is returned.</p>
<p><strong>Disable robots.txt (when crawling only)</strong></p>
<p>Sometimes a robots.txt file will have delays specified. Diffbot will obey these by default. You should try turning off the Obey Robots.txt feature in the Crawlbot settings UI if you notice very slow crawls.</p>
<p><strong>Disable Full Rendering</strong></p>
<p>Diffbot uses a full Javascript-enabled renderer to fully access all page elements, execute Ajax-requests, and to provide our algorithms with the most visual data possible. This results in the highest quality, most accurate data extraction.</p>
<p>If speed of your request is much more important than the overall quality of extraction, you can disable full rendering engine using the advanced argument <code>norender</code>. Pass <code>norender</code> along in your Article API requests and you will receive faster response times, albeit with reduced quality of extraction. (Common issues include under-identified image captions and the over-inclusion of sharing and other extraneous elements.)</p>
<p><strong style="line-height: 1.5em;">Try POSTing Content</strong></p>
<p>If you have proximity to or special access to your target content, you may experience faster processing by downloading the content directly, then POSTing the markup to our APIs (Automatic or Custom). Diffbot will return the structured content as usual, but without having to fetch the content first.</p>
<p>See more on POSTs in the <a href="http://www.diffbot.com/dev/docs/">documentation</a> for your desired API.</p>
<p><strong>Consider Our Bulk API</strong></p>
<p>Our <a title="Diffbot Developer Dashboard Docs" href="http://www.diffbot.com/dev/docs/bulk">Bulk API</a> is specifically built for processing large batches of URLs asynchronously. The Bulk service distributes your calls across a broad array of extraction servers for speedy processing, and provides the extracted output in a single JSON output — or, you can use our <a href="http://www.diffbot.com/dev/docs/search">Search API</a> to fine-tune the output from your structured data.</p>
			</div>
