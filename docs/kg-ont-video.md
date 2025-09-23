---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: kg-ont-video
title: Video
generatedBy: generateOntology.js
---

The Video entity type encompasses videos found throughout the web and known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Video Fields
* [author](#author) 
* [crawlTimestamp](#crawltimestamp) 
* [date](#date) 
* [diffbotUri](#diffboturi) 
* [duration](#duration) 
* [embedUrl](#embedurl) 
* [html](#html) 
* [id](#id) 
* [images](#images) 
* [language](#language) 
* [mime](#mime) 
* [naturalHeight](#naturalheight) 
* [naturalWidth](#naturalwidth) 
* [pageUrl](#pageurl) 
* [resolvedPageUrl](#resolvedpageurl) 
* [text](#text) 
* [title](#title) 
* [type](#type) 
* [types](#types) 
* [url](#url) 
* [viewCount](#viewcount) 

## Video Field Details
Note that certain longer field examples may be truncated for readability.

### author
  
* **Type:** String
* **Example:**
```
{
	"author": ""
}
```
### crawlTimestamp
  Last time a site was crawled&#x2F;indexed
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 1745910773
}
```
### date
  
* **Type:** DDateTime
* **Example:**
```
{
	"date": {
		"str": "",
		"precision": 0,
		"timestamp": 0
	}
}
```
### diffbotUri
  diffbotUri is a combination of an entityID and a corresponding web address or uniform resource identifier (URI), which is defined by appending the entityID to the URL https:&#x2F;&#x2F;www.diffbot.com&#x2F;entity&#x2F;. For example, Diffbot&#39;s entityID is CWSwJ_SWQPfqO3HQsxY4lGg and its DiffbotUri is https:&#x2F;&#x2F;www.diffbot.com&#x2F;entity&#x2F;CWSwJ_SWQPfqO3HQsxY4lGg
* **Type:** String
* **Example:**
```
{
	"diffbotUri": "http://diffbot.com/entity/VID199193048060"
}
```
### duration
  
* **Type:** Integer
* **Example:**
```
{
	"duration": 0
}
```
### embedUrl
  
* **Type:** String
* **Example:**
```
{
	"embedUrl": ""
}
```
### html
  
* **Type:** String
* **Example:**
```
{
	"html": ""
}
```
### id
  Each entity in the Diffbot KnowledgeGraph (DKG) is identified by a unique identifier, an alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies that entity. The id is directly derived from the most authoritative origin from the origins array.
* **Type:** String
* **Example:**
```
{
	"id": "VID199193048060"
}
```
### images
  
* **Type:** GlobalIndexImage
* **Example:**
```
{
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
	]
}
```
### language
  
* **Type:** String
* **Example:**
```
{
	"language": "zh"
}
```
### mime
  Indicates the nature and format of a document; MIME type, if available, as specified by the Video&#39;s &#x60;Content-Type.&#x60;
* **Type:** String
* **Example:**
```
{
	"mime": ""
}
```
### naturalHeight
  
* **Type:** Integer
* **Example:**
```
{
	"naturalHeight": 0
}
```
### naturalWidth
  
* **Type:** Integer
* **Example:**
```
{
	"naturalWidth": 0
}
```
### pageUrl
  URL of submitted page &#x2F; page from which the entity is extracted
* **Type:** String
* **Example:**
```
{
	"pageUrl": "https://blog.csdn.net/cgsayuclv/article/details/144147799"
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
### text
  
* **Type:** String
* **Example:**
```
{
	"text": ""
}
```
### title
  Title of the Video
* **Type:** String
* **Example:**
```
{
	"title": "利用Diffbot Extract API提取和处理网页数据的完整指南-CSDN博客"
}
```
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": "Video"
}
```
### types
  There are tags.types which can only refer to dbpedia rdf types, while there are also the general DiffbotEntity types which is just an array of all the types an object belongs to. For instance a LocalBusiness would have &#x60;types:[&quot;Organization&quot;,&quot;LocalBusiness&quot;]&#x60; Finally, there are types that indicate a belonging to a subgroup such as business vs personal email address.
* **Type:** String
* **Example:**
```
{
	"types": [
		"Video"
	]
}
```
### url
  URL of the video
* **Type:** String
* **Example:**
```
{
	"url": ""
}
```
### viewCount
  
* **Type:** Integer
* **Example:**
```
{
	"viewCount": 0
}
```
