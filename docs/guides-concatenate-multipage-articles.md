---
id: guides-concatenate-multipage-articles
title: How to concatenate multiple-page articles using a custom rule
sidebar_label: How to concatenate multiple-page articles using a custom rule
todo: Modify links to old Dashboard
---

<div class="entry-content">
		<p><strong>Related: <a title="How Diffbot handles multiple-page articles" href="guides-multi-page-articles-discussions">How Diffbot handles multiple-page articles</a><br>
</strong></p>
<p>Diffbot’s <a href="http://www.diffbot.com/products/automatic/article" target="_blank">Article API</a> attempts to concatenate (string together) multiple-page articles, returning up to twenty pages of content in a single response.</p>
<p>On some sites or pages our automated algorithm is unable to concatenate automatically. In these cases you can use the <a title="Custom API Toolkit" href="http://www.diffbot.com/dev/customize" target="_blank">Custom API Toolkit</a> to create a “nextPage” rule, providing the CSS selector of an article’s next page link.</p>
<p>To do this:</p>
<ol>
<li>Create a new custom field named <code>nextPage</code>.</li>
<li>Select the element that contains the link to the next page.</li>
<li>Add an “attribute” filter using the Filters drop-down, and in this field enter <code>HREF</code> to make sure the URL value is returned. (Note that in some Javascript-based pagination, this URL value may not be available or may be available in a different attribute.)</li>
</ol>
<p>The Article API will subsequently use this value to concatenate articles, creating a single <code>text</code> (and <code>html</code>) field response.</p>
<p><strong>A note on tricky selectors</strong></p>
<p>Sometimes sites don’t identify the next page link using unique CSS selectors (particularly on sites that have links to individually-numbered pages).</p>
<p>For instance, Slate.com uses the same class — <code>.sl-art-pag-link</code> — for all links to individual pages, even pages prior to the current page. Using this class alone could result in multiple ‘nextPage’ values and an infinite processing loop.</p>
<p><a href="http://www.slate.com/articles/double_x/doublex/2012/12/the_day_i_almost_shot_my_father_i_was_young_angry_and_holding_a_gun.html" target="_blank">See a Slate example here</a>.</p>
<p>Our concatenation algorithm will generally prevent infinite loops and repeated content, but writing better CSS selectors will ensure you the best performance. In this case, using the following selector will ensure that only the correct next page is identified:</p>
<p><code>.sl-art-curpage + .sl-art-pag-link</code></p>
<p>This uses the plus-sign combinator to identify only the page link that is immediately preceded by the current page (<code>.sl-art-curpage</code>). This ensures that only the next page — if it exists — is identified.</p>
<p>For more information on our Custom API CSS selectors, check out the inline help within the <a href="http://www.diffbot.com/dev/customize" target="_blank">Custom API Toolkit</a>.</p>
			</div>
