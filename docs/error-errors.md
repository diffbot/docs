---
id: error-errors
title: Error Codes
sidebar_label: Error Codes
---

<div id="docBody">
<p>When issues arise, Diffbot APIs return the following fields in a JSON response:</p>


<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Field</th>
<th>Response</th>
</tr></thead>
<tbody>
<tr>
<td><code>error</code></td>
<td>Description of the error</td>
</tr>
<tr>
<td><code>errorCode</code></td>
<td>Error code per the chart below</td>
</tr>
</tbody>
</table>
    

```text
{
     "error": "Could not download page (404)",
     "errorCode": 404
}
```




<h3>Possible errors returned:</h3>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Code</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>401</code></td>
<td>Unauthorized token</td>
</tr>
<tr>
<td><code>404</code></td>
<td>Requested page not found</td>
</tr>
<tr>
<td><code>429</code></td>
<td>Your token has exceeded the allowed number of calls, or has otherwise been throttled for API abuse.</td>
</tr>
<tr>
<td><code>500</code></td>
<td>Error processing the page. Specific information will be returned in the JSON response.</td>
</tr>
</tbody>
</table>

</div>