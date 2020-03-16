---
id: explain-apis-follow-redirects
title: Do Diffbot APIs follow redirects?
sidebar_label: Do Diffbot APIs follow redirects?
---

Yes, Diffbot extraction APIs will follow various forms of redirecting URLs, including 301 redirects and `meta` refresh redirects.

In these cases the API will return the `resolvedPageUrl` field indicating the final destination URL.

For [Custom APIs](api-basics-custom) and other domains with custom rules applied: rules can be applied based on either the original URL or the resolved URL, with resolved URL rules taking precedence. (If rules exist for both, the rules applied to the original rule will not take effect.)

Within [Crawlbot](cb-basics-cb): if you enter patterns or regular expressions to limit pages crawled or processed, these patterns will apply only to the original URL as detected within page links. Crawlbot will not resolve URLs when comparing against the `urlCrawlPattern`, `urlProcessPattern`, `urlCrawlRegEx`, or `urlProcessRegEx` fields.
