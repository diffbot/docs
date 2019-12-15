---
id: guides-when-to-use-analyze
title: When to use the Analyze API versus individual Automatic APIs
sidebar_label: When to use the Analyze API versus individual Automatic APIs
---

<div class="entry-content">
		<p>The <a href="http://www.diffbot.com/products/automatic/analyze">Analyze API</a> serves as a single entry-point to all of Diffbot’s <a href="http://www.diffbot.com/products/automatic">Automatic APIs</a>. In one request, the Analyze API will:</p>
<ul>
<li>Determine the <code>type</code> of any URL submitted.</li>
<li>Return the full Diffbot extraction for any supported types: articles, products, images, discussion threads, videos — and more coming soon. <a href="http://www.diffbot.com/products/automatic">See all Automatic APIs</a>.</li>
<li>Or, just return the type of page you’re looking for by using the <code>mode</code> argument, e.g. <code>https://api.diffbot.com/v3/analyze?mode=article</code>
</li>
</ul>
<p>Why would you use the Analyze API over calling the Product API, Article API, or another API directly?</p>
<ul>
<li>If you are handling web pages of unknown origin (e.g., end-user submitted/shared links), the Analyze API will prevent spurious extractions from unsupported pages.</li>
<li>When spidering a site using Crawlbot, the Analyze API will prevent extracting <strong>every</strong> site page via a single API. For instance, using Analyze makes it easy to “retrieve all the product data from ECommerceStore.com” without additional configuration.</li>
</ul>
<p>And why would you opt for a specific API over the general Analyze endpoint?</p>
<ul>
<li>If you are certain of your web-page type (e.g., all articles), sending calls directly to the specific API endpoint will result in 100% extractions. There is always a small chance that the Analyze API will mis-classify confusing pages.</li>
</ul>
<p>Note that you can also use the <a title="The Analyze API “fallback” argument" href="guides-analyze-api-fallback"><code>fallback</code> argument</a> if you’d like to ensure that unsupported pages are processed by a specific API of your choosing.</p>
<p>Custom rules applied to a specific API, and specific API parameters (e.g., <code>fields=meta,videos,html</code> for the Article API) will be handled appropriately regardless of using the Analyze or specific extraction APIs.</p>
			</div>
