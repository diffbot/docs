---
id: kg-ont-organization
title: Organization
generatedBy: generateOntology.js
---

The organization entity type encompasses corporations, local businesses, non-profits, and other organizations known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Organization Fields
* [abnNumbers](#abnnumbers) 
* [acnNumbers](#acnnumbers) 
* [acquiredBy](#acquiredby) 
* [angellistUri](#angellisturi) 
* [anzSicClassification](#anzsicclassification) 
* [blogUri](#bloguri) 
* [boardMembers](#boardmembers) 
* [brands](#brands) 
* [canadianBusinessNumbers](#canadianbusinessnumbers) 
* [capitalization](#capitalization) 
* [categories](#categories) 
* [ceo](#ceo) 
* [chineseSocialCreditCodes](#chinesesocialcreditcodes) 
* [companiesHouseIds](#companieshouseids) 
* [competitors](#competitors) 
* [crunchbaseUri](#crunchbaseuri) 
* [cuitNumbers](#cuitnumbers) 
* [customers](#customers) 
* [descriptors](#descriptors) 
* [diffbotClassification](#diffbotclassification) 
* [edrpouNumbers](#edrpounumbers) 
* [emailAddresses](#emailaddresses) 
* [employeeCategories](#employeecategories) 
* [facebookUri](#facebookuri) 
* [founders](#founders) 
* [foundingDate](#foundingdate) 
* [fullName](#fullname) 
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
* [israeliCompanyNumbers](#israelicompanynumbers) 
* [japaneseCorporateNumbers](#japanesecorporatenumbers) 
* [kvedClassification](#kvedclassification) 
* [linkedInUri](#linkedinuri) 
* [location](#location) 
* [locations](#locations) 
* [logo](#logo) 
* [mccClassification](#mccclassification) 
* [mccCode](#mcccode) 
* [mccCodeDescription](#mcccodedescription) 
* [monthlyTraffic](#monthlytraffic) 
* [monthlyTrafficGrowth](#monthlytrafficgrowth) 
* [motto](#motto) 
* [naceClassification](#naceclassification) 
* [nafClassification](#nafclassification) 
* [naicsClassification](#naicsclassification) 
* [naicsClassification2017](#naicsclassification2017) 
* [nbActiveEmployeeEdges](#nbactiveemployeeedges) 
* [nbEmployeeRanges](#nbemployeeranges) 
* [nbEmployees](#nbemployees) 
* [nbEmployeesMax](#nbemployeesmax) 
* [nbEmployeesMin](#nbemployeesmin) 
* [nbLocations](#nblocations) 
* [nbUniqueInvestors](#nbuniqueinvestors) 
* [norwegianOrganizationNumbers](#norwegianorganizationnumbers) 
* [npiNumbers](#npinumbers) 
* [okvedClassification](#okvedclassification) 
* [parentCompany](#parentcompany) 
* [partnerships](#partnerships) 
* [phoneNumbers](#phonenumbers) 
* [predecessors](#predecessors) 
* [quarterlyRevenues](#quarterlyrevenues) 
* [revenue](#revenue) 
* [russianTaxpayerIdentificationNumbers](#russiantaxpayeridentificationnumbers) 
* [secCentralIndexKeys](#seccentralindexkeys) 
* [secForms](#secforms) 
* [sepaIds](#sepaids) 
* [sicClassification](#sicclassification) 
* [sicCode](#siccode) 
* [sicCodeDescription](#siccodedescription) 
* [sirenCodes](#sirencodes) 
* [ssbClassification](#ssbclassification) 
* [stock](#stock) 
* [subsidiaries](#subsidiaries) 
* [successors](#successors) 
* [suppliers](#suppliers) 
* [technographics](#technographics) 
* [thaiTaxpayerIds](#thaitaxpayerids) 
* [totalInvestment](#totalinvestment) 
* [tsicClassification](#tsicclassification) 
* [twitterUri](#twitteruri) 
* [uenNumbers](#uennumbers) 
* [ukSicClassification](#uksicclassification) 
* [ultimateParent](#ultimateparent) 
* [vatIdentificationNumbers](#vatidentificationnumbers) 
* [wikipediaUri](#wikipediauri) 
* [yearlyRevenues](#yearlyrevenues) 

## Organization Field Details
Note that certain longer field examples may be truncated for readability.

### abnNumbers
  Australian Business Number (ABN) is a unique identifier provided by Australian Business Register (ABR).
* **Type:** String
* **Example:**
```
{
	"abnNumbers": ""
}
```
### acnNumbers
  Australian Company Number (ACN) is a unique identifier given to all Australian companies.
* **Type:** String
* **Example:**
```
{
	"acnNumbers": ""
}
```
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
	"angellistUri": "angel.co/ibm-india-1"
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
			"level": 0,
			"isPrimary": false,
			"name": "",
			"diffbotUri": "",
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
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.%5DjEp9G.Bd%7BkpWQMQfM%7B-by%3A%7B-Z6%3Aq-kf%7Bi-Eztos%5DtRnh%2F%7BzN_%3Cb4E.A%5Dm",
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
			"summary": "Chairman at IBM Retirement Funds",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzC%5D%3F%5Bo%3Ag%3EPc%7Dg_9p%3AGw4hg%3Dk7fdMdtS.C_o",
			"types": [
				"Person"
			],
			"name": "David Farr",
			"diffbotUri": "http://diffbot.com/entity/ER3tuAKIoMBq05xKDDZr6DQ",
			"targetDiffbotUri": "http://diffbot.com/entity/ER3tuAKIoMBq05xKDDZr6DQ",
			"targetDiffbotId": "ER3tuAKIoMBq05xKDDZr6DQ",
			"surfaceForm": "David Farr",
			"type": "Person"
		},
		{
			"summary": "Chairman at Surgical Care Group",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7guSXzAoBWu.x0KwLZrUn.%5B%3CR0Aa4Hwygr9m6W%3Exl5G%60BkxmPASD4r%3Em6Z.Biv",
			"types": [
				"Person"
			],
			"name": "Alex Gorsky",
			"diffbotUri": "http://diffbot.com/entity/Ee_LAfNCLMK-VpvaJV4xpAA",
			"targetDiffbotUri": "http://diffbot.com/entity/Ee_LAfNCLMK-VpvaJV4xpAA",
			"targetDiffbotId": "Ee_LAfNCLMK-VpvaJV4xpAA",
			"surfaceForm": "Alex Gorsky",
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
### canadianBusinessNumbers
  Canadian business number is an identifier given to all businesses in Canada.
* **Type:** String
* **Example:**
```
{
	"canadianBusinessNumbers": ""
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
			"name": "Professional Service Companies",
			"diffbotUri": "http://diffbot.com/entity/EwtPyR2IaMIWoUPbM6R7SAw",
			"targetDiffbotUri": "http://diffbot.com/entity/EwtPyR2IaMIWoUPbM6R7SAw",
			"targetDiffbotId": "EwtPyR2IaMIWoUPbM6R7SAw",
			"surfaceForm": "Professional Service Companies",
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
		"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.%5DjEp9G.Bd%7BkpWQMQfM%7B-by%3A%7B-Z6%3Aq-kf%7Bi-Eztos%5DtRnh%2F%7BzN_%3Cb4E.A%5Dm",
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
### chineseSocialCreditCodes
  Chinese social credit code.
* **Type:** String
* **Example:**
```
{
	"chineseSocialCreditCodes": ""
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
### competitors
  Current competitors of this organization.
* **Type:** LinkedEntity
* **Example:**
```
{
	"competitors": [
		{
			"summary": "Organization based in Blue Bell, Pennsylvania, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvw%3Ez%5C5%60%7C%3FY7PaG.2Nm",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Unisys Corporation",
			"diffbotUri": "http://diffbot.com/entity/Eghdylt6mOj2yLNkBS-tJ9A",
			"targetDiffbotUri": "http://diffbot.com/entity/Eghdylt6mOj2yLNkBS-tJ9A",
			"targetDiffbotId": "Eghdylt6mOj2yLNkBS-tJ9A",
			"surfaceForm": "Unisys Corporation",
			"type": "Organization"
		},
		{
			"summary": "Organization based in Sunnyvale, California, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FjvIT%3EsS%40%7Es%3CY7PaG.2Nm",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "NetApp, Inc.",
			"diffbotUri": "http://diffbot.com/entity/EySkhspqnP4-4mE-RI20wig",
			"targetDiffbotUri": "http://diffbot.com/entity/EySkhspqnP4-4mE-RI20wig",
			"targetDiffbotId": "EySkhspqnP4-4mE-RI20wig",
			"surfaceForm": "NetApp, Inc.",
			"type": "Organization"
		},
		{
			"summary": "German software producer",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEw%3Ex%2FlL5L%7BL%40fG%60%7E.yMT",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "SAP",
			"diffbotUri": "http://diffbot.com/entity/E1YW6YHcPMZi7H-uA9fl6hg",
			"targetDiffbotUri": "http://diffbot.com/entity/E1YW6YHcPMZi7H-uA9fl6hg",
			"targetDiffbotId": "E1YW6YHcPMZi7H-uA9fl6hg",
			"surfaceForm": "SAP",
			"type": "Organization"
		}
	]
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
### cuitNumbers
  CUIT is a unique taxpayer identifier in Argentina.
* **Type:** String
* **Example:**
```
{
	"cuitNumbers": ""
}
```
### customers
  Current customers of this organization.
* **Type:** LinkedEntity
* **Example:**
```
{
	"customers": [
		{
			"summary": "Systematic internaliser",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FcvBp%3ExQ%3Bal%7D%5C%7COe7e%7E%3Fu.%60%7CK",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Bank of Nova Scotia",
			"diffbotUri": "http://diffbot.com/entity/Epqqo5t1JMbON8FF9IGpi-g",
			"targetDiffbotUri": "http://diffbot.com/entity/Epqqo5t1JMbON8FF9IGpi-g",
			"targetDiffbotId": "Epqqo5t1JMbON8FF9IGpi-g",
			"surfaceForm": "Bank of Nova Scotia",
			"type": "Organization"
		},
		{
			"summary": "British multinational telecommunications company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40o%3E%7B%5D0Ni%3Bh0.jF%60",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Vodafone",
			"diffbotUri": "http://diffbot.com/entity/EWk9MPRSUNI6yTwVq1ZEncQ",
			"targetDiffbotUri": "http://diffbot.com/entity/EWk9MPRSUNI6yTwVq1ZEncQ",
			"targetDiffbotId": "EWk9MPRSUNI6yTwVq1ZEncQ",
			"surfaceForm": "Vodafone",
			"type": "Organization"
		},
		{
			"summary": "U.S. discount retailer based in Arkansas",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FDvsO%3E%7CO8Zd%3EnzMi%3Fh.K%7C%3E",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Walmart Inc.",
			"diffbotUri": "http://diffbot.com/entity/ExADb18D6MAmunRrlVELe8A",
			"targetDiffbotUri": "http://diffbot.com/entity/ExADb18D6MAmunRrlVELe8A",
			"targetDiffbotId": "ExADb18D6MAmunRrlVELe8A",
			"surfaceForm": "Walmart Inc.",
			"type": "Organization"
		}
	]
}
```
### descriptors
  
* **Type:** String
* **Example:**
```
{
	"descriptors": [
		"information technology",
		"computer and office equipment",
		"control, electromedical, measuring and navigational instruments manufacturing"
	]
}
```
### diffbotClassification
  Diffbot Industry Classification.
* **Type:** ClassificationCode
* **Example:**
```
{
	"diffbotClassification": [
		{
			"level": 3,
			"isPrimary": true,
			"name": "Cloud Computing Providers",
			"diffbotUri": "https://diffbot.com/entity/IC_G015C2pO7i"
		},
		{
			"level": 2,
			"isPrimary": true,
			"name": "Computer Hardware Companies",
			"diffbotUri": "https://diffbot.com/entity/IC_D6llNR8xOo"
		},
		{
			"level": 1,
			"isPrimary": true,
			"name": "Software Companies",
			"diffbotUri": "https://diffbot.com/entity/IC_H04NbzO6L8"
		}
	]
}
```
### edrpouNumbers
  Ukrainian state registry legal entity identifier (EDRPOU).
* **Type:** String
* **Example:**
```
{
	"edrpouNumbers": ""
}
```
### emailAddresses
  Email addresses of this organization.
* **Type:** Contact
* **Example:**
```
{
	"emailAddresses": [
		{
			"contactString": "ews@us.ibm.com",
			"type": "None"
		},
		{
			"contactString": "tfleming@us.ibm.com",
			"type": "PROFESSIONAL"
		}
	]
}
```
### employeeCategories
  Employee categories including employee count and first hire date
* **Type:** EmployeeCategory
* **Example:**
```
{
	"employeeCategories": [
		{
			"firstHireDate": {
				"str": "d0001-XX-XX",
				"precision": 1,
				"timestamp": -62135769600000
			},
			"category": "Frontend Developer",
			"nbEmployees": 479
		},
		{
			"firstHireDate": {
				"str": "d1959-09-XX",
				"precision": 2,
				"timestamp": -326160000000
			},
			"category": "Agriculture, Farming, Forestry and related",
			"nbEmployees": 63
		},
		{
			"firstHireDate": {
				"str": "d1956-06-XX",
				"precision": 2,
				"timestamp": -428716800000
			},
			"category": "Industrial Production and Distribution (goods and food)",
			"nbEmployees": 109
		}
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
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyDp8%3BxO%5CuH89f0Sht%60%7CC%5B",
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
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzCX%3EXt7l8Tc3j%5D%7Ef%3BMZFQpBl%3FJg_%7D4I.C_o",
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
### fullName
  Full name for this entity
* **Type:** String
* **Example:**
```
{
	"fullName": "International Business Machines Corporation"
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
			"level": 0,
			"isPrimary": false,
			"name": "",
			"diffbotUri": "",
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
	"indianCorporateIdentityNumbers": [
		"U30007KA1991PLC012619"
	]
}
```
### industries
  
* **Type:** String
* **Example:**
```
{
	"industries": [
		"Cloud Computing Providers",
		"Computer Hardware Companies",
		"Software Companies"
	]
}
```
### investments
  Investments received by this organization.
* **Type:** InvestmentField
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
### israeliCompanyNumbers
  The unique identifier given to Israeli comapnies upon registration.
* **Type:** String
* **Example:**
```
{
	"israeliCompanyNumbers": ""
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
### kvedClassification
  Ukrainian Economic Activities Classification System code (KVED).
* **Type:** ClassificationCode
* **Example:**
```
{
	"kvedClassification": [
		{
			"code": "",
			"level": 0,
			"isPrimary": false,
			"name": "",
			"diffbotUri": "",
			"version": ""
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
			"summary": "Country in North America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDs%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%40aCHnM%60%29.%7BOV",
			"types": [
				"Place",
				"AdministrativeArea",
				"Country"
			],
			"name": "United States of America",
			"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
			"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
			"type": "Place"
		},
		"isCurrent": true,
		"address": "1 New Orchard Road, Armonk, 10504-1722, New York, United States",
		"city": {
			"summary": "Hamlet in Westchester County, New York, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FdvCo%3E%7CS%3Faf4_%3EU_JXRG%7BEa%2FCS0%5Bq%3Ch4%5Bp%40%5E1%5Ew%3Ek%3FDp%3F_p%3Bv%3DN%7DTp%3BI3Wk3dtMW4PhBc0X%5Dmo0KxFPrQp7T%2FNe%3AYy.gHZ",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "Armonk",
			"diffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
			"targetDiffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
			"targetDiffbotId": "EFYOMni-nNtScxpZwteaMxQ",
			"type": "Place"
		},
		"isPrimary": true,
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
				"AdministrativeArea",
				"Region"
			],
			"name": "New York",
			"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
			"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
			"targetDiffbotId": "E1NxI_KXaMbiP5g2aM9MRdw",
			"type": "Place"
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
				"summary": "Country in North America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDs%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%40aCHnM%60%29.%7BOV",
				"types": [
					"Place",
					"AdministrativeArea",
					"Country"
				],
				"name": "United States of America",
				"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "Place"
			},
			"address": "1 New Orchard Road, Armonk, 10504, New York, USA",
			"city": {
				"summary": "Hamlet in Westchester County, New York, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FdvCo%3E%7CS%3Faf4_%3EU_JXRG%7BEa%2FCS0%5Bq%3Ch4%5Bp%40%5E1%5Ew%3Ek%3FDp%3F_p%3Bv%3DN%7DTp%3BI3Wk3dtMW4PhBc0X%5Dmo0KxFPrQp7T%2FNe%3AYy.gHZ",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Armonk",
				"diffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
				"targetDiffbotUri": "http://diffbot.com/entity/EFYOMni-nNtScxpZwteaMxQ",
				"targetDiffbotId": "EFYOMni-nNtScxpZwteaMxQ",
				"type": "Place"
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
				"type": "Place"
			},
			"latitude": 41.1075439453125,
			"precision": 0.10000000149011612,
			"postalCode": "10504-1722",
			"isCurrent": false,
			"isPrimary": true,
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
				"type": "Place"
			},
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDp%3EsGo0d%3Cc%3FPfxZ%7DGx8Zg.o%3BK",
				"types": [
					"Place",
					"AdministrativeArea",
					"Region"
				],
				"name": "New York",
				"diffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"targetDiffbotUri": "http://diffbot.com/entity/E1NxI_KXaMbiP5g2aM9MRdw",
				"targetDiffbotId": "E1NxI_KXaMbiP5g2aM9MRdw",
				"type": "Place"
			},
			"longitude": -73.72123718261719
		},
		{
			"country": {
				"summary": "Country in North America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDs%3El%601Nw%7BM0Bf7hu7z%3FRe9s4XwGXedrKUAN%28%40aCHnM%60%29.%7BOV",
				"types": [
					"Place",
					"AdministrativeArea",
					"Country"
				],
				"name": "United States of America",
				"diffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotUri": "http://diffbot.com/entity/E01d4EK33MmCosgI2KXa4-A",
				"targetDiffbotId": "E01d4EK33MmCosgI2KXa4-A",
				"type": "Place"
			},
			"address": "316 Bel Air Bel Air Blvd, Mobile, Alabama",
			"city": {
				"summary": "County seat of Mobile County, Alabama, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDq%3Er%5D%7EVo1Y%5EPoFm87GCNhEr%7CC%5BQ%5C1b1Fb%2Fcj2%5B%7EQ%609P%2FCv%3C%5EzVv%3FG8J_sS5%3ESCPT%3F%608Qc%3BE%7CCrGZqP%7D4L.Zs%7D",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "Mobile",
				"diffbotUri": "http://diffbot.com/entity/Euyo26vh8MC-BQ5DdSDNrYw",
				"targetDiffbotUri": "http://diffbot.com/entity/Euyo26vh8MC-BQ5DdSDNrYw",
				"targetDiffbotId": "Euyo26vh8MC-BQ5DdSDNrYw",
				"type": "Place"
			},
			"street": "316 Bel Air Bel Air Blvd",
			"subregion": {
				"summary": "County in Alabama, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FdvCr%3ErO%3CLr2Y%5CM%5B%3AZ%7C9e%3FVmLq4KzWb0Wpt_0Xq3%5B%60RqHo%3A.%7BOV",
				"types": [
					"Place",
					"AdministrativeArea",
					"Subregion"
				],
				"name": "Mobile County",
				"diffbotUri": "http://diffbot.com/entity/EMW8U0M1WN0qUskYdtgVRfA",
				"targetDiffbotUri": "http://diffbot.com/entity/EMW8U0M1WN0qUskYdtgVRfA",
				"targetDiffbotId": "EMW8U0M1WN0qUskYdtgVRfA",
				"type": "Place"
			},
			"latitude": 30.66517448425293,
			"precision": 21.592092514038086,
			"postalCode": "36606",
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvu%3ExS%7DYb%3B%60zrf9%5BpEg.%60%7CK",
				"types": [
					"Place",
					"AdministrativeArea",
					"Region"
				],
				"name": "Alabama",
				"diffbotUri": "http://diffbot.com/entity/EB0V6uu7AMAmX8qSb0A3mpw",
				"targetDiffbotUri": "http://diffbot.com/entity/EB0V6uu7AMAmX8qSb0A3mpw",
				"targetDiffbotId": "EB0V6uu7AMAmX8qSb0A3mpw",
				"type": "Place"
			},
			"longitude": -88.1258773803711
		},
		{
			"country": {
				"summary": "Country in South Asia",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FDvsq%3En%5C0Vd-zKd17-nnr%40PqVd-CsU%5CzU3Xp%7D%28I3j%3BLo%29.%7BJo",
				"types": [
					"Place",
					"AdministrativeArea",
					"Country"
				],
				"name": "India",
				"diffbotUri": "http://diffbot.com/entity/EkL_5YoTSMA6dbNRVyE9yCQ",
				"targetDiffbotUri": "http://diffbot.com/entity/EkL_5YoTSMA6dbNRVyE9yCQ",
				"targetDiffbotId": "EkL_5YoTSMA6dbNRVyE9yCQ",
				"type": "Place"
			},
			"isCurrent": true,
			"address": "`GOLDEN ENCLAVE,TISL TOWER,AIRPORT ROAD, BANGALORE BANGALORE Karnataka INDIA 560017",
			"city": {
				"summary": "City in Karnataka, India",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHn%3EgO%3ATd8i%3DFGGg39m%3C.vRl",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "Bangalore",
				"diffbotUri": "http://diffbot.com/entity/EH8-RoeHXOK-8hk4KLHtdaw",
				"targetDiffbotUri": "http://diffbot.com/entity/EH8-RoeHXOK-8hk4KLHtdaw",
				"targetDiffbotId": "EH8-RoeHXOK-8hk4KLHtdaw",
				"type": "Place"
			},
			"isPrimary": true,
			"street": "Airport Road",
			"subregion": {
				"summary": "District of Karnataka, India",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FcvBP%3EpO%3E%5Bd%40%5B6BYjZ%7D%3FgC%5CxIdpVtDgq%5C0%3AQB%5Ew%7Di%7ES.Mqx",
				"types": [
					"Place",
					"AdministrativeArea",
					"Subregion"
				],
				"name": "Bangalore Urban district",
				"diffbotUri": "http://diffbot.com/entity/EDXHT5WEYMGGWHj6BPfwv4A",
				"targetDiffbotUri": "http://diffbot.com/entity/EDXHT5WEYMGGWHj6BPfwv4A",
				"targetDiffbotId": "EDXHT5WEYMGGWHj6BPfwv4A",
				"type": "Place"
			},
			"latitude": 12.965570449829102,
			"precision": 26.844528198242188,
			"postalCode": "560017",
			"region": {
				"summary": "Indian state",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqO%3ExS%7DYb%3B%60z%7C%5BJgpLgBN.W%7B2",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Karnataka",
				"diffbotUri": "http://diffbot.com/entity/EFJnKhpUfNx-F2v4bGRTx3w",
				"targetDiffbotUri": "http://diffbot.com/entity/EFJnKhpUfNx-F2v4bGRTx3w",
				"targetDiffbotId": "EFJnKhpUfNx-F2v4bGRTx3w",
				"type": "Place"
			},
			"longitude": 77.60624694824219
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
			"level": 0,
			"isPrimary": false,
			"name": "",
			"diffbotUri": "",
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
### monthlyTraffic
  Monthly website traffic on this organization&#39;s homepage
* **Type:** Integer
* **Example:**
```
{
	"monthlyTraffic": 90019938
}
```
### monthlyTrafficGrowth
  Monthly growth in website traffic on this organization&#39;s homepage
* **Type:** Float
* **Example:**
```
{
	"monthlyTrafficGrowth": 0.018442305
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
			"level": 0,
			"isPrimary": false,
			"name": "",
			"diffbotUri": "",
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
			"level": 0,
			"isPrimary": false,
			"name": "",
			"diffbotUri": "",
			"version": ""
		}
	]
}
```
### naicsClassification
  The North American Industry Classification System (NAICS) is the standard used by Federal statistical agencies in classifying business establishments for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy. This is the 2022 version.
* **Type:** ClassificationCode
* **Example:**
```
{
	"naicsClassification": [
		{
			"code": "518210",
			"level": 4,
			"isPrimary": true,
			"name": "Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services"
		},
		{
			"code": "518200",
			"level": 3,
			"isPrimary": true,
			"name": "Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services"
		},
		{
			"code": "518000",
			"level": 2,
			"isPrimary": true,
			"name": "Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services"
		}
	]
}
```
### naicsClassification2017
  The North American Industry Classification System (NAICS) is the standard used by Federal statistical agencies in classifying business establishments for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy. This is the 2017 version.
* **Type:** ClassificationCode
* **Example:**
```
{
	"naicsClassification2017": [
		{
			"code": "518210",
			"level": 4,
			"isPrimary": true,
			"name": "Data Processing, Hosting, and Related Services"
		},
		{
			"code": "518200",
			"level": 3,
			"isPrimary": true,
			"name": "Data Processing, Hosting, and Related Services"
		},
		{
			"code": "518000",
			"level": 2,
			"isPrimary": true,
			"name": "Data Processing, Hosting, and Related Services"
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
	"nbActiveEmployeeEdges": 88462
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
	"nbEmployees": 90000
}
```
### nbEmployeesMax
  Defines a upper bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMax": 90000
}
```
### nbEmployeesMin
  Defines a lower bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMin": 90000
}
```
### nbLocations
  Number of locations listed in the field &#39;locations&#39;
* **Type:** Integer
* **Example:**
```
{
	"nbLocations": 53
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
### npiNumbers
  The National Provider Identifier (NPI) is a unique identification number for covered health care providers. 
* **Type:** String
* **Example:**
```
{
	"npiNumbers": ""
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
			"level": 0,
			"isPrimary": false,
			"name": "",
			"diffbotUri": "",
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
### partnerships
  Current partnerships of this organization.
* **Type:** LinkedEntity
* **Example:**
```
{
	"partnerships": [
		{
			"summary": "Community college in Denver, Colorado",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKSh%40%5D3%60bLm%2Fb5Vd%7D%5B.%7EE%2FSn5U9G%5C%3Daj%40.0RiYhv%3Eq%3An9h%3CEoHd%3E3_0N%609e0-A%3EQjAdx-yA-NMwEM8-CI6G%5D%3AW5.%3Cp8",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Community College of Denver",
			"diffbotUri": "http://diffbot.com/entity/E5rCwkfaXOi-XvZMdLA9nBA",
			"targetDiffbotUri": "http://diffbot.com/entity/E5rCwkfaXOi-XvZMdLA9nBA",
			"targetDiffbotId": "E5rCwkfaXOi-XvZMdLA9nBA",
			"surfaceForm": "Community College of Denver",
			"type": "Organization"
		},
		{
			"summary": "Indian multinational telecommunications company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FjvIo%3EgV%7D_w5Y%5CJlL%5E%7B7rFTu.xAK",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Bharti Airtel",
			"diffbotUri": "http://diffbot.com/entity/ENUs3Fj_tNTerjAQZVO8vUQ",
			"targetDiffbotUri": "http://diffbot.com/entity/ENUs3Fj_tNTerjAQZVO8vUQ",
			"targetDiffbotId": "ENUs3Fj_tNTerjAQZVO8vUQ",
			"surfaceForm": "Bharti Airtel",
			"type": "Organization"
		},
		{
			"summary": "Distributed, in-memory database",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDo%3Eq%5D3%5Cb9_8TkDXrGrF_eXw%7CR5-%5ByOEWpFq9N.%40Yc",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "SingleStore",
			"diffbotUri": "http://diffbot.com/entity/ERHHQPQJjNLKd2hTNUwtsow",
			"targetDiffbotUri": "http://diffbot.com/entity/ERHHQPQJjNLKd2hTNUwtsow",
			"targetDiffbotId": "ERHHQPQJjNLKd2hTNUwtsow",
			"surfaceForm": "SingleStore",
			"type": "Organization"
		}
	]
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
			"summary": "American business machines company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqs%3EhBnLF%3Bg%3BBhQX%5BGmF.vRl",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Computing Tabulating Recording Company",
			"diffbotUri": "http://diffbot.com/entity/EeCTt6xVqOoqWn5jzd4EwCw",
			"targetDiffbotUri": "http://diffbot.com/entity/EeCTt6xVqOoqWn5jzd4EwCw",
			"targetDiffbotId": "EeCTt6xVqOoqWn5jzd4EwCw",
			"surfaceForm": "Computing Tabulating Recording Company",
			"type": "Organization"
		},
		{
			"summary": "American manufacturing company",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Bundy Manufacturing Company",
			"diffbotUri": "http://diffbot.com/entity/Ex0oc7IVgNWGUSnSDoTUV-w",
			"targetDiffbotUri": "http://diffbot.com/entity/Ex0oc7IVgNWGUSnSDoTUV-w",
			"targetDiffbotId": "Ex0oc7IVgNWGUSnSDoTUV-w",
			"surfaceForm": "Bundy Manufacturing Company",
			"type": "Organization"
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
		"value": 57350000000
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
		"51143",
		"0000051143"
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
			"formType": "8-K",
			"periodOfReport": {
				"str": "d2022-07-31",
				"precision": 3,
				"timestamp": 1659225600000
			},
			"filingDate": {
				"str": "d2022-07-18",
				"precision": 3,
				"timestamp": 1658102400000
			},
			"documentUrl": "https://www.sec.gov/ix?doc=/Archives/edgar/data/51143/000155837022010793/ibm-20220718x8k.htm",
			"filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000155837022010793/0001558370-22-010793-index.htm"
		},
		{
			"formType": "8-K",
			"periodOfReport": {
				"str": "d2022-07-31",
				"precision": 3,
				"timestamp": 1659225600000
			},
			"filingDate": {
				"str": "d2022-07-26",
				"precision": 3,
				"timestamp": 1658793600000
			},
			"documentUrl": "https://www.sec.gov/ix?doc=/Archives/edgar/data/51143/000110465922082789/tm2221760d1_8k.htm",
			"filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000110465922082789/0001104659-22-082789-index.htm"
		},
		{
			"formType": "10-Q",
			"periodOfReport": {
				"str": "d2022-06-30",
				"precision": 3,
				"timestamp": 1656547200000
			},
			"filingDate": {
				"str": "d2022-07-25",
				"precision": 3,
				"timestamp": 1658707200000
			},
			"documentUrl": "https://www.sec.gov/ix?doc=/Archives/edgar/data/51143/000155837022010985/ibm-20220630x10q.htm",
			"filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000155837022010985/0001558370-22-010985-index.htm"
		}
	]
}
```
### sepaIds
  Single Euro Payments Area (SEPA) Identifier is given to European organizations located in Euro zone.
* **Type:** String
* **Example:**
```
{
	"sepaIds": ""
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
			"level": 2,
			"isPrimary": true,
			"name": "Computer And Office Equipment"
		},
		{
			"code": "3500",
			"level": 1,
			"isPrimary": true,
			"name": "Industrial machinery and equipment"
		},
		{
			"code": "7300",
			"level": 1,
			"isPrimary": false,
			"name": "Business Services"
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
			"level": 0,
			"isPrimary": false,
			"name": "",
			"diffbotUri": "",
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
		"isCurrent": true,
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
			"summary": "Cloud computing provider",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzBa%3DXu9h%3DKcsg%5CFUA%5Dx3S%3A%2F%7C3h1%601Ba%40%3CTnki1nHH%5EI.3GY",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Soft Layer Technologies",
			"diffbotUri": "http://diffbot.com/entity/Eo3z6VKzPNxmoKVCMdwfvmw",
			"targetDiffbotUri": "http://diffbot.com/entity/Eo3z6VKzPNxmoKVCMdwfvmw",
			"targetDiffbotId": "Eo3z6VKzPNxmoKVCMdwfvmw",
			"surfaceForm": "Soft Layer Technologies",
			"type": "Organization"
		},
		{
			"summary": "Organization based in Germany",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Red Hat",
			"diffbotUri": "http://diffbot.com/entity/EFUnzGA2lOc6P1ACF3Infdg",
			"targetDiffbotUri": "http://diffbot.com/entity/EFUnzGA2lOc6P1ACF3Infdg",
			"targetDiffbotId": "EFUnzGA2lOc6P1ACF3Infdg",
			"surfaceForm": "Red Hat",
			"type": "Organization"
		},
		{
			"summary": "Organization based in الجيزة, Al Jizah Governorate, Egypt and owned by INTERNATIONAL BUSINESS MACHINES",
			"types": [
				"Organization"
			],
			"name": "IBM Egypt Business Support Services",
			"diffbotUri": "http://diffbot.com/entity/EqxFQye0mN_mBtveIsJwWmg",
			"targetDiffbotUri": "http://diffbot.com/entity/EqxFQye0mN_mBtveIsJwWmg",
			"targetDiffbotId": "EqxFQye0mN_mBtveIsJwWmg",
			"surfaceForm": "IBM Egypt Business Support Services",
			"type": "Organization"
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
### suppliers
  Current suppliers of this organization.
* **Type:** LinkedEntity
* **Example:**
```
{
	"suppliers": [
		{
			"summary": "Company and communications software",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzCZ%3C%5Eq%3Ee%3BOc2l10iuP%5E3Qw7lQka%3C%5ExF.I%5Do",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Crowdcast",
			"diffbotUri": "http://diffbot.com/entity/EQY36RhZ_PHGOIzgjag8wuw",
			"targetDiffbotUri": "http://diffbot.com/entity/EQY36RhZ_PHGOIzgjag8wuw",
			"targetDiffbotId": "EQY36RhZ_PHGOIzgjag8wuw",
			"surfaceForm": "Crowdcast",
			"type": "Organization"
		},
		{
			"summary": "Organization based in Frederick, Maryland, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St%7D9u.LnOv%7BI%7C%40g7.pBYINs%3Ff%7CGZ7jr-tGZhWf%3DK%2FOvy%5Bp%3CSKbs8i%7CEyNzBa%3DXu6f%3AKcGc%2FCrC%5ESUx5P4Ti1_%5CB%3F%3E%3EsALkNozGav.%7DIY",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Welocalize",
			"diffbotUri": "http://diffbot.com/entity/E3GIKIaZyOhmdDfi24xUxww",
			"targetDiffbotUri": "http://diffbot.com/entity/E3GIKIaZyOhmdDfi24xUxww",
			"targetDiffbotId": "E3GIKIaZyOhmdDfi24xUxww",
			"surfaceForm": "Welocalize",
			"type": "Organization"
		},
		{
			"summary": "Stock exchange located in Santiago, Chile",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stx9f%3CJ.LjzD%7C.X%7DY%3C7Y%3Djj7Y0Dwi%7BQVFf%3CJ%3AP3Xe8a2UzLm%2F%5Cp%3C%5B9Z-DhvGeYm6C7KdAc8w%7DCXuWo7R0Mc%26P8s%3F%7C%3A%26%7CsIDL%5Dj%7EY9%5E04TX%5CJmuIb5wG%60%2FsZ%3C%60aI%7DMgQgGVNtXIOo",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "Bolsa de Santiago",
			"diffbotUri": "http://diffbot.com/entity/EAEn2ThkbOG2GceUXOhMLbQ",
			"targetDiffbotUri": "http://diffbot.com/entity/EAEn2ThkbOG2GceUXOhMLbQ",
			"targetDiffbotId": "EAEn2ThkbOG2GceUXOhMLbQ",
			"surfaceForm": "Bolsa de Santiago",
			"type": "Organization"
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
				"recordId": "EPdsrDmLiMQCskvBLp_dloQ@2177",
				"name": "TrustArc",
				"websiteUris": [
					"trustarc.com"
				],
				"surfaceForm": "TrustArc",
				"position": "companyTechnographicsTechnology",
				"type": "DiffbotEntity"
			},
			"categories": [
				"Cookie compliance"
			]
		},
		{
			"technology": {
				"recordId": "EPdsrDmLiMQCskvBLp_dloQ@2178",
				"name": "Tealium AudienceStream",
				"websiteUris": [
					"tealium.com/products/audiencestream"
				],
				"surfaceForm": "Tealium AudienceStream",
				"position": "companyTechnographicsTechnology",
				"type": "DiffbotEntity"
			},
			"categories": [
				"Segmentation"
			]
		},
		{
			"technology": {
				"recordId": "EPdsrDmLiMQCskvBLp_dloQ@2180",
				"name": "Segment",
				"websiteUris": [
					"segment.com"
				],
				"surfaceForm": "Segment",
				"position": "companyTechnographicsTechnology",
				"type": "DiffbotEntity"
			},
			"categories": [
				"Customer data platform"
			]
		}
	]
}
```
### thaiTaxpayerIds
  Unique taxpayer number for company in Thailand, also known as company registration number.
* **Type:** String
* **Example:**
```
{
	"thaiTaxpayerIds": ""
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
### tsicClassification
  Thailand Standard Industrial Classification (TSIC).
* **Type:** ClassificationCode
* **Example:**
```
{
	"tsicClassification": [
		{
			"code": "",
			"level": 0,
			"isPrimary": false,
			"name": "",
			"diffbotUri": "",
			"version": ""
		}
	]
}
```
### twitterUri
  Link to the Twitter profile of this entity
* **Type:** URL
* **Example:**
```
{
	"twitterUri": "twitter.com/IBM"
}
```
### uenNumbers
  Unique Entity Number (UEN) is a business identification number in Singapore.
* **Type:** String
* **Example:**
```
{
	"uenNumbers": ""
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
			"level": 0,
			"isPrimary": false,
			"name": "",
			"diffbotUri": "",
			"version": ""
		}
	]
}
```
### ultimateParent
  The ultimate parent company of this subsidiary.
* **Type:** LinkedEntity
* **Example:**
```
{
	"ultimateParent": {
		"recordId": "EPdsrDmLiMQCskvBLp_dloQ@62",
		"name": "IBM",
		"websiteUris": [
			"wikidata.org/entity/Q37156"
		],
		"surfaceForm": "IBM",
		"position": "companyParentCompany",
		"type": "Organization"
	}
}
```
### vatIdentificationNumbers
  VAT identification number, an identifier used in many countries, including the countries of the European Union, for value added tax purposes
* **Type:** String
* **Example:**
```
{
	"vatIdentificationNumbers": [
		"IN29980271267"
	]
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
				"value": 57350000000
			},
			"isCurrent": false,
			"year": 2021
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 79591000000
			},
			"isCurrent": false,
			"year": 2018
		}
	]
}
```
