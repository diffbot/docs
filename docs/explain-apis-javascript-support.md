---
id: explain-apis-javascript-support
title: Do Diffbot APIs execute Javascript?
sidebar_label: Do Diffbot APIs execute Javascript?
---

<div class="entry-content">
		<p>Diffbot Automatic APIs execute page-level Javascript at render-time, and for the most part <strong>will</strong> be able to access Ajax-delivered content. Note that while creating a custom API you will not be able to preview Javascript-delivered content (see <a title="Why is a web page preview sometimes mis-formatted (or invisible)?" href="error-missing-preview">related support article</a>), but it will be accessible when making actual API calls.</p>
<p>Versions 1 and 2 of the Article API do <strong>not</strong> execute Javascript.</p>
<p>Crawlbot does not execute Javascript when harvesting/collecting links by default, but it can be modified to do so while using the Analyze API. See <a title="How to find and access Ajax-generated links while crawling" href="guides-crawling-ajax-generated-links">How to find and access Ajax-generated links while crawling</a> for details on enabling this functionality.</p>
<table>
<tbody>
<tr>
<th>Service</th>
<th>Executes Javascript?</th>
</tr>
<tr>
<td>Analyze API</td>
<td>Always.</td>
</tr>
<tr>
<td>Article API</td>
<td>Version 3 and above.</td>
</tr>
<tr>
<td>Discussion API</td>
<td>Always.</td>
</tr>
<tr>
<td>Image API</td>
<td>Always.</td>
</tr>
<tr>
<td>Product API</td>
<td>Always.</td>
</tr>
<tr>
<td>Video API</td>
<td>Always.</td>
</tr>
<tr>
<td>Custom APIs</td>
<td>Always.</td>
</tr>
<tr>
<td>Crawlbot</td>
<td>Always for processing pages. By default, not when collecting/harvesting links. See <a title="How to find and access Ajax-generated links while crawling" href="guides-crawling-ajax-generated-links">How to find and access Ajax-generated links while crawling</a>.</td>
</tr>
</tbody>
</table>
			</div>
