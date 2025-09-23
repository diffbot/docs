---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: kg-ont-person
title: Person
generatedBy: generateOntology.js
---

The person entity type encompasses all people known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Person Fields
* [age](#age) 
* [allDescriptions](#alldescriptions) 
* [allNames](#allnames) 
* [allOriginHashes](#alloriginhashes) 
* [allUriDetails](#alluridetails) 
* [allUris](#alluris) 
* [angellistUri](#angellisturi) 
* [articles](#articles) 
* [awards](#awards) 
* [birthDate](#birthdate) 
* [birthPlace](#birthplace) 
* [blogUri](#bloguri) 
* [children](#children) 
* [colleagues](#colleagues) 
* [connectedIndustries](#connectedindustries) 
* [crawlTimestamp](#crawltimestamp) 
* [crunchbaseUri](#crunchbaseuri) 
* [deathDate](#deathdate) 
* [deathPlace](#deathplace) 
* [description](#description) 
* [descriptors](#descriptors) 
* [diffbotUri](#diffboturi) 
* [educations](#educations) 
* [emailAddresses](#emailaddresses) 
* [employments](#employments) 
* [eyeColor](#eyecolor) 
* [facebookUri](#facebookuri) 
* [gender](#gender) 
* [githubUri](#githuburi) 
* [googlePlusUri](#googleplusuri) 
* [height](#height) 
* [homepageUri](#homepageuri) 
* [id](#id) 
* [image](#image) 
* [images](#images) 
* [importance](#importance) 
* [instagramUri](#instagramuri) 
* [interests](#interests) 
* [languages](#languages) 
* [linkedInUri](#linkedinuri) 
* [location](#location) 
* [locations](#locations) 
* [name](#name) 
* [nameDetail](#namedetail) 
* [nationalities](#nationalities) 
* [nbFollowers](#nbfollowers) 
* [nbIncomingEdges](#nbincomingedges) 
* [nbOrigins](#nborigins) 
* [netWorth](#networth) 
* [nonCanonicalFacts](#noncanonicalfacts) 
* [npiNumbers](#npinumbers) 
* [originDetails](#origindetails) 
* [origins](#origins) 
* [parents](#parents) 
* [phoneNumbers](#phonenumbers) 
* [politicalAffiliation](#politicalaffiliation) 
* [religion](#religion) 
* [sepMexicoIds](#sepmexicoids) 
* [siblings](#siblings) 
* [skills](#skills) 
* [summary](#summary) 
* [twitterUri](#twitteruri) 
* [type](#type) 
* [types](#types) 
* [unions](#unions) 
* [weight](#weight) 
* [wikipediaPageviews](#wikipediapageviews) 
* [wikipediaPageviewsGrowth](#wikipediapageviewsgrowth) 
* [wikipediaPageviewsLastQuarter](#wikipediapageviewslastquarter) 
* [wikipediaPageviewsLastQuarterGrowth](#wikipediapageviewslastquartergrowth) 
* [wikipediaPageviewsLastYear](#wikipediapageviewslastyear) 
* [wikipediaPageviewsLastYearGrowth](#wikipediapageviewslastyeargrowth) 
* [wikipediaUri](#wikipediauri) 
* [youtubeUri](#youtubeuri) 

## Person Field Details
Note that certain longer field examples may be truncated for readability.

### age
  A person&#39;s age.
* **Type:** Integer
* **Example:**
```
{
	"age": 80
}
```
### allDescriptions
  All descriptions found for this entity. For the best description, refer to the field &#39;description&#39;.
* **Type:** String
* **Example:**
```
{
	"allDescriptions": [
		"Thomas Edgar Wheeler (born April 5, 1946) is an American businessman and former government official. A member of the Democratic Party, he served as the 31st Chairman of the Federal Communications Commission.",
		"Tom Wheeler is the current Chairman at Alef. Prior to this, they were Managing Director at Core Capital Partners, President/CEO of the Cellular Telecommunications & Internet Association, and Chairman of the Federal Communications Commission. Tom has also held positions at Harvard Kennedy School and Harvard Law School. Tom Wheeler attended The Ohio State University, where they studied international trade.",
		"Tom Wheeler is the Managing Director of Core Capital Partners. He previously worked at FCC as a Chairman. Tom Wheeler attended The Ohio State University."
	]
}
```
### allNames
  All names used, including nicknames, full names and transliterations to other languages.
* **Type:** String
* **Example:**
```
{
	"allNames": [
		"Tom Wheeler",
		"Том Вилер",
		"汤姆·惠勒"
	]
}
```
### allOriginHashes
  For Diffbot&#39;s internal use only.
* **Type:** String
* **Example:**
```
{
	"allOriginHashes": [
		"Tc5u2UoRP0iZY1D1f79u7Q",
		"SDAaBzTNN5mysszerQ1VNg",
		"3GudoNIfOaWgx29PAPZ2zA"
	]
}
```
### allUriDetails
  Additional information about each URI in &#39;allUris&#39;, which lists the URIs associated with this entity.
* **Type:** UriDetails
* **Example:**
```
{
	"allUriDetails": [
		{
			"domainMonthlyTrafficGrowth": "",
			"domainMonthlyTraffic": 0,
			"redirectsTo": "",
			"nbFollowing": 0,
			"uriType": "",
			"verified": false,
			"nbLinkedAccounts": 0,
			"nbFollowers": 0,
			"httpCodeTimestamp": 0,
			"httpCode": "",
			"uri": ""
		}
	]
}
```
### allUris
  All URIs associated with an entity. A URI (uniform resource identifier) is a page on the web that describes an entity (e.g., an company&#39;s homepage or a person&#39;s social network profile).
* **Type:** URL
* **Example:**
```
{
	"allUris": [
		"bloomberg.com/profile/person/2045213",
		"bloomberg.com/profiles/people/2045213-thomas-e-wheeler",
		"bloomberg.com/profiles/people/2045213-thomas-wheeler"
	]
}
```
### angellistUri
  Link to the Angel List profile of the Person entity
* **Type:** URL
* **Example:**
```
{
	"angellistUri": ""
}
```
### articles
  Articles written by this person.
* **Type:** LinkedEntity
* **Example:**
```
{
	"articles": [
		{
			"name": "Mr. Lincoln's T-Mails: The Untold Story of How Abraham Lincoln Used the Telegraph to Win the Civil War // 2006 HarperCollins -",
			"type": "Article"
		},
		{
			"name": "Take Command: Leadership Lessons from the Civil War // 2000 Doubleday -",
			"type": "Article"
		},
		{
			"name": "From Gutenberg to Google: The History of Our Future // Brookings Institution Press February 26, 2019 -",
			"type": "Article"
		}
	]
}
```
### awards
  Awards received.
* **Type:** Award
* **Example:**
```
{
	"awards": [
		{
			"date": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"title": ""
		}
	]
}
```
### birthDate
  A person&#39;s date of birth.
* **Type:** DDate
* **Example:**
```
{
	"birthDate": {
		"str": "d1946-04-05",
		"precision": 3,
		"timestamp": -749260800000
	}
}
```
### birthPlace
  A person&#39;s place of birth.
* **Type:** Location
* **Example:**
```
{
	"birthPlace": {
		"country": {
			"summary": "Country located primarily in North America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGq%3Eh%5D%7Dab%3B%60zBlElnGl6anIdpR%7BW%5EvOdKQBTx.oCJ",
			"types": [
				"Place",
				"AdministrativeArea",
				"Country"
			],
			"name": "United States",
			"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
			"type": "Place"
		},
		"isCurrent": false,
		"address": "Redlands, California, United States",
		"city": {
			"summary": "City in San Bernardino County, California, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDr%3EhV%7D%5Dh8%2Cz6YGknz%2C6%3FkHq%7CRvV%2Cq3R6r-p9%7D%28Og5_1D%5D9Zo9%29f%28I6Tk4Ww%29.%3Aan",
			"types": [
				"Place",
				"AdministrativeArea",
				"City"
			],
			"name": "Redlands",
			"diffbotUri": "http://diffbot.com/entity/EEGqoBftsOZyh3_RKbQE3mw",
			"targetDiffbotId": "EEGqoBftsOZyh3_RKbQE3mw",
			"type": "Place"
		},
		"metroArea": {
			"summary": "Metropolitan area and region in Southern California, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FDvsq%3ExP%7Bo3L%7EzEn7lzQr%40%5BkC5Kjs.c2W",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Inland Empire",
			"diffbotUri": "http://diffbot.com/entity/EfvaXmNJePu-q6vYkH_619Q",
			"targetDiffbotId": "EfvaXmNJePu-q6vYkH_619Q",
			"type": "Place"
		},
		"subregion": {
			"summary": "County in California, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqt%3ExS%7DYb%3B%60z4%5BFXQ%3DxENxHn9Sqvh7%5E5P%2C%7D2f%3Ae3RnHdr.%7BOV",
			"types": [
				"Place",
				"AdministrativeArea",
				"Subregion"
			],
			"name": "San Bernardino County",
			"diffbotUri": "http://diffbot.com/entity/EApueG2dHP3iRBLbjF2w2gQ",
			"targetDiffbotId": "EApueG2dHP3iRBLbjF2w2gQ",
			"type": "Place"
		},
		"latitude": 34.04679489135742,
		"precision": 9.702208518981934,
		"postalCode": "92374",
		"surfaceForm": "Redlands, California, United States",
		"region": {
			"summary": "State of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtr%3EnAo-8UY%5EBfA_%7EJt%40N%2CCS0ZsGZqQ%2F%3BO%3C%5EwBd2Uj9HvRq%3C%5E.Pw4",
			"types": [
				"Place",
				"AdministrativeArea",
				"Region"
			],
			"name": "California",
			"diffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
			"targetDiffbotId": "El0_8ehooNxOPT36Y4RdV9w",
			"type": "Place"
		},
		"longitude": -117.17427062988281
	}
}
```
### blogUri
  This is a link to Person entity&#39;s written journal
* **Type:** URL
* **Example:**
```
{
	"blogUri": ""
}
```
### children
  This person&#39;s children.
* **Type:** LinkedEntity
* **Example:**
```
{
	"children": [
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
			"diffbotUri": "",
			"name": ""
		}
	]
}
```
### colleagues
  People with whom this person has a work or academic relationship.
* **Type:** Colleague
* **Example:**
```
{
	"colleagues": [
		{
			"isCurrent": false,
			"from": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"to": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"relationship": {},
			"colleague": {
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
				"diffbotUri": "",
				"name": ""
			}
		}
	]
}
```
### connectedIndustries
  Industries of current and former employers.
* **Type:** Industry
* **Example:**
```
{
	"connectedIndustries": {}
}
```
### crawlTimestamp
  The default crawlTimestamp is the most recent date of all of the crawlTimestamps of the origins used to compute the Entity, returned as a UNIX time.
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 1757054954
}
```
### crunchbaseUri
  Link to the Crunchbase profile of the Person entity
* **Type:** URL
* **Example:**
```
{
	"crunchbaseUri": "crunchbase.com/person/tom-wheeler"
}
```
### deathDate
  A person&#39;s date of death.
* **Type:** DDate
* **Example:**
```
{
	"deathDate": {
		"str": "",
		"precision": 0,
		"timestamp": 0
	}
}
```
### deathPlace
  A person&#39;s place of death.
* **Type:** Location
* **Example:**
```
{
	"deathPlace": {
		"venue": "",
		"country": {
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
			"diffbotUri": "",
			"name": ""
		},
		"address": "",
		"city": {
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
			"diffbotUri": "",
			"name": ""
		},
		"subregion": {
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
			"diffbotUri": "",
			"name": ""
		},
		"latitude": "",
		"precision": "",
		"postalCode": "",
		"locationType": [],
		"surfaceForm": "",
		"poBox": "",
		"isCurrent": false,
		"estimatedValue": {
			"currency": "",
			"value": ""
		},
		"occupancyType": "",
		"isPrimary": false,
		"street": "",
		"metroArea": {
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
			"diffbotUri": "",
			"name": ""
		},
		"estimatedEquity": {
			"currency": "",
			"value": ""
		},
		"region": {
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
			"diffbotUri": "",
			"name": ""
		},
		"rawAdministrativeArea": {
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
			"diffbotUri": "",
			"name": ""
		},
		"longitude": ""
	}
}
```
### description
  A few sentences describing an entity
* **Type:** String
* **Example:**
```
{
	"description": "Tom Wheeler is the current Chairman at Alef. Prior to this, they were Managing Director at Core Capital Partners, President/CEO of the Cellular Telecommunications & Internet Association, and Chairman of the Federal Communications Commission. Tom has also held positions at Harvard Kennedy School and Harvard Law School. Tom Wheeler attended The Ohio State University, where they studied international trade."
}
```
### descriptors
  A list of free-form keywords describing this entity
* **Type:** String
* **Example:**
```
{
	"descriptors": ""
}
```
### diffbotUri
  diffbotUri is the URI an entity&#39;s  (URI), which is defined by appending the Diffbot ID to the URL https:&#x2F;&#x2F;diffbot.com&#x2F;entity&#x2F;. For example, Diffbot&#39;s entityID is CWSwJ_SWQPfqO3HQsxY4lGg and its DiffbotUri is https:&#x2F;&#x2F;diffbot.com&#x2F;entity&#x2F;CWSwJ_SWQPfqO3HQsxY4lGg
* **Type:** URL
* **Example:**
```
{
	"diffbotUri": "http://diffbot.com/entity/EEIzhzuLVPeKuQ7KjPSa6aQ"
}
```
### educations
  Education history.
* **Type:** Education
* **Example:**
```
{
	"educations": [
		{
			"institution": {
				"summary": "Public research university in Columbus, Ohio, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.%5DjEp9G.Bd%7Bk%40UuPNeL%7D-Dz_z-Ze%3Bn-kiKc-b%5Dvv%3FURLN8U%7CzN_%3Cb4E.A%5Dm",
				"types": [
					"Organization",
					"Corporation",
					"Company",
					"OrganizationInvestor"
				],
				"name": "Ohio State University",
				"diffbotUri": "http://diffbot.com/entity/EXqnLTSovNzi-4KlIxjHhyA",
				"targetDiffbotId": "EXqnLTSovNzi-4KlIxjHhyA",
				"type": "Organization"
			},
			"isCurrent": false,
			"major": {
				"name": "Business, International Trade",
				"type": "EducationMajorEntity"
			},
			"degree": {
				"types": [
					"Intangible",
					"DegreeEntity"
				],
				"name": "Bachelor's (4 year program)",
				"diffbotUri": "http://diffbot.com/entity/EtWuqNi7UOGu2JRK_z95kDg",
				"targetDiffbotId": "EtWuqNi7UOGu2JRK_z95kDg",
				"type": "DegreeEntity"
			},
			"from": {
				"str": "d1964-XX-XX",
				"precision": 1,
				"timestamp": -189388800000
			},
			"to": {
				"str": "d1968-XX-XX",
				"precision": 1,
				"timestamp": -63158400000
			}
		},
		{
			"institution": {
				"summary": "Public research university in Columbus, Ohio, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.%5DjEp9G.Bd%7Bk%40UuPNeL%7D-Dz_z-Ze%3Bn-kiKc-b%5Dvv%3FURLN8U%7CzN_%3Cb4E.A%5Dm",
				"types": [
					"Organization",
					"Corporation",
					"Company",
					"OrganizationInvestor"
				],
				"name": "Ohio State University",
				"diffbotUri": "http://diffbot.com/entity/EXqnLTSovNzi-4KlIxjHhyA",
				"targetDiffbotId": "EXqnLTSovNzi-4KlIxjHhyA",
				"type": "Organization"
			},
			"isCurrent": false,
			"degree": {
				"name": "International Trade",
				"type": "DegreeEntity"
			},
			"from": {
				"str": "d1964-XX-XX",
				"precision": 1,
				"timestamp": -189388800000
			},
			"to": {
				"str": "d1968-XX-XX",
				"precision": 1,
				"timestamp": -63158400000
			}
		}
	]
}
```
### emailAddresses
  A person&#39;s public email address.
* **Type:** Contact
* **Example:**
```
{
	"emailAddresses": [
		{
			"contactString": "",
			"type": ""
		}
	]
}
```
### employments
  Employment history, including significant investments, board memberships.
* **Type:** Employment
* **Example:**
```
{
	"employments": [
		{
			"isCurrent": true,
			"employer": {
				"summary": "Lifestyle experience provider",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.%5DjEp9G.Bd%7BkBXpJP1K%2F-_1%5BZ-Zg6q-j4Rk-E%7CIosYv0pgO1zN_%3Cb4E.A%5Dm",
				"types": [
					"Organization",
					"Corporation",
					"Company"
				],
				"name": "Alef Group",
				"diffbotUri": "http://diffbot.com/entity/EGqlO7Wv1NbKOXE9teORnEg",
				"targetDiffbotId": "EGqlO7Wv1NbKOXE9teORnEg",
				"type": "Organization"
			},
			"from": {
				"str": "d2022-05-01",
				"precision": 3,
				"timestamp": 1651363200000
			},
			"categories": [
				{
					"types": [
						"Intangible",
						"EmploymentCategory"
					],
					"name": "Board Member",
					"diffbotUri": "http://diffbot.com/entity/EnC5drWy1NVuOGQHd2ll0xw",
					"targetDiffbotId": "EnC5drWy1NVuOGQHd2ll0xw",
					"type": "EmploymentCategory"
				},
				{
					"types": [
						"Intangible",
						"EmploymentCategory"
					],
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotId": "EpXGc9jmNPQW3wt-ny5SqCQ",
					"type": "EmploymentCategory"
				},
				{
					"types": [
						"Intangible",
						"EmploymentCategory"
					],
					"name": "Executive",
					"diffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotId": "EFHD6pfzYMtqdaaytNomkhA",
					"type": "EmploymentCategory"
				}
			],
			"title": "Board Member"
		},
		{
			"isCurrent": true,
			"employer": {
				"summary": "M&A advisory firm",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0SttV.LYeDo.C%7DLtpX%7C5k%7EO2%7CZPcZ%3CZs%3B6UP5H5OEsdZAwt%3BPMneU1%2Fj%2F%60%5B%3F%3B",
				"types": [
					"Organization",
					"Corporation",
					"Company"
				],
				"name": "Core Capital Group",
				"diffbotUri": "http://diffbot.com/entity/EfSccRU7EOpSsVPU9m73bLg",
				"targetDiffbotId": "EfSccRU7EOpSsVPU9m73bLg",
				"type": "Organization"
			},
			"from": {
				"str": "d2005-01-XX",
				"precision": 2,
				"timestamp": 1104537600000
			},
			"categories": [
				{
					"types": [
						"Intangible",
						"EmploymentCategory"
					],
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotId": "EpXGc9jmNPQW3wt-ny5SqCQ",
					"type": "EmploymentCategory"
				},
				{
					"types": [
						"Intangible",
						"EmploymentCategory"
					],
					"name": "Shareholder",
					"diffbotUri": "http://diffbot.com/entity/EnjEbsIYNORq7LaLzpGLaeg",
					"targetDiffbotId": "EnjEbsIYNORq7LaLzpGLaeg",
					"type": "EmploymentCategory"
				},
				{
					"types": [
						"Intangible",
						"EmploymentCategory"
					],
					"name": "Executive",
					"diffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotId": "EFHD6pfzYMtqdaaytNomkhA",
					"type": "EmploymentCategory"
				}
			],
			"title": "Partner"
		},
		{
			"isCurrent": true,
			"employer": {
				"summary": "Drone airspace management platform",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.%5DjEp9G.Bd%7Bkn8rRrb%7D%2F-%6008y-Ze%3Br-CdPG-B%7C%40pAYpOp4N%5BzN_%3Cb4E.A%5Dm",
				"types": [
					"Organization",
					"Corporation",
					"Company"
				],
				"name": "AirMap",
				"diffbotUri": "http://diffbot.com/entity/E66uGQYwVOYiNi050NUhhHw",
				"targetDiffbotId": "E66uGQYwVOYiNi050NUhhHw",
				"type": "Organization"
			},
			"from": {
				"str": "d2019-06-XX",
				"precision": 2,
				"timestamp": 1559347200000
			},
			"categories": [
				{
					"types": [
						"Intangible",
						"EmploymentCategory"
					],
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotId": "EpXGc9jmNPQW3wt-ny5SqCQ",
					"type": "EmploymentCategory"
				},
				{
					"types": [
						"Intangible",
						"EmploymentCategory"
					],
					"name": "Board Member",
					"diffbotUri": "http://diffbot.com/entity/EnC5drWy1NVuOGQHd2ll0xw",
					"targetDiffbotId": "EnC5drWy1NVuOGQHd2ll0xw",
					"type": "EmploymentCategory"
				},
				{
					"types": [
						"Intangible",
						"EmploymentCategory"
					],
					"name": "Executive",
					"diffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotId": "EFHD6pfzYMtqdaaytNomkhA",
					"type": "EmploymentCategory"
				}
			],
			"title": "Board Member"
		}
	]
}
```
### eyeColor
  This person&#39;s eye color.
* **Type:** EyeColor
* **Example:**
```
{
	"eyeColor": {}
}
```
### facebookUri
  Link to the Facebook profile of the Person entity
* **Type:** URL
* **Example:**
```
{
	"facebookUri": ""
}
```
### gender
  A person&#39;s gender.
* **Type:** Gender
* **Example:**
```
{
	"gender": {}
}
```
### githubUri
  Link to the Github page of the Person entity
* **Type:** URL
* **Example:**
```
{
	"githubUri": ""
}
```
### googlePlusUri
  Link to the Google+ profile of the Person entity
* **Type:** URL
* **Example:**
```
{
	"googlePlusUri": ""
}
```
### height
  This person&#39;s height in meters.
* **Type:** Float
* **Example:**
```
{
	"height": ""
}
```
### homepageUri
  Link to the homepage of the Person entity
* **Type:** URL
* **Example:**
```
{
	"homepageUri": "fcc.gov/leadership/tom-wheeler"
}
```
### id
  An alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies an entity.
* **Type:** String
* **Example:**
```
{
	"id": "EEIzhzuLVPeKuQ7KjPSa6aQ"
}
```
### image
  The main image used to represent the entity.
* **Type:** String
* **Example:**
```
{
	"image": "https://kg.diffbot.com/image/api/get?fetch=yes&urls=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtt%3Ey%5D9LZ4_0M_JX%7E%3El%40PoEqzTzRm1.%7BGW,g%3Cj7P0Stn8p.%5DjEp9G.Bd%7BkqXrSQgKx-h%2FYZ-Z8%5Dp-D%3B%7Cd-j%7DAQGVT%7Dp7P%2FzN_%3Cb4E.A%5Dm,g%3Cj7P0SttAc%3ANu.d9U%7CB%5DpM08.%7DZnIa6%40_%3Bv2FpDLhawxEr-%5BuTpJZ%40-r%3Ec2Jh9e%3EN7%5Bo%3Ed6MhKlx%7D_sO%5C9rr%3Bo2RoN%7E5Fv%3D_.Pw4"
}
```
### images
  The visual representation of an entity usually in the form of a png, jpeg, gif, or svg file.
* **Type:** ImageField
* **Example:**
```
{
	"images": [
		{
			"url": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtt%3Ey%5D9LZ4_0M_JX%7E%3El%40PoEqzTzRm1.%7BGW",
			"primary": true
		},
		{
			"url": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.%5DjEp9G.Bd%7BkqXrSQgKx-h%2FYZ-Z8%5Dp-D%3B%7Cd-j%7DAQGVT%7Dp7P%2FzN_%3Cb4E.A%5Dm",
			"primary": false
		},
		{
			"url": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0SttAc%3ANu.d9U%7CB%5DpM08.%7DZnIa6%40_%3Bv2FpDLhawxEr-%5BuTpJZ%40-r%3Ec2Jh9e%3EN7%5Bo%3Ed6MhKlx%7D_sO%5C9rr%3Bo2RoN%7E5Fv%3D_.Pw4",
			"primary": false
		}
	]
}
```
### importance
  A number between 0 and 100 indicating how important or popular an entity is.
* **Type:** Float
* **Example:**
```
{
	"importance": 96.83421325683594
}
```
### instagramUri
  Link to the Instagram profile of the Person entity
* **Type:** URL
* **Example:**
```
{
	"instagramUri": ""
}
```
### interests
  Organizations, products and activities of interest.
* **Type:** LinkedEntity
* **Example:**
```
{
	"interests": [
		{
			"name": "investing",
			"type": "Miscellaneous"
		},
		{
			"name": "planning",
			"type": "Miscellaneous"
		},
		{
			"name": "lobbying",
			"type": "Miscellaneous"
		}
	]
}
```
### languages
  Languages spoken, written or signed by this person.
* **Type:** Language
* **Example:**
```
{
	"languages": {}
}
```
### linkedInUri
  Link to the LinkedIn profile of the Person entity
* **Type:** URL
* **Example:**
```
{
	"linkedInUri": "linkedin.com/in/tom-wheeler-62255214"
}
```
### location
  The most representative location for the Person entity
* **Type:** Location
* **Example:**
```
{
	"location": {
		"country": {
			"summary": "Country located primarily in North America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGq%3Eh%5D%7Dab%3B%60zBlElnGl6anIdpR%7BW%5EvOdKQBTx.oCJ",
			"types": [
				"Place",
				"AdministrativeArea",
				"Country"
			],
			"name": "United States",
			"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
			"type": "Place"
		},
		"isCurrent": true,
		"address": "Washington, District of Columbia, USA",
		"city": {
			"summary": "Capital city of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40q%3EkZ%7DTb%3B%60z8%5BKaxFmK%5Ct%2Cd_.U.l8W",
			"types": [
				"Place",
				"AdministrativeArea",
				"City"
			],
			"name": "Washington, D.C.",
			"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
			"type": "Place"
		},
		"metroArea": {
			"summary": "Metropolitan area centered on Washington, D.C.",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtp%3EzA%7B%3BdBsza%7DX2A%5E-m-8l7Sx-fyIOR%3Cb7Pq%7Dr6Hs9jw9%7CATg%3Dh%40N%7DSb8a18%3F%3F_%7C%3Dc%3DY.Fmz",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Washington metropolitan area",
			"diffbotUri": "http://diffbot.com/entity/EbKIavbI8PhiHKmthsK_vTw",
			"targetDiffbotId": "EbKIavbI8PhiHKmthsK_vTw",
			"type": "Place"
		},
		"subregion": {
			"summary": "Capital city of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40q%3EkZ%7DTb%3B%60z8%5BKaxFmK%5Ct%2Cd_.U.l8W",
			"types": [
				"Place",
				"AdministrativeArea",
				"City"
			],
			"name": "Washington, D.C.",
			"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
			"type": "Place"
		},
		"latitude": 38.82651901245117,
		"precision": 13.315855979919434,
		"postalCode": "20032",
		"surfaceForm": "Washington, District of Columbia, USA",
		"region": {
			"summary": "Capital city of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40q%3EkZ%7DTb%3B%60z8%5BKaxFmK%5Ct%2Cd_.U.l8W",
			"types": [
				"Place",
				"AdministrativeArea",
				"City"
			],
			"name": "Washington, D.C.",
			"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
			"type": "Place"
		},
		"longitude": -77.01712036132812
	}
}
```
### locations
  All places where a person has lived. The field &#39;isCurrent&#39; indicates the current location for this person.
* **Type:** Location
* **Example:**
```
{
	"locations": [
		{
			"country": {
				"summary": "Country located primarily in North America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGq%3Eh%5D%7Dab%3B%60zBlElnGl6anIdpR%7BW%5EvOdKQBTx.oCJ",
				"types": [
					"Place",
					"AdministrativeArea",
					"Country"
				],
				"name": "United States",
				"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "Place"
			},
			"isCurrent": true,
			"address": "Washington, District of Columbia, USA",
			"city": {
				"summary": "Capital city of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40q%3EkZ%7DTb%3B%60z8%5BKaxFmK%5Ct%2Cd_.U.l8W",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "Washington, D.C.",
				"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
				"type": "Place"
			},
			"metroArea": {
				"summary": "Metropolitan area centered on Washington, D.C.",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtp%3EzA%7B%3BdBsza%7DX2A%5E-m-8l7Sx-fyIOR%3Cb7Pq%7Dr6Hs9jw9%7CATg%3Dh%40N%7DSb8a18%3F%3F_%7C%3Dc%3DY.Fmz",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Washington metropolitan area",
				"diffbotUri": "http://diffbot.com/entity/EbKIavbI8PhiHKmthsK_vTw",
				"targetDiffbotId": "EbKIavbI8PhiHKmthsK_vTw",
				"type": "Place"
			},
			"subregion": {
				"summary": "Capital city of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40q%3EkZ%7DTb%3B%60z8%5BKaxFmK%5Ct%2Cd_.U.l8W",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "Washington, D.C.",
				"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
				"type": "Place"
			},
			"latitude": 38.82651901245117,
			"precision": 13.315855979919434,
			"postalCode": "20032",
			"surfaceForm": "Washington, District of Columbia, USA",
			"region": {
				"summary": "Capital city of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40q%3EkZ%7DTb%3B%60z8%5BKaxFmK%5Ct%2Cd_.U.l8W",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "Washington, D.C.",
				"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
				"type": "Place"
			},
			"longitude": -77.01712036132812
		},
		{
			"country": {
				"summary": "Country located primarily in North America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGq%3Eh%5D%7Dab%3B%60zBlElnGl6anIdpR%7BW%5EvOdKQBTx.oCJ",
				"types": [
					"Place",
					"AdministrativeArea",
					"Country"
				],
				"name": "United States",
				"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "Place"
			},
			"address": "409 Santa Monica Boulevard, Santa Monica, California",
			"city": {
				"summary": "Beachfront city in Los Angeles County, California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEq%3ExS%7DYb%3B%60z4%5BFmp7SF%5BoGf%2CCUDe%7BV0I%5E7P.%3Ej4",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "Santa Monica",
				"diffbotUri": "http://diffbot.com/entity/EHwsBJbg3M7exvBfQN-WJ8Q",
				"targetDiffbotId": "EHwsBJbg3M7exvBfQN-WJ8Q",
				"type": "Place"
			},
			"street": "409 Santa Monica Boulevard",
			"metroArea": {
				"summary": "Metropolitan area in California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtu%3Eq%5D%3FLD%3Aa0M_K%2CnkG6SxSrzXzHXsY3.Z%3EV",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Los Angeles metropolitan area",
				"diffbotUri": "http://diffbot.com/entity/EKhZFGU1RPQi0GJOv2ZIylw",
				"targetDiffbotId": "EKhZFGU1RPQi0GJOv2ZIylw",
				"type": "Place"
			},
			"subregion": {
				"summary": "County in California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtu%3Eq%5D%3FLD%3Aa0M_K%2CnkG6SxSrzXzHXsY3.Z%3EV",
				"types": [
					"Place",
					"AdministrativeArea",
					"Subregion"
				],
				"name": "Los Angeles County",
				"diffbotUri": "http://diffbot.com/entity/ELvekhrK-MZSKBlAHI-t_Pg",
				"targetDiffbotId": "ELvekhrK-MZSKBlAHI-t_Pg",
				"type": "Place"
			},
			"latitude": 34.0155143737793,
			"precision": 0.22360679507255554,
			"postalCode": "90401",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtr%3EnAo-8UY%5EBfA_%7EJt%40N%2CCS0ZsGZqQ%2F%3BO%3C%5EwBd2Uj9HvRq%3C%5E.Pw4",
				"types": [
					"Place",
					"AdministrativeArea",
					"Region"
				],
				"name": "California",
				"diffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
				"targetDiffbotId": "El0_8ehooNxOPT36Y4RdV9w",
				"type": "Place"
			},
			"longitude": -118.4967041015625
		},
		{
			"country": {
				"summary": "Country located primarily in North America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGq%3Eh%5D%7Dab%3B%60zBlElnGl6anIdpR%7BW%5EvOdKQBTx.oCJ",
				"types": [
					"Place",
					"AdministrativeArea",
					"Country"
				],
				"name": "United States",
				"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "Place"
			},
			"address": "Boston, Massachusetts",
			"city": {
				"summary": "Capital and largest city of Massachusetts, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqP%3Exc2Sr8eztiMg3QetNyWf%7EL7V%5E6d46Y%3CRt%40l%3CU%5DN%60u9iGSg%5Bu6TwTm4a5%3Af5Uf1p4Fq%3B%3F2O%7EJ_iPr6P2Pd%7Ehz%3F.Eip",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "Boston",
				"diffbotUri": "http://diffbot.com/entity/E7vnJ0j-OP4qXP4s9wNDbEQ",
				"targetDiffbotId": "E7vnJ0j-OP4qXP4s9wNDbEQ",
				"type": "Place"
			},
			"metroArea": {
				"summary": "Metropolitan area in Massachusetts, New Hampshire and Rhode Island, USA",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtp%3El%601Nw1l%7DPmLh%7DZ.G%5Bm",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Greater Boston",
				"diffbotUri": "http://diffbot.com/entity/Es5VXYfClMLeSpzD5N0Cx1A",
				"targetDiffbotId": "Es5VXYfClMLeSpzD5N0Cx1A",
				"type": "Place"
			},
			"subregion": {
				"summary": "County in Massachusetts, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEv%3ExS%7DYb%3B%60z4o%3E_%7EDq60uYs%3F%5D%2CBFsc48S6dx3pAV.Jix",
				"types": [
					"Place",
					"AdministrativeArea",
					"Subregion"
				],
				"name": "Suffolk County",
				"diffbotUri": "http://diffbot.com/entity/EIFKVGfbmM5-wj_KE0Yx4oQ",
				"targetDiffbotId": "EIFKVGfbmM5-wj_KE0Yx4oQ",
				"type": "Place"
			},
			"latitude": 42.355491638183594,
			"precision": 11.640422821044922,
			"postalCode": "02110",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHp%3ExS%7DYb%3B%60z%7E%5BKlp%3BnL%60kXy%3E.5Y%60",
				"types": [
					"Place",
					"AdministrativeArea",
					"Region"
				],
				"name": "Massachusetts",
				"diffbotUri": "http://diffbot.com/entity/E0VAbhEeRNsSvhHIpmhd3Xw",
				"targetDiffbotId": "E0VAbhEeRNsSvhHIpmhd3Xw",
				"type": "Place"
			},
			"longitude": -71.04861450195312
		}
	]
}
```
### name
  Primary text label for this entity.
* **Type:** String
* **Example:**
```
{
	"name": "Tom Wheeler"
}
```
### nameDetail
  Parts of the name (e.g., first name, last name, middle name).
* **Type:** NameDetail
* **Example:**
```
{
	"nameDetail": {
		"firstName": "Thomas",
		"lastName": "Wheeler",
		"middleName": [
			"Edgar"
		],
		"nicknames": [
			"Tom"
		]
	}
}
```
### nationalities
  The countries where this person is a national or a citizen.
* **Type:** LinkedEntity
* **Example:**
```
{
	"nationalities": [
		{
			"name": "United States",
			"type": "AdministrativeArea"
		}
	]
}
```
### nbFollowers
  The sum of followers across social networks
* **Type:** Integer
* **Example:**
```
{
	"nbFollowers": 14008
}
```
### nbIncomingEdges
  This is the number of edges in the Knowledge Graph that point to this entity. For example, the nbIncomingEdges field for Google is over 100,000. This number includes the number of people that work at google, the number of investors who invested in google, etc.
* **Type:** Integer
* **Example:**
```
{
	"nbIncomingEdges": 31
}
```
### nbOrigins
  Total number of origins in the field &#39;origins&#39;. This field is only available in extended JSON mode.
* **Type:** Integer
* **Example:**
```
{
	"nbOrigins": 69
}
```
### netWorth
  A person&#39;s estimated net worth (the value the assets minus liabilities).
* **Type:** Amount
* **Example:**
```
{
	"netWorth": {
		"currency": "USD",
		"value": 9663373
	}
}
```
### nonCanonicalFacts
  Enumerates all the non-canonical fields (i.e., those not defined in the ontology) that have a value for this entity. For instance, if &#39;numberOfChildren&#39; is listed in &#39;nonCanonicalFacts&#39; then the entity JSON will have the key &#39;numberOfChildren&#39; with an associated value. This field is only provided when the parameter nonCanonicalFacts&#x3D;1 is set. See: https:&#x2F;&#x2F;docs.diffbot.com&#x2F;kgapi
* **Type:** String
* **Example:**
```
{
	"nonCanonicalFacts": ""
}
```
### npiNumbers
  The National Provider Identifier (NPI) is a unique identification number for covered health care providers. 
* **Type:** String
* **Example:**
```
{
	"npiNumbers": ""
}
```
### originDetails
  Additional information about origins listed in &#39;origins&#39;, including the latest time it was crawled. This field is only available in extended JSON mode.
* **Type:** OriginDetail
* **Example:**
```
{
	"originDetails": [
		{
			"crawledAt": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"origin": ""
		}
	]
}
```
### origins
  An origin is a web address where Diffbot found one or more facts about an entity. This field is only available in extended JSON mode.
* **Type:** String
* **Example:**
```
{
	"origins": [
		"abcnews.go.com/Technology/wireStory/apple-aims-solve-problems-locating-911-calls-55969895",
		"asianage.com/technology/in-other-news/180618/apple-aims-to-solve-problems-locating-911-calls-for-help.html",
		"bloomberg.com/profile/person/2045213"
	]
}
```
### parents
  This person&#39;s parents.
* **Type:** LinkedEntity
* **Example:**
```
{
	"parents": [
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
			"diffbotUri": "",
			"name": ""
		}
	]
}
```
### phoneNumbers
  A person&#39;s phone numbers.
* **Type:** PhoneNumber
* **Example:**
```
{
	"phoneNumbers": [
		{
			"string": "",
			"digits": ""
		}
	]
}
```
### politicalAffiliation
  Political party to which this person is affiliated.
* **Type:** LinkedEntity
* **Example:**
```
{
	"politicalAffiliation": [
		{
			"name": "Democratic Party",
			"type": "Organization"
		}
	]
}
```
### religion
  This person&#39;s religion.
* **Type:** Religion
* **Example:**
```
{
	"religion": {}
}
```
### sepMexicoIds
  The identification number of the profession license provided by Secretaría de Educación Pública (SEP).
* **Type:** String
* **Example:**
```
{
	"sepMexicoIds": ""
}
```
### siblings
  This person&#39;s siblings.
* **Type:** LinkedEntity
* **Example:**
```
{
	"siblings": [
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
			"diffbotUri": "",
			"name": ""
		}
	]
}
```
### skills
  Professional skills.
* **Type:** LinkedEntity
* **Example:**
```
{
	"skills": [
		{
			"name": "investment",
			"diffbotUri": "http://diffbot.com/entity/Emyrk4p-WOvGnIkgRO_yaGA",
			"targetDiffbotId": "Emyrk4p-WOvGnIkgRO_yaGA"
		},
		{
			"name": "economics",
			"diffbotUri": "http://diffbot.com/entity/E9kGv6JTWPMyWBAvoCfaQuw",
			"targetDiffbotId": "E9kGv6JTWPMyWBAvoCfaQuw"
		},
		{
			"name": "teaching",
			"diffbotUri": "http://diffbot.com/entity/Ez8ugmNmEN3mp_4eMLqGSsA",
			"targetDiffbotId": "Ez8ugmNmEN3mp_4eMLqGSsA"
		}
	]
}
```
### summary
  A short phrase designed to disambiguate entities with the same or similar name
* **Type:** String
* **Example:**
```
{
	"summary": "American businessman and politician"
}
```
### twitterUri
  Link to the Twitter profile of the Person entity
* **Type:** URL
* **Example:**
```
{
	"twitterUri": "twitter.com/tomwheelerfcc"
}
```
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": "Person"
}
```
### types
  All types of a Diffbot entity, including the value of the field &#39;type&#39;.
* **Type:** String
* **Example:**
```
{
	"types": [
		"Person",
		"PersonInvestor"
	]
}
```
### unions
  This person&#39;s unions, including marriages and civil unions.
* **Type:** Union
* **Example:**
```
{
	"unions": [
		{
			"isCurrent": false,
			"person": {
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
				"diffbotUri": "",
				"name": ""
			},
			"from": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"to": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"type": ""
		}
	]
}
```
### weight
  This person&#39;s weight in kilograms.
* **Type:** Float
* **Example:**
```
{
	"weight": ""
}
```
### wikipediaPageviews
  The number of views of its Wikipedia page of the last month if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviews": 1165
}
```
### wikipediaPageviewsGrowth
  The month over month growth of wikipediaPageviews, where we count the increment of the number of page views of the second to last (full) month, compared with that of the last (full) month. if today was Aug 16th, 2022, the last complete month is July. So it refers to the increment from June to July, i.e., ( f(July) - f(June) ) ÷ f(June) x 100%. The f(.) only counts the first 28 days of a month, to avoid fluctuations between 31-days months like Jan and 28(29)-days months like Feb.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsGrowth": 0.13216715
}
```
### wikipediaPageviewsLastQuarter
  The number of views of its Wikipedia page of the last quarter if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviewsLastQuarter": 4654
}
```
### wikipediaPageviewsLastQuarterGrowth
  The quarter over quarter growth of wikipediaPageviews, where we count the increment of the number of page views of the second to last (full) quarter, compared with that of the last (full) quarter. If today was Aug 16th, 2022, the last complete quarter is Q2 (April, May, June). So it refers to the increment from Q1 to Q2, i.e., ( f(Q2) - f(Q1) ) ÷ f(Q1) x 100%.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsLastQuarterGrowth": 0.8698272
}
```
### wikipediaPageviewsLastYear
  The number of views of its Wikipedia page of the last year if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviewsLastYear": 10562
}
```
### wikipediaPageviewsLastYearGrowth
  The year over year growth of wikipediaPageviews, where we count the monthly-rolling increment of the year before last than the last year. It today was Aug 16th, 2022, it is computed by comparing the numbers from Aug 2021 to July 2022 and from Aug 2020 to July 2021, i.e., ( f(Aug 2021 to July 2022) - f(Aug 2020 to July 2021) ) ÷ f(Aug 2020 to July 2021) x 100%.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsLastYearGrowth": -0.054685403
}
```
### wikipediaUri
  Link to the Wikipedia page of the Person entity
* **Type:** URL
* **Example:**
```
{
	"wikipediaUri": "en.wikipedia.org/wiki/Tom_Wheeler"
}
```
### youtubeUri
  Link to the Youtube page of the Person entity
* **Type:** URL
* **Example:**
```
{
	"youtubeUri": ""
}
```
