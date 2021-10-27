---
id: kg-ont-person
title: Person
---

The person entity type encompasses all people known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Person Fields
* [age](#age) 
* [angellistUri](#angellisturi) 
* [articles](#articles) 
* [awards](#awards) 
* [birthDate](#birthdate) 
* [birthPlace](#birthplace) 
* [blogUri](#bloguri) 
* [children](#children) 
* [colleagues](#colleagues) 
* [connectedIndustries](#connectedindustries) 
* [crunchbaseUri](#crunchbaseuri) 
* [deathDate](#deathdate) 
* [deathPlace](#deathplace) 
* [educations](#educations) 
* [emailAddresses](#emailaddresses) 
* [employments](#employments) 
* [eyeColor](#eyecolor) 
* [facebookUri](#facebookuri) 
* [friends](#friends) 
* [gender](#gender) 
* [githubUri](#githuburi) 
* [googlePlusUri](#googleplusuri) 
* [hairColor](#haircolor) 
* [height](#height) 
* [homepageUri](#homepageuri) 
* [instagramUri](#instagramuri) 
* [interests](#interests) 
* [languages](#languages) 
* [linkedInUri](#linkedinuri) 
* [location](#location) 
* [locations](#locations) 
* [nameDetail](#namedetail) 
* [nationalities](#nationalities) 
* [netWorth](#networth) 
* [parents](#parents) 
* [phoneNumbers](#phonenumbers) 
* [politicalAffiliation](#politicalaffiliation) 
* [posts](#posts) 
* [religion](#religion) 
* [siblings](#siblings) 
* [skills](#skills) 
* [twitterUri](#twitteruri) 
* [unions](#unions) 
* [weight](#weight) 
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
	"age": 76
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
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@289",
			"name": "Take Command: Leadership Lessons from the Civil War // Doubleday",
			"websiteUris": [
				"civilwarleadership.com"
			],
			"surfaceForm": "Take Command: Leadership Lessons from the Civil War // Doubleday",
			"position": "personArticles",
			"type": "Article"
		},
		{
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@288",
			"name": "Mr. Lincoln's T-Mails: The Untold Story of How Abraham Lincoln Used the Telegraph to Win the Civil War // HarperCollins",
			"websiteUris": [
				"mrlincolnstmails.com"
			],
			"surfaceForm": "Mr. Lincoln's T-Mails: The Untold Story of How Abraham Lincoln Used the Telegraph to Win the Civil War // HarperCollins",
			"position": "personArticles",
			"type": "Article"
		},
		{
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@290",
			"name": "Mr. Lincoln's T-Mails: The Untold Story of How Abraham Lincoln Used the Telegraph to Win the Civil War // HarperCollins 2006",
			"websiteUris": [
				"linkedin.com/redir/redirect"
			],
			"surfaceForm": "Mr. Lincoln's T-Mails: The Untold Story of How Abraham Lincoln Used the Telegraph to Win the Civil War // HarperCollins 2006",
			"position": "personArticles",
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
			"summary": "Sovereign state in North America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEQ%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%3D%5ECHnM%60%29.%7BOV",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "United States of America",
			"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
			"type": "AdministrativeArea"
		},
		"isCurrent": false,
		"address": "Redlands, California",
		"city": {
			"summary": "City in San Bernardino County, California, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FCvrv%3ExO%3ALE1l9Bl%3Cb%7DGej%5C%7BRyDCUDe%7BV0I%5E7Pdgj0RnJj3%3B%7C%3ESgGu1EiSd2U2Kb%3FchDc3D_NbtOi%7DVnTj%3DL9FE%2F%5B%7DG%5D9%5B%7D7d.ZvE",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Redlands",
			"diffbotUri": "http://diffbot.com/entity/EEGqoBftsOZyh3_RKbQE3mw",
			"targetDiffbotUri": "http://diffbot.com/entity/EEGqoBftsOZyh3_RKbQE3mw",
			"targetDiffbotId": "EEGqoBftsOZyh3_RKbQE3mw",
			"type": "AdministrativeArea"
		},
		"subregion": {
			"summary": "County in California, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGu%3ErO%3CLr2Y%5EBfA_%7EJt%40NeLn2L%7EL%60zdzEW%7DBf%3C%5B_HnH%5C3%3EqG%5EgyvBT8%5E.7hz",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "San Bernardino County",
			"diffbotUri": "http://diffbot.com/entity/EApueG2dHP3iRBLbjF2w2gQ",
			"targetDiffbotUri": "http://diffbot.com/entity/EApueG2dHP3iRBLbjF2w2gQ",
			"targetDiffbotId": "EApueG2dHP3iRBLbjF2w2gQ",
			"type": "AdministrativeArea"
		},
		"latitude": 34.04679489135742,
		"precision": 9.702208518981934,
		"postalCode": "92374",
		"surfaceForm": "Redlands, California",
		"region": {
			"summary": "State of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40T%3ExS%7DYb%3B%60zt%5BDbuGxEVg.xAK",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "California",
			"diffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
			"targetDiffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
			"targetDiffbotId": "El0_8ehooNxOPT36Y4RdV9w",
			"type": "AdministrativeArea"
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
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
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
			"relationship": "",
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
				"websiteUris": "",
				"diffbotUri": "",
				"name": "",
				"targetDiffbotUri": "",
				"surfaceForm": ""
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
	"connectedIndustries": []
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
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
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
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
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
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
		},
		"latitude": "",
		"precision": "",
		"postalCode": "",
		"surfaceForm": "",
		"poBox": "",
		"isCurrent": false,
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
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
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
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
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
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
		},
		"longitude": ""
	}
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
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvO%3EtV5%5Cbon%7CU_7N%7DA%7C%3C_yMyDCzRk%7Bj0Ed%2F%5Bd%3Ak4R.Mqx",
				"types": [
					"Organization"
				],
				"name": "The Ohio State University",
				"diffbotUri": "http://diffbot.com/entity/EXqnLTSovNzi-4KlIxjHhyA",
				"targetDiffbotUri": "http://diffbot.com/entity/EXqnLTSovNzi-4KlIxjHhyA",
				"targetDiffbotId": "EXqnLTSovNzi-4KlIxjHhyA",
				"surfaceForm": "The Ohio State University",
				"type": "Organization"
			},
			"isCurrent": false,
			"major": {
				"name": "International Trade",
				"surfaceForm": "International Trade"
			},
			"degree": {
				"types": [
					"Intangible",
					"DegreeEntity"
				],
				"name": "Bachelor's (4 year program)",
				"diffbotUri": "http://diffbot.com/entity/EtWuqNi7UOGu2JRK_z95kDg",
				"targetDiffbotUri": "http://diffbot.com/entity/EtWuqNi7UOGu2JRK_z95kDg",
				"targetDiffbotId": "EtWuqNi7UOGu2JRK_z95kDg",
				"surfaceForm": "Bachelor's (4 year program)",
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
				"summary": "Organization based in United States",
				"types": [
					"Organization",
					"LocalBusiness",
					"Place"
				],
				"name": "Shiloh Group",
				"diffbotUri": "http://diffbot.com/entity/ELF4ccy36PMug3N0XWxDdrg",
				"targetDiffbotUri": "http://diffbot.com/entity/ELF4ccy36PMug3N0XWxDdrg",
				"targetDiffbotId": "ELF4ccy36PMug3N0XWxDdrg",
				"surfaceForm": "Shiloh Group",
				"type": "LocalBusiness"
			},
			"from": {
				"str": "d2003-07-XX",
				"precision": 2,
				"timestamp": 1057017600000
			},
			"categories": [
				{
					"name": "Chief Officer",
					"diffbotUri": "http://diffbot.com/entity/ETONJ_vUmODK7D7WTWa6OhA",
					"targetDiffbotUri": "http://diffbot.com/entity/ETONJ_vUmODK7D7WTWa6OhA",
					"targetDiffbotId": "ETONJ_vUmODK7D7WTWa6OhA",
					"type": "EmploymentCategory"
				},
				{
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotId": "EpXGc9jmNPQW3wt-ny5SqCQ",
					"type": "EmploymentCategory"
				},
				{
					"name": "Executive",
					"diffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotId": "EFHD6pfzYMtqdaaytNomkhA",
					"type": "EmploymentCategory"
				}
			],
			"title": "President/CEO"
		},
		{
			"isCurrent": true,
			"employer": {
				"summary": "Financial services company founded in 1999",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzBa%3DXt%3Ek5KcBD0vSA%5EvRq%3D0%5DUd%60%402r%3Fm%3BQ9H%3DTmJF%5DG.zBX",
				"types": [
					"Organization",
					"Corporation"
				],
				"name": "Core Capital Partners",
				"diffbotUri": "http://diffbot.com/entity/ErLfevHY1MzaATmqeEbm4AQ",
				"targetDiffbotUri": "http://diffbot.com/entity/ErLfevHY1MzaATmqeEbm4AQ",
				"targetDiffbotId": "ErLfevHY1MzaATmqeEbm4AQ",
				"surfaceForm": "Core Capital Partners",
				"type": "Corporation"
			},
			"from": {
				"str": "d2005-01-XX",
				"precision": 2,
				"timestamp": 1104537600000
			},
			"categories": [
				{
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotId": "EpXGc9jmNPQW3wt-ny5SqCQ",
					"type": "EmploymentCategory"
				},
				{
					"name": "Shareholder",
					"diffbotUri": "http://diffbot.com/entity/EnjEbsIYNORq7LaLzpGLaeg",
					"targetDiffbotUri": "http://diffbot.com/entity/EnjEbsIYNORq7LaLzpGLaeg",
					"targetDiffbotId": "EnjEbsIYNORq7LaLzpGLaeg",
					"type": "EmploymentCategory"
				},
				{
					"name": "Executive",
					"diffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotId": "EFHD6pfzYMtqdaaytNomkhA",
					"type": "EmploymentCategory"
				}
			],
			"title": "Partner"
		},
		{
			"isCurrent": true,
			"employer": {
				"summary": "Boston, Massachusetts–based software company that produces an online video platform",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyO2%40%3F0FW9LpRQJSk8%5E5Jh",
				"types": [
					"Organization",
					"Corporation"
				],
				"name": "Brightcove, Inc.",
				"diffbotUri": "http://diffbot.com/entity/ExQ62VDi-OvWQ3qO1NhflJA",
				"targetDiffbotUri": "http://diffbot.com/entity/ExQ62VDi-OvWQ3qO1NhflJA",
				"targetDiffbotId": "ExQ62VDi-OvWQ3qO1NhflJA",
				"surfaceForm": "Brightcove, Inc.",
				"type": "Corporation"
			},
			"from": {
				"str": "d2018-04-XX",
				"precision": 2,
				"timestamp": 1522540800000
			},
			"categories": [
				{
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotId": "EpXGc9jmNPQW3wt-ny5SqCQ",
					"type": "EmploymentCategory"
				},
				{
					"name": "Board Member",
					"diffbotUri": "http://diffbot.com/entity/EnC5drWy1NVuOGQHd2ll0xw",
					"targetDiffbotUri": "http://diffbot.com/entity/EnC5drWy1NVuOGQHd2ll0xw",
					"targetDiffbotId": "EnC5drWy1NVuOGQHd2ll0xw",
					"type": "EmploymentCategory"
				},
				{
					"name": "Executive",
					"diffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
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
	"eyeColor": ""
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
### friends
  This person&#39;s friends.
* **Type:** LinkedEntity
* **Example:**
```
{
	"friends": [
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
### gender
  A person&#39;s gender.
* **Type:** Gender
* **Example:**
```
{
	"gender": {
		"normalizedValue": "Male"
	}
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
### hairColor
  This person&#39;s hair color.
* **Type:** HairColor
* **Example:**
```
{
	"hairColor": ""
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
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@329",
			"name": "investing",
			"surfaceForm": "investing",
			"position": "personInterest",
			"type": "Miscellaneous"
		},
		{
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@330",
			"name": "planning",
			"surfaceForm": "planning",
			"position": "personInterest",
			"type": "Miscellaneous"
		},
		{
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@331",
			"name": "lobbying",
			"surfaceForm": "lobbying",
			"position": "personInterest",
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
	"languages": []
}
```
### linkedInUri
  Link to the LinkedIn profile of the Person entity
* **Type:** URL
* **Example:**
```
{
	"linkedInUri": "linkedin.com/in/tom-wheeler-222878"
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
			"summary": "Sovereign state in North America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEQ%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%3D%5ECHnM%60%29.%7BOV",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "United States of America",
			"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
			"type": "AdministrativeArea"
		},
		"isCurrent": true,
		"address": "Washington, D.C.",
		"city": {
			"summary": "Capital city of the United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Washington, D.C.",
			"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
			"type": "AdministrativeArea"
		},
		"metroArea": {
			"summary": "Metropolitan area centered on Washington, D.C.",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FFvup%3EiQNof%3Bo9Uc%3Dl.Bv%3E",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Washington metropolitan area",
			"diffbotUri": "http://diffbot.com/entity/EbKIavbI8PhiHKmthsK_vTw",
			"targetDiffbotUri": "http://diffbot.com/entity/EbKIavbI8PhiHKmthsK_vTw",
			"targetDiffbotId": "EbKIavbI8PhiHKmthsK_vTw",
			"type": "AdministrativeArea"
		},
		"subregion": {
			"summary": "Capital city of the United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Washington, D.C.",
			"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
			"type": "AdministrativeArea"
		},
		"latitude": 38.82651901245117,
		"precision": 13.315855979919434,
		"postalCode": "20032",
		"surfaceForm": "Washington, District of Columbia, USA",
		"region": {
			"summary": "Capital city of the United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Washington, D.C.",
			"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
			"type": "AdministrativeArea"
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
				"summary": "Sovereign state in North America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEQ%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%3D%5ECHnM%60%29.%7BOV",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "United States of America",
				"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": true,
			"address": "Washington, D.C.",
			"city": {
				"summary": "Capital city of the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Washington, D.C.",
				"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
				"type": "AdministrativeArea"
			},
			"metroArea": {
				"summary": "Metropolitan area centered on Washington, D.C.",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FFvup%3EiQNof%3Bo9Uc%3Dl.Bv%3E",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Washington metropolitan area",
				"diffbotUri": "http://diffbot.com/entity/EbKIavbI8PhiHKmthsK_vTw",
				"targetDiffbotUri": "http://diffbot.com/entity/EbKIavbI8PhiHKmthsK_vTw",
				"targetDiffbotId": "EbKIavbI8PhiHKmthsK_vTw",
				"type": "AdministrativeArea"
			},
			"subregion": {
				"summary": "Capital city of the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Washington, D.C.",
				"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
				"type": "AdministrativeArea"
			},
			"latitude": 38.82651901245117,
			"precision": 13.315855979919434,
			"postalCode": "20032",
			"surfaceForm": "Washington, District of Columbia, USA",
			"region": {
				"summary": "Capital city of the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Washington, D.C.",
				"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
				"type": "AdministrativeArea"
			},
			"longitude": -77.01712036132812
		},
		{
			"country": {
				"summary": "Sovereign state in North America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEQ%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%3D%5ECHnM%60%29.%7BOV",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "United States of America",
				"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": false,
			"address": "Redlands, California",
			"city": {
				"summary": "City in San Bernardino County, California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FCvrv%3ExO%3ALE1l9Bl%3Cb%7DGej%5C%7BRyDCUDe%7BV0I%5E7Pdgj0RnJj3%3B%7C%3ESgGu1EiSd2U2Kb%3FchDc3D_NbtOi%7DVnTj%3DL9FE%2F%5B%7DG%5D9%5B%7D7d.ZvE",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Redlands",
				"diffbotUri": "http://diffbot.com/entity/EEGqoBftsOZyh3_RKbQE3mw",
				"targetDiffbotUri": "http://diffbot.com/entity/EEGqoBftsOZyh3_RKbQE3mw",
				"targetDiffbotId": "EEGqoBftsOZyh3_RKbQE3mw",
				"type": "AdministrativeArea"
			},
			"subregion": {
				"summary": "County in California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGu%3ErO%3CLr2Y%5EBfA_%7EJt%40NeLn2L%7EL%60zdzEW%7DBf%3C%5B_HnH%5C3%3EqG%5EgyvBT8%5E.7hz",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "San Bernardino County",
				"diffbotUri": "http://diffbot.com/entity/EApueG2dHP3iRBLbjF2w2gQ",
				"targetDiffbotUri": "http://diffbot.com/entity/EApueG2dHP3iRBLbjF2w2gQ",
				"targetDiffbotId": "EApueG2dHP3iRBLbjF2w2gQ",
				"type": "AdministrativeArea"
			},
			"latitude": 34.04679489135742,
			"precision": 9.702208518981934,
			"postalCode": "92374",
			"surfaceForm": "Redlands, California",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40T%3ExS%7DYb%3B%60zt%5BDbuGxEVg.xAK",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "California",
				"diffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
				"targetDiffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
				"targetDiffbotId": "El0_8ehooNxOPT36Y4RdV9w",
				"type": "AdministrativeArea"
			},
			"longitude": -117.17427062988281
		},
		{
			"country": {
				"summary": "Sovereign state in North America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEQ%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%3D%5ECHnM%60%29.%7BOV",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "United States of America",
				"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": false,
			"address": "Cambridge, Massachusetts",
			"city": {
				"summary": "City in Middlesex County, Massachusetts, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40s%3EhO9Ou5%5E2FYEZn%40o%3EUrMl3X.Sgy",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Cambridge",
				"diffbotUri": "http://diffbot.com/entity/EKtEQ-seQOfuiSDMTnvM9tA",
				"targetDiffbotUri": "http://diffbot.com/entity/EKtEQ-seQOfuiSDMTnvM9tA",
				"targetDiffbotId": "EKtEQ-seQOfuiSDMTnvM9tA",
				"type": "AdministrativeArea"
			},
			"metroArea": {
				"summary": "Metropolitan area in Massachusetts, New Hampshire and Rhode Island, USA",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtp%3El%601Nw1l%7DPmLh%7DZ.G%5Bm",
				"types": [
					"Place"
				],
				"name": "Greater Boston",
				"diffbotUri": "http://diffbot.com/entity/Es5VXYfClMLeSpzD5N0Cx1A",
				"targetDiffbotUri": "http://diffbot.com/entity/Es5VXYfClMLeSpzD5N0Cx1A",
				"targetDiffbotId": "Es5VXYfClMLeSpzD5N0Cx1A",
				"type": "Place"
			},
			"subregion": {
				"summary": "County in Massachusetts, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FcvBQ%3ErO%3CLr2YhBmKZr%40%7BJRzXxzL%7BJa%7EYx%3Fd7%5Dl%7DI6G%60F%604%3F082w%5BuA_.Xq%7B",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Middlesex County",
				"diffbotUri": "http://diffbot.com/entity/EfTXOkq9_P2GytZP4wTfK1g",
				"targetDiffbotUri": "http://diffbot.com/entity/EfTXOkq9_P2GytZP4wTfK1g",
				"targetDiffbotId": "EfTXOkq9_P2GytZP4wTfK1g",
				"type": "AdministrativeArea"
			},
			"latitude": 42.3803596496582,
			"precision": 4.150406360626221,
			"postalCode": "02138",
			"surfaceForm": "Cambridge, Massachusetts",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHp%3ExS%7DYb%3B%60z%7E%5BKlp%3BnL%60kXy%3E.5Y%60",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Massachusetts",
				"diffbotUri": "http://diffbot.com/entity/E0VAbhEeRNsSvhHIpmhd3Xw",
				"targetDiffbotUri": "http://diffbot.com/entity/E0VAbhEeRNsSvhHIpmhd3Xw",
				"targetDiffbotId": "E0VAbhEeRNsSvhHIpmhd3Xw",
				"type": "AdministrativeArea"
			},
			"longitude": -71.1159896850586
		}
	]
}
```
### nameDetail
  Parts of the name (e.g., first name, last name, middle name).
* **Type:** NameDetail
* **Example:**
```
{
	"nameDetail": {
		"firstName": "Tom",
		"lastName": "Wheeler"
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
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@336",
			"name": "United States of America",
			"websiteUris": [
				"wikidata.org/entity/Q30"
			],
			"position": "nationalities",
			"type": "AdministrativeArea"
		}
	]
}
```
### netWorth
  A person&#39;s estimated net worth (the value the assets minus liabilities).
* **Type:** Amount
* **Example:**
```
{
	"netWorth": {
		"currency": "",
		"value": ""
	}
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
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
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
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@337",
			"name": "Democratic Party",
			"websiteUris": [
				"wikidata.org/entity/Q29552"
			],
			"surfaceForm": "Democratic Party",
			"position": "politicalAffiliation",
			"type": "Organization"
		}
	]
}
```
### posts
  Posts written by this person.
* **Type:** LinkedEntity
* **Example:**
```
{
	"posts": [
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
### religion
  This person&#39;s religion.
* **Type:** Religion
* **Example:**
```
{
	"religion": ""
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
			"websiteUris": "",
			"diffbotUri": "",
			"name": "",
			"targetDiffbotUri": "",
			"surfaceForm": ""
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
			"targetDiffbotUri": "http://diffbot.com/entity/Emyrk4p-WOvGnIkgRO_yaGA",
			"targetDiffbotId": "Emyrk4p-WOvGnIkgRO_yaGA",
			"surfaceForm": "investment"
		},
		{
			"name": "economics",
			"diffbotUri": "http://diffbot.com/entity/EoQMvZcJoP42rI4Eo0Avfdg",
			"targetDiffbotUri": "http://diffbot.com/entity/EoQMvZcJoP42rI4Eo0Avfdg",
			"targetDiffbotId": "EoQMvZcJoP42rI4Eo0Avfdg",
			"surfaceForm": "economics"
		},
		{
			"name": "teaching",
			"diffbotUri": "http://diffbot.com/entity/Ez8ugmNmEN3mp_4eMLqGSsA",
			"targetDiffbotUri": "http://diffbot.com/entity/Ez8ugmNmEN3mp_4eMLqGSsA",
			"targetDiffbotId": "Ez8ugmNmEN3mp_4eMLqGSsA",
			"surfaceForm": "teaching"
		}
	]
}
```
### twitterUri
  Link to the Twitter profile of the Person entity
* **Type:** URL
* **Example:**
```
{
	"twitterUri": "twitter.com/TomWheelerFCC"
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
				"websiteUris": "",
				"diffbotUri": "",
				"name": "",
				"targetDiffbotUri": "",
				"surfaceForm": ""
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
