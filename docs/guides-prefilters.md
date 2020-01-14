---
id: guides-prefilters
title: Using Prefilters to Ignore Website Elements
sidebar_label: Using Prefilters to Ignore Website Elements
description: Some websites sometimes confuse Diffbot with extra elements that don't belong in the extraction. Prefilters are a new feature which allows users to completely remove certain DOM elements from consideration - no more pesky GDPR, cookie, or newsletter popups, and no more ads and "related" content!
---

Prefilters allow you to make Diffbot completely ignore certain elements on some websites. This is very useful for ads, popups, and other pesky UI elements that might confuse Diffbot while extracting information.

There are two ways to add prefilters to your rules: via the [new dashboard](tutorials-new-dashboard), or through the [backup and restore method](guides-backup-restore-rules).

We'll cover the simpler approach first - the new dashboard.

## Example

Let's assume we want to process [this URL](https://www.thirdsector.co.uk/rspca-union-unable-agree-date-talks-avert-possible-industrial-action/management/article/1669860) as an [Article](api-article). The result we get from Diffbot is:

![Sparse results](/img/prefilters/02.png)

The text is missing. Let's look at the website and see what might be going on.

![Popup on page](/img/prefilters/01.png)

The website has a rather invasive overlay and popup. This is what's probably interfering with Diffbot's extraction. Prefilters to the rescue!

## Finding the selectors

Prefilters block page elements by targeting their CSS selectors. We can find the selectors by using a browser's dev tools and right clicking on the element we want to remove, then selecting "Inspect element". The dev tools will highlight that element in the HTML of the page, but that's usually not enough - often we need to target the parent of that element, a level or two above. For best results, keep deleting elements in the DOM until the undesired elements disappear. In this case, the selectors were `.modalOverlay` and `.modal`, as seen in the search process below.

![Searching for CSS selectors](/img/prefilters/pf.gif)

## Blocking the elements in the UI

To block the elements in the UI, you need [access to the new dashboard](tutorials-new-dashboard). Once in, access the Custom API menu option in the left sidebar. Create a new API, enter the URL above, and Create it.

![Adding a new rule](/img/prefilters/03.png)

Once loaded, open the "Other Settings" tab and scroll down to Prefilters. In that text area, enter `.modal, .modalOverlay`. Scroll to the bottom and press save.

![Adding prefilters](/img/prefilters/04.png)

Once the preview reloads, you should already see results in the `text` and `html` fields. And indeed, if you use the top-right option to make an "API Call", you will notice the article is now extracted properly.

![Extracted article](/img/prefilters/05.png)

## Blocking the elements programmatically

If you'd like to do these blocks programmatically and not through the UI of the new dashboard, follow the [backup and restore process for rules](guide-backup-restore-rules) along with the guide to [managing your Custom rules programmatically](https://docs.diffbot.com/docs/en/api-managing-rules-programmatically). In short, you would POST the following JSON object to the `https://api.diffbot.com/v3/custom?token=MYTOKEN` endpoint:

```json
{
    prefilters: [
        ".modal",
        ".modelOverlay"
    ],
    api: "/api/article",
    urlPattern: "(http(s)?://)?(.*\.)?www.thirdsector.co.uk.*",
    testUrl: "https://www.thirdsector.co.uk/rspca-union-unable-agree-date-talks-avert-possible-industrial-action/management/article/1669860"
}
```

The response to this request will contain a hash. You can later use this hash to update the rule as specified in [managing your Custom rules programmatically](https://docs.diffbot.com/docs/en/api-managing-rules-programmatically).