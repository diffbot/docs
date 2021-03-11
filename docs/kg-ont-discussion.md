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
  
* **Type:** String
* **Example:**
```
{
	"language": ""
}
```
### nextPage
  
* **Type:** String
* **Example:**
```
{
	"nextPage": ""
}
```
### nextPages
  
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
  
* **Type:** GlobalIndexTag
* **Example:**
```
{
	"tags": []
}
```
### title
  
* **Type:** String
* **Example:**
```
{
	"title": ""
}
```
