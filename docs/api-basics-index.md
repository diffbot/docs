---
id: api-basics-index
title: Explaining Diffbot's Extraction APIs
sidebar_label: >> START HERE <<
todo: Turn into nice custom landing page
---

Diffbot offers several APIs for automatic extraction of content from third party websites. The content is returned as structured JSON or, in some cases, CSV, and is ready to be imported into your local database for further processing.

Through machine learning and its ability to improve over time, Diffbot excels in recognizing various types of content in several dozen human languages.

Please consult the following list of available APIs and their brief descriptions to recognize the use case you're interested in. Almost all of the APIs below can be used in tandem with out [batch services](cb-basics-index) and applied to a wide range of links at once.

- [Product API](api-basics-product) allows you to extract information about products, including specifications, colors, availability, price, discount offers, shipping, description, reviews, and more.
- [Article API](api-basics-article) allows you to extract information about news articles, blog posts, and other written content. Diffbot can recognize authors and their profile images and links, dates and locations of publication, sentiment, tags based on content, images in the article, comments, language the content is written in, and more.
- [Image API](api-basics-image) allows you to extract detailed information about images, from dimensions and download URLs to what's on the image through image recognition.
- [Video API](api-basics-video) same as above, for videos.
- [Discussion API](api-basics-discussion) is used for extracting threads of content. This can be a review section of a product (indeed, Product API uses the Discussion API internally when extracting comments to include them in the output), a forum or Reddit thread, or a comment section in a blog.
- [Event API (BETA)](api-basics-event) is used for extracting online and in-person event details for standalone events that occur within a single day. Support for multi-day, multi-track events, i.e. full conferences and festivals, is planned but not yet scheduled.
- [Analyze API](api-basics-analyze) can be used when you're not sure of the type of page you're trying to parse, or when you're issuing batch calls and can't specify what Diffbot will encounter across the domain being spidered. Analyze API will automatically recognize the type of content and apply one of the above APIs for processing.
- [Custom API](api-basics-custom) comes in when all else fails. If an Automatic API fails to recognize some content or extracts the wrong thing, it can be modified with the Custom API toolkit. Futhermore, if the page being processed is in a completely different category from any of the above APIs, a Custom API can be created from scratch specifically for that resource. Custom APIs are very powerful and worth learning about.
- [Account API](api-basics-account) is an account-management API which lets you programmatically find out information about your Diffbot account. This can be account type, requests issued to Diffbot, plan and billing, list of custom rules, and more.

You can interact with all of the above APIs through either [REST calls](api-intro), or visually through our [dashboard](tutorials-new-dashboard).
