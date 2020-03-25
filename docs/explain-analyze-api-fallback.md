---
id: explain-analyze-api-fallback
title: The Analyze API “fallback” argument
sidebar_label: The Analyze API “fallback” argument
---

The [Analyze API](api-basics-analyze), by design, acts as a content filter: it serves to identify web pages and extract the content only from those that are supported by Diffbot's [Automatic APIs](api-basics-index). For instance, an article page will be routed-to and automatically extracted by the Article API, and an individual product page will be routed-to and automatically extracted by the Product API.

However:

- a product listing page,
- a blog or e-commerce or corporate home page,
- a full screen Flash-based recreation of the original _Doom_...

... all of these pages will be identified as `type:other` by the Analyze API. These pages are not supported by an Automatic API, and their contents will not be extracted.

It is in this case that you may want to avail yourself of `fallback`. By passing a specific API in your `fallback` argument — e.g. `https://api.diffbot.com/v3/analyze?fallback=article` — you can force unsupported pages through the API you designate. The specified API will then do its best to extract whatever content it can from the otherwise-unsupported web page.

Note that when you utilize `fallback`, the `type` of any returned object(s) will match your fallback API. However the field `originalType` will also be returned in this situation, with a value of “other” — this indicates that the fallback argument has been used. The Analyze API’s top-level `type` will also maintain its “other” value.

If circumstances demand that content should `always` be extracted from Analyze API requests, passing a `fallback` value will ensure that your `type:other` pages return something.