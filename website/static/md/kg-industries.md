---
id: kg-industry-list
title: Organization Industries
onPageNav: false
generatedBy: generateIndustries.js
---

This reference is helpful for narrowing down queries for organizations on the [Diffbot Knowledge Graph](dql-quickstart) by [industry](kg-ont-organization#industries). Diffbot Knowledge Graph Search supports querying by industry names or NAICS codes. Feel free to use either.

An example [DQL](dql-index) query using an industry on this list might look like this —

```
type:Organization industry:"Medical Associations"
```

| Primary Industry    | Secondary Industry | Tertiary Industry | NAICS                   |
| ------------------- | ------------------ | ----------------- | ----------------------- |
{{ #industries }}
| {{ name }}          |                    |                   | {{ info.naicsMapping }} |
{{ #children }}
|                     | {{ name }}         |                   | {{ info.naicsMapping }} |
{{ #children }}
|                     |                    | {{ name }}        | {{ info.naicsMapping }} |
{{ /children }}
{{ /children }}
{{ /industries }}

<style>
/* Hides the Right-Hand Secondary Nav for a Full Width Industry Table */
.onPageNav {
    display: none;
}
/* Hides the Unnecessary Prev/Next Buttons for this Reference Doc */
.docs-prevnext {
    display: none;
}
</style>