---
id: guides-multidomain
title: Applying the same API to multiple domains
sidebar_label: Applying the same API to multiple domains
---

When building a [Custom API](api-intro-custom) - whether it's an extension of an existing API or a brand new API - you may want to have it apply to multiple domains, or even _all_ the domains. Here's how to configure a multi-domain API.

## In The Dashboard

In the [dashboard](https://app.diffbot.com) go into a Custom API's settings and select the "Other Settings" tab.

![Other Settings in the Custom API dashboard](/img/multidomain/01.png)

The URL pattern field accepts a regular expression that must match a URL in order for that URL to be processed with that API. So if, for example, we wanted to process the German version of Safeway as well as the American one, we could change the regex to `(http(s)?://)?(.*\.)?safeway.(com|de).*`. Alternatively, if we wanted to process ALL the domains with this API, we could simply apply a regular expression like `.*`:

![A wildcard domain match](/img/multidomain/02.png)

## Programmatically

Follow the [guide for backing up and restoring your rules](https://docs.diffbot.com/docs/en/guides-backup-restore-rules), and replace the `urlPattern` value as noted above. Keep in mind that in the database, rules are stored as a combination of API + urlPattern, so if you are updating an old rule as opposed to creating a new one and change one of those fields, you will actually be **creating** the new rule alongside the old one. Functionally, the new one should overwrite the old one in functionality, but it is still recommended you manually delete the old rule.

We recommend always using the dashboard approach for changing these settings.
