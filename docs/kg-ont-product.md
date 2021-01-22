---
id: kg-ont-product
title: Product
---

The product entity type encompasses products found throughout the web known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Product Fields
* [availability](#availability) 
* [brand](#brand) 
* [breadcrumb](#breadcrumb) 
* [category](#category) 
* [discussion](#discussion) 
* [images](#images) 
* [isbn](#isbn) 
* [language](#language) 
* [mpn](#mpn) 
* [multipleProducts](#multipleproducts) 
* [offerPrice](#offerprice) 
* [offerPriceDetails](#offerpricedetails) 
* [prefixCode](#prefixcode) 
* [productId](#productid) 
* [productOrigin](#productorigin) 
* [regularPrice](#regularprice) 
* [regularPriceDetails](#regularpricedetails) 
* [saveAmount](#saveamount) 
* [saveAmountDetails](#saveamountdetails) 
* [shippingAmount](#shippingamount) 
* [sku](#sku) 
* [text](#text) 
* [title](#title) 
* [upc](#upc) 

## Product Field Details

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
	"brand": ""
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
	"category": ""
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
	"language": ""
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
		"text": ""
	}
}
```
### prefixCode
  
* **Type:** String
* **Example:**
```
{
	"prefixCode": ""
}
```
### productId
  
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
		"text": ""
	}
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
		"text": ""
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
	"sku": ""
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
  Title of the Product
* **Type:** String
* **Example:**
```
{
	"title": ""
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
