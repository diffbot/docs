---
id: explain-bulk-processing-speed
title: How quickly does the Bulk Service process web pages?
sidebar_label: How quickly does the Bulk Service process web pages?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>The performance of Diffbot’s Bulk processing <a href="http://www.diffbot.com/dev/docs/bulk">web extraction service</a> depends on various factors. The most common reason for a bulk job returning data more slowly than expected, however, is if a job’s URLs are from a limited number of sources and/or if a job’s URLs are from very popular sources.</p>
<p>Diffbot has a global queue in order to maintain a level of politeness toward individual domains and IP addresses (and prevent overloading individual servers and sites). A bulk job with URLs from a single domain will finish much more slowly than one with URLs from many different locations. Note that spreading out URLs across many different jobs will have no performance effect, as our global queue prevents visiting a single site too often from any part of Diffbot’s infrastructure.</p>
			</div>
