---
id: guides-custom-headers-api
title: How do I set custom headers in API calls?
sidebar_label: Sending Custom Headers with API Calls
menus: api-intro-article:recipes, api-intro-custom:recipes,  api-intro-discussion:recipes,  api-intro-image:recipes,  api-intro-video:recipes,  api-intro-product:recipes
---

Diffbot supports setting/sending the following custom headers for direct API calls. These headers will be used when requesting content from third-party sites:

- User-Agent
- Referer
- Cookie
- Accept-Language
- X-Evaluate

## User-Agent, Referer, Accept-Language

Create a new [RequestBin](https://requestbin.com). We'll use this to test that our custom headers are coming through.

There are several ways to attach custom headers to API requests.

### Direct

Use `X-Forward` as a prefix with any header you want forwarded. For example, to send the User-Agent `foobar`, we would use the header `X-Forward-User-Agent: foobar`.

Here's an example in the [Postman application](https://postman.com).

![Configuring the main call](/img/customheader/01.jpg)

![Sending a Postman call with custom headers](/img/customheader/02.jpg)

Here's the same example as plain cURL call:

```bash
curl --location --request GET 'api.diffbot.com/v3/article?token=MY_TOKEN&url=https%3A%2F%2Fen17uofqrlcgv.x.pipedream.net%2F' \
--header 'X-Forward-User-Agent: foobar' \
--header 'X-Forward-Referer: Diffbot.com' \
--header 'X-Forward-Accept-Language: hr'
```

In either case, RequestBin will show us the headers as expected:

![Custom headers visible in requestbin](/img/customheader/03.jpg)

> Note: the referer is missing because it's something RequestBin does not show, but it's there.

These headers are discarded after this call, meaning they need to be added again on a subsequent call.

### Rule-based

To permanently attach headers to a rule for an API, you can use the [backup / restore functionality](guides-backup-restore-rules) to download raw rule data, modify it, and upload it back to your token, replacing the old rule setup.

A rule with permanently attached headers might look like this:

```json
{
xForwardHeaders: {
    User-Agent: [
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Safari/604.1.38"
    ],
    X-Evaluate: "function() { start(); setTimeout(function() { setTimeout(function() { end(); }, 5000); }, 25000);}",
    Cookie: "foo=bar"
},
rules: [ ],
api: "all",
urlPattern: "(http(s)?://)?(.*\.)?mysite.com.*",
testUrl: "",
},
```

Re-uploading this JSON as per the [rule backup and restoration guide](guides-backup-restore-rules) will add these headers to all calls issued towards `mysite.com`. Notice that `User-Agent` is a JavaScript array. If you supply `User-Agent` as an array (only possible through this method), Diffbot will randomly pick one from the list when accessing a site. This is great for throwing off bot-detection algorithms.

> Note: X-Evaluate is explaind below

### Dashboard

The [new dashboard](tutorials-new-dashboard) also allows you to permanently add some headers to a rule. When creating a new custom rule, use the Custom Headers section to enter any headers you wish to add. This will save the headers in the same way as the JSON approach above. The Dashboard UI is a user-interface wrapped around the same backup/restore procedure as above.

![Custom headers visible in requestbin](/img/customheader/04.jpg)

## Cookie

The Cookie header allows you to:

- simulate a login session
- remove annoying GDPR and newsletter popups
- ignore ads and content you don't want to extract

For a comprehensive guide on using the Cookie header to simulate a login session, please see [Accessing Data Behind a Login Wall](guides-data-behind-login)

## X-Evaluate

> Note: the X-Evaluate header is beta functionality

X-Eval allows you to inject custom JavaScript into any website. It is a custom header like any of the above, but has special requirements in regards to syntax.

- an X-eval script starts with an anonymous function declaration which will be called by Diffbot

    ```js
    function () {}
    ```

- an X-eval script needs to start with `start()` and end with `end()`. In particular, if `end` is omitted, the script never ends and the request will time out waiting for `end()` to be called.

    ```js
    function () {start(); end();}
    ```

- an X-eval script needs to be minified (turned into a single-line). Use a minifier like [Minifier.org](https://www.minifier.org/).

### X-evaluate Example

The web page [Example.com](http://example.com) has a paragraph of text explaining its purpose. Let's add a "Today is X" message to the end of that paragraph, with X being the current day of the week.

![Day text is added to the paragraph](/img/customheader/05.jpg)

These are the steps we should follow:

1. Write a script which successfully does this in the browser console.

    ```js
    const now = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = days[ now.getDay() ]
    document.querySelector("p").innerText += "Today is " + day;
    ```

2. Minify this script using [Minifier.org](https://www.minifier.org) and wrap it in `function` and the `start` and `end` calls.

    ```js
    function() {start(); const now=new Date();const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];const day=days[now.getDay()];document.querySelector("a").innerText="Today is "+day; end(); }
    ```

3. Pass the script along as the `X-Forward-X-Evaluate` custom header. We'll use Postman here, but you can also attach it permanently using the dashboard or raw rule backup/restore as documented above. Issuing the request will reveal our desired text in the return data.

    ![Day text is present at the end of the paragraph](/img/customheader/06.jpg)

> Note: X-Evaluate will only be executed if called from the API the rule resides in. If you have an X-Evaluate script in your Article API rule and make a request with the Analyze API that identifies the page as an article, the X-Evaluate will not be executed.