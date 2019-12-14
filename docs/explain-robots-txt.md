---
id: explain-robots-txt
title: Does Crawlbot respect the robots.txt protocol?
sidebar_label: Does Crawlbot respect the robots.txt protocol?
---

<div class="entry-content">
		<p>Yes, by default Crawlbot adheres to a site’s robots.txt instructions, including the <code>disallow</code> and <code>crawl-delay</code> directives.</p>
<p>In specific cases — typically because of a partnership or agreement you have with the site to be crawled — the robots.txt instruction can be ignored/overridden. This is often faster than waiting for the third-party site to update its robots.txt file.</p>
<p>To whitelist Crawlbot for a site, specify the “Diffbot” user-agent in the site’s robots.txt:</p>
<pre><code>User-agent: Diffbot
Disallow</code></pre>
<p>Note that Crawlbot does not adhere to the <code>Allow</code> directive.</p>
			</div>
