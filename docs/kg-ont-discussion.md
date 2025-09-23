---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: kg-ont-discussion
title: Discussion
generatedBy: generateOntology.js
---

The Discussion entity type encompasses forum and other similar discussions found throughout the web and known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Discussion Fields
* [crawlTimestamp](#crawltimestamp) 
* [diffbotUri](#diffboturi) 
* [id](#id) 
* [language](#language) 
* [nextPage](#nextpage) 
* [nextPages](#nextpages) 
* [numPages](#numpages) 
* [numParticipants](#numparticipants) 
* [numPosts](#numposts) 
* [pageUrl](#pageurl) 
* [posts](#posts) 
* [provider](#provider) 
* [resolvedPageUrl](#resolvedpageurl) 
* [rssUrl](#rssurl) 
* [tags](#tags) 
* [title](#title) 
* [type](#type) 
* [types](#types) 

## Discussion Field Details
Note that certain longer field examples may be truncated for readability.

### crawlTimestamp
  Last time a site was crawled&#x2F;indexed
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 0
}
```
### diffbotUri
  diffbotUri is a combination of an entityID and a corresponding web address or uniform resource identifier (URI), which is defined by appending the entityID to the URL https:&#x2F;&#x2F;www.diffbot.com&#x2F;entity&#x2F;. For example, Diffbot&#39;s entityID is CWSwJ_SWQPfqO3HQsxY4lGg and its DiffbotUri is https:&#x2F;&#x2F;www.diffbot.com&#x2F;entity&#x2F;CWSwJ_SWQPfqO3HQsxY4lGg
* **Type:** String
* **Example:**
```
{
	"diffbotUri": ""
}
```
### id
  Each entity in the Diffbot KnowledgeGraph (DKG) is identified by a unique identifier, an alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies that entity. The id is directly derived from the most authoritative origin from the origins array.
* **Type:** String
* **Example:**
```
{
	"id": ""
}
```
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
### pageUrl
  URL of submitted page &#x2F; page from which the entity is extracted
* **Type:** String
* **Example:**
```
{
	"pageUrl": ""
}
```
### posts
  
* **Type:** DiscussionPost
* **Example:**
```
{
	"posts": [
		{
			"date": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"sentiment": "",
			"images": [
				{
					"displayHeight": 0,
					"xpath": "",
					"breadcrumb": [
						{
							"link": "",
							"name": ""
						}
					],
					"displayWidth": 0,
					"naturalHeight": 0,
					"language": "",
					"links": "",
					"anchorUrl": "",
					"title": "",
					"url": "",
					"naturalWidth": 0,
					"tags": [
						{
							"score": "",
							"sentiment": "",
							"types": "",
							"count": 0,
							"label": "",
							"uri": ""
						}
					]
				}
			],
			"author": "",
			"authorUrl": "",
			"language": "",
			"html": "",
			"pageUrl": "",
			"text": ""
		}
	]
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
### resolvedPageUrl
  Returned if the pageUrl redirects to another URL
* **Type:** String
* **Example:**
```
{
	"resolvedPageUrl": ""
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
	"tags": [
		{
			"score": "",
			"sentiment": "",
			"types": "",
			"count": 0,
			"label": "",
			"uri": ""
		}
	]
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
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": ""
}
```
### types
  There are tags.types which can only refer to dbpedia rdf types, while there are also the general DiffbotEntity types which is just an array of all the types an object belongs to. For instance a LocalBusiness would have &#x60;types:[&quot;Organization&quot;,&quot;LocalBusiness&quot;]&#x60; Finally, there are types that indicate a belonging to a subgroup such as business vs personal email address.
* **Type:** String
* **Example:**
```
{
	"types": ""
}
```
