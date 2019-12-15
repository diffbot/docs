---
id: explain-moving-to-new-api-versions
title: Moving to New Versions of Diffbot APIs
sidebar_label: Moving to New Versions of Diffbot APIs
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>We introduced Version 2 of our Article API in mid-2013 — updating the original Article API alongside the release of our <a href="http://www.diffbot.com/products/automatic/product">Product</a> and <a href="http://www.diffbot.com/products/automatic/image">Image</a> APIs — and Version 3 of our APIs in April 2014. Version 3 is a structural alignment of our API responses, both for internal consistency and in anticipation of future product releases, and for our Article API introduces our newest rendering engine, which includes <a title="Do Diffbot APIs execute Javascript?" href="explain-apis-javascript-support">Javascript support</a>.</p>
<p>We advise updating to the V3 API to take advantage of current and future capabilities.</p>
<p>See complete <a href="http://www.diffbot.com/dev/docs">API documentation</a> within the Developer Dashboard for all available options. A summary of changes is below:</p>
<h3 id="ipt_kb_toc_88_0">Version 3 Changes:</h3>
<p><strong>Article API Uses Newest Rendering Engine</strong></p>
<p>The Article API has transitioned to our full renderer, including support for Javascript/Ajax events.</p>
<p><strong>Article API Uses a New Tagging Engine</strong></p>
<p>The Article API’s tagging engine (generates tags/entities based on analysis of the extracted text) has been overhauled for Version 3. The format has changed — each entity now includes a <a title="DBPedia" href="http://wiki.dbpedia.org/About" target="_blank">DBPedia</a> link and type, if available — and the <code>tags</code> field is now automatically included in every Article API request.</p>
<p><b>All Responses Now Include <code>request</code> and <code>objects</code> Elements</b></p>
<p>All Diffbot APIs now return two primary top-level objects:</p>
<ul>
<li>
<code>request</code>, which provides metadata on the request itself</li>
<li>
<code>objects</code>, an array of elements extracted from the page</li>
</ul>
<p>For most calls (the Article API, most Product API requests) the objects array will include a single result. Image API requests against multiple-image pages will return multiple image objects.</p>
<p><strong>All Objects are Now Uniquely Identified</strong></p>
<p>All returned objects — both top-level (e.g., articles, products) and nested objects (images, videos) now return a unique <code>diffbotUri</code> value, used internally to help differentiate and catalog each object returned by our APIs.</p>
<p><strong>Individual Field Changes:</strong></p>
<ul>
<li>All APIs: <code>url</code> is now <code>pageUrl</code>
</li>
<li>All APIs: <code>resolved_url</code> is now <code>resolvedPageUrl</code>
</li>
<li>Article API: <code>primary</code> value (in the <code>images</code> array) is now a boolean</li>
<li>Product API: <code>humanLanguage</code> is now available</li>
<li>Product API: <code>description</code> is now <code>text</code>
</li>
<li>Product API: <code>media</code> is now <code>images</code>
</li>
</ul>
<hr>
<h3 id="ipt_kb_toc_88_1">Version 2 Changes:</h3>
<p><strong>Call the <code>http://api.diffbot.com</code> Endpoint</strong></p>
<p>API calls should no longer be made to <code>http://www.diffbot.com/api</code>. To call Diffbot APIs, send requests as follows:</p>
<p><code>http://api.diffbot.com/v3/{api}?token={token}&amp;url={url}</code></p>
<p><strong>Use <code>&amp;fields</code> Parameter to Customize Your Response</strong></p>
<p>Version 2 and subsequent APIs allow you to customize the specific fields of your response using the <code>fields</code> parameter. For instance, to return <code>title</code>, <code>text</code>, <code>meta</code> and <code>images</code> in your Article API response, send the following request:</p>
<p><code>http://api.diffbot.com/v3/article?token={token}&amp;url={url}&amp;fields=title,text,meta,images</code></p>
<p><strong>The <code>media</code> Element Has Been Replaced By the <code>videos</code> and <code>images</code> Elements</strong></p>
<p>The original Article API returned both images and videos in a single <code>media</code> array. Version 2 and later return individual arrays, <code>videos</code> and <code>images</code>, for these items.</p>
<p>Additionally, for images and videos:</p>
<ul>
<li>V2 and above: the <code>link</code> field has been replaced by <code>url</code> for both videos and images arrays.</li>
<li>V2 and above: the <code>type</code> field has been removed from each image or video identified</li>
</ul>
			</div>
