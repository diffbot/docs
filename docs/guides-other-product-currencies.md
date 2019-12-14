---
id: guides-other-product-currencies
title: Accessing Product Prices in Other Currencies with the Product API
sidebar_label: Accessing Product Prices in Other Currencies with the Product API
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Certain shopping sites present pricing information in currencies based on the location of the visitor. In these situations Diffbot will usually get the US-directed pricing (dollars), as our rendering engines are located in the US.</p>
<p>If you wish to access pricing information for a different country/region, there are a few approaches to consider:</p>
<ol>
<li>Some sites set a cookie with visitor’s location information, either on first visit or after an explicit country/location selection. If this is the case, you can retrieve the cookie value that your browser sets, and then pass this cookie as a custom header in your Diffbot request. See how to do this in the <a title="Diffbot Documentation: Product API" href="https://diffbot.com/dev/docs/product/#authenticating">Product API documentation</a>.</li>
<li>Try setting a custom <code>Accept-Language</code> header specific to the language preference(s) of your desired currencies. See the <a href="http://www.diffbot.com/dev/docs/product/#customheaders" target="_blank">Product API documentation</a> to send custom headers.</li>
<li><span style="line-height: 1.5em;">Assuming you have access to the localized price information (via machines located in another country), you can download and then POST the HTML directly to the Product API for processing. See how to do this in the <a title="Diffbot Documentation: Product API: Posting content" href="https://diffbot.com/dev/docs/product/#posting">Product API documentation</a>.</span></li>
<li>The Product API also offers the field(s) <code>offerPriceDetails</code>, <code>regularPriceDetails</code>, and <code>saveAmountDetails</code>, each of which will include the <code>symbol</code> field—e.g., <code>"symbol": "$".  </code>You can use this symbol as a factor in your own currency conversion.</li>
</ol>
			</div>
