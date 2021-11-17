---
id: {{ id }}
title: {{ title }}
generatedBy: generateOntology.js
---

{{ description }}

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## {{ title }} Fields
{{ #fields }}
* [{{ name }}](#{{#helpers.lowercase}}{{ name }}{{/helpers.lowercase}}) {{ ! Lowercase required for linking camelcased sections }}
{{ /fields }}

## {{ title }} Field Details
Note that certain longer field examples may be truncated for readability.

{{ #fields }}
### {{ name }}
{{ #isDeprecated }}**`Deprecated`**{{ /isDeprecated }}  {{ description }}
* **Type:** {{ type }}
* **Example:**
```
{{{ example }}}
```
{{ /fields }}