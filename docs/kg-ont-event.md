---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: kg-ont-event
title: Event
generatedBy: generateOntology.js
---

The Event entity type encompasses webinars, meet ups, conferences, and other events known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Event Fields
* [allDescriptions](#alldescriptions) 
* [allNames](#allnames) 
* [allOriginHashes](#alloriginhashes) 
* [allUriDetails](#alluridetails) 
* [allUris](#alluris) 
* [categories](#categories) 
* [crawlTimestamp](#crawltimestamp) 
* [description](#description) 
* [descriptors](#descriptors) 
* [diffbotUri](#diffboturi) 
* [endDateTime](#enddatetime) 
* [humanLanguage](#humanlanguage) 
* [id](#id) 
* [image](#image) 
* [images](#images) 
* [importance](#importance) 
* [location](#location) 
* [locations](#locations) 
* [name](#name) 
* [nbIncomingEdges](#nbincomingedges) 
* [nbOrigins](#nborigins) 
* [nonCanonicalFacts](#noncanonicalfacts) 
* [onlineLink](#onlinelink) 
* [originDetails](#origindetails) 
* [origins](#origins) 
* [sponsors](#sponsors) 
* [startDateTime](#startdatetime) 
* [summary](#summary) 
* [tags](#tags) 
* [timezone](#timezone) 
* [timezoneOffset](#timezoneoffset) 
* [type](#type) 
* [types](#types) 
* [venue](#venue) 
* [wikipediaPageviews](#wikipediapageviews) 
* [wikipediaPageviewsGrowth](#wikipediapageviewsgrowth) 
* [wikipediaPageviewsLastQuarter](#wikipediapageviewslastquarter) 
* [wikipediaPageviewsLastQuarterGrowth](#wikipediapageviewslastquartergrowth) 
* [wikipediaPageviewsLastYear](#wikipediapageviewslastyear) 
* [wikipediaPageviewsLastYearGrowth](#wikipediapageviewslastyeargrowth) 

## Event Field Details
Note that certain longer field examples may be truncated for readability.

### allDescriptions
  All descriptions found for this entity. For the best description, refer to the field &#39;description&#39;.
* **Type:** String
* **Example:**
```
{
	"allDescriptions": [
		"We’re thrilled to invite you to our Talent Connect Partnership Meet & Greet – a morning built for forging partnerships, opening doors to a pipeline of passionate, trained talent.\nWhy attend?\nPurpose‑driven venue. The Community Action Culinary Arts & Resource Center at 1906 Sherman Ave. in North Chicago, IL, exists to serve the community, help people and change lives Our work is deeply rooted in creating employment and career opportunities for local residents.\n What better place to dream up the future of your workforce?\nDiscover Talent Connect. Our Talent Connect employee referral service gives members access to a robust network of local talent and employment opportunities. It’s designed for businesses that want to connect with qualified candidates and for individuals eager to showcase their skills. At the Meet & Greet you’ll learn how this program can become a pipeline to your next star employee – or even your entire next team.\nForward‑thinking partnerships. We’re not just making introductions; we’re forging relationships built on shared goals.\nTime well spent. Breakfast starts at 7:30 AM; we are seeking your input about program successes and upcoming initiatives. We’ll wrap up with a pitch on how Talent Connect can support your hiring strategies and community engagement goals."
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
		"Talent Connect Partnership Meet & Greet"
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
		"MjgERJohOJaHe2p2YUXB3g"
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
	"allUris": []
}
```
### categories
  Array of categories which represent the abstract subject of the entity
* **Type:** KGCategory
* **Example:**
```
{
	"categories": [
		{
			"score": 1,
			"name": "Social",
			"id": "iabv2-1007"
		},
		{
			"score": 0.985,
			"name": "Business",
			"id": "iabv2-53"
		},
		{
			"score": 0.985,
			"name": "Business and Finance",
			"id": "iabv2-52"
		}
	]
}
```
### crawlTimestamp
  The default crawlTimestamp is the most recent date of all of the crawlTimestamps of the origins used to compute the Entity, returned as a UNIX time.
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 1755011801
}
```
### description
  A few sentences describing an entity
* **Type:** String
* **Example:**
```
{
	"description": "We’re thrilled to invite you to our Talent Connect Partnership Meet & Greet – a morning built for forging partnerships, opening doors to a pipeline of passionate, trained talent.\nWhy attend?\nPurpose‑driven venue. The Community Action Culinary Arts & Resource Center at 1906 Sherman Ave. in North Chicago, IL, exists to serve the community, help people and change lives Our work is deeply rooted in creating employment and career opportunities for local residents.\n What better place to dream up the future of your workforce?\nDiscover Talent Connect. Our Talent Connect employee referral service gives members access to a robust network of local talent and employment opportunities. It’s designed for businesses that want to connect with qualified candidates and for individuals eager to showcase their skills. At the Meet & Greet you’ll learn how this program can become a pipeline to your next star employee – or even your entire next team.\nForward‑thinking partnerships. We’re not just making introductions; we’re forging relationships built on shared goals.\nTime well spent. Breakfast starts at 7:30 AM; we are seeking your input about program successes and upcoming initiatives. We’ll wrap up with a pitch on how Talent Connect can support your hiring strategies and community engagement goals."
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
	"diffbotUri": "http://diffbot.com/entity/EMjgERJohOJaHe2p2YUXB3g"
}
```
### endDateTime
  Event start date and time in GMT
* **Type:** DDateTime
* **Example:**
```
{
	"endDateTime": {
		"str": "d2025-08-25T13:30",
		"precision": 4,
		"timestamp": 1756128600000
	}
}
```
### humanLanguage
  Refers to the language in which the event is published
* **Type:** Language
* **Example:**
```
{
	"humanLanguage": {}
}
```
### id
  An alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies an entity.
* **Type:** String
* **Example:**
```
{
	"id": "EMjgERJohOJaHe2p2YUXB3g"
}
```
### image
  The main image used to represent the entity.
* **Type:** String
* **Example:**
```
{
	"image": "https://kg.diffbot.com/image/api/get?fetch=yes&urls=g%3Cj7P0SttAi.NxBvz.qNb%3DT1G%5C%3D%254%5B%25Ku%25X%3Dp%3Ar.PzDx%7C.sPd%25pU%3E%5B%7DTh%3F%25Mw%7BX1B_9%5Eo%3Fg%25MzDk%7DJxEWuVs7T%7D%25eB%5B%25CpwKXoOu%7ER.Ui%7B1%3AfxPq%261sCT%3BBl5IkO%25%3C%7Bl%3EU6Yb9g%26L1Yx%26Eh2Ypk0E%26%7EBV0w%3B%25l%5Bi%25J9Pav%25wNX9S%26umd%7BDtBWFpDYQJt8M0JAzZ%2Fr%5C5ZQgj%3BNdr"
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
			"naturalHeight": 470,
			"width": 940,
			"url": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0SttAi.NxBvz.qNb%3DT1G%5C%3D%254%5B%25Ku%25X%3Dp%3Ar.PzDx%7C.sPd%25pU%3E%5B%7DTh%3F%25Mw%7BX1B_9%5Eo%3Fg%25MzDk%7DJxEWuVs7T%7D%25eB%5B%25CpwKXoOu%7ER.Ui%7B1%3AfxPq%261sCT%3BBl5IkO%25%3C%7Bl%3EU6Yb9g%26L1Yx%26Eh2Ypk0E%26%7EBV0w%3B%25l%5Bi%25J9Pav%25wNX9S%26umd%7BDtBWFpDYQJt8M0JAzZ%2Fr%5C5ZQgj%3BNdr",
			"naturalWidth": 940,
			"primary": true,
			"height": 470
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
	"importance": 4.49222993850708
}
```
### location
  The location of the event.
* **Type:** Location
* **Example:**
```
{
	"location": {
		"venue": "Get Directions",
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
		"address": "Get Directions, 1906 Sherman Ave Sherman Avenue, North Chicago, Illinois",
		"city": {
			"summary": "City and suburb of Chicago, Illinois, USA",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvO%3EqO7Rb_i%40OnQXXDr%40%5BuMxz%7D0Fh4%600IQBTi%7D%5D%3BG%5B%2FizHkHaxUy%7EZyIZudx%3Ae%2F%3FvBr7DADfv%3DqJPRQp7T%2FNe%3AYy.gHZ",
			"types": [
				"Place",
				"AdministrativeArea",
				"City"
			],
			"name": "North Chicago",
			"diffbotUri": "http://diffbot.com/entity/EXsoILJt3O065Ir6QcM2xsA",
			"targetDiffbotId": "EXsoILJt3O065Ir6QcM2xsA",
			"type": "Place"
		},
		"street": "1906 Sherman Ave Sherman Avenue",
		"metroArea": {
			"summary": "Metropolitan area in the United States",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Chicago metropolitan area",
			"diffbotUri": "http://diffbot.com/entity/EDdaNkfPANReoJCWjJ4clcQ",
			"targetDiffbotId": "EDdaNkfPANReoJCWjJ4clcQ",
			"type": "Place"
		},
		"subregion": {
			"summary": "County in Illinois, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEP%3ErO%3CLr2YdMfAg%7EAy6UoKm7MyKm%7B%5Ex6%3C%2FZj%7D%3F%3CXjNt.M%7E%40",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Lake County",
			"diffbotUri": "http://diffbot.com/entity/EphQDa_57PBiOq3FIcVlb1g",
			"targetDiffbotId": "EphQDa_57PBiOq3FIcVlb1g",
			"type": "Place"
		},
		"latitude": 42.31783676147461,
		"precision": 4.552231788635254,
		"postalCode": "60064",
		"region": {
			"summary": "State of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FFvuu%3ExS%7DYb%3B%60zzfDb%7DGoJ.yZl",
			"types": [
				"Place",
				"AdministrativeArea",
				"Region"
			],
			"name": "Illinois",
			"diffbotUri": "http://diffbot.com/entity/EbCHmKRdnPNWDRqTZHroFbA",
			"targetDiffbotId": "EbCHmKRdnPNWDRqTZHroFbA",
			"type": "Place"
		},
		"longitude": -87.86309814453125
	}
}
```
### locations
  
* **Type:** Location
* **Example:**
```
{
	"locations": [
		{
			"venue": "Get Directions",
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
			"address": "Get Directions, 1906 Sherman Ave Sherman Avenue, North Chicago, Illinois",
			"city": {
				"summary": "City and suburb of Chicago, Illinois, USA",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvO%3EqO7Rb_i%40OnQXXDr%40%5BuMxz%7D0Fh4%600IQBTi%7D%5D%3BG%5B%2FizHkHaxUy%7EZyIZudx%3Ae%2F%3FvBr7DADfv%3DqJPRQp7T%2FNe%3AYy.gHZ",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "North Chicago",
				"diffbotUri": "http://diffbot.com/entity/EXsoILJt3O065Ir6QcM2xsA",
				"targetDiffbotId": "EXsoILJt3O065Ir6QcM2xsA",
				"type": "Place"
			},
			"street": "1906 Sherman Ave Sherman Avenue",
			"metroArea": {
				"summary": "Metropolitan area in the United States",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Chicago metropolitan area",
				"diffbotUri": "http://diffbot.com/entity/EDdaNkfPANReoJCWjJ4clcQ",
				"targetDiffbotId": "EDdaNkfPANReoJCWjJ4clcQ",
				"type": "Place"
			},
			"subregion": {
				"summary": "County in Illinois, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEP%3ErO%3CLr2YdMfAg%7EAy6UoKm7MyKm%7B%5Ex6%3C%2FZj%7D%3F%3CXjNt.M%7E%40",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Lake County",
				"diffbotUri": "http://diffbot.com/entity/EphQDa_57PBiOq3FIcVlb1g",
				"targetDiffbotId": "EphQDa_57PBiOq3FIcVlb1g",
				"type": "Place"
			},
			"latitude": 42.31783676147461,
			"precision": 4.552231788635254,
			"postalCode": "60064",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FFvuu%3ExS%7DYb%3B%60zzfDb%7DGoJ.yZl",
				"types": [
					"Place",
					"AdministrativeArea",
					"Region"
				],
				"name": "Illinois",
				"diffbotUri": "http://diffbot.com/entity/EbCHmKRdnPNWDRqTZHroFbA",
				"targetDiffbotId": "EbCHmKRdnPNWDRqTZHroFbA",
				"type": "Place"
			},
			"longitude": -87.86309814453125
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
	"name": "Talent Connect Partnership Meet & Greet"
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
### onlineLink
  
* **Type:** String
* **Example:**
```
{
	"onlineLink": ""
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
		"eventbrite.com/e/talent-connect-partnership-meet-greet-tickets-1542472329259"
	]
}
```
### sponsors
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"sponsors": [
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
### startDateTime
  Event start date and time in GMT
* **Type:** DDateTime
* **Example:**
```
{
	"startDateTime": {
		"str": "d2025-08-25T12:30",
		"precision": 4,
		"timestamp": 1756125000000
	}
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
### tags
  Array of tags&#x2F;entities, generated from analysis of the extracted text and cross-referenced with DBpedia and other data sources. Language-specific tags will be returned if the source text is in English, Chinese, French, German, Spanish or Russian.
* **Type:** KGTag
* **Example:**
```
{
	"tags": [
		{
			"score": 0.5921527743339539,
			"sentiment": 0,
			"count": 1,
			"label": "North Chicago",
			"uri": "https://diffbot.com/entity/EXsoILJt3O065Ir6QcM2xsA",
			"rdfTypes": [
				"http://dbpedia.org/ontology/Place",
				"http://dbpedia.org/ontology/PopulatedPlace",
				"http://dbpedia.org/ontology/Settlement",
				"http://dbpedia.org/ontology/City"
			]
		},
		{
			"score": 0.4346528649330139,
			"sentiment": 0.779,
			"count": 1,
			"label": "culinary art",
			"uri": "https://diffbot.com/entity/Er6nY2WBwO_Gmo0M3loM7CQ",
			"rdfTypes": [
				"http://dbpedia.org/ontology/Skill"
			]
		},
		{
			"score": 0.3224407732486725,
			"sentiment": 0.79,
			"count": 1,
			"label": "partnership",
			"uri": "https://diffbot.com/entity/E5flv0o6_OZqHZOKG5q2WyA"
		}
	]
}
```
### timezone
  IANA Timezone
* **Type:** String
* **Example:**
```
{
	"timezone": ""
}
```
### timezoneOffset
  Timezone offset from GMT
* **Type:** String
* **Example:**
```
{
	"timezoneOffset": "-05:00"
}
```
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": "Event"
}
```
### types
  All types of a Diffbot entity, including the value of the field &#39;type&#39;.
* **Type:** String
* **Example:**
```
{
	"types": [
		"Event"
	]
}
```
### venue
  
* **Type:** String
* **Example:**
```
{
	"venue": "Get Directions"
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
