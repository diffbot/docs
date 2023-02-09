---
id: kg-ont-creativework
title: CreativeWork
generatedBy: generateOntology.js
---

The Creative Work entity type encompasses movies, tv shows, musicals, scripts, and other creative works known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## CreativeWork Fields
* [authors](#authors) 
* [imdbUri](#imdburi) 
* [musicbrainzUri](#musicbrainzuri) 
* [parentTitle](#parenttitle) 

## CreativeWork Field Details
Note that certain longer field examples may be truncated for readability.

### authors
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"authors": [
		{
			"summary": "",
			"image": "",
			"images": [
				{
					"classifications": "",
					"fingerprint": "",
					"title": "",
					"isCached": false,
					"url": ""
				}
			],
			"types": "",
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
		}
	]
}
```
### imdbUri
  Link to the IMDB profile of this entity
* **Type:** URL
* **Example:**
```
{
	"imdbUri": "imdb.com/title/tt0364151"
}
```
### musicbrainzUri
  Link to the Musicbrainz profile of this entity
* **Type:** URL
* **Example:**
```
{
	"musicbrainzUri": ""
}
```
### parentTitle
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"parentTitle": {
		"summary": "",
		"image": "",
		"images": [
			{
				"classifications": "",
				"fingerprint": "",
				"title": "",
				"isCached": false,
				"url": ""
			}
		],
		"types": "",
		"websiteUris": "",
		"diffbotUri": "",
		"name": "",
		"targetDiffbotUri": "",
		"surfaceForm": ""
	}
}
```
