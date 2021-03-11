---
id: kg-ont-creativework
title: CreativeWork
---

The Creative Work entity type encompasses movies, tv shows, musicals, scripts, and other creative works known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## CreativeWork Fields
* [aspectRatio](#aspectratio) 
* [boxOfficeGrossUsa](#boxofficegrossusa) 
* [boxOfficeOpeningWeekendUsa](#boxofficeopeningweekendusa) 
* [boxOfficeWorldGross](#boxofficeworldgross) 
* [budget](#budget) 
* [castmembers](#castmembers) 
* [color](#color) 
* [countryOfOrigin](#countryoforigin) 
* [creativeWorkType](#creativeworktype) 
* [creators](#creators) 
* [directors](#directors) 
* [episodeNum](#episodenum) 
* [genres](#genres) 
* [imdbPopularity](#imdbpopularity) 
* [imdbRating](#imdbrating) 
* [imdbUri](#imdburi) 
* [languages](#languages) 
* [latestSeason](#latestseason) 
* [latestSeasonYear](#latestseasonyear) 
* [metaScore](#metascore) 
* [mpaaRating](#mpaarating) 
* [numAwards](#numawards) 
* [numEpisodes](#numepisodes) 
* [officialSites](#officialsites) 
* [parentTitle](#parenttitle) 
* [plotKeywords](#plotkeywords) 
* [plotSummary](#plotsummary) 
* [posterImgLink](#posterimglink) 
* [productionCompanies](#productioncompanies) 
* [releaseDate](#releasedate) 
* [runtime](#runtime) 
* [seasonNum](#seasonnum) 
* [taglines](#taglines) 
* [videoMainLink](#videomainlink) 
* [writers](#writers) 

## CreativeWork Field Details
Note that certain longer field examples may be truncated for readability.

### aspectRatio
  
* **Type:** String
* **Example:**
```
{
	"aspectRatio": ""
}
```
### boxOfficeGrossUsa
  
* **Type:** String
* **Example:**
```
{
	"boxOfficeGrossUsa": ""
}
```
### boxOfficeOpeningWeekendUsa
  
* **Type:** String
* **Example:**
```
{
	"boxOfficeOpeningWeekendUsa": ""
}
```
### boxOfficeWorldGross
  
* **Type:** String
* **Example:**
```
{
	"boxOfficeWorldGross": ""
}
```
### budget
  
* **Type:** String
* **Example:**
```
{
	"budget": ""
}
```
### castmembers
  
* **Type:** CastMember
* **Example:**
```
{
	"castmembers": [
		{
			"castmember": {
				"recordId": "ETeVENUXKM5yT9kLY27xFHA@0",
				"name": "Martin Scorsese",
				"websiteUris": [
					"imdb.com/name/nm0000217"
				],
				"surfaceForm": "Martin Scorsese",
				"type": "Person"
			},
			"characterLink": "imdb.com/title/tt0364151/characters/nm0000217"
		},
		{
			"castmember": {
				"recordId": "ETeVENUXKM5yT9kLY27xFHA@1",
				"name": "Peter Bogdanovich",
				"websiteUris": [
					"imdb.com/name/nm0000953"
				],
				"surfaceForm": "Peter Bogdanovich",
				"type": "Person"
			},
			"characterLink": "imdb.com/title/tt0364151/characters/nm0000953"
		},
		{
			"castmember": {
				"recordId": "ETeVENUXKM5yT9kLY27xFHA@2",
				"name": "Tony Bennett",
				"websiteUris": [
					"imdb.com/name/nm0004746"
				],
				"surfaceForm": "Tony Bennett",
				"type": "Person"
			},
			"characterLink": "imdb.com/title/tt0364151/characters/nm0004746"
		}
	]
}
```
### color
  
* **Type:** String
* **Example:**
```
{
	"color": ""
}
```
### countryOfOrigin
  
* **Type:** String
* **Example:**
```
{
	"countryOfOrigin": ""
}
```
### creativeWorkType
  
* **Type:** String
* **Example:**
```
{
	"creativeWorkType": "tv series"
}
```
### creators
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"creators": [
		{
			"recordId": "ETeVENUXKM5yT9kLY27xFHA@674",
			"name": "Susan Lacy",
			"websiteUris": [
				"imdb.com/name/nm0480402"
			],
			"surfaceForm": "Susan Lacy",
			"position": "creativeWorkCreator",
			"type": "Person"
		}
	]
}
```
### directors
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"directors": []
}
```
### episodeNum
  
* **Type:** Integer
* **Example:**
```
{
	"episodeNum": 0
}
```
### genres
  
* **Type:** String
* **Example:**
```
{
	"genres": ""
}
```
### imdbPopularity
  
* **Type:** Float
* **Example:**
```
{
	"imdbPopularity": ""
}
```
### imdbRating
  
* **Type:** Float
* **Example:**
```
{
	"imdbRating": 8
}
```
### imdbUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"imdbUri": "imdb.com/title/tt0364151"
}
```
### languages
  
* **Type:** String
* **Example:**
```
{
	"languages": ""
}
```
### latestSeason
  
* **Type:** Integer
* **Example:**
```
{
	"latestSeason": 35
}
```
### latestSeasonYear
  
* **Type:** Integer
* **Example:**
```
{
	"latestSeasonYear": 2021
}
```
### metaScore
  
* **Type:** Float
* **Example:**
```
{
	"metaScore": ""
}
```
### mpaaRating
  
* **Type:** String
* **Example:**
```
{
	"mpaaRating": ""
}
```
### numAwards
  
* **Type:** String
* **Example:**
```
{
	"numAwards": "Won 27 Primetime Emmys. Another 29 wins & 71 nominations."
}
```
### numEpisodes
  
* **Type:** Integer
* **Example:**
```
{
	"numEpisodes": 247
}
```
### officialSites
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"officialSites": []
}
```
### parentTitle
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"parentTitle": ""
}
```
### plotKeywords
  
* **Type:** String
* **Example:**
```
{
	"plotKeywords": ""
}
```
### plotSummary
  
* **Type:** String
* **Example:**
```
{
	"plotSummary": "Documentary series focusing on great American artists and personalities."
}
```
### posterImgLink
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"posterImgLink": "m.media-amazon.com/images/M/MV5BMTQ3ODc5ODQ0NV5BMl5BanBnXkFtZTgwNzM1MjUzMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
}
```
### productionCompanies
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"productionCompanies": []
}
```
### releaseDate
  
* **Type:** DDate
* **Example:**
```
{
	"releaseDate": ""
}
```
### runtime
  
* **Type:** String
* **Example:**
```
{
	"runtime": ""
}
```
### seasonNum
  
* **Type:** Integer
* **Example:**
```
{
	"seasonNum": 0
}
```
### taglines
  
* **Type:** String
* **Example:**
```
{
	"taglines": ""
}
```
### videoMainLink
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"videoMainLink": ""
}
```
### writers
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"writers": []
}
```
