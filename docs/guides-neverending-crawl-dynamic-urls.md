---
id: guides-neverending-crawl-dynamic-urls
title: How do I stop a “never-ending” crawl due to dynamic URLs or querystrings?
sidebar_label: How do I stop a “never-ending” crawl due to dynamic URLs or querystrings?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>On rare occasions Crawlbot will encounter a site that creates links dynamically — and seemingly ad infinitum — either due to a programming error, or sometimes simply due to a large number of dynamic parameter permutations.</p>
<p>In this case, you will find Crawlbot continuing to crawl a seemingly never-ending number of dynamically-created pages. Often these will manifest as search result queries/filters, for example the following example URLs:</p>
<ul>
<li>http://www.diffbotfashion.com/pants?color=black&amp;<strong>waist=32</strong>&amp;inseam=30&amp;type=chino&amp;fabric=cotton</li>
<li>http://www.diffbotfashion.com/pants?color=black&amp;<strong>waist=33</strong>&amp;inseam=30&amp;type=chino&amp;fabric=cotton</li>
<li>http://www.diffbotfashion.com/pants?color=black&amp;<strong>waist=34</strong>&amp;inseam=30&amp;type=chino&amp;fabric=cotton</li>
<li>http://www.diffbotfashion.com/pants?color=black&amp;<strong>waist=35</strong>&amp;inseam=30&amp;type=chino&amp;fabric=cotton</li>
</ul>
<p>The way to address this issue is twofold:</p>
<p><strong>Download the URL Report </strong></p>
<p><a href="https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1120_911.png"><img class="aligncenter size-full wp-image-312" alt="URL Report" src="/docs/img/ss_2015-1120_911.png" width="353" height="35" srcset="https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1120_911.png 353w, https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1120_911-300x29.png 300w" sizes="(max-width: 353px) 100vw, 353px"></a></p>
<p>Download your crawl’s <a href="https://diffbot.com/dev/docs/crawl/url-report.jsp">URL Report</a> to help determine which patterns are being needlessly repeated. It’s recommended that you download the “Last 500 URLs” rather than the full report to save download time (and your hard drive space), as these files — particularly for never-ending crawls — can be quite large.</p>
<p>Once you have the URL Report, you can quickly see which URL patterns are being repeated.</p>
<p><strong>Add Negative Crawling (and Processing, if Necessary) Patterns</strong></p>
<p><a href="https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1120_910.png"><img class="aligncenter size-full wp-image-311" alt="Negative Crawl Patterns" src="/docs/img/ss_2015-1120_910.png" width="423" height="102" srcset="https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1120_910.png 423w, https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1120_910-300x72.png 300w" sizes="(max-width: 423px) 100vw, 423px"></a></p>
<p>Then, identify the patterns you wish to exclude and add them as negative crawl patterns (prepend each term/pattern with an exclamation point). Once you’ve done so, any URLs containing these terms will no longer be crawled.</p>
<p>If your crawl is set to process all pages (typically using the <a href="https://www.diffbot.com/products/automatic/analyze/">Analyze API</a>), it’s also a good idea to duplicate these new negative patterns as <strong>processing</strong> patterns as well, to prevent errant processing of unneeded duplicates.</p>
<p>It may take a round or two of checking the URL Report to fully exclude all of the dynamic links. Once you have, your crawl should finish its round within a few minutes.</p>
			</div>
