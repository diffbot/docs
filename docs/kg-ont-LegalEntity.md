---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: kg-ont-legalentity
title: LegalEntity
generatedBy: generateOntology.js
---

The LegalEntity entity type includes companies and organizations with legal status and identifiers.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## LegalEntity Fields
* [allDescriptions](#alldescriptions) 
* [allNames](#allnames) 
* [allOriginHashes](#alloriginhashes) 
* [allUriDetails](#alluridetails) 
* [allUris](#alluris) 
* [bicCodes](#biccodes) 
* [category](#category) 
* [crawlTimestamp](#crawltimestamp) 
* [description](#description) 
* [descriptors](#descriptors) 
* [diffbotUri](#diffboturi) 
* [expirationReason](#expirationreason) 
* [from](#from) 
* [gleifId](#gleifid) 
* [id](#id) 
* [image](#image) 
* [images](#images) 
* [importance](#importance) 
* [isCurrent](#iscurrent) 
* [isinCodes](#isincodes) 
* [legalFormCode](#legalformcode) 
* [legalFormName](#legalformname) 
* [legalJurisdiction](#legaljurisdiction) 
* [location](#location) 
* [locations](#locations) 
* [micCodes](#miccodes) 
* [name](#name) 
* [nbIncomingEdges](#nbincomingedges) 
* [nbOrigins](#nborigins) 
* [nonCanonicalFacts](#noncanonicalfacts) 
* [originDetails](#origindetails) 
* [origins](#origins) 
* [parent](#parent) 
* [registerName](#registername) 
* [registrationAuthority](#registrationauthority) 
* [relationships](#relationships) 
* [subCategory](#subcategory) 
* [subsidiaries](#subsidiaries) 
* [successorEntity](#successorentity) 
* [summary](#summary) 
* [to](#to) 
* [type](#type) 
* [types](#types) 
* [ultimateParent](#ultimateparent) 
* [wikipediaPageviews](#wikipediapageviews) 
* [wikipediaPageviewsGrowth](#wikipediapageviewsgrowth) 
* [wikipediaPageviewsLastQuarter](#wikipediapageviewslastquarter) 
* [wikipediaPageviewsLastQuarterGrowth](#wikipediapageviewslastquartergrowth) 
* [wikipediaPageviewsLastYear](#wikipediapageviewslastyear) 
* [wikipediaPageviewsLastYearGrowth](#wikipediapageviewslastyeargrowth) 

## LegalEntity Field Details
Note that certain longer field examples may be truncated for readability.

### allDescriptions
  All descriptions found for this entity. For the best description, refer to the field &#39;description&#39;.
* **Type:** String
* **Example:**
```
{
	"allDescriptions": ""
}
```
### allNames
  All names used, including nicknames, full names and transliterations to other languages.
* **Type:** String
* **Example:**
```
{
	"allNames": [
		"GENERAL MOTORS COMPANY"
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
		"d-KtAaRBO8G1urmPKsSE6g"
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
		"gleif.org/54930070NSV60J38I987"
	]
}
```
### bicCodes
  BIC number or SWIFT code — is a standard format for Business Identifier Codes (BIC). It&#39;s used to identify banks and financial institutions.
* **Type:** String
* **Example:**
```
{
	"bicCodes": ""
}
```
### category
  Indicates (where applicable) the category of Entity identified by this LEI Data Record, as a more specific category within the broad definition given in ISO 17442. These categories are based on use cases specified in ROC policies, found at the ROC website.
* **Type:** EntityCategory
* **Example:**
```
{
	"category": {}
}
```
### crawlTimestamp
  The default crawlTimestamp is the most recent date of all of the crawlTimestamps of the origins used to compute the Entity, returned as a UNIX time.
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 1756796400
}
```
### description
  A few sentences describing an entity
* **Type:** String
* **Example:**
```
{
	"description": ""
}
```
### descriptors
  A list of free-form keywords describing this entity
* **Type:** String
* **Example:**
```
{
	"descriptors": ""
}
```
### diffbotUri
  diffbotUri is the URI an entity&#39;s  (URI), which is defined by appending the Diffbot ID to the URL https:&#x2F;&#x2F;diffbot.com&#x2F;entity&#x2F;. For example, Diffbot&#39;s entityID is CWSwJ_SWQPfqO3HQsxY4lGg and its DiffbotUri is https:&#x2F;&#x2F;diffbot.com&#x2F;entity&#x2F;CWSwJ_SWQPfqO3HQsxY4lGg
* **Type:** URL
* **Example:**
```
{
	"diffbotUri": "http://diffbot.com/entity/Ed-KtAaRBO8G1urmPKsSE6g"
}
```
### expirationReason
  The reason that a Legal Entity ceased to operate. This element SHALL be present if EntityExpirationDate is present, and omitted otherwise.
* **Type:** ExpirationReason
* **Example:**
```
{
	"expirationReason": {}
}
```
### from
   The date on which the legal entity was first established as defined in ISO 17442.
* **Type:** DDate
* **Example:**
```
{
	"from": {
		"str": "d2009-08-11",
		"precision": 3,
		"timestamp": 1249948800000
	}
}
```
### gleifId
  The Legal Entity Identifier (LEI) is a 20-character, alpha-numeric code based on the ISO 17442 standard developed by the International Organization for Standardization (ISO)
* **Type:** String
* **Example:**
```
{
	"gleifId": "54930070NSV60J38I987"
}
```
### id
  An alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies an entity.
* **Type:** String
* **Example:**
```
{
	"id": "Ed-KtAaRBO8G1urmPKsSE6g"
}
```
### image
  The main image used to represent the entity.
* **Type:** String
* **Example:**
```
{
	"image": ""
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
			"classifications": "",
			"fingerprint": "",
			"title": "",
			"isCached": false,
			"url": ""
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
	"importance": 84.7000732421875
}
```
### isCurrent
  The status of Legal Entity.
* **Type:** Boolean
* **Example:**
```
{
	"isCurrent": false
}
```
### isinCodes
  International Securities Identification Number (ISIN) is a 12-digit alphanumeric code that uniquely identifies a specific security.
* **Type:** String
* **Example:**
```
{
	"isinCodes": ""
}
```
### legalFormCode
  The legal form of the Entity, taken from the ISO Entity Legal Form (ELF) code list maintained by GLEIF. The XML schema validates the format of EntityLegalFormCode codes but not the specific codes conforming to the ISO standard it requires.
* **Type:** String
* **Example:**
```
{
	"legalFormCode": "XTIQ"
}
```
### legalFormName
  The legal form of the Entity, taken from the ISO Entity Legal Form (ELF) code list maintained by GLEIF. The XML schema validates the format of EntityLegalFormCode codes but not the specific codes conforming to the ISO standard it requires.
* **Type:** String
* **Example:**
```
{
	"legalFormName": "Corporation"
}
```
### legalJurisdiction
  The jurisdiction of legal formation and registration of the Entity (and on which the Legalform data element is also dependent).
* **Type:** LinkedEntity
* **Example:**
```
{
	"legalJurisdiction": {
		"summary": "County in Pennsylvania, United States",
		"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3Fav%40r%3ErO%3CLr2YkFhFl8D%7C8%5BoEd3MyKe%7BWyKY%3CVdba9Ds%3Bmv9KHdvZ0.Y%3AL",
		"types": [
			"Place",
			"AdministrativeArea"
		],
		"name": "Delaware County",
		"diffbotUri": "http://diffbot.com/entity/E7IuTriZ9PQO5_uSSzFb_eA",
		"targetDiffbotId": "E7IuTriZ9PQO5_uSSzFb_eA",
		"type": "Place"
	}
}
```
### location
  The main&#x2F;headquarters location of the entity.
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
		"address": "251 Little Falls Drive, Wilmington, North Carolina",
		"city": {
			"summary": "County seat city in New Hanover County, North Carolina, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGt%3E%7CW8Zl%3Aa%3FPh%2CX%5DGxKUewf%3DS%7ELgs.%7BGW",
			"types": [
				"Place",
				"AdministrativeArea",
				"City"
			],
			"name": "Wilmington",
			"diffbotUri": "http://diffbot.com/entity/EPXZO2D_wOPe5Gmax4CCHhg",
			"targetDiffbotId": "EPXZO2D_wOPe5Gmax4CCHhg",
			"type": "Place"
		},
		"street": "251 Little Falls Drive",
		"subregion": {
			"summary": "County in North Carolina, United States",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEw%3ErO%3CLr2YiPlLankgI%5CrMs%7CCzL%60z%5Cz%3EXBXs5%5BkHs9CrHwOTzEJ%3C%5B2Yt.e9%40",
			"types": [
				"Place",
				"AdministrativeArea"
			],
			"name": "New Hanover County",
			"diffbotUri": "http://diffbot.com/entity/EpyBwArEBNfqFiqZI0_ggGw",
			"targetDiffbotId": "EpyBwArEBNfqFiqZI0_ggGw",
			"type": "Place"
		},
		"latitude": 34.209197998046875,
		"precision": 11.717340469360352,
		"postalCode": "19808",
		"locationType": [
			"Headquarters"
		],
		"region": {
			"summary": "State of the United States of America",
			"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FCvrP%3EkZ%7DTb%3B%60z%2FiJmw7I8_uPn9E.Voy",
			"types": [
				"Place",
				"AdministrativeArea",
				"Region"
			],
			"name": "North Carolina",
			"diffbotUri": "http://diffbot.com/entity/E0i5G2lPGOk-eosDVCXvOpw",
			"targetDiffbotId": "E0i5G2lPGOk-eosDVCXvOpw",
			"type": "Place"
		},
		"longitude": -77.87191009521484
	}
}
```
### locations
  The locations of the entity.
* **Type:** Location
* **Example:**
```
{
	"locations": [
		{
			"venue": "Service Company",
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
			"address": "Service Company, 251 C/O Corporation Little Falls Drive, Wilmington, North Carolina",
			"city": {
				"summary": "County seat city in New Hanover County, North Carolina, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FhvGt%3E%7CW8Zl%3Aa%3FPh%2CX%5DGxKUewf%3DS%7ELgs.%7BGW",
				"types": [
					"Place",
					"AdministrativeArea",
					"City"
				],
				"name": "Wilmington",
				"diffbotUri": "http://diffbot.com/entity/EPXZO2D_wOPe5Gmax4CCHhg",
				"targetDiffbotId": "EPXZO2D_wOPe5Gmax4CCHhg",
				"type": "Place"
			},
			"street": "251 C/O Corporation Little Falls Drive",
			"subregion": {
				"summary": "County in North Carolina, United States",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FfvEw%3ErO%3CLr2YiPlLankgI%5CrMs%7CCzL%60z%5Cz%3EXBXs5%5BkHs9CrHwOTzEJ%3C%5B2Yt.e9%40",
				"types": [
					"Place",
					"AdministrativeArea"
				],
				"name": "New Hanover County",
				"diffbotUri": "http://diffbot.com/entity/EpyBwArEBNfqFiqZI0_ggGw",
				"targetDiffbotId": "EpyBwArEBNfqFiqZI0_ggGw",
				"type": "Place"
			},
			"latitude": 34.209197998046875,
			"precision": 11.717340469360352,
			"postalCode": "19808",
			"locationType": [
				"Legal"
			],
			"region": {
				"summary": "State of the United States of America",
				"image": "https://kg.diffbot.com/image/api/get?fetch=yes&url=g%3Cj7P0St0DnBJf.x0KwLZrUn.%5B%3CR0Aa4Hh%3B%5Bv738ZqOr7U%3FCvrP%3EkZ%7DTb%3B%60z%2FiJmw7I8_uPn9E.Voy",
				"types": [
					"Place",
					"AdministrativeArea",
					"Region"
				],
				"name": "North Carolina",
				"diffbotUri": "http://diffbot.com/entity/E0i5G2lPGOk-eosDVCXvOpw",
				"targetDiffbotId": "E0i5G2lPGOk-eosDVCXvOpw",
				"type": "Place"
			},
			"longitude": -77.87191009521484
		}
	]
}
```
### micCodes
  Market identifier code (MIC) is an international indicator that identifies stock markets and trading exchanges for trading computers.
* **Type:** String
* **Example:**
```
{
	"micCodes": ""
}
```
### name
  Primary text label for this entity.
* **Type:** String
* **Example:**
```
{
	"name": "GENERAL MOTORS COMPANY"
}
```
### nbIncomingEdges
  This is the number of edges in the Knowledge Graph that point to this entity. For example, the nbIncomingEdges field for Google is over 100,000. This number includes the number of people that work at google, the number of investors who invested in google, etc.
* **Type:** Integer
* **Example:**
```
{
	"nbIncomingEdges": 307
}
```
### nbOrigins
  Total number of origins in the field &#39;origins&#39;. This field is only available in extended JSON mode.
* **Type:** Integer
* **Example:**
```
{
	"nbOrigins": 1
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
		"gleif.org/54930070NSV60J38I987"
	]
}
```
### parent
  The parent company of this subsidiary.
* **Type:** LinkedEntity
* **Example:**
```
{
	"parent": [
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
### registerName
  The name of the register
* **Type:** String
* **Example:**
```
{
	"registerName": ""
}
```
### registrationAuthority
  The registration authority
* **Type:** LinkedEntity
* **Example:**
```
{
	"registrationAuthority": {
		"name": "Division of Corporations, Department of State",
		"type": "Organization"
	}
}
```
### relationships
  The list of relationships from this legal entity to other legal entities
* **Type:** LegalEntityRelationship
* **Example:**
```
{
	"relationships": [
		{
			"relationshipPeriod": "",
			"isCurrent": false,
			"relationshipType": "",
			"relatedEntity": {
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
			},
			"from": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			}
		}
	]
}
```
### subCategory
  Indicates and specifies further (where applicable) the sub-category (sub-sector) of Legal Entity identified by this LEI Record and already categorized by the EntityCategory.
* **Type:** EntitySubCategory
* **Example:**
```
{
	"subCategory": {}
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
			"types": [
				"LegalEntity"
			],
			"name": "GMF Prime Automobile Trust 2023-PP2",
			"diffbotUri": "http://diffbot.com/entity/E02M9Q4msMXawz8hLc-QVeA",
			"targetDiffbotId": "E02M9Q4msMXawz8hLc-QVeA",
			"type": "LegalEntity"
		},
		{
			"types": [
				"LegalEntity"
			],
			"name": "GM FINANCIAL AUTOMOBILE LEASING TRUST 2022-1",
			"diffbotUri": "http://diffbot.com/entity/E7-Egb5iSPpqa54ZY0BjFrg",
			"targetDiffbotId": "E7-Egb5iSPpqa54ZY0BjFrg",
			"type": "LegalEntity"
		},
		{
			"types": [
				"LegalEntity"
			],
			"name": "GM Financial Automobile Leasing Trust 2021-PP4",
			"diffbotUri": "http://diffbot.com/entity/EB0UAYra1NjCEXcnNHAJ8Sg",
			"targetDiffbotId": "EB0UAYra1NjCEXcnNHAJ8Sg",
			"type": "LegalEntity"
		}
	]
}
```
### successorEntity
  The surviving&#x2F;new Legal Entity which continues&#x2F;replaces this LEI registration, where applicable.
* **Type:** LinkedEntity
* **Example:**
```
{
	"successorEntity": {
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
### summary
  A short phrase designed to disambiguate entities with the same or similar name
* **Type:** String
* **Example:**
```
{
	"summary": ""
}
```
### to
  The date the Legal Entity ceased operation or was merged. This element SHALL be present if EntityExpirationReason is present, and omitted otherwise.
* **Type:** DDate
* **Example:**
```
{
	"to": {
		"str": "",
		"precision": 0,
		"timestamp": 0
	}
}
```
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": "LegalEntity"
}
```
### types
  All types of a Diffbot entity, including the value of the field &#39;type&#39;.
* **Type:** String
* **Example:**
```
{
	"types": [
		"LegalEntity"
	]
}
```
### ultimateParent
  The ultimate parent company of this subsidiary.
* **Type:** LinkedEntity
* **Example:**
```
{
	"ultimateParent": [
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
### wikipediaPageviews
  The number of views of its Wikipedia page of the last month if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviews": 0
}
```
### wikipediaPageviewsGrowth
  The month over month growth of wikipediaPageviews, where we count the increment of the number of page views of the second to last (full) month, compared with that of the last (full) month. if today was Aug 16th, 2022, the last complete month is July. So it refers to the increment from June to July, i.e., ( f(July) - f(June) ) ÷ f(June) x 100%. The f(.) only counts the first 28 days of a month, to avoid fluctuations between 31-days months like Jan and 28(29)-days months like Feb.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsGrowth": ""
}
```
### wikipediaPageviewsLastQuarter
  The number of views of its Wikipedia page of the last quarter if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviewsLastQuarter": 0
}
```
### wikipediaPageviewsLastQuarterGrowth
  The quarter over quarter growth of wikipediaPageviews, where we count the increment of the number of page views of the second to last (full) quarter, compared with that of the last (full) quarter. If today was Aug 16th, 2022, the last complete quarter is Q2 (April, May, June). So it refers to the increment from Q1 to Q2, i.e., ( f(Q2) - f(Q1) ) ÷ f(Q1) x 100%.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsLastQuarterGrowth": ""
}
```
### wikipediaPageviewsLastYear
  The number of views of its Wikipedia page of the last year if it exists.
* **Type:** Integer
* **Example:**
```
{
	"wikipediaPageviewsLastYear": 0
}
```
### wikipediaPageviewsLastYearGrowth
  The year over year growth of wikipediaPageviews, where we count the monthly-rolling increment of the year before last than the last year. It today was Aug 16th, 2022, it is computed by comparing the numbers from Aug 2021 to July 2022 and from Aug 2020 to July 2021, i.e., ( f(Aug 2021 to July 2022) - f(Aug 2020 to July 2021) ) ÷ f(Aug 2020 to July 2021) x 100%.
* **Type:** Float
* **Example:**
```
{
	"wikipediaPageviewsLastYearGrowth": ""
}
```
