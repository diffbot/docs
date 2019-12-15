---
id: guides-troubleshooting-crawls
title: Why is my crawl not crawling (and other uncommon crawl problems)?
sidebar_label: Why is my crawl not crawling (and other uncommon crawl problems)?
todo: Modify links to old API docs
todo: Modify links to old Dashboard
---

<div class="entry-content">
		<p>Crawlbot may be the easiest way to extract structured data from entire web sites, but occasionally you might run into issues: either a crawl will fail to get off the ground, or will not crawl deeply enough for your needs.</p>
<p>Here are some common solutions to these (uncommon) problems:</p>
<p><strong>Troubleshooting 101: Check the URL Report</strong></p>
<div id="attachment_421" style="width: 791px" class="wp-caption aligncenter">
<a href="https://support.diffbot.com/wp-content/uploads/2016/10/ss_2016-1007_1014.png"><img aria-describedby="caption-attachment-421" class="wp-image-421 size-full" src="/docs/img/ss_2016-1007_1014.png" alt="URL Report" width="781" height="297" srcset="https://support.diffbot.com/wp-content/uploads/2016/10/ss_2016-1007_1014.png 781w, https://support.diffbot.com/wp-content/uploads/2016/10/ss_2016-1007_1014-300x114.png 300w, https://support.diffbot.com/wp-content/uploads/2016/10/ss_2016-1007_1014-768x292.png 768w" sizes="(max-width: 781px) 100vw, 781px"></a><p id="caption-attachment-421" class="wp-caption-text">Download either the complete URL Report, or just the 500 most recently examined URLs.</p>
</div>
<p>When in doubt, download your crawl’s <a href="https://www.diffbot.com/dev/docs/crawl/url-report.jsp">URL Report</a>. The URL Report is a log of each page encountered in a crawl, and provides useful debugging information: the exact actions Crawlbot is taking on each URL.</p>
<p>The URL Report is available during and after a crawl. <a href="https://www.diffbot.com/dev/docs/crawl/url-report.jsp">Read more</a> on each field provided in the report.</p>
<p><strong>If your crawl fails to start at all:</strong></p>
<p>If a crawl doesn’t crawl past the seed URL, check the following possible scenarios:</p>
<ul>
<li>
<strong>Check for robots.txt prevention:</strong> Make sure the site’s <a href="explain-robots-txt">robots.txt</a> file doesn’t prevent crawling of or beyond your seed URLs. The URL Report will indicate if a given URL is not able to be crawled thanks to robots.txt instruction, or you can check the site’s robots.txt directly at subdomain.domain.com/robots.txt. (Here’s the one for <a href="https://support.diffbot.com/robots.txt">support.diffbot.com</a>.) If this is the case, you can opt to “ignore robots.txt” within your crawl settings or via the Crawlbot API.</li>
<li>
<strong>Does the site require Javascript?</strong> See if the site’s links are only available when Javascript is executed. (This may necessitate viewing the site’s HTML source in your browser. If no or few links are available: Javascript is probably needed.) Because Crawlbot does not execute Javascript by default, you’ll need to use our <a href="guides-crawling-ajax-generated-links">Javascript execution instructions</a> to pursue these links.</li>
<li>
<strong>Connection or other errors may require proxy IPs: </strong>If Crawlbot is unable to connect to the seed URL (“TCP error” or other failures in contacting the seed), the site may be blocking certain IP address ranges. In this case, try <a href="explain-using-different-proxies">turning on proxies</a> within your crawl dashboard or the Crawlbot API.</li>
<li> <strong>Make sure your crawling patterns aren’t too restrictive: </strong>Crawlbot will only crawl pages that match specified crawling patterns. If your patterns don’t match any of the links from your seed URLs, Crawlbot won’t be able to follow links into the site. <a href="explain-crawling-versus-processing">Read more on crawling and processing</a>.</li>
</ul>
<p>If you’ve determined any of these issues is the culprit, a restart of your crawl after making the appropriate change should do the trick.</p>
<p><strong>If your crawl is crawling, but isn’t processing pages correctly:</strong></p>
<p>Sometimes the crawl is proceeding, but pages aren’t being processed, or data isn’t appearing in your downloaded JSON/CSV (or via the Search API). Some potential reasons:</p>
<ul>
<li>
<strong>Make sure your processing (or crawling) patterns aren’t too restrictive: </strong>If you’ve entered any processing patterns or processing regular expressions, only matching pages will be sent to the specified Diffbot API. Make sure that these patterns aren’t too restrictive. If you’ve entered crawling patterns only (no processing patterns), your crawling patterns will equally apply to processing–so be sure that your crawling patterns apply to the pages you want processed.</li>
<li>
<strong>If you’re using the Analyze API, make sure pages are being correctly identified: </strong>The <a href="http://www.diffbot.com/dev/docs/analyze">Analyze API</a> automatically identifies articles, products, images, discussions and other pages. It’s very good, but occasionally it may mistakenly classify a page. If pages are being correctly processed (according to the URL Report) but data is not available, it may be an Analyze mis-classification. In this case you can use the <a href="https://www.diffbot.com/dev/customize">API Toolkit</a> to make a manual override, or contact <a href="mailto:support@diffbot.com">support@diffbot.com</a> for assistance in improving Analyze API page identification.</li>
</ul>
<p>Again, restarting your crawl after making the appropriate change should do the trick.</p>
<p><strong>If your crawl data is incorrect</strong></p>
<ul>
<li>If pages are being correctly processed but some of the fields are incorrect — for example, the <strong>offerPrice</strong> is off, or your extracted article is missing the introductory text — you can fix this using our <a href="http://www.diffbot.com/dev/customize">API Toolkit</a>. The Toolkit allows you to make site-specific, individual field overrides (or add any field you like to our existing APIs).</li>
</ul>
<p>Changes made via the Toolkit will not apply to already-extracted pages. But a crawl restart will accommodate any changes you have made.</p>
<p><strong>If your crawl won’t stop</strong></p>
<p>Sometimes, due to site (mis-)configuration, a site will dynamically generate pages ad infinitum. In these cases Crawlbot may crawl these dynamically generated pages until it hits a crawling limit (maxToCrawl). <a href="guides-neverending-crawl-dynamic-urls">Read about controlling a “neverending” crawl</a>.</p>
<p>If you have other crawling problems or questions, contact us at <a href="mailto:support@diffbot.com">support@diffbot.com</a>.</p>
<p><em>Thanks to Rick L. for the topic suggestion.</em></p>
			</div>
