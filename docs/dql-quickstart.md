---
id: dql-quickstart
title: Knowledge Graph Quickstart
sidebar_label: >> START HERE! <<
---

[Diffbot's Knowledge Graph (DKG)](https://www.diffbot.com/products/knowledge-graph/) allows you to search the world's largest, most accurate database of companies, articles, people, places, and other entities. To access the Knowledge Graph you will either need to call the API directly or login to the Diffbot Developer Dashboard to use the web app.

Before you get started, there are a few things to keep in mind:

- The KnowledgeGraph is rebuilt every 4-5 days. It is not a data archive, nor was it designed to support “as-was”, time-based comparisons. If you are interested in the historical context that is contained within the DKG, e.g. an individual's employment history, please let us know. We would be happy to help you craft the best approach to accessing historical data.
- In spite of not being an archive, you will occasionally want to bound some responses using the isCurrent operator, such as when you request to see an [Organization’s current employees broken out by gender](https://app.diffbot.com/search/?query=type%3APerson+employments.%7BisCurrent%3Atrue+employer.name%3A%22Facebook%22%7D+facet%3Agender&from=0&size=50&active_tab=query).
- You will be tempted to insert Boolean operators, i.e. AND, OR, etc. Don’t do it! We use a query language similar to SQL to search entities and facts contained within the graph called the Diffbot Query Language (DQL), but we do not support boolean operators as you know and love them.
- You will be searching one data type at a time, e.g. Organizations vs. Articles. You cannot query, constrain, or facet across data types.
- As you become more familiar with the KG, you might want to leverage a Diffbot unique identifier to constrain your search to a specific entity id vs. all of the text matches on the name of that entity, for example, [all articles tagged Walmart](https://app.diffbot.com/search/?query=type%3AArticle+tags.uri%3A%22https%3A%2F%2Fdiffbot.com%2Fentity%2FCbb6m73dsMIKecUn0QRHosw%22+sortBy%3Adate&from=0&size=50&active_tab=query).

We’ve assembled some canned searches to help get you started. There is also a [query building tool](https://app.diffbot.com/search/) in the [Developer Dashboard](tutorials-new-dashboard) you can leverage if you get stuck.

## Log into the Diffbot Dashboard

1. First, open a browser window and navigate to [https://app.diffbot.com/](https://app.diffbot.com/).
2. If you don't have login credentials for Knowledge Graph already, please [sign up here](https://www.diffbot.com/plans/kgtrial).
3. Once you are logged in, leave the browser window open. You will be able to click the links below to view the results of each search in the Dashboard.

Click here first, after you’ve logged in to the Dashboard: [Articles containing the text "2020 Presidential Race", sorted by date](https://app.diffbot.com/search/?query=type%3AArticle+text%3A%222020+Presidential+Race%22+sortBy%3Adate&from=0&size=50&active_tab=query)

## General Queries

- [type:Article pageUrl:"techcrunch.com" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+pageUrl%3A%22techcrunch.com%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles published to TechCrunch.com, sorted by date.
- [type:Article title:"Facebook" title:"Privacy" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+title%3A%22Facebook%22+title%3A%22Privacy%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles with Facebook and Privacy in the title, sorted by date.
- [type:Article title:"khashoggi" not(pageUrl:"nytimes.com") sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+title%3A%22khashoggi%22+not%28pageUrl%3A%22nytimes.com%22%29+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles with khashoggi in the title, NOT published to nytimes.com, sorted by date.
- [type:Person employments.categories.name:"politics" facet:employments.title](https://app.diffbot.com/search/?query=type%3APerson+employments.categories.name%3A%22politics%22+facet%3Aemployments.title&from=0&size=50&active_tab=query)
    - Search for people, employed by Organizations categorized as "political", clustered by job title.
- [type:Article date.timestamp>=1561986000 sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+date.timestamp%3E%3D1561986000+&from=0&size=50&active_tab=query)
    - Search for articles published on or after a specific date (Unix epoch timestamp, GMT July 1, 2019)
- [type:Article quotes.speaker:"Joe Biden" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+quotes.speaker%3A%22Joe+Biden%22+sortBy%3Adate&from=0&size=50&active_tab=visual)
    - Search for articles with a quote from Joe Biden
- [type:Person has:articles](https://app.diffbot.com/search/?query=type%3APerson+has%3Aarticles&from=0&size=50&active_tab=query)
    - Search for people who have written published articles (direct attribution)

## 2020 Presidential Campaign Related Queries

- [type:Article text:"2020 Presidential Race" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+text%3A%222020+Presidential+Race%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles whose text includes "2020 Presidential Race", sorted by date
- [type:Article title:"Michael Bloomberg" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+title%3A%22Michael+Bloomberg%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search articles with "Michael Bloomberg" in the title.
- [type:Article tags.label:"health care" text:"universal coverage" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+tags.label%3A%22health+care%22+text%3A%22universal+coverage%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search articles tagged health care with the phrase "universal coverage" in the text sorted by date.
- [type:Article tags.label:"US immigration" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+tags.label%3A%22US+immigration%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles tagged US immigration sorted by date.
- [type:Article tags.label:"environment" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+tags.label%3A%22environment%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles tagged environment sorted by date
- [type:Article tags.label:"US foreign policy" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+tags.label%3A%22US+foreign+policy%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles tagged US foreign policy sorted by date
- [type:Article tags.label:"privacy" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+tags.label%3A%22privacy%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles tagged privacy sorted by date
- [type:Article tags.label:"campaign finance" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+tags.label%3A%22campaign+finance%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles tagged campaign finance sorted by date
- [type:Organization strict:name:"Democratic National Committee"](https://app.diffbot.com/search/?query=type%3AOrganization+strict%3Aname%3A%22Democratic+National+Committee%22&from=0&size=50&active_tab=query)
    - Search for organization information about the Democratic National Committee
- [type:Organization strict:name:"Republican National Committee"](https://app.diffbot.com/search/?query=type%3AOrganization+strict%3Aname%3A%22Republican+National+Committee%22&from=0&size=50&active_tab=query)
    - Search for organization information about the Republican National Committee

## Additional Query Examples

### Article Searches

- [type:Article tags.label:"Artificial Intelligence" sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+tags.label%3A%22Artificial+Intelligence%22+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles tagged with the label “Artificial Intelligence” sorted by date.
- [type:Article tags.label:"Washington D.C."](https://app.diffbot.com/search/?query=type%3AArticle+tags.label%3A%22Washington+D.C.%22&from=0&size=50&active_tab=query)
    - Search for articles tagged with the location “Washington D.C.”
- [type:Article text:"data privacy" text:or("Google" , "Amazon" , "Facebook") sortBy:date](https://app.diffbot.com/search/?query=type%3AArticle+text%3A%22data+privacy%22+text%3Aor%28%22Google%22+%2C+%22Amazon%22+%2C+%22Facebook%22%29+sortBy%3Adate&from=0&size=50&active_tab=query)
    - Search for articles whose text contains the phrase “data privacy” AND either the text Google, Amazon OR Facebook.

### Organization Searches

- [type:Organization name:"Gap" location.country.name:"United States" categories.name:"Clothing" has:homepageUri facet:location.city.name](https://app.diffbot.com/search/?query=type%3AOrganization+name%3A%22Gap%22+location.country.name%3A%22United+States%22+categories.name%3A%22Clothing%22+has%3AhomepageUri+facet%3Alocation.city.name&from=0&size=50&active_tab=query)
    - Search for a list of Gap locations in the US clustered by city name.
- [type:Corporation has:logo](https://app.diffbot.com/search/?query=type%3ACorporation+has%3Alogo&from=0&size=50&active_tab=query)
    - Search for a list of company entities with official company logos.

### Person Searches

- [type:Person employments.{isCurrent:true employer.name:"Facebook"} facet:gender](https://app.diffbot.com/search/?query=type%3APerson+employments.%7BisCurrent%3Atrue+employer.name%3A%22Facebook%22%7D+facet%3Agender&from=0&size=50&active_tab=query)
    - Display a breakout of current Facebook employees by gender.
- [type:Person facet:skills.name employments.{isCurrent:true employer.location.address:"California"}](https://app.diffbot.com/search/?query=type%3APerson+facet%3Askills.name+employments.%7BisCurrent%3Atrue+employer.location.address%3A%22California%22%7D&from=0&size=50&active_tab=query)
    - Display a breakout of people in CA broken out by skill.
