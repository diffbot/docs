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
{{ #deprecated }}**`Deprecated`**{{ /deprecated }}  {{ desc }}
* **Type:** {{ contentType }}
* **Example:**
```
{{{ example }}}
```
{{ /fields }}