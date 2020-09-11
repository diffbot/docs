---
id: error-too-many-collections
title: Too Many Collections Error
sidebar_label: Too Many Collections Error
---

> **Error message: Too many collections**

If you ever get the “Too Many Collections” error trying to create a [new bulk job or crawl job](cb-basics-index), either via the API or the UI in your account’s [dashboard](tutorials-new-dashboard), you’ve reached the limit our system supports: 1000 jobs.

This is why there is a timeout period after which inactive crawls will be removed – to make room for newer crawls.

If you have reached this limit, you may consider these options for lowering your job numbers:

- Consolidate one-off jobs with only default settings into a smaller number of jobs
- Download the results for your finished jobs, and delete them (this can be done programmatically).

These methods are detailed at https://docs.diffbot.com/docs/en/guides-job-limits.

We recommend you keep an eye on your active crawls and delete them as they are no longer needed. If the data has become stale or you have downloaded it, you are encouraged to remove the crawl. Likewise, if you have already downloaded the data but would like to keep the metadata (crawl settings) around, you can download these settings by using the [Crawlbot API](api-crawljob-api). Such a backed up JSON file is enough to restore your crawljob’s settings even after years of inactivity on your account.
