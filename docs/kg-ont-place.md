---
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
* [area](#area) 
* [areaCodes](#areacodes) 
* [isPartOf](#ispartof) 
* [location](#location) 
* [placeType](#placetype) 
* [population](#population) 
* [postalCodes](#postalcodes) 

## Place Field Details
Note that certain longer field examples may be truncated for readability.

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
### isPartOf
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"isPartOf": [
		{
			"summary": "Country in North America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDs%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%40aCHnM%60%29.%7BOV",
			"types": [
				"Place",
				"AdministrativeArea",
				"Country"
			],
			"name": "United States of America",
			"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
			"type": "Place"
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
			"summary": "Country in North America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDs%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%40aCHnM%60%29.%7BOV",
			"types": [
				"Place",
				"AdministrativeArea",
				"Country"
			],
			"name": "United States of America",
			"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
			"type": "Place"
		},
		"address": "United States of America",
		"latitude": 39.82817459106445,
		"precision": 3134.752685546875,
		"longitude": -98.57949829101562
	}
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
	"population": 331449281
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
