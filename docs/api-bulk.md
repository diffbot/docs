---
id: api-bulk
title: Bulk API
sidebar_label: Bulk API
todo: Modify links to old API docs
---

<div id="docBody">
            <p>The Bulk API allows you to submit large numbers of URLs for Diffbot API processing. It is built atop the <a href="guides-crawl">Crawlbot</a> API and shares much of the same underlying model. Both APIs return data in JSON format.</p>
<h3 id="creating">Creating a Bulk Job</h3>
<div class="indent">
  <p>To create a bulk job, make a POST request to <code>https://api.diffbot.com/v3/bulk</code>.</p>
  <p>Set your <code>Content-Type</code> header to <code>application/x-www-form-urlencoded</code> (not <code>multipart/form-data</code>). POST body content should be in querystring format (key/value pairs), e.g.:</p>
  <pre class="nowrap"><code>name=bulkTest&amp;token=sampletoken&amp;urls=http://www.diffbot.com http://blog.diffbot.com&amp;apiUrl=https://api.diffbot.com/v3/analyze</code></pre>

  <p>Your POST body should contain the following fields:</p>

  <table class="controls table table-bordered" border="0" cellpadding="5">
  <thead><tr>
<th>Argument</th>
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
<td>Job name. This should be a unique identifier and will be used to modify your bulk job and retrieve its output.</td>
</tr>
  <tr>
<td><code>urls</code></td>
<td>Space-delimited list of URLs to process. If you are on the Startup plan, jobs must contain at least 50 URLs.</td>
</tr>
  <tr>
<td><code>apiUrl</code></td>
<td>The full Diffbot API to be used for each URL. For instance, to process each URL via the article API, supply <code>https://api.diffbot.com/v3/article</code>. You may also include API parameters, e.g. <code>https://api.diffbot.com/v3/article?fields=meta,tags</code>.</td>
</tr>

  <tr><td colspan="2"><strong>Optional Arguments</strong></td></tr>
  <tr>
<td><code>customHeaders</code></td>
<td>Set custom headers to be used for processing each URL. Send multiple <code>customHeaders</code> values in your POST body, with header keys/values delimited by a colon (and URL-encoded). <a href="guides-custom-headers">See more information on using this functionality</a>.</td>
</tr>
  <tr>
<td><code>notifyEmail</code></td>
<td>Send a message to this email address when the bulk job completes.</td>
</tr>
  <tr>
<td><code>notifyWebhook</code></td>
<td>Pass a URL to be notified when the bulk job completes. You will receive a POST with the full <a href="#response">JSON response</a> in the POST body.</td>
</tr>
<!--  <tr><td><code>obeyRobots</code></td><td>Pass <code>obeyRobots=0</code> to ignore a site's robots.txt instructions.</td></tr> -->
  <tr>
<td><code>repeat</code></td>
<td>Specify the number of days as a floating-point (e.g. <code>repeat=7.0</code>) to repeat this job. By default bulk jobs will not be repeated.</td>
</tr>
  <tr>
<td><code>maxRounds</code></td>
<td>Specify the maximum number of repeats. Use <code>maxRounds=-1</code> to continually repeat.</td>
</tr>
  <tr>
<td><code>pageProcessPattern</code></td>
<td>Enter ||-separated strings to limit pages processed to those whose HTML contains <em>any</em> of the content strings. If a page does not contain at least one of the strings, it will be ignored.</td>
</tr>
  </tbody>
  </table>

<h4 id="response">Response</h4>
<p>Upon adding a new bulk job, you will receive a success message in the JSON response, in addition to full job details:</p>
<pre>
  "response": "Successfully added urls for spidering."
</pre>

<hr>

<h3 id="pausedelete">Pausing, Deleting or Restarting Bulk Jobs</h3>
<p>You can manage your bulk jobs by making GET requests to the same endpoint, <code>https://api.diffbot.com/v3/bulk</code>.</p>
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
  <td>Job name as defined when the bulk was created.</td>
  </tr>
  <tr>
  <td><code>pause</code></td>
  <td>Pass <code>pause=1</code> to pause a bulk job. Pass <code>pause=0</code> to resume a paused job.</td>
  </tr>
  <tr>
  <td><code>restart</code></td>
  <td>Pass <code>restart=1</code> to restart a bulk job. This will erase all processed data and re-process all of the submitted URLs.</td>
  </tr>
  <tr>
  <td><code>delete</code></td>
  <td>Pass <code>delete=1</code> to delete a job, and all associated data, completely.</td>
  </tr>
</tbody>
</table>

<hr>

<h3 id="retrieving">Retrieving Bulk Job Data</h3>
    <p>To download results please make a GET request to <code>https://api.diffbot.com/v3/bulk/data</code>. Provide the following arguments based on the data you need. By default the complete extracted JSON data will be downloaded.</p>
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
<td>Name of the bulk job whose data you wish to download.</td>
</tr>
  <tr>
<td><code>format</code></td>
<td>Request <code>format=csv</code> to download the extracted data in CSV format (default: <code>json</code>). Note that CSV files will only contain top-level fields.</td>
</tr>
  <tr><td colspan="2"><strong>For diagnostic data:</strong></td></tr>
  <tr>
<td><code>type</code></td>
<td>Request <code>type=urls</code> to retrieve the bulk <a href="explain-bulk-url-report">URL Report</a> (CSV).</td>
  </tr>
<tr>
<td><code>num</code></td>
<td>Pass an integer value (e.g. <code>num=100</code>) to request a subset of URLs, most recently processed first.</td>
</tr>
   </tbody>
  </table>
<h3>Using the Search API to Retrieve Bulk Job Data</h3>
<p>You can also use Diffbot's <a href="api-search">Search API</a> to fine-tune the data retrieved from your Crawlbot or Bulk API jobs.</p>
<p><a href="api-search">Search API documentation</a></p>
  <hr>


<h3 id="details">Viewing Bulk Job Details</h3>
  <p>Your active bulk jobs (along with any Crawlbot crawls) will be returned in the <code>jobs</code> object in a request made to <code>https://api.diffbot.com/v3/bulk</code>.</p>
  <p>To retrieve a single job's details, provide the job's <code>name</code> in your request:</p>
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
<td>Name of bulk job (or crawl) to retrieve.</td>
</tr>
   </tbody>
  </table>

  <p>To view all bulk jobs (and crawls), simply omit the <code>name</code> parameter: <code>https://api.diffbot.com/v3/bulk?token={{token}}</code></p>

  <h4>
<a name="response"></a>Response</h4>
  <p>This will return a JSON response of your token's Bulk API jobs (and crawls). Sample response from a single job:</p>

 <!--{codesample1}--><pre>{
  "jobs": [
    {
      "name": "bulkJob",
      "type": "bulk",
      "jobCreationTimeUTC": 1426872272,
      "jobCompletionTimeUTC": 1426872504,
      "jobStatus": {
        "status": 9,
        "message": "Job has completed and no repeat is scheduled."
      },
      "sentJobDoneNotification": 1,
      "objectsFound": 100,
      "urlsHarvested": 200,
      "pageCrawlAttempts": 100,
      "pageCrawlSuccesses": 100,
      "pageCrawlSuccessesThisRound": 100,
      "pageProcessAttempts": 100,
      "pageProcessSuccesses": 100,
      "pageProcessSuccessesThisRound": 100,
      "maxRounds": 0,
      "repeat": 0.0,
      "crawlDelay": 0.25,
      "obeyRobots": 0,
      "roundsCompleted": 0,
      "roundStartTime": 0,
      "currentTime": 1443822680,
      "currentTimeUTC": 1443822680,
      "apiUrl": "https://api.diffbot.com/v3/analyze",
      "urlCrawlPattern": "",
      "urlProcessPattern": "",
      "pageProcessPattern": "",
      "urlCrawlRegEx": "",
      "urlProcessRegEx": "",
      "maxHops": -1,
      "downloadJson": "https://api.diffbot.com/v3/bulk/download/sampletoken-bulkJob_data.json",
      "downloadUrls": "https://api.diffbot.com/v3/bulk/download/sampletoken-bulkJob_urls.csv",
      "notifyEmail": "support@diffbot.com",
      "notifyWebhook": "http://www.diffbot.com"
    }
  ]
}</pre>
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
<!--<tr><td>1</td><td>Job has reached maxRounds limit</td></tr>
<tr><td>2</td><td>Job has reached maxToCrawl limit</td></tr>
<tr><td>3</td><td>Job has reached maxToProcess limit</td></tr>
<tr><td>4</td><td>Next round to start in _____ seconds</td></tr>
<tr><td>5</td><td>No URLs were added to the crawl</td></tr>-->
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
<td>All crawling temporarily paused by root administrator for maintenance.</td>
</tr>
<tr>
<td>9</td>
<td>Job has completed and no repeat is scheduled</td>
</tr>
   </tbody>
  </table>



</div>



</div>