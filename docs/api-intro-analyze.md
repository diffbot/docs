---
id: api-intro-analyze
title: Analyze API Introduction
sidebar_label: Introduction
description: Introduction of the Diffbot Analyze API
---

The Diffbot Analyze API visually analyzes a web page, identifies its "page-type," and determines which Diffbot [extraction API](api-basics-index) (if any) is appropriate. Pages that match a supported extraction API -- articles, discussions, images, products or videos -- **will be automatically extracted** and returned in the Analyze API response.

Pages not currently supported by an extraction API will return "other."

The full API reference of Analyze API can be found [here](api-analyze).

## When to Use Analyze API vs Other APIs

The Analyze API serves as a single entry-point to all of Diffbot's [Automatic APIs](api-basics-index). In one request, the Analyze API will:

- Determine the `type` of any URL submitted.
- Return the full Diffbot extraction for any supported types: articles, products, images, discussion threads, videos and more coming soon.
- Or, just return the type of the page you're looking for by using the `mode` argument, e.g. https://api.diffbot.com/v3/analyze?mode=article

If you are handling web pages of unknown origin (e.g., end-user submitted/shared links), the Analyze API will prevent spurious extractions from unsupported pages.

When spidering a site using Crawlbot, the Analyze API will prevent extracting **every** site page via a single API. For instance, using Analyze makes it easy to “retrieve all the product data from ECommerceStore.com” without additional configuration.

## When Not to Use Analyze API vs Other APIs

Sometimes it makes sense to opt for a specific API rather than Analyze API. For example, if you are certain of your web-page type (e.g., all articles), sending calls directly to the specific API endpoint will result in 100% extractions. There is always a small chance that the Analyze API will mis-classify confusing pages.

Note that you can also use the [fallback](explain-analyze-api-fallback) argument if you’d like to ensure that unsupported pages are processed by a specific API of your choosing.

Custom rules applied to a specific API, and specific API parameters (e.g., `fields=meta,videos,html` for the Article API) will be handled appropriately regardless of using the Analyze or specific extraction APIs.

Learn more about the Analyze API:

- [Do Diffbot APIs Follow Redirects?](explain-apis-follow-redirects)
- [Do Diffbot APIs Execute JavaScript?](explain-apis-javascript-support)
- [How long can a single request take / what is the Diffbot API timeout?](explain-diffbot-api-timeout)
- [Can Diffbot APIs Extract Content from PDFs or Other Documents?](explain-pdf-extraction)
- [Can I send HTML or text directly to Diffbot APIs?](explain-posting-text-html)
- [Using Diffbot Proxy Servers / Proxy IPs](explain-using-different-proxies)
- [What counts as an API call?](explain-what-counts-as-api-call)

Once you've gone through the basics above, proceed with learning about:

- [Usage Examples](api-usage-analyze)
- [API reference](api-analyze)