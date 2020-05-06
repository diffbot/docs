---
id: kg-search-quickstart
title: KG Search Quickstart
sidebar_label: KG Search Quickstart
---
> Let's start by searching the Knowledge Graph for **Educational Organizations**.

We use DQL (Diffbot Query Language) to search the Knowledge Graph. But you do not need to learn DQL to start searching. There are three ways in which you can search.

1. Query Builder that provides an intuitive UI that requires no knowledge of DQL
2. Visual Search that provides a visual editor for DQL
3. REST API that provide programatic way to search the KG

---

## Searching via Query Builder

The Visual Query Builder provides an intuitive UI to search the KG without any knowledge of DQL. It can be accessed from the Dashboard at [https://app.diffbot.com/search/](https://app.diffbot.com/search/).

> See [this tutorial](tutorials-new-dashboard-kgsearch) for a primer on using the KG Search dashboard.

1. Click the **Select a Type** dropdown and select an entity type that you would like to query for. For this example, choose **Organization**.

![Visual query builder](/img/dql/quickstart_visualbuilder_01.png)

2. Click the **Select a field** dropdown to choose **industries**. The dropdown next to it is populated with various industries that you can query on. Choose **Educational Organizations**.

![Visual query builder](/img/dql/quickstart_visualbuilder_02.png)

3. Click **Search**.

Your results will be returned in a paginated list as shown below. You can view more results by clicking on the **More →** button at the end of the results.

![Visual query builder](/img/dql/quickstart_visualbuilder_results.png)

4. Click on the name of a result entity and you will be taken to the entity page in the dashboard.

![Visual query builder](/img/dql/quickstart_visualbuilder_entity.png)

> Aside from this Table view, you can also view the data in List or Map views by clicking the appropriate icons at the top of the page:
> ![View options](/img/dql/quickstart_visualbuilder_views.png)

> See [this tutorial](tutorials-new-dashboard-kgsearch) for a primer on using the KG Search dashboard.

---

## Searching via Visual Search

While the Visual Query Builder provides an intuitive UI, the Visual Search UI allows you to query using DQL. Using DQL, you can write advanced criteria for searches. The Visual Search UI can be accessed from the Dashboard at [https://app.diffbot.com/search/?active_tab=query](https://app.diffbot.com/search/?active_tab=query).

> See [this page](kg-search-dqlreference) for a complete DQL Reference.

1. Go to the **Query** tab.

![Visual search](/img/dql/quickstart_search_01.png)

2. Enter the query `type:Organization industries:"Educational Organizations"` in the text field and click **Search**.

Your results will be returned in a paginated list as shown below. You can view more results by clicking on the **More →** button at the end of the results.

![Visual query builder](/img/dql/quickstart_visualbuilder_results.png)

4. Click on the name of a result entity and you will be taken to the entity page in the dashboard.

![Visual query builder](/img/dql/quickstart_visualbuilder_entity.png)

> This default view is known as the Table view, but the UI also provides a List view or Map view, which you can select by clicking the appropriate icons at the top of the page:
> ![View options](/img/dql/access6.png)

---

## Searching via API

The Search API provides a programatic way to search the KG. To use the search API, make an HTTP GET request to the following endpoint:

`https://kg.diffbot.com/kg/dql_endpoint?token=...&type=query&query=type:Organization+industries:"Educational+Organizations"`

Provide the following arguments with your request:

| Argument | Description |
| - | - |
| `token` | Your Diffbot developer token. |
| `query` | Your DQL search query as described above. Must be URL-encoded. |
| `from` | The position of the first result to return.  The default is 0, representing the first item in the results. |
| `size` | The maximum number of results to return. We recommend that this parameter not exceed 500, as this may result in some API calls failing.  The default value is 50. |


> See [this page](kg-search-dqlreference) for more query options and a complete DQL Reference.
