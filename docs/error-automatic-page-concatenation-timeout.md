---
id: error-automatic-page-concatenation-timeout
title: Automatic Page Concatenation Exceeded Timeout Error
sidebar_label: Automatic Page Concatenation Exceeded Timeout Error
---

> **Error message: “Automatic page concatenation exceeded timeout”**

This error happens when Diffbot tries to [automatically concatenate](guides-multi-page-articles-discussions) too many article pages and fails because the pages are taking too long to load. You can disable concatenation by using the following parameter in your requests:

```bash
&paging=false
```

You can also try speeding up the processing of individual pages by using some [methods that have been proven to work](guides-improving-response-times).

More information about concatenation is available [here](guides-multi-page-articles-discussions).