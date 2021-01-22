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
			"castmember": {
				"recordId": "E36UrGbGyPzC0zOFH52H0-w@0",
				"name": "Willie Nelson",
				"websiteUris": [
					"imdb.com/name/nm0005268"
				],
				"surfaceForm": "Willie Nelson",
				"type": "Person"
			},
			"characterLink": "imdb.com/title/tt0364784/characters/nm0005268"
		},
		{
			"castmember": {
				"recordId": "E36UrGbGyPzC0zOFH52H0-w@1",
				"name": "Lyle Lovett",
				"websiteUris": [
					"imdb.com/name/nm0005164"
				],
				"surfaceForm": "Lyle Lovett",
				"type": "Person"
			}
		},
		{
			"castmember": {
				"recordId": "E36UrGbGyPzC0zOFH52H0-w@2",
				"name": "John Prine",
				"websiteUris": [
					"imdb.com/name/nm0697789"
				],
				"surfaceForm": "John Prine",
				"type": "Person"
			},
			"characterLink": "imdb.com/title/tt0364784/characters/nm0697789"
		}
	]
}
```
### color
  
* **Type:** String
* **Example:**
```
{
	"color": "Color"
}
```
### countryOfOrigin
  This indicates where the work is created. Usually where the production companies or original publisher are from.
* **Type:** String
* **Example:**
```
{
	"countryOfOrigin": [
		"USA"
	]
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
  
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"creators": [
		{
			"recordId": "E36UrGbGyPzC0zOFH52H0-w@398",
			"name": "Bill Arhos",
			"websiteUris": [
				"imdb.com/name/nm0034638"
			],
			"surfaceForm": "Bill Arhos",
			"position": "creativeWorkCreator",
			"type": "Person"
		}
	]
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
	"genres": [
		"Documentary",
		"Music"
	]
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
	"imdbRating": 8.1
}
```
### imdbUri
  
* **Type:** String
* **Example:**
```
{
	"imdbUri": "imdb.com/title/tt0364784"
}
```
### languages
  This is the language in which the work is originally created.
* **Type:** String
* **Example:**
```
{
	"languages": [
		"English"
	]
}
```
### latestSeason
  
* **Type:** Integer
* **Example:**
```
{
	"latestSeason": 45
}
```
### latestSeasonYear
  
* **Type:** Integer
* **Example:**
```
{
	"latestSeasonYear": 2020
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
	"numAwards": "1 win."
}
```
### numEpisodes
  
* **Type:** Integer
* **Example:**
```
{
	"numEpisodes": 394
}
```
### officialSites
  
* **Type:** String
* **Example:**
```
{
	"officialSites": [
		"imdb.com/offsite"
	]
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
	"plotKeywords": [
		"three word title",
		"place name in title",
		"city name in title"
	]
}
```
### plotSummary
  
* **Type:** String
* **Example:**
```
{
	"plotSummary": "Established singer-songwriters and acclaimed newcomers perform country, blues, rock, folk, bluegrass, and related styles of music from Studio 6A of public television station KLRU (formerly KLRN) at the University of Texas at Austin."
}
```
### posterImgLink
  
* **Type:** String
* **Example:**
```
{
	"posterImgLink": "m.media-amazon.com/images/M/MV5BZWFlYjg5Y2ItNTQ0MS00OTQ4LThiYzgtZTQ5ZGViNDQ1MTAyXkEyXkFqcGdeQXVyMjA0NDYyNjc@._V1_UX182_CR0,0,182,268_AL_.jpg"
}
```
### productionCompanies
  
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"productionCompanies": [
		{
			"recordId": "E36UrGbGyPzC0zOFH52H0-w@397",
			"name": "KLRU Austin",
			"websiteUris": [
				"imdb.com/company/co0143541"
			],
			"surfaceForm": "KLRU Austin",
			"position": "creativeWorkProductionOrganization",
			"type": "Organization"
		}
	]
}
```
### releaseDate
  
* **Type:** DDate
* **Example:**
```
{
	"releaseDate": {
		"str": "d1975-XX-XX",
		"precision": 1,
		"timestamp": 157766400000
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
