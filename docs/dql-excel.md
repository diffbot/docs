---
id: dql-excel
title: DQL Excel Add-In
sidebar_label: DQL Excel Add-In
---

This guide is meant to provide detailed information about how to download and use the Diffbot Excel Add-in to facilitate the use of the Diffbot Knowledge Graph data enrichment and search APIs from your desktop. You can also use the Add-In from an Office365 spreadsheet.

The Diffbot Excel Add-in is offered as a “production” beta service while we collect feedback on the features and functionality. This version of the Add-In provides support for organization profile search and data enrichment. 

_Please note: person profile search and data enrichment is not yet supported from within the Add-In, but it is planned for a future release._

## Description

Version 1.3.1.0 of the plug-in supports integration with the Diffbot Enhance API for data enrichment of organization firmographic profiles as well as integration with the Diffbot Knowledge Graph Search API in support of discovery of companies and articles from your desktop. 

How much data are we talking about?

Enrich or search organizational data with access to over 180M profiles from Diffbot’s Knowledge Graph. Start with a list of entities or a set of criteria. End with a deep dive into organizational data. Pull data on one or a hundred organizations with the click of a button. 

Search article data extracted from hundreds of thousands of unique online publications and news sites linked to Organization profiles in the Diffbot Knowledge Graph on a continuous basis, 24x7, 365.

How does it work?

Diffbot’s Knowledge Graph is compiled by machine learning-enabled web scrapers that turn unstructured data from around the web into a structured, queryable database.

The Knowledge Graph contains over 20 billion entities (organizations, locations, articles, key people, brands, and more), and over 2 trillion facts (revenue, price, skills, and more). All entities are contextually linked and sourced from public-facing documents around the web. A new Knowledge Graph is compiled every 3-5 days, ensuring data freshness and accuracy.

You can use Diffbot’s Excel Add-In to search or enrich organizational entries or search online articles without needing to leave your Excel workbook.

Define a search query using the Add-in query builder UI within an Excel spreadsheet on your desktop or in Office365. Or, provide one or more columns containing organization names or website domains and an additional column containing a unique identifier per row. Point Diffbot’s Excel Add-In to the location of your names and identifiers and toggle what fields of data you want to be returned. Upon execution, Diffbot’s Excel Add-In populates a new sheet that pairs the organizations and unique identifiers you provided with all available data attributes much more quickly and comprehensively than could be manually compiled.

## Installation

You will find the Diffbot Excel Add-in in the Microsoft store here: [https://appsource.microsoft.com/en-us/product/office/WA200001213](https://appsource.microsoft.com/en-us/product/office/WA200001213).

### Step By Step, Set-up Guide

You will start on the Diffbot Add-In page. To continue, click the GET IT NOW button in the left-hand column.

![Installation page on Microsoft Store](/img/dql/excel1.png)

Accept the Microsoft store terms to continue to the download page.

![MSFT Store T&C](/img/dql/excel2.png)

The Diffbot add-in works in Excel 2016 for Mac, Excel 2016 or later, Excel Online. Click the green button to Open in Excel on your desktop, or if you do not meet the criteria listed above, try using [Office Online](https://store.office.com/addinsinstallpage.aspx?assetid=WA200001213&rs=en-001&isWac=True).

![Office Online webshop page](/img/dql/excel3.png)

Microsoft will ask you to confirm you want to open the Excel app on your device and download the Diffbot Add-in. To confirm, click the button that reads Open the Microsoft Excel App. You may be asked to login to your Microsoft account to confirm the download

![Open Excel prompt](/img/dql/excel4.png)

Open any spreadsheet from the Excel app home screen and click ‘Insert’ in the spreadsheet menu. You will see options that include  ‘Get Add-ins’ and ‘My Add-ins’.

![Get Addins Option](/img/dql/excel5.png)

First click ‘My Add-ins’. If you do not see the Diffbot Add-in listed, then select recent add-ins from the ‘My Add-ins’ drop-down menu. You should see the Diffot Add-in in the window that is displayed. Select it and click the Add button at the bottom of the window.

![Adding a new Add-in](/img/dql/excel6.png)

If successful, you will be taken to the spreadsheet Home where you can tap the Diffbot icon on the far right to begin.

![](/img/dql/excel7.png)

If you do not see the Diffbot Add-in as an option under ‘My Add-ins’, then select, ‘Get Add-ins’. You will be taken to the Microsoft Add-in Marketplace where you will search for Diffbot in the search box in the upper left corner.

![](/img/dql/excel8.png)

Click the Add button next to the Diffbot Add-in.

![](/img/dql/excel9.png)

And confirm you agree to Terms and Conditions.

![](/img/dql/excel10.png)

You will be taken to your desktop Excel sheet and will see a confirmation that the Add-in was successful. The Diffbot robot icon, Diffy,  will appear in the right corner of the spreadsheet Home menu.

![](/img/dql/excel11.png)

If your desktop does not support Excel 2016 for Mac, Excel 2016 or later, Excel Online, try using [Office Online](https://store.office.com/addinsinstallpage.aspx?assetid=WA200001213&rs=en-001&isWac=True). You will follow a similar workflow but from within Office365 instead of from your desktop Excel app.

## Getting Started Guide

### Opening the Add-in

To start using the Add-in, we recommend that you first open a blank worksheet, confirm the Add-in is available from the Home menu of the sheet in the right-hand corner. If not, follow the steps listed above to Insert the Add-In. Once available tap the Diffbot icon to begin.

![](/img/dql/excel12.png)

You will see an option to Sign-in or Register for a Diffbot Trial Account. Tap the Sign-in/Register link to continue.

![](/img/dql/excel13.png)

If you have an account, enter your Diffbot token and tap the blue ‘OK’ button.

![](/img/dql/excel14.png)

If you are now logged in, skip the next section of this document called **Register for a Trial Account**. Continue with the section that follows titled **Search the Knowledge Graph**. If you do not have a Diffbot account, tap the word **_here_** on the Sign-in/register screen of the Add-In to register for an account.

### Register for a Trial Account

To register for a trial account, fill out the form presented, complete the captcha, and click submit. 

![](/img/dql/excel15.png)

For example:

![](/img/dql/excel16.png)

A confirmation screen will appear if your information was submitted successfully.

![](/img/dql/excel17.png)

Once you see the confirmation screen, check the email account you provided in the registration form for a Welcome Email from Diffbot. It will look like this:

![](/img/dql/excel18.png)

![](/img/dql/excel19.png)

You’ll need the KG Trial Developer token to Sign-in to the Add-In. The token will appear in the Welcome email like this: 

"To get started, you'll just need your kgtrial developer token --> 908a2961e751610b34a0f8b564040575"

Once you receive your developer token, close the confirmation screen, tap the Sign-in/Register link, enter your token, and click OK.

![](/img/dql/excel20.png)

You will now see the Home screen of the Diffbot Add-in.

![](/img/dql/excel21.png)

### Search the Knowledge Graph for Organizations

To search for organizations in the Diffbot Knowledge Graph from the Add-In, begin by tapping the Search button in the home screen after you’ve logged in. Tap Create Query to enter your filter criteria.

![](/img/dql/excel22.png)

![](/img/dql/excel23.png)

You have the option to specify one or more constraints to filter the results and return organizations that best meet your business criteria. As you define each attribute, the number of results dynamically updates to display how many entity matches will be returned given the inputs you’ve provided so far. _Please note: no more than 1000 results will be returned per query submitted regardless of how many entities match your criteria._

Here’s an example of a query defined to return software companies in the United States, founded after Jan 2019 that currently report no more than 500 employees:

![](/img/dql/excel24.png)

![](/img/dql/excel25.png)

The number of entities matching this query was 441 when the query was run. Match counts for the same query will vary with each build of the Diffbot Knowledge Graph (DKG). _Please note: new builds of the DKG are released every 3-5 days on average_. Click Done when you’ve finished defining your search query inputs. Then click the _Next button_ to constrain the attributes returned for each matching organization entity.

![](/img/dql/excel26.png)

By default, all Organization attributes will be populated with values for each matching Organization entity returned. You can specify which you do not want returned by unchecking the box next to that attribute in the Output details screen. _Please note: there will be one row per Organization returned with additional values added as new columns unless you specify that the data be returned as multiple rows._ 

![](/img/dql/excel27.png)

You can bound the number of values returned and will receive no more than 3 values per attribute by default. For example, see subsidiaries in the Add-in output configuration screen below:

![](/img/dql/excel28.png)

You can also decide the name of the sheet the output will be written to. By default it will be written to a sheet called **Organizations Output**. After finalizing the search results output format and scope, scroll to the bottom of the Output Details screen and click the **Execute** button. The results of your search will begin to flow into the sheet called **Organizations Output** or whatever sheet name you specified in the Output details screen.

When the data finishes loading the screen will still display “Please Wait“ but will indicate **Done. Time Elapsed...** in the white section of the status box as displayed below:

![](/img/dql/excel29.png)

Click the ‘x’ next to Please Wait to return to the Add-In to take other actions. Or, close the Add-In by tapping the Diffy Icon in the upper right corner of the screen of the Excel worksheet (see above) to view the resulting output in the sheet.

### Sample Organization Profile Data

Diffbot has supplied sample data to make it easy to familiarize users with the Diffbot Add-in data enrichment features and functions. The sample data is a list of the Fortune 1000 companies from some point in time in the past. We recommend including all attributes in your output in order to familiarize yourself with the abbreviated Diffbot Organization profile. For a more complete data profile, use the Diffbot URL provided to view the Diffbot Knowledge Graph Organization entity in the Diffbot Developer Dashboard. From there you can download a complete JSON profile record that contains a full set of known attributes for that Organization.

### Enhance an Organization Profile with Sample Data

To enrich organization profiles click the **Enhance** button from the Home screen of the Add-In or tap **Menu** and select **Enhance**.

![](/img/dql/excel30.png)

We recommend that you experiment with organization profile enrichment inputs and outputs before enriching your own data. To access Sample Data, scroll to the bottom of the Add-in Input screen and click the purple button labeled Create Sample Input Data.

![](/img/dql/excel31.png)

![](/img/dql/excel32.png)

You will see sample inputs flow into a sheet named **Input sheet - example** in three columns: ID, Organization Name, Organization URL (site root domain and top-level domain, only, e.g. mysite.com). _Please note: the example input sheet is locked and is only intended for demonstration purposes. You will not be able to edit the inputs._

You’ll note that the input columns in the example sheet are mapped to the Add-in Input screen, columns A-C. And, we’ve indicated the data has a header row.  (The Location attribute is not populated in the example sheet nor is it mapped to the Add-In Input screen. Diffbot Entity ID is treated as Location in this example). The sheet name used to submit data for enrichment is also identified in the Add-In Input screen. This information has all been automatically populated as part of the example data load. Click the Next button to customize the output returned. _Please note: any data enrichment tasks you run on your own data require you to map your worksheet name and columns to the Add-In Enhance Input screen manually. They will not populate automatically._ 

By default, all Organization attributes listed in the Output Details screen will be returned for each matched entity (those that are populated with data in the Diffbot Knowledge Graph). You can specify which attributes you do not want returned by unchecking the box next to that attribute. _Please note: there will be one row per Organization returned with additional values added as new columns unless you specify that the data be returned as multiple rows._ You can bound the values you want returned and will receive no more than 3 values per attribute by default. For example, see subsidiaries in the Add-in output configuration screens below

![](/img/dql/excel33.png)

![](/img/dql/excel34.png)

![](/img/dql/excel35.png)

After configuring your desired output, scroll to the bottom of the Output details screen in the Add-In and click the **Execute Sample Data** button to view the Sample output. _Please note: the request will not count against your account budget._

![](/img/dql/excel36.png)

The output of the Sample Data/Sample Data Execution flows into a new sheet called **Organization Outputs - example**. _Please note: If you run this process more than once and try to use an existing sheet, you will be asked to confirm that you wish to overwrite it with a new output. You will have to confirm the overwrite or cancel and name a new sheet to launch the enrichment task._ 

The dialog box in the Add-in will advise you of the progress of the task. Each row will come back as it completes. You can re-sort your data output using the ID column once the job finishes.

![](/img/dql/excel37.png)

You will need to click the ‘x’ in the Please Wait dialog box when the window indicates the task is Done. You can then tap the ‘x’ in the upper right corner of the Add-In screen to close the Add-In or tap the Diffy icon to close it and view the data in the output sheet.

![](/img/dql/excel38.png)

### Enriching Your Own Organization Data

The process for enriching your own organization profile data is similar to enriching the Sample dataset provided. Below is an example of a custom flow.

![](/img/dql/excel39.png)

_Please note: any data enrichment tasks you run on your own data require you to map your Sheet Name and columns to the Add-In Enhance Input screen manually. They will not populate automatically._ 

![](/img/dql/excel40.png)

By default the output is written to a sheet named Organization Output. _Please note: If you run this process more than once and do not modify the output sheet name, you will be asked to confirm that you wish to overwrite an existing sheet with a new output. You will have to confirm the overwrite or cancel and name a new output sheet to launch the enrichment task._ 

#### Add-in inputs for Organizations

To use the Diffbot Excel Add-In for data enrichment, you must include 

- a unique identifier per row in your input worksheet (Required) 

plus AT LEAST one of the following:

- Organization Name, or
- Website homepageUri (expressed as a site domain and top-level domain, only. For example, mysite.com or whisper.ai, NOT www.whisper.ai or blog.mysite.com UNLESS the business is hosted on a single subdomain ), or
- Diffbot Entity ID/URI (e.g. Cgqq17ZsBPZupmJesRVCKIg or http://diffbot.com/entity/Cgqq17ZsBPZupmJesRVCKIg)

You may also choose to constrain your match further by including

- Location (CITY - e.g. San Francisco, STATE or Province e.g. CA of headquarters or primary address)

In general, it is best to start with a unique ID and one attribute (Organization name, Organization website or Org Diffbot Entity ID) to maximize the match rate.

#### Add-in outputs for Organizations

The Add-In will return the following organization attribute details by default (when available in the Graph):

- Organization Name
- Estimated Number of Employees (based on company filings)
- Description of Organization
- Founding Date
- Social Media Profile URLs (LinkedIn, Crunchbase, Facebook)
- Websites (main site, blog, Wikipedia page)
- Location (organization headquarters location)
- Financial Data (yearly revenues, quarterly revenues, stock symbol, stock exchange, total investments, IPO date)
- List of Industries associated with that Organization
- Key People currently linked to/accountable for the organization (CEOs, Founders, Board Members)
- Links to in-depth Knowledge Graph Entity Pages (for organizations and key people)

### Knowledge Graph Organization Search Query Constraints

When you seek companies that match your business criteria, a search of the graph can produce a list of matching profiles. You have the option to constrain your search using:

- Estimated Number of Employees (based on company filings)
- Founding Date ranges
- Location (organization headquarters location) and/or
- Industry labels

Support for financial data constraints (annual revenues, total investments) is planned for a future version of the Add-In.

### Search the Knowledge Graph for Articles

To search for articles in the Diffbot Knowledge Graph from the Add-In, begin by tapping the Search button in the home screen after you’ve logged in. Then tap 'Create Query' and select 'Article' from the 'Data Type' Menu.

![](/img/dql/excel41.png)


You have the option to specify one or more constraints to filter the results and return articles that best meet your business criteria. As you define each attribute, the number of results dynamically updates to display how many entity matches will be returned given the inputs you’ve provided so far. _Please note: no more than 1000 results will be returned per query submitted regardless of how many entities match your criteria._

Here’s an example of a query defined to return articles tagged 'COVID19', published on or after April 15, 2020 that currently reference UCSF:

![](/img/dql/excel42.png)

![](/img/dql/excel43.png)

![](/img/dql/excel44.png)


The number of entities matching this query was 54 when the query was run. Match counts for the same query will vary overtime as new articles that match the criteria are added to the Graph. _Please note: complete builds of the DKG are released every 3-5 days on average. Article data is continuously added to the Graph 24x7, 365_. Click Done when you’ve finished defining your search query inputs. Then click the _Next button_ to constrain the attributes returned for each matching article entity.

By default, all Article attributes will be populated with values for each matching articles returned. You can specify which you do not want returned by unchecking the box next to that attribute in the Output details screen. _Please note: there will be one row per Article returned with additional values added as new columns unless you specify that the data be returned as multiple rows._ 

![](/img/dql/excel45.png)


You can bound the number of values returned and will receive no more than 3 values per attribute by default. For example, see Quotes in the Add-in output configuration screen below:

![](/img/dql/excel46.png)

You can also decide the name of the sheet the output will be written to. By default it will be written to a sheet called **Articles Output**. After finalizing the search results output format and scope, scroll to the bottom of the Output Details screen and click the **Execute** button. The results of your search will begin to flow into the sheet called **Articles Output** or whatever sheet name you specified in the Output details screen.

When the data finishes loading the screen will still display “Please Wait“ but will indicate **Done. Time Elapsed...** in the white section of the status box as displayed below:

![](/img/dql/excel47.png)

Click the ‘x’ next to Please Wait to return to the Add-In to take other actions. Or, close the Add-In by tapping the Diffy Icon in the upper right corner of the screen of the Excel worksheet (see above) to view the resulting output in the sheet.

#### Add-in outputs for Articles

The Add-In will return the following article attribute details by default (when available in the Graph):

- Website (root publisher or host name and pageUrl)
- Author (Name and Url)
- Title
- Dates (Publication date and Crawl date)
- Publisher (region and country)
- Language
- Tags (Generated from analysis of the extracted text)
- Quotes (Found in the article text and the person credited with each quote)
- Links to in-depth Knowledge Graph Entity Pages (for articles, authors and publishers)

### Knowledge Graph Article Search Query Constraints

When you seek articles that match your criteria, you have the option to constrain your search using:

- Tag Labels (Generated from analysis of the extracted text and linked to Organizations, Persons, Locations, or Topics in the graph)
- Keywords Found in the Article Title
- Keywords Found in the Text of the Article
- Language
- Date or Date Range
- Website (root publisher or host name)

Support for entityID tag constraints (DiffbotIDs for Organizations or other entities mentioned in an article) is planned for a future version of the Add-In.
