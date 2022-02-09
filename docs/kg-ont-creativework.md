---
id: kg-ont-creativework
title: CreativeWork
generatedBy: generateOntology.js
---

The Creative Work entity type encompasses movies, tv shows, musicals, scripts, and other creative works known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## CreativeWork Fields
* [RSS feed](#rss feed) 
* [appleGuid](#appleguid) 
* [artistCredit](#artistcredit) 
* [aspectRatio](#aspectratio) 
* [authors](#authors) 
* [boxOfficeGrossUsa](#boxofficegrossusa) 
* [boxOfficeOpeningWeekendUsa](#boxofficeopeningweekendusa) 
* [boxOfficeWorldGross](#boxofficeworldgross) 
* [budget](#budget) 
* [castmembers](#castmembers) 
* [color](#color) 
* [complete](#complete) 
* [countryOfOrigin](#countryoforigin) 
* [creators](#creators) 
* [creditedArtists](#creditedartists) 
* [directors](#directors) 
* [episodeNum](#episodenum) 
* [explicit](#explicit) 
* [genres](#genres) 
* [guests](#guests) 
* [imdbPopularity](#imdbpopularity) 
* [imdbRating](#imdbrating) 
* [imdbUri](#imdburi) 
* [languages](#languages) 
* [latestSeason](#latestseason) 
* [latestSeasonYear](#latestseasonyear) 
* [metaScore](#metascore) 
* [mpaaRating](#mpaarating) 
* [musicbrainzUri](#musicbrainzuri) 
* [numAwards](#numawards) 
* [numEpisodes](#numepisodes) 
* [numTracks](#numtracks) 
* [officialSites](#officialsites) 
* [parentTitle](#parenttitle) 
* [plotKeywords](#plotkeywords) 
* [plotSummary](#plotsummary) 
* [podCategories](#podcategories) 
* [podDescription](#poddescription) 
* [posterImgLink](#posterimglink) 
* [productionCompanies](#productioncompanies) 
* [releaseDate](#releasedate) 
* [runtime](#runtime) 
* [seasonNum](#seasonnum) 
* [taglines](#taglines) 
* [trackPosition](#trackposition) 
* [videoMainLink](#videomainlink) 
* [writers](#writers) 

## CreativeWork Field Details
Note that certain longer field examples may be truncated for readability.

### RSS feed
  
* **Type:** URL
* **Example:**
```
{
	"RSS feed": ""
}
```
### appleGuid
  
* **Type:** String
* **Example:**
```
{
	"appleGuid": ""
}
```
### artistCredit
  Artist Credit String
* **Type:** String
* **Example:**
```
{
	"artistCredit": ""
}
```
### aspectRatio
  
* **Type:** String
* **Example:**
```
{
	"aspectRatio": "16:9 HD"
}
```
### authors
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"authors": [
		{
			"summary": "",
			"image": "",
			"images": [
				{
					"classifications": "",
					"fingerprint": "",
					"title": "",
					"isCached": false,
					"url": ""
				}
			],
			"types": "",
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
		}
	]
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
	"budget": "$700,000 (estimated)"
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
				"summary": "",
				"image": "",
				"images": [
					{
						"classifications": "",
						"fingerprint": "",
						"title": "",
						"isCached": false,
						"url": ""
					}
				],
				"types": "",
				"websiteUris": "",
				"diffbotUri": "",
				"name": "",
				"targetDiffbotUri": "",
				"surfaceForm": ""
			},
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
	"color": "Color | Black and White"
}
```
### complete
  
* **Type:** Boolean
* **Example:**
```
{
	"complete": false
}
```
### countryOfOrigin
  This indicates where the work is created. Usually where the production companies or original publisher are from.
* **Type:** String
* **Example:**
```
{
	"countryOfOrigin": [
		"USA",
		"UK"
	]
}
```
### creators
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"creators": [
		{
			"summary": "",
			"image": "",
			"images": [
				{
					"classifications": "",
					"fingerprint": "",
					"title": "",
					"isCached": false,
					"url": ""
				}
			],
			"types": "",
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
		}
	]
}
```
### creditedArtists
  List of credited artists
* **Type:** LinkedEntity
* **Example:**
```
{
	"creditedArtists": [
		{
			"summary": "",
			"image": "",
			"images": [
				{
					"classifications": "",
					"fingerprint": "",
					"title": "",
					"isCached": false,
					"url": ""
				}
			],
			"types": "",
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
		}
	]
}
```
### directors
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"directors": [
		{
			"recordId": "EHLrH5S6NO1WRCHfaqeuujg@1",
			"name": "Rex Miller",
			"websiteUris": [
				"imdb.com/name/nm2682297"
			],
			"surfaceForm": "Rex Miller",
			"position": "creativeWorkDirector",
			"type": "Person"
		}
	]
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
### explicit
  
* **Type:** Boolean
* **Example:**
```
{
	"explicit": false
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
		"Biography",
		"History"
	]
}
```
### guests
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"guests": [
		{
			"summary": "",
			"image": "",
			"images": [
				{
					"classifications": "",
					"fingerprint": "",
					"title": "",
					"isCached": false,
					"url": ""
				}
			],
			"types": "",
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
		}
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
	"imdbRating": 6.9
}
```
### imdbUri
  Link to the IMDB profile of this entity
* **Type:** URL
* **Example:**
```
{
	"imdbUri": "imdb.com/title/tt2214799"
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
### musicbrainzUri
  Link to the Musicbrainz profile of this entity
* **Type:** URL
* **Example:**
```
{
	"musicbrainzUri": ""
}
```
### numAwards
  
* **Type:** String
* **Example:**
```
{
	"numAwards": "2 wins."
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
### numTracks
  
* **Type:** Integer
* **Example:**
```
{
	"numTracks": 0
}
```
### officialSites
  
* **Type:** URL
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
	"parentTitle": {
		"summary": "",
		"image": "",
		"images": [
			{
				"classifications": "",
				"fingerprint": "",
				"title": "",
				"isCached": false,
				"url": ""
			}
		],
		"types": "",
		"websiteUris": "",
		"diffbotUri": "",
		"name": "",
		"targetDiffbotUri": "",
		"surfaceForm": ""
	}
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
	"plotSummary": "Meet Althea Gibson, the first African American to play and win at Wimbledon and the U.S. Nationals."
}
```
### podCategories
  
* **Type:** String
* **Example:**
```
{
	"podCategories": ""
}
```
### podDescription
  
* **Type:** String
* **Example:**
```
{
	"podDescription": ""
}
```
### posterImgLink
  
* **Type:** URL
* **Example:**
```
{
	"posterImgLink": "m.media-amazon.com/images/M/MV5BYzI2NDlkZmQtZmU5ZS00ZGMzLTk2ZjktNGQwODcxMDQ3ZmQzXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_UY268_CR9,0,182,268_AL_.jpg"
}
```
### productionCompanies
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"productionCompanies": [
		{
			"recordId": "EHLrH5S6NO1WRCHfaqeuujg@0",
			"name": "Rexpix Media",
			"websiteUris": [
				"imdb.com/company/co0211205"
			],
			"surfaceForm": "Rexpix Media",
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
		"str": "d2014-XX-XX",
		"precision": 1,
		"timestamp": 1388534400000
	}
}
```
### runtime
  
* **Type:** String
* **Example:**
```
{
	"runtime": "83 min"
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
### trackPosition
  
* **Type:** Integer
* **Example:**
```
{
	"trackPosition": 0
}
```
### videoMainLink
  
* **Type:** URL
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
	"writers": [
		{
			"summary": "",
			"image": "",
			"images": [
				{
					"classifications": "",
					"fingerprint": "",
					"title": "",
					"isCached": false,
					"url": ""
				}
			],
			"types": "",
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
		}
	]
}
```
