---
id: kg-search-bestpractices
title: Best Practices for Search
sidebar_label: Best Practices
---

## Exporting Data

### Limitations with CSV Export
The Dashboard includes a CSV export feature that makes it easier to read and manipulate data exports in Microsoft Excel, Google Sheets, or similar spreadsheet software. Because of the nesting nature of JSON, data in CSV exports might not exactly reflect their representation in JSON.
> ⚠️ Microsoft Excel has a 32,767 character limit per cell. Entities like Articles might break this character limit, which results in a malformed import. There is no known workaround to this for Excel. Google Sheets (character limit of 50,000) or Numbers on Macs (no character limit) can be used as alternatives.
