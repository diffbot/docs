---
id: explain-hashtag-links
title: Does Crawlbot follow “hashtag” links / internal links / fragment identifiers?
sidebar_label: Does Crawlbot follow “hashtag” links / internal links / fragment identifiers?
---

As a rule, no: Diffbot’s [crawler](cb-basics-cb) — like all crawlers — does not pursue internal links, for instance [here](#bottom): https://docs.diffbot.com/docs/en/explain-hashtag-links#bottom

Internal links — also known as hashtag links, intra-page links, bookmark links, or (officially) as links containing [fragment identifiers](https://en.wikipedia.org/wiki/Fragment_identifier) — indicate a subordinate resource or section of a primary resource. In most cases, this means a discrete location on a web page. Were crawlers to follow these they would visit individual pages many more times that is necessary (or, in the case of most Wikipedia pages, dozens or hundreds of times).

Increasingly sites are using the `#` convention to load unique resources via JavaScript. While [Diffbot APIs do execute JavaScript](explain-apis-javascript-support), for the purposes of crawling these individual resources do not represent valid uses of the fragment identifier syntax. Thus, only the base/primary resource — the part of the URL preceding the `#`-sign, will be spidered.

## Bottom

Here is the bottom of the post, linked from above.
