---
id: api-basics-index
title: Diffbot's Automatic Extraction APIs
sidebar_label: >> START HERE <<
todo: Turn into nice custom landing page
---

Diffbot offers several APIs for AI-based extraction of webpages.  Diffbot uses computer vision and natural language processing techniques in order to automatically categorize pages into types (article, product, discussion, nav page) and automatically extract their contents into structured entities, which are returned as JSON.

## Automatic APIs

- [Analyze API](api-basics-analyze) If you aren't sure what type of content is at your URL, start out with the Analyze API.  The Analyze API uses machine learning in order to automatically classify your URL and route it to the appropriate type of extraction based on the API.

### Page Type APIs

If you know what type of content your URL is, or what to force extraction as a specfic type of content, use one of the page-type specfic APIs below.

- [Article API](api-basics-article) allows you to extract information about news articles, blog posts, and other written content. Diffbot can recognize authors and their profile images and links, dates and locations of publication, sentiment, tags based on content, images in the article, comments, language the content is written in, and more.
- [Product API](api-basics-product) allows you to extract information about products, including specifications, colors, availability, price, discount offers, shipping, description, reviews, and more.
- [Image API](api-basics-image) allows you to extract detailed information about images, from dimensions and download URLs to what's on the image through image recognition.
- [Video API](api-basics-video) same as above, for videos.
- [Discussion API](api-basics-discussion) is used for extracting threads of content. This can be a review section of a product (indeed, Product API uses the Discussion API internally when extracting comments to include them in the output), a forum or Reddit thread, or a comment section in a blog.
- [Event API (BETA)](api-basics-event) is used for extracting online and in-person event details for standalone events that occur within a single day. Support for multi-day, multi-track events, i.e. full conferences and festivals, is planned but not yet scheduled.

## Custom API

- [Custom API](api-basics-custom) The Custom API can be used to either correct & augment automatically extracted output or create entirely new custom extractions by defining rules. We have a point-and-click interface that allows you to easily build CSS-based selectors, regular expressions, and attribute filters, or you can also use the Custom API programmatically via..and API.

## Account API

- [Account API](api-basics-account) is an account-management API which lets you programmatically find out information about your Diffbot account. This can be account type, requests issued to Diffbot, plan and billing, list of custom rules, and more.

## Batch Processing

Have millions of URLs to process? Instead of sending them one-by-one or creating threaded code, you can try our [Bulk API](cb-intro-bulk), which allows you to submit millions of URLs in a single Bulk Job.  Using the Bulk API allows us to optimize your processing throughput, automatically handling issues of rate limiting on the 3rd party websites. 

You can interact with all of the above APIs through either [REST calls](api-intro), or visually through our [dashboard](tutorials-new-dashboard).
