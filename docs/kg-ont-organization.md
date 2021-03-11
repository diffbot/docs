---
id: kg-ont-organization
title: Organization
---

The organization entity type encompasses corporations, local businesses, non-profits, and other organizations known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Organization Fields
* [acquiredBy](#acquiredby) 
* [angellistUri](#angellisturi) 
* [anzSicClassification](#anzsicclassification) 
* [blogUri](#bloguri) 
* [boardMembers](#boardmembers) 
* [brands](#brands) 
* [capitalization](#capitalization) 
* [categories](#categories) 
* [ceo](#ceo) 
* [companiesHouseIds](#companieshouseids) 
* [crunchbaseUri](#crunchbaseuri) 
* [descriptors](#descriptors) 
* [facebookUri](#facebookuri) 
* [founders](#founders) 
* [foundingDate](#foundingdate) 
* [githubUri](#githuburi) 
* [googlePlusUri](#googleplusuri) 
* [homepageUri](#homepageuri) 
* [iSicClassification](#isicclassification) 
* [indianCorporateIdentityNumbers](#indiancorporateidentitynumbers) 
* [industries](#industries) 
* [investments](#investments) 
* [ipo](#ipo) 
* [irsEmployerIdentificationNumbers](#irsemployeridentificationnumbers) 
* [isAcquired](#isacquired) 
* [isDissolved](#isdissolved) 
* [isNonProfit](#isnonprofit) 
* [isPublic](#ispublic) 
* [leadership](#leadership) 
* [linkedInUri](#linkedinuri) 
* [location](#location) 
* [locations](#locations) 
* [logo](#logo) 
* [mccClassification](#mccclassification) 
* [mccCode](#mcccode) 
* [mccCodeDescription](#mcccodedescription) 
* [motto](#motto) 
* [naceClassification](#naceclassification) 
* [naicsClassification](#naicsclassification) 
* [nbActiveEmployeeEdges](#nbactiveemployeeedges) 
* [nbEmployees](#nbemployees) 
* [nbEmployeesMax](#nbemployeesmax) 
* [nbEmployeesMin](#nbemployeesmin) 
* [nbLocations](#nblocations) 
* [nbUniqueInvestors](#nbuniqueinvestors) 
* [parentCompany](#parentcompany) 
* [phoneNumbers](#phonenumbers) 
* [quarterlyRevenues](#quarterlyrevenues) 
* [revenue](#revenue) 
* [secCentralIndexKeys](#seccentralindexkeys) 
* [sicClassification](#sicclassification) 
* [sicCode](#siccode) 
* [sicCodeDescription](#siccodedescription) 
* [stock](#stock) 
* [subsidiaries](#subsidiaries) 
* [totalInvestment](#totalinvestment) 
* [twitterUri](#twitteruri) 
* [ukSicClassification](#uksicclassification) 
* [vatIdentificationNumbers](#vatidentificationnumbers) 
* [wikipediaUri](#wikipediauri) 
* [yearlyRevenues](#yearlyrevenues) 

## Organization Field Details
Note that certain longer field examples may be truncated for readability.

### acquiredBy
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"acquiredBy": []
}
```
### angellistUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"angellistUri": "angel.co/ibm"
}
```
### anzSicClassification
  
* **Type:** ClassificationCode
* **Example:**
```
{
	"anzSicClassification": []
}
```
### blogUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"blogUri": ""
}
```
### boardMembers
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"boardMembers": [
		{
			"summary": "American business executive",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqP%3ElW%3A%5Bl%7BL%3AN_Lm87gKLzLjzz1Um7%5Ev6%3DnFdqq%3APeNZzHg%5Bo9g.7V%7B",
			"types": [
				"Person"
			],
			"name": "Virginia 'Ginni' Rometty",
			"diffbotUri": "http://diffbot.com/entity/EFCXA8DGjPMq5oTjl9RESEw",
			"nbIncomingEdges": 9,
			"targetDiffbotUri": "http://diffbot.com/entity/EFCXA8DGjPMq5oTjl9RESEw",
			"targetDiffbotId": "EFCXA8DGjPMq5oTjl9RESEw",
			"surfaceForm": "Virginia 'Ginni' Rometty",
			"type": "Person"
		},
		{
			"summary": "Australian businessman",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHn%3Ef%5C0_hCYi.Ytb5%3Dx%40%60e%3Bt%3DPvB%3Eu_%2FF%5D7Rddk%3FXi9%7DA%5B%3B.YxM",
			"types": [
				"Person"
			],
			"name": "Andrew N Liveris",
			"diffbotUri": "http://diffbot.com/entity/E2XQtwbsDNVSO54QbAy6z7Q",
			"nbIncomingEdges": 30,
			"targetDiffbotUri": "http://diffbot.com/entity/E2XQtwbsDNVSO54QbAy6z7Q",
			"targetDiffbotId": "E2XQtwbsDNVSO54QbAy6z7Q",
			"surfaceForm": "Andrew N Liveris",
			"type": "Person"
		},
		{
			"summary": "CEO at ABB Technology Ventures Ltd",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%5D%3F%5Cn6d7LczNzCY%7B%3AV2Tk5f1S%5ENf%7B%60.C_o",
			"types": [
				"Person"
			],
			"name": "Peter Voser",
			"diffbotUri": "http://diffbot.com/entity/EO9myMnvoM7-h9c6uDeCBdg",
			"nbIncomingEdges": 11,
			"targetDiffbotUri": "http://diffbot.com/entity/EO9myMnvoM7-h9c6uDeCBdg",
			"targetDiffbotId": "EO9myMnvoM7-h9c6uDeCBdg",
			"surfaceForm": "Peter Voser",
			"type": "Person"
		}
	]
}
```
### brands
  
* **Type:** String
* **Example:**
```
{
	"brands": ""
}
```
### capitalization
  
* **Type:** Amount
* **Example:**
```
{
	"capitalization": {
		"currency": "USD",
		"value": 124485099520
	}
}
```
### categories
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"categories": [
		{
			"name": "Information Technology Consulting Firms",
			"diffbotUri": "http://diffbot.com/entity/ENJMVgRRYOdCWuSXqwmfXxg",
			"targetDiffbotUri": "http://diffbot.com/entity/ENJMVgRRYOdCWuSXqwmfXxg",
			"targetDiffbotId": "ENJMVgRRYOdCWuSXqwmfXxg",
			"surfaceForm": "Information Technology Consulting Firms",
			"type": "IndustryCategory"
		},
		{
			"name": "Display Technology Companies",
			"diffbotUri": "http://diffbot.com/entity/EX8GX-IaIP2Oi0rsYy_Bqfw",
			"targetDiffbotUri": "http://diffbot.com/entity/EX8GX-IaIP2Oi0rsYy_Bqfw",
			"targetDiffbotId": "EX8GX-IaIP2Oi0rsYy_Bqfw",
			"surfaceForm": "Display Technology Companies",
			"type": "IndustryCategory"
		},
		{
			"name": "Computer Hardware Companies",
			"diffbotUri": "http://diffbot.com/entity/EqFeVtLRWOUqTdzVhcYwBBQ",
			"targetDiffbotUri": "http://diffbot.com/entity/EqFeVtLRWOUqTdzVhcYwBBQ",
			"targetDiffbotId": "EqFeVtLRWOUqTdzVhcYwBBQ",
			"surfaceForm": "Computer Hardware Companies",
			"type": "IndustryCategory"
		}
	]
}
```
### ceo
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"ceo": []
}
```
### companiesHouseIds
  
* **Type:** String
* **Example:**
```
{
	"companiesHouseIds": ""
}
```
### crunchbaseUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"crunchbaseUri": "crunchbase.com/organization/ibm"
}
```
### descriptors
  
* **Type:** String
* **Example:**
```
{
	"descriptors": [
		"computer and office equipment",
		"computer manufacturing",
		"technology"
	]
}
```
### facebookUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"facebookUri": "facebook.com/IBM"
}
```
### founders
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"founders": [
		{
			"summary": "American businessman",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqQ%3EhV%7D_o1mz3%5BFetLz63rMs%3F.%7CS%60",
			"types": [
				"Person"
			],
			"name": "Charles Ranlett Flint",
			"diffbotUri": "http://diffbot.com/entity/E75wc-P6GOF2SUspkvyJygg",
			"nbIncomingEdges": 2,
			"targetDiffbotUri": "http://diffbot.com/entity/E75wc-P6GOF2SUspkvyJygg",
			"targetDiffbotId": "E75wc-P6GOF2SUspkvyJygg",
			"surfaceForm": "Charles Ranlett Flint",
			"type": "Person"
		},
		{
			"summary": "American businessman; chairman and CEO of IBM",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGS%3EyV%3BZd%3FYe%40Q9m2Gt6%40x.o%3BK",
			"types": [
				"Person"
			],
			"name": "Thomas J. Watson",
			"diffbotUri": "http://diffbot.com/entity/Ebhc0c10rNrOp6ukkVrvrwA",
			"nbIncomingEdges": 6,
			"targetDiffbotUri": "http://diffbot.com/entity/Ebhc0c10rNrOp6ukkVrvrwA",
			"targetDiffbotId": "Ebhc0c10rNrOp6ukkVrvrwA",
			"surfaceForm": "Thomas J. Watson",
			"type": "Person"
		}
	]
}
```
### foundingDate
  
* **Type:** DDate
* **Example:**
```
{
	"foundingDate": {
		"str": "d1911-06-06",
		"precision": 3,
		"timestamp": -1848441600000
	}
}
```
### githubUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"githubUri": ""
}
```
### googlePlusUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"googlePlusUri": "plus.google.com/100296114230478191916"
}
```
### homepageUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"homepageUri": "ibm.com"
}
```
### iSicClassification
  
* **Type:** ClassificationCode
* **Example:**
```
{
	"iSicClassification": []
}
```
### indianCorporateIdentityNumbers
  
* **Type:** String
* **Example:**
```
{
	"indianCorporateIdentityNumbers": ""
}
```
### industries
  
* **Type:** String
* **Example:**
```
{
	"industries": [
		"Computer Hardware Companies",
		"Computer Storage Companies",
		"Manufacturing Companies"
	]
}
```
### investments
  
* **Type:** Investment
* **Example:**
```
{
	"investments": []
}
```
### ipo
  
* **Type:** IPO
* **Example:**
```
{
	"ipo": {
		"date": {
			"str": "d1978-01-13",
			"precision": 3,
			"timestamp": 253497600000
		},
		"stockExchange": "nyse"
	}
}
```
### irsEmployerIdentificationNumbers
  
* **Type:** String
* **Example:**
```
{
	"irsEmployerIdentificationNumbers": [
		"13-0871985",
		"130871985"
	]
}
```
### isAcquired
  
* **Type:** Boolean
* **Example:**
```
{
	"isAcquired": false
}
```
### isDissolved
  
* **Type:** Boolean
* **Example:**
```
{
	"isDissolved": false
}
```
### isNonProfit
  
* **Type:** Boolean
* **Example:**
```
{
	"isNonProfit": false
}
```
### isPublic
  
* **Type:** Boolean
* **Example:**
```
{
	"isPublic": false
}
```
### leadership
  
* **Type:** Employee
* **Example:**
```
{
	"leadership": []
}
```
### linkedInUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"linkedInUri": "linkedin.com/company/ibm"
}
```
### location
  
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
			"nbIncomingEdges": 1026989768,
			"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
			"type": "AdministrativeArea"
		},
		"isCurrent": true,
		"address": "1 New Orchard Road, Armonk, 10504-1722, New York, United States",
		"city": {
			"summary": "Hamlet in Westchester County, New York",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FdvCo%3E%7CS%3Faf4_%3EU_JXRG%7BEa%2FCS0%5Bq%3Ch4%5Bp%40%5E1%5Ew%3Ek%3FDp%3F_p%3Bv%3DN%7DTp%3BI3Wk3dtMW4PhBc0X%5Dmo0KxFPrQp7T%2FNe%3AYy.gHZ",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Armonk",
			"diffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
			"nbIncomingEdges": 28407,
			"targetDiffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
			"targetDiffbotId": "EFYOMni-nNtScxpZwteaMxQ",
			"type": "AdministrativeArea"
		},
		"street": "1 New Orchard Road",
		"latitude": 41.1134033203125,
		"precision": 0.10000000149011612,
		"postalCode": "10504-1722",
		"surfaceForm": "1 New Orchard Road, Armonk, 10504-1722, New York, United States",
		"region": {
			"summary": "State of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FDvsO%3ExS%7DYb%3B%60z%2F_OXhGxB.yZl",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "New York",
			"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
			"nbIncomingEdges": 66347223,
			"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
			"targetDiffbotId": "E1NxI_KXaMbiP5g2aM9MRdw",
			"type": "AdministrativeArea"
		},
		"longitude": -73.7203598022461
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
				"summary": "Sovereign state in North America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEQ%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%3D%5ECHnM%60%29.%7BOV",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "United States of America",
				"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"nbIncomingEdges": 1026989768,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": true,
			"address": "New Orchard Road, Armonk, New York",
			"city": {
				"summary": "Hamlet in Westchester County, New York",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FdvCo%3E%7CS%3Faf4_%3EU_JXRG%7BEa%2FCS0%5Bq%3Ch4%5Bp%40%5E1%5Ew%3Ek%3FDp%3F_p%3Bv%3DN%7DTp%3BI3Wk3dtMW4PhBc0X%5Dmo0KxFPrQp7T%2FNe%3AYy.gHZ",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Armonk",
				"diffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
				"nbIncomingEdges": 28407,
				"targetDiffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
				"targetDiffbotId": "EFYOMni-nNtScxpZwteaMxQ",
				"type": "AdministrativeArea"
			},
			"street": "New Orchard Road",
			"subregion": {
				"summary": "County in New York, United States. Connector between New York City/Long Island and the rest of New York",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHt%3ErO%3CLr2YiFq7R%7EJq6UoKm7MyKm%7B%5Ex6G3by1d2Vp%3FmpmwN%5D%7C_.%40%5C%7B",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Westchester County",
				"diffbotUri": "http://diffbot.com/entity/EoKezLIvJP82Xm_cWVQyCQA",
				"nbIncomingEdges": 2643349,
				"targetDiffbotUri": "http://diffbot.com/entity/EoKezLIvJP82Xm_cWVQyCQA",
				"targetDiffbotId": "EoKezLIvJP82Xm_cWVQyCQA",
				"type": "AdministrativeArea"
			},
			"latitude": 41.1134033203125,
			"precision": 0.10000000149011612,
			"postalCode": "10504-1722",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FDvsO%3ExS%7DYb%3B%60z%2F_OXhGxB.yZl",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York",
				"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"nbIncomingEdges": 66347223,
				"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"targetDiffbotId": "E1NxI_KXaMbiP5g2aM9MRdw",
				"type": "AdministrativeArea"
			},
			"longitude": -73.7203598022461
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
				"nbIncomingEdges": 1026989768,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": false,
			"address": "United States",
			"latitude": 39.71595764160156,
			"precision": 3133.158935546875,
			"longitude": -96.99966430664062
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
				"nbIncomingEdges": 1026989768,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": false,
			"address": "1 New Orchard Road, North Castle, New York",
			"city": {
				"summary": "Town in Westchester County, New York, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDu%3E%7CS%3Faf4_%3EU_JXRG%7BEa%2FCS0%5Bq%3Ch4%5Bp%40%5E1%5Ew%3Ek%3FDp%3F_p%3Bv%3DN%7DTp%3BI3Wk3dtMW4PhBc0X%5Dzl5Pr%3A4k%5B%7D%3BMuOf%7D%5C1D%5B%3Agn6.D%5Dg",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "North Castle",
				"diffbotUri": "http://diffbot.com/entity/EsulWqYOjPseTau0QUH8Ruw",
				"nbIncomingEdges": 2919,
				"targetDiffbotUri": "http://diffbot.com/entity/EsulWqYOjPseTau0QUH8Ruw",
				"targetDiffbotId": "EsulWqYOjPseTau0QUH8Ruw",
				"type": "AdministrativeArea"
			},
			"street": "1 New Orchard Road",
			"subregion": {
				"summary": "County in New York, United States. Connector between New York City/Long Island and the rest of New York",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHt%3ErO%3CLr2YiFq7R%7EJq6UoKm7MyKm%7B%5Ex6G3by1d2Vp%3FmpmwN%5D%7C_.%40%5C%7B",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Westchester County",
				"diffbotUri": "http://diffbot.com/entity/EoKezLIvJP82Xm_cWVQyCQA",
				"nbIncomingEdges": 2643349,
				"targetDiffbotUri": "http://diffbot.com/entity/EoKezLIvJP82Xm_cWVQyCQA",
				"targetDiffbotId": "EoKezLIvJP82Xm_cWVQyCQA",
				"type": "AdministrativeArea"
			},
			"latitude": 41.10810089111328,
			"precision": 10,
			"postalCode": "10504",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FDvsO%3ExS%7DYb%3B%60z%2F_OXhGxB.yZl",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York",
				"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"nbIncomingEdges": 66347223,
				"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"targetDiffbotId": "E1NxI_KXaMbiP5g2aM9MRdw",
				"type": "AdministrativeArea"
			},
			"longitude": -73.72029876708984
		}
	]
}
```
### logo
  
* **Type:** String
* **Example:**
```
{
	"logo": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEo%3En0iLo%3Ba%3A.mN%60"
}
```
### mccClassification
  
* **Type:** ClassificationCode
* **Example:**
```
{
	"mccClassification": []
}
```
### mccCode
**`Deprecated`**  
* **Type:** Integer
* **Example:**
```
{
	"mccCode": 0
}
```
### mccCodeDescription
**`Deprecated`**  
* **Type:** String
* **Example:**
```
{
	"mccCodeDescription": ""
}
```
### motto
  
* **Type:** String
* **Example:**
```
{
	"motto": "We're using technologies like AI, cloud, blockchain and IoT to help our clients transform their industries."
}
```
### naceClassification
  
* **Type:** ClassificationCode
* **Example:**
```
{
	"naceClassification": []
}
```
### naicsClassification
  
* **Type:** ClassificationCode
* **Example:**
```
{
	"naicsClassification": [
		{
			"code": "334000",
			"isPrimary": false,
			"name": "Computer and Electronic Product Manufacturing"
		},
		{
			"code": "334112",
			"isPrimary": false,
			"name": "Computer Storage Device Manufacturing"
		},
		{
			"code": "334419",
			"isPrimary": false,
			"name": "Other Electronic Component Manufacturing"
		}
	]
}
```
### nbActiveEmployeeEdges
  
* **Type:** Integer
* **Example:**
```
{
	"nbActiveEmployeeEdges": 156737
}
```
### nbEmployees
  
* **Type:** Integer
* **Example:**
```
{
	"nbEmployees": 352600
}
```
### nbEmployeesMax
  
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMax": 352600
}
```
### nbEmployeesMin
  
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMin": 352600
}
```
### nbLocations
  
* **Type:** Integer
* **Example:**
```
{
	"nbLocations": 46
}
```
### nbUniqueInvestors
  
* **Type:** Integer
* **Example:**
```
{
	"nbUniqueInvestors": 0
}
```
### parentCompany
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"parentCompany": []
}
```
### phoneNumbers
  
* **Type:** PhoneNumber
* **Example:**
```
{
	"phoneNumbers": [
		{
			"string": "1-914-499-1900",
			"digits": "19144991900"
		},
		{
			"string": "800-426-4968",
			"digits": "8004264968"
		}
	]
}
```
### quarterlyRevenues
  
* **Type:** QuarterlyRevenue
* **Example:**
```
{
	"quarterlyRevenues": [
		{
			"revenue": {
				"currency": "USD",
				"value": 24672999424
			},
			"isCurrent": false,
			"year": 2012,
			"filingDate": {
				"str": "d2013-04-30",
				"precision": 3,
				"timestamp": 1367280000000
			},
			"revenueDate": {
				"str": "d2012-03-31",
				"precision": 3,
				"timestamp": 1333152000000
			},
			"quarter": 1
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 26666000384
			},
			"isCurrent": false,
			"year": 2011,
			"filingDate": {
				"str": "d2012-07-31",
				"precision": 3,
				"timestamp": 1343692800000
			},
			"revenueDate": {
				"str": "d2011-06-30",
				"precision": 3,
				"timestamp": 1309392000000
			},
			"quarter": 2
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 24746999808
			},
			"isCurrent": false,
			"year": 2012,
			"filingDate": {
				"str": "d2013-10-29",
				"precision": 3,
				"timestamp": 1383004800000
			},
			"revenueDate": {
				"str": "d2012-09-30",
				"precision": 3,
				"timestamp": 1348963200000
			},
			"quarter": 3
		}
	]
}
```
### revenue
  
* **Type:** Amount
* **Example:**
```
{
	"revenue": {
		"currency": "USD",
		"value": 76999999488
	}
}
```
### secCentralIndexKeys
  
* **Type:** String
* **Example:**
```
{
	"secCentralIndexKeys": [
		"0000051143",
		"51143"
	]
}
```
### sicClassification
  
* **Type:** ClassificationCode
* **Example:**
```
{
	"sicClassification": [
		{
			"code": "3570",
			"isPrimary": false,
			"name": "Computer And Office Equipment"
		}
	]
}
```
### sicCode
**`Deprecated`**  
* **Type:** Integer
* **Example:**
```
{
	"sicCode": 0
}
```
### sicCodeDescription
**`Deprecated`**  
* **Type:** String
* **Example:**
```
{
	"sicCodeDescription": ""
}
```
### stock
  
* **Type:** Stock
* **Example:**
```
{
	"stock": {
		"symbol": "IBM",
		"exchange": "NYSE"
	}
}
```
### subsidiaries
  
* **Type:** LinkedEntity
* **Example:**
```
{
	"subsidiaries": [
		{
			"summary": "American software company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%5D%3DWo%3Bm5LcuVb7y8KjHv%3DQtP%5CeOp%2FQ.I%5Do",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "Lotus Development",
			"diffbotUri": "http://diffbot.com/entity/EYO3WDFj0MJOcLbiuwE9rCQ",
			"nbIncomingEdges": 1734,
			"targetDiffbotUri": "http://diffbot.com/entity/EYO3WDFj0MJOcLbiuwE9rCQ",
			"targetDiffbotId": "EYO3WDFj0MJOcLbiuwE9rCQ",
			"surfaceForm": "Lotus Development",
			"type": "Corporation"
		},
		{
			"summary": "Company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%5D%3DWs%3Cg5Mc8Y_%7D%604Qv%3D_p%3A0EMfMl4B.I%5Do",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "Internet Security Systems",
			"diffbotUri": "http://diffbot.com/entity/Er8fZXT6TMxOdmnXwwbnGTA",
			"nbIncomingEdges": 2173,
			"targetDiffbotUri": "http://diffbot.com/entity/Er8fZXT6TMxOdmnXwwbnGTA",
			"targetDiffbotId": "Er8fZXT6TMxOdmnXwwbnGTA",
			"surfaceForm": "Internet Security Systems",
			"type": "Corporation"
		},
		{
			"summary": "Weather forecasting and information technology company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FcvBR%3EyV1LZ1%5B%3FI_JXRGsGNt%5Dddv_B%3B%3B%5CzEU.b%7B5",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "The Weather Company",
			"diffbotUri": "http://diffbot.com/entity/EqNo-pjkfMDyH5hux3StckQ",
			"nbIncomingEdges": 136,
			"targetDiffbotUri": "http://diffbot.com/entity/EqNo-pjkfMDyH5hux3StckQ",
			"targetDiffbotId": "EqNo-pjkfMDyH5hux3StckQ",
			"surfaceForm": "The Weather Company",
			"type": "Corporation"
		}
	]
}
```
### totalInvestment
  
* **Type:** Amount
* **Example:**
```
{
	"totalInvestment": ""
}
```
### twitterUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"twitterUri": "twitter.com/IBM"
}
```
### ukSicClassification
  
* **Type:** ClassificationCode
* **Example:**
```
{
	"ukSicClassification": []
}
```
### vatIdentificationNumbers
  
* **Type:** String
* **Example:**
```
{
	"vatIdentificationNumbers": ""
}
```
### wikipediaUri
  
* **Type:** DiffbotUrl
* **Example:**
```
{
	"wikipediaUri": "en.wikipedia.org/wiki/IBM"
}
```
### yearlyRevenues
  
* **Type:** YearlyRevenue
* **Example:**
```
{
	"yearlyRevenues": [
		{
			"revenue": {
				"currency": "USD",
				"value": 79591006208
			},
			"isCurrent": false,
			"year": 2018
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 77147004928
			},
			"isCurrent": false,
			"year": 2019,
			"filingDate": {
				"str": "d2020-03-31",
				"precision": 3,
				"timestamp": 1585612800000
			},
			"revenueDate": {
				"str": "d2019-12-31",
				"precision": 3,
				"timestamp": 1577750400000
			}
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 79918997504
			},
			"isCurrent": false,
			"year": 2016
		}
	]
}
```
