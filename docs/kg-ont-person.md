---
id: kg-ont-person
title: Person
---

The person entity type encompasses all people known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](kg-quickstart).

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

### age
  A person&#39;s age.
* **Type:** Integer
* **Example:**
```
{
	"age": 0
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
	"articles": "[See Article]"
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
		"str": "",
		"precision": 0,
		"timestamp": 0
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
	"crunchbaseUri": ""
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
### educations
  Education history.
* **Type:** Education
* **Example:**
```
{
	"educations": [
		{
			"institution": "[See Organization]",
			"isCurrent": false,
			"hasDroppedOut": false,
			"major": "[See EducationMajorEntity]",
			"degree": "",
			"description": "",
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
			},
			"from": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"to": {
				"str": "",
				"precision": 0,
				"timestamp": 0
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
			"isCurrent": false,
			"description": "",
			"employer": "[See Organization]",
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
			},
			"from": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"categories": "[See Role]",
			"to": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"title": ""
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
	"facebookUri": ""
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
	"gender": ""
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
	"homepageUri": ""
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
	"interests": ""
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
	"linkedInUri": ""
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
### nameDetail
  Parts of the name (e.g., first name, last name, middle name).
* **Type:** NameDetail
* **Example:**
```
{
	"nameDetail": {
		"firstName": "",
		"lastName": "",
		"prefixes": "",
		"suffixes": "",
		"middleName": ""
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
	"religion": ""
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
	"skills": "[See Skill]"
}
```
### twitterUri
  Link to the Twitter profile of the Person entity
* **Type:** 
* **Example:**
```
{
	"twitterUri": ""
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
	"wikipediaUri": ""
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
