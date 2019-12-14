---
id: guides-multiple-crawl-seeds
title: Can I spider multiple sites in the same crawl? Is there a limit to the number of seed URLs?
sidebar_label: Can I spider multiple sites in the same crawl? Is there a limit to the number of seed URLs?
---

<div class="entry-content">
		<p>Yes, you can crawl multiple sites in the same Crawlbot job: simply add each seed URL, separated by a space, when creating or editing your job. Crawlbot will then apply any crawling and processing patterns (and/or regular expressions) to all of the domains/subdomains contained in your seeds.</p>
<p>Extracted content will be indexed in the same Crawlbot collection; you can use a Search API query to filter by site (<code>query=site:diffbot.com</code>) if you’d like to narrow results after crawling.</p>
<p>There is no hard limit to the number of seed URLs.</p>
			</div>
