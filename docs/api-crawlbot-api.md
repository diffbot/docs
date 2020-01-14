---
id: api-crawlbot-api
title: Crawlbot API
sidebar_label: Crawlbot API
todo: Modify links to old Dashboard
todo: Modify links to old API docs
---

<div id="docBody">
<p>The Crawlbot API allows you to programmatically manage <a href="/dev/crawl">Crawlbot</a> crawls and retrieve output. Crawlbot API responses are in JSON format.</p>

<h3 id="creating">Creating or Updating a Crawl</h3>
<p><b>Note that the limit of active crawls on a single token is 1000. More information <a href="error-too-many-collections">here</a>.</b></p>
<div class="indent">
<p>To create a crawl, make a POST request to <code>https://api.diffbot.com/v3/crawl</code>.</p>
<p>Provide the following data:</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Parameter</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>token</code></td>
<td>Developer <a href="https://diffbot.com/pricing">token</a>
</td>
</tr>
<tr>
<td><code>name</code></td>
<td>Job name. This should be a unique identifier and can be used to modify your crawl or retrieve its output.</td>
</tr>
<tr>
<td><code>seeds</code></td>
<td>Seed URL(s). Must be <a href="http://en.wikipedia.org/wiki/Percent-encoding" target="_blank">URL encoded</a>. Separate multiple URLs with whitespace to spider multiple sites within the same crawl. If the seed contains a non-www subdomain ("http://blog.diffbot.com" or "http://support.diffbot.com") Crawlbot will restrict spidering to the specified <strong>subdomain</strong>.</td>
</tr>
<tr>
<td><code>apiUrl</code></td>
<td>Full Diffbot API URL through which to process pages. E.g., <code>&amp;apiUrl=https://api.diffbot.com/v3/article</code> to process matching links via the <a href="https://diffbot.comhttp://www.diffbot.com/products/automatic/article">Article API</a>. The Diffbot API URL can include querystring parameters to tailor the output. For example, <code>&amp;apiUrl=https://api.diffbot.com/v3/product?fields=querystring,meta</code> will process matching links using the <a href="https://diffbot.comhttp://www.diffbot.com/products/automatic/product">Product API</a>, and also return the <code>querystring</code> and <code>meta</code> fields.
<br><br>
  To automatically identify and process content using our <a href="https://diffbot.com/products/automatic/analyze">Analyze API</a> (Smart Processing), pass <code>apiUrl=https://api.diffbot.com/v3/analyze?mode=auto</code> to return all page-types. See full Analyze API documentation under the <a href="/dev/docs">Automatic APIs documentation</a>.
<br><br>
  Be sure to <a href="http://en.wikipedia.org/wiki/Percent-encoding" target="_blank">URL encode</a> your Diffbot API actions.</td>
</tr>
</tbody>
</table>
<p>You can refine your crawl using the following optional controls. <a href="explain-crawling-versus-processing">Read more on crawling versus processing</a>.</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Parameter</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>urlCrawlPattern</code></td>
<td>Specify ||-separated <strong>strings</strong> to limit pages crawled to those whose URLs contain <em>any</em> of the content strings. You can use the exclamation point to specify a negative string, e.g. <code>!product</code> to exclude URLs containing the string "product," and the <code>^</code> and <code>$</code> characters to limit matches to the beginning or end of the URL.<br><br>The use of a <code>urlCrawlPattern</code> will allow Crawlbot to spider outside of the seed domain; it will follow all matching URLs regardless of domain.</td>
</tr>
<tr>
<td><code>urlCrawlRegEx</code></td>
<td>Specify a regular expression to limit pages <strong>crawled</strong> to those URLs that contain a match to your expression. This will override any <code>urlCrawlPattern</code> value.</td>
</tr>
<tr>
<td><code>urlProcessPattern</code></td>
<td>Specify ||-separated <strong>strings</strong> to limit pages processed to those whose URLs contain <em>any</em> of the content strings. You can use the exclamation point to specify a negative string, e.g. <code>!/category</code> to exclude URLs containing the string "/category," and the <code>^</code> and <code>$</code> characters to limit matches to the beginning or end of the URL.</td>
</tr>
<tr>
<td><code>urlProcessRegEx</code></td>
<td>Specify a regular expression to limit pages <strong>processed</strong> to those URLs that contain a match to your expression. This will override any <code>urlProcessPattern</code> value.</td>
</tr>
<tr>
<td><code>pageProcessPattern</code></td>
<td>Specify ||-separated strings to limit pages <strong>processed</strong> to those whose HTML contains <em>any</em> of the content strings.</td>
</tr>
</tbody>
</table>
<p>Additional (optional) Parameters:</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Parameter</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>customHeaders</code></td>
<td>Set multiple custom headers to be used while crawling and processing pages sent to Diffbot APIs. Each header should be sent in its own <code>customHeaders</code> argument, with a colon delimiting the header name and value, and should be URL-encoded. For example, <code>&amp;customHeaders=Accept-Language%3Aen-us</code>. <a href="guides-custom-headers">See more information on using this functionality</a>.</td>
</tr>
<tr>
<td><code>useCanonical</code></td>
<td>Pass <code>useCanonical=0</code> to disable deduplication of pages based on a canonical link definition. <a href="explain-page-deduplication">See more</a>.</td>
</tr>
<tr>
<td><code>obeyRobots</code></td>
<td>Pass <code>obeyRobots=0</code> to ignore a site's robots.txt instructions. <a href="explain-robots-txt">See more</a>.</td>
</tr>
<tr>
<td><code>restrictDomain</code></td>
<td>Pass <code>restrictDomain=0</code> to allow limited crawling across subdomains/domains. <a href="guides-restrict-domain">See more</a>.</td>
</tr>
<tr>
<td><code>useProxies</code></td>
<td>Set value to <code>1</code> to force the use of proxy IPs for the crawl. This will utilize proxy servers for both crawling and processing of pages.</td>
</tr>
<tr>
<td><code>maxHops</code></td>
<td>Specify the depth of your crawl. A <code>maxHops=0</code> will limit <strong>processing</strong> to the seed URL(s) only -- no other links will be processed; <code>maxHops=1</code> will process all (otherwise matching) pages whose links appear on seed URL(s); <code>maxHops=2</code> will process pages whose links appear on those pages; and so on.<br><br>By default (<code>maxHops=-1</code>) Crawlbot will crawl and process links at any depth.</td>
</tr>
<tr>
<td><code>maxToCrawl</code></td>
<td>Specify max pages to spider. Default: 100,000.</td>
</tr>
<tr>
<td><code>maxToProcess</code></td>
<td>Specify max pages to process through Diffbot APIs. Default: 100,000.</td>
</tr>
<tr>
<td><code>maxToCrawlPerSubdomain</code></td>
<td>Specify max pages to spider per subdomain. Default: no limit (-1)</td>
</tr>
<tr>
<td><code>maxToProcessPerSubdomain</code></td>
<td>Specify max pages to process per subdomain. Default: no limit (-1)</td>
</tr>
<tr>
<td><code>notifyEmail</code></td>
<td>Send a message to this email address when the crawl hits the <code>maxToCrawl</code> or <code>maxToProcess</code> limit, or when the crawl completes.</td>
</tr>
<tr>
<td><code>notifyWebhook</code></td>
<td>Pass a URL to be notified when the crawl hits the <code>maxToCrawl</code> or <code>maxToProcess</code> limit, or when the crawl completes. You will receive a POST with <code>X-Crawl-Name</code> and <code>X-Crawl-Status</code> in the headers, and the job's <a href="#response">JSON metadata</a> in the POST body. Note that in webhook POSTs the parent <code>jobs</code> will not be sent—only the individual job object will be returned.<br><br>We've integrated with Zapier to make webhooks even more powerful; <a href="guides-zapier">read more</a> on what you can do with Zapier and Diffbot.</td>
</tr>
<tr>
<td><code>crawlDelay</code></td>
<td>Wait this many seconds between each URL crawled from a single IP address. Specify the number of seconds as an integer or floating-point number (e.g., <code>crawlDelay=0.25</code>).</td>
</tr>
<tr>
<td><code>repeat</code></td>
<td>Specify the number of days as a floating-point (e.g. <code>repeat=7.0</code>) to repeat this crawl. By default crawls will not be repeated.</td>
</tr>
<tr>
<td><code>seedRecrawlFrequency</code></td>
<td>Useful for specifying a frequency, in number of days, to recrawl seed urls, which is independent of the overall recrawl frequency given by <code>repeat</code>. Defaults to <code>seedRecrawlFrequency=-1</code> to use the default frequency.</td>
</tr>
<tr>
<td><code>onlyProcessIfNew</code></td>
<td>By default repeat crawls will only process new (previously unprocessed) pages. Set to 0 (<code>onlyProcessIfNew=0</code>) to process all content on repeat crawls.</td>
</tr>
<tr>
<td><code>maxRounds</code></td>
<td>Specify the maximum number of crawl repeats. By default (<code>maxRounds=0</code>) repeating crawls will continue indefinitely.</td>
</tr>
</tbody>
</table>
<!--
<h4><a name="filterExpressions"></a>URL Filter Expressions</h4>
<p>Crawlbot 2.0 features a powerful URL filtering engine allowing you to process URLs via myriad Diffbot APIs. You may pass multiple filters in each crawl. Each filter consists of an <code>expression</code> (the content to match) and an <code>action</code> (the processing or crawling action to take).</p>
<p>Filters are processed in the order in which they are sent in the querystring. URLs can only match a single filter.</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<tbody>
<tr><td colspan="2"><strong>Expression options</strong></td></tr>
<tr><td><code>expression=*</code></td><td>Matches all (remaining) pages. If this is the first filter expression it will match all pages.</td></tr>
<tr><td><code>expression=<em>string</em></code></td><td>Matches all (remaining) URLs containing the text string.</td></tr>
<tr><td><code>expression=^<em>string</em></code></td><td>Matches all (remaining) URLs starting with the text string.</td></tr>
<tr><td><code>expression=$<em>string</em></code></td><td>Matches all (remaining) URLs ending with the text string.</td></tr>
<tr><td>
<div><code>expression=!<em>string</em></code>,<br />
<code>expression=!^<em>string</em></code>,<br />
<code>expression=!$<em>string</em></code></td><td>Matches all (remaining) URLs <em>not</em> containing, starting with, or ending with the text string.</td></tr>
<tr><td colspan="2">Multiple expressions can be combined in the same filter using <code>&amp;&amp;</code>. This will require all expressions to match. Ampersands should be url-encoded, e.g. <code>&expression=products%26%26^https%26%26!$.html</code>.</td></tr>

<tr><td colspan="2"><strong>Filter actions</strong></td></tr>
<tr><td><code>action=doNotCrawl</code></td><td>Do not crawl/visit the matching pages.</td></tr>
<tr><td><code>action=doNotProcess</code></td><td>Do not process the matching pages. Will still crawl the matching pages for links.</td></tr>
<tr><td><code>action=<em>Diffbot API</em></code></td><td>Process the matching pages via the specified Diffbot API.
</td></tr>
</tbody>
</table>
-->
<h4>Response</h4>
<p>Upon adding a new crawl, you will receive a success message in the JSON response, in addition to full crawl details:</p>


```text
  "response": "Successfully added urls for spidering."
```



<p>Please note that if you get the "Too Many Collections" error, you hit our 1000-active-crawls limit. More information <a href="error-too-many-collections">here</a>.</p>

<hr>

<h3 id="pausedelete">Pausing, Restarting or Deleting Crawls</h3>
<p>You can manage your crawls by making POST requests to the same endpoint, <code>https://api.diffbot.com/v3/crawl</code>.</p>
<p>Provide the following data:</p>

<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Parameter</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>token</code></td>
<td>Developer <a href="https://diffbot.com/pricing">token</a>
</td>
</tr>
<tr>
<td><code>name</code></td>
<td>Job name as defined when the crawl was created.</td>
</tr>
<tr>
<td colspan="2"><strong>Job-control arguments</strong></td>
</tr>
<tr>
<td><code>roundStart</code></td>
<td>Pass <code>roundStart=1</code> to force the start of a new crawl "round" (manually repeat the crawl). If <code>onlyProcessIfNew</code> is set to 1 (default), only newly-created pages will be processed.</td>
</tr>
<tr>
<td><code>pause</code></td>
<td>Pass <code>pause=1</code> to pause a crawl. Pass <code>pause=0</code> to resume a paused crawl.</td>
</tr>
<tr>
<td><code>restart</code></td>
<td>Restart removes all crawled data while maintaining crawl settings. Pass <code>restart=1</code> to restart a crawl.</td>
</tr>
<tr>
<td><code>delete</code></td>
<td>Pass <code>delete=1</code> to delete a crawl, and all associated data, completely.</td>
</tr>
</tbody>
</table>

<hr>

<h3 id="retrieving">Retrieving Crawlbot API Data</h3>
<p>To download results please make a GET request to <code>https://api.diffbot.com/v3/crawl/data</code>. Provide the following arguments based on the data you need. By default the complete extracted JSON data will be downloaded.</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Parameter</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>token</code></td>
<td>Diffbot token.</td>
</tr>
<tr>
<td><code>name</code></td>
<td>Name of the crawl whose data you wish to download.</td>
</tr>
<tr>
<td><code>format</code></td>
<td>Request <code>format=csv</code> to download the extracted data in CSV format (default: <code>json</code>). Note that CSV files will only contain top-level fields.</td>
</tr>
<tr><td colspan="2"><strong>For diagnostic data:</strong></td></tr>
<tr>
<td><code>type</code></td>
<td>Request <code>type=urls</code> to retrieve the crawl <a href="explain-crawl-url-report">URL Report</a> (CSV).</td>
</tr>
<tr>
<td><code>num</code></td>
<td>Pass an integer value (e.g. <code>num=100</code>) to request a subset of URLs, most recently crawled first.</td>
</tr>
</tbody>
</table>

<h3>Using the Search API to Retrieve Crawl Data</h3>
<p>You can also use Diffbot's <a href="api-search">Search API</a> to fine-tune the data retrieved from your Crawlbot or Bulk API jobs.</p>
<p><a href="api-search">Search API documentation</a></p>

<hr>


<h3 id="details">Viewing Crawl Details</h3>
<p>Your crawls (along with any Bulk API jobs) will be returned in the <code>jobs</code> object in a request made to <code>https://api.diffbot.com/v3/crawl</code>.</p>
<p>To retrieve a single crawl's details, provide the crawl's <code>name</code> in your request:</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Parameter</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>token</code></td>
<td>Developer <a href="https://diffbot.com/pricing">token</a>
</td>
</tr>
<tr>
<td><code>name</code></td>
<td>Name of crawl to retrieve.</td>
</tr>
</tbody>
</table>

<p>To view all crawls (and bulk jobs), simply omit the <code>name</code> parameter: <code>https://api.diffbot.com/v3/crawl?token={{token}}</code></p>

<h4>
<a name="response"></a>Response</h4>
<p>This will return a JSON response of your token's crawls (and Bulk API) jobs in the <code>jobs</code> object. If you have specified a single job name, only one job's details will be returned.</p>
<p>Sample response from a single crawl:</p>

<!--{codesample1}-->

```text
{
  "jobs": [
    {
      "name": "crawlJob",
      "type": "crawl",
      "jobCreationTimeUTC": 1427410692,
      "jobCompletionTimeUTC": 1427410798,
      "jobStatus": {
        "status": 9,
        "message": "Job has completed and no repeat is scheduled."
      },
      "sentJobDoneNotification": 1,
      "objectsFound": 177,
      "urlsHarvested": 2152,
      "pageCrawlAttempts": 367,
      "pageCrawlSuccesses": 365,
      "pageCrawlSuccessesThisRound": 365,
      "pageProcessAttempts": 210,
      "pageProcessSuccesses": 210,
      "pageProcessSuccessesThisRound": 210,
      "maxRounds": 0,
      "repeat": 0.0,
      "crawlDelay": 0.25,
      "obeyRobots": 1,
      "maxToCrawl": 100000,
      "maxToProcess": 100000,
      "onlyProcessIfNew": 1,
      "seeds": "http://support.diffbot.com",
      "roundsCompleted": 0,
      "roundStartTime": 0,
      "currentTime": 1443822683,
      "currentTimeUTC": 1443822683,
      "apiUrl": "https://api.diffbot.com/v3/analyze",
      "urlCrawlPattern": "",
      "urlProcessPattern": "",
      "pageProcessPattern": "",
      "urlCrawlRegEx": "",
      "urlProcessRegEx": "",
      "maxHops": -1,
      "downloadJson": "http://api.diffbot.com/v3/crawl/download/sampletoken-crawlJob_data.json",
      "downloadUrls": "http://api.diffbot.com/v3/crawl/download/sampletoken-crawlJob_urls.csv",
      "notifyEmail": "support@diffbot.com",
      "notifyWebhook": "http://www.diffbot.com"
    }
  ]
}
```


<!--{endcodesample1}-->


<h3 id="status">Status Codes</h3>
<p>The <code>jobStatus</code> object will return the following status codes and associated messages:</p>

<table class="controls table table-bordered table-condensed" border="0" cellpadding="5">
<thead><tr>
<th>Status</th>
<th>Message</th>
</tr></thead>
<tbody>
<tr>
<td>0</td>
<td>Job is initializing</td>
</tr>
<tr>
<td>1</td>
<td>Job has reached maxRounds limit</td>
</tr>
<tr>
<td>2</td>
<td>Job has reached maxToCrawl limit</td>
</tr>
<tr>
<td>3</td>
<td>Job has reached maxToProcess limit</td>
</tr>
<tr>
<td>4</td>
<td>Next round to start in _____ seconds</td>
</tr>
<tr>
<td>5</td>
<td>No URLs were added to the crawl</td>
</tr>
<tr>
<td>6</td>
<td>Job paused</td>
</tr>
<tr>
<td>7</td>
<td>Job in progress</td>
</tr>
<tr>
<td>8</td>
<td>All crawling temporarily paused by root administrator for maintenance</td>
</tr>
<tr>
<td>9</td>
<td>Job has completed and no repeat is scheduled</td>
</tr>
<tr>
<td>10</td>
<td>Failed to crawl any seed<br><em>Indicates a problem retrieving links from the seed URL(s)</em>
</td>
</tr>
</tbody>
</table>



</div>



</div>