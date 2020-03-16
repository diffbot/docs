---
id: explain-custom-rule-breaks
title: What happens when a custom rule “breaks?”
sidebar_label: What happens when a custom rule “breaks?”
---

What happens to your custom rules when a site changes its markup?

## Corrected Fields in Automatic APIs

If your rule overrides a default field in one of Diffbot’s Automatic APIs, a failing rule will result in the default (automatic) response being returned. So if you’ve overridden the `title` of an article with selector `h1.title`, and the site updates its markup to remove the “title” class, the default title will be returned once your rule starts to fail.

## Custom Fields

Completely custom fields that start to fail — i.e., return no output — will be suppressed in API responses. Diffbot will not return an empty field if no match is found on a page for the selector(s).

If **all** of the fields in your Custom API fail, your Custom API request will return a 500 error indicating that rules were unable to be applied to the page:
```json
{
   "errorCode": 500,
   "error": "Unable to apply rules"
}
```

See also [Diffbot Could Not Apply Rules Error](error-diffbot-could-not-apply-rules).
