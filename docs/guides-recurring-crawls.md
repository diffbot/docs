---
id: guides-recurring-crawls
title: How are repeating/recurring crawls scheduled?
sidebar_label: How are repeating/recurring crawls scheduled?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>Crawlbot allows for the creation of repeating or recurring crawls, which can be used to regularly monitor sites for content updates or to regularly find new content.</p>
<p>Repeats can be scheduled at the frequency you choose, with 1.0 equaling daily / “every 24 hours.” To re-crawl a site weekly, you would specify 7.0. To crawl ten times per day: 0.1.</p>
<p>Each time a crawl repeats is a crawl “round.” A new round will start based on the time frequency specified <strong>after the conclusion of the prior round</strong>. To illustrate this, assume the following crawl settings:</p>
<ul>
<li>We schedule a crawl to repeat daily (1.0).</li>
<li>We start the crawl at 12:00pm on January 1.</li>
<li>The initial round takes four hours.</li>
</ul>
<p>Based on the above, the second crawl round will start at 4:00pm on January 2: 24 hours after the conclusion of the first round.</p>
<p>If you wish to have more specific control over your crawl round start times, you can use the <code>roundStart</code> argument in the <a href="https://www.diffbot.com/dev/docs/crawl/api.jsp">Crawlbot API</a> to manually start a new crawl round; or you can click “Start a new round” within the Crawlbot interface:</p>
<div id="attachment_347" style="width: 706px" class="wp-caption aligncenter">
<a href="https://support.diffbot.com/wp-content/uploads/2016/02/ss_2016-0216_945.png"><img aria-describedby="caption-attachment-347" class="size-full wp-image-347" alt="Start a new round manually" src="/docs/img/ss_2016-0216_945.png" width="696" height="179" srcset="https://support.diffbot.com/wp-content/uploads/2016/02/ss_2016-0216_945.png 696w, https://support.diffbot.com/wp-content/uploads/2016/02/ss_2016-0216_945-300x77.png 300w" sizes="(max-width: 696px) 100vw, 696px"></a><p id="caption-attachment-347" class="wp-caption-text">Start a new round manually.</p>
</div>
			</div>
