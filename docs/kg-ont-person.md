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
	"age": 74
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
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@315",
			"name": "Mr. Lincoln's T-Mails: The Untold Story of How Abraham Lincoln Used the Telegraph to Win the Civil War // HarperCollins",
			"websiteUris": [
				"mrlincolnstmails.com"
			],
			"surfaceForm": "Mr. Lincoln's T-Mails: The Untold Story of How Abraham Lincoln Used the Telegraph to Win the Civil War // HarperCollins",
			"position": "personArticles",
			"type": "Article"
		},
		{
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@316",
			"name": "Leadership Lessons from the Civil War // Doubleday",
			"websiteUris": [
				"civilwarleadership.com"
			],
			"surfaceForm": "Leadership Lessons from the Civil War // Doubleday",
			"position": "personArticles",
			"type": "Article"
		},
		{
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@318",
			"name": "Take Command: Leadership Lessons from the Civil War // Doubleday - 2000",
			"surfaceForm": "Take Command: Leadership Lessons from the Civil War // Doubleday - 2000",
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
	"awards": []
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
			"nbIncomingEdges": 1033140662,
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
			"nbIncomingEdges": 222804,
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
			"nbIncomingEdges": 5273811,
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
			"nbIncomingEdges": 113588248,
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
	"children": []
}
```
### colleagues
  People with whom this person has a work or academic relationship.
* **Type:** Colleague
* **Example:**
```
{
	"colleagues": []
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
	"deathDate": ""
}
```
### deathPlace
  A person&#39;s place of death.
* **Type:** Location
* **Example:**
```
{
	"deathPlace": {
		"country": {
			"summary": "Sovereign state in North America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEQ%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%3D%5ECHnM%60%29.%7BOV",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "United States of America",
			"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"nbIncomingEdges": 1033140662,
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
			"nbIncomingEdges": 222804,
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
			"nbIncomingEdges": 5273811,
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
			"nbIncomingEdges": 113588248,
			"targetDiffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
			"targetDiffbotId": "El0_8ehooNxOPT36Y4RdV9w",
			"type": "AdministrativeArea"
		},
		"longitude": -117.17427062988281
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
				"summary": "University founded in 1870",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzCY7%5Cp%3Ef%3ANc3Vl9bwD%60DZkSbSinG1BC.I%5Do",
				"types": [
					"Organization"
				],
				"name": "The Ohio State University",
				"diffbotUri": "http://diffbot.com/entity/Etz-X7KAZOQW3g6syRTT7bg",
				"nbIncomingEdges": 108270,
				"targetDiffbotUri": "http://diffbot.com/entity/Etz-X7KAZOQW3g6syRTT7bg",
				"targetDiffbotId": "Etz-X7KAZOQW3g6syRTT7bg",
				"surfaceForm": "The Ohio State University",
				"type": "Organization"
			},
			"isCurrent": false,
			"major": {
				"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@289",
				"name": "International Trade",
				"surfaceForm": "International Trade",
				"position": "personEducationMajor",
				"type": "Major"
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
		},
		{
			"institution": {
				"summary": "Public research university in Columbus, Ohio, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvO%3EtV5%5Cbon%7CU_7N%7DA%7C%3C_yMyDCzRk%7Bj0Ed%2F%5Bd%3Ak4R.Mqx",
				"types": [
					"Organization"
				],
				"name": "OSU",
				"diffbotUri": "http://diffbot.com/entity/EXqnLTSovNzi-4KlIxjHhyA",
				"nbIncomingEdges": 358200,
				"targetDiffbotUri": "http://diffbot.com/entity/EXqnLTSovNzi-4KlIxjHhyA",
				"targetDiffbotId": "EXqnLTSovNzi-4KlIxjHhyA",
				"surfaceForm": "OSU",
				"type": "Organization"
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
	"emailAddresses": []
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
				"summary": "Organization founded in 1992",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stx9f%3CJ-Ey7a.K%5EqP%7B.O9X0%7Ee%3C%5EaCXt%3B3hp5bEZ3UrgbRP%2F%3E40l3y%7EPgHZ%7DQ-C%5CmSdOdBB%7DBp%40WoOt6W5Ne1b1E_9hTEg%3DNlJh%7BHrC%26h%5DSlD_%26Y%3B%7Edr_w0w%5ETT6Ka0pZlo__i%40_q6%3Bg4OGZy%3Doa%3ECn%3B%3BeqX",
				"types": [
					"Organization",
					"LocalBusiness",
					"Place"
				],
				"name": "Shiloh Technologies",
				"diffbotUri": "http://diffbot.com/entity/Ei8Q97YP0NwqKVjOVZgpv9w",
				"nbIncomingEdges": 442,
				"targetDiffbotUri": "http://diffbot.com/entity/Ei8Q97YP0NwqKVjOVZgpv9w",
				"targetDiffbotId": "Ei8Q97YP0NwqKVjOVZgpv9w",
				"surfaceForm": "Shiloh Technologies",
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
					"surfaceForm": "Chief Officer"
				},
				{
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotId": "EpXGc9jmNPQW3wt-ny5SqCQ",
					"surfaceForm": "Management"
				},
				{
					"name": "President",
					"diffbotUri": "http://diffbot.com/entity/EoOGiQBKyPo6fxgo68SaLSw",
					"targetDiffbotUri": "http://diffbot.com/entity/EoOGiQBKyPo6fxgo68SaLSw",
					"targetDiffbotId": "EoOGiQBKyPo6fxgo68SaLSw",
					"surfaceForm": "President"
				},
				{
					"name": "Executive",
					"diffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotId": "EFHD6pfzYMtqdaaytNomkhA",
					"surfaceForm": "Executive"
				},
				{
					"name": "CEO",
					"diffbotUri": "http://diffbot.com/entity/EsKRhWmcBM3q1_CQ_xGmtyA",
					"targetDiffbotUri": "http://diffbot.com/entity/EsKRhWmcBM3q1_CQ_xGmtyA",
					"targetDiffbotId": "EsKRhWmcBM3q1_CQ_xGmtyA",
					"surfaceForm": "CEO"
				}
			],
			"title": "President/CEO"
		},
		{
			"isCurrent": true,
			"employer": {
				"summary": "Law firm",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FdvCq%3E%7CW8Yn5_-Mi%3Fh.%3Fo%3D",
				"types": [
					"Organization",
					"Corporation"
				],
				"name": "Willkie Farr & Gallagher LLP",
				"diffbotUri": "http://diffbot.com/entity/EGlj5rYx7N5GIWUR9qs9aEg",
				"nbIncomingEdges": 4728,
				"targetDiffbotUri": "http://diffbot.com/entity/EGlj5rYx7N5GIWUR9qs9aEg",
				"targetDiffbotId": "EGlj5rYx7N5GIWUR9qs9aEg",
				"surfaceForm": "Willkie Farr & Gallagher LLP",
				"type": "Corporation"
			},
			"from": {
				"str": "d2015-12-XX",
				"precision": 2,
				"timestamp": 1448928000000
			},
			"categories": [
				{
					"name": "Shareholder",
					"diffbotUri": "http://diffbot.com/entity/EnjEbsIYNORq7LaLzpGLaeg",
					"targetDiffbotUri": "http://diffbot.com/entity/EnjEbsIYNORq7LaLzpGLaeg",
					"targetDiffbotId": "EnjEbsIYNORq7LaLzpGLaeg",
					"surfaceForm": "Shareholder"
				},
				{
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotId": "EpXGc9jmNPQW3wt-ny5SqCQ",
					"surfaceForm": "Management"
				}
			],
			"title": "Partner"
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
				"nbIncomingEdges": 62,
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
					"surfaceForm": "Management"
				},
				{
					"name": "Executive",
					"diffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotId": "EFHD6pfzYMtqdaaytNomkhA",
					"surfaceForm": "Executive"
				},
				{
					"name": "Director",
					"diffbotUri": "http://diffbot.com/entity/Eg3ddwx52PdewyUAwLb_Mmw",
					"targetDiffbotUri": "http://diffbot.com/entity/Eg3ddwx52PdewyUAwLb_Mmw",
					"targetDiffbotId": "Eg3ddwx52PdewyUAwLb_Mmw",
					"surfaceForm": "Director"
				}
			],
			"title": "Managing Director"
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
	"friends": []
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
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@357",
			"name": "investing",
			"surfaceForm": "investing",
			"position": "personInterest",
			"type": "Miscellaneous"
		},
		{
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@358",
			"name": "planning",
			"surfaceForm": "planning",
			"position": "personInterest",
			"type": "Miscellaneous"
		},
		{
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@359",
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
			"nbIncomingEdges": 1033140662,
			"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
			"type": "AdministrativeArea"
		},
		"isCurrent": true,
		"address": "Washington, District of Columbia",
		"city": {
			"summary": "Capital city of the United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Washington, D.C.",
			"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"nbIncomingEdges": 12400618,
			"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
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
			"nbIncomingEdges": 12400618,
			"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
			"type": "AdministrativeArea"
		},
		"latitude": 38.82651901245117,
		"precision": 13.315850257873535,
		"postalCode": "20032",
		"surfaceForm": "Washington, DC",
		"region": {
			"summary": "Capital city of the United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Washington, D.C.",
			"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
			"nbIncomingEdges": 12400618,
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
				"nbIncomingEdges": 1033140662,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": true,
			"address": "Washington, District of Columbia",
			"city": {
				"summary": "Capital city of the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Washington, D.C.",
				"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"nbIncomingEdges": 12400618,
				"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
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
				"nbIncomingEdges": 12400618,
				"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
				"type": "AdministrativeArea"
			},
			"latitude": 38.82651901245117,
			"precision": 13.315850257873535,
			"postalCode": "20032",
			"surfaceForm": "Washington, DC",
			"region": {
				"summary": "Capital city of the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Washington, D.C.",
				"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"nbIncomingEdges": 12400618,
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
				"nbIncomingEdges": 1033140662,
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
				"nbIncomingEdges": 222804,
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
				"nbIncomingEdges": 5273811,
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
				"nbIncomingEdges": 113588248,
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
				"nbIncomingEdges": 1033140662,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": false,
			"address": "Washington D.C. Metro Area",
			"subregion": {
				"summary": "Capital city of the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Washington, D.C.",
				"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"nbIncomingEdges": 12400618,
				"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
				"type": "AdministrativeArea"
			},
			"latitude": 38.82651901245117,
			"precision": 75,
			"surfaceForm": "Washington D.C. Metro Area",
			"region": {
				"summary": "Capital city of the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAT%3ExS%7DYb%3B%60zUb%3DXSAyK_oGyzSxB%3C1%5C6DR7P.Ar4",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Washington, D.C.",
				"diffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"nbIncomingEdges": 12400618,
				"targetDiffbotUri": "http://diffbot.com/entity/Ep2MLLdkjO_C-R6NA7cOlcQ",
				"targetDiffbotId": "Ep2MLLdkjO_C-R6NA7cOlcQ",
				"type": "AdministrativeArea"
			},
			"longitude": -77.01712036132812
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
		"firstName": "Thomas",
		"lastName": "Wheeler",
		"middleName": [
			"'tom'"
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
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@364",
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
	"netWorth": ""
}
```
### parents
  This person&#39;s parents.
* **Type:** LinkedEntity
* **Example:**
```
{
	"parents": []
}
```
### phoneNumbers
  A person&#39;s phone numbers.
* **Type:** PhoneNumber
* **Example:**
```
{
	"phoneNumbers": []
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
			"recordId": "EEIzhzuLVPeKuQ7KjPSa6aQ@365",
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
	"posts": []
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
	"siblings": []
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
			"name": "human resource management",
			"diffbotUri": "http://diffbot.com/entity/EGbsKlNBiP2C24W80rbtTOg",
			"targetDiffbotUri": "http://diffbot.com/entity/EGbsKlNBiP2C24W80rbtTOg",
			"targetDiffbotId": "EGbsKlNBiP2C24W80rbtTOg",
			"surfaceForm": "human resource management"
		},
		{
			"name": "mergers and acquisitions",
			"diffbotUri": "http://diffbot.com/entity/EpSY71sAqMYa9H4C3CNXJ2A",
			"targetDiffbotUri": "http://diffbot.com/entity/EpSY71sAqMYa9H4C3CNXJ2A",
			"targetDiffbotId": "EpSY71sAqMYa9H4C3CNXJ2A",
			"surfaceForm": "mergers and acquisitions"
		},
		{
			"name": "supply chain management",
			"diffbotUri": "http://diffbot.com/entity/EvglNgl2jNCyhiMhRpVH9JA",
			"targetDiffbotUri": "http://diffbot.com/entity/EvglNgl2jNCyhiMhRpVH9JA",
			"targetDiffbotId": "EvglNgl2jNCyhiMhRpVH9JA",
			"surfaceForm": "supply chain management"
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
	"twitterUri": "twitter.com/tomwheelerfcc"
}
```
### unions
  This person&#39;s unions, including marriages and civil unions.
* **Type:** Union
* **Example:**
```
{
	"unions": []
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
