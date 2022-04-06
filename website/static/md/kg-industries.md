---
id: kg-industry-list
title: Organization Industries
onPageNav: false
generatedBy: generateIndustries.js
---

This reference is helpful for narrowing down queries for organizations on the [Diffbot Knowledge Graph](dql-quickstart) by [industry](kg-ont-organization#industries). Diffbot Knowledge Graph Search supports querying by industry names or NAICS codes. Feel free to use either.

An example [DQL](dql-index) query using an industry on this list might look like this —

```
type:Organization industries:"Medical Associations"
```

| Level 1 Industry    | Level 2 Industry | Level 3 Industry | NAICS                   | SIC                   |
| ------------------- | ------------------ | ----------------- | ----------------------- | --------------------- |
{{ #industries }}                                                                                                    
| {{ name }}          |                    |                   | {{ info.naicsMapping }} | {{ info.sicMapping }} |
{{ #children }}                                                                                                      
|                     | {{ name }}         |                   | {{ info.naicsMapping }} | {{ info.sicMapping }} |
{{ #children }}                                                                                                      
|                     |                    | {{ name }}        | {{ info.naicsMapping }} | {{ info.sicMapping }} |
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
