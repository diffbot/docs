---
id: kg-gsheets
title: Diffbot Google Sheets Add-on 
sidebar_label: Google Sheets Add-on
---

The Diffbot for Google Sheets Add-on allows you to leverage the power of the Diffbot Knowledge Graph from within Google Sheets. The Diffbot Knowledge Graph can help you quickly gather information from the public web, including information about People, Organizations, Products, Articles, and Discussions as well as enhance your existing data so that it will never be incomplete or out of date again.

## Installation

To Install the Diffbot Google Sheets Add-on, visit the [Diffbot for Sheets listing in the G Suite Marketplace](https://gsuite.google.com/marketplace/app/diffbot_for_sheets/457377215857):

![Installation page on G Suite Marketplace](/img/gsheets/gsheets1.png)

From here, click Install, choose the Google account that you’d like to use Diffbot from and grant Diffbot permissions. This is needed so that the Add-on can access your Google sheets spreadsheets, and connect to your Diffbot account. Diffbot will never share your personal data and the contents of your spreadsheet are never stored by Diffbot, only used to query the Knowledge Graph and fetch information from Diffbot to you.

![Oauth consent screen](/img/gsheets/gsheets2.png)

After installation, you will see this success message.  Diffbot for Google Sheets is now installed.

![Installation success](/img/gsheets/gsheets3.png)

## Quick Start

After installation, you will now be able to access Diffbot Knowledge Graph from any Google sheet. Let’s open a [blank Google Sheet](http://sheets.new).

![Login menu](/img/gsheets/gsheets4.png)

You will now need to log into Diffbot. Go to the Add-ons menu and select Diffbot for Sheets > Login to Diffbot.

Here you will need to enter your Diffbot API token. If you do not have a token, simply register for one at https://app.diffbot.com/get-started. After registering for an account, you will be able to view your token on the [My Profile Page](https://app.diffbot.com/diffbot-users/my-profile/token_details/).


![Set Diffbot Token](/img/gsheets/gsheets5.png)

Enter your token and hit OK. You are now ready to use Diffbot in your Google Sheet. 

Let’s find the homepage, location, and number of employees at Diffbot.

Pick any cell and enter the formula

    =DQL("type:Organization name:'Diffbot'", "name,location,employees")

![DQL prompt](/img/gsheets/gsheets6.png)

As you type "DQL", you will see a help prompt come up. DQL stands for the Diffbot Query Language, and is the syntax for querying the Diffbot Knowledge Graph.  You can learn more about DQL [here](/docs/en/dql-index). 

The DQL custom function takes in the DQL query, which is the way to ask the Diffbot Knowledge Graph a question, the fields, which specify which fields of those entities you would like to write into your spreadsheet cells, and an optional size, which determines how many entities will be returned. 

So this DQL function asks the Knowledge Graph for all entities of type Organization that are named Diffbot and specifies that we want the homepage, location, and number of employees. The multiple fields are separated by commas and will be returned as a row of three cells. Multiple entities would be returned in multiple rows. 

![DQL result](/img/gsheets/gsheets7.png)

You can see the result of running that function. Congrats! You've made your first Diffbot Knowledge Graph query.  Continue reading to learn about other custom functions.

## Commands

|DQL (dql_query, fields, size) | Queries the Diffbot Knowledge Graph using the Diffbot Query Language (DQL)|
|dql_query|The DQL query. Not that single-quotes should be used in the dql query to avoid conflicting with the double quotes that surround the dql query.|
|fields|The field of each entity to display. You can also provide multiple separated by commas. You can also use "count" to just return a count of entities that match the query. Optional.|
|size|The maximum number of entities to return. Optional.|

|ENHANCE_ORGANIZATION(field, name, url, location, description)|Enhances an organization using the Diffbot Knowledge Graph|
|field|The field of a Organization entity to return. You can also provide multiple separated by commas|
|name|The provided name of the organization. Optional.|
|url|The provided homepage of the organization. Optional.|
|location|The provided location of the organization. Optional.|
|description|A description of what the organization does. Optional.|

|ENHANCE_PERSON(field, name, email, employer, location, url)|Enhances a person using the Diffbot Knowledge Graph|
|field|The field of a Person entity to return. You can also provide multiple separated by commas|
|name|The provided name of the person. Optional.|
|email|The provided email of the person. Optional.|
|employer|The employer of the person. Optional.|
|location|The location of the person. Optional.|
|description|The bio of the person. Optional.|

|NLP_SENTIMENT(text)|Analyzes sentiment of the text with Diffbot's natural language service|
|text|The text to analyze|

|NLP_ENTITIES(text, fields, size)|Returns back the entities found in the text|
|text| The text to analyze|
|fields|The fields of each entity to return|
|size|The number of entities to find in the text. Optional, defaults to 1.|

## Field Expressions

The `DQL()`, `ENHANCE_PERSON()`, `ENHANCE_ORGANIZATION()`, and `NLP_ENTITIES()` functions all take a `fields` parameter, which determine which fields of the entity to show in your spreadsheet cells. 

In addition to requesting multiple comma-separated fields, you can also restrict which fields to return when there is a json array. For example,

    =DQL("type:Organization name:'Home Depot'", "yearlyRevenues[*].{year:2018 revenue.value}", 1)

Will return the revenue of Home Depot just for the year 2018. 

## Tips & Tricks

Google Sheets limits of the number of external connections that can be made from a sheet as well as the maximum number of simultaneous connections to external services. Need to paste values if they do not change often.