---
id: kg-ont-creativework
title: CreativeWork
---

The Creative Work entity type encompasses movies, tv shows, musicals, scripts, and other creative works known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

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
* [creativeWorkType](#creativeworktype) 
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
	"aspectRatio": "1.78 : 1"
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
				"recordId": "ErgKVmOjIOeiFEge88_z0Ow@0",
				"name": "Joni Mitchell",
				"websiteUris": [
					"imdb.com/name/nm0593474"
				],
				"surfaceForm": "Joni Mitchell",
				"type": "Person"
			}
		},
		{
			"castmember": {
				"recordId": "ErgKVmOjIOeiFEge88_z0Ow@1",
				"name": "Bill Flanagan",
				"websiteUris": [
					"imdb.com/name/nm1940634"
				],
				"surfaceForm": "Bill Flanagan",
				"type": "Person"
			}
		},
		{
			"castmember": {
				"recordId": "ErgKVmOjIOeiFEge88_z0Ow@2",
				"name": "David Crosby",
				"websiteUris": [
					"imdb.com/name/nm0004849"
				],
				"surfaceForm": "David Crosby",
				"type": "Person"
			}
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
		"USA"
	]
}
```
### creativeWorkType
  
* **Type:** String
* **Example:**
```
{
	"creativeWorkType": "tv episode"
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
			"recordId": "ErgKVmOjIOeiFEge88_z0Ow@18",
			"name": "Susan Lacy",
			"websiteUris": [
				"imdb.com/name/nm0480402"
			],
			"surfaceForm": "Susan Lacy",
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
	"episodeNum": 5
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
		"Biography"
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
	"imdbRating": 7.9
}
```
### imdbUri
  
* **Type:** URL
* **Example:**
```
{
	"imdbUri": "imdb.com/title/tt0778181"
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
		"recordId": "ErgKVmOjIOeiFEge88_z0Ow@19",
		"name": "American Masters",
		"websiteUris": [
			"imdb.com/title/tt0364151"
		],
		"surfaceForm": "American Masters",
		"position": "creativeWorkParentWork",
		"type": "CreativeWork"
	}
}
```
### plotKeywords
  
* **Type:** String
* **Example:**
```
{
	"plotKeywords": [
		"music episode",
		"song",
		"singer"
	]
}
```
### plotSummary
  
* **Type:** String
* **Example:**
```
{
	"plotSummary": "A profile of Canadian singer-songwriter Joni Mitchell, and how her music evolved from personal folk into pop, jazz and avant-garde."
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
	"posterImgLink": ""
}
```
### productionCompanies
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"productionCompanies": [
		{
			"recordId": "ErgKVmOjIOeiFEge88_z0Ow@15",
			"name": "Eagle Rock Entertainment",
			"websiteUris": [
				"imdb.com/company/co0015070"
			],
			"surfaceForm": "Eagle Rock Entertainment",
			"position": "creativeWorkProductionOrganization",
			"type": "Organization"
		},
		{
			"recordId": "ErgKVmOjIOeiFEge88_z0Ow@16",
			"name": "WNET Channel 13 New York",
			"websiteUris": [
				"imdb.com/company/co0037666"
			],
			"surfaceForm": "WNET Channel 13 New York",
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
		"str": "d2003-XX-XX",
		"precision": 1,
		"timestamp": 1041379200000
	}
}
```
### runtime
  
* **Type:** String
* **Example:**
```
{
	"runtime": "92 min"
}
```
### seasonNum
  
* **Type:** Integer
* **Example:**
```
{
	"seasonNum": 17
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
			"recordId": "ErgKVmOjIOeiFEge88_z0Ow@17",
			"name": "Susan Lacy",
			"websiteUris": [
				"imdb.com/name/nm0480402"
			],
			"surfaceForm": "Susan Lacy",
			"position": "creativeWorkWriter",
			"type": "Person"
		}
	]
}
```
