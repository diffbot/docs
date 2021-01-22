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
Note that certain longer field examples may be truncated for readability in these docs. 

### endDateTime
  
* **Type:** DDateTime
* **Example:**
```
{
	"endDateTime": {
		"str": "d2019-10-17T07:00",
		"precision": 4,
		"timestamp": 1571295600000
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
			"address": "Westin Chicago River North, Chicago, Illinois, IL, USA",
			"city": {
				"name": "Chicago",
				"surfaceForm": "Chicago"
			},
			"street": "Westin Chicago River North",
			"subregion": {
				"name": "Illinois",
				"surfaceForm": "Illinois"
			},
			"surfaceForm": "Westin Chicago River North, Chicago, Illinois, IL, USA",
			"region": {
				"name": "IL",
				"surfaceForm": "IL"
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
		"str": "d2019-10-14T07:00",
		"precision": 4,
		"timestamp": 1571036400000
	}
}
```
