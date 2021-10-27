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
* [guiNumbers](#guinumbers) 
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
* [japaneseCorporateNumbers](#japanesecorporatenumbers) 
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
* [nafClassification](#nafclassification) 
* [naicsClassification](#naicsclassification) 
* [nbActiveEmployeeEdges](#nbactiveemployeeedges) 
* [nbEmployeeRanges](#nbemployeeranges) 
* [nbEmployees](#nbemployees) 
* [nbEmployeesMax](#nbemployeesmax) 
* [nbEmployeesMin](#nbemployeesmin) 
* [nbEmployeesOnLinkedIn](#nbemployeesonlinkedin) 
* [nbEmployeesOnLinkedInOverTime](#nbemployeesonlinkedinovertime) 
* [nbLocations](#nblocations) 
* [nbUniqueInvestors](#nbuniqueinvestors) 
* [norwegianOrganizationNumbers](#norwegianorganizationnumbers) 
* [okvedClassification](#okvedclassification) 
* [parentCompany](#parentcompany) 
* [phoneNumbers](#phonenumbers) 
* [predecessors](#predecessors) 
* [quarterlyRevenues](#quarterlyrevenues) 
* [revenue](#revenue) 
* [russianTaxpayerIdentificationNumbers](#russiantaxpayeridentificationnumbers) 
* [secCentralIndexKeys](#seccentralindexkeys) 
* [secForms](#secforms) 
* [sicClassification](#sicclassification) 
* [sicCode](#siccode) 
* [sicCodeDescription](#siccodedescription) 
* [sirenCodes](#sirencodes) 
* [ssbClassification](#ssbclassification) 
* [stock](#stock) 
* [subsidiaries](#subsidiaries) 
* [successors](#successors) 
* [technographics](#technographics) 
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
	"acquiredBy": [
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
	"anzSicClassification": [
		{
			"code": "",
			"isPrimary": false,
			"name": "",
			"version": ""
		}
	]
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
			"summary": "Indian American business executive and CEO of IBM",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%60%3C_s8m5LcwEg%3CryObFQxFtEU3Cl%7DQ.I%5Do",
			"types": [
				"Person"
			],
			"name": "Arvind Krishna",
			"diffbotUri": "http://diffbot.com/entity/E2w9R5RLuMCSUb511otaM-Q",
			"targetDiffbotUri": "http://diffbot.com/entity/E2w9R5RLuMCSUb511otaM-Q",
			"targetDiffbotId": "E2w9R5RLuMCSUb511otaM-Q",
			"surfaceForm": "Arvind Krishna",
			"type": "Person"
		},
		{
			"summary": "American business executive",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%60%3B%5Bv%3Ci6Lc%7Bhs%3Ac5Ii%40W%7DVjN%5D4bnrC.I%5Do",
			"types": [
				"Person"
			],
			"name": "Ginni Rometty",
			"diffbotUri": "http://diffbot.com/entity/EFCXA8DGjPMq5oTjl9RESEw",
			"targetDiffbotUri": "http://diffbot.com/entity/EFCXA8DGjPMq5oTjl9RESEw",
			"targetDiffbotId": "EFCXA8DGjPMq5oTjl9RESEw",
			"surfaceForm": "Ginni Rometty",
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
			"targetDiffbotUri": "http://diffbot.com/entity/EpEweymvaM0ug7Y-pCJBB3w",
			"targetDiffbotId": "EpEweymvaM0ug7Y-pCJBB3w",
			"surfaceForm": "Gary Cohn",
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
		"value": 112935797000
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
			"types": [
				"Intangible",
				"IndustryCategory"
			],
			"name": "Electronic Products Manufacturers",
			"diffbotUri": "http://diffbot.com/entity/EUNd__O4zMNW81lAXNK2GNw",
			"targetDiffbotUri": "http://diffbot.com/entity/EUNd__O4zMNW81lAXNK2GNw",
			"targetDiffbotId": "EUNd__O4zMNW81lAXNK2GNw",
			"surfaceForm": "Electronic Products Manufacturers",
			"type": "IndustryCategory"
		},
		{
			"types": [
				"Intangible",
				"IndustryCategory"
			],
			"name": "Display Technology Companies",
			"diffbotUri": "http://diffbot.com/entity/EX8GX-IaIP2Oi0rsYy_Bqfw",
			"targetDiffbotUri": "http://diffbot.com/entity/EX8GX-IaIP2Oi0rsYy_Bqfw",
			"targetDiffbotId": "EX8GX-IaIP2Oi0rsYy_Bqfw",
			"surfaceForm": "Display Technology Companies",
			"type": "IndustryCategory"
		},
		{
			"types": [
				"Intangible",
				"IndustryCategory"
			],
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
	"ceo": {
		"summary": "Indian American business executive and CEO of IBM",
		"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%60%3C_s8m5LcwEg%3CryObFQxFtEU3Cl%7DQ.I%5Do",
		"types": [
			"Person"
		],
		"name": "Arvind Krishna",
		"diffbotUri": "http://diffbot.com/entity/E2w9R5RLuMCSUb511otaM-Q",
		"targetDiffbotUri": "http://diffbot.com/entity/E2w9R5RLuMCSUb511otaM-Q",
		"targetDiffbotId": "E2w9R5RLuMCSUb511otaM-Q",
		"surfaceForm": "Arvind Krishna",
		"type": "Person"
	}
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
		"data storage systems manufacturing",
		"computer peripheral equipment manufacturing"
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
		"str": "d1911-06-16",
		"precision": 3,
		"timestamp": -1847577600000
	}
}
```
### githubUri
  Link to the Github profile of this entity
* **Type:** URL
* **Example:**
```
{
	"githubUri": "github.com/ibm"
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
### guiNumbers
  Government Uniform Invoice (GUI) number is a numeric identifier for business entity registered in Taiwan assigned by Ministry of Economic Affairs, Taiwan.
* **Type:** String
* **Example:**
```
{
	"guiNumbers": ""
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
	"iSicClassification": [
		{
			"code": "",
			"isPrimary": false,
			"name": "",
			"version": ""
		}
	]
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
		"Manufacturing Companies",
		"Electronic Products Manufacturers",
		"Display Technology Companies"
	]
}
```
### investments
  Investments received by this organization.
* **Type:** Investment
* **Example:**
```
{
	"investments": [
		{
			"date": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"amount": {
				"currency": "",
				"value": ""
			},
			"isCurrent": false,
			"series": "",
			"investors": [
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
	]
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
		"13-0871985",
		"130871985"
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
### japaneseCorporateNumbers
  The Corporate Numbers are 13-digit identifiers assigned by the National Tax Agency to companies and other organizations registered in Japan.
* **Type:** String
* **Example:**
```
{
	"japaneseCorporateNumbers": ""
}
```
### leadership
  List of organization C-Level Officers.
* **Type:** Employee
* **Example:**
```
{
	"leadership": [
		{
			"isCurrent": false,
			"from": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"categories": [
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
			],
			"to": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"employee": {
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
			"title": ""
		}
	]
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
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDp%3EsGo0d%3Cc%3FPfxZ%7DGx8Zg.o%3BK",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "New York",
			"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
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
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": true,
			"address": "1 New Orchard Rd, Armonk, New York",
			"city": {
				"summary": "Hamlet in Westchester County, New York",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FdvCo%3E%7CS%3Faf4_%3EU_JXRG%7BEa%2FCS0%5Bq%3Ch4%5Bp%40%5E1%5Ew%3Ek%3FDp%3F_p%3Bv%3DN%7DTp%3BI3Wk3dtMW4PhBc0X%5Dmo0KxFPrQp7T%2FNe%3AYy.gHZ",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Armonk",
				"diffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
				"targetDiffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
				"targetDiffbotId": "EFYOMni-nNtScxpZwteaMxQ",
				"type": "AdministrativeArea"
			},
			"street": "1 New Orchard Rd",
			"metroArea": {
				"summary": "Most populous metropolitan area in the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGp%3EsG%7B%3Ah%40l%3AQiDb39t6%7ExIf.T0J",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York metropolitan area",
				"diffbotUri": "http://diffbot.com/entity/EAtK9ZhUYMKmI_UzSrYinmw",
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
				"targetDiffbotUri": "http://diffbot.com/entity/EoKezLIvJP82Xm_cWVQyCQA",
				"targetDiffbotId": "EoKezLIvJP82Xm_cWVQyCQA",
				"type": "AdministrativeArea"
			},
			"latitude": 41.1075439453125,
			"precision": 0.10000000149011612,
			"postalCode": "10504-1722",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDp%3EsGo0d%3Cc%3FPfxZ%7DGx8Zg.o%3BK",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York",
				"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"targetDiffbotId": "E1NxI_KXaMbiP5g2aM9MRdw",
				"type": "AdministrativeArea"
			},
			"longitude": -73.72123718261719
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
			"address": "Armonk, New York",
			"city": {
				"summary": "Hamlet in Westchester County, New York",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FdvCo%3E%7CS%3Faf4_%3EU_JXRG%7BEa%2FCS0%5Bq%3Ch4%5Bp%40%5E1%5Ew%3Ek%3FDp%3F_p%3Bv%3DN%7DTp%3BI3Wk3dtMW4PhBc0X%5Dmo0KxFPrQp7T%2FNe%3AYy.gHZ",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Armonk",
				"diffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
				"targetDiffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
				"targetDiffbotId": "EFYOMni-nNtScxpZwteaMxQ",
				"type": "AdministrativeArea"
			},
			"metroArea": {
				"summary": "Most populous metropolitan area in the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGp%3EsG%7B%3Ah%40l%3AQiDb39t6%7ExIf.T0J",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York metropolitan area",
				"diffbotUri": "http://diffbot.com/entity/EAtK9ZhUYMKmI_UzSrYinmw",
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
				"targetDiffbotUri": "http://diffbot.com/entity/EoKezLIvJP82Xm_cWVQyCQA",
				"targetDiffbotId": "EoKezLIvJP82Xm_cWVQyCQA",
				"type": "AdministrativeArea"
			},
			"latitude": 41.131256103515625,
			"precision": 3.956873655319214,
			"postalCode": "10504",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDp%3EsGo0d%3Cc%3FPfxZ%7DGx8Zg.o%3BK",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York",
				"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"targetDiffbotId": "E1NxI_KXaMbiP5g2aM9MRdw",
				"type": "AdministrativeArea"
			},
			"longitude": -73.71214294433594
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
			"address": "United States",
			"latitude": 39.71595764160156,
			"precision": 3133.158935546875,
			"longitude": -96.99966430664062
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
	"mccClassification": [
		{
			"code": "",
			"isPrimary": false,
			"name": "",
			"version": ""
		}
	]
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
	"naceClassification": [
		{
			"code": "",
			"isPrimary": false,
			"name": "",
			"version": ""
		}
	]
}
```
### nafClassification
  NAF is the French national statistical classification of activities.
* **Type:** ClassificationCode
* **Example:**
```
{
	"nafClassification": [
		{
			"code": "",
			"isPrimary": false,
			"name": "",
			"version": ""
		}
	]
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
			"code": "522220",
			"isPrimary": false,
			"name": "Sales Financing"
		},
		{
			"code": "330000",
			"isPrimary": false,
			"name": "Manufacturing"
		},
		{
			"code": "335000",
			"isPrimary": false,
			"name": "Electrical Equipment, Appliance, and Component Manufacturing"
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
	"nbActiveEmployeeEdges": 162466
}
```
### nbEmployeeRanges
  The list of all ranges found for an organization from different sources
* **Type:** Range
* **Example:**
```
{
	"nbEmployeeRanges": [
		{
			"lower": 0,
			"upper": 0
		}
	]
}
```
### nbEmployees
  The estimated number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployees": 345000
}
```
### nbEmployeesMax
  Defines a upper bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMax": 345000
}
```
### nbEmployeesMin
  Defines a lower bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMin": 345000
}
```
### nbEmployeesOnLinkedIn
  Number of employees with LinkedIn profiles as reported by LinkedIn.
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesOnLinkedIn": 0
}
```
### nbEmployeesOnLinkedInOverTime
  Number of employees with LinkedIn profiles as reported by LinkedIn over time. This includes the latest number reported by LinkedIn.
* **Type:** ObservationInt
* **Example:**
```
{
	"nbEmployeesOnLinkedInOverTime": [
		{
			"observationDate": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"observationValue": 0
		}
	]
}
```
### nbLocations
  Number of locations listed in the field &#39;locations&#39;
* **Type:** Integer
* **Example:**
```
{
	"nbLocations": 47
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
### norwegianOrganizationNumbers
  Organisation&#39;s identifier in the Norwegian Central Coordinating Register for Legal Entities.
* **Type:** String
* **Example:**
```
{
	"norwegianOrganizationNumbers": ""
}
```
### okvedClassification
  Russian Economic Activities Classification System code (OKVED).
* **Type:** ClassificationCode
* **Example:**
```
{
	"okvedClassification": [
		{
			"code": "",
			"isPrimary": false,
			"name": "",
			"version": ""
		}
	]
}
```
### parentCompany
  The parent company of this subsidiary.
* **Type:** LinkedEntity
* **Example:**
```
{
	"parentCompany": {
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
### predecessors
  Organizations whose ownership, title and interest, including all rights, benefits, duties and liabilities were acquired in an uninterrupted chain of succession by this organization.
* **Type:** LinkedEntity
* **Example:**
```
{
	"predecessors": [
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
				"value": 24673000000
			},
			"isCurrent": false,
			"year": 2012,
			"filingDate": {
				"str": "d2013-03-31",
				"precision": 3,
				"timestamp": 1364688000000
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
				"value": 26666000000
			},
			"isCurrent": false,
			"year": 2011,
			"filingDate": {
				"str": "d2012-06-30",
				"precision": 3,
				"timestamp": 1341014400000
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
				"value": 26157000000
			},
			"isCurrent": false,
			"year": 2011,
			"filingDate": {
				"str": "d2012-09-30",
				"precision": 3,
				"timestamp": 1348963200000
			},
			"revenueDate": {
				"str": "d2011-09-30",
				"precision": 3,
				"timestamp": 1317340800000
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
		"value": 73620000000
	}
}
```
### russianTaxpayerIdentificationNumbers
  Russian Taxpayer Personal Identification Number (INN).
* **Type:** String
* **Example:**
```
{
	"russianTaxpayerIdentificationNumbers": ""
}
```
### secCentralIndexKeys
  Central Index Key as assigned by the U.S. Securities and Exchange Commission.
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
### secForms
  Financial statements or other documents filed by this organizations to the U.S. Securities and Exchange Commission (SEC).
* **Type:** SECForm
* **Example:**
```
{
	"secForms": [
		{
			"formType": "8-K/A",
			"periodOfReport": {
				"str": "d2019-06-30",
				"precision": 3,
				"timestamp": 1561852800000
			},
			"filingDate": {
				"str": "d2019-09-20",
				"precision": 3,
				"timestamp": 1568937600000
			},
			"documentUrl": "https://www.sec.gov/ix?doc=/Archives/edgar/data/51143/000155837019008675/ibm-20190709x8ka.htm",
			"filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000155837019008675/0001558370-19-008675-index.htm"
		},
		{
			"formType": "10-Q",
			"periodOfReport": {
				"str": "d2019-06-30",
				"precision": 3,
				"timestamp": 1561852800000
			},
			"filingDate": {
				"str": "d2019-07-30",
				"precision": 3,
				"timestamp": 1564444800000
			},
			"documentUrl": "https://www.sec.gov/ix?doc=/Archives/edgar/data/51143/000155837019006560/ibm-20190630x10q.htm",
			"filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000155837019006560/0001558370-19-006560-index.htm"
		},
		{
			"formType": "8-K",
			"periodOfReport": {
				"str": "d2019-07-31",
				"precision": 3,
				"timestamp": 1564531200000
			},
			"filingDate": {
				"str": "d2019-08-02",
				"precision": 3,
				"timestamp": 1564704000000
			},
			"documentUrl": "https://www.sec.gov/ix?doc=/Archives/edgar/data/51143/000155837019006914/ibm-20190802x8k.htm",
			"filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000155837019006914/0001558370-19-006914-index.htm"
		}
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
### sirenCodes
  SIREN codes are given to French businesses and nonprofit associations.
* **Type:** String
* **Example:**
```
{
	"sirenCodes": ""
}
```
### ssbClassification
  Norway statistical classification (SSB) is a statistical standard used in Norway that splits economy into sectors on the basis of groups of homogeneous institutional units.
* **Type:** ClassificationCode
* **Example:**
```
{
	"ssbClassification": [
		{
			"code": "",
			"isPrimary": false,
			"name": "",
			"version": ""
		}
	]
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
			"summary": "Business enterprise",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzBa%3DXu9h%3DKcsg%5CFUA%5Dx3S%3A%2F%7C3h1%601Ba%40%3CTnki1nHH%5EI.3GY",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "SoftLayer Technologies, Inc.",
			"diffbotUri": "http://diffbot.com/entity/Eo3z6VKzPNxmoKVCMdwfvmw",
			"targetDiffbotUri": "http://diffbot.com/entity/Eo3z6VKzPNxmoKVCMdwfvmw",
			"targetDiffbotId": "Eo3z6VKzPNxmoKVCMdwfvmw",
			"surfaceForm": "SoftLayer Technologies, Inc.",
			"type": "Corporation"
		},
		{
			"summary": "American multinational software company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv73%3AY3i2Pk%3F3%5CtMW6b%7B9r3izczY2.K%7C%3E",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "Red Hat, Inc.",
			"diffbotUri": "http://diffbot.com/entity/EIATbb7uwOhSYiGqLBPUD0w",
			"targetDiffbotUri": "http://diffbot.com/entity/EIATbb7uwOhSYiGqLBPUD0w",
			"targetDiffbotId": "EIATbb7uwOhSYiGqLBPUD0w",
			"surfaceForm": "Red Hat, Inc.",
			"type": "Corporation"
		},
		{
			"summary": "Corporation based in Egypt",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "IBM Egypt Business Support Services",
			"diffbotUri": "http://diffbot.com/entity/EqxFQye0mN_mBtveIsJwWmg",
			"targetDiffbotUri": "http://diffbot.com/entity/EqxFQye0mN_mBtveIsJwWmg",
			"targetDiffbotId": "EqxFQye0mN_mBtveIsJwWmg",
			"surfaceForm": "IBM Egypt Business Support Services",
			"type": "Corporation"
		}
	]
}
```
### successors
  Organizations formed by a consolidation, merger, amalgamation or other similar transaction involving this organization or the entity to which the Company conveys, transfers or leases substantially all its properties and assets.
* **Type:** LinkedEntity
* **Example:**
```
{
	"successors": [
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
### technographics
  
* **Type:** Technographics
* **Example:**
```
{
	"technographics": [
		{
			"technology": {
				"recordId": "EPdsrDmLiMQCskvBLp_dloQ@735",
				"name": "salesforce",
				"surfaceForm": "salesforce",
				"position": "companyTechnographicsTechnology",
				"type": "DiffbotEntity"
			}
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
	"totalInvestment": {
		"currency": "",
		"value": ""
	}
}
```
### twitterUri
  Link to the LinkedIn profile of this entity
* **Type:** URL
* **Example:**
```
{
	"twitterUri": "twitter.com/IBM"
}
```
### ukSicClassification
  The U.K. Standard Industrial Classification (SIC) system used by Companies House. Companies House uses a condensed version of the full list of codes available from the Office of National Statistics (ONS).
* **Type:** ClassificationCode
* **Example:**
```
{
	"ukSicClassification": [
		{
			"code": "",
			"isPrimary": false,
			"name": "",
			"version": ""
		}
	]
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
				"value": 73620000000
			},
			"isCurrent": false,
			"year": 2020
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 79591000000
			},
			"isCurrent": false,
			"year": 2018
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 77147000000
			},
			"isCurrent": false,
			"year": 2019,
			"filingDate": {
				"str": "d2021-02-23",
				"precision": 3,
				"timestamp": 1614038400000
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
