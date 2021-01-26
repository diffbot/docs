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
* [nbEmployeesMax](#nbemployeesmax) 
* [nbEmployeesMin](#nbemployeesmin) 
* [nbLocations](#nblocations) 
* [nbUniqueInvestors](#nbuniqueinvestors) 
* [parentCompany](#parentcompany) 
* [phoneNumbers](#phonenumbers) 
* [quarterlyRevenues](#quarterlyrevenues) 
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
Note that certain longer field examples may be truncated for readability in these docs. 

### acquiredBy
  The organization that has most recently acquired this organization.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"acquiredBy": "[See Organization]"
}
```
### angellistUri
  Link to the Angel List profile of this  entity
* **Type:** 
* **Example:**
```
{
	"angellistUri": ""
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
			"name": ""
		}
	]
}
```
### blogUri
  Link to the blog of this entity
* **Type:** 
* **Example:**
```
{
	"blogUri": ""
}
```
### boardMembers
  Member of the Board of Directors for this organization.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"boardMembers": [
		{
			"summary": "American computer businessman and CEO of Calico",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%5C%3CYm%3Eg%3DQc5Qq5TwMi%3BT%3ANfD%5BpF%60%2FQ.C_o",
			"types": [
				"Person"
			],
			"name": "Arthur Levinson",
			"diffbotUri": "http://diffbot.com/entity/EP0czxZv4P--hHu9RIc0oDw",
			"nbIncomingEdges": 5,
			"targetDiffbotUri": "http://diffbot.com/entity/EP0czxZv4P--hHu9RIc0oDw",
			"surfaceForm": "Arthur Levinson",
			"type": "Person"
		},
		{
			"summary": "Board Member at Apple",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.%5DjEp9G.Bd%7BkETp%7CMfK%7B-h%7B%5C%5C-ZjXk-D4Kh-g%5DBtEVu%2Fu4%2F%2FzN_%3Cb4E.G%5Bm",
			"types": [
				"Person"
			],
			"name": "Monica Lozano",
			"diffbotUri": "http://diffbot.com/entity/EMcnGCdN_OluuOUl_fp8bjw",
			"nbIncomingEdges": 1,
			"targetDiffbotUri": "http://diffbot.com/entity/EMcnGCdN_OluuOUl_fp8bjw",
			"surfaceForm": "Monica Lozano",
			"type": "Person"
		},
		{
			"summary": "Canadian businessman",
			"types": [
				"Person"
			],
			"name": "Ronald Sugar",
			"diffbotUri": "http://diffbot.com/entity/EGYakVmlmMRiOr1bmvGpvUA",
			"nbIncomingEdges": 1,
			"targetDiffbotUri": "http://diffbot.com/entity/EGYakVmlmMRiOr1bmvGpvUA",
			"surfaceForm": "Ronald Sugar",
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
		"value": 2289400020992
	}
}
```
### categories
  
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"categories": [
		{
			"name": "Computer Hardware Companies",
			"diffbotUri": "http://diffbot.com/entity/ElJodhysCPWW4dV-ag_gayQ",
			"targetDiffbotUri": "http://diffbot.com/entity/ElJodhysCPWW4dV-ag_gayQ",
			"surfaceForm": "Computer Hardware Companies"
		},
		{
			"name": "Manufacturing Companies",
			"diffbotUri": "http://diffbot.com/entity/E2uVXivaLO66MwG7epo9rxw",
			"targetDiffbotUri": "http://diffbot.com/entity/E2uVXivaLO66MwG7epo9rxw",
			"surfaceForm": "Manufacturing Companies"
		},
		{
			"name": "Software Companies",
			"diffbotUri": "http://diffbot.com/entity/EAOPmBTcTMHSKzwvcs3AjQA",
			"targetDiffbotUri": "http://diffbot.com/entity/EAOPmBTcTMHSKzwvcs3AjQA",
			"surfaceForm": "Software Companies"
		}
	]
}
```
### ceo
  Chief Executive Officer of this organization.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"ceo": {
		"summary": "American business executive",
		"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvts%3EyW9LF%3Bi6%40%7CXyH7iI%5CvTj%2F.%7CS%60",
		"types": [
			"Person"
		],
		"name": "Tim Cook",
		"diffbotUri": "http://diffbot.com/entity/E84vWTe2yP6qQ0u7kbL3ZGA",
		"nbIncomingEdges": 19,
		"targetDiffbotUri": "http://diffbot.com/entity/E84vWTe2yP6qQ0u7kbL3ZGA",
		"surfaceForm": "Tim Cook",
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
* **Type:** 
* **Example:**
```
{
	"crunchbaseUri": "crunchbase.com/organization/apple"
}
```
### descriptors
  
* **Type:** String
* **Example:**
```
{
	"descriptors": [
		"consumer electronics",
		"electronics",
		"hardware"
	]
}
```
### facebookUri
  Link to the Facebook profile of this entity
* **Type:** 
* **Example:**
```
{
	"facebookUri": "facebook.com/apple"
}
```
### founders
  Founders of this organization
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"founders": [
		{
			"summary": "American inventor, computer engineer and programmer",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvt%3Exb1ch%7BQ%3A%5BhAZz.pGT",
			"types": [
				"Person"
			],
			"name": "Steve Wozniak",
			"diffbotUri": "http://diffbot.com/entity/ErFxuJCJVOhS-aJvxNMgrbg",
			"nbIncomingEdges": 12,
			"targetDiffbotUri": "http://diffbot.com/entity/ErFxuJCJVOhS-aJvxNMgrbg",
			"surfaceForm": "Steve Wozniak",
			"type": "Person"
		},
		{
			"summary": "Co-founder of Apple Inc.",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvO%3Ew%5D%3ANo0Q%7CZh%3DFp%3B%7DF_rH7KdK.c2W",
			"types": [
				"Person"
			],
			"name": "Ron Wayne",
			"diffbotUri": "http://diffbot.com/entity/EvGMnA45aO2Kaeu6udJI9EQ",
			"nbIncomingEdges": 4,
			"targetDiffbotUri": "http://diffbot.com/entity/EvGMnA45aO2Kaeu6udJI9EQ",
			"surfaceForm": "Ron Wayne",
			"type": "Person"
		},
		{
			"summary": "American entrepreneur and co-founder of Apple Inc.",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvs%3Exb1ch%7BD%3ACm7At9jJUuXdMdCc-UB%60wr.Yu5",
			"types": [
				"Person"
			],
			"name": "Steve Jobs",
			"diffbotUri": "http://diffbot.com/entity/EyauXV2QZOW2fEP8Cb_Hoxg",
			"nbIncomingEdges": 36,
			"targetDiffbotUri": "http://diffbot.com/entity/EyauXV2QZOW2fEP8Cb_Hoxg",
			"surfaceForm": "Steve Jobs",
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
		"str": "d1977-XX-XX",
		"precision": 1,
		"timestamp": 220924800000
	}
}
```
### githubUri
  Link to the Github profile of this entity
* **Type:** 
* **Example:**
```
{
	"githubUri": "github.com/apple"
}
```
### googlePlusUri
  Link to the Google+ profile of this entity
* **Type:** 
* **Example:**
```
{
	"googlePlusUri": ""
}
```
### homepageUri
  Link to the homepage of this  entity
* **Type:** 
* **Example:**
```
{
	"homepageUri": "apple.com"
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
			"name": ""
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
		"Computer Hardware Companies",
		"Manufacturing Companies",
		"Software Companies"
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
				"str": "d1977-05-15",
				"precision": 3,
				"timestamp": 232502400000
			},
			"amount": {
				"currency": "USD",
				"value": 80000
			},
			"series": "Seed",
			"investors": [
				{
					"summary": "Former CEO at Apple",
					"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%5E%3E%5Dt6m%3BNc%7CY%5BvSsDWGg%7E9%5EVKlQ%7E%3B%3B.I%5Do",
					"types": [
						"Person"
					],
					"name": "Mike Markkula",
					"diffbotUri": "http://diffbot.com/entity/E9JHQf-kPNKWitURTvyklWQ",
					"nbIncomingEdges": 2,
					"targetDiffbotUri": "http://diffbot.com/entity/E9JHQf-kPNKWitURTvyklWQ",
					"surfaceForm": "Mike Markkula",
					"type": "Person"
				},
				{
					"recordId": "EHb0_0NEcMwyY8b083taTTw@64",
					"name": "Matrix Partners",
					"websiteUris": [
						"crunchbase.com/organization/matrix-partners"
					],
					"surfaceForm": "Matrix Partners",
					"position": "companyInvestmentInvestor",
					"type": "Person"
				}
			]
		},
		{
			"date": {
				"str": "d2016-05-16",
				"precision": 3,
				"timestamp": 1463356800000
			},
			"amount": {
				"currency": "USD",
				"value": 1000000000
			},
			"series": "Post Ipo Equity",
			"investors": [
				{
					"recordId": "EHb0_0NEcMwyY8b083taTTw@65",
					"name": "Berkshire Hathaway",
					"websiteUris": [
						"crunchbase.com/organization/berkshire-hathaway-corp"
					],
					"surfaceForm": "Berkshire Hathaway",
					"position": "companyInvestmentInvestor",
					"type": "Person"
				}
			]
		},
		{
			"date": {
				"str": "d2017-09-06",
				"precision": 3,
				"timestamp": 1504656000000
			},
			"amount": {
				"currency": "USD",
				"value": 5000000000
			},
			"series": "Post Ipo Debt"
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
			"str": "d1980-XX-XX",
			"precision": 1,
			"timestamp": 315532800000
		},
		"stockExchange": "NASDAQ"
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
		"94-2404110",
		"942404110"
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
### leadership
  List of organization C-Level Officers.
* **Type:** Employee
* **Example:**
```
{
	"leadership": [
		{
			"categories": "[See Role]",
			"employee": "[See Person]"
		}
	]
}
```
### linkedInUri
  Link to the LinkedIn profile of this entity
* **Type:** 
* **Example:**
```
{
	"linkedInUri": "linkedin.com/company/apple"
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
			"nbIncomingEdges": 1245575855,
			"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"type": "AdministrativeArea"
		},
		"isCurrent": true,
		"address": "One Apple Park Way, Cupertino, 95014, California, United States",
		"city": {
			"summary": "City in Santa Clara County, California, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtp%3ExO%3Aad%7B%3D7Bl9XRG%7BEa%2FCH%7CP%7BIh4%5Ez8Og%5Dh%3Dn%3DRn%3Bov%3Eg%3A%5DlE%5C%3BO2Hj6b2KSDVk%2F_AJ_O%5CVQz%40c%7EQw%3EG%5EPd%7E%60%7EB%5CFXm.sGN",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Cupertino",
			"diffbotUri": "http://diffbot.com/entity/Exd-cghOPMcCHRez564r5EA",
			"nbIncomingEdges": 287706,
			"targetDiffbotUri": "http://diffbot.com/entity/Exd-cghOPMcCHRez564r5EA",
			"type": "AdministrativeArea"
		},
		"street": "One Apple Park Way",
		"latitude": 37.3316764831543,
		"precision": 0.10000000149011612,
		"postalCode": "95014",
		"surfaceForm": "One Apple Park Way, Cupertino, 95014, California, United States",
		"region": {
			"summary": "State of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40T%3ExS%7DYb%3B%60zt%5BDbuGxEVg.xAK",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "California",
			"diffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
			"nbIncomingEdges": 136728414,
			"targetDiffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
			"type": "AdministrativeArea"
		},
		"longitude": -122.0111083984375
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
				"nbIncomingEdges": 1245575855,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": true,
			"address": "1 Apple Park Way, Cupertino, California",
			"city": {
				"summary": "City in Santa Clara County, California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtp%3ExO%3Aad%7B%3D7Bl9XRG%7BEa%2FCH%7CP%7BIh4%5Ez8Og%5Dh%3Dn%3DRn%3Bov%3Eg%3A%5DlE%5C%3BO2Hj6b2KSDVk%2F_AJ_O%5CVQz%40c%7EQw%3EG%5EPd%7E%60%7EB%5CFXm.sGN",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Cupertino",
				"diffbotUri": "http://diffbot.com/entity/Exd-cghOPMcCHRez564r5EA",
				"nbIncomingEdges": 287706,
				"targetDiffbotUri": "http://diffbot.com/entity/Exd-cghOPMcCHRez564r5EA",
				"type": "AdministrativeArea"
			},
			"street": "1 Apple Park Way",
			"subregion": {
				"summary": "County in California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40r%3ErO%3CLr2Y%5EBfA_%7EJt%40NeLn2L%7EL%60zdzEW%7DBf%3Cp%7EB%3FF%5C3%3Bgl%5E%7DT%7BF.7%5Bb",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Santa Clara County",
				"diffbotUri": "http://diffbot.com/entity/E8Sjxl9YuMRCajUEPN2k9ew",
				"nbIncomingEdges": 7036662,
				"targetDiffbotUri": "http://diffbot.com/entity/E8Sjxl9YuMRCajUEPN2k9ew",
				"type": "AdministrativeArea"
			},
			"latitude": 37.334842681884766,
			"precision": 0.10000000149011612,
			"postalCode": "95014",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40T%3ExS%7DYb%3B%60zt%5BDbuGxEVg.xAK",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "California",
				"diffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
				"nbIncomingEdges": 136728414,
				"targetDiffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
				"type": "AdministrativeArea"
			},
			"longitude": -122.01129913330078
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
				"nbIncomingEdges": 1245575855,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"type": "AdministrativeArea"
			},
			"isCurrent": false,
			"address": "1 Infinite Loop, Cupertino, California",
			"city": {
				"summary": "City in Santa Clara County, California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtp%3ExO%3Aad%7B%3D7Bl9XRG%7BEa%2FCH%7CP%7BIh4%5Ez8Og%5Dh%3Dn%3DRn%3Bov%3Eg%3A%5DlE%5C%3BO2Hj6b2KSDVk%2F_AJ_O%5CVQz%40c%7EQw%3EG%5EPd%7E%60%7EB%5CFXm.sGN",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Cupertino",
				"diffbotUri": "http://diffbot.com/entity/Exd-cghOPMcCHRez564r5EA",
				"nbIncomingEdges": 287706,
				"targetDiffbotUri": "http://diffbot.com/entity/Exd-cghOPMcCHRez564r5EA",
				"type": "AdministrativeArea"
			},
			"street": "1 Infinite Loop",
			"subregion": {
				"summary": "County in California, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40r%3ErO%3CLr2Y%5EBfA_%7EJt%40NeLn2L%7EL%60zdzEW%7DBf%3Cp%7EB%3FF%5C3%3Bgl%5E%7DT%7BF.7%5Bb",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Santa Clara County",
				"diffbotUri": "http://diffbot.com/entity/E8Sjxl9YuMRCajUEPN2k9ew",
				"nbIncomingEdges": 7036662,
				"targetDiffbotUri": "http://diffbot.com/entity/E8Sjxl9YuMRCajUEPN2k9ew",
				"type": "AdministrativeArea"
			},
			"latitude": 37.33539962768555,
			"precision": 0.10000000149011612,
			"postalCode": "95014-2083",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40T%3ExS%7DYb%3B%60zt%5BDbuGxEVg.xAK",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "California",
				"diffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
				"nbIncomingEdges": 136728414,
				"targetDiffbotUri": "http://diffbot.com/entity/El0_8ehooNxOPT36Y4RdV9w",
				"type": "AdministrativeArea"
			},
			"longitude": -122.01465606689453
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
				"nbIncomingEdges": 1245575855,
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
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
	"logo": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvO%3Ef%5E%3CYh%7Bf%3AHi7%5B%7B9iB.yZl"
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
			"name": ""
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
	"motto": ""
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
			"name": ""
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
			"code": "334000",
			"isPrimary": false,
			"name": "Computer and Electronic Product Manufacturing"
		},
		{
			"code": "511210",
			"isPrimary": false,
			"name": "Software Publishers"
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
	"nbActiveEmployeeEdges": 75316
}
```
### nbEmployeesMax
  Defines a upper bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMax": 137000
}
```
### nbEmployeesMin
  Defines a lower bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMin": 137000
}
```
### nbLocations
  Number of locations listed in the field &#39;locations&#39;
* **Type:** Integer
* **Example:**
```
{
	"nbLocations": 6
}
```
### nbUniqueInvestors
  Number of unique investors.
* **Type:** Integer
* **Example:**
```
{
	"nbUniqueInvestors": 6
}
```
### parentCompany
  The parent company of this subsidiary.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"parentCompany": "[See Organization]"
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
			"string": "408-9961010",
			"digits": "4089961010"
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
				"value": 91818999808
			},
			"isCurrent": false,
			"year": 2020,
			"filingDate": {
				"str": "d2020-01-29",
				"precision": 3,
				"timestamp": 1580256000000
			},
			"revenueDate": {
				"str": "d2019-12-31",
				"precision": 3,
				"timestamp": 1577750400000
			},
			"quarter": 1
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 61136998400
			},
			"isCurrent": false,
			"year": 2018,
			"filingDate": {
				"str": "d2019-10-31",
				"precision": 3,
				"timestamp": 1572480000000
			},
			"revenueDate": {
				"str": "d2018-03-31",
				"precision": 3,
				"timestamp": 1522454400000
			},
			"quarter": 2
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 53809000448
			},
			"isCurrent": false,
			"year": 2019,
			"filingDate": {
				"str": "d2019-10-31",
				"precision": 3,
				"timestamp": 1572480000000
			},
			"revenueDate": {
				"str": "d2019-06-30",
				"precision": 3,
				"timestamp": 1561852800000
			},
			"quarter": 3
		}
	]
}
```
### secCentralIndexKeys
  Central Index Key as assigned by the U.S. Securities and Exchange Commission.
* **Type:** String
* **Example:**
```
{
	"secCentralIndexKeys": [
		"0000320193",
		"320193"
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
			"code": "3571",
			"isPrimary": false,
			"name": "Electronic Computers"
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
		"symbol": "AAPL",
		"exchange": "NASDAQ"
	}
}
```
### subsidiaries
  Current subsidiaries of this organization.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"subsidiaries": [
		{
			"summary": "Company in Teltow, Germany",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FEvtq%3Eq%5D3%5C-oGd-%60J%5Ex%3FkJakPq%3F-Ecy2h.G%5E5",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "SensoMotoric Instruments (SMI)",
			"diffbotUri": "http://diffbot.com/entity/EwFI_8nzYMEm5Iu4AGQ_AbA",
			"nbIncomingEdges": 212,
			"targetDiffbotUri": "http://diffbot.com/entity/EwFI_8nzYMEm5Iu4AGQ_AbA",
			"surfaceForm": "SensoMotoric Instruments (SMI)",
			"type": "Corporation"
		},
		{
			"summary": "Corporation founded in 1982",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%5E%3BZu%3Di9PczNk2svQbQsvA23Yo%3Cj%3BR.I%5Do",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "Orion Network Systems",
			"diffbotUri": "http://diffbot.com/entity/EZDj62U6rOxigMyWlI1zF-A",
			"nbIncomingEdges": 2,
			"targetDiffbotUri": "http://diffbot.com/entity/EZDj62U6rOxigMyWlI1zF-A",
			"surfaceForm": "Orion Network Systems",
			"type": "Corporation"
		},
		{
			"summary": "Manufacturing company founded in 2006",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzBa%3DXu8e9McDG%7DItAZrOqhU%7D%2Fl%60%3B2v%3E%3E%5BS%3BK71muK1K.%7DIY",
			"types": [
				"Organization",
				"Corporation"
			],
			"name": "InVisage Technologies Inc",
			"diffbotUri": "http://diffbot.com/entity/EzQ7_K3dFMAek71pYP_tq0w",
			"nbIncomingEdges": 265,
			"targetDiffbotUri": "http://diffbot.com/entity/EzQ7_K3dFMAek71pYP_tq0w",
			"surfaceForm": "InVisage Technologies Inc",
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
	"totalInvestment": {
		"currency": "USD",
		"value": 6150230016
	}
}
```
### twitterUri
  Link to the LinkedIn profile of this entity
* **Type:** 
* **Example:**
```
{
	"twitterUri": "twitter.com/apple"
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
			"name": ""
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
* **Type:** 
* **Example:**
```
{
	"wikipediaUri": "en.wikipedia.org/wiki/Apple_Inc."
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
				"value": 265594994688
			},
			"isCurrent": false,
			"year": 2018
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 274515017728
			},
			"isCurrent": false,
			"year": 2020
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 260174004224
			},
			"isCurrent": false,
			"year": 2019
		}
	]
}
```
