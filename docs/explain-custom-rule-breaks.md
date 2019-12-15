---
id: explain-custom-rule-breaks
title: What happens when a custom rule “breaks?”
sidebar_label: What happens when a custom rule “breaks?”
---

<div class="entry-content">
		<p>As with thermodynamics, manual web scraping tends toward disorder. That is to say: all rules eventually fail.</p>
<p>But what happens to your custom rules when a site changes its markup?</p>
<p><strong>Corrected Fields in Automatic APIs</strong></p>
<p>If your rule overrides a default field in one of Diffbot’s Automatic APIs, a failing rule will result in the default (automatic) response being returned. So if you’ve overridden the <code>title</code> of an article with selector <code>h1.title</code>, and the site updates its markup to remove the “title” class, the default title will be returned once your rule starts to fail.</p>
<p><strong>Custom Fields</strong></p>
<p>Completely custom fields that start to fail — i.e., return no output — will be suppressed in API responses. Diffbot will not return an empty field if no match is found on a page for the selector(s).</p>
<p>If <strong>all</strong> of the fields in your Custom API fail, your Custom API request will return a 500 error indicating that rules were unable to be applied to the page:</p>
<pre>{
   "errorCode": 500,
   "error": "Unable to apply rules"
}</pre>
			</div>
