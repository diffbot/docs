---
id: kg-ont-JobPost
title: Job Post
generatedBy: generateOntology.js
---

The Job Post entity type encompasses all job postings found throughout the web and known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Job Post Fields
* [date](#date) 
* [employer](#employer) 
* [jobCategories](#jobcategories) 
* [language](#language) 
* [locations](#locations) 
* [remote](#remote) 
* [requirements](#requirements) 
* [skills](#skills) 
* [tasks](#tasks) 

## Job Post Field Details
Note that certain longer field examples may be truncated for readability.

### date
  The date when this job is posted online
* **Type:** DDate
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
### employer
  The employer of this job
* **Type:** LinkedEntity
* **Example:**
```
{
	"employer": {
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
### jobCategories
  Employment categories for this job post. See the taxonomy &#x60;Employment Categories&#x60; for possible values.
* **Type:** LinkedEntity
* **Example:**
```
{
	"jobCategories": [
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
### language
  Refers to the humanLanguage in which a Job is written
* **Type:** Language
* **Example:**
```
{
	"language": {}
}
```
### locations
  Locations of the jobs
* **Type:** Location
* **Example:**
```
{
	"locations": [
		{
			"venue": "",
			"country": {
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
			},
			"address": "",
			"city": {
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
			},
			"subregion": {
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
			},
			"latitude": "",
			"precision": "",
			"postalCode": "",
			"surfaceForm": "",
			"poBox": "",
			"isCurrent": false,
			"isPrimary": false,
			"street": "",
			"metroArea": {
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
			},
			"region": {
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
			},
			"rawAdministrativeArea": {
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
			},
			"longitude": ""
		}
	]
}
```
### remote
  whether this job is remote, possible values: {REMOTE, NOT_REMOTE, HYBRID, UNDEFINED}
* **Type:** Remote
* **Example:**
```
{
	"remote": {}
}
```
### requirements
  Description of the job
* **Type:** String
* **Example:**
```
{
	"requirements": ""
}
```
### skills
  The list of required skills for this job post
* **Type:** LinkedEntity
* **Example:**
```
{
	"skills": [
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
### tasks
  Description of the job
* **Type:** String
* **Example:**
```
{
	"tasks": ""
}
```
