---
id: kg-ont-article
title: Article
---

The article entity type encompasses news, blog posts, and content that fit the &#39;Article&#39; archetype.

>New to the Diffbot Knowledge Graph? [Start here](kg-quickstart).

## Article Fields
* [date](#date) 
* [nextPages](#nextpages) 
* [sentiment](#sentiment) 
* [images](#images) 
* [author](#author) 
* [nextPage](#nextpage) 
* [publisherRegion](#publisherregion) 
* [icon](#icon) 
* [estimatedDate](#estimateddate) 
* [siteName](#sitename) 
* [language](#language) 
* [videos](#videos) 
* [discussion](#discussion) 
* [title](#title) 
* [tags](#tags) 
* [quotes](#quotes) 
* [publisherCountry](#publishercountry) 
* [numPages](#numpages) 
* [breadcrumb](#breadcrumb) 
* [authorUrl](#authorurl) 
* [html](#html) 
* [text](#text) 

## Article Field Details

### date

* **Type:** DDateTime
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### nextPages

* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### sentiment
Sentiment of the article. Positive sentiments have positive values and negative sentiments have a negative value.
* **Type:** Double
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### images

* **Type:** GlobalIndexImage
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### author

* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### nextPage

* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### publisherRegion

* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### icon

* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### estimatedDate

* **Type:** DDateTime
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### siteName

* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### language
Refers to the language in which an Article is written
* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### videos

* **Type:** GlobalIndexVideo
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### discussion

* **Type:** GIDiscussionField
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### title
Title of the Article
* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### tags
Array of tags&#x2F;entities, generated from analysis of the extracted text and cross-referenced with DBpedia and other data sources. Language-specific tags will be returned if the source text is in English, Chinese, French, German, Spanish or Russian.
* **Type:** GlobalIndexTag
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### quotes
Returns quotes found in the article text and who said them. For English-language text only
* **Type:** GlobalIndexQuote
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### publisherCountry

* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### numPages

* **Type:** Integer
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### breadcrumb

* **Type:** GlobalIndexBreadcrumb
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### authorUrl

* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### html

* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
### text

* **Type:** String
* **Example:**
```
{
    "str": "d2021-01-12T20:14:38",
    "precision": 4,
    "timestamp": 1610482478000
}
```
