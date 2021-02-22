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
Note that certain longer field examples may be truncated for readability in these docs. 

### age
  A person&#39;s age.
* **Type:** Integer
* **Example:**
```
{
	"age": 64
}
```
### angellistUri
  Link to the Angel List profile of the Person entity
* **Type:** 
* **Example:**
```
{
	"angellistUri": ""
}
```
### articles
  Articles written by this person.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"articles": [
		{
			"recordId": "EyLhQX8YeNWOH19RPpdU7Kg@569",
			"name": "The Business of Happiness //",
			"surfaceForm": "The Business of Happiness //",
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
		"str": "d1957-01-08",
		"precision": 3,
		"timestamp": -409622400000
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
			"nbIncomingEdges": 1245528825,
			"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"type": "AdministrativeArea"
		},
		"isCurrent": false,
		"address": "New York, New York",
		"city": {
			"summary": "Largest city in the United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FgvFo%3ExS%7DYb%3B%60z%2F_OXhGxBLIMyDCT%3A.5fx",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "New York City",
			"diffbotUri": "http://diffbot.com/entity/EcMmgf99wMQ6XYnbChv5HiQ",
			"nbIncomingEdges": 18330011,
			"targetDiffbotUri": "http://diffbot.com/entity/EcMmgf99wMQ6XYnbChv5HiQ",
			"type": "AdministrativeArea"
		},
		"subregion": {
			"recordId": "EyLhQX8YeNWOH19RPpdU7Kg@566",
			"name": "Kings County",
			"position": "personLocationPlace",
			"type": "AdministrativeArea"
		},
		"latitude": 40.68294906616211,
		"precision": 27.989721298217773,
		"postalCode": "11217",
		"surfaceForm": "New York City, New York",
		"region": {
			"summary": "State of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FDvsO%3ExS%7DYb%3B%60z%2F_OXhGxB.yZl",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "New York",
			"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
			"nbIncomingEdges": 83642769,
			"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
			"type": "AdministrativeArea"
		},
		"longitude": -73.9708023071289
	}
}
```
### blogUri
  This is a link to Person entity&#39;s written journal
* **Type:** 
* **Example:**
```
{
	"blogUri": ""
}
```
### children
  This person&#39;s children.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"children": "[See Person]"
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
			"colleague": "[See Person]"
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
* **Type:** 
* **Example:**
```
{
	"crunchbaseUri": "crunchbase.com/person/ted-leonsis"
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
		"country": {
			"summary": "Sovereign state in North America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEQ%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%3D%5ECHnM%60%29.%7BOV",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "United States of America",
			"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"nbIncomingEdges": 1245528825,
			"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"type": "AdministrativeArea"
		},
		"isCurrent": false,
		"address": "New York, New York",
		"city": {
			"summary": "Largest city in the United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FgvFo%3ExS%7DYb%3B%60z%2F_OXhGxBLIMyDCT%3A.5fx",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "New York City",
			"diffbotUri": "http://diffbot.com/entity/EcMmgf99wMQ6XYnbChv5HiQ",
			"nbIncomingEdges": 18330011,
			"targetDiffbotUri": "http://diffbot.com/entity/EcMmgf99wMQ6XYnbChv5HiQ",
			"type": "AdministrativeArea"
		},
		"subregion": {
			"recordId": "EyLhQX8YeNWOH19RPpdU7Kg@566",
			"name": "Kings County",
			"position": "personLocationPlace",
			"type": "AdministrativeArea"
		},
		"latitude": 40.68294906616211,
		"precision": 27.989721298217773,
		"postalCode": "11217",
		"surfaceForm": "New York City, New York",
		"region": {
			"summary": "State of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FDvsO%3ExS%7DYb%3B%60z%2F_OXhGxB.yZl",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "New York",
			"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
			"nbIncomingEdges": 83642769,
			"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
			"type": "AdministrativeArea"
		},
		"longitude": -73.9708023071289
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
				"summary": "Private university in Washington, D.C., United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FjvIw%3ElS%3B_j1n%3AXh7N%7DA%7C%3C_yMyDC%5ER%601d%3AGU.b%7B5",
				"types": [
					"Organization"
				],
				"name": "Georgetown University",
				"diffbotUri": "http://diffbot.com/entity/Erxd6erYyOeqlPSftx3FWJQ",
				"nbIncomingEdges": 192373,
				"targetDiffbotUri": "http://diffbot.com/entity/Erxd6erYyOeqlPSftx3FWJQ",
				"surfaceForm": "Georgetown University",
				"type": "Organization"
			},
			"isCurrent": false,
			"major": {
				"recordId": "EyLhQX8YeNWOH19RPpdU7Kg@542",
				"name": "American Studies",
				"surfaceForm": "American Studies",
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
				"surfaceForm": "Bachelor's (4 year program)",
				"type": "DegreeEntity"
			},
			"to": {
				"str": "d1977-XX-XX",
				"precision": 1,
				"timestamp": 220924800000
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
				"summary": "American multinational financial services corporation",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvO%3Ef%5B1_l%2F%5B9%40%3FPi1%3DyJLrSl%3AC%25e1DpB_%25Px.Ar4",
				"types": [
					"Organization",
					"Corporation"
				],
				"name": "American Express",
				"diffbotUri": "http://diffbot.com/entity/E0WfaIUi8O5OJiCbVRwdj5Q",
				"nbIncomingEdges": 242795,
				"targetDiffbotUri": "http://diffbot.com/entity/E0WfaIUi8O5OJiCbVRwdj5Q",
				"surfaceForm": "American Express",
				"type": "Corporation"
			},
			"description": "Mr. Leonsis serves on the nominating, governance & public responsibility committee; and the compensation & benefits committee",
			"from": {
				"str": "d2010-07-01",
				"precision": 3,
				"timestamp": 1277942400000
			},
			"categories": [
				{
					"name": "Board Member",
					"diffbotUri": "http://diffbot.com/entity/EnC5drWy1NVuOGQHd2ll0xw",
					"targetDiffbotUri": "http://diffbot.com/entity/EnC5drWy1NVuOGQHd2ll0xw",
					"surfaceForm": "Board Member"
				},
				{
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"surfaceForm": "Management"
				},
				{
					"name": "Executive",
					"diffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"surfaceForm": "Executive"
				}
			],
			"title": "Board of Directors"
		},
		{
			"isCurrent": true,
			"employer": {
				"summary": "Financial services company founded in 2011",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyKk7Q%7DPe%3FNq%2FP7e%5Bttw9V",
				"types": [
					"Organization",
					"Corporation"
				],
				"name": "Revolution Growth",
				"diffbotUri": "http://diffbot.com/entity/ECxtI0LTrMVWP1WK4UCXALA",
				"nbIncomingEdges": 85,
				"targetDiffbotUri": "http://diffbot.com/entity/ECxtI0LTrMVWP1WK4UCXALA",
				"surfaceForm": "Revolution Growth",
				"type": "Corporation"
			},
			"description": "As co-founder and partner at Revolution Growth, a $1 billion set of investment funds, Mr. Leonsis and his partners make a select group of speed-up capital investments each year in businesses outside of Silicon Valley that are leveraging technology and new models to disrupt existing, multi-billion dollar industries. Investments includes companies such as Sportradar USA, DraftKings, Bedrock Manufacturing (parent company of Shinola and Filson), Resonate, Optoro, CustomInk, Cava and sweetgreen.",
			"from": {
				"str": "d2011-11-XX",
				"precision": 2,
				"timestamp": 1320105600000
			},
			"categories": [
				{
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"surfaceForm": "Management"
				},
				{
					"name": "Founder",
					"diffbotUri": "http://diffbot.com/entity/EoN4VH9EANdSbPUhVFBbVSQ",
					"targetDiffbotUri": "http://diffbot.com/entity/EoN4VH9EANdSbPUhVFBbVSQ",
					"surfaceForm": "Founder"
				}
			],
			"title": "Co-Founder"
		},
		{
			"isCurrent": true,
			"employer": {
				"summary": "Entertainment company founded in 1997",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%5D%3C%60u%3Bl5Nc9ebv%5D5%5BZ9Zl%3E_OMa%5E%60xb.I%5Do",
				"types": [
					"Organization",
					"Corporation"
				],
				"name": "Monumental Sports & Entertainment",
				"diffbotUri": "http://diffbot.com/entity/E0T9lM-4cOB6KcFCN0ShBXg",
				"nbIncomingEdges": 2242,
				"targetDiffbotUri": "http://diffbot.com/entity/E0T9lM-4cOB6KcFCN0ShBXg",
				"surfaceForm": "Monumental Sports & Entertainment",
				"type": "Corporation"
			},
			"from": {
				"str": "d1999-01-01",
				"precision": 3,
				"timestamp": 915148800000
			},
			"categories": [
				{
					"name": "Board Member",
					"diffbotUri": "http://diffbot.com/entity/EnC5drWy1NVuOGQHd2ll0xw",
					"targetDiffbotUri": "http://diffbot.com/entity/EnC5drWy1NVuOGQHd2ll0xw",
					"surfaceForm": "Board Member"
				},
				{
					"name": "Management",
					"diffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"targetDiffbotUri": "http://diffbot.com/entity/EpXGc9jmNPQW3wt-ny5SqCQ",
					"surfaceForm": "Management"
				},
				{
					"name": "Executive",
					"diffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"targetDiffbotUri": "http://diffbot.com/entity/EFHD6pfzYMtqdaaytNomkhA",
					"surfaceForm": "Executive"
				},
				{
					"name": "Chairman",
					"diffbotUri": "http://diffbot.com/entity/ELiQhNkW0MuSuM5HPer8gpQ",
					"targetDiffbotUri": "http://diffbot.com/entity/ELiQhNkW0MuSuM5HPer8gpQ",
					"surfaceForm": "Chairman"
				}
			],
			"title": "Chairman of the Board of Directors"
		}
	]
}
```
### eyeColor
  This person&#39;s eye color.
* **Type:** PersonalAttributes$EyeColor
* **Example:**
```
{
	"eyeColor": ""
}
```
### facebookUri
  Link to the Facebook profile of the Person entity
* **Type:** 
* **Example:**
```
{
	"facebookUri": "facebook.com/ted.leonsis"
}
```
### friends
  This person&#39;s friends.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"friends": "[See Person]"
}
```
### gender
  A person&#39;s gender.
* **Type:** PersonalAttributes$Gender
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
* **Type:** 
* **Example:**
```
{
	"githubUri": ""
}
```
### googlePlusUri
  Link to the Google+ profile of the Person entity
* **Type:** 
* **Example:**
```
{
	"googlePlusUri": ""
}
```
### hairColor
  This person&#39;s hair color.
* **Type:** PersonalAttributes$HairColor
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
* **Type:** 
* **Example:**
```
{
	"homepageUri": "tedstake.com"
}
```
### instagramUri
  Link to the Instagram profile of the Person entity
* **Type:** 
* **Example:**
```
{
	"instagramUri": ""
}
```
### interests
  Organizations, products and activities of interest.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"interests": [
		{
			"recordId": "EyLhQX8YeNWOH19RPpdU7Kg@603",
			"name": "entrepreneurship",
			"surfaceForm": "entrepreneurship",
			"position": "personInterest",
			"type": "Miscellaneous"
		},
		{
			"recordId": "EyLhQX8YeNWOH19RPpdU7Kg@604",
			"name": "investing",
			"surfaceForm": "investing",
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
* **Type:** 
* **Example:**
```
{
	"linkedInUri": "linkedin.com/in/ted-leonsis-a9655378"
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
				"nbIncomingEdges": 1245528825,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": true,
			"address": "Potomac, Maryland",
			"city": {
				"summary": "Census-designated place in Montgomery County, Maryland, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FDvsO%3Er%5D%3Aaj%3Bg0Ss7%3C%7EMtKfe1f%3D%5D%7EDgvOZES%3Dau%3Dn%7EWa%3EZrHl8DvOu0U6Uj6S7%3EV%2FRy5_BDNKq2Ik%3EPRQp7T%2FNe%3AYy.gHZ",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Potomac",
				"diffbotUri": "http://diffbot.com/entity/E2uNw5qOlNAqFMoVADNwLhw",
				"nbIncomingEdges": 109942,
				"targetDiffbotUri": "http://diffbot.com/entity/E2uNw5qOlNAqFMoVADNwLhw",
				"type": "AdministrativeArea"
			},
			"subregion": {
				"summary": "County in Maryland, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqT%3ExS%7DYb%3B%60z%7EiFmvGs%3C_%2FCH%3AY0Wr%2CO%5E8bG%5Bf%3C%60.VrA",
				"types": [
					"Place"
				],
				"name": "Montgomery County",
				"diffbotUri": "http://diffbot.com/entity/EwhIaKn1qNi6TZQUBrPLqcg",
				"nbIncomingEdges": 3103533,
				"targetDiffbotUri": "http://diffbot.com/entity/EwhIaKn1qNi6TZQUBrPLqcg",
				"type": "Place"
			},
			"latitude": 39.011817932128906,
			"precision": 8.289426803588867,
			"postalCode": "20817",
			"surfaceForm": "Potomac, Maryland",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40n%3ExS%7DYb%3B%60z%7E%5BJr%7B9t%3BL%28VjAI4V%5E%29.4MW",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Maryland",
				"diffbotUri": "http://diffbot.com/entity/EglcJEUJCMkavBvSi16gKjA",
				"nbIncomingEdges": 22062794,
				"targetDiffbotUri": "http://diffbot.com/entity/EglcJEUJCMkavBvSi16gKjA",
				"type": "AdministrativeArea"
			},
			"longitude": -77.1876220703125
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
				"nbIncomingEdges": 1245528825,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": false,
			"address": "New York, New York",
			"city": {
				"summary": "Largest city in the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FgvFo%3ExS%7DYb%3B%60z%2F_OXhGxBLIMyDCT%3A.5fx",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York City",
				"diffbotUri": "http://diffbot.com/entity/EcMmgf99wMQ6XYnbChv5HiQ",
				"nbIncomingEdges": 18330011,
				"targetDiffbotUri": "http://diffbot.com/entity/EcMmgf99wMQ6XYnbChv5HiQ",
				"type": "AdministrativeArea"
			},
			"subregion": {
				"recordId": "EyLhQX8YeNWOH19RPpdU7Kg@550",
				"name": "Kings County",
				"position": "personLocationPlace",
				"type": "AdministrativeArea"
			},
			"latitude": 40.68294906616211,
			"precision": 27.989721298217773,
			"postalCode": "11217",
			"surfaceForm": "New York City, New York",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FDvsO%3ExS%7DYb%3B%60z%2F_OXhGxB.yZl",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York",
				"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"nbIncomingEdges": 83642769,
				"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"type": "AdministrativeArea"
			},
			"longitude": -73.9708023071289
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
				"nbIncomingEdges": 1245528825,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": false,
			"address": "Dulles, Virginia",
			"city": {
				"summary": "Unincorporated area located in Loudoun County, Virginia",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Dulles",
				"diffbotUri": "http://diffbot.com/entity/E2c6AmpoGP6mrk-AlSI21AQ",
				"nbIncomingEdges": 46896,
				"targetDiffbotUri": "http://diffbot.com/entity/E2c6AmpoGP6mrk-AlSI21AQ",
				"type": "AdministrativeArea"
			},
			"subregion": {
				"summary": "County in Virginia, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHQ%3ErO%3CLr2YqJl%3Fb%7DAg6UoKm7MyKm%7B%5Ex6%3C%3Ddi%3Dq%3BB%3FIp%2FN1.b%7EM",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Loudoun County",
				"diffbotUri": "http://diffbot.com/entity/EWXAzP3oGNICyxGdIZLT3Lg",
				"nbIncomingEdges": 790846,
				"targetDiffbotUri": "http://diffbot.com/entity/EWXAzP3oGNICyxGdIZLT3Lg",
				"type": "AdministrativeArea"
			},
			"latitude": 39.0376091003418,
			"precision": 0,
			"postalCode": "20165",
			"surfaceForm": "Dulles, Virginia",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FgvFT%3ExS%7DYb%3B%60z7cJ%60xFo8.yZl",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Virginia",
				"diffbotUri": "http://diffbot.com/entity/EIq1PftjrND-Nofzr7rGJbA",
				"nbIncomingEdges": 31601008,
				"targetDiffbotUri": "http://diffbot.com/entity/EIq1PftjrND-Nofzr7rGJbA",
				"type": "AdministrativeArea"
			},
			"longitude": -77.41581726074219
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
		"firstName": "Theodore",
		"lastName": "Leonsis",
		"middleName": [
			"'ted'"
		]
	}
}
```
### nationalities
  The countries where this person is a national or a citizen.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"nationalities": []
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
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"parents": "[See Person]"
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
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"politicalAffiliation": []
}
```
### posts
  Posts written by this person.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"posts": "[See Post]"
}
```
### religion
  This person&#39;s religion.
* **Type:** Religion
* **Example:**
```
{
	"religion": {
		"str": "Greek Orthodox Church"
	}
}
```
### siblings
  This person&#39;s siblings.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"siblings": "[See Person]"
}
```
### skills
  Professional skills.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"skills": [
		{
			"name": "entrepreneurship",
			"diffbotUri": "http://diffbot.com/entity/Ee932fbe3MTqDdEFFVE1GKg",
			"targetDiffbotUri": "http://diffbot.com/entity/Ee932fbe3MTqDdEFFVE1GKg",
			"surfaceForm": "entrepreneurship"
		},
		{
			"name": "economics",
			"diffbotUri": "http://diffbot.com/entity/E9kGv6JTWPMyWBAvoCfaQuw",
			"websiteUris": [
				"wikidata.org/entity/Q8134#skill"
			],
			"targetDiffbotUri": "http://diffbot.com/entity/E9kGv6JTWPMyWBAvoCfaQuw",
			"surfaceForm": "economics"
		},
		{
			"name": "human resource management",
			"diffbotUri": "http://diffbot.com/entity/EGbsKlNBiP2C24W80rbtTOg",
			"targetDiffbotUri": "http://diffbot.com/entity/EGbsKlNBiP2C24W80rbtTOg",
			"surfaceForm": "human resource management"
		}
	]
}
```
### twitterUri
  Link to the Twitter profile of the Person entity
* **Type:** 
* **Example:**
```
{
	"twitterUri": "twitter.com/TedLeonsis"
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
			"person": "[See Person]",
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
* **Type:** 
* **Example:**
```
{
	"wikipediaUri": "en.wikipedia.org/wiki/Ted_Leonsis"
}
```
### youtubeUri
  Link to the Youtube page of the Person entity
* **Type:** 
* **Example:**
```
{
	"youtubeUri": ""
}
```
