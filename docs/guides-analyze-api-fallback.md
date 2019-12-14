---
id: guides-analyze-api-fallback
title: The Analyze API “fallback” argument
sidebar_label: The Analyze API “fallback” argument
todo: Modify links to old API docs
---

<div class="entry-content">
		<p><strong>Related:</strong> <a title="When to use the Analyze API versus individual Automatic APIs" href="guides-when-to-use-analyze">When to use the Analyze API versus individual Automatic APIs</a></p>
<p>As of October 2015, the <a href="http://www.diffbot.com/dev/docs/analyze">Analyze API</a> offers a <code>fallback</code> argument. When and why would you want to use <code>fallback</code>?</p>
<p>The Analyze API, by design, acts as a content filter: it serves to identify web pages and extract the content only from those that are supported by Diffbot <a href="http://www.diffbot.com/products/automatic">Automatic APIs</a>. For instance, an article page will be routed-to and automatically extracted by the Article API, and an individual product page will be routed-to and automatically extracted by the Product API.</p>
<p>However:</p>
<ul>
<li>a product-listing page…</li>
<li>a blog or e-commerce or corporate home page…</li>
<li>a full-screen Flash-based recreation of the original <em>Doom</em>…</li>
</ul>
<p>…all of these pages will be simply identified as <code>type:other</code> by the Analyze API. These pages are not supported by an Automatic API, and their contents will not be extracted.</p>
<p>It is in this case that you may want to avail yourself of <code>fallback</code>. By passing a specific API in your <code>fallback</code> argument — e.g. <code>http://api.diffbot.com/v3/analyze?fallback=article</code> — you can force unsupported pages through the API you designate. The specified API will then do its best to extract whatever content it can from the otherwise-unsupported web page.</p>
<p>Note that when you utilize <code>fallback</code>, the <code>type</code> of any returned object(s) will match your fallback API. However the field <code>originalType</code> will also be returned in this situation, with a value of “other” — this indicates that the fallback argument has been used. The  Analyze API’s top-level <code>type</code> will also maintain its “other” value.</p>
<p>So: if circumstances demand that content should <em>always</em> be extracted from Analyze API requests, passing a <code>fallback</code> value will ensure that your <code>type:other</code> pages return something.</p>
			</div>
