---
id: {{ id }}
title: {{ title }}
---

{{ description }}

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## {{ title }} Fields
{{ #fields }}
* [{{ name }}](#{{#helpers.lowercase}}{{ name }}{{/helpers.lowercase}}) {{ ! Lowercase required for linking camelcased sections }}
{{ /fields }}

## {{ title }} Field Details
Note that certain longer field examples may be truncated for readability in these docs. 

{{ #fields }}
### {{ name }}
{{ #deprecated }}**`Deprecated`**{{ /deprecated }}  {{ desc }}
* **Type:** {{ contentType }}
* **Example:**
```
{{{ example }}}
```
{{ /fields }}