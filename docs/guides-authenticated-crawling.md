---
id: guides-authenticated-crawling
title: Crawling behind login-walls
sidebar_label: Authenticated Crawling
---


There are many authentication schemes on the web, but two of the most common are username+password HTML forms and HTTP basic authentication.

## HTML Forms

![](/img/elegant-modal-login-form-with-avatar-icon-267x300.png)

Form-based authentication works by the setting a cookie in your browser using the Set-Cookie header. Here is a [full tutorial on how to use login cookies to access content behind login walls](guides-data-behind-login) in individual APIs. Follow the same procedure for retrieving the login cookie.

If you're using the [old Diffbot dashboard](https://diffbot.com/dev/crawl) to create the crawljob, place the cookie value into the Cookie field:

![The custom headers fields in the old dashboard's UI](/img/cookie/01.jpg)

If you're using the [new dashboard](tutorials-new-dashboard), use the "Custom headers" text field and add the Cookie as a single line, like so:

```txt
Cookie:SomeKey=SomeValue...
```

![The custom headers field in the new dashboard](/img/cookie/02.jpg)

Save the crawljob and it will use this cookie when crawling.

## HTTP Basic

![](/img/cookie/03.png)

For HTTP Basic based login, the browser will send an Authorization header that is calculated based on the values of the username and password. The header will be of the format `Authorization: Basic $hash` where the `$hash` is computed as the Base 64 encoding of the string `$username:$password`. 

[Learn more about basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

Once you have the Authorization header, as above, you can then supply this via the Custom Headers field in crawlbot's UI or via the [Crawlbot API](api-crawlbot-api) in order to perform authenticated crawling.
