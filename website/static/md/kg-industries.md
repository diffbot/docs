---
id: kg-industry-list
title: Organization Categories
onPageNav: false
generatedBy: generateIndustries.js
---

> 📘 Looking for Industries?
> 
> This reference now contains the new taxonomy for industries v2, keyed as `categories`, and which contains over 250% more categories than the [previous industries taxonomy](<>) .
> 
> Legacy organization industries will be deprecated **Friday, August 30, 2024**.
> 
> Please see the [migration guide](<>)  for a complete overview of the changes.

This reference is helpful for narrowing down queries for organizations on the [Diffbot Knowledge Graph](dql-quickstart) by [industry category](ont-organization#categories). Diffbot Knowledge Graph Search supports querying by category names, NAICS, or SIC codes. Feel free to use any of them.

An example [DQL](dql-index) query using an industry on this list might look like this —

```
type:Organization categories:"Software Companies"
```


| L1 Category    | L2 Category | L3 Category | L4 Category | L5 Category | NAICS                   | SIC                   |
| ------------------- | ------------------ | ----------------- | ----------------- | ----------------- | ----------------------- | --------------------- |
{{ #industries }}                                                                                                    
| {{ name }}          |                    |                   |                   |                   | {{ info.naicsMapping }} | {{ info.sicMapping }} |
{{ #children }}                                                                                                      
|                     | {{ name }}         |                   |                   |                   | {{ info.naicsMapping }} | {{ info.sicMapping }} |
{{ #children }}                                                                                                      
|                     |                    | {{ name }}        |                   |                   | {{ info.naicsMapping }} | {{ info.sicMapping }} |
{{ #children }}                                                                                                      
|                     |                    |                   | {{ name }}        |                   | {{ info.naicsMapping }} | {{ info.sicMapping }} |
{{ #children }}                                                                                                      
|                     |                    |                   |                   | {{ name }}        | {{ info.naicsMapping }} | {{ info.sicMapping }} |
{{ /children }}
{{ /children }}
{{ /children }}
{{ /children }}
{{ /industries }}
