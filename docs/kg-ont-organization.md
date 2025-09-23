---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
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
* [allDescriptions](#alldescriptions) 
* [allNames](#allnames) 
* [allOriginHashes](#alloriginhashes) 
* [allUriDetails](#alluridetails) 
* [allUris](#alluris) 
* [angellistUri](#angellisturi) 
* [anzSicClassification](#anzsicclassification) 
* [blogUri](#bloguri) 
* [boardMembers](#boardmembers) 
* [canadianBusinessNumbers](#canadianbusinessnumbers) 
* [capitalization](#capitalization) 
* [categories](#categories) 
* [ceo](#ceo) 
* [chineseSocialCreditCodes](#chinesesocialcreditcodes) 
* [companiesHouseIds](#companieshouseids) 
* [competitors](#competitors) 
* [crawlTimestamp](#crawltimestamp) 
* [crunchbaseUri](#crunchbaseuri) 
* [cuitNumbers](#cuitnumbers) 
* [customers](#customers) 
* [description](#description) 
* [descriptors](#descriptors) 
* [diffbotUri](#diffboturi) 
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
* [hasRemoteInternationalEmployees](#hasremoteinternationalemployees) 
* [homepageUri](#homepageuri) 
* [iSicClassification](#isicclassification) 
* [id](#id) 
* [image](#image) 
* [images](#images) 
* [importance](#importance) 
* [indianCorporateIdentityNumbers](#indiancorporateidentitynumbers) 
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
* [legalEntities](#legalentities) 
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
* [name](#name) 
* [nbActiveEmployeeEdges](#nbactiveemployeeedges) 
* [nbEmployeeRanges](#nbemployeeranges) 
* [nbEmployees](#nbemployees) 
* [nbEmployeesMax](#nbemployeesmax) 
* [nbEmployeesMin](#nbemployeesmin) 
* [nbIncomingEdges](#nbincomingedges) 
* [nbLocations](#nblocations) 
* [nbOrigins](#nborigins) 
* [nbUniqueInvestors](#nbuniqueinvestors) 
* [nonCanonicalFacts](#noncanonicalfacts) 
* [norwegianOrganizationNumbers](#norwegianorganizationnumbers) 
* [npiNumbers](#npinumbers) 
* [okvedClassification](#okvedclassification) 
* [originDetails](#origindetails) 
* [origins](#origins) 
* [parentCompany](#parentcompany) 
* [partnerships](#partnerships) 
* [phoneNumbers](#phonenumbers) 
* [predecessors](#predecessors) 
* [quarterlyRevenues](#quarterlyrevenues) 
* [remoteScore](#remotescore) 
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
* [summary](#summary) 
* [suppliers](#suppliers) 
* [technographics](#technographics) 
* [thaiTaxpayerIds](#thaitaxpayerids) 
* [totalInvestment](#totalinvestment) 
* [tsicClassification](#tsicclassification) 
* [twitterUri](#twitteruri) 
* [type](#type) 
* [types](#types) 
* [uenNumbers](#uennumbers) 
* [ukSicClassification](#uksicclassification) 
* [ultimateParent](#ultimateparent) 
* [vatIdentificationNumbers](#vatidentificationnumbers) 
* [wikipediaPageviews](#wikipediapageviews) 
* [wikipediaPageviewsGrowth](#wikipediapageviewsgrowth) 
* [wikipediaPageviewsLastQuarter](#wikipediapageviewslastquarter) 
* [wikipediaPageviewsLastQuarterGrowth](#wikipediapageviewslastquartergrowth) 
* [wikipediaPageviewsLastYear](#wikipediapageviewslastyear) 
* [wikipediaPageviewsLastYearGrowth](#wikipediapageviewslastyeargrowth) 
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
	"abnNumbers": [
		"46610921849"
	]
}
```
### acnNumbers
  Australian Company Number (ACN) is a unique identifier given to all Australian companies.
* **Type:** String
* **Example:**
```
{
	"acnNumbers": [
		"610921849"
	]
}
```
### acquiredBy
  The organization that has most recently acquired this organization.
* **Type:** AcquiredBy
* **Example:**
```
{
	"acquiredBy": [
		{
			"date": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"summary": "",
			"image": "",
			"amount": {
				"currency": "",
				"value": ""
			},
			"isCurrent": false,
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
### allDescriptions
  All descriptions found for this entity. For the best description, refer to the field &#39;description&#39;.
* **Type:** String
* **Example:**
```
{
	"allDescriptions": [
		"IBM is a leading cloud platform and cognitive solutions company. Founded in 1911, it is the largest technology and consulting employer in the world.",
		"IBM Global Financing offers loans, leasing and IT financing Payment solutions.",
		"IBM is an IT technology and consulting firm providing computer hardware, software, infrastructure, and hosting services."
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
		"IBM",
		"IBM India Private Limited",
		"IBM India"
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
		"eKPD0JbzMCKSlCT_lDiuIQ",
		"DV7YS20lMU2ibHgiwW7cfA",
		"IPiXHBOjO_6L9CG9F_NPeg"
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
		"connectonline.asic.gov.au/RegistrySearch/faces/landing/panelSearch.jspx?searchType=OrgAndBusNm&searchText=610921849",
		"annuaire-entreprises.data.gouv.fr/entreprise/890677800",
		"data.gov.in/catalog/company-master-data/U30007KA1991PLC012619"
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
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7guSXzAoBWu.x0KwLZrUn.%5B%3CR0Aa4Hwygr9m6W%3Exl5G%60BkxmPGd5%5Bg%7BE%3DJm%40gp7oEL8d7PC%28Fk1%601%3CT%29.o%3Ec",
			"types": [
				"Person"
			],
			"name": "Arvind Krishna",
			"diffbotUri": "http://diffbot.com/entity/E2w9R5RLuMCSUb511otaM-Q",
			"targetDiffbotId": "E2w9R5RLuMCSUb511otaM-Q",
			"type": "Person"
		},
		{
			"summary": "American businessman & politician (born 1960)",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0SttAc%3ANu.d9U%7CB%5DpM08.%7DZnIa6%40_%3Bv2FpDLhawxEr-%5BuTpJZ%40-r%3Ec2Jh9e%3EN7Zv%3De%3DNdGkxHRsYU2qfV3MD2%3B2GcA%3FP%3Dil2gIG%7DIwIY.%3Aan",
			"types": [
				"Person",
				"PersonInvestor"
			],
			"name": "Gary Cohn",
			"diffbotUri": "http://diffbot.com/entity/EpEweymvaM0ug7Y-pCJBB3w",
			"targetDiffbotId": "EpEweymvaM0ug7Y-pCJBB3w",
			"type": "Person"
		},
		{
			"summary": "Businessperson and corporate director; former chair and CEO, Johnson & Johnson",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0SttAc%3ANu.d9U%7CB%5DpM08.%7DZnIa6%40_%3Bv2FpDLhawxEr-%5BuTpJZ%40-r%3Ec2Jh9e%3EN7Zv%3De%3DMeCdxCpt8Q0uiU%7D2I%7E%3C%5Dwa%3AZuni%3FSfug1xwLZ.%3Aan",
			"types": [
				"Person",
				"PersonInvestor"
			],
			"name": "Alex Gorsky",
			"diffbotUri": "http://diffbot.com/entity/Ee_LAfNCLMK-VpvaJV4xpAA",
			"targetDiffbotId": "Ee_LAfNCLMK-VpvaJV4xpAA",
			"type": "Person"
		}
	]
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
		"value": 227430350848
	}
}
```
### categories
  
* **Type:** LinkedCategory
* **Example:**
```
{
	"categories": [
		{
			"types": [
				"Intangible",
				"OrganizationCategory"
			],
			"level": 3,
			"isPrimary": true,
			"name": "Software As A Service Companies",
			"diffbotUri": "http://diffbot.com/entity/EbdcyFE5NPjCPeXs1vyF_0w",
			"targetDiffbotId": "EbdcyFE5NPjCPeXs1vyF_0w",
			"type": "OrganizationCategory"
		},
		{
			"types": [
				"Intangible",
				"OrganizationCategory"
			],
			"level": 2,
			"isPrimary": true,
			"name": "Software Companies",
			"diffbotUri": "http://diffbot.com/entity/EhbXSjlcgNVa4-JzwAvA7gQ",
			"targetDiffbotId": "EhbXSjlcgNVa4-JzwAvA7gQ",
			"type": "OrganizationCategory"
		},
		{
			"types": [
				"Intangible",
				"OrganizationCategory"
			],
			"level": 1,
			"isPrimary": true,
			"name": "Technology Companies",
			"diffbotUri": "http://diffbot.com/entity/EGkMjRFN1PdC0t0QPTVncVg",
			"targetDiffbotId": "EGkMjRFN1PdC0t0QPTVncVg",
			"type": "OrganizationCategory"
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
		"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7guSXzAoBWu.x0KwLZrUn.%5B%3CR0Aa4Hwygr9m6W%3Exl5G%60BkxmPGd5%5Bg%7BE%3DJm%40gp7oEL8d7PC%28Fk1%601%3CT%29.o%3Ec",
		"types": [
			"Person"
		],
		"name": "Arvind Krishna",
		"diffbotUri": "http://diffbot.com/entity/E2w9R5RLuMCSUb511otaM-Q",
		"targetDiffbotId": "E2w9R5RLuMCSUb511otaM-Q",
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
			"summary": "American multinational technology company, a subsidiary of Alphabet Inc.",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FcvBT%3El%5D%3BTo1YMa%7B%5DX%7BGmF.yZl",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Google",
			"diffbotUri": "http://diffbot.com/entity/EUFq-3WlpNsq0pvfUYWXOEA",
			"targetDiffbotId": "EUFq-3WlpNsq0pvfUYWXOEA",
			"type": "Organization"
		},
		{
			"summary": "American multinational technology company based in Cupertino, California",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvO%3Ef%5E%3CYh%7Bf%3AHi7%5B%7B9iB.yZl",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Apple Inc.",
			"diffbotUri": "http://diffbot.com/entity/EHb0_0NEcMwyY8b083taTTw",
			"targetDiffbotId": "EHb0_0NEcMwyY8b083taTTw",
			"type": "Organization"
		},
		{
			"summary": "American multinational technology company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqw%3Ef%5B%7Dgr%3AY7PaG.2Nm",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Amazon",
			"diffbotUri": "http://diffbot.com/entity/EU2HJUnMcNoWE3nR1cGBcZg",
			"targetDiffbotId": "EU2HJUnMcNoWE3nR1cGBcZg",
			"type": "Organization"
		}
	]
}
```
### crawlTimestamp
  The default crawlTimestamp is the most recent date of all of the crawlTimestamps of the origins used to compute the Entity, returned as a UNIX time.
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 1757196904
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
			"summary": "American multinational technology company, a subsidiary of Alphabet Inc.",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FcvBT%3El%5D%3BTo1YMa%7B%5DX%7BGmF.yZl",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Google",
			"diffbotUri": "http://diffbot.com/entity/EUFq-3WlpNsq0pvfUYWXOEA",
			"targetDiffbotId": "EUFq-3WlpNsq0pvfUYWXOEA",
			"type": "Organization"
		},
		{
			"summary": "American multinational technology company based in Cupertino, California",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FGvvO%3Ef%5E%3CYh%7Bf%3AHi7%5B%7B9iB.yZl",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Apple Inc.",
			"diffbotUri": "http://diffbot.com/entity/EHb0_0NEcMwyY8b083taTTw",
			"targetDiffbotId": "EHb0_0NEcMwyY8b083taTTw",
			"type": "Organization"
		},
		{
			"summary": "American multinational technology company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqw%3Ef%5B%7Dgr%3AY7PaG.2Nm",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Amazon",
			"diffbotUri": "http://diffbot.com/entity/EU2HJUnMcNoWE3nR1cGBcZg",
			"targetDiffbotId": "EU2HJUnMcNoWE3nR1cGBcZg",
			"type": "Organization"
		}
	]
}
```
### description
  A few sentences describing an entity
* **Type:** String
* **Example:**
```
{
	"description": "International Business Machines Corp operates as an IT services and consulting company. The Company, through its platform, offers analytics, IT infrastructure, cloud, business operations and automations, cybersecurity, data storage, application development, asset management, blockchain, software, and consulting solutions. International Business Machines serves clients worldwide."
}
```
### descriptors
  A list of free-form keywords describing this entity
* **Type:** String
* **Example:**
```
{
	"descriptors": [
		"computer and office equipment",
		"computer hardware",
		"business and professional services"
	]
}
```
### diffbotUri
  diffbotUri is the URI an entity&#39;s  (URI), which is defined by appending the Diffbot ID to the URL https:&#x2F;&#x2F;diffbot.com&#x2F;entity&#x2F;. For example, Diffbot&#39;s entityID is CWSwJ_SWQPfqO3HQsxY4lGg and its DiffbotUri is https:&#x2F;&#x2F;diffbot.com&#x2F;entity&#x2F;CWSwJ_SWQPfqO3HQsxY4lGg
* **Type:** URL
* **Example:**
```
{
	"diffbotUri": "http://diffbot.com/entity/EPdsrDmLiMQCskvBLp_dloQ"
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
		},
		{
			"contactString": "infojapan@opentable.com",
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
				"str": "d1945-01-XX",
				"precision": 2,
				"timestamp": -788918400000
			},
			"category": "Frontend Developer",
			"nbEmployees": 659
		},
		{
			"firstHireDate": {
				"str": "d1959-09-XX",
				"precision": 2,
				"timestamp": -326160000000
			},
			"category": "Agriculture, Farming, Forestry and related",
			"nbEmployees": 116
		},
		{
			"firstHireDate": {
				"str": "d1956-06-XX",
				"precision": 2,
				"timestamp": -428716800000
			},
			"category": "Industrial Production and Distribution (goods and food)",
			"nbEmployees": 73
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
			"summary": "American statistician and inventor（1860-1929）",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FevDp%3Em%5D8Yh%3Ec%3FI.Biv",
			"types": [
				"Person"
			],
			"name": "Herman Hollerith",
			"diffbotUri": "http://diffbot.com/entity/EI0AIp3PNOFevRVlFf4GInw",
			"targetDiffbotId": "EI0AIp3PNOFevRVlFf4GInw",
			"type": "Person"
		},
		{
			"summary": "American businessman",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqQ%3EhV%7D_o1mz3%5BFetLz63rMs%3F.%7CS%60",
			"types": [
				"Person"
			],
			"name": "Charles Ranlett Flint",
			"diffbotUri": "http://diffbot.com/entity/E75wc-P6GOF2SUspkvyJygg",
			"targetDiffbotId": "E75wc-P6GOF2SUspkvyJygg",
			"type": "Person"
		},
		{
			"summary": "American businessman and diplomat (1914-1993)",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7guSXzAoBWu.x0KwLZrUn.%5B%3CR0Aa4Hwygr9m6W%3Exl5G%60Bkxmc%3D%5D9NvfQ%7CUmGgYJ.A%5Dm",
			"types": [
				"Person"
			],
			"name": "Thomas Watson",
			"diffbotUri": "http://diffbot.com/entity/EcIMMfNl4MtOTrv192U6q7w",
			"targetDiffbotId": "EcIMMfNl4MtOTrv192U6q7w",
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
		"str": "d1911-06-01",
		"precision": 3,
		"timestamp": -1848873600000
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
### hasRemoteInternationalEmployees
  Indicates whether the company has employees working remotely in countries without offices.
* **Type:** Boolean
* **Example:**
```
{
	"hasRemoteInternationalEmployees": false
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
			"code": "2620",
			"isPrimary": false,
			"name": "Manufacture of computers and peripheral equipment"
		},
		{
			"code": "4651",
			"isPrimary": false,
			"name": "Wholesale of computers, computer peripheral equipment and software"
		},
		{
			"code": "6202",
			"isPrimary": false,
			"name": "Computer consultancy and computer facilities management activities"
		}
	]
}
```
### id
  An alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies an entity.
* **Type:** String
* **Example:**
```
{
	"id": "EPdsrDmLiMQCskvBLp_dloQ"
}
```
### image
  The main image used to represent the entity.
* **Type:** String
* **Example:**
```
{
	"image": "https://kg.diffbot.com/image/api/get?fetch=yes&urls=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEo%3En0iLo%3Ba%3A.mN%60,g%3Cj7guSXzAoBWu.x0KwLZrUn.%5B%3CR0Aa4Hwygr9m6W%3Exl5G%60BkxmXg%3B%7BYr3i.Tp%3F,g%3Cj7P0Stn8p.OgAu%3CRsCX3_1BY%2F%5Dt.%5B8LwifzFeCd.Nr0QoN%5CtW4Bm5Op%7B%7CTg%7E7hraY9YU.%7C0F2"
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
			"url": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEo%3En0iLo%3Ba%3A.mN%60",
			"primary": true
		},
		{
			"url": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7guSXzAoBWu.x0KwLZrUn.%5B%3CR0Aa4Hwygr9m6W%3Exl5G%60BkxmXg%3B%7BYr3i.Tp%3F",
			"primary": false
		},
		{
			"url": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.OgAu%3CRsCX3_1BY%2F%5Dt.%5B8LwifzFeCd.Nr0QoN%5CtW4Bm5Op%7B%7CTg%7E7hraY9YU.%7C0F2",
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
	"importance": 98.08750915527344
}
```
### indianCorporateIdentityNumbers
  Indian Corporate Identity Number (CIN).
* **Type:** String
* **Example:**
```
{
	"indianCorporateIdentityNumbers": [
		"U30007KA1991PLC012619",
		"U72200KA1997PTC022382"
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
					"diffbotUri": "",
					"name": ""
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
		"stockExchange": "New York Stock Exchange (NYSE)"
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
### legalEntities
  Legal Entities related to this organization
* **Type:** LinkedEntity
* **Example:**
```
{
	"legalEntities": [
		{
			"types": [
				"LegalEntity"
			],
			"name": "IBM INDIA PRIVATE LIMITED",
			"diffbotUri": "http://diffbot.com/entity/ETfB2TUyWNRm-C6eEfPjaLg",
			"targetDiffbotId": "ETfB2TUyWNRm-C6eEfPjaLg",
			"type": "LegalEntity"
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
				"targetDiffbotId": "EFYOMni-nNtScxpZwteaMxQ",
				"type": "Place"
			},
			"subregion": {
				"summary": "County in the State of New York, United States; Connector between New York City/Long Island and the rest of New York",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHt%3ErO%3CLr2YiFq7R%7EJq6UoKm7MyKm%7B%5Ex6G3by1d2Vp%3FmpmwN%5D%7C_.%40%5C%7B",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Westchester County",
				"diffbotUri": "http://diffbot.com/entity/EoKezLIvJP82Xm_cWVQyCQA",
				"targetDiffbotId": "EoKezLIvJP82Xm_cWVQyCQA",
				"type": "Place"
			},
			"latitude": 41.1134033203125,
			"precision": 0.10000000149011612,
			"postalCode": "10504-1722",
			"isCurrent": true,
			"isPrimary": true,
			"street": "1 New Orchard Road",
			"metroArea": {
				"summary": "Most populous metropolitan area in the United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FdvCQ%3EfMBVhCY%3AGYv%5E67_F_qCH4X%3BBp%7Bdy6d6Tdci%3DLn%3FZdNiMTgx%7C6RxNi%7BQtGV%2F%40u5%5DvTpHar0%7C%3CUoGL4V%3ALouZ7Ja1gq7_sVcId%7BCxIX%7EIN6X%3CNq.%607D",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New York metropolitan area",
				"diffbotUri": "http://diffbot.com/entity/EAtK9ZhUYMKmI_UzSrYinmw",
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
				"targetDiffbotId": "E1NxI_KXaMbiP5g2aM9MRdw",
				"type": "Place"
			},
			"longitude": -73.7203598022461
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
			"address": "6303 Barfield Rd Atlanta, GA, 30328-4233 United States",
			"city": {
				"summary": "Capital city of Georgia, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAu%3EkZ%7DTb%3B%60zrnDZ%7DLg.%60%7CK",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "Atlanta",
				"diffbotUri": "http://diffbot.com/entity/EP-thVRNKPCiwPfIyJ3_ozQ",
				"targetDiffbotId": "EP-thVRNKPCiwPfIyJ3_ozQ",
				"type": "Place"
			},
			"subregion": {
				"summary": "County in Georgia, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FbvAr%3ErO%3CLr2YbFiJ%60x9e%3FVmLq4KzWb0Wpme%3Act%3C%5B%60RqHo%3A.%7BOV",
				"types": [
					"Place",
					"AdministrativeArea",
					"Subregion"
				],
				"name": "Fulton County",
				"diffbotUri": "http://diffbot.com/entity/Eav8t1QygMqC_KrJ9RJdcKw",
				"targetDiffbotId": "Eav8t1QygMqC_KrJ9RJdcKw",
				"type": "Place"
			},
			"latitude": 33.769805908203125,
			"precision": 18.72922134399414,
			"postalCode": "30328-4233",
			"isCurrent": true,
			"isPrimary": false,
			"street": "6303 Barfield Rd",
			"metroArea": {
				"summary": "Most populous metro area in the US state of Georgia",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FFvuw%3Egc%2FXk1%5B%2F%40gA%5D3G%7DELjS%7C9X1ZgqQ5CQ%3Ccf.f%3DJ",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Atlanta-Sandy Springs-Roswell metropolitan area",
				"diffbotUri": "http://diffbot.com/entity/ERy8LbfAgONKM1PFREToBJw",
				"targetDiffbotId": "ERy8LbfAgONKM1PFREToBJw",
				"type": "Place"
			},
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40v%3EkZ%7DTb%3B%60zUb%3DXbLgKReSkz%7BwRkyYr.cDV",
				"types": [
					"Place",
					"AdministrativeArea",
					"Region"
				],
				"name": "Georgia",
				"diffbotUri": "http://diffbot.com/entity/E_L-1Z6pbMUuEvXV5RpTMaQ",
				"targetDiffbotId": "E_L-1Z6pbMUuEvXV5RpTMaQ",
				"type": "Place"
			},
			"longitude": -84.41458129882812
		},
		{
			"country": {
				"summary": "Country in north-west Europe",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FBvqs%3EkZ%7DTb%3B%60zUb%3DXdFoKRjCP4RyGh%2FO%28X-P%29.Ar4",
				"types": [
					"Place",
					"AdministrativeArea",
					"Country"
				],
				"name": "United Kingdom",
				"diffbotUri": "http://diffbot.com/entity/EnI6g1AI9NcC6yCohEYEb2A",
				"targetDiffbotId": "EnI6g1AI9NcC6yCohEYEb2A",
				"type": "Place"
			},
			"address": "8 Weybridge Business Park Unit, Weybridge, Surrey, United Kingdom",
			"isPrimary": false,
			"street": "8 Weybridge Business Park Unit",
			"latitude": 51.25234603881836,
			"precision": 40.80295944213867,
			"postalCode": "KT15 2UF",
			"region": {
				"summary": "County of England",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FgvFu%3Exc%3E_hEYp%7CYDhr9zF_eQf%3BCDczB.4MW",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "Surrey",
				"diffbotUri": "http://diffbot.com/entity/EtjOVkZlUNryQgUt_ftmKgw",
				"targetDiffbotId": "EtjOVkZlUNryQgUt_ftmKgw",
				"type": "Place"
			},
			"longitude": -0.47444701194763184
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
	"monthlyTraffic": 113412519
}
```
### monthlyTrafficGrowth
  Monthly growth in website traffic on this organization&#39;s homepage
* **Type:** Float
* **Example:**
```
{
	"monthlyTrafficGrowth": -0.31240857
}
```
### motto
  A short sentence or phrase chosen as encapsulating the beliefs or ideals guiding an organization
* **Type:** String
* **Example:**
```
{
	"motto": "Market Research analyst- GfK"
}
```
### naceClassification

The `naceClassification` field encodes the NACE Rev. 2.1 classification of economic activities associated with an entity.

The NACE classification of economic activities in the European Community is used for a wide variety of European statistics in the economic, social, environmental, and agricultural domains.

Each entry follows the hierarchical NACE structure:

 Sections (letters A–V, level 1)  
 Divisions (2 digits, level 2)  
 Groups (3 digits with dot, level 3)  
 Classes (4 digits with dot, level 4)

This field may contain multiple codes. At most one code per level can be marked as isPrimary: true.

- **Type:** ClassificationCode
- **Example:**

```
{
	"naceClassification": [
    {
        "code": "58.29",
        "level": 4,
        "isPrimary": true,
        "name": "Other software publishing",
        "version": "Rev 2.1"
    },
    {
        "code": "58.2",
        "level": 3,
        "isPrimary": true,
        "name": "Software publishing",
        "version": "Rev 2.1"
    },
    {
        "code": "58",
        "level": 2,
        "isPrimary": true,
        "name": "Publishing activities",
        "version": "Rev 2.1"
    },
    {
        "code": "J",
        "level": 1,
        "isPrimary": true,
        "name": "PUBLISHING, BROADCASTING, AND CONTENT PRODUCTION AND DISTRIBUTION ACTIVITIES",
        "version": "Rev 2.1"
    },
    {
        "code": "26.20",
        "level": 4,
        "isPrimary": false,
        "name": "Manufacture of computers and peripheral equipment",
        "version": "Rev 2.1"
    },
    {
        "code": "26.2",
        "level": 3,
        "isPrimary": false,
        "name": "Manufacture of computers and peripheral equipment",
        "version": "Rev 2.1"
    },
    {
        "code": "26",
        "level": 2,
        "isPrimary": false,
        "name": "Manufacture of computer, electronic and optical products",
        "version": "Rev 2.1"
    },
    {
        "code": "C",
        "level": 1,
        "isPrimary": false,
        "name": "MANUFACTURING",
        "version": "Rev 2.1"
    },
    {
        "code": "62.9",
        "level": 3,
        "isPrimary": false,
        "name": "Other information technology and computer service activities",
        "version": "Rev 2.1"
    },
    {
        "code": "62",
        "level": 2,
        "isPrimary": false,
        "name": "Computer programming, consultancy and related activities",
        "version": "Rev 2.1"
    },
    {
        "code": "K",
        "level": 1,
        "isPrimary": false,
        "name": "TELECOMMUNICATION, COMPUTER PROGRAMMING, CONSULTING, COMPUTING INFRASTRUCTURE AND OTHER INFORMATION SERVICE ACTIVITIES",
        "version": "Rev 2.1"
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
			"code": "70.22z",
			"isPrimary": false,
			"name": "Business and other management consultancy activities"
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
			"code": "334110",
			"level": 4,
			"isPrimary": true,
			"name": "Computer and Peripheral Equipment Manufacturing"
		},
		{
			"code": "334100",
			"level": 3,
			"isPrimary": true,
			"name": "Computer and Peripheral Equipment Manufacturing"
		},
		{
			"code": "334000",
			"level": 2,
			"isPrimary": true,
			"name": "Computer and Electronic Product Manufacturing"
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
			"code": "334110",
			"level": 4,
			"isPrimary": true,
			"name": "Computer and Peripheral Equipment Manufacturing"
		},
		{
			"code": "334100",
			"level": 3,
			"isPrimary": true,
			"name": "Computer and Peripheral Equipment Manufacturing"
		},
		{
			"code": "334000",
			"level": 2,
			"isPrimary": true,
			"name": "Computer and Electronic Product Manufacturing"
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
	"name": "IBM"
}
```
### nbActiveEmployeeEdges
  Number of employees in the Diffbot KG who are currently employed by this organization.
* **Type:** Integer
* **Example:**
```
{
	"nbActiveEmployeeEdges": 117969
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
	"nbEmployees": 300000
}
```
### nbEmployeesMax
  Defines a upper bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMax": 300000
}
```
### nbEmployeesMin
  Defines a lower bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMin": 300000
}
```
### nbIncomingEdges
  This is the number of edges in the Knowledge Graph that point to this entity. For example, the nbIncomingEdges field for Google is over 100,000. This number includes the number of people that work at google, the number of investors who invested in google, etc.
* **Type:** Integer
* **Example:**
```
{
	"nbIncomingEdges": 2040792
}
```
### nbLocations
  Number of locations listed in the field &#39;locations&#39;
* **Type:** Integer
* **Example:**
```
{
	"nbLocations": 694
}
```
### nbOrigins
  Total number of origins in the field &#39;origins&#39;. This field is only available in extended JSON mode.
* **Type:** Integer
* **Example:**
```
{
	"nbOrigins": 6912
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
### nonCanonicalFacts
  Enumerates all the non-canonical fields (i.e., those not defined in the ontology) that have a value for this entity. For instance, if &#39;numberOfChildren&#39; is listed in &#39;nonCanonicalFacts&#39; then the entity JSON will have the key &#39;numberOfChildren&#39; with an associated value. This field is only provided when the parameter nonCanonicalFacts&#x3D;1 is set. See: https:&#x2F;&#x2F;docs.diffbot.com&#x2F;kgapi
* **Type:** String
* **Example:**
```
{
	"nonCanonicalFacts": ""
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
		"01net.it/sirion-ranks-highest-in-all-four-use-cases-in-2024-gartner-critical-capabilities-for-contract-life-cycle-management",
		"101blockchains.com",
		"10bestpr.com/pr-agencies/sf/2016/september/launchsquad"
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
		"diffbotUri": "",
		"name": ""
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
			"summary": "American multinational technology company, a subsidiary of Alphabet Inc.",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FcvBT%3El%5D%3BTo1YMa%7B%5DX%7BGmF.yZl",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Google",
			"diffbotUri": "http://diffbot.com/entity/EUFq-3WlpNsq0pvfUYWXOEA",
			"targetDiffbotId": "EUFq-3WlpNsq0pvfUYWXOEA",
			"type": "Organization"
		},
		{
			"summary": "American multinational technology corporation",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FjvIt%3ErW%2F_r%3Fi1UYDhvGe%25o%3Ef5Lf%25e2.c7%3E",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Microsoft",
			"diffbotUri": "http://diffbot.com/entity/EIsFKrN_ZNLSWsvxdQfWutQ",
			"targetDiffbotId": "EIsFKrN_ZNLSWsvxdQfWutQ",
			"type": "Organization"
		},
		{
			"summary": "South Korean multinational conglomerate",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0SttAc%3ANu.d9U%7CB%5DpM08.%7DZnIa6%40_%3Bv2FpDLhawxEr-%5BuTpJZ%40-r%3Ec2Jh9e%3ENt%3B_%7DPwTLtS%5Cut%7DJUOtz",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Samsung Electronics",
			"diffbotUri": "http://diffbot.com/entity/EEUocPTqVNCGf3f-wqw6lxQ",
			"targetDiffbotId": "EEUocPTqVNCGf3f-wqw6lxQ",
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
			"targetDiffbotId": "EeCTt6xVqOoqWn5jzd4EwCw",
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
			"targetDiffbotId": "Ex0oc7IVgNWGUSnSDoTUV-w",
			"type": "Organization"
		}
	]
}
```
### quarterlyRevenues
  An organization&#39;s officially reported revenue for a period of 3 months.
* **Type:** QuarterlyRevenue
* **Example:**
```
{
	"quarterlyRevenues": [
		{
			"revenue": {
				"currency": "USD",
				"value": 14541000000
			},
			"isCurrent": false,
			"year": 2025,
			"filingDate": {
				"str": "d2025-04-24",
				"precision": 3,
				"timestamp": 1745452800000
			},
			"revenueDate": {
				"str": "d2025-03-31",
				"precision": 3,
				"timestamp": 1743379200000
			},
			"quarter": 1
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 14968000000
			},
			"isCurrent": false,
			"year": 2024,
			"filingDate": {
				"str": "d2024-10-30",
				"precision": 3,
				"timestamp": 1730246400000
			},
			"revenueDate": {
				"str": "d2024-09-30",
				"precision": 3,
				"timestamp": 1727654400000
			},
			"quarter": 3
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 15770000000
			},
			"isCurrent": false,
			"year": 2024,
			"filingDate": {
				"str": "d2024-07-30",
				"precision": 3,
				"timestamp": 1722297600000
			},
			"revenueDate": {
				"str": "d2024-06-30",
				"precision": 3,
				"timestamp": 1719705600000
			},
			"quarter": 2
		}
	]
}
```
### remoteScore
  The probability (0-1) of work environment for this organization to be remote&#x2F;hybrid and not in_person, i.e. higher the value of remoteScore, the more likely the organization has remote&#x2F;hybrid work environment.
* **Type:** Float
* **Example:**
```
{
	"remoteScore": 0.8075339
}
```
### revenue
  Most recent yearly revenue as reported by the organization or estimated using a model. If the revenue amount is estimated, revenue.explicitOrigin is set to &#39;inference&#39;. See also: yearlyRevenues.
* **Type:** Amount
* **Example:**
```
{
	"revenue": {
		"currency": "USD",
		"value": 62753000000
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
		"51143"
	]
}
```
### secForms
  Financial statements or other documents filed by this organizations with the U.S. Securities and Exchange Commission (SEC) from 1994 to present.
* **Type:** SECForm
* **Example:**
```
{
	"secForms": [
		{
			"formType": "8-K",
			"filingDate": {
				"str": "d2025-07-23",
				"precision": 3,
				"timestamp": 1753228800000
			},
			"documentUrl": "https://www.sec.gov/Archives/edgar/data/51143/000005114325000048/ibm-20250723.htm",
			"filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000005114325000048/0000051143-25-000048-index.htm"
		},
		{
			"formType": "8-K",
			"filingDate": {
				"str": "d2025-06-20",
				"precision": 3,
				"timestamp": 1750377600000
			},
			"documentUrl": "https://www.sec.gov/Archives/edgar/data/51143/000095015725000533/form8-k.htm",
			"filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000095015725000533/0000950157-25-000533-index.htm"
		},
		{
			"formType": "8-K",
			"filingDate": {
				"str": "d2025-05-02",
				"precision": 3,
				"timestamp": 1746144000000
			},
			"documentUrl": "https://www.sec.gov/Archives/edgar/data/51143/000110465925044116/tm2513847d1_8k.htm",
			"filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000110465925044116/0001104659-25-044116-index.htm"
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
			"code": "5734",
			"level": 3,
			"isPrimary": true,
			"name": "Computer And Computer Software Stores"
		},
		{
			"code": "5730",
			"level": 2,
			"isPrimary": true,
			"name": "Radio, Television, Consumer Electronics, And Music Stores"
		},
		{
			"code": "5700",
			"level": 1,
			"isPrimary": true,
			"name": "Home Furniture, Furnishings, And Equipment Stores"
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
	"sirenCodes": [
		"890677800"
	]
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
		"exchange": "New York Stock Exchange (NYSE)",
		"from": {
			"str": "d1962-01-02",
			"precision": 3,
			"timestamp": -252374400000
		}
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
			"summary": "American multinational software company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.OgAu%3CRsCX3_1BY%2F%5Dt.%5B8LwifzFeCd.Nr0QoN%5CtW4Bm%3ERg-b%7CUY%5E%7DF.%7D%3COv",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Red Hat",
			"diffbotUri": "http://diffbot.com/entity/EIATbb7uwOhSYiGqLBPUD0w",
			"targetDiffbotId": "EIATbb7uwOhSYiGqLBPUD0w",
			"type": "Organization"
		},
		{
			"summary": "Software company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FivHn%3EmO%3FUl_i%3DQYthvGeE%5CeXjCX.Sgy",
			"types": [
				"Organization",
				"Corporation",
				"Company"
			],
			"name": "HashiCorp",
			"diffbotUri": "http://diffbot.com/entity/E9N3XMWjUM_2dU66HUna5GQ",
			"targetDiffbotId": "E9N3XMWjUM_2dU66HUna5GQ",
			"type": "Organization"
		},
		{
			"summary": "Software as a service company",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0Stn8p.%5DjEp9G.Bd%7Bko6u%7CoeR%5B-f%5B9z-Z%3BVP-C%3CMG-c%7BGwuYPRmeM%2FzN_%3Cb4E.A%5Dm",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Diligent",
			"diffbotUri": "http://diffbot.com/entity/EWOVULEdSNbunhBcIF6MtKQ",
			"targetDiffbotId": "EWOVULEdSNbunhBcIF6MtKQ",
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
			"diffbotUri": "",
			"name": ""
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
	"summary": "American multinational technology corporation"
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
			"summary": "American multinational technology company, a subsidiary of Alphabet Inc.",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FcvBT%3El%5D%3BTo1YMa%7B%5DX%7BGmF.yZl",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Google",
			"diffbotUri": "http://diffbot.com/entity/EUFq-3WlpNsq0pvfUYWXOEA",
			"targetDiffbotId": "EUFq-3WlpNsq0pvfUYWXOEA",
			"type": "Organization"
		},
		{
			"summary": "American multinational technology corporation",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FjvIt%3ErW%2F_r%3Fi1UYDhvGe%25o%3Ef5Lf%25e2.c7%3E",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Microsoft",
			"diffbotUri": "http://diffbot.com/entity/EIsFKrN_ZNLSWsvxdQfWutQ",
			"targetDiffbotId": "EIsFKrN_ZNLSWsvxdQfWutQ",
			"type": "Organization"
		},
		{
			"summary": "South Korean multinational conglomerate",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0SttAc%3ANu.d9U%7CB%5DpM08.%7DZnIa6%40_%3Bv2FpDLhawxEr-%5BuTpJZ%40-r%3Ec2Jh9e%3ENt%3B_%7DPwTLtS%5Cut%7DJUOtz",
			"types": [
				"Organization",
				"Corporation",
				"Company",
				"OrganizationInvestor"
			],
			"name": "Samsung Electronics",
			"diffbotUri": "http://diffbot.com/entity/EEUocPTqVNCGf3f-wqw6lxQ",
			"targetDiffbotId": "EEUocPTqVNCGf3f-wqw6lxQ",
			"type": "Organization"
		}
	]
}
```
### technographics
  Technologies used by this organization.
* **Type:** Technographics
* **Example:**
```
{
	"technographics": [
		{
			"technology": {
				"name": "TrustArc",
				"type": "DiffbotEntity"
			},
			"categories": [
				"Cookie compliance"
			]
		},
		{
			"technology": {
				"name": "Tealium AudienceStream",
				"type": "DiffbotEntity"
			},
			"categories": [
				"Segmentation"
			]
		},
		{
			"technology": {
				"name": "Linkedin Insight Tag",
				"type": "DiffbotEntity"
			},
			"categories": [
				"Analytics"
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
	"twitterUri": "twitter.com/ibm"
}
```
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": "Organization"
}
```
### types
  All types of a Diffbot entity, including the value of the field &#39;type&#39;.
* **Type:** String
* **Example:**
```
{
	"types": [
		"Organization",
		"Corporation",
		"Company"
	]
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
		"types": [
			"Organization",
			"Corporation",
			"Company"
		],
		"name": "IBM (United States)",
		"diffbotUri": "http://diffbot.com/entity/E2dnSQGS6MQSUsS8cWvJ4xg",
		"targetDiffbotId": "E2dnSQGS6MQSUsS8cWvJ4xg",
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
		"IN29980271267",
		"FR20890677800",
		"130871985"
	]
}
```
### wikipediaPageviews
  The number of views of its Wikipedia page of the last month if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviews": 199993
}
```
### wikipediaPageviewsGrowth
  The month over month growth of wikipediaPageviews, where we count the increment of the number of page views of the second to last (full) month, compared with that of the last (full) month. if today was Aug 16th, 2022, the last complete month is July. So it refers to the increment from June to July, i.e., ( f(July) - f(June) ) ÷ f(June) x 100%. The f(.) only counts the first 28 days of a month, to avoid fluctuations between 31-days months like Jan and 28(29)-days months like Feb.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsGrowth": 0.017025605
}
```
### wikipediaPageviewsLastQuarter
  The number of views of its Wikipedia page of the last quarter if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviewsLastQuarter": 600651
}
```
### wikipediaPageviewsLastQuarterGrowth
  The quarter over quarter growth of wikipediaPageviews, where we count the increment of the number of page views of the second to last (full) quarter, compared with that of the last (full) quarter. If today was Aug 16th, 2022, the last complete quarter is Q2 (April, May, June). So it refers to the increment from Q1 to Q2, i.e., ( f(Q2) - f(Q1) ) ÷ f(Q1) x 100%.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsLastQuarterGrowth": 0.06729652
}
```
### wikipediaPageviewsLastYear
  The number of views of its Wikipedia page of the last year if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviewsLastYear": 2656578
}
```
### wikipediaPageviewsLastYearGrowth
  The year over year growth of wikipediaPageviews, where we count the monthly-rolling increment of the year before last than the last year. It today was Aug 16th, 2022, it is computed by comparing the numbers from Aug 2021 to July 2022 and from Aug 2020 to July 2021, i.e., ( f(Aug 2021 to July 2022) - f(Aug 2020 to July 2021) ) ÷ f(Aug 2020 to July 2021) x 100%.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsLastYearGrowth": 0.052473985
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
  An organization&#39;s officially reported revenue for a period of 12 months.
* **Type:** YearlyRevenue
* **Example:**
```
{
	"yearlyRevenues": [
		{
			"revenue": {
				"currency": "USD",
				"value": 62800000000
			},
			"isCurrent": false,
			"year": 2025
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 62753000000
			},
			"isCurrent": false,
			"year": 2024
		},
		{
			"revenue": {
				"currency": "USD",
				"value": 61860000000
			},
			"isCurrent": false,
			"year": 2023
		}
	]
}
```
