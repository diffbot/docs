---
id: kg-ont-discussion
title: Discussion
---

The Discussion entity type encompasses forum and other similar discussions found throughout the web and known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Discussion Fields
* [language](#language) 
* [nextPage](#nextpage) 
* [nextPages](#nextpages) 
* [numPages](#numpages) 
* [numParticipants](#numparticipants) 
* [numPosts](#numposts) 
* [posts](#posts) 
* [provider](#provider) 
* [rssUrl](#rssurl) 
* [tags](#tags) 
* [title](#title) 

## Discussion Field Details
Note that certain longer field examples may be truncated for readability.

### language
  Refers to the language which a Discussion is written
* **Type:** String
* **Example:**
```
{
	"language": ""
}
```
### nextPage
  If discussion spans multiple pages, nextPage will return the subsequent page URL
* **Type:** String
* **Example:**
```
{
	"nextPage": ""
}
```
### nextPages
  Array of all page URLs concatenated in a multipage discussion
* **Type:** String
* **Example:**
```
{
	"nextPages": ""
}
```
### numPages
  
* **Type:** Integer
* **Example:**
```
{
	"numPages": 0
}
```
### numParticipants
  Number of unique participants in the discussion thread or comments
* **Type:** Integer
* **Example:**
```
{
	"numParticipants": 0
}
```
### numPosts
  
* **Type:** Integer
* **Example:**
```
{
	"numPosts": 0
}
```
### posts
  
* **Type:** DiscussionPost
* **Example:**
```
{
	"posts": []
}
```
### provider
  
* **Type:** String
* **Example:**
```
{
	"provider": ""
}
```
### rssUrl
  
* **Type:** String
* **Example:**
```
{
	"rssUrl": ""
}
```
### tags
  Array of tags&#x2F;entities, generated from analysis of the extracted text and cross-referenced with DBpedia and other data sources. Language-specific tags will be returned if the source text is in English, Chinese, French, German, Spanish or Russian.
* **Type:** GlobalIndexTag
* **Example:**
```
{
	"tags": []
}
```
### title
  Title of the Article
* **Type:** String
* **Example:**
```
{
	"title": ""
}
```
