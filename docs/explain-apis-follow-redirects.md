---
id: explain-apis-follow-redirects
title: Do Diffbot APIs follow redirects?
sidebar_label: Do Diffbot APIs follow redirects?
---

<div class="entry-content">
		<p>Yes, Diffbot extraction APIs will follow various forms of redirecting URLs, including 301 redirects and <code>meta</code> refresh redirects.</p>
<p>In these cases the API will return the <code>resolvedPageUrl</code> field indicating the final destination URL.</p>
<p>For Custom APIs and other domains with custom rules applied: rules can be applied based on either the original URL or the resolved URL, with resolved URL rules taking precedence. (If rules exist for both, the rules applied to the original rule will not take effect.)</p>
<p>Within Crawlbot: if you enter patterns or regular expressions to limit pages crawled or processed, these patterns will apply only to the original URL as detected within page links. Crawlbot will not resolve URLs when comparing against the <code>urlCrawlPattern</code>, <code>urlProcessPattern</code>, <code>urlCrawlRegEx</code>, or <code>urlProcessRegEx</code> fields.</p>
			</div>
