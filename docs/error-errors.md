---
id: error-errors
title: Error Codes
sidebar_label: Error Codes
---

When issues arise, Diffbot APIs return the following fields in a JSON response:</p>

|Field|Response|
|-----|--------|
|error|Description of the error|
|errorCode|Error code per the chart below|

```json
{
     "error": "Could not download page (404)",
     "errorCode": 404
}
```

### Possible errors

|Code|Description|
|----|-----------|
|401|Unauthorized Token|
|404|Requested Page Not Found|
|429|Your token has exceeded the allowed number of calls, or has otherwise been throttled for API abuse.|
|500|Error processing the page. Specific information will be returned in the JSON response.|
