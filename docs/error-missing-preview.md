---
id: error-missing-preview
title: Custom API Preview is Missing
sidebar_label: Custom API Preview is Missing
todo: Revisit 15.01.2019. - check if new dash is still beta
---

Occasionally when using the Custom API dashboard at [https://diffbot.com/dev](https://diffbot.com/dev), the preview will fail. This can happen when:

- our Custom API previewing engine has difficulty loading all of the CSS (stylesheet) files from the page you are previewing
- a page will have significant content loaded via Javascript
- an indeterminate error will cause preview display issues

![A missing preview due to indeterminate error](/docs/img/kreo1.png)

While this can make rule-creation difficult, it shouldn’t affect the behavior or performance of your custom rules in actual API calls. However, to correctly construct rules you may need to use your regular browser’s “Inspect” functionality to identify the proper CSS selectors to use. For a step by step tutorial on how to do this, [please read this](guides-manual-selectors). Alternatively, contact support@diffbot.com to request access to our new dashboard's beta version which should be immune to these problems.

Sometimes our rendering engine is redirected to a mobile or alternate-device template. This too can cause a visual difference between what you see in your regular browser and what you see in the editor preview.  Our preview window usually matches what our API sees, so please construct your rules based on the editor preview.