---
id: kg-search-advanced
title: Advanced Techniques with the Knowledge Graph
sidebar_label: Advanced Techniques
---

This guide will take you through advanced search techniques with the Dashboard. Unlike the quickstart guide, each section (apart from the [primer](kg-search-advanced#primer-on-dql)) stands alone and the guide itself does not need to be read top to bottom. 

Feel free to browse and skip to techniques of interest in the sub-navigation to the right of this page.

## Pre-Requisites
- Completed the [Quickstart guide](kg-search-quickstart) (or comfortable running Knowledge Graph searches on the Dashboard)
- A Diffbot Account (trial or paid)

## Primer on DQL
DQL is short for Diffbot Query Language, a query language similar to SQL and adapted from Elasticsearch. It is an incredibly powerful way to generate searches that would be difficult or impossible to do with the visual builder alone. 

To execute many of the advanced searches referenced throughout this guide, you will first need to switch your search view from `Visual` to `Query`, this will switch the visual builder to a single field for DQL to be entered.

![Search DQL Query](/img/kg/search-query.png)

DQL queries generally start with a type declaration. 

```py
type:Article
```

Running a search with this DQL will return every article we have in the Knowledge Graph (Try it! It won't break anything.) We can narrow this search down to just a particular field by entering the field name followed by the value of the field in quotes.

```py
type:Article tags.label:"Zoom Video Communications"
```

Note that we cannot simply write `tags:"Zoom Video Communications"` because the `tags` field is a lot more than just a name. See the [ontology for a complete reference](kg-ont-article#tags) of its subfields. 

Narrow your search even further by adding more fields separated by a space. Each new field narrows down the resulting dataset by matching the filter to the field-value pair of each entity record. In other words, you can think of each new field-value pair added as a series of conditions in this format `field-value AND field-value AND field-value`.

```py
type:Article tags.label:"Zoom Video Communications" text:"Eric Yuan"
```

The guides on this page will follow this format throughout with DQL examples that can be copied and pasted into the DQL field on the Dashboard. 

That's all we need to know for the techniques on this page. See our [complete DQL reference](dql-index) for even more details, or check out the techniques below for more ways to craft your DQL search.

## Article Techniques

### Find Only Positive (or Negative) Sentiment Articles
The sentiment of an article is a numerical score given by Diffbot's [Natural Language]() model on a scale of -1 to 1. Articles with scores below 0 are more negative than articles with scores above 0. Scores on the extreme ends of -1 or 1 are considered to be respectively more negative or positive. 

Leveraging sentiment with articles allows for programmatic aggregation of "good" vs. "bad" news and is employed for a variety of applications such as algorithmic trading.

Filtering articles down by sentiment is quite simple to do because sentiment is a [standard field](kg-ont-article#sentiment) on nearly all article records. Let's start with a basic tag search we've done before:

```py
type:Article tags.label:"racism"
```

To filter this query by positive sentiment only, we add the sentiment field and set it to any value above 0.

```py
type:Article tags.label:"racism" sentiment>0 
```

Vice versa for negative sentiment

```py
type:Article tags.label:"racism" sentiment<0 
```

We can also dial in to exactly how much more positive of an article we'd like

```py
type:Article tags.label:"racism" sentiment>0.5
```

Or specifically identify strictly neutral articles

```py
type:Article tags.label:"racism" sentiment:0
```

#### 💥 Try This
It is quite possible for an article to reflect positive sentiment overall, but negative sentiment for a specific company, person, or thing. Press releases for example are almost always positive overall, but might mention one or two underperforming products or departments.

In the Diffbot Knowledge Graph, each tag on an article record also includes a sentiment score. This guarantees that our search will filter down to just articles reflecting the specified sentiment for the specified tag. Here's how you do it.

```py
type:Article tags.{label:"racism" sentiment>0}
```

The curly bracket syntax seen here is called a [nested query](dql-index#nested-query). It works by explicitly specifying two or more subfield-value pairs (label and sentiment) of a shared parent field (one tag of the list of tags). This syntax will work with any list field containing subfields.

The written logic executed with this query is as follows: "Look for articles with tags labeled 'racism' that also have a positive sentiment score attached to that tag". 

### Find Articles in a Period of Time

Every article contains a [date field](kg-ont-article#date) that we can filter searches by. The format of this date field might seem complicated, but there are quite a few shortcuts to querying for dates. Let's start with a basic tag search:

```py
type:Article tags.label:"COVID-19"
```

Here's how we'd find articles referencing COVID-19 in February 2020

```py
type:Article tags.label:"COVID-19" date>="02-01-2020" date<="02-28-2020"
```

This method of querying for dates is called a date literal and follows a MM-DD-YYYY pattern (other [standard date literal patterns](](dql-index#querying-for-dates)) are supported too). 

We can also query by relative date representations. Here is how we'd look for COVID-19 articles published within the last 30 days.

```py
type:Article tags.label:"COVID-19" date<30d
```

This is called a [time period literal](dql-index#querying-for-dates). We can also use `s` for seconds, `m` for minutes, `h` for hours, `w` for weeks, and `y` for 365 days. A search for articles published before a week ago would look like this:

```py
type:Article tags.label:"COVID-19" date>1w
```

### Summarize an Article Search By Tags
An incredibly unique way to glean insights from massive datasets in Diffbot is a summarization technique called [faceting](dql-index#facets). This DQL method summarizes a search by a specific field, producing a table of field-value pairs and ranks them by occurrences in the original dataset. 

With articles, this technique can be used with the tags field to quickly interpret the high level topics discussed in a set of articles, or find related tags discussed alongside a specific tag. Here's how it works. 

Let's start with a search for articles mentioning Joe Biden 

```py
type:Article tags.label:"Joe Biden"
```

We can summarize this search by tags with the facet method

```py
type:Article tags.label:"Joe Biden" facet:tags.label
```

Note that we're faceting not just by `tags`, but by `tags.label` because each tag in a list of tags is an [object with several other subfields](kg-ont-article#tags). This will return a summarization table of all tags mentioned in this query. 

A helpful data analysis technique when faceting by tag is to compare the results of key topics from one week to the next.

Here is a a summary of key topics in the press during President Joe Biden's inauguration week

```py
type:Article tags.label:"Joe Biden" date>="01-17-2021" date<="01-23-2021" facet:tags.label
```

We can compare that to the week following his inauguration

```py
type:Article tags.label:"Joe Biden" date>="01-24-2021" date<="01-30-2021" facet:tags.label
```

Most of the evergreen tags continue to dominate the top results, but it's curious to see certain tags drop further down or up in rank. I'll leave the discovery to you. 

## Organization Techniques

### Find Public Companies Founded After 2018



### Find Top Employers of Data Scientists

## Person Techniques

### Summarize the Top Roles in an Organization

### Find People Who Worked at an Organization in 2019
A simple question requiring a deceptively complex query. Let's start with a query of marketers who have worked at a [beloved Texas grocery chain](https://www.washingtonpost.com/lifestyle/2021/02/19/texas-heb-lost-power/) at some point in their careers:

```py
type:Person employments.{employer.name:"H-E-B" title:"Marketing"}
```

The curly bracket syntax seen here is called a [nested query](dql-index#nested-query). It works by explicitly specifying two or more subfield-value pairs (`employer.name` and `title`) of a shared parent field (one employment of the list of `employments`). Without the nested query, we would not be explicitly indicating that someone worked at HEB and was also in a marketing role there. This syntax will work with any list field containing subfields.

Next, we'll look for employment dates ranging from Jan 1, 2019 to Dec 31, 2019

```py
type:Person employments.{employer.name:"H-E-B" title:"Marketing" from>="2019-01-01" to<="2019-12-31"}
```

But wait a minute. That's not quite right. What about people who started working at H-E-B before 2019? 

```py
type:Person employments.{employer.name:"H-E-B" title:"Marketing" or(from>="2019-01-01", from<="2019-01-01") to<="2019-12-31"}
```