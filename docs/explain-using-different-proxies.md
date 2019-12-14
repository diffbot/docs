---
id: explain-using-different-proxies
title: Using Diffbot Proxy Servers / Proxy IPs
sidebar_label: Using Diffbot Proxy Servers / Proxy IPs
---

<div class="entry-content">
		<p>In some cases—when crawling or processing data from certain sites—you may need to diversify the IP addresses of your requests. In this event you can utilize Diffbot’s fleet of proxy IPs to more consistently retrieve results.</p>
<p>Diffbot offers two levels of proxy IPs:</p>
<ol>
<li>Our default proxy servers are usable for most sites and at most volumes. Usage of these proxies incurs an additional API call for each page processed: each page processed using a proxy will count as two API calls.</li>
<li>Our dynamic proxy servers effectively offer a new IP address for each request, and are usable for even the most difficult-to-crawl sites. Usage of dynamic proxy servers is limited to Professional or Enterprise customers, and pricing is dependent on data volume.</li>
</ol>
<p>Additional notes:</p>
<ol>
<li>Some popular sites always require proxies. These domains have proxies enabled globally and will incur a two-API-call rate for all tokens.</li>
<li>Details on your account’s proxy usage will be available via our Account API, in your Developer Dashboard, and in your monthly invoices.</li>
<li>The use of proxies will likely increase the response time of individual API calls. (See <a title="Improving API response times" href="guides-improving-response-times">suggestions for improving API response times</a>.)</li>
</ol>
<p>If you would like to utilize proxies for specific sites or individual crawls, please contact <a href="mailto:support@diffbot.com">Diffbot Support</a>.</p>
			</div>
