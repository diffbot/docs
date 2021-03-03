---
id: kg-accessing
title: Accessing Knowledge Graph
sidebar_label: Accessing Knowledge Graph
---

There are two ways in which you can use DQL to query the Knowledge Graph: the UI, and the API endpoint.

Diffbot provides a UI interface via our [Dashboard](https://app.diffbot.com/search/). This interface is designed to be accessible and user-friendly, and is suitable for users and researchers who do not have prior programming experience. The UI provides a form that can be used to submit DQL queries directly, and a query builder interface with various drop-down menus that allows you to build complex queries using text fields and drop-down boxes. For a primer on this dashboard, please see [this tutorial](tutorials-new-dashboard) and then refer to the rest of the content on this page.
 
Diffbot also provides a REST API that can be accessed programmatically, and this is more suitable for technical users with programming experience. Usage of the REST API is discussed further below in this document, under the heading ["Accessing the Knowledge Graph through the API"](#accessing-the-knowledge-graph-through-the-api).

## Accessing the Knowledge Graph via the Dashboard

In order to access the DQL/KG UI in the Dashboard, navigate to [https://app.diffbot.com/search/](https://app.diffbot.com/search/) in your browser, and log in to your Diffbot account if prompted to do so. Alternatively, you may reach the search page by logging into the Dashboard and clicking _Knowledge Graph > Search_ from the left-hand navigation menu.

You are then presented with the KG Search page. This page has 3 tabs -- Visual, Query, and API Call:

![Search page](/img/dql/access1.png)

By default, the _Visual_ tab is selected. This tab provides a simple non-technical interface for querying the Knowledge Graph without any previous knowledge of DQL.

The _Query_ tab allows you to enter a DQL query and browse the results in the Dashboard via a visual interface.

The _API Call_ tab provides a button which you may use to make a direct API call mirroring the query which you have performed via the UI, and providing the same set of results.

### Visual Query Builder

The _Visual_ tab (selected by default) provides an intuitive form that you can use to build queries without any knowledge of DQL.

To begin, click the drop-down box and select an entity type that you would like to query for.

![Visual query builder](/img/dql/access2.png)

After selecting an entity type, click the drop-down box that says “Select a field” to choose the field you would like to query against.  Some fields in the list have a `+` next to them, and hovering over these will expand subfields for that field which you can select.

![Visual query builder](/img/dql/access3.png)

Once you have selected a field, you can use the next drop-down to specify what kind of a match you are looking for.  If you have chosen a string field, you will be able to choose either “equals” or “contains”, specifying an exact (“strict”) or partial match, respectively.

Finally, enter the numeric or text value that you are querying for.

![Visual query builder](/img/dql/access4.png)

If you would like to add further search criteria to narrow your results, you can click _Add Condition_ and enter more search parameters.

Once you are satisfied with your query, click _Search_ to perform the search.  

#### Search Results

Your results will initially be returned in a paginated list, showing for an organization entity the company logo, company name, company website, and various profile/social network account links.

![Search results](/img/dql/access5.png)

You can click any of the social links to view the corresponding profile on the relevant website (for example, clicking a Twitter icon will take you to the Twitter page for that result).  Clicking the name of an entity will take you to that entity’s page in our dashboard, which provides a clean interface for viewing the data that would be returned from an API call.

This default view is known as the Table view, but the UI also provides a List view or Map view, which you can select by clicking the appropriate icons at the top of the page:

![View options](/img/dql/access6.png)

#### List View

The List view gives you a more-detailed preview of each entity than is provided by the default Table view.  For Organizations, the same fields are returned as in the default view, but also fields like Description, Industries, and Founders.

![List view](/img/dql/access7.png)

#### Map View

The Map view allows you to view the location of each entity on a world map, and allows you to see how the entire set of results is distributed geographically.  Clicking any of the entities will show that entity’s location on the map:

![List view](/img/dql/access8.png)

Clicking the i icon next to the name of any entity in Map View will take you to that entity’s Diffbot entity page in the dashboard.

#### Entity View

Clicking an entity anywhere in the KG search results will take you to that entity’s page in the Dashboard.  This page provides a detailed visual preview of all of the most important data items present in the entity’s JSON result.

![List view](/img/dql/access9.png)

All data items on the page that represent other entities (for example, the “Subsidiaries” links in the above image) can be clicked on, and doing so will take you to the corresponding Dashboard page for that entity.  This makes it easy to browse related entities to gain further insights about the entity in question.

At the top of the page there are links to download the entity’s data in JSON format or make an API call.  When downloading the entity JSON, you can select either “JSON” or “Extended JSON”.  If you select “Extended JSON”, the JSON will contain additional metadata about each terminal field value, including a “confidence score” (Diffbot’s level of certainty that the data is correct) and the origin from which the value was derived.

### Differences Between Data Displayed in the Dashboard and JSON

The data displayed in the Dashboard represents the results returned from more than one query executed against the graph. For example, the list of Persons employed by an Organization is produced by a separate search executed against the graph. Similarly, the list of Skills of persons employed by an Organization is another example of a separate DQL query whose output is featured in the Dashboard. The JSON files made available for download at the top of the Dashboard will not include data produced from secondary queries. 

An Entity page in the Dashboard may also show other information that cannot be obtained solely with Diffbot API calls and is not represented in the Entity JSON.  This data is typically gathered using third-party APIs.  For example, our Dashboard may show recent Tweets from an entity’s Twitter page.  For Organizations, we may also display various Technographic data.  For example, many Organizations in our Dashboard have a “Technologies Used” section describing technologies that are used on that organization’s website.

## Exporting to CSV

The Dashboard includes a CSV export feature that makes it easier to read and manipulate data exports in Microsoft Excel, Google Sheets, or similar spreadsheet software. Because of the nesting nature of JSON, data in CSV exports might not exactly reflect their representation in JSON. 

> ⚠️  Microsoft Excel has a 32,767 character limit per cell. Entities like Articles might break this character limit, which results in a malformed import. There is no known workaround to this for Excel. Google Sheets (character limit of 50,000) or Numbers on Macs (no character limit) can be used as alternatives.

## Accessing the Knowledge Graph through the API

To use the Knowledge Graph API, make an HTTP GET request to the following endpoint: `https://kg.diffbot.com/kg/dql_endpoint?token=...&type=...&query=...`

Provide the following arguments with your request:

| Argument | Description |
| - | - |
| `token` | Your Diffbot developer token. |
| `type` | The type of search to be performed. Currently only `query` is fully supported. |
| `query` | Your DQL search query as described above. Must be URL-encoded. |
| Optional Arguments | ~~~~~~~~~~~~~~~~~ |
| `from` | The position of the first result to return.  The default is 0, representing the first item in the results. |
| `size` | The maximum number of results to return. We recommend that this parameter not exceed 500, as this may result in some API calls failing.  The default value is 50. |
| `nonCanonicalFacts` | Return non-canonical facts. Default is 0 (no non-canonical facts). |

For example, the following query returns 2542 results: `type:Organization name:"mozart"`.

If we wanted to download all these results, this would be best done with six separate API calls, which would look something like this:

- https://kg.diffbot.com/kg/dql_endpoint?type=query&size=500&from=0&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}
- https://kg.diffbot.com/kg/dql_endpoint?type=query&size=500&from=500&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}
- https://kg.diffbot.com/kg/dql_endpoint?type=query&size=500&from=1000&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}
- https://kg.diffbot.com/kg/dql_endpoint?type=query&size=500&from=1500&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}
- https://kg.diffbot.com/kg/dql_endpoint?type=query&size=500&from=2000&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}
- https://kg.diffbot.com/kg/dql_endpoint?type=query&size=500&from=2500&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}

Notice in these consecutive calls that we are incrementing the `from` field by 500 on each call, while keeping the `size` field at 500.  So first, we start at position 0 and grab results 0 through 499.  Then we start at position 500 and grab results 500 through 999, and so on.

We could also use this alternative format for these queries:

- https://kg.diffbot.com/kg/dql_endpoint?type=query&from=0&to=499&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}
- https://kg.diffbot.com/kg/dql_endpoint?type=query&from=500&to=999&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}
- https://kg.diffbot.com/kg/dql_endpoint?type=query&from=1000&to=1499&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}
- https://kg.diffbot.com/kg/dql_endpoint?type=query&from=1500&to=1999&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}
- https://kg.diffbot.com/kg/dql_endpoint?type=query&from=2000&to=2499&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}
- https://kg.diffbot.com/kg/dql_endpoint?type=query&from=2500&to=2999&query=type%3AOrganization%20name%3A%22mozart%22&token={{SOMETOKEN}}

Note that these 6 queries are identical in functionality to those above.  Instead of specifying the starting point (`from`) and `size` of each query as we did in the first example, we have specified the start and end points (using the `from` and `to` parameters) of the results that should be returned.

When programmatically downloading an entire result set, you can write a loop to grab the results 500 at a time, and stop when your position has exceeded the total number of results (represented by the top-level field `hits` that is returned by each query).
