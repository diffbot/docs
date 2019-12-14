---
id: guides-multi-page-articles-discussions
title: How Diffbot handles multiple-page articles and discussions
sidebar_label: How Diffbot handles multiple-page articles and discussions
---

<div class="entry-content">
		<p>Diffbot’s Article and Discussion APIs allow for automatic page concatenation: the ability to string-together multiple pages into a single response.</p>
<p>The <strong>Article API</strong> by default will automatically concatenate multiple page articles — up to twenty pages total — into single ‘text’ and ‘html’ responses, and media items from multiple pages into the ‘images’ and ‘videos’ arrays.</p>
<p>To disable this functionality, pass <code>paging=false</code> in your Article API request.</p>
<p>The <strong>Discussion API</strong> will not concatenate by default. If you wish to enable concatenation, use the <code>maxPages</code> argument to define the maximum number of pages you wish to be returned in a response. Use <code>maxPages=all</code> to return all pages regardless of length.</p>
<p>When an article or discussion thread had multiple pages concatenated, you will see two additional fields in your default response:</p>
<ul>
<li>
<code>numPages</code>:  number of pages in total concatenated to form the full output</li>
<li>
<code>nextPages</code>: a list of additional URLs that were extracted</li>
</ul>
<p>On occasion a site’s unique pagination design or terminology will confuse our concatenator. In this case you can add the concatenation functionality for this particular site using our Custom API Toolkit, located in the <a title="Developer Dashboard" href="http://www.diffbot.com/dev" target="_self">Developer Dashboard</a>.</p>
<p>Read about creating a rule for the <strong>nextPage</strong> field here: <a title="Automatically concatenating pages using the ‘nextPage’ field" href="guides-concatenate-multipage-articles">Automatically concatenating pages using the ‘nextPage’ field</a>.</p>
			</div>
