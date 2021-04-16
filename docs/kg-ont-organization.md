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
* [nbEmployeeRanges](#nbemployeeranges) 
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
  The organization that has most recently acquired this organization.
* **Type:** LinkedEntity
* **Example:**
```
{
	"acquiredBy": []
}
```
### angellistUri
  Link to the Angel List profile of this  entity
* **Type:** URL
* **Example:**
```
{
	"angellistUri": "angel.co/ibm"
}
```
### anzSicClassification
  The Australian and New Zealand Standard Industrial Classification (ANZSIC) is the standard classification used in Australia and New Zealand for the collection, compilation and publication of statistics by industry.
* **Type:** ClassificationCode
* **Example:**
```
{
	"anzSicClassification": []
}
```
### blogUri
  Link to the blog of this entity
* **Type:** URL
* **Example:**
```
{
	"blogUri": ""
}
```
### boardMembers
  Member of the Board of Directors for this organization.
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
			"summary": "American banker",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FjvIs%3ElO%3Efb_i3OY9mnzk%3EVuRf7C_H%5D%7BQpkQGN%281n%3CSl%3F_%29.xGV",
			"types": [
				"Person"
			],
			"name": "Gary Cohn",
			"diffbotUri": "http://diffbot.com/entity/EpEweymvaM0ug7Y-pCJBB3w",
			"nbIncomingEdges": 19,
			"targetDiffbotUri": "http://diffbot.com/entity/EpEweymvaM0ug7Y-pCJBB3w",
			"targetDiffbotId": "EpEweymvaM0ug7Y-pCJBB3w",
			"surfaceForm": "Gary Cohn",
			"type": "Person"
		},
		{
			"summary": "Indian American business executive and CEO of IBM",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%60%3C_s8m5LcwEg%3CryObFQxFtEU3Cl%7DQ.I%5Do",
			"types": [
				"Person"
			],
			"name": "Arvind Krishna",
			"diffbotUri": "http://diffbot.com/entity/E2w9R5RLuMCSUb511otaM-Q",
			"nbIncomingEdges": 8,
			"targetDiffbotUri": "http://diffbot.com/entity/E2w9R5RLuMCSUb511otaM-Q",
			"targetDiffbotId": "E2w9R5RLuMCSUb511otaM-Q",
			"surfaceForm": "Arvind Krishna",
			"type": "Person"
		}
	]
}
```
### brands
  Brands of an organization.
* **Type:** String
* **Example:**
```
{
	"brands": ""
}
```
### capitalization
  Total market value of all outstanding shares of an organization.
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
  Chief Executive Officer of this organization.
* **Type:** LinkedEntity
* **Example:**
```
{
	"ceo": []
}
```
### companiesHouseIds
  Identifier assigned by the U.K. Companies House.
* **Type:** String
* **Example:**
```
{
	"companiesHouseIds": ""
}
```
### crunchbaseUri
  Link to the Crunchbase profile of this entity
* **Type:** URL
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
  Link to the Facebook profile of this entity
* **Type:** URL
* **Example:**
```
{
	"facebookUri": "facebook.com/IBM"
}
```
### founders
  Founders of this organization
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
			"nbIncomingEdges": 5,
			"targetDiffbotUri": "http://diffbot.com/entity/Ebhc0c10rNrOp6ukkVrvrwA",
			"targetDiffbotId": "Ebhc0c10rNrOp6ukkVrvrwA",
			"surfaceForm": "Thomas J. Watson",
			"type": "Person"
		}
	]
}
```
### foundingDate
  The date this organization was founded
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
  Link to the Github profile of this entity
* **Type:** URL
* **Example:**
```
{
	"githubUri": ""
}
```
### googlePlusUri
  Link to the Google+ profile of this entity
* **Type:** URL
* **Example:**
```
{
	"googlePlusUri": "plus.google.com/100296114230478191916"
}
```
### homepageUri
  Link to the homepage of this  entity
* **Type:** URL
* **Example:**
```
{
	"homepageUri": "ibm.com"
}
```
### iSicClassification
  The International Standard of Industrial Classification (ISIC) of All Economic Activities code was developed by the UN as a standard way of classifying economic activities into 4-digit group codes. We use ISIC Rev. 4 (Edition 2016).
* **Type:** ClassificationCode
* **Example:**
```
{
	"iSicClassification": []
}
```
### indianCorporateIdentityNumbers
  Indian Corporate Identity Number (CIN).
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
  Investments received by this organization.
* **Type:** Investment
* **Example:**
```
{
	"investments": []
}
```
### ipo
  Information about the company&#39;s Initial Public Offering.
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
  Employer Identification Number as assigned by the U.S. Internal Revenue Service.
* **Type:** String
* **Example:**
```
{
	"irsEmployerIdentificationNumbers": [
		"130871985",
		"13-0871985"
	]
}
```
### isAcquired
  Indicates whether the company has been acquired in the past. To verify whether the company has been dissoved or not, refer to &#39;isDissolved&#39;.
* **Type:** Boolean
* **Example:**
```
{
	"isAcquired": false
}
```
### isDissolved
  Whether this company is active or dissolved.
* **Type:** Boolean
* **Example:**
```
{
	"isDissolved": false
}
```
### isNonProfit
  Whether this organization is a non-profit.
* **Type:** Boolean
* **Example:**
```
{
	"isNonProfit": false
}
```
### isPublic
  Whether the shares of this company are traded on a stock exchange.
* **Type:** Boolean
* **Example:**
```
{
	"isPublic": false
}
```
### linkedInUri
  Link to the LinkedIn profile of this entity
* **Type:** URL
* **Example:**
```
{
	"linkedInUri": "linkedin.com/company/ibm"
}
```
### location
  The main location of an organization.
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
			"nbIncomingEdges": 1046964005,
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
			"nbIncomingEdges": 27945,
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
			"nbIncomingEdges": 66842224,
			"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
			"targetDiffbotId": "E1NxI_KXaMbiP5g2aM9MRdw",
			"type": "AdministrativeArea"
		},
		"longitude": -73.7203598022461
	}
}
```
### locations
  All locations of an organization, including former locations (refer to the field &#39;isCurrent&#39;).
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
				"nbIncomingEdges": 1046964005,
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
				"nbIncomingEdges": 27945,
				"targetDiffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
				"targetDiffbotId": "EFYOMni-nNtScxpZwteaMxQ",
				"type": "AdministrativeArea"
			},
			"street": "New Orchard Road",
			"metroArea": {
				"summary": "Most populous metropolitan area in the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGp%3EsG%7B%3Ah%40l%3AQiDb39t6%7ExIf.T0J",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York metropolitan area",
				"diffbotUri": "http://diffbot.com/entity/EAtK9ZhUYMKmI_UzSrYinmw",
				"nbIncomingEdges": 2,
				"targetDiffbotUri": "http://diffbot.com/entity/EAtK9ZhUYMKmI_UzSrYinmw",
				"targetDiffbotId": "EAtK9ZhUYMKmI_UzSrYinmw",
				"type": "AdministrativeArea"
			},
			"subregion": {
				"summary": "County in New York, United States. Connector between New York City/Long Island and the rest of New York",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHt%3ErO%3CLr2YiFq7R%7EJq6UoKm7MyKm%7B%5Ex6G3by1d2Vp%3FmpmwN%5D%7C_.%40%5C%7B",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Westchester County",
				"diffbotUri": "http://diffbot.com/entity/EoKezLIvJP82Xm_cWVQyCQA",
				"nbIncomingEdges": 2604401,
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
				"nbIncomingEdges": 66842224,
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
				"nbIncomingEdges": 1046964005,
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
				"nbIncomingEdges": 1046964005,
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
				"nbIncomingEdges": 2934,
				"targetDiffbotUri": "http://diffbot.com/entity/EsulWqYOjPseTau0QUH8Ruw",
				"targetDiffbotId": "EsulWqYOjPseTau0QUH8Ruw",
				"type": "AdministrativeArea"
			},
			"street": "1 New Orchard Road",
			"metroArea": {
				"summary": "Most populous metropolitan area in the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGp%3EsG%7B%3Ah%40l%3AQiDb39t6%7ExIf.T0J",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York metropolitan area",
				"diffbotUri": "http://diffbot.com/entity/EAtK9ZhUYMKmI_UzSrYinmw",
				"nbIncomingEdges": 2,
				"targetDiffbotUri": "http://diffbot.com/entity/EAtK9ZhUYMKmI_UzSrYinmw",
				"targetDiffbotId": "EAtK9ZhUYMKmI_UzSrYinmw",
				"type": "AdministrativeArea"
			},
			"subregion": {
				"summary": "County in New York, United States. Connector between New York City/Long Island and the rest of New York",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHt%3ErO%3CLr2YiFq7R%7EJq6UoKm7MyKm%7B%5Ex6G3by1d2Vp%3FmpmwN%5D%7C_.%40%5C%7B",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Westchester County",
				"diffbotUri": "http://diffbot.com/entity/EoKezLIvJP82Xm_cWVQyCQA",
				"nbIncomingEdges": 2604401,
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
				"nbIncomingEdges": 66842224,
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
  A graphic mark, emblem, or symbol representative of an institution
* **Type:** String
* **Example:**
```
{
	"logo": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEo%3En0iLo%3Ba%3A.mN%60"
}
```
### mccClassification
  A Merchant Category Code (MCC) is a four-digit number listed in ISO 18245 for retail financial services. An MCC is used to classify a business by the types of goods or services it provides.
* **Type:** ClassificationCode
* **Example:**
```
{
	"mccClassification": []
}
```
### mccCode
**`Deprecated`**  Deprecated field, please migrate to mccClassification field
* **Type:** Integer
* **Example:**
```
{
	"mccCode": 0
}
```
### mccCodeDescription
**`Deprecated`**  Deprecated field, please migrate to mccClassification field
* **Type:** String
* **Example:**
```
{
	"mccCodeDescription": ""
}
```
### motto
  A short sentence or phrase chosen as encapsulating the beliefs or ideals guiding an organization
* **Type:** String
* **Example:**
```
{
	"motto": "We're using technologies like AI, cloud, blockchain and IoT to help our clients transform their industries."
}
```
### naceClassification
  The Statistical classification of economic activities in the European Community (NACE) is is a 4-digit classification providing the framework for collecting and presenting a large range of statistical data. We use NACE Rev. 2 (2008).
* **Type:** ClassificationCode
* **Example:**
```
{
	"naceClassification": []
}
```
### naicsClassification
  The North American Industry Classification System (NAICS) is the standard used by Federal statistical agencies in classifying business establishments for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy.
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
			"code": "330000",
			"isPrimary": false,
			"name": "Manufacturing"
		}
	]
}
```
### nbActiveEmployeeEdges
  Number of employees in the Diffbot KG who are currently employed by this organization.
* **Type:** Integer
* **Example:**
```
{
	"nbActiveEmployeeEdges": 179520
}
```
### nbEmployeeRanges
  The list of all ranges found for an organization from different sources
* **Type:** Range
* **Example:**
```
{
	"nbEmployeeRanges": []
}
```
### nbEmployees
  The estimated number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployees": 345900
}
```
### nbEmployeesMax
  Defines a upper bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMax": 345900
}
```
### nbEmployeesMin
  Defines a lower bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMin": 345900
}
```
### nbLocations
  Number of locations listed in the field &#39;locations&#39;
* **Type:** Integer
* **Example:**
```
{
	"nbLocations": 46
}
```
### nbUniqueInvestors
  Number of unique investors.
* **Type:** Integer
* **Example:**
```
{
	"nbUniqueInvestors": 0
}
```
### parentCompany
  The parent company of this subsidiary.
* **Type:** LinkedEntity
* **Example:**
```
{
	"parentCompany": []
}
```
### phoneNumbers
  Phone numbers of this organization.
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
  An organization&#39;s revenue for a period of 3 months.
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
  Income, especially that of a company or organization, generated from the sales of goods, services, capital or any other assets.
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
  Central Index Key as assigned by the U.S. Securities and Exchange Commission.
* **Type:** String
* **Example:**
```
{
	"secCentralIndexKeys": [
		"51143",
		"0000051143"
	]
}
```
### sicClassification
  The Standard Industrial Classification (SIC) is a system for classifying industries by a four-digit code. We use the version adopted by the U.S. Securities and Exchange Commission.
* **Type:** ClassificationCode
* **Example:**
```
{
	"sicClassification": [
		{
			"code": "3570",
			"isPrimary": false,
			"name": "Computer And Office Equipment"
		},
		{
			"code": "4000",
			"isPrimary": false,
			"name": "Railroad Transportation"
		},
		{
			"code": "3500",
			"isPrimary": false,
			"name": "Industrial machinery and equipment"
		}
	]
}
```
### sicCode
**`Deprecated`**  Deprecated field, please migrate to sicClassification field
* **Type:** Integer
* **Example:**
```
{
	"sicCode": 0
}
```
### sicCodeDescription
**`Deprecated`**  Deprecated field, please migrate to sicClassification field
* **Type:** String
* **Example:**
```
{
	"sicCodeDescription": ""
}
```
### stock
  Information about the company&#39;s stock.
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
  Current subsidiaries of this organization.
* **Type:** LinkedEntity
* **Example:**
```
{
	"subsidiaries": [
		{
			"summary": "Corporation based in United States",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "Softlayer Technologies Inc",
			"diffbotUri": "http://diffbot.com/entity/EQHLI6zuAMiioJSMlos8qIQ",
			"nbIncomingEdges": 1,
			"targetDiffbotUri": "http://diffbot.com/entity/EQHLI6zuAMiioJSMlos8qIQ",
			"targetDiffbotId": "EQHLI6zuAMiioJSMlos8qIQ",
			"surfaceForm": "Softlayer Technologies Inc",
			"type": "Corporation"
		},
		{
			"summary": "American multinational software company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv73%3AY3i2Pk%3F3%5CtMW6b%7B9r3izczY2.K%7C%3E",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "Red Hat",
			"diffbotUri": "http://diffbot.com/entity/EIATbb7uwOhSYiGqLBPUD0w",
			"nbIncomingEdges": 32448,
			"targetDiffbotUri": "http://diffbot.com/entity/EIATbb7uwOhSYiGqLBPUD0w",
			"targetDiffbotId": "EIATbb7uwOhSYiGqLBPUD0w",
			"surfaceForm": "Red Hat",
			"type": "Corporation"
		},
		{
			"summary": "Company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%5D%3DWs%3Cg5Mc8Y_%7D%604Qv%3D_p%3A0EMfMl4B.I%5Do",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "Internet Security Systems Inc",
			"diffbotUri": "http://diffbot.com/entity/Er8fZXT6TMxOdmnXwwbnGTA",
			"nbIncomingEdges": 1266,
			"targetDiffbotUri": "http://diffbot.com/entity/Er8fZXT6TMxOdmnXwwbnGTA",
			"targetDiffbotId": "Er8fZXT6TMxOdmnXwwbnGTA",
			"surfaceForm": "Internet Security Systems Inc",
			"type": "Corporation"
		}
	]
}
```
### totalInvestment
  Sum of all investments.
* **Type:** Amount
* **Example:**
```
{
	"totalInvestment": ""
}
```
### twitterUri
  Link to the LinkedIn profile of this entity
* **Type:** URL
* **Example:**
```
{
	"twitterUri": "twitter.com/ibm"
}
```
### ukSicClassification
  The U.K. Standard Industrial Classification (SIC) system used by Companies House. Companies House uses a condensed version of the full list of codes available from the Office of National Statistics (ONS).
* **Type:** ClassificationCode
* **Example:**
```
{
	"ukSicClassification": []
}
```
### vatIdentificationNumbers
  VAT identification number, an identifier used in many countries, including the countries of the European Union, for value added tax purposes
* **Type:** String
* **Example:**
```
{
	"vatIdentificationNumbers": ""
}
```
### wikipediaUri
  Link to the Crunchbase profile of this entity
* **Type:** URL
* **Example:**
```
{
	"wikipediaUri": "en.wikipedia.org/wiki/IBM"
}
```
### yearlyRevenues
  An organization&#39;s revenue for a period of 12 months.
* **Type:** YearlyRevenue
* **Example:**
```
{
	"yearlyRevenues": [
		{
			"revenue": {
				"currency": "USD",
				"value": 73620004864
			},
			"isCurrent": false,
			"year": 2020
		},
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
		}
	]
}
```
