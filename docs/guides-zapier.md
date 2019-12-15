---
id: guides-zapier
title: Using Zapier with Crawlbot or Bulk API jobs
sidebar_label: Using Zapier with Crawlbot or Bulk API jobs
---

<div class="entry-content">
		<p>You can integrate your Crawlbot or Bulk API notifications with the fantastic <a title="Zapier" href="https://zapier.com/zapbook/diffbot/" target="_blank">Zapier</a> service, which allows you to take various actions in other applications when your crawl or bulk job completes.</p>
<p>To create a Diffbot ‘zap,’ choose Diffbot as your Trigger app and select “New Crawl Notification” or “New Bulk Job Notification.”</p>
<p style="text-align: center;"><a href="https://support.diffbot.com/wp-content/uploads/2014/03/ss_2014-0310_73.png"><img class="size-full wp-image-117 aligncenter" alt="ss_2014-0310_73" src="/docs/img/ss_2014-0310_73.png" width="688" height="92" srcset="https://support.diffbot.com/wp-content/uploads/2014/03/ss_2014-0310_73.png 688w, https://support.diffbot.com/wp-content/uploads/2014/03/ss_2014-0310_73-300x40.png 300w" sizes="(max-width: 688px) 100vw, 688px"></a></p>
<p>After you select an action app, Zapier will provide you a unique webhook URL. Paste this URL into the Webhook field of the Crawlbot/Bulk API interface, or via API using the <code>notifyWebhook</code> parameter, and Zapier will be notified whenever your job or crawl round completes. You can reuse your Zapier webhook URL for all of your crawl or bulk jobs.</p>
<p>Some things you can do with your webhook notification:</p>
<ul>
<li>Save your JSON output directly to a file (Dropbox, OneDrive, etc.)</li>
<li>Create a ticket in your favorite ticket-tracking tool with the crawl information</li>
<li>Receive notifications over IM, Hipchat, Twitter, etc.</li>
</ul>
<p>Let us know if you create a great zap!</p>
			</div>
