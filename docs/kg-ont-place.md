---
id: kg-ont-place
title: Place
---

The place entity type encompasses cities, landmarks, countries, administrative areas, and other locations known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Place Fields
* [isPartOf](#ispartof) 
* [location](#location) 
* [placeType](#placetype) 

## Place Field Details
Note that certain longer field examples may be truncated for readability in these docs. 

### isPartOf
  
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"isPartOf": "[See Place]"
}
```
### location
  
* **Type:** Location
* **Example:**
```
{
	"location": {
		"country": "[See AdministrativeArea]",
		"address": "",
		"city": "[See AdministrativeArea]",
		"subregion": "[See AdministrativeArea]",
		"latitude": "",
		"precision": "",
		"postalCode": "",
		"surfaceForm": "",
		"isCurrent": false,
		"street": "",
		"metroArea": "[See AdministrativeArea]",
		"region": "[See AdministrativeArea]",
		"rawAdministrativeArea": "[See AdministrativeArea]",
		"longitude": ""
	}
}
```
### placeType
  Place category for a location; ex. Park, City, etc.
* **Type:** com.diffbot.kg.entities.Place$PlaceType
* **Example:**
```
{
	"placeType": ""
}
```
