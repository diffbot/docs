---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: kg-ont-product
title: Product
generatedBy: generateOntology.js
---

The product entity type encompasses retail products found throughout the web known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Product Fields
* [availability](#availability) 
* [brand](#brand) 
* [breadcrumb](#breadcrumb) 
* [category](#category) 
* [crawlTimestamp](#crawltimestamp) 
* [diffbotUri](#diffboturi) 
* [discussion](#discussion) 
* [gs1Code](#gs1code) 
* [gtin](#gtin) 
* [id](#id) 
* [images](#images) 
* [isbn](#isbn) 
* [language](#language) 
* [mpn](#mpn) 
* [multipleProducts](#multipleproducts) 
* [offerPrice](#offerprice) 
* [offerPriceDetails](#offerpricedetails) 
* [pageUrl](#pageurl) 
* [productId](#productid) 
* [productOrigin](#productorigin) 
* [regularPrice](#regularprice) 
* [regularPriceDetails](#regularpricedetails) 
* [resolvedPageUrl](#resolvedpageurl) 
* [saveAmount](#saveamount) 
* [saveAmountDetails](#saveamountdetails) 
* [shippingAmount](#shippingamount) 
* [sku](#sku) 
* [text](#text) 
* [title](#title) 
* [type](#type) 
* [types](#types) 
* [upc](#upc) 

## Product Field Details
Note that certain longer field examples may be truncated for readability.

### availability
  
* **Type:** Boolean
* **Example:**
```
{
	"availability": false
}
```
### brand
  Item&#39;s brand name
* **Type:** String
* **Example:**
```
{
	"brand": "Monoprice"
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
### category
  
* **Type:** String
* **Example:**
```
{
	"category": "Electronics"
}
```
### crawlTimestamp
  Last time a site was crawled&#x2F;indexed
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 1758130421
}
```
### diffbotUri
  diffbotUri is a combination of an entityID and a corresponding web address or uniform resource identifier (URI), which is defined by appending the entityID to the URL https:&#x2F;&#x2F;www.diffbot.com&#x2F;entity&#x2F;. For example, Diffbot&#39;s entityID is CWSwJ_SWQPfqO3HQsxY4lGg and its DiffbotUri is https:&#x2F;&#x2F;www.diffbot.com&#x2F;entity&#x2F;CWSwJ_SWQPfqO3HQsxY4lGg
* **Type:** String
* **Example:**
```
{
	"diffbotUri": "http://diffbot.com/entity/PRD140579625275"
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
						"naturalWidth": 0,
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
				],
				"author": "",
				"authorUrl": "",
				"language": "",
				"html": "",
				"pageUrl": "",
				"text": ""
			}
		],
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
		"numParticipants": 0,
		"rssUrl": ""
	}
}
```
### gs1Code
  
* **Type:** String
* **Example:**
```
{
	"gs1Code": ""
}
```
### gtin
  
* **Type:** String
* **Example:**
```
{
	"gtin": ""
}
```
### id
  Each entity in the Diffbot KnowledgeGraph (DKG) is identified by a unique identifier, an alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies that entity. The id is directly derived from the most authoritative origin from the origins array.
* **Type:** String
* **Example:**
```
{
	"id": "PRD08b7d187325e49e0e82be6322817c427"
}
```
### images
  
* **Type:** GlobalIndexImage
* **Example:**
```
{
	"images": [
		{
			"summary": "",
			"naturalHeight": 0,
			"name": "",
			"image": "https://c1.neweggimages.com/productimage/nb640/A9HT_1_201812181560031897.jpg",
			"url": "https://c1.neweggimages.com/productimage/nb640/A9HT_1_201812181560031897.jpg",
			"naturalWidth": 0
		},
		{
			"summary": "",
			"naturalHeight": 0,
			"name": "",
			"image": "https://c1.neweggimages.com/productimage/nb640/A86ED2308171D4N7M72.jpg",
			"url": "https://c1.neweggimages.com/productimage/nb640/A86ED2308171D4N7M72.jpg",
			"naturalWidth": 0
		},
		{
			"summary": "",
			"naturalHeight": 0,
			"name": "",
			"image": "https://c1.neweggimages.com/productimage/nb640/A86ED230616083W2Z64.jpg",
			"url": "https://c1.neweggimages.com/productimage/nb640/A86ED230616083W2Z64.jpg",
			"naturalWidth": 0
		}
	]
}
```
### isbn
  
* **Type:** String
* **Example:**
```
{
	"isbn": ""
}
```
### language
  Refers to the language in which the Product page is written
* **Type:** String
* **Example:**
```
{
	"language": "en"
}
```
### mpn
  
* **Type:** String
* **Example:**
```
{
	"mpn": ""
}
```
### multipleProducts
  
* **Type:** Boolean
* **Example:**
```
{
	"multipleProducts": false
}
```
### offerPrice
  
* **Type:** String
* **Example:**
```
{
	"offerPrice": ""
}
```
### offerPriceDetails
  
* **Type:** PriceDetails
* **Example:**
```
{
	"offerPriceDetails": {
		"symbol": "",
		"amount": "",
		"text": "",
		"currencyCode": ""
	}
}
```
### pageUrl
  URL of submitted page &#x2F; page from which the entity is extracted
* **Type:** String
* **Example:**
```
{
	"pageUrl": "https://www.newegg.com/106526-monoprice-tilt-tv-wall-mount-bracket-for-tvs-32in-to-52in-max-weight-125lbs-vesa-patterns/p/169-0084-00069"
}
```
### productId
**`Deprecated`**  
* **Type:** String
* **Example:**
```
{
	"productId": ""
}
```
### productOrigin
  
* **Type:** String
* **Example:**
```
{
	"productOrigin": ""
}
```
### regularPrice
  
* **Type:** String
* **Example:**
```
{
	"regularPrice": ""
}
```
### regularPriceDetails
  
* **Type:** PriceDetails
* **Example:**
```
{
	"regularPriceDetails": {
		"symbol": "",
		"amount": "",
		"text": "",
		"currencyCode": ""
	}
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
### saveAmount
  
* **Type:** String
* **Example:**
```
{
	"saveAmount": ""
}
```
### saveAmountDetails
  
* **Type:** PriceDetails
* **Example:**
```
{
	"saveAmountDetails": {
		"symbol": "",
		"amount": "",
		"text": "",
		"currencyCode": ""
	}
}
```
### shippingAmount
  
* **Type:** String
* **Example:**
```
{
	"shippingAmount": ""
}
```
### sku
  
* **Type:** String
* **Example:**
```
{
	"sku": "9SIA8SV3807097"
}
```
### text
  
* **Type:** String
* **Example:**
```
{
	"text": "Buy Monoprice Tilting HDTV Wall Mount Bracket (max 125 lbs, 32~52\", VESA 100x100~500x400) with fast shipping and top-rated customer service. Once you know, you Newegg!"
}
```
### title
  Title of the Product
* **Type:** String
* **Example:**
```
{
	"title": "Monoprice Tilting HDTV Wall Mount Bracket (max 125 lbs, 32~52\", VESA 100x100~500x400)"
}
```
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": "Product"
}
```
### types
  There are tags.types which can only refer to dbpedia rdf types, while there are also the general DiffbotEntity types which is just an array of all the types an object belongs to. For instance a LocalBusiness would have &#x60;types:[&quot;Organization&quot;,&quot;LocalBusiness&quot;]&#x60; Finally, there are types that indicate a belonging to a subgroup such as business vs personal email address.
* **Type:** String
* **Example:**
```
{
	"types": [
		"Product"
	]
}
```
### upc
  
* **Type:** String
* **Example:**
```
{
	"upc": ""
}
```
