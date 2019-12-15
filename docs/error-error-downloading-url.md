---
id: error-error-downloading-url
title: Error Downloading URL Error
sidebar_label: Error Downloading URL Error
---

<div class="entry-content">
		<p><strong>Error message: Error downloading URL</strong></p>
<hr>
<p>This error means the website is either down or successfully blocking Diffbot’s servers.</p>
<p>To check which case we’re dealing with, please try to process it with a regular API call first. Copy this to your browser’s URL bar and replace TOKEN with your token, ENCODED_URL with encoded URL to test one (encode it <a href="https://meyerweb.com/eric/tools/dencoder/">here</a>) and APINAME with the desired API (with products it’s “product”, with articles it’s “article”, etc.).</p>
<pre>https://api.diffbot.com/v3/APINAME?token=TOKEN&amp;url=ENCODED_URL</pre>
<p>If the request is successful, then the page is back up and should work. If it fails, but it opens in your browser normally, then they are blocking Diffbot.</p>
<p>In the case of a block, please try to apply proxies by adding &amp;proxy to the request:</p>
<pre>https://api.diffbot.com/v3/APINAME?token=TOKEN&amp;proxy&amp;url=ENCODED_URL</pre>
<p>If this works, in your crawl / bulk settings, flip the switch that says “Use Proxies” and try again. This should make things work. Please note that <a href="explain-using-different-proxies">proxy calls count as double calls</a>.</p>
			</div>
