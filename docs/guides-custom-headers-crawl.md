---
id: guides-custom-headers-crawl
title: How do I set custom headers in API calls or while crawling?
sidebar_label: How do I set custom headers while crawling?
todo: Turn into proper tutorial with an example on Diffbot-hosted website
menus: cb-intro-cb:recipes, cb-intro-bulk:recipes

---


Diffbot supports setting/sending the following custom headers while crawling, and within bulk processing jobs. These headers will be used when requesting content from third-party sites:

- User-Agent
- Referer
- Cookie
- Accept-Language
- X-Evaluate

> Note that is it possible to use custom headers with direct API calls too. Learn more in the [guide on using custom headers in APIs](guides-custom-headers-api).

There are two methods of adding custom headers to a crawl or bulk job.

## Dashboard

The simplest method is to use the Custom Headers fields in the UI of [the dashboard](https://app.diffbot.com) ([If you don't yet have access to the new dashboard, please see here](tutorials-new-dashboard)).

![Custom Headers Textfield in the UI](/img/customheader/07.jpg)

Anything placed into this field will apply across the entire crawl or bulk job.

## Programmatic

This method applies if you're creating bulk or crawl jobs programmatically through the [relevant API](api-crawlbot-api).

Your headers need to be sent in your initial request to https://api.diffbot.com/v3/bulk or https://api.diffbot.com/v3/crawl. Thereafter your custom headers will be used while crawling for links, and in any extraction processing.

To send custom headers in your Crawlbot or Bulk service API requests, send multiple `customHeaders` values in your POST body. Headers should be delimited by a colon and URL-encoded: `&customHeaders=Referer%3Ahttp%3A%2F%2Fwww.diffbot.com&customHeaders=Accept-Language%3Aen-us`

Here's how that looks in [Postman](https://postman.com) and as a cURL call.

![Custom Headers in a crawl creation request's body](/img/customheader/08.jpg)

```bash
curl --location --request POST 'https://api.diffbot.com/v3/crawl?token=brunotestrules&name=myNewCrawl' \
--header 'Content-Type: text/plain' \
--data-raw 'seeds=https://www.example.com&apiUrl=https://api.diffbot.com/v3/article&customHeaders=Referer%3Ahttp%3A%2F%2Fwww.diffbot.com&customHeaders=Accept-Language%3Aen-us'
```

A job created this way will keep the headers active throughout its lifetime.