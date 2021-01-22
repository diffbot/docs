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
Note that certain longer field examples may be truncated for readability in these docs. 

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
			"castmember": "[See Person]",
			"characterName": "",
			"characterLink": ""
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
  This indicates where the work is created. Usually where the production companies or original publisher are from.
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
	"creativeWorkType": ""
}
```
### creators
  
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"creators": "[See Person]"
}
```
### directors
  
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"directors": "[See Person]"
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
  Genres of the work. It can be multiple genres.
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
	"imdbRating": ""
}
```
### imdbUri
  
* **Type:** String
* **Example:**
```
{
	"imdbUri": ""
}
```
### languages
  This is the language in which the work is originally created.
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
	"latestSeason": 0
}
```
### latestSeasonYear
  
* **Type:** Integer
* **Example:**
```
{
	"latestSeasonYear": 0
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
	"numAwards": ""
}
```
### numEpisodes
  
* **Type:** Integer
* **Example:**
```
{
	"numEpisodes": 0
}
```
### officialSites
  
* **Type:** String
* **Example:**
```
{
	"officialSites": ""
}
```
### parentTitle
  
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"parentTitle": "[See CreativeWork]"
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
	"plotSummary": ""
}
```
### posterImgLink
  
* **Type:** String
* **Example:**
```
{
	"posterImgLink": ""
}
```
### productionCompanies
  
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"productionCompanies": "[See Organization]"
}
```
### releaseDate
  
* **Type:** DDate
* **Example:**
```
{
	"releaseDate": {
		"str": "",
		"precision": 0,
		"timestamp": 0
	}
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
  
* **Type:** String
* **Example:**
```
{
	"videoMainLink": ""
}
```
### writers
  
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"writers": "[See Person]"
}
```
