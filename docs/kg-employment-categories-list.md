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
| Domain          |  Administrative, Planning, Purchasing         |                   |   |  |  |
| Domain          |  Agriculture, Farming, Forestry and related         |                   |   |  |  |
| Domain          |  Architecture, Cartography &amp; Urban planning         |                   |   |  |  |
| Domain          |  Building and Grounds Cleaning and Related         |                   |   |  |  |
| Domain          |  Business         |                   |   |  |  |
| Domain          |  Construction, Electricity, Plumbing         |                   |   |  |  |
| Domain          |  Counseling, Social Work, Person Care         |                   |   |  |  |
| Domain          |  Design and Graphic Arts         |                   |   |  |  |
| Domain          |  Engineering, IT and Software Development         |                   |   |  |  |
| Domain          |  Finance         |                   |   |  |  |
| Domain          |  Food Preparation and Service         |                   |   |  |  |
| Domain          |  Healthcare and Medicine         |                   |   |  |  |
| Domain          |  Human Resources and Recruiting         |                   |   |  |  |
| Domain          |  Industrial Production and Distribution (goods and food)         |                   |   |  |  |
| Domain          |  Installation, Maintenance, and Repair         |                   |   |  |  |
| Domain          |  Legal and Regulatory Compliance         |                   |   |  |  |
| Domain          |  Library and Archiving         |                   |   |  |  |
| Domain          |  Local Services and Animal Care         |                   |   |  |  |
| Domain          |  Marketing, Communication and Public Relations         |                   |   |  |  |
| Domain          |  Military         |                   |   |  |  |
| Domain          |  News, Entertainment, Sports and Performing Arts         |                   |   |  |  |
| Domain          |  Police, Firefighting, Emergencies and Private Security         |                   |   |  |  |
| Domain          |  Politics         |                   |   |  |  |
| Domain          |  Religion         |                   |   |  |  |
| Domain          |  Research and Science         |                   |   |  |  |
| Domain          |  Sales         |                   |   |  |  |
| Domain          |  Support and Customer Service         |                   |   |  |  |
| Domain          |  Teaching and Academics         |                   |   |  |  |
| Domain          |  Transportation and Material Moving         |                   |   |  |  |
| Domain          |  Travel Agencies and Tourism         |                   |   |  |  |

## By Role
An employment category indicating a person's relative rank (e.g. *Junior*, or *Senior*). Note that this list is not explicitly ordered.

| Category Type | Primary Category    | Secondary Category | Tertiary Category                   |  Quaternary Category | Quinary Category |
| ------------------- | ------------------ | ----------------------------------- | ---- | ---| -- |
| Role          |  Management         |                   |   |  |  |
|                     |          |  Executive                 |  |  |  |
|                     |          |                  | Board Member  |  |  |
|                     |          |                  |   | Chairman |  |
|                     |          |                  | Director  |  |  |
|                     |          |                  | Founder  |  |  |
|                     |          |                  | Leadership  |  |  |
|                     |          |                  |   | Chief Officer |  |
|                     |          |                  |   |  | CAO |
|                     |          |                  |   |  | CCO |
|                     |          |                  |   |  | CEO |
|                     |          |                  |   |  | CFO |
|                     |          |                  |   |  | CIO |
|                     |          |                  |   |  | CLO |
|                     |          |                  |   |  | CMO |
|                     |          |                  |   |  | COO |
|                     |          |                  |   |  | CTO |
|                     |          |                  |   | President |  |
|                     |          |                  |   | Vice President |  |
|                     |          |                  | Shareholder  |  |  |
|                     |          |  Manager                 |  |  |  |

## By Seniority
An employment category indicating a person's relative experience (e.g. *Junior*, or *Senior*)

| Category Type | Primary Category    | Secondary Category | Tertiary Category                   |  Quaternary Category | Quinary Category |
| ------------------- | ------------------ | ----------------------------------- | ---- | ---| -- |
| Seniority          |  Freelance         |                   |   |  |  |
| Seniority          |  Intern         |                   |   |  |  |
| Seniority          |  Junior         |                   |   |  |  |
| Seniority          |  Retired         |                   |   |  |  |
| Seniority          |  Senior         |                   |   |  |  |
| Seniority          |  Student         |                   |   |  |  |

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