---
id: guides-crawling-ajax-generated-links
title: How to find and access Ajax-generated links while crawling
sidebar_label: How to find and access Ajax-generated links while crawling
---

<div class="entry-content">
		<p>Diffbot Automatic and Custom APIs automatically execute Javascript, but Crawlbot does not execute Javascript by default while spidering a site for links. Doing so is slow and usually redundant, as most sites’ links are typically available in the raw HTML source.</p>
<p>(Related: <a title="What’s the difference between crawling and processing?" href="explain-crawling-versus-processing">What’s the difference between crawling and processing?</a>)</p>
<p>Some sites deliver the majority of their content via Javascript. If you need to access rendered pages to completely discover a site’s links, you can do so via the following:</p>
<p><strong>1. Use the Analyze API</strong></p>
<p>Accessing a site’s Ajax-delivered links requires the use of Diffbot’s <a title="Diffbot: Analyze API" href="http://www.diffbot.com/products/automatic/analyze" target="_blank">Analyze API</a>. The Analyze API automatically identifies a page’s type, and processes those pages supported by extraction APIs.</p>
<p><strong>2. Add &amp;links as a Diffbot Querystring Argument</strong></p>
<p>Adding the argument <code>&amp;links</code> uses Diffbot core API link-extracting functionality to return all links found on a page. Crawlbot will use these additional links, found within the rendered page, to augment those found in the raw source.</p>
<div id="attachment_301" style="width: 640px" class="wp-caption aligncenter">
<a href="https://support.diffbot.com/wp-content/uploads/2015/07/ss_2015-0717_854.png"><img aria-describedby="caption-attachment-301" class=" wp-image-301" alt="ss_2015-0717_854" src="/docs/img/ss_2015-0717_854.png" width="630" height="238" srcset="https://support.diffbot.com/wp-content/uploads/2015/07/ss_2015-0717_854.png 700w, https://support.diffbot.com/wp-content/uploads/2015/07/ss_2015-0717_854-300x113.png 300w" sizes="(max-width: 630px) 100vw, 630px"></a><p id="caption-attachment-301" class="wp-caption-text">Select the Analyze API, and add &amp;links to your Diffbot Querystring.</p>
</div>
<p>If you are using the Crawlbot API, simply append <code>&amp;links</code> to your <code>apiUrl</code>:</p>
<pre><code>http://api.diffbot.com/v3/analyze?links</code></pre>
<p><strong>3. Include your seed page (and any other JS-requiring pages) in your processing pattern(s) or regular expression.</strong></p>
<p>Make sure you broaden your processing patterns or processing regular expression, or remove them entirely.</p>
<p>In order to find Ajax-generated links, your seed URL(s) (and, commonly, other “listing” pages) will need to be processed. If your processing pattern or regular expression is too narrow, not all Javascript-generated links will be discovered. Minimally, <strong>please be sure that your seed URLs match any processing patterns</strong> — otherwise, if all site links are generated via Ajax, your crawl may stall completely.</p>
<p><strong>A note on “deduplication”</strong></p>
<p>When using <code>&amp;links</code> in a crawl, Crawlbot’s default <a title="How does Diffbot handle duplicate pages/content while crawling?" href="explain-page-deduplication">duplicate-page detection</a> will be disabled. This is because Ajax-powered sites can have identical HTML source code for multiple pages, even though the actual on-page content (when Javascript is fully executed) is quite different.</p>
<p><strong>Additional note for recurring crawls: Do not “Only Process New Pages”</strong></p>
<p>If “Only Process New Pages” is set to “on,” only brand new URLs will be processed in subsequent crawl rounds. But in order to find Ajax-generated links per the above solution, pages will have to be re-processed each crawl round in order to discover new links.</p>
<p>If you are crawling an Ajax-heavy site regularly using the above method (e.g., for new products or new articles), please make sure you process all pages each round in order to find new URLs.</p>
			</div>
