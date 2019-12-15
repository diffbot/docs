---
id: guides-infinite-endless-scrolling
title: Can Diffbot crawl sites that use “infinite” or “endless” scrolling?
sidebar_label: Can Diffbot crawl sites that use “infinite” or “endless” scrolling?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Currently Crawlbot does not interact with sites to retrieve or pursue links that appear when a page is scrolled — so-called “infinite” or “endless” scrolling. Crawlbot will only pursue links that are available upon an initial page load.</p>
<p>(Related: <a href="guides-crawling-ajax-generated-links">How to find and access Ajax-generated links while crawling</a>.)</p>
<p>In most cases sites will offer alternative means to find the same links:</p>
<ul>
<li>related links (to other posts or products) on individual post or product pages</li>
<li>search filters or category links that narrow the number of results</li>
<li>a sitemap file (e.g. sitemap.xml) or similar map to individual item pages</li>
</ul>
<p>If you find a site that is unable to be crawled without page-scrolling, you may be able to improve results via the following approach:</p>
<ol>
<li>Write custom Javascript via Diffbot’s <a href="https://www.diffbot.com/dev/docs/analyze/#customheaders">custom X-Evaluate header</a>, implementing a click or scroll event — or multiple click/scroll events.</li>
<li>Store your X-Evaluate header as a <a href="https://www.diffbot.com/dev/docs/custom/managing/">custom rule</a> against the Analyze API for the site in question.</li>
<li>Use the aforementioned method to <a href="guides-crawling-ajax-generated-links">execute Ajax/Javascript</a> while crawling</li>
<p>.
</p>
</ol>
<p>For assistance with the above, feel free to contact us at <a href="mailto:support@diffbot.com">support@diffbot.com</a>.</p>
			</div>
