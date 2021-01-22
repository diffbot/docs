---
id: kg-ont-video
title: Video
---

The Video entity type encompasses videos found throughout the web and known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Video Fields
* [author](#author) 
* [date](#date) 
* [duration](#duration) 
* [embedUrl](#embedurl) 
* [html](#html) 
* [images](#images) 
* [language](#language) 
* [mime](#mime) 
* [naturalHeight](#naturalheight) 
* [naturalWidth](#naturalwidth) 
* [text](#text) 
* [title](#title) 
* [url](#url) 
* [viewCount](#viewcount) 

## Video Field Details
Note that certain longer field examples may be truncated for readability in these docs. 

### author
  
* **Type:** String
* **Example:**
```
{
	"author": ""
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
  
* **Type:** String
* **Example:**
```
{
	"language": ""
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
	"title": ""
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
