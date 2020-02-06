---
id: explain-posting-text-html
title: Can I send HTML or text directly to Diffbot APIs?
sidebar_label: Can I send HTML or text directly to Diffbot APIs?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Yes, all Diffbot extraction APIs support the POSTing of content for analysis and content extraction. The Article API supports both plain-text and HTML POSTs, whereas all other APIs support POSTing of HTML.</p>
<p>When POSTing content to Diffbot, the <code>url</code> value is still required in your request URL. Diffbot will attempt to resolve any relative links contained in your POSTed markup. If you do not wish this to occur, you may send a spurious <code>url</code> value.</p>
<p>See the following links for instructions on sending HTML to the appropriate API:</p>
<ul>
<li><a href="api-analyze/#posting-content">Analyze API</a></li>
<li><a href="api-article/#posting-content">Article API</a></li>
<li><a href="api-custom/#posting-content">Custom APIs</a></li>
<li><a href="api-discussion/#posting-content">Discussion API</a></li>
<li><a href="api-image/#posting-content">Image API</a></li>
<li><a href="api-product/#posting-content">Product API</a></li>
<li><a href="api-video/#posting-content">Video API</a></li>
</ul>
			</div>
