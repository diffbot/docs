---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: kg-ont-image
title: Image
generatedBy: generateOntology.js
---

The Image entity type encompasses images found throughout the web and known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Image Fields
* [anchorUrl](#anchorurl) 
* [breadcrumb](#breadcrumb) 
* [crawlTimestamp](#crawltimestamp) 
* [diffbotUri](#diffboturi) 
* [displayHeight](#displayheight) 
* [displayWidth](#displaywidth) 
* [id](#id) 
* [language](#language) 
* [links](#links) 
* [naturalHeight](#naturalheight) 
* [naturalWidth](#naturalwidth) 
* [pageUrl](#pageurl) 
* [resolvedPageUrl](#resolvedpageurl) 
* [tags](#tags) 
* [title](#title) 
* [type](#type) 
* [types](#types) 
* [url](#url) 
* [xpath](#xpath) 

## Image Field Details
Note that certain longer field examples may be truncated for readability.

### anchorUrl
  Points to an anchor within a page (like &#x60;href&#x3D;&quot;#top&quot;&#x60;)
* **Type:** String
* **Example:**
```
{
	"anchorUrl": ""
}
```
### breadcrumb
  Graphical control element frequently used as a navigational aid; Returns a top-level array of URLs and link text from page breadcrumbs
* **Type:** GlobalIndexBreadcrumb
* **Example:**
```
{
	"breadcrumb": [
		{
			"link": "",
			"name": ""
		}
	]
}
```
### crawlTimestamp
  Last time a site was crawled&#x2F;indexed
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 1700198633
}
```
### diffbotUri
  diffbotUri is a combination of an entityID and a corresponding web address or uniform resource identifier (URI), which is defined by appending the entityID to the URL https:&#x2F;&#x2F;www.diffbot.com&#x2F;entity&#x2F;. For example, Diffbot&#39;s entityID is CWSwJ_SWQPfqO3HQsxY4lGg and its DiffbotUri is https:&#x2F;&#x2F;www.diffbot.com&#x2F;entity&#x2F;CWSwJ_SWQPfqO3HQsxY4lGg
* **Type:** String
* **Example:**
```
{
	"diffbotUri": "http://diffbot.com/entity/IMG62073555748"
}
```
### displayHeight
  Height of image as presented in the browser (and as sized via browser&#x2F;CSS, if resized)
* **Type:** Integer
* **Example:**
```
{
	"displayHeight": 0
}
```
### displayWidth
  Width of image as presented in the browser (and as sized via browser&#x2F;CSS, if resized)
* **Type:** Integer
* **Example:**
```
{
	"displayWidth": 0
}
```
### id
  Each entity in the Diffbot KnowledgeGraph (DKG) is identified by a unique identifier, an alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies that entity. The id is directly derived from the most authoritative origin from the origins array.
* **Type:** String
* **Example:**
```
{
	"id": "IMG62073555748"
}
```
### language
  
* **Type:** String
* **Example:**
```
{
	"language": ""
}
```
### links
  
* **Type:** String
* **Example:**
```
{
	"links": ""
}
```
### naturalHeight
  Raw image height, in pixels
* **Type:** Integer
* **Example:**
```
{
	"naturalHeight": 3417
}
```
### naturalWidth
  Raw image width in pixels
* **Type:** Integer
* **Example:**
```
{
	"naturalWidth": 3418
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
### resolvedPageUrl
  Returned if the pageUrl redirects to another URL
* **Type:** String
* **Example:**
```
{
	"resolvedPageUrl": ""
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
  Title of the Image
* **Type:** String
* **Example:**
```
{
	"title": "Mike Tung of Diffbot"
}
```
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": "Image"
}
```
### types
  There are tags.types which can only refer to dbpedia rdf types, while there are also the general DiffbotEntity types which is just an array of all the types an object belongs to. For instance a LocalBusiness would have &#x60;types:[&quot;Organization&quot;,&quot;LocalBusiness&quot;]&#x60; Finally, there are types that indicate a belonging to a subgroup such as business vs personal email address.
* **Type:** String
* **Example:**
```
{
	"types": [
		"Image"
	]
}
```
### url
  URL of the image
* **Type:** String
* **Example:**
```
{
	"url": "https://imageio.forbes.com/specials-images/imageserve/5cd587b85ea6490008c81044/Mike-Tung-of-Diffbot/0x0.jpg?format=jpg&crop=3418,3417,x470,y0,safe&height=3417&width=3418"
}
```
### xpath
  XPath expression identifying the image node
* **Type:** String
* **Example:**
```
{
	"xpath": ""
}
```
