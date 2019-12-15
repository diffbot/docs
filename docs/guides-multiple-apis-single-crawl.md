---
id: guides-multiple-apis-single-crawl
title: Can multiple Diffbot extraction APIs be used in a single crawl?
sidebar_label: Can multiple Diffbot extraction APIs be used in a single crawl?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Crawlbot crawls are meant to work with a single Diffbot extraction API. If you wish to process multiple types of pages through separate APIs, your options are:</p>
<p><strong>Use the Analyze API</strong></p>
<p>The <a href="guides-when-to-use-analyze">Analyze API</a> will automatically determine the page-type of each page crawled, and structure the data from supported pages. This content can be filtered using the <a href="http://www.diffbot.com/dev/docs/search">Search API</a>, or the JSON downloaded in full and filtered using the <code>type</code> field.</p>
<p><strong>Set-up Multiple Crawls</strong></p>
<p>To explicitly use multiple APIs for crawling a single site, you’ll need to set-up multiple crawls, each using an independent API. You can use Crawlbot’s multiple mechanisms <a href="guides-patterns">for controlling/narrowing your crawls</a> to ensure that each separate crawl job only processes the right type of pages.</p>
			</div>
