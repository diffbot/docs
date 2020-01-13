---
id: api-article-html
title: Article API: HTML Field Specification
sidebar_label: Article API: HTML Field Specification
---

<div id="docBody" style="overflow-y:scroll;height:800px;">
<h3 id="htmlspec">HTML Field Specification</h3>
<p>Diffbot's <code>html</code> field returns normalized HTML maintaining the structure and layout of the source article, while standardizing its element and attributes for reliable parsing and processing. Content will be normalized into the following elements and attributes:

</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead>
<tr>
<th>Element</th>
<th>Attributes</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>*</code></td>
<td><code>data-*</code></td>
<td>As of January 2017 normalized HTML will retain and return <a href="http://www.w3schools.com/tags/att_global_data.asp" target="_blank">data-*</a> attributes.</td>
</tr>
<tr>
<td colspan="3"><em>Block elements</em></td>
</tr>
<tr>
<td><code>p</code></td>
<td class="empty">—</td>
<td>Unless returned within a more specific element below, all text will be returned within <code>p</code> elements at the top-level of the HTML response.</td>
</tr>
<tr>
<td>
<code>h1</code> - <code>h5</code>
</td>
<td class="empty">—</td>
<td>Headers will be maintained if originally provided.</td>
</tr>
<tr>
<td><code>aside</code></td>
<td class="empty">—</td>
<td>Returned at top-level of HTML response.</td>
</tr>
<tr>
<td><code>blockquote</code></td>
<td class="empty">—</td>
<td>Returned at top-level of HTML response.</td>
</tr>
<tr>
<td>
<code>code</code>, <code>pre</code>
</td>
<td class="empty">—</td>
<td>Returned at top-level of HTML response.</td>
</tr>
<tr>
<td>
<code>ul</code>, <code>ol</code>
</td>
<td class="empty"><code>start</code></td>
<td>Returned at top-level of HTML response.</td>
</tr>
<tr>
<td class="indent"><code>li</code></td>
<td class="empty">—</td>
<td></td>
</tr>
<tr>
<td><code>table</code></td>
<td></td>
<td>Original content within <code>table</code> elements will be largely retained, including images and other media items.</td>
</tr>
<tr>
<td class="indent"><code>tbody</code></td>
<td class="empty">—</td>
<td></td>
</tr>
<tr>
<td class="indent"><code>th</code></td>
<td class="empty">—</td>
<td></td>
</tr>
<tr>
<td class="indent"><code>tr</code></td>
<td class="empty">—</td>
<td></td>
</tr>
<tr>
<td class="indent"><code>td</code></td>
<td>
<code>valign</code>, <code>colspan</code>
</td>
<td></td>
</tr>
<tr>
<td><code>dl</code></td>
<td class="empty">—</td>
<td>Returned at top-level of HTML response.</td>
</tr>
<tr>
<td class="indent"><code>dt</code></td>
<td class="empty">—</td>
<td></td>
</tr>
<tr>
<td class="indent"><code>dd</code></td>
<td class="empty">—</td>
<td></td>
</tr>
<tr><td colspan="3"><em>Inline elements</em></td></tr>
<tr>
<td><code>br</code></td>
<td class="empty">—</td>
<td>Single linebreaks entities will be maintained in markup and returned as <code>&lt;br&gt;</code>. Double-linebreaks will be removed and surrounding content will be returned within <code>p</code> block elements.</td>
</tr>
<tr>
<td>
<code>b</code>, <code>strong</code>
</td>
<td class="empty">—</td>
<td>Inline emphasis tags will be retained inside of other elements.</td>
</tr>
<tr>
<td>
<code>i</code>, <code>em</code>
</td>
<td class="empty">—</td>
<td></td>
</tr>
<tr>
<td><code>u</code></td>
<td class="empty">—</td>
<td></td>
</tr>
<tr>
<td><code>sup</code></td>
<td class="empty">—</td>
<td></td>
</tr>
<tr>
<td><code>sub</code></td>
<td class="empty">—</td>
<td></td>
</tr>
<tr>
<td><code>a</code></td>
<td><code>href</code></td>
<td>Anchor tags and their <code>href</code> values will be retained.</td>
</tr>
<tr><td colspan="3"><em>Media</em></td></tr>
<tr>
<td><code>figure</code></td>
<td class="empty">—</td>
<td>Media elements will be returned at the top-level of the HTML content and contained within <code>figure</code> tags.</td>
</tr>
<tr>
<td><code>img</code></td>
<td>
<code>src</code>, <code>alt</code>, <code>srcset</code>, <code>sizes</code>
</td>
<td>Image layout specifics (floats, etc.) and CSS-specified widths/heights will be discarded.</td>
</tr>
<tr>
<td>
<code>video</code>/<code>audio</code>
</td>
<td><code>src</code></td>
<td>The child <code>source</code> elements within <code>video</code> and <code>audio</code> elements will be retained along with the <code>type</code> attribute, if provided.</td>
</tr>
<tr>
<td class="indent"><code>source</code></td>
<td>
<code>src</code>, <code>type</code>, <code>srcset</code>, <code>sizes</code>
</td>
<td></td>
</tr>
<tr>
<td><code>figcaption</code></td>
<td class="empty">—</td>
<td>If present, media captions will be returned as <code>figcaption</code> elements within the <code>figure</code> container.</td>
</tr>
<tr>
<td><code>iframe</code></td>
<td>
<code>src</code>, <code>frameborder</code>
</td>
<td></td>
</tr>
<tr>
<td>
<code>embed</code>, <code>object</code>
</td>
<td>
<code>src</code>, <code>type</code>
</td>
<td></td>
</tr>
</tbody>
</table>

<h3 id="htmlspec">Example HTML Response</h3>


```text

&lt;p&gt;Diffbot's human wranglers are proud today to announce the release of our newest product: an API for... products!&lt;/p&gt;

&lt;p&gt;The &lt;a href="http://www.diffbot.com/products/automatic/product"&gt;Product API&lt;/a&gt; can be used for extracting clean, structured data from any e-commerce product page. It automatically makes available all the product data you'd expect: price, discount/savings amount, shipping cost, product description, any relevant product images, SKU and/or other product IDs.&lt;/p&gt;

&lt;p&gt;Even cooler: pair the Product API with &lt;a href="http://www.diffbot.com/products/crawlbot"&gt;Crawlbot&lt;/a&gt;, our intelligent site-spidering tool, and let Diffbot determine which pages are products, then automatically structure the entire catalog. Here's a quick demonstration of Crawlbot at work:&lt;/p&gt;

&lt;figure&gt;
  &lt;iframe frameborder="0" src="http://www.youtube.com/embed/lfcri5ungRo?feature=oembed"&gt;&lt;/iframe&gt;
&lt;/figure&gt;

&lt;p&gt;We've developed the Product API over the course of two years, building upon our core vision technology that's extracted structured data from billions of web pages, and training our machine learning systems using data from tens of thousands of unique shopping sites. We can't wait for you to try it out.&lt;/p&gt;

&lt;p&gt;What are you waiting for? Check out the &lt;a href="http://www.diffbot.com/products/automatic/product"&gt;Product API documentation&lt;/a&gt; and dive on in! If you need a token, check out our &lt;a href="http://www.diffbot.com/pricing"&gt;pricing and plans&lt;/a&gt; (including our Free plan).&lt;/p&gt;

&lt;p&gt;Questions? Hit us up at &lt;a href="mailto:support@diffbot.com"&gt;support@diffbot.com&lt;/a&gt;.&lt;/p&gt;

```



</div>