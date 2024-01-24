---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: {{ id }}
title: {{ title }}
generatedBy: generateOntology.js
---

{{ description }}

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

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