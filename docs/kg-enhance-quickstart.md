---
id: kg-enhance-quickstart
title: Enhance Quick Start
sidebar_label: Enhance Quick Start
---
This guide is meant to provide techniques for using Diffbot's Enhance (data enrichment) product using our visual interface. For API access, see our [Enhance API Reference](/enhance).

## Enriching Organization or Person Data In The Interface
From the home screen of the [Diffbot dashboard](https://app.diffbot.com) users may find our data enrichment offering in the sidebar or main content area listed as Enhance. 

Once you've arrived at the manual Enhance interface, users may select whether they would like to enrich a person or organization. 

![Enhance Page](/img/enhance-get-started/enhance-one.PNG)

At least one input field is required, and the greater the number of fields provided the higher likelihood that data will be successfully enriched. 

![Additional Options](/img/enhance-get-started/enhance-two.PNG)
After toggling additional options, users may alter several settings. These include: 

- **Toggling refresh mode** - refresh mode recrawls the origin pages for all facts associated with an entity refreshing data. 
- **Toggling search mode** - search mode searches across our web crawl data to seek out and merge in new facts that are not presently attached to the entity in question. 
- **Altering the match threshhold** - by default entities must match the input to be enriched by a threshold of .29 or above on a 0-1 scale. Lower the threshold to lower match criteria or raise the threshold to perform the inverse. 
- **Specifying the number of matches** - By default our enrichment seeks to match input with a single entity. Raise the match number to return multiple of the top-matching results. Within the visual interface multiple results will be shown in a results page. 

**Note:** Refresh and search mode increase credit usage compared to default setting Enhance jobs.

After executing an Enhance job, results may be clicked through to see visual Knowledge Graph entity pages. Additionally, results may be exported via JSON or CSV in the upper right corner of the results page. 

![Export Enhance Via CSV](/img/enhance-get-started/enhance-three.PNG)

While JSON export results will return all default fields, CSV export allows users to choose from a range of fields to export. A preview of results allows you to select which fields you would like and alter column names. 

The "for multi-value fields, select all the value" toggle specifies whether you want the latest entry or all entries for multi-value fields. An example of this could be a list of employers for a person data enrichment. 

## Enriching In Bulk Using Bulk Enhance

Typically you will have more than one entity you will want to manually enrich. A new bulk Enhance job can be started in the left sidebar under Enhance in the [Knowledge Graph Interface](https://app.diffbot.com).

First, name your bulk Enhance job so that you can return to it once it is completed. Completed or in-progress bulk Enhance jobs as well as a range of statistics about records processed, remaining time, and match rate can be viewed in the [All bulk Enhance Jobs](https://app.diffbot.com/enhance/bulk/) tab of the interface. 

Next you'll have the choice of uploading a csv or manually inputting the entities to enrich. For manual input, you'll need to follow the standard column order if supplying multiple fields. When supplying name input alone, commas may be skipped in input.  

**Standard Bulk Enhance Column Order:**
`Name, Location, Description, URL`

For CSV upload, you can provide custom ordered columns utilizing the same column names above or utilize our standard template. 

After toggling additional options, users may alter several settings. These include: 

- **Toggling refresh mode** - refresh mode recrawls the origin pages for all facts associated with an entity refreshing data. 
- **Toggling search mode** - search mode searches across our web crawl data to seek out and merge in new facts that are not presently attached to the entity in question. 
- **Altering the match threshhold** - by default entities must match the input to be enriched by a threshold of .32 or above on a 0-1 scale. Lower the threshold to lower match criteria or raise the threshold to perform the inverse. 
- **Specifying the number of matches** - By default our enrichment seeks to match input with a single entity. Raise the match number to return multiple of the top-matching results. Within the visual interface multiple results will be shown in a results page. 

**Note:** Refresh and search mode increase credit usage compared to default setting Enhance jobs.
![Bulk Enhance Job Started](/img/enhance-get-started/enhance-four.PNG)
Upon executing your bulk Enhance job, your job will enter the queue. During this time and throughout the execution of your enrichment you may check in on the status of your crawl including match rates and estimated time until completion in the overview, results, and stats tabs. Additionally you may leave the page and find a view of your ongoing or completed bulk Enhances in the sidebar under Enhance labelled "All Bulk Enhance Jobs." 

You can export your results in the "All Bulk Enhance Jobs" tab in JSON or CSV. 

![Export Enhance Via CSV](/img/enhance-get-started/enhance-three.PNG)

While JSON export results will return all default fields, CSV export allows users to choose from a range of fields to export. A preview of results allows you to select which fields you would like and alter column names. 

The "for multi-value fields, select all the value" toggle specifies whether you want the latest entry or all entries for multi-value fields. An example of this could be a list of employers for a person data enrichment. 



## Enriching A Spreadsheet Using Integrations
One benefit of utilizing Diffbot's Google Sheets or Excel integrations for CSV enrichment is that you can inject data directly into your working sheet. 
![Installing Diffbot For Sheets](/img/enhance-get-started/install-g-sheets.gif)
Enriching data using **Diffbot's Google Sheets Add-On** involves first installing the add-on, then logging in with your API token which can be found in the top right corner of the home screen of the [Knowledge Graph Interface](https://app.diffbot.com). 
![Enriching in Google Sheets](/img/enhance-get-started/g-sheets-function.gif)
Enrichment utilizes two Google Sheets functions. `=ENHANCE_ORGANIZATION` and `=ENHANCE_PERSON`.

For organizations, the following fields may be passed to the function.

- `field` - The field of an organization entity to return. Multiple fields may be supplied separated by commas. For a full list of fields attached to organizations, see our [organization ontology page](/docs/en/kg-ont-organization).
- `name` (optional) - a provided name for an organization.
- `url` (optional) - a provided homepage for the organization. 
- `location` (optional) - a provided location for the organization. 
- `description` (optional) - a provided description of what the organization does.  

For person enrichment the following fields may be passed to the function.

- `field` - The field of an organization entity to return. Multiple fields may be supplied separated by commas. For a full list of fields attached to organizations, see our [organization ontology page](/docs/en/kg-ont-person).
- `name` (optional) - a provided name for an organization.
- `email` (optional) - a provided email for the organization. 
- `employer` (optional) - a provided employer for the organization. 
- `location` (optional) - a provided location for the organization. 
- `description` (optional) - a provided description of what the organization does.  

**Tip:** for the field input, use absolute references to column header cells so you can apply your function to many cells at once by dragging (shown in prior GIF). 

Enriching data using **Diffbot's Excel Add-On** provides a way to feed your existing spreadsheet of organizations or people through a visual interface where you can map your input and choose which fields to output. 

Check out our [Diffbot Excel Add-In docs](/docs/en/dql-excel#enhance-an-organization-profile-with-sample-data) for more information on using Enhance in docs, or watch our walkthrough video below. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/lbG5fl5foD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>