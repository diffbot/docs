---
id: kg-ont-organization
title: Organization
---

The organization entity type encompasses corporations, local businesses, non-profits, and other organizations known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](kg-quickstart).

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
	"boardMembers": "[See Person]"
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
		"currency": "",
		"value": ""
	}
}
```
### categories
  
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"categories": ""
}
```
### ceo
  Chief Executive Officer of this organization.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"ceo": "[See Person]"
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
	"crunchbaseUri": ""
}
```
### descriptors
  
* **Type:** String
* **Example:**
```
{
	"descriptors": ""
}
```
### facebookUri
  Link to the Facebook profile of this entity
* **Type:** 
* **Example:**
```
{
	"facebookUri": ""
}
```
### founders
  Founders of this organization
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"founders": "[See Person]"
}
```
### foundingDate
  The date this organization was founded
* **Type:** DDate
* **Example:**
```
{
	"foundingDate": {
		"str": "",
		"precision": 0,
		"timestamp": 0
	}
}
```
### githubUri
  Link to the Github profile of this entity
* **Type:** 
* **Example:**
```
{
	"githubUri": ""
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
	"homepageUri": ""
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
	"industries": ""
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
			"series": "",
			"investors": "[See Person or Organization]"
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
			"str": "",
			"precision": 0,
			"timestamp": 0
		},
		"stockExchange": ""
	}
}
```
### irsEmployerIdentificationNumbers
  Employer Identification Number as assigned by the U.S. Internal Revenue Service.
* **Type:** String
* **Example:**
```
{
	"irsEmployerIdentificationNumbers": ""
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
	"linkedInUri": ""
}
```
### location
  The main location of an organization.
* **Type:** Location
* **Example:**
```
{
	"location": {
		"country": "[See AdministrativeArea]",
		"address": "",
		"city": "[See AdministrativeArea]",
		"subregion": "[See AdministrativeArea]",
		"latitude": "",
		"precision": "",
		"postalCode": "",
		"surfaceForm": "",
		"isCurrent": false,
		"street": "",
		"metroArea": "[See AdministrativeArea]",
		"region": "[See AdministrativeArea]",
		"rawAdministrativeArea": "[See AdministrativeArea]",
		"longitude": ""
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
			"country": "[See AdministrativeArea]",
			"address": "",
			"city": "[See AdministrativeArea]",
			"subregion": "[See AdministrativeArea]",
			"latitude": "",
			"precision": "",
			"postalCode": "",
			"surfaceForm": "",
			"isCurrent": false,
			"street": "",
			"metroArea": "[See AdministrativeArea]",
			"region": "[See AdministrativeArea]",
			"rawAdministrativeArea": "[See AdministrativeArea]",
			"longitude": ""
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
	"logo": ""
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
			"code": "",
			"isPrimary": false,
			"name": ""
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
	"nbActiveEmployeeEdges": 0
}
```
### nbEmployeesMax
  Defines a upper bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMax": 0
}
```
### nbEmployeesMin
  Defines a lower bound for the number of employees of an organization
* **Type:** Integer
* **Example:**
```
{
	"nbEmployeesMin": 0
}
```
### nbLocations
  Number of locations listed in the field &#39;locations&#39;
* **Type:** Integer
* **Example:**
```
{
	"nbLocations": 0
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
			"string": "",
			"digits": ""
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
				"currency": "",
				"value": ""
			},
			"isCurrent": false,
			"filingDate": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"year": 0,
			"revenueDate": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"quarter": 0
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
	"secCentralIndexKeys": ""
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
			"code": "",
			"isPrimary": false,
			"name": ""
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
		"symbol": "",
		"exchange": ""
	}
}
```
### subsidiaries
  Current subsidiaries of this organization.
* **Type:** com.diffbot.kg.fields.LinkedEntity
* **Example:**
```
{
	"subsidiaries": "[See Organization]"
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
* **Type:** 
* **Example:**
```
{
	"twitterUri": ""
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
	"wikipediaUri": ""
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
				"currency": "",
				"value": ""
			},
			"isCurrent": false,
			"filingDate": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"year": 0,
			"revenueDate": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			}
		}
	]
}
```
