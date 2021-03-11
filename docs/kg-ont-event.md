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
Note that certain longer field examples may be truncated for readability.

### endDateTime
  
* **Type:** DDateTime
* **Example:**
```
{
	"endDateTime": {
		"str": "d2018-10-11T07:00",
		"precision": 4,
		"timestamp": 1539241200000
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
			"country": {
				"name": "United States",
				"surfaceForm": "United States"
			},
			"isCurrent": true,
			"address": "Anaheim Convention Center, Anaheim, California, CA, USA",
			"city": {
				"name": "Anaheim",
				"surfaceForm": "Anaheim"
			},
			"street": "Anaheim Convention Center",
			"subregion": {
				"name": "California",
				"surfaceForm": "California"
			},
			"surfaceForm": "Anaheim Convention Center, Anaheim, California, CA, USA",
			"region": {
				"name": "CA",
				"surfaceForm": "CA"
			}
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
		"str": "d2018-10-09T07:00",
		"precision": 4,
		"timestamp": 1539068400000
	}
}
```
