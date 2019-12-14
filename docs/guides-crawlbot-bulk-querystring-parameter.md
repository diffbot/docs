---
id: guides-crawlbot-bulk-querystring-parameter
title: Using the Crawlbot or Bulk API querystring parameter
sidebar_label: Using the Crawlbot or Bulk API querystring parameter
---

<div class="entry-content">
		<p>Crawlbot and the Bulk API serve as controllers for sending pages to the appropriate Diffbot API for processing/extraction. By default, these will be generic requests to the appropriate API and will return the default fields from that API.</p>
<p>For example, Bulk or Crawlbot URLs handed to the Article API will be equivalent to calling <code>http://api.diffbot.com/v3/article?url=[url]</code></p>
<p>You can adjust individual API fields returned or the parameters of extraction API requests via the Crawlbot or Bulk API <strong>querystring</strong> field.</p>
<p>For example, to specify certain fields and adjust the <code>timeout</code> value in your Article API requests, enter the following in the querystring field:<br>
<a href="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0205_52.png"><img class="aligncenter size-full wp-image-31" alt="Querystring field" src="/docs/img/ss_2014-0205_52.png" width="683" height="122" srcset="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0205_52.png 683w, https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0205_52-300x53.png 300w" sizes="(max-width: 683px) 100vw, 683px"></a><br>
This will pass <code>&amp;timeout=10000&amp;fields=title,text,meta</code> in each Article API request.</p>
			</div>
