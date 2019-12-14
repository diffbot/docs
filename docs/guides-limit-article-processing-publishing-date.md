---
id: guides-limit-article-processing-publishing-date
title: Can I limit processing to articles written before, after or between certain dates?
sidebar_label: Can I limit processing to articles written before, after or between certain dates?
---

<div class="entry-content">
		<p>Generally: no.</p>
<p>This falls under the “<a href="https://en.wikipedia.org/wiki/There_ain%27t_no_such_thing_as_a_free_lunch" target="_blank">no free lunch</a>” reality of Diffbot services. It is the very <strong>act</strong> of processing by which Diffbot is able to determine an article’s date (returned and normalized in the Article or Discussion API <code>date</code> fields). Until a page is processed, its date is unknown.</p>
<p>(This is true for other extracted fields, as well. For example, Crawlbot cannot limit processing to products whose prices are greater than $100, or whose discussion threads contain more than fifteen posts. These facts are not known until Diffbot has processed the page.)</p>
<p><strong>The Exception: Using HTML Processing Patterns</strong></p>
<p>The rare exception to this will be when crawling sites whose HTML provides consistent markup that allows for <a href="guides-patterns">HTML Processing Patterns</a> to be implemented. HTML Processing Patterns restrict processing of pages to those URLs whose raw HTML source contains the exact string(s) provided.</p>
<p>For instance, if a web site consistently presents its article dates as follows…</p>
<pre><code>&lt;h6 class="dateline"&gt;Wednesday, 19 July 2017&lt;/h6&gt;</code></pre>
<p>…it would be possible to limit article processing by entering a number of specific HTML Processing Patterns. To restrict processing only to articles written between April and August, 2017, you could add the following:</p>
<pre>April 2017&lt;/h6&gt;
May 2017&lt;/h6&gt;
June 2017&lt;/h6&gt;
July 2017&lt;/h6&gt;
August 2017&lt;/h6&gt;
</pre>
<p>To restrict processing to articles written before 2017, you could add the following:</p>
<pre>2013&lt;/h6&gt;
2014&lt;/h6&gt;
2015&lt;/h6&gt;
2016&lt;/h6&gt;
</pre>
<p>…or, using the negative convention (leading exclamation point):</p>
<pre>!2017&lt;/h6&gt;</pre>
<p>It’s important to ensure that your HTML Processing Patterns are exact matches to the source HTML, and that your chosen strings are unique to the pages you wish to process.</p>
			</div>
