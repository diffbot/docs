---
id: kg-ont-LegalEntity
title: Legal Entity
generatedBy: generateOntology.js
---

The Legal Entity type encompasses known legal entities of organizations. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Legal Entity Fields
* [bicCodes](#biccodes) 
* [category](#category) 
* [expirationReason](#expirationreason) 
* [from](#from) 
* [gleifId](#gleifid) 
* [isCurrent](#iscurrent) 
* [isinCodes](#isincodes) 
* [legalFormCode](#legalformcode) 
* [legalFormName](#legalformname) 
* [legalJurisdiction](#legaljurisdiction) 
* [location](#location) 
* [micCodes](#miccodes) 
* [registerName](#registername) 
* [registrationAuthority](#registrationauthority) 
* [relationships](#relationships) 
* [subCategory](#subcategory) 
* [successorEntity](#successorentity) 
* [to](#to) 

## Legal Entity Field Details
Note that certain longer field examples may be truncated for readability.

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
		"str": "",
		"precision": 0,
		"timestamp": 0
	}
}
```
### gleifId
  The Legal Entity Identifier (LEI) is a 20-character, alpha-numeric code based on the ISO 17442 standard developed by the International Organization for Standardization (ISO)
* **Type:** String
* **Example:**
```
{
	"gleifId": ""
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
	"legalFormCode": ""
}
```
### legalFormName
  The legal form of the Entity, taken from the ISO Entity Legal Form (ELF) code list maintained by GLEIF. The XML schema validates the format of EntityLegalFormCode codes but not the specific codes conforming to the ISO standard it requires.
* **Type:** String
* **Example:**
```
{
	"legalFormName": ""
}
```
### legalJurisdiction
  The jurisdiction of legal formation and registration of the Entity (and on which the Legalform data element is also dependent).
* **Type:** LinkedEntity
* **Example:**
```
{
	"legalJurisdiction": {
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
		"name": "",
		"targetDiffbotUri": ""
	}
}
```
### location
  The main location of the legal entity.
* **Type:** Location
* **Example:**
```
{
	"location": {
		"venue": "",
		"country": {
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
			"name": "",
			"targetDiffbotUri": ""
		},
		"address": "",
		"city": {
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
			"name": "",
			"targetDiffbotUri": ""
		},
		"subregion": {
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
			"name": "",
			"targetDiffbotUri": ""
		},
		"latitude": "",
		"precision": "",
		"postalCode": "",
		"surfaceForm": "",
		"poBox": "",
		"isCurrent": false,
		"isPrimary": false,
		"street": "",
		"metroArea": {
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
			"name": "",
			"targetDiffbotUri": ""
		},
		"region": {
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
			"name": "",
			"targetDiffbotUri": ""
		},
		"rawAdministrativeArea": {
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
			"name": "",
			"targetDiffbotUri": ""
		},
		"longitude": ""
	}
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
		"name": "",
		"targetDiffbotUri": ""
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
				"name": "",
				"targetDiffbotUri": ""
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
		"name": "",
		"targetDiffbotUri": ""
	}
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
