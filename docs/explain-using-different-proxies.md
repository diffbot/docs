---
id: explain-using-different-proxies
title: Using Diffbot Proxy Servers / Proxy IPs
sidebar_label: Using Diffbot Proxy Servers / Proxy IPs
---

In some cases - when crawling or processing data from certain sites - you may need to diversify the IP addresses of your requests. In this event you can utilize Diffbot’s fleet of proxy IPs to more consistently retrieve results.

Diffbot offers two levels of proxy IPs:

- Our default proxy servers are usable for most sites and at most volumes. Usage of these proxies incurs an additional API call for each page processed: each page processed using a proxy will count as two API calls.
- Our dynamic proxy servers effectively offer a new IP address for each request, and are usable for even the most difficult-to-crawl sites. Usage of dynamic proxy servers is limited to Professional or Enterprise customers, and pricing is dependent on data volume.

Additional notes:

Some popular sites always require proxies. These domains have proxies enabled globally and will incur a two-API-call rate for all tokens.

Details on your account’s proxy usage will be available via our Account API, in your Developer Dashboard, and in your monthly invoices.

The use of proxies will likely increase the response time of individual API calls. (See [suggestions for improving API response times](guides-improving-api-response-times).)

If you would like to utilize proxies for specific sites or individual crawls, please [contact support](mailto:support@diffbot.com).
