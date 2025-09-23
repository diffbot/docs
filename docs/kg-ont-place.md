---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: kg-ont-place
title: Place
generatedBy: generateOntology.js
---

The place entity type encompasses cities, landmarks, countries, administrative areas, and other locations known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Place Fields
* [allDescriptions](#alldescriptions) 
* [allNames](#allnames) 
* [allOriginHashes](#alloriginhashes) 
* [allUriDetails](#alluridetails) 
* [allUris](#alluris) 
* [area](#area) 
* [areaCodes](#areacodes) 
* [crawlTimestamp](#crawltimestamp) 
* [description](#description) 
* [descriptors](#descriptors) 
* [diffbotUri](#diffboturi) 
* [headOfPlace](#headofplace) 
* [id](#id) 
* [image](#image) 
* [images](#images) 
* [importance](#importance) 
* [isPartOf](#ispartof) 
* [location](#location) 
* [name](#name) 
* [nbIncomingEdges](#nbincomingedges) 
* [nbOrigins](#nborigins) 
* [nonCanonicalFacts](#noncanonicalfacts) 
* [originDetails](#origindetails) 
* [origins](#origins) 
* [placeType](#placetype) 
* [population](#population) 
* [postalCodes](#postalcodes) 
* [summary](#summary) 
* [type](#type) 
* [types](#types) 
* [wikipediaPageviews](#wikipediapageviews) 
* [wikipediaPageviewsGrowth](#wikipediapageviewsgrowth) 
* [wikipediaPageviewsLastQuarter](#wikipediapageviewslastquarter) 
* [wikipediaPageviewsLastQuarterGrowth](#wikipediapageviewslastquartergrowth) 
* [wikipediaPageviewsLastYear](#wikipediapageviewslastyear) 
* [wikipediaPageviewsLastYearGrowth](#wikipediapageviewslastyeargrowth) 

## Place Field Details
Note that certain longer field examples may be truncated for readability.

### allDescriptions
  All descriptions found for this entity. For the best description, refer to the field &#39;description&#39;.
* **Type:** String
* **Example:**
```
{
	"allDescriptions": [
		"Country located primarily in North America",
		"The United States of America (USA), also known as the United States (U.S) or America, is a country primarily located in North America. It is a federal republic of 50 states and a federal capital district, Washington, D.C. The 48 contiguous states border Canada to the north and Mexico to the south, with the semi-exclave of Alaska in the northwest and the archipelago of Hawaii in the Pacific Ocean. The United States also asserts sovereignty over five major island territories and various uninhabited islands in Oceania and the Caribbean. It is a megadiverse country, with the world's third-largest land area and third-largest population, exceeding 340 million."
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
		"Vereenichde Staate van Amerika",
		"Stados Ounidos de la América",
		"د امریکا متحده ایالات"
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
		"XM-p70f3OhaqLnsuKWeABA",
		"oITpNcvcM2GYrb07pvWDaQ",
		"j-tkJEFSNsGfGsJlEGDLNA"
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
		"wikidata.org/entity/Q30",
		"en.wikipedia.org/?curid=3434750",
		"en.wikipedia.org/wiki/United_States"
	]
}
```
### area
  Square kilometers of AdministrativeArea
* **Type:** Integer
* **Example:**
```
{
	"area": 9826675
}
```
### areaCodes
  
* **Type:** String
* **Example:**
```
{
	"areaCodes": ""
}
```
### crawlTimestamp
  The default crawlTimestamp is the most recent date of all of the crawlTimestamps of the origins used to compute the Entity, returned as a UNIX time.
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 1756105200
}
```
### description
  A few sentences describing an entity
* **Type:** String
* **Example:**
```
{
	"description": "The United States of America (USA), also known as the United States (U.S) or America, is a country primarily located in North America. It is a federal republic of 50 states and a federal capital district, Washington, D.C. The 48 contiguous states border Canada to the north and Mexico to the south, with the semi-exclave of Alaska in the northwest and the archipelago of Hawaii in the Pacific Ocean. The United States also asserts sovereignty over five major island territories and various uninhabited islands in Oceania and the Caribbean. It is a megadiverse country, with the world's third-largest land area and third-largest population, exceeding 340 million."
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
	"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A"
}
```
### headOfPlace
  Leaders of this place, including head of government and head of state.
* **Type:** HeadOfPlace
* **Example:**
```
{
	"headOfPlace": [
		{
			"isCurrent": false,
			"headOfPlace": {
				"summary": "46th President of the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7guSXzAoBWu.x0KwLZrUn.%5B%3CR0Aa4Hwygr9m6W%3Exl5G%60BkxmYDS%7B%2Fl0_9%40jJ%5E2Aj%3C%5BzMf7C2Rk6br%40d.Yu5",
				"types": [
					"Person"
				],
				"name": "Joe Biden",
				"diffbotUri": "http://diffbot.com/entity/E4TlFcudMNuaX0eYAWet-8w",
				"targetDiffbotId": "E4TlFcudMNuaX0eYAWet-8w",
				"type": "Person"
			},
			"from": {
				"str": "d2021-01-20",
				"precision": 3,
				"timestamp": 1611100800000
			},
			"to": {
				"str": "d2025-01-20",
				"precision": 3,
				"timestamp": 1737331200000
			},
			"title": "President of the United States",
			"category": {
				"types": [
					"Intangible",
					"EmploymentCategory"
				],
				"name": "Head of government",
				"diffbotUri": "http://diffbot.com/entity/EG9NYFQwRNZKIOLTW5WwHcw",
				"targetDiffbotId": "EG9NYFQwRNZKIOLTW5WwHcw",
				"type": "EmploymentCategory"
			}
		},
		{
			"isCurrent": false,
			"headOfPlace": {
				"summary": "First Lady of the United States from 2001 to 2009",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7guSXzAoBWu.x0KwLZrUn.%5B%3CR0Aa4Hwygr9m6W%3Exl5G%60BkxmQ6%60%7ENu%7DY%5DVm%40%2Cnxn%40YgRy3V1SrqC6D%5D7cdP%7CNi%5B%28%7E9%5Ei%29.rVn",
				"types": [
					"Person"
				],
				"name": "George Bush",
				"diffbotUri": "http://diffbot.com/entity/EyXOt9wRKM3Okxt9ckzJpmg",
				"targetDiffbotId": "EyXOt9wRKM3Okxt9ckzJpmg",
				"type": "Person"
			},
			"from": {
				"str": "d2001-01-20",
				"precision": 3,
				"timestamp": 979948800000
			},
			"to": {
				"str": "d2009-01-20",
				"precision": 3,
				"timestamp": 1232409600000
			},
			"title": "President of the United States",
			"category": {
				"types": [
					"Intangible",
					"EmploymentCategory"
				],
				"name": "Head of government",
				"diffbotUri": "http://diffbot.com/entity/EG9NYFQwRNZKIOLTW5WwHcw",
				"targetDiffbotId": "EG9NYFQwRNZKIOLTW5WwHcw",
				"type": "EmploymentCategory"
			}
		},
		{
			"isCurrent": false,
			"headOfPlace": {
				"summary": "President of the United States from 1993 to 2001",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7guSXzAoBWu.x0KwLZrUn.%5B%3CR0Aa4Hwygr9m6W%3Exl5G%60BkxmQ%3EZ8LF8c9UiF.yHm",
				"types": [
					"Person"
				],
				"name": "Bill Clinton",
				"diffbotUri": "http://diffbot.com/entity/EVNcTf-3LNBKLsCg506B2pQ",
				"targetDiffbotId": "EVNcTf-3LNBKLsCg506B2pQ",
				"type": "Person"
			},
			"from": {
				"str": "d1993-01-20",
				"precision": 3,
				"timestamp": 727488000000
			},
			"to": {
				"str": "d2001-01-20",
				"precision": 3,
				"timestamp": 979948800000
			},
			"title": "President of the United States",
			"category": {
				"types": [
					"Intangible",
					"EmploymentCategory"
				],
				"name": "Head of government",
				"diffbotUri": "http://diffbot.com/entity/EG9NYFQwRNZKIOLTW5WwHcw",
				"targetDiffbotId": "EG9NYFQwRNZKIOLTW5WwHcw",
				"type": "EmploymentCategory"
			}
		}
	]
}
```
### id
  An alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies an entity.
* **Type:** String
* **Example:**
```
{
	"id": "E01d4EK33MmCosgI2KXa4-A"
}
```
### image
  The main image used to represent the entity.
* **Type:** String
* **Example:**
```
{
	"image": "https://kg.diffbot.com/image/api/get?fetch=yes&urls=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGq%3Eh%5D%7Dab%3B%60zBlElnGl6anIdpR%7BW%5EvOdKQBTx.oCJ,g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDs%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%40aCHnM%60%29.%7BOV,g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FgvFw%3Eq%5D%2FNw5i96Mi.2Nm"
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
			"url": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGq%3Eh%5D%7Dab%3B%60zBlElnGl6anIdpR%7BW%5EvOdKQBTx.oCJ",
			"primary": false
		},
		{
			"url": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDs%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%40aCHnM%60%29.%7BOV",
			"primary": false
		},
		{
			"url": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FgvFw%3Eq%5D%2FNw5i96Mi.2Nm",
			"primary": false
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
	"importance": 99.97929382324219
}
```
### isPartOf
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"isPartOf": [
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
			"diffbotUri": "",
			"name": ""
		}
	]
}
```
### location
  
* **Type:** Location
* **Example:**
```
{
	"location": {
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
		"address": "United States",
		"latitude": 39.82817459106445,
		"precision": 3134.752685546875,
		"surfaceForm": "United States",
		"longitude": -98.57949829101562
	}
}
```
### name
  Primary text label for this entity.
* **Type:** String
* **Example:**
```
{
	"name": "United States"
}
```
### nbIncomingEdges
  This is the number of edges in the Knowledge Graph that point to this entity. For example, the nbIncomingEdges field for Google is over 100,000. This number includes the number of people that work at google, the number of investors who invested in google, etc.
* **Type:** Integer
* **Example:**
```
{
	"nbIncomingEdges": 1498200387
}
```
### nbOrigins
  Total number of origins in the field &#39;origins&#39;. This field is only available in extended JSON mode.
* **Type:** Integer
* **Example:**
```
{
	"nbOrigins": 9
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
		"dbpedia.org/page/United_States",
		"en.wikipedia.org/?curid=3434750",
		"en.wikipedia.org/wiki/United_States"
	]
}
```
### placeType
**`Deprecated`**  Deprecated: Used to denote Place category for a location; ex. Park, City, etc. &#x60;types&#x60; is now the preferred field for getting this information.
* **Type:** String
* **Example:**
```
{
	"placeType": "COUNTRY"
}
```
### population
  
* **Type:** Integer
* **Example:**
```
{
	"population": 340110988
}
```
### postalCodes
  
* **Type:** String
* **Example:**
```
{
	"postalCodes": ""
}
```
### summary
  A short phrase designed to disambiguate entities with the same or similar name
* **Type:** String
* **Example:**
```
{
	"summary": "Country located primarily in North America"
}
```
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": "Place"
}
```
### types
  All types of a Diffbot entity, including the value of the field &#39;type&#39;.
* **Type:** String
* **Example:**
```
{
	"types": [
		"Place",
		"AdministrativeArea",
		"Country"
	]
}
```
### wikipediaPageviews
  The number of views of its Wikipedia page of the last month if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviews": 3049675
}
```
### wikipediaPageviewsGrowth
  The month over month growth of wikipediaPageviews, where we count the increment of the number of page views of the second to last (full) month, compared with that of the last (full) month. if today was Aug 16th, 2022, the last complete month is July. So it refers to the increment from June to July, i.e., ( f(July) - f(June) ) ÷ f(June) x 100%. The f(.) only counts the first 28 days of a month, to avoid fluctuations between 31-days months like Jan and 28(29)-days months like Feb.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsGrowth": -0.2279763
}
```
### wikipediaPageviewsLastQuarter
  The number of views of its Wikipedia page of the last quarter if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviewsLastQuarter": 9211423
}
```
### wikipediaPageviewsLastQuarterGrowth
  The quarter over quarter growth of wikipediaPageviews, where we count the increment of the number of page views of the second to last (full) quarter, compared with that of the last (full) quarter. If today was Aug 16th, 2022, the last complete quarter is Q2 (April, May, June). So it refers to the increment from Q1 to Q2, i.e., ( f(Q2) - f(Q1) ) ÷ f(Q1) x 100%.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsLastQuarterGrowth": 0.133542
}
```
### wikipediaPageviewsLastYear
  The number of views of its Wikipedia page of the last year if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviewsLastYear": 35770406
}
```
### wikipediaPageviewsLastYearGrowth
  The year over year growth of wikipediaPageviews, where we count the monthly-rolling increment of the year before last than the last year. It today was Aug 16th, 2022, it is computed by comparing the numbers from Aug 2021 to July 2022 and from Aug 2020 to July 2021, i.e., ( f(Aug 2021 to July 2022) - f(Aug 2020 to July 2021) ) ÷ f(Aug 2020 to July 2021) x 100%.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsLastYearGrowth": -0.29691178
}
```
