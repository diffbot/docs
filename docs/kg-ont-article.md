---
id: kg-ont-article
title: Article
---

The article entity type encompasses news, blog posts, and article content known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](kg-quickstart).

## Article Fields
* [author](#author) 
* [authorUrl](#authorurl) 
* [breadcrumb](#breadcrumb) 
* [date](#date) 
* [discussion](#discussion) 
* [estimatedDate](#estimateddate) 
* [html](#html) 
* [icon](#icon) 
* [images](#images) 
* [language](#language) 
* [nextPage](#nextpage) 
* [nextPages](#nextpages) 
* [numPages](#numpages) 
* [publisherCountry](#publishercountry) 
* [publisherRegion](#publisherregion) 
* [quotes](#quotes) 
* [sentiment](#sentiment) 
* [siteName](#sitename) 
* [tags](#tags) 
* [text](#text) 
* [title](#title) 
* [videos](#videos) 

## Article Field Details

### author
  
* **Type:** String
* **Example:**
```
{
	"author": ""
}
```
### authorUrl
  
* **Type:** String
* **Example:**
```
{
	"authorUrl": ""
}
```
### breadcrumb
  
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
### discussion
  
* **Type:** GIDiscussionField
* **Example:**
```
{
	"discussion": {
		"nextPages": "",
		"numPages": 0,
		"provider": "",
		"nextPage": "",
		"language": "",
		"numPosts": 0,
		"title": "",
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
						"naturalWidth": 0
					}
				],
				"author": "",
				"authorUrl": "",
				"language": "",
				"html": "",
				"pageUrl": "",
				"id": 0,
				"text": ""
			}
		],
		"numParticipants": 0,
		"tags": [
			{
				"score": "",
				"sentiment": "",
				"types": "",
				"count": 0,
				"label": "",
				"uri": ""
			}
		],
		"rssUrl": ""
	}
}
```
### estimatedDate
  
* **Type:** DDateTime
* **Example:**
```
{
	"estimatedDate": {
		"str": "",
		"precision": 0,
		"timestamp": 0
	}
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
### icon
  
* **Type:** String
* **Example:**
```
{
	"icon": ""
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
			"naturalWidth": 0
		}
	]
}
```
### language
  Refers to the language in which an Article is written
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
### publisherCountry
  
* **Type:** String
* **Example:**
```
{
	"publisherCountry": ""
}
```
### publisherRegion
  
* **Type:** String
* **Example:**
```
{
	"publisherRegion": ""
}
```
### quotes
  Returns quotes found in the article text and who said them. For English-language text only
* **Type:** GlobalIndexQuote
* **Example:**
```
{
	"quotes": [
		{
			"speakerUri": "",
			"quote": "",
			"speaker": ""
		}
	]
}
```
### sentiment
  Sentiment of the article. Positive sentiments have positive values and negative sentiments have a negative value.
* **Type:** Double
* **Example:**
```
{
	"sentiment": ""
}
```
### siteName
  
* **Type:** String
* **Example:**
```
{
	"siteName": ""
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
### text
  
* **Type:** String
* **Example:**
```
{
	"text": ""
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
### videos
  
* **Type:** GlobalIndexVideo
* **Example:**
```
{
	"videos": [
		{
			"embedUrl": "",
			"date": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
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
					"naturalWidth": 0
				}
			],
			"author": "",
			"mime": "",
			"naturalHeight": 0,
			"language": "",
			"title": "",
			"url": "",
			"naturalWidth": 0,
			"duration": 0,
			"html": "",
			"text": "",
			"viewCount": 0
		}
	]
}
```
