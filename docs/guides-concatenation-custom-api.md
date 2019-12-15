---
id: guides-concatenation-custom-api
title: Concatenating multiple pages with a custom API
sidebar_label: Concatenating multiple pages with a custom API
---

<div class="entry-content">
		<p>Diffbot’s Article API automatically concatenates multiple-page articles… but what if you want to concatenate multiple pages of data for a custom API?</p>
<p>You can do this by creating a custom field called “nextPage” and providing it with the link/URL to the page you want to append:</p>
<ol>
<li>Create a new custom field named <code>nextPage</code>.</li>
<li>Select the element that contains the link to the next page.</li>
<li>Add an “attribute” filter using the Filters drop-down, and in this field enter <code>HREF</code> to make sure the URL value is returned. (Note that in some Javascript-based pagination, this URL value may not be available or may be available in a different attribute.)</li>
</ol>
<p>Your Custom API will subsequently attempt to follow up to 20 pages of “nextPage” links, returning all available data in a single response.</p>
			</div>
