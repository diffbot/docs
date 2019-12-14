---
id: error-too-many-collections
title: Too Many Collections Error
sidebar_label: Too Many Collections Error
todo: Modify links to old API docs
---

<div class="entry-content">
		<p><strong>Error message: Too Many Collections</strong></p>
<hr>
<p>If you ever get the “Too Many Collections” error trying to create a new bulk job or crawl job, either via the API or the UI in your account’s dashboard, you’ve reached the limit our system supports: 1000 jobs.</p>
<p>This is why there is a timeout period after which inactive crawls will be removed – to make room for newer crawls.</p>
<p>If you have the need for more than 1000 active crawljobs, you have two options:</p>
<ol>
<li>Upgrade to a Plus or higher plan and we’ll introduce a method to your account which circumvents this limit, as needed.</li>
<li>Delete some of your crawljobs and try again – you will find that you’ll immediately be able to create new crawljobs again.</li>
</ol>
<p>We advise you to keep an eye on your active crawls and delete them as they are no longer needed. If the data has become stale or you have downloaded, you are encourage to remove the crawl. Likewise, if you have already downloaded the data but would like to keep the metadata (crawl settings) around, you can download these settings by using the <a href="https://www.diffbot.com/dev/docs/crawl/api.jsp">Crawljob API</a>. Such a backed up JSON file is enough to restore your crawljob’s settings even after years of inactivity on your accounts.</p>
<p>Happy crawling!</p>
			</div>
