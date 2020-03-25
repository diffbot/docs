---
id: error-error-downloading-url
title: Error Downloading URL Error
sidebar_label: Error Downloading URL Error
---

> **Error message: Error downloading URL

This error means the website is either down or blocking Diffbot’s servers.

To check which case we’re dealing with, please try to process it with a regular API call first. Copy this to your browser’s URL bar and replace TOKEN with your token, ENCODED_URL with encoded URL to test (encode it [here](https://meyerweb.com/eric/tools/dencoder/)) and APINAME with the desired API (with products it’s “product”, with articles it’s “article”, etc.).

```bash
https://api.diffbot.com/v3/APINAME?token=TOKEN&url=ENCODED_URL
```

If the request is successful, then the page is back up and should work. If it fails, but it opens in your browser, then they are blocking Diffbot.

To try and fix this, please try to apply proxies by adding `&proxy` to the request:

```bash
https://api.diffbot.com/v3/APINAME?token=TOKEN&proxy&url=ENCODED_URL
```

If this works, in your crawl / bulk settings, flip the switch that says “Use Proxies” and try again. This should make things work. Please note that [proxy calls count as double calls](explain-using-different-proxies).
