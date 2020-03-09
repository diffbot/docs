---
id: error-all-crawling-temporarily-paused
title: What does “all crawling temporarily paused by root administrator…” mean?
sidebar_label: What does “all crawling temporarily paused by root administrator…” mean?
---

On occasion, during both regular (and irregular) maintenance phases, Crawlbot and Bulk Processing operations will be temporarily paused by Diffbot administrators.

If this occurs, your jobs’ status will display the following message:

```json
"jobStatus": {
    "status": 8,
    "message": "All crawling temporarily paused by root administrator for maintenance."
}
```

This is a proactive measure to ensure data is not compromised or corrupted during the maintenance phase. Once the maintenance is complete (typically resolved within minutes), crawling operations will resume automatically. This means:

- Crawls or bulk jobs that were in progress will resume immediately.
- Scheduled recurring crawls will continue on their same schedule.
- Recurring crawls scheduled to resume during a maintenance phase will start a new round immediately.
- Jobs created during the maintenance phase will begin.
