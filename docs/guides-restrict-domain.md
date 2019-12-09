---
id: guides-restrict-domain
title: Restricting Crawls to Domains and Subdomains
sidebar_label: Restricting Crawls to Domains and Subdomains
---


<p>Crawlbot has the following default behavior:</p>
<ul>
<li>If a seed URL contains a non-www subdomain (<code>http://blog.diffbot.com</code> or <code>https://support.diffbot.com</code>), crawling will be limited to the specified subdomain.</li>
<li>If a seed URL lacks a subdomain or uses “www” (<code>http://www.diffbot.com</code>), crawling will extend to the entire domain.</li>
</ul>
<p>If you enter a seed of <code>http://blog.diffbot.com</code>, only URLs from http://blog.diffbot.com will be crawled. If you enter a seed of <code>http://www.diffbot.com</code>, URLs from http://www.diffbot.com, http://blog.diffbot.com, https://support.diffbot.com, etc. will be crawled.</p>

To make Diffbot visit other subdomains on that domain as well, deactivate the toggle "Restrict Subdomains".

<p><strong>Processing Pages From Other Domains</strong></p>
<p>Crawlbot offers limited support for processing pages on other domains.</p>

If you need to process pages on other domains or subdomains (e.g., a blog home page presents all its links as shortened URLs), you may do so by disabling “Restrict Domain” functionality in the Crawlbot UI (or the <code>restrictDomain</code> parameter in the Crawlbot API). Doing so will enable Crawlbot to spider all links regardless of domain, up to one “hop” from your seed URLs. (A “hop” is one link-depth from your seed. [Read more on hops.](guides-crawl-depth))

<p>To prevent over-spidering, Crawlbot cannot&nbsp;exhaustively spider multiple domains from a limited set of seed. If you wish to include multiple domains in your crawl, please provide multiple domains in your seed URLs.</p>