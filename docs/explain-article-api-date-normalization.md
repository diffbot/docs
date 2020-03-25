---
id: explain-article-api-date-normalization
title: Date normalization in the Article API
sidebar_label: Date normalization in the Article API
---

Diffbot attempts to normalize content in the Article API’s `date` field. For example, the date: `February 5, 2014` will be returned in the Article API JSON response as:

`"date": "Wed, 5 Feb 2014 00:00:00 GMT"`

If a timestamp is available, the Article API will return the time converted to GMT. Articles without a timestamp will be returned with a timestamp of midnight GMT.

Date normalization will also occur for any Article API date fields using [custom rules](api-basics-custom).
