---
id: guides-check-results-specific-page-type
title: How can I check how many articles, products or other pages have been found?
sidebar_label: How can I check how many articles, products or other pages have been found?
---

The easiest way to use Crawlbot is paired with our Analyze API. Analyze determines the page-type of every page it processes, and for <a href="http://www.diffbot.com/products/automatic">supported pages</a> (articles, products, etc.) the content will be automatically extracted and its structured data indexed as part of your crawl.

Crawlbot tracks the number of pages processed during a crawl. If you’re using the Analyze API, this simply tells you how many pages have been analyzed, **not** how many individual products or articles or other pages have been discovered on the site.

![](/img/Screenshot-2015-05-19-16.13.02.png)

If you want to track how many of a specific page-type have been found, you’ll want to use our [Search API](api-basics-search). By regularly running queries against your particular crawl, you can get to-the-second updates on exactly how much content has been indexed.

For example, in a crawl named `diffbotShopping`, to track how many products have been found (at any time during or after the crawl), you would execute a `type:product` query as follows (substituting your token in the sample below):

```bash
http://api.diffbot.com/v3/search?token=sampletoken&amp;col=diffbotShopping&amp;query=type:product
```

This will return the complete data from the 20 most recently extracted products, and the `hits` element — a realtime count of the number of matching objects.

![](/img/ss_2015-0519_838.png)

For other page-types or even more granular data-counts you can execute similar queries: (see <a href="api-search">Search API Reference</a> for complete query syntax)

- Article: `query=type:article`
- Discussion Posts: `query=type:post`
- Images: `query=type:image`
- Products under $20: `query=type:product max:offerPrice:20.00`
- Articles written on May 19th 2015: `query=type:article min:date:2015-05-19 max:date:2015-05-19`
