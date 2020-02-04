---
id: tutorials-correcting-api-output-custom
title: How to correct Article, Product, or other API output with a custom rule
sidebar_label: How to correct Article, Product, or other API output with a custom rule
todo: Modify links to old Dashboard and api docs, and download images locally
---

<div class="entry-content">
		<p>Have you run into a problem where the Diffbot extraction from a particular site is incorrect or needs adjusting? Our <a href="https://www.diffbot.com/dev/customize">API Toolkit</a> not only allows you to create new APIs entirely, but also to override or correct the output returned by our Automatic APIs.</p>
<p>Correcting a field’s output takes immediate effect for your account, and also serves to train our system, improving Diffbot extraction over the long run.</p>
<p>Here’s how to make a correction if you have a problem with a particular site:</p>
<p><strong>Find a problematic URL</strong></p>
<p>Start with a web page that is exhibiting the problem, then visit the <a href="https://www.diffbot.com/dev/customize">API Toolkit</a> in your Developer Dashboard.</p>
<p><strong>Create a rule in the API Toolkit</strong></p>

![Toolkit](/img/toolkit1.png)

<p>Select the API you want to correct from the drop-down list, and then “Test” your sample URL’s output.</p>
<p><strong>Optional: adjust the domain-matching for your rule</strong></p>
<p>By default, your rule will apply to any pages whose URLs match the subdomain of the sample URL. In our case, the rule will affect all pages at support.diffbot.com.</p>
<p><code>(http(s)?://)?(.*\.)?support.diffbot.com.*</code></p>
<p>To adjust this, click the <strong>Change this</strong> link. This will provide you a regular expression that can be edited to narrow or broaden your matches. For example, to apply to all pages at diffbot.com:</p>
<p><code>(http(s)?://)?(.*\.)?diffbot.com.*</code></p>
<p>To apply only to pages within the “/apitoolkit/” section:</p>
<p><code>(http(s)?://)?(.*\.)?support.diffbot.com/apitoolkit/.*</code></p>
<p>Or to apply to all pages at any domain:</p>
<p><code>.*</code></p>
<p><strong>Edit the field you wish to correct</strong></p>
<p>The API Toolkit will show a preview of current API output. To correct, click “edit” next to the field you wish to adjust. In our example, we’ll edit the <code>author</code> field, which is hidden for Diffbot support posts.</p>

![Toolkit](/img/toolkit2.png)

<p>In the resulting preview window, you can either manually enter a <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">CSS selector</a>, or point-and-click to choose the correct element. A preview of the output will be displayed at the top of the screen.</p>
<p>In our example case, the CSS selector we want is <code>.byline .author</code>:</p>

![Toolkit](/img/toolkit3.png)

<p><strong>Click “Save” to save your rule</strong></p>
<p>Once saved, your rule will take immediate effect for API calls (a) using the specified API and (b) matching the domain regular expression.</p>

![Toolkit](/img/toolkit4.png)

<p>Any page that doesn’t contain a specified CSS selector will return the default Diffbot API output.</p>
<p><strong>For more advanced techniques, see the following resources:</strong></p>
<ul>
<li><a href="https://docs.diffbot.com/docs/en/guides-intro">All API Toolkit support posts</a></li>
<li>
<a href="https://docs.diffbot.com/docs/en/tutorials-custom-video">Video tutorials</a>
</li>
<li><a href="https://docs.diffbot.com/docs/en/api-selectors-filters">All supported CSS selectors</a></li>
</ul>
			</div>
