---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: kg-ont-JobPost
title: JobPost
generatedBy: generateOntology.js
---

The Job Post entity type encompasses all job postings found throughout the web and known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## JobPost Fields
* [allDescriptions](#alldescriptions) 
* [allNames](#allnames) 
* [allOriginHashes](#alloriginhashes) 
* [allUriDetails](#alluridetails) 
* [allUris](#alluris) 
* [crawlTimestamp](#crawltimestamp) 
* [date](#date) 
* [description](#description) 
* [descriptors](#descriptors) 
* [diffbotUri](#diffboturi) 
* [employer](#employer) 
* [id](#id) 
* [image](#image) 
* [images](#images) 
* [importance](#importance) 
* [jobCategories](#jobcategories) 
* [language](#language) 
* [locations](#locations) 
* [name](#name) 
* [nbIncomingEdges](#nbincomingedges) 
* [nbOrigins](#nborigins) 
* [nonCanonicalFacts](#noncanonicalfacts) 
* [originDetails](#origindetails) 
* [origins](#origins) 
* [remote](#remote) 
* [requirements](#requirements) 
* [skills](#skills) 
* [summary](#summary) 
* [tasks](#tasks) 
* [type](#type) 
* [types](#types) 
* [wikipediaPageviews](#wikipediapageviews) 
* [wikipediaPageviewsGrowth](#wikipediapageviewsgrowth) 
* [wikipediaPageviewsLastQuarter](#wikipediapageviewslastquarter) 
* [wikipediaPageviewsLastQuarterGrowth](#wikipediapageviewslastquartergrowth) 
* [wikipediaPageviewsLastYear](#wikipediapageviewslastyear) 
* [wikipediaPageviewsLastYearGrowth](#wikipediapageviewslastyeargrowth) 

## JobPost Field Details
Note that certain longer field examples may be truncated for readability.

### allDescriptions
  All descriptions found for this entity. For the best description, refer to the field &#39;description&#39;.
* **Type:** String
* **Example:**
```
{
	"allDescriptions": [
		"Machine Learning Engineer (Applied)\nMachine Learning Engineers in our applied division design and build massively scaled systems that power the core of Diffbot’s autonomous knowledge extraction system. You’ll work with some of the world’s most premier researchers in their field, both at Diffbot and in academic AI labs, to implement state-of-the-art models in our production datacenter.\nResponsibilities\nImprove accuracy of our production machine learning systems by applying the latest published research, feature engineering, and tuning of model hyperparameters\nOwn end-to-end accuracy and performance for our 60+ machine learning problems\nBe up to date on the latest research publications, and rapidly assess the latest results for production and scalability potential\nWork closely with product leadership and customers on training datasets and error analysis\nRequirements\nMasters in Computer Science or equivalent work experience\n5+ years of industry experience designing and developing software\nExperience implementing the latest machine learning algorithms from papers\nExperience in designing performant production systems\nProduction/deployment engineering in java\nPreferred Skills\n2+ years Java, C++, C#\nPublished research in CV/NLP topics\nPhD in Computer Science\nDiffbot is a group of ML researchers and engineers based in Menlo Park, California and we've developed an autonomous knowledge extraction system that is performing at better-than-human levels of...\nApply Now"
	]
}
```
### allNames
  All names used, including nicknames, full names and transliterations to other languages.
* **Type:** String
* **Example:**
```
{
	"allNames": [
		"Machine Learning Engineer, Applied"
	]
}
```
### allOriginHashes
  For Diffbot&#39;s internal use only.
* **Type:** String
* **Example:**
```
{
	"allOriginHashes": [
		"NKjRXSj2PPCadIWMDwNLDQ"
	]
}
```
### allUriDetails
  Additional information about each URI in &#39;allUris&#39;, which lists the URIs associated with this entity.
* **Type:** UriDetails
* **Example:**
```
{
	"allUriDetails": [
		{
			"domainMonthlyTrafficGrowth": "",
			"domainMonthlyTraffic": 0,
			"redirectsTo": "",
			"nbFollowing": 0,
			"uriType": "",
			"verified": false,
			"nbLinkedAccounts": 0,
			"nbFollowers": 0,
			"httpCodeTimestamp": 0,
			"httpCode": "",
			"uri": ""
		}
	]
}
```
### allUris
  All URIs associated with an entity. A URI (uniform resource identifier) is a page on the web that describes an entity (e.g., an company&#39;s homepage or a person&#39;s social network profile).
* **Type:** URL
* **Example:**
```
{
	"allUris": [
		"womentech.net/job/diffbot/menlo-park/machine-learning-engineer-applied"
	]
}
```
### crawlTimestamp
  The default crawlTimestamp is the most recent date of all of the crawlTimestamps of the origins used to compute the Entity, returned as a UNIX time.
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 1727999253
}
```
### date
  The date when this job is posted online
* **Type:** DDate
* **Example:**
```
{
	"date": {
		"str": "d2024-10-03",
		"precision": 3,
		"timestamp": 1727913600000
	}
}
```
### description
  A few sentences describing an entity
* **Type:** String
* **Example:**
```
{
	"description": "Machine Learning Engineer (Applied)\nMachine Learning Engineers in our applied division design and build massively scaled systems that power the core of Diffbot’s autonomous knowledge extraction system. You’ll work with some of the world’s most premier researchers in their field, both at Diffbot and in academic AI labs, to implement state-of-the-art models in our production datacenter.\nResponsibilities\nImprove accuracy of our production machine learning systems by applying the latest published research, feature engineering, and tuning of model hyperparameters\nOwn end-to-end accuracy and performance for our 60+ machine learning problems\nBe up to date on the latest research publications, and rapidly assess the latest results for production and scalability potential\nWork closely with product leadership and customers on training datasets and error analysis\nRequirements\nMasters in Computer Science or equivalent work experience\n5+ years of industry experience designing and developing software\nExperience implementing the latest machine learning algorithms from papers\nExperience in designing performant production systems\nProduction/deployment engineering in java\nPreferred Skills\n2+ years Java, C++, C#\nPublished research in CV/NLP topics\nPhD in Computer Science\nDiffbot is a group of ML researchers and engineers based in Menlo Park, California and we've developed an autonomous knowledge extraction system that is performing at better-than-human levels of...\nApply Now"
}
```
### descriptors
  A list of free-form keywords describing this entity
* **Type:** String
* **Example:**
```
{
	"descriptors": ""
}
```
### diffbotUri
  diffbotUri is the URI an entity&#39;s  (URI), which is defined by appending the Diffbot ID to the URL https:&#x2F;&#x2F;diffbot.com&#x2F;entity&#x2F;. For example, Diffbot&#39;s entityID is CWSwJ_SWQPfqO3HQsxY4lGg and its DiffbotUri is https:&#x2F;&#x2F;diffbot.com&#x2F;entity&#x2F;CWSwJ_SWQPfqO3HQsxY4lGg
* **Type:** URL
* **Example:**
```
{
	"diffbotUri": "http://diffbot.com/entity/ENKjRXSj2PPCadIWMDwNLDQ"
}
```
### employer
  The employer of this job
* **Type:** LinkedEntity
* **Example:**
```
{
	"employer": {
		"summary": "American machine learning and knowledge management company",
		"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.%5DjEp9G.Bd%7Bk%3EXMJM5%7E%7B-E%2FXy-Z7%5Dq-CdLD-axttB6p%2FR620zN_%3Cb4E.A%5Dm",
		"types": [
			"Organization",
			"Corporation",
			"Company"
		],
		"name": "Diffbot",
		"diffbotUri": "http://diffbot.com/entity/EYX1i02YVPsuT7fPLUYgRhQ",
		"targetDiffbotId": "EYX1i02YVPsuT7fPLUYgRhQ",
		"type": "Organization"
	}
}
```
### id
  An alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies an entity.
* **Type:** String
* **Example:**
```
{
	"id": "ENKjRXSj2PPCadIWMDwNLDQ"
}
```
### image
  The main image used to represent the entity.
* **Type:** String
* **Example:**
```
{
	"image": ""
}
```
### images
  The visual representation of an entity usually in the form of a png, jpeg, gif, or svg file.
* **Type:** ImageField
* **Example:**
```
{
	"images": [
		{
			"classifications": "",
			"fingerprint": "",
			"title": "",
			"isCached": false,
			"url": ""
		}
	]
}
```
### importance
  A number between 0 and 100 indicating how important or popular an entity is.
* **Type:** Float
* **Example:**
```
{
	"importance": 4.84171199798584
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
			"name": "Artificial Intelligence",
			"diffbotUri": "http://diffbot.com/entity/ESsRhWRXQP4y38EZrrH8I6A",
			"targetDiffbotId": "ESsRhWRXQP4y38EZrrH8I6A",
			"type": "EmploymentCategory"
		},
		{
			"name": "Engineering, IT and Software Development",
			"diffbotUri": "http://diffbot.com/entity/EphfPPRLfN4yo0a952UCnDA",
			"targetDiffbotId": "EphfPPRLfN4yo0a952UCnDA",
			"type": "EmploymentCategory"
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
			"country": {
				"summary": "Country located primarily in North America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGq%3Eh%5D%7Dab%3B%60zBlElnGl6anIdpR%7BW%5EvOdKQBTx.oCJ",
				"types": [
					"Place",
					"AdministrativeArea",
					"Country"
				],
				"name": "United States",
				"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "Place"
			},
			"address": "Menlo Park, California",
			"city": {
				"summary": "City in San Mateo County, California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FjvIT%3Ei%5DC%5Bw%3Bq9%40G%3Dg%7BGewNxOd%5EE%7EL_1b%2F%40Q.Yu5",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "Menlo Park",
				"diffbotUri": "http://diffbot.com/entity/EQiAUr370NpW1gvx-V4fTrQ",
				"targetDiffbotId": "EQiAUr370NpW1gvx-V4fTrQ",
				"type": "Place"
			},
			"metroArea": {
				"summary": "Metropolitan area in California, United States",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "San Francisco Bay Area",
				"diffbotUri": "http://diffbot.com/entity/E9vk_v1rKPgitvjkH--IN8w",
				"targetDiffbotId": "E9vk_v1rKPgitvjkH--IN8w",
				"type": "Place"
			},
			"subregion": {
				"summary": "County in California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtr%3ErO%3CLr2Y%5EBfA_%7EJt%40NeLn2L%7EL%60zdzEW%7DBf%3C%5BjDp%3FjpmwN%5D%7C_.%40%5C%7B",
				"types": [
					"Place",
					"AdministrativeArea",
					"Subregion"
				],
				"name": "San Mateo County",
				"diffbotUri": "http://diffbot.com/entity/E3vHP---hM4eCDOBsK0fhKA",
				"targetDiffbotId": "E3vHP---hM4eCDOBsK0fhKA",
				"type": "Place"
			},
			"latitude": 37.49946975708008,
			"precision": 6.71204948425293,
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtr%3EnAo-8UY%5EBfA_%7EJt%40N%2CCS0ZsGZqQ%2F%3BO%3C%5EwBd2Uj9HvRq%3C%5E.Pw4",
				"types": [
					"Place",
					"AdministrativeArea",
					"Region"
				],
				"name": "California",
				"diffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
				"targetDiffbotId": "El0_8ehooNxOPT36Y4RdV9w",
				"type": "Place"
			},
			"longitude": -122.14386749267578
		}
	]
}
```
### name
  Primary text label for this entity.
* **Type:** String
* **Example:**
```
{
	"name": "Machine Learning Engineer, Applied"
}
```
### nbIncomingEdges
  This is the number of edges in the Knowledge Graph that point to this entity. For example, the nbIncomingEdges field for Google is over 100,000. This number includes the number of people that work at google, the number of investors who invested in google, etc.
* **Type:** Integer
* **Example:**
```
{
	"nbIncomingEdges": 0
}
```
### nbOrigins
  Total number of origins in the field &#39;origins&#39;. This field is only available in extended JSON mode.
* **Type:** Integer
* **Example:**
```
{
	"nbOrigins": 1
}
```
### nonCanonicalFacts
  Enumerates all the non-canonical fields (i.e., those not defined in the ontology) that have a value for this entity. For instance, if &#39;numberOfChildren&#39; is listed in &#39;nonCanonicalFacts&#39; then the entity JSON will have the key &#39;numberOfChildren&#39; with an associated value. This field is only provided when the parameter nonCanonicalFacts&#x3D;1 is set. See: https:&#x2F;&#x2F;docs.diffbot.com&#x2F;kgapi
* **Type:** String
* **Example:**
```
{
	"nonCanonicalFacts": ""
}
```
### originDetails
  Additional information about origins listed in &#39;origins&#39;, including the latest time it was crawled. This field is only available in extended JSON mode.
* **Type:** OriginDetail
* **Example:**
```
{
	"originDetails": [
		{
			"crawledAt": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"origin": ""
		}
	]
}
```
### origins
  An origin is a web address where Diffbot found one or more facts about an entity. This field is only available in extended JSON mode.
* **Type:** String
* **Example:**
```
{
	"origins": [
		"womentech.net/job/diffbot/menlo-park/machine-learning-engineer-applied"
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
	"requirements": [
		"Masters in Computer Science or equivalent work experience",
		"5+ years of industry experience designing and developing software",
		"Experience implementing the latest machine learning algorithms from papers"
	]
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
			"name": "computer science",
			"diffbotUri": "http://diffbot.com/entity/EH62PPoEHNzGEtJysOxqiiA",
			"targetDiffbotId": "EH62PPoEHNzGEtJysOxqiiA"
		},
		{
			"name": "knowledge discovery",
			"diffbotUri": "http://diffbot.com/entity/ET8Z4SIHrNgercKJwF2qkmQ",
			"targetDiffbotId": "ET8Z4SIHrNgercKJwF2qkmQ"
		},
		{
			"name": "machine learning",
			"diffbotUri": "http://diffbot.com/entity/ECPZuuTwvMXGfGmvJ33T2IQ",
			"targetDiffbotId": "ECPZuuTwvMXGfGmvJ33T2IQ"
		}
	]
}
```
### summary
  A short phrase designed to disambiguate entities with the same or similar name
* **Type:** String
* **Example:**
```
{
	"summary": ""
}
```
### tasks
  Description of the job
* **Type:** String
* **Example:**
```
{
	"tasks": [
		"Improve accuracy of our production machine learning systems by applying the latest published research, feature engineering, and tuning of model hyperparameters",
		"Own end-to-end accuracy and performance for our 60+ machine learning problems",
		"Be up to date on the latest research publications, and rapidly assess the latest results for production and scalability potential"
	]
}
```
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": "JobPost"
}
```
### types
  All types of a Diffbot entity, including the value of the field &#39;type&#39;.
* **Type:** String
* **Example:**
```
{
	"types": [
		"JobPost"
	]
}
```
### wikipediaPageviews
  The number of views of its Wikipedia page of the last month if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviews": 0
}
```
### wikipediaPageviewsGrowth
  The month over month growth of wikipediaPageviews, where we count the increment of the number of page views of the second to last (full) month, compared with that of the last (full) month. if today was Aug 16th, 2022, the last complete month is July. So it refers to the increment from June to July, i.e., ( f(July) - f(June) ) ÷ f(June) x 100%. The f(.) only counts the first 28 days of a month, to avoid fluctuations between 31-days months like Jan and 28(29)-days months like Feb.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsGrowth": ""
}
```
### wikipediaPageviewsLastQuarter
  The number of views of its Wikipedia page of the last quarter if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviewsLastQuarter": 0
}
```
### wikipediaPageviewsLastQuarterGrowth
  The quarter over quarter growth of wikipediaPageviews, where we count the increment of the number of page views of the second to last (full) quarter, compared with that of the last (full) quarter. If today was Aug 16th, 2022, the last complete quarter is Q2 (April, May, June). So it refers to the increment from Q1 to Q2, i.e., ( f(Q2) - f(Q1) ) ÷ f(Q1) x 100%.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsLastQuarterGrowth": ""
}
```
### wikipediaPageviewsLastYear
  The number of views of its Wikipedia page of the last year if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviewsLastYear": 0
}
```
### wikipediaPageviewsLastYearGrowth
  The year over year growth of wikipediaPageviews, where we count the monthly-rolling increment of the year before last than the last year. It today was Aug 16th, 2022, it is computed by comparing the numbers from Aug 2021 to July 2022 and from Aug 2020 to July 2021, i.e., ( f(Aug 2021 to July 2022) - f(Aug 2020 to July 2021) ) ÷ f(Aug 2020 to July 2021) x 100%.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsLastYearGrowth": ""
}
```
