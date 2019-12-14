---
id: guides-download-latest-round-crawl-results
title: In a recurring crawl, how do I download only the latest round’s content?
sidebar_label: In a recurring crawl, how do I download only the latest round’s content?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Crawlbot’s recurring-crawl functionality allows you to repeat a crawl to access the latest data on a regular basis. Crawl “rounds” can be started automatically on a schedule, or you can manually start new rounds via the Crawlbot API.</p>
<p>Once you have your repeat crawl running, use the <a href="http://www.diffbot.com/dev/docs/search" target="_blank">Search API</a> if you want to retrieve only the latest crawled data. By filtering by the <code>timestamp</code> field, you can limit your retrieved output to only that content that’s been processed since the date provided.</p>
<p>For instance, if your latest crawl round started on October 1, 2014, a search using the query <code>min:timestamp:2014-10-01</code> will retrieve only those objects that were processed on or after the date of the latest round.</p>
<p>See the full date-query syntax and other information in the <a href="http://www.diffbot.com/dev/docs/search" target="_blank">Search API</a> documentation.</p>
			</div>
