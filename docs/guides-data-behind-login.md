---
id: guides-data-behind-login
title: Accessing Data Behind a Login Wall
sidebar_label: Accessing Data Behind a Login Wall
todo: update to also demonstrate this in the new dashboard
---

Sometimes you need to log into a site to get to some walled-off data. 

There are two approaches you can take:

1. Download the HTML and send the data as POST to the API directly. [Learn more about sending POST data to an API](explain-posting-text-html).
2. Use Cookies to simulate an active session and skip the login prompt of a website.

The guide below will demonstrate the latter option.

---

Let’s assume we want to crawl the articles on [TheBrowser.com](https://thebrowser.com). TheBrowser is a manually curated subscription based website which recommends interesting links from around the web.

![TheBrowser, a curator of web quality](/img/loginwall/01.png)

## Getting the Login Cookie

Once you have an account on the site you’re wanting to crawl (TheBrowser’s will cost you some $35 yearly but same procedure applies to any website with a paywall / log in area), log into it.

Once logged in, open your browser’s Dev Tools (right click anywhere on the page) and select Inspect, or go to View -> Developer -> Developer Tools. Then, open the Network tab and to be on the safe side refresh the page you’re logged into. The very first entry in the Network tab will be the one you’re looking for.

![Selecting the network tab after reloading](/img/loginwall/thebrow2.gif)

Scroll down on its screen until you see the Response Headers area, then select the whole Cookie or Set-Cookie field and copy it.

![Selecting and copying the cookie value in the network entry](/img/loginwall/thebrow3.gif)

We now have the login cookie copied!

> Note – this method will often grab more than the login cookie, as all of the site’s cookies are there, from traffic analysis to ads. It’s better to err on the side of caution and grab too much than too little.

## Using the Cookie in Crawlbot

Copy the cookie into the Crawljob you’re building for this site, into its specific Cookie field in the Crawljob UI.

![Pasting the cookie into the appropriate crawlbot field](/img/loginwall/thebrow4.gif)

This will be enough to crawl a site with a login for as long as the session lasts.

> Note: Be aware that some cookies last longer than others, and the session might expire after a while. You will then need to repeat the process. The one from our example does not expire, so it’s valid forever.

After the job has been running for a while, TheBrowser will have given us a nice set of results.

![Results of a crawl running on TheBrowser - 3.3k pages crawled, 6.5k processed](/img/loginwall/03.png)

## Using the Cookie in Direct API Calls

Using the cookie in direct API calls is a bit more complicated, but we’re working on making it much simpler. For now, the following section will describe the process.

Let’s assume we created a custom API called `thebrow` for TheBrowser.

![Creating a custom API](/img/loginwall/02.png)

> Note: to actually save a Custom API, you need to add at least one field, even if it’s pointless.

Coincidentally, TheBrowser is blocking rendering of its own pages in other websites, so we need to apply the procedure [described here](guides-manual-selectors) to set the rule up. In our example, we set up a [collection](guides-custom-collections) that gathers up the links on a TheBrowser page.

![A custom collection returning links](/img/loginwall/screen1.png)

We can see that the Custom API here returns only 5 links. We know for a fact that when logged in, the home page of TheBrowser returns many more. This will thus be an excellent testing ground.

## Temporarily using a cookie with an API

When you want a one-off API call or an API call from the command line using your cookie (for testing purposes, for example), you can pass the header `X-Forward-Cookie` with the request and Diffbot will forward that cookie along.

Let’s see how that would work with the fantastic API testing tool [Postman](https://getpostman.com).

We need to:

- put the API URL in the main field
- open the “params” area and add the token and URL, then select the URL and select “ENCODE” so that it’s properly encoded for sending
- open the headers area and input the cookie

Here’s a demonstration of the whole process:

![Using the login cookie in Postman](/img/loginwall/thebrow5.gif)

The request now returns many more results.

## Permanently attaching a cookie to an API

When you permanently attach a cookie to an API that targets a site, that site will always take that cookie into account and act as if you’re logged in. This is incredibly useful when cookies on that site don’t expire, but you don’t use it for crawling.

To permanently attach the cookie, you need to programmatically update your rules by following this process:

1. Create a custom API for that domain.
2. Download all your custom APIs.
3. Modify the API for that domain with the cookie
4. Send all the APIs back to Diffbot for saving

We already did step 1 above, so let’s first download all rules with the [Custom API API](api-managing-rules-programmatically).

Using Postman, a simple request to our token’s Custom API API endpoint should produce a set of rules. One of them will be for our desired site, as in the case below:

```
{
    "rules": [
      {
        "name": "browlinks",
        "selector": "article",
        "rules": [
          {
            "name": "linkurl",
            "selector": "h2 a:first-child",
            "filters": [
              {
                "args": [
                  "href"
                ],
                "type": "attribute"
              }
            ]
          },
          {
            "name": "linktitle",
            "selector": "h2"
          }
        ]
      }
    ],
    "api": "/api/thebrow",
    "urlPattern": "(http(s)?://)?(.*\\.)?thebrowser.com.*",
    "testUrl": "http://thebrowser.com"
  }
```

All we need to do here is add another set of values:

```
   "xForwardHeaders": {
        "Cookie": [
            "COOKIE_HERE"
        ]
    }, 
```

Put together, the rule must look like this:

```
{
  "rules": [
    {
      "name": "browlinks",
      "selector": "article",
      "rules": [
        {
          "name": "linkurl",
          "selector": "h2 a:first-child",
          "filters": [
            {
              "args": [
                "href"
              ],
              "type": "attribute"
            }
          ]
        },
        {
          "name": "linktitle",
          "selector": "h2"
        }
      ]
    }
  ],
  "xForwardHeaders": {
    "Cookie": [
      "COOKIE_HERE"
    ]
  }, 
  "api": "/api/thebrow",
  "urlPattern": "(http(s)?://)?(.*\\.)?thebrowser.com.*",
  "testUrl": "http://thebrowser.com"
}
```

Note: the location at which you put `xForwardHeaders` does not matter.

With a modified and saved `myrules.json`, we can tell Diffbot about our changes to the rules.

```bash
curl -d "@myrules.json" -X POST https://api.diffbot.com/v3/custom?token=MYTOKEN -H "Content-Type: application/json"
```

This will update that token’s rules and apply the cookie indefinitely. You can refresh the cookie if it expires by repeating the process – first download the rules, then change them, then re-upload them.

We realize this is not the most user-friendly way to add cookies to custom APIs, and we’re actively working on improving this aspect of Custom API development!