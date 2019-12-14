---
id: explain-how-long-crawl-site
title: How long does it take to crawl a site?
sidebar_label: How long does it take to crawl a site?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Many things affect Crawlbot’s speed when crawling and processing a site. These include:</p>
<ul>
<li>Size of a site</li>
<li>The number of pages to be processed by a Diffbot extraction API</li>
<li>Overall performance/responsiveness of a site</li>
<li>Any specific crawling restrictions</li>
</ul>
<p><span style="line-height: 1.5em;">Fundamentally, a larger site will take longer to crawl and process. A site with 100 pages will be finished in seconds, whereas a site with 1,000,000 pages will take much longer.</span></p>
<p>Likewise, the more pages processed by a Diffbot API, the longer your crawl job will take. If you are using our Analyze API to automatically identify and extract page-types, this will most commonly process every page on the site. (See <a title="What’s the difference between crawling and processing?" href="explain-crawling-versus-processing" target="_blank">the differences between crawling and processing</a>.)</p>
<p>Many sites are simply slower to respond than others. In some cases this is due to physical distance (a single server in Australia will be much slower to respond than a site with multiple points-of-presence or a CDN infrastructure), and in others this may be due to instruction in the site’s robots.txt file: specifically the <code>crawlDelay</code> parameter, to which Crawlbot <a title="Does Crawlbot respect the robots.txt protocol?" href="explain-robots-txt" target="_blank">adheres by default</a>.</p>
<p>Finally, the overall load on Crawlbot is a factor, as our spiders are distributed evenly across our active customers. We regularly increase the number of available servers based on need, but periods of high activity can reduce the number of spiders available. If you need dedicated crawling or processing hardware, <a href="mailto:support@diffbot.com" target="_blank">contact us</a> about our additional plans.</p>
<p><strong>Ways to Speed Up Crawlbot</strong></p>
<p>The most convenient way to improve performance of Crawlbot is by using <a title="Diffbot Docs: Crawlbot" href="http://www.diffbot.com/dev/docs/crawl" target="_blank">crawling and processing patterns</a> (or regular expressions) to specify exactly which sections of a site to crawl and process.</p>
<p>For instance, if you are only interested in a specific subdomain, make sure that your crawl pattern or regular expression limits your crawling to that subdomain.</p>
<p>In limited cases ignoring a site’s robots.txt instruction is possible, but generally only with permission of the site to be crawled.</p>
<p><strong>Remember: Your Data Is Available During a Crawl</strong></p>
<p>Extracted data is available as soon as it has been processed — both for download and via our <a href="http://www.diffbot.com/dev/docs/search" target="_blank">Search API</a> — even while a crawl continues. Even if a crawl hasn’t finished you can still start to work with the data being extracted.</p>
			</div>
