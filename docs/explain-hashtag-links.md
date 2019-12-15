---
id: explain-hashtag-links
title: Does Crawlbot follow “hashtag” links / internal links / fragment identifiers?
sidebar_label: Does Crawlbot follow “hashtag” links / internal links / fragment identifiers?
---

<div class="entry-content">
		<p>As a rule, no: Diffbot’s <a href="http://www.diffbot.com/products/crawlbot">automatic crawler</a> — like all crawlers — does not pursue internal links, for instance <a href="#bottom">this one</a>:</p>
<p><code>https://support.diffbot.com/crawlbot/does-crawlbot-follow-hashtag-links-fragment-identifiers#bottom</code></p>
<p>Internal links — also known as hashtag links, intra-page links, bookmark links, or (officially) as links containing <a title="Wikipedia: fragment identifier" href="https://en.wikipedia.org/wiki/Fragment_identifier" target="_blank">fragment identifiers</a> — indicate a subordinate resource or section of a primary resource. In most cases, this means a discrete location on a web page. Were crawlers to follow these they would visit individual pages many more times that is necessary (or, in the case of most Wikipedia pages, dozens or hundreds of times).</p>
<p>Increasingly sites are using the <code>#</code> convention to load unique resources via Javascript. While <a title="Do Diffbot APIs execute Javascript?" href="explain-apis-javascript-support" target="_blank">Diffbot APIs indeed execute Javascript</a>, for the purposes of crawling these individual resources do not represent valid uses of the fragment identifier syntax. Thus, only the base/primary resource — the part of the URL preceding the <code>#</code>-sign, will be spidered.</p>
<p><a name="bottom"></a><em>Here’s the bottom of the post, linked from above.</em></p>
			</div>
