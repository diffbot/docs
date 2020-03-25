---
id: explain-posting-text-html
title: Can I send HTML or text directly to Diffbot APIs?
sidebar_label: Can I send HTML or text directly to Diffbot APIs?
---
  
Yes, all Diffbot extraction APIs support the POSTing of content for analysis and content extraction. 

The Article API supports both plain-text and HTML POSTs, whereas all other APIs support POSTing of HTML.

When POSTing content to Diffbot, the `url` value is still required in your request URL. Diffbot will attempt to resolve any relative links contained in your POSTed markup. If you do not wish this to occur, you may send a spurious `url` value.

The API reference of each individual API will have more information on POSTing content directly to it.