---
id: guides-site-templates-custom-api
title: How do custom APIs handle different templates?
sidebar_label: How do custom APIs handle different templates?
---

<div class="entry-content">
		<p>If the site you’re looking to process provides different layouts or templates for the same URL structure or pages, you can still process data with a Diffbot Custom API. There are two primary ways to handle differing layouts:</p>
<p><strong>Comma-separate different selectors from different templates</strong></p>
<p>By comma-separating your selectors, Diffbot’s Custom API will look for all possible matches when extracting data. So if one layout provides data using a class name of <code>.favorites</code> and another layout uses a class name of <code>.likes</code>, and you wish to extract either using the same field, you can use the selector of <code>.likes,.favorites</code> to support both templates/layouts. The “likes” and “favorites” data will be returned in your single field.</p>
<p><a href="guides-combining-css-selectors">See more on this behavior</a>.</p>
<p><strong>Create a different field for each data type in each layout</strong></p>
<p>Diffbot Custom APIs will only return data for a field if its selectors are found on the page; empty fields will be suppressed. So you can also simply create a new fieldname for new fields on different templates.</p>
<p>For instance, in the above example, you could create one field named <code>likes</code> with a selector of <code>.likes</code>, and one field named <code>favorites</code> with a selector named <code>.favorites</code>. When <code>.likes</code> is found on a page, the <code>likes</code> field will be returned; when <code>.favorites</code> is found, the <code>favorites</code> field will be returned.</p>
			</div>
