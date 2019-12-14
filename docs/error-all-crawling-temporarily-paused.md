---
id: error-all-crawling-temporarily-paused
title: What does “all crawling temporarily paused by root administrator…” mean?
sidebar_label: What does “all crawling temporarily paused by root administrator…” mean?
---

<div class="entry-content">
		<p>On occasion, during both regular (and irregular) maintenance phases, Crawlbot and Bulk Processing operations will be temporarily paused by Diffbot administrators.</p>
<p>If this occurs, your jobs’ status will display the following message:</p>
<pre>"jobStatus": {
    "status": 8,
    "message": "All crawling temporarily paused by root administrator for maintenance."
}</pre>
<p>This is a proactive measure to ensure data is not compromised or corrupted during the maintenance phase. Once the maintenance is complete (typically a few moments to a few minutes), crawling operations will resume automatically. This means:</p>
<ul>
<li>Crawls or bulk jobs that were in progress will resume immediately.</li>
<li>Scheduled recurring crawls will continue on their same schedule.</li>
<li>Recurring crawls scheduled to resume during a maintenance phase will start a new round immediately.</li>
<li>Jobs created during the maintenance phase will begin.</li>
</ul>
			</div>
