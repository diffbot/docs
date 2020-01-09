---
id: api-account
title: Account API
sidebar_label: Account API
todo: Modify links to old API docs
---

<div id="docBody">
<p>The Account API returns information on a token's call volume and billing history.</p>

<h3 id="request">Request</h3>
<div class="indent">
<p>To use the Account API, perform a HTTP GET request on the following endpoint:</p>
  

```text
https://api.diffbot.com/v3/account
```


<p>Provide the following arguments:</p>
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
<tr><td colspan="2"><strong>Optional parameters</strong></td></tr>
<tr class="opt">
<td><code>days</code></td>
<td>Pass the number of days (<code>&amp;days=365</code>) for which you would like to retrieve API call volumes (default = 31).</td>
</tr>
<tr class="opt">
<td><code>invoices</code></td>
<td>Pass <code>&amp;invoices=true</code> to return invoice and payment history.</td>
</tr>
</tbody>
</table>
<h3 id="response">Response</h3>
<p>The Account API returns account details in JSON format. Items returned will include the following:</p>

<table class="controls table table-bordered" id="fields" border="0" cellpadding="5">
<thead><tr>
<th>Field</th>
<th>Description</th>
</tr></thead>
<tr>
<td class=""><code>name</code></td>
<td class=" default"><div>Name associated with the token.</div></td>
</tr>
<tr>
<td class=""><code>email</code></td>
<td class=" default"><div>Email address associated with the token.</div></td>
</tr>
<tr>
<td class=""><code>plan</code></td>
<td class=" default"><div>Current plan for the token.</div></td>
</tr>
<tr>
<td class=""><code>planCalls</code></td>
<td class=" default"><div>Amount of monthly calls included.</div></td>
</tr>
<tr>
<td class=""><code>status</code></td>
<td class=" default"><div>Status of the token.</div></td>
</tr>
<tr>
<td><code>childTokens</code></td>
<td><div>List of child or sub-tokens, if there are any associated with your account.</div></td>
</tr>
<tr>
<td class="parent"><code>apiCalls</code></td>
<td class="parent default"><div>An array of days and call volume amounts for each day. By default this will return data from the most recent 31 days. Use the <code>days</code> argument to adjust the response window. Dates prior to token becoming active will not be returned.</div></td>
</tr>
<tr>
<td class="indent"><code>date</code></td>
<td class="indent"><div>Date, e.g. <code>2015-10-01</code>.</div></td>
</tr>
<tr>
<td class="indent"><code>calls</code></td>
<td class="indent"><div>Total number of API calls made.</div></td>
</tr>
<tr>
<td class="indent"><code>proxyCalls</code></td>
<td class="indent"><div>Total number of calls made using proxy servers. <a href="explain-using-different-proxies">Read more</a>.</div></td>
</tr>
<tr>
<td class="indent"><code>giCalls</code></td>
<td class="indent"><div>Total number of search calls made against the <a href="/dev/docs/global-index">Global Index</a>.</div></td>
</tr>
<tr>
<td class="parent"><code>invoices</code></td>
<td class="parent default"><div>Array of invoices for paid accounts.</div></td>
</tr>
<tr>
<td class="indent"><code>date</code></td>
<td class="indent"><div>Date of invoice.</div></td>
</tr>
<tr>
<td class="indent"><code>periodStart</code></td>
<td class="indent"><div>Billing period start date (resolved to day).</div></td>
</tr>
<tr>
<td class="indent"><code>periodEnd</code></td>
<td class="indent"><div>Billing period end date (resolved to day).</div></td>
</tr>
<tr>
<td class="indent"><code>totalCalls</code></td>
<td class="indent"><div>Total calls made during the billing period.</div></td>
</tr>
<tr>
<td class="indent"><code>totalAmount</code></td>
<td class="indent"><div>Total amount charged.</div></td>
</tr>
<tr>
<td class="indent"><code>overageAmount</code></td>
<td class="indent"><div>Total overage amount billed if call volume exceeded included number of monthly calls.</div></td>
</tr>
<tr>
<td class="indent"><code>status</code></td>
<td class="indent"><div>Payment status of invoice (<code>paid</code> or <code>unpaid</code>).</div></td>
</tr>
</table>

</div>
</div>