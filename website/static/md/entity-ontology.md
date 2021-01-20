---
id: {{ id }}
title: {{ title }}
---

{{ description }}

>New to the Diffbot Knowledge Graph? [Start here](kg-quickstart).

## {{ title }} Fields
{{ #fields }}
* [{{ name }}](#{{#helpers.lowercase}}{{ name }}{{/helpers.lowercase}}) {{ ! Lowercase required for linking camelcased sections }}
{{ /fields }}

## {{ title }} Field Details

{{ #fields }}
### {{ name }}
{{ desc }}
* **Type:** {{ contentType }}
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
{{ /fields }}