---
id: kg-employment-categories-list
title: Employment Categories
onPageNav: false
---

Employment categories (see [employments ontology reference](kg-ont-person#employments)) are canonicalized Domains, Seniority, and/or Roles inferred from a given person's employment title and description. Employment categories are only applicable for the [Person data type](kg-ont-person).

* **Domain** categories reflect career types (e.g. *Human Resources*, or *Food Preparation*)
* **Role** categories describe specialized job types, and are often indicative of rank (e.g. *Manager*, *CEO*)
* **Seniority** categories indicate a person's relative experience (e.g. *Junior*, or *Senior*)

A given employment may have one or several attributed categories. 

This reference is helpful for narrowing down queries for person employments on the [Diffbot Knowledge Graph](dql-quickstart) where inconsistent titles might be used, such as *Engineer* or *Software Developer*, both of which will be attributed the domain category *Engineering, IT and Software Development*. 

An example [DQL](dql-index) query using an employment category on this list might look like this —

```python
# Query for engineering managers
type:Person employment.{categories:"Engineering, IT and Software Development" categories:"Manager" isCurrent:true}
```

## By Domain
An employment category reflecting various career types (e.g. *Human Resources*, or *Food Preparation*)

| Category Type | Primary Category    | Secondary Category | Tertiary Category                   |  Quaternary Category | Quinary Category |
| ------------------- | ------------------ | ----------------------------------- | ---- | --- | -- |
{{ #employmentCategories.Domain }}
| {{ info.facet }}          |  {{ name }}         |                   |   |  |  |
{{ /employmentCategories.Domain }}

## By Role
An employment category indicating a person's relative rank (e.g. *Junior*, or *Senior*). Note that this list is not explicitly ordered.

| Category Type | Primary Category    | Secondary Category | Tertiary Category                   |  Quaternary Category | Quinary Category |
| ------------------- | ------------------ | ----------------------------------- | ---- | ---| -- |
{{ #employmentCategories.Role }}
| {{ info.facet }}          |  {{ name }}         |                   |   |  |  |
{{ #children }}
|                     |          |  {{ name }}                 |  |  |  |
{{ #children }}
|                     |          |                  | {{ name }}  |  |  |
{{ #children }}
|                     |          |                  |   | {{ name }} |  |
{{ #children }}
|                     |          |                  |   |  | {{ name }} |
{{ /children }}
{{ /children }}
{{ /children }}
{{ /children }}
{{ /employmentCategories.Role }}

## By Seniority
An employment category indicating a person's relative experience (e.g. *Junior*, or *Senior*)

| Category Type | Primary Category    | Secondary Category | Tertiary Category                   |  Quaternary Category | Quinary Category |
| ------------------- | ------------------ | ----------------------------------- | ---- | ---| -- |
{{ #employmentCategories.Seniority }}
| {{ info.facet }}          |  {{ name }}         |                   |   |  |  |
{{ #children }}
|                     |          |  {{ name }}                 |  |  |  |
{{ #children }}
|                     |          |                  | {{ name }}  |  |  |
{{ #children }}
|                     |          |                  |   | {{ name }} |  |
{{ #children }}
|                     |          |                  |   |  | {{ name }} |
{{ /children }}
{{ /children }}
{{ /children }}
{{ /children }}
{{ /employmentCategories.Seniority }}

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