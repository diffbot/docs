---
id: kg-ont-diffbotentity
title: All
generatedBy: generateOntology.js
---

All Knowledge Graph entities will include the fields below, which are often generalized, linking, or metadata attributes common to all records. 

See the left navigation panel for fields and attributes of specific entities.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## All Fields
* [allDescriptions](#alldescriptions) 
* [allNames](#allnames) 
* [allOriginHashes](#alloriginhashes) 
* [allUriDetails](#alluridetails) 
* [allUris](#alluris) 
* [crawlTimestamp](#crawltimestamp) 
* [description](#description) 
* [diffbotUri](#diffboturi) 
* [id](#id) 
* [image](#image) 
* [images](#images) 
* [importance](#importance) 
* [name](#name) 
* [nbIncomingEdges](#nbincomingedges) 
* [nbOrigins](#nborigins) 
* [nonCanonicalFacts](#noncanonicalfacts) 
* [originDetails](#origindetails) 
* [origins](#origins) 
* [profileChangeProbability](#profilechangeprobability) 
* [summary](#summary) 
* [type](#type) 
* [types](#types) 
* [wikipediaPageviews](#wikipediapageviews) 
* [wikipediaPageviewsGrowth](#wikipediapageviewsgrowth) 
* [wikipediaPageviewsLastQuarter](#wikipediapageviewslastquarter) 
* [wikipediaPageviewsLastQuarterGrowth](#wikipediapageviewslastquartergrowth) 
* [wikipediaPageviewsLastYear](#wikipediapageviewslastyear) 
* [wikipediaPageviewsLastYearGrowth](#wikipediapageviewslastyeargrowth) 

## All Field Details
Note that certain longer field examples may be truncated for readability.

### allDescriptions
  All descriptions found for this entity. For the best description, refer to the field &#39;description&#39;.
* **Type:** String
* **Example:**
```
{
	"allDescriptions": ""
}
```
### allNames
  All names used, including nicknames, full names and transliterations to other languages.
* **Type:** String
* **Example:**
```
{
	"allNames": ""
}
```
### allOriginHashes
  For Diffbot&#39;s internal use only.
* **Type:** String
* **Example:**
```
{
	"allOriginHashes": ""
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
### crawlTimestamp
  The default crawlTimestamp is the most recent date of all of the crawlTimestamps of the origins used to compute the Entity, returned as a UNIX time.
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 0
}
```
### description
  A few sentences describing an entity
* **Type:** String
* **Example:**
```
{
	"description": ""
}
```
### diffbotUri
  diffbotUri is the URI an entity&#39;s  (URI), which is defined by appending the Diffbot ID to the URL https:&#x2F;&#x2F;diffbot.com&#x2F;entity&#x2F;. For example, Diffbot&#39;s entityID is CWSwJ_SWQPfqO3HQsxY4lGg and its DiffbotUri is https:&#x2F;&#x2F;diffbot.com&#x2F;entity&#x2F;CWSwJ_SWQPfqO3HQsxY4lGg
* **Type:** URL
* **Example:**
```
{
	"diffbotUri": ""
}
```
### id
  An alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies an entity.
* **Type:** String
* **Example:**
```
{
	"id": ""
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
	"importance": ""
}
```
### name
  Primary text label for this entity.
* **Type:** String
* **Example:**
```
{
	"name": ""
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
  Total number of origins in the field &#39;origins&#39;.
* **Type:** Integer
* **Example:**
```
{
	"nbOrigins": 0
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
  Additional information about origins listed in &#39;origins&#39;, including the latest time it was crawled.
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
  An origin is a web address where Diffbot found one or more facts about an entity.
* **Type:** String
* **Example:**
```
{
	"origins": ""
}
```
### profileChangeProbability
  For Diffbot&#39;s internal use only.
* **Type:** Float
* **Example:**
```
{
	"profileChangeProbability": ""
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
  All types of a Diffbot entity, including the value of the field &#39;type&#39;.
* **Type:** String
* **Example:**
```
{
	"types": ""
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
