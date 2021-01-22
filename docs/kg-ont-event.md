---
id: kg-ont-event
title: Event
---

The Event entity type encompasses webinars, meet ups, conferences, and other events known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Event Fields
* [endDateTime](#enddatetime) 
* [locations](#locations) 
* [startDateTime](#startdatetime) 

## Event Field Details

### endDateTime
  
* **Type:** DDateTime
* **Example:**
```
{
	"endDateTime": {
		"str": "",
		"precision": 0,
		"timestamp": 0
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
	]
}
```
### startDateTime
  
* **Type:** DDateTime
* **Example:**
```
{
	"startDateTime": {
		"str": "",
		"precision": 0,
		"timestamp": 0
	}
}
```
