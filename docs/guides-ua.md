---
id: guides-ua
title: Using Custom User Agents
sidebar_label: Using Custom User Agents
description: Diffbot supports passing along custom User Agent strings when processing websites. This is very useful when a website wants to whitelist a customer, but only that customer, blocking all other bots and even all other Diffbot customers. This guide shows you how to modify a Diffbot User Agent string.
---

When a website becomes very popular, it can draw the attention of many scraping bots from around the web. Diffbot is one such bot. A site being swarmed by such bots may opt to ban automated visitors altogether which isn't ideal for Diffbot's customers. In those cases, it is best to speak with the website's owners, assure them of noble intentions, and get them to whitelist a custom User-Agent string so that Diffbot can pass through.

But what if they don't want all Diffbot customers to crawl them, only _you_, their favorite customer? You can get as specific as you want with User-Agents.

## Setting a custom User-Agent

Let's suppose that you agreed with the target website to whitelist the word "pineapple". In other words, any User-Agent containing the word "pineapple" will be allowed through, but any User-Agent without it will be blocked by the target website entirely. How do we add "pineapple" to our User-Agent string permanently?

The following two approaches apply.

## New Dashboard

_Note: for this section, you need access to Diffbot's new beta dashboard. More info [here](tutorials-new-dashboard)._

For testing purposes, let's set up a [RequestBin](https://requestbin.com). RequestBin allows you to inspect requests coming in so you can see which headers have been applied. We're interested in the User-Agent header. Go ahead and set up a RequestBin. Once you have your unique URL, go to the Custom API section in the new dashboard and enter the unique requestbin URL, then click Create. You should see something like this in Diffbot:

![Requestbin as custom API](/img/ua/01.png)

And the RequestBin UI should give you the following header information:

![Requestbin headers](/img/ua/02.png)

You'll notice we have `Mozilla/5.0 (compatible; Onespot-ScraperBot/1.0; +https://www.onespot.com/identifying-traffic.html)` as the current UA. Now let's go into the `Other Settings` tab in Diffbot's custom API UI and add a new User-Agent. Once we click Save, the rule will reload and re-issue the request towards RequestBin. That's all there is to it - the header values should show "pineapple" now.

![Pineapple header](/img/ua/03.png)

Repeat the process for every domain for which you want a custom User-Agent!

## Adding User-Agents Programmatically

If you'd like to modify UA programmatically and not through the UI of the new dashboard, follow the [backup and restore process for rules](guide-backup-restore-rules) along with the guide to [managing your Custom rules programmatically](https://docs.diffbot.com/docs/en/api-managing-rules-programmatically). In short, you would POST the following JSON object to the `https://api.diffbot.com/v3/custom?token=MYTOKEN` endpoint:

```json
{
    "urlPattern": "(http(s)?://)?(.*\\.)?endtoxq6ne57i.x.pipedream.net.*", 
    "xForwardHeaders": {
        "User-Agent": "Mozilla/5.0 pineapple (compatible; Onespot-ScraperBot/1.0; +https://www.onespot.com/identifying-traffic.html)"
    }, 
    "api": "/api/article", 
    "testUrl": "https://endtoxq6ne57i.x.pipedream.net"
}
```

_Note: Remember to modify the domain of the url pattern to match your target website's!_

The response to this request will contain a hash. You can later use this hash to update the rule as specified in [managing your Custom rules programmatically](https://docs.diffbot.com/docs/en/api-managing-rules-programmatically).