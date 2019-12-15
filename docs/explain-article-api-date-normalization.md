---
id: explain-article-api-date-normalization
title: Date normalization in the Article API
sidebar_label: Date normalization in the Article API
todo: Modify links to old Dashboard
---

<div class="entry-content">
		<p>Diffbot attempts to normalize content in the Article API’s <code>date</code> field. For example, the date:</p>
<blockquote><p>February 5, 2014</p></blockquote>
<p>will be returned in the Article API JSON response as:</p>
<blockquote><p><code>"date": "Wed, 5 Feb 2014 00:00:00 GMT"</code></p></blockquote>
<p>If a timestamp is available, the Article API will return the time converted to GMT. Articles without a timestamp will be returned with a timestamp of midnight GMT.</p>
<p>Date normalization will also occur for any Article API date fields using custom rules (via the <a href="http://www.diffbot.com/dev/customize">Custom API Toolkit</a>).</p>
			</div>
