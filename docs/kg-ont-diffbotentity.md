---
id: kg-ont-diffbotentity
title: All
---

All Knowledge Graph entities will include the fields below, which are often generalized, linking, or metadata attributes common to all records. 

See the left navigation panel for fields and attributes for specific entities,

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

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

## All Field Details

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
			"nbFollowing": 0,
			"uriType": "",
			"verified": false,
			"nbFollowers": 0,
			"uri": ""
		}
	]
}
```
### allUris
  All URIs associated with an entity. A URI (uniform resource identifier) is a page on the web that describes an entity (e.g., an company&#39;s homepage or a person&#39;s social network profile).
* **Type:** 
* **Example:**
```
{
	"allUris": ""
}
```
### crawlTimestamp
  The default crawlTimestamp is the most recent date of all of the crawlTimestamps of the origins used to compute the Entity, returned as a UNIX time.
* **Type:** Long
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
* **Type:** 
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
* **Type:** 
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
  The main type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** 
* **Example:**
```
{
	"type": ""
}
```
### types
  All types of a Diffbot entity, including the value of the field &#39;type&#39;.
* **Type:** 
* **Example:**
```
{
	"types": ""
}
```
