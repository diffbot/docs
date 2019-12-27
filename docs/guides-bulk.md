---
id: guides-bulk
title: Bulk Processing
sidebar_label: Bulk Processing
todo: Modify link beginning with "support.diffbot.com/topics"
todo: Modify links to old API docs
---

<div id="docBody">
            <p>Diffbot's Bulk Processor lets you send a large quantity of URLs through a Diffbot extraction API for fast, asynchronous processing.</p>
<div class="alert alert-info">
<strong>Related:</strong> <a href="http://support.diffbot.com/topics/bulk-api-service/" target="_blank">Bulk Processing Support</a> | <a href="api-bulk">Bulk API Documentation</a>
</div>

<h3>Overview</h3>
<p>The Bulk Processor sends all submitted page URLs to a Diffbot API (either automatic or custom). All structured page results are then compiled into a single "collection," which can be downloaded in full or searched using the <a href="api-search">Search API</a>.</p>
<div class="alert">
<strong>Note:</strong> The Bulk Processor is not a crawler: it does not spider a site for additional links. You must supply each URL you wish to process. For crawling/spidering, see <a href="guides-crawl">Crawlbot</a>.</div>


<h3>Creating a Bulk Job</h3>
<p>Each bulk job requires the following:
</p>
<ol>
  <li>A name (e.g., "NewProducts").</li>
  <li>Multiple URLs to process, one per line. If you are on the Startup plan, jobs require at least 50 URLs.</li>
  <li>A Diffbot API to be used for processing pages.</li>
</ol>

  <figure>
    <div>
      <img src="/docs/img/bulk.png">
    </div>
    <figcaption>Extracting all of the articles from <a href="http://support.diffbot.com">support.diffbot.com</a>.</figcaption>
  </figure>


<h3>Passing Diffbot API Querystring Arguments</h3>
<p>The Bulk Processor hands off URLs to <a href="https://diffbot.com/products/automatic">specific Diffbot APIs</a> for processing. Each of these APIs has optional querystring arguments that can be used to modify the information returned -- most commonly the <code>fields</code> argument, for adding optional fields to the Diffbot response.</p>
<p></p>
<div class="alert">
<strong>Note:</strong> Top-level fields in our V3 APIs (e.g., "links" or "meta") will not be indexed or captured in bulk jobs. If you need these fields indexed, please use our V2 APIs (available via the API dropdown menu).</div>
<h3>Notifications</h3>
<p>You can choose to be notified at the conclusion of each bulk job, either by <a href="http://en.wikipedia.org/wiki/Webhook" target="_blank">webhook</a> or email.</p>
<p>If "webhook" is chosen, you will need to supply a URL that is capable of receiving a POST request. One alternative to building your own: use the Diffbot app on <a href="https://zapier.com/zapbook/diffbot/" target="_blank">Zapier</a> to receive webhook notifications.</p>
<h3>Accessing Bulk Job Data</h3>
<div class="alert">Completed or paused bulk jobs will be automatically deleted after thirty days. Unlimited storage and searching is available with the <a href="http://www.diffbot.com/pricing">Pro plan.</a>
</div>

<p>You can access processed data anytime during your bulk job, or after it completes. There are two download options within the interface:</p>
<ol>
  <li>Full JSON Output: A single file, in valid <a href="http://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a>, containing all of the processed objects from your job.</li>
  <li>CSV Output: A single comma-separated-values file of the <strong>top-level</strong> objects. Nested elements (article images, tags, etc.) will not be returned in the CSV.</li>
</ol>
<p>If you only want to access a subset of your data, the <a href="api-search">Search API</a> allows much more flexibility in searching and retrieving only the matching items from queries.</p>

            </div>