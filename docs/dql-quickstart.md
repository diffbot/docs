---
id: dql-quickstart
title: Getting Started With Diffbot's Knowledge Graph
sidebar_label: Knowledge Graph Quick Start
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/KdF5S_S4wy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Knowledge graphs are powering the next wave of intelligent applications. They’re fantastic complements to machine learning practices and market intelligence exercises. They’re naturally flexible, so they can accommodate the ever changing types of facts that exist “in the wild.” They’re built around entities and relationships, so they’re intuitive to the human mind. 

This can all sound alluring. But without a proper understanding of the fundamentals, it’s hard to get the most out of knowledge graphs for your specific use case. 

In this guide, we’ll work through how to get started with Diffbot’s Knowledge Graph. Our goal is to help you become competent at a wide range of Knowledge Graph uses by the end of two hours. And if you’re primarily interested in using the Knowledge Graph for one use case (e.g. news monitoring) we’ll provide ways to dive more deeply into all of our major uses. 


## What is a Knowledge Graph entity? 

<iframe width="560" height="315" src="https://www.youtube.com/embed/ft0BGYTnj-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Entities are central to knowledge graph offerings. They’re the “things” that populate the graph. And just like people, places, and things in the real world, entities have different characteristics as well as relationships to one another. 

Take for example, an organization entity within a knowledge graph. This entity may have characteristics like number of employees, funding rounds, industries, and locations. It also likely has relationships to other entities, potentially other organizations like subsidiaries, or people entities like employees. 

At a basic level, the distinction between ‘entities’ and database entries returns to the computing concept of a graph. A graph is a database structure which centers around nodes (entities) and edges (relationships). The resulting combination is an incredibly useful form of linked data that provides context for any given database constituent. 

One particularly useful component about knowledge graph entities is that they each have a unique identifier. This is useful for structuring knowledge as it provides a definitive resolution to each mentioned entity. For example, there may be many “John Doe’s” in the world, but within the Knowledge Graph they each garner their own unique identifier, leading to disambiguation useful for many tasks. 


## What is a Knowledge Graph ontology?

Ontologies describe the types of concepts (entities) and their relationships within a knowledge graph. This structure allows knowledge graphs to take a variety of input types and structure them across queryable entities and fields. 

At their most concrete level, knowledge graph ontologies can be accessed by seeing what fields you can toggle for each data type by visual or API-based search. For example, in Diffbot’s Knowledge Graph organization type entities have a field titled ‘industries.’ This is not the case for other entity types (e.g. articles, products, etc.). 

Two major benefits of knowledge graph ontologies include the fact that **ontologies for knowledge graphs are flexible, and they include unique identifiers for each entity**. The flexibility of ontologies is important because the types of facts we care about in the world change over time. While relational databases are similar to knowledge graphs due to their focus on relationships, they aren’t easily changed over time. This is a major disadvantage when compared to knowledge graphs. 

Unique identifiers are crucial for a great deal of knowledge graph usability. Coreference resolution is the process of determining whether entities referenced with the same name are distinct or separate (e.g. ‘John Doe’). In automated knowledge graphs, the performance of systems ensuring coreference resolution – and thus factual, unique identifiers – is crucial.

With the emergence of progressively quicker data lifecycles, the need to mold ontologies “on the fly” as well as correctly disambiguate new data sources is key. 

As you work through learning Diffbot's visual interface or Diffbot Query Language below, you may want to consult our [ontology reference](https://docs.diffbot.com/docs/en/kg-ont-diffbotentity), to see the full range of fields available for each entity type. 


## What sort of data is in Diffbot’s Knowledge Graph? 

In one sense, all of the data in the Knowledge Graph is “web data.” 

Diffbot’s Knowledge Graph sources data from web-wide crawls. Using AI-enabled web scrapers we can determine and ingest facts from across the web without needing to know the structure of pages in advance. 

On another level, Diffbot’s data is a large step beyond “web data” due to it’s structure, scale, linkages, and additional fields that are computed on top of web-based fact extraction. 

In particular we can look at three components of Diffbot’s Knowledge Graph data: 



* Entities
* Fact Types
* Data Provenance

**Entities** within Diffbot’s Knowledge Graph come in one of 15 “types” with more added routinely. At present, the types of entities one can return from the Knowledge Graph include: 



* Article Entities
* Organization Entities
* Person Entities
* Product Entities
* CreativeWork Entities
* Discussion Entities
* Event Entities
* Image Entities
* Intangible Entities
* Job Entities
* Miscellaneous Entities
* Place Entities
* Post Entities
* Skill Entities
* And Video Entities

In total, our Knowledge Graph has billions of entities with the largest clusters in our organization index, article index, and person index. 

**Fact Types** within Diffbot’s Knowledge Graph depend on which entities they’re connected with. For example, an organization entity may have a fact type of “funding round.” A person entity may have a fact type of “current employment.” And an article entity may have a fact type of “sentiment” or “topical tags.” Presently close to 200 billion facts are present in the Knowledge Graph. 

In general, facts within the Knowledge Graph work in two ways, they either describe an aspect of a given entity, or they describe a relationship between two entities. For example, an organization can have facts related to a funding round (amount, when it occurred, type of round). Alternatively, an organization can have facts related to subsidiaries (e.g. other organization entities). 

Fact types of a given entity are also known as facets. We’ll look at filtering by facets – a technique that can give you a summary view of a given fact type among a set of entities – later in this guide. The ability to approach your dataset of interest from constituent fact types (faceting) as well as by searching through entities as a whole are key components of a quality knowledge graph search function.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/gotLKDmI4-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Data provenance** is available for all ~200 billion facts within the Knowledge Graph. These records of all sources and transformations of data are crucial when establishing processes including validating data, debugging faulty data, regeneration of lost or corrupted data, data dependency analysis, auditing, and data compliance measures. 

Within Knowledge Graph data, provenance is primarily of two main sources: extracted from the public web, or computed based on data from the public web. 

When tracking down provenance in Knowledge Graph data, looking at extended results surfaces a range of values attached to all facts. 



* The **origin** value specifies where a given fact was extracted on the web. 
* The **timestamp** value specifies when a fact was extracted from a web page. This can be useful for determining the freshness of a given fact. 
* The **precision** value specifies what level of granularity a fact represents (e.g. for a date: MM-DD-YYYY, or YYYY, or MM-DD–YYYY:SS). This is important for operations around locations, times, and numerical values that may require a certain specificity. 
* The **confidence** value specifies the probability that the fact is true. Confidence scores range between 0 and 1. Presently all facts with a confidence score of less than .5 are discarded from the Knowledge Graph. Multiple origins from reputable sources help to establish greater confidence scores. 

Additionally, some fields within the Knowledge Graph are inferred or computed off of data that is crawled. One example of this is our estimated revenue value. This field is available for organization entities who are not required to file public revenue data. In this case we have utilized machine learning to estimate the revenue of private organizations. The data provenance-related value of **origin** in this case will be labelled “inference.” 


## Prerequisites to Using the Knowledge Graph

Knowledge Graph access is included in all tiers of our subscription [plans](https://www.diffbot.com/pricing), as well as in our [two-week free trial](https://app.diffbot.com/get-started). Every tier including our free trial includes enough credits to perform substantial analysis within the Knowledge Graph, though high-throughput operations such as large machine learning training data exports or the powering of intelligent applications may need higher tier access. 

Querying the Knowledge Graph through an API call or one of our integrations (Excel, Google Sheets, Tableau, Power BI, Airtable) will require access to your token. This may be found in your account page of the Knowledge Graph interface. 

For exploration in our visual interface, all you need is a free or paid account and to login to the Knowledge Graph. 


## Using the Visual Query Editor

The easiest way to get started with exploring the Knowledge Graph is utilize the visual query editor. The visual query editor lets you filter Knowledge Graph entities by a range of fact types, view individual entity pages within results, as well as export up to all data returned from a Knowledge Graph query. 

Of note is that some more advanced query types cannot be accomplished in the visual query editor. But for many initial explorations of data, as well as the purpose of familiarizing yourself with the Knowledge Graph, the visual query editor is a good starting point. 

All Knowledge Graph queries begin by selecting an entity type. 


![Entity Type](/img/kg-get-started/choose_entity.gif)


Based on the type of entity, a different selection of fields (or fact types) may be chosen from. 



![Fact Types](/img/kg-get-started/fact_types.gif)


As you add conditions to your search filter, you may notice a line of text populating to the right side of the interface. This is the Diffbot Query Language version of your query. We’ll go over the basics of Diffbot Query Language in a later section of this guide, and use it for some more advanced searches. But for now just note that as you’re initially working through the search interface you can begin to familiarize yourself with the syntax. Both Diffbot Query Language and the visual query editor can be used to return many common query types. 



![Preview Query](/img/kg-get-started/preview_query.gif)


Once you’ve edited the query to your satisfaction, simply click search to return all entities that match your filters. 



![Search Results](/img/kg-get-started/search.gif)


We’ll cover techniques to survey where data coverage is strongest later in this guide. But a good rule of thumb is that if you get too many or too few results returned, try toggling more or less filters. 

Within the dashboard, each entity has a it’s own summary page. Just note that this isn’t all of the data within the Knowledge Graph, but  many of our most popular fields for initial exploration. 

Fields included in each entity page will vary depending on entity type. Organization entity pages  may include fields such as: 



* Basic firmographics
* Subsidiaries
* Links to social media and websites
* Important individuals
* Funding Rounds
* Recent News Mentions
* Social Media Feed
* Industries
* And More…

Article entity pages may include fields such as: 



* Publisher
* Date
* Author
* Sentiment
* Topical Tags
* Full Article Text
* Images

A key difference between our Knowledge Graph search and other search is that while our information is web-derived, it’s structured so you can pull into a program of your choosing, filter by a wide set of fields, or build an intelligent application around it. Additionally, all data within the Knowledge Graph is exportable (manually or via API). If you’re following along and would like to jump right to exporting data, check out our section “exporting data from the Knowledge Graph.” 

When working through the visual interface, a key aspect of knowledge graphs is on view. Namely, that knowledge graphs are example of linked data. While our Knowledge Graph data may come from all over the web, once it’s consolidated into entities related entities are often just a click away. 



![Linked Data](/img/kg-get-started/linked_data.gif)


From within an organization entity page, click through to see employees, or other competitors in the same industry, or companies similar across all fields (our SimilarTo value). 


## Diffbot Query Language (DQL) Basics

Diffbot Query Language is a syntax for precisely communicating what we want returned from the Knowledge Graph. While query languages may be familiar to many developers and data team members, non-technical users need not be scared by the jargon. With a few “rules of thumb” and access to our additional resources, you’ll be crafting insight-producing queries in no time!

First things first, where do you enter a DQL query? You can pass queries to the Knowledge Graph via API, the “query” tab in the visual interface, or a number of places in our integrations. 




![First Query](/img/kg-get-started/first_query.gif)
 
As you may have noticed in the last section about the visual query editor, all queries begin with the type of entity you want returned. The syntax here is simply `type:` followed by the name of the entity type. 

To see how many of each entity type are available simply search for all entities of a given type with no additional filters. 

It’s unlikely you’ll want the millions (or billions) of entities of each type. So next you’ll want to add a filter. A great way to explore which filters are available is by looking through the visual query builder. Toggle selections within the visual query builder to see a preview of what the DQL query looks like to the right of the screen. Once you’ve verified the syntax and that a given portion of a  query returns data, continue mining in! 
 
Note that filters refer to types of facts that the Knowledge Graph collects. And therefore filters depend on what type of entity you’re searching through (e.g. an article may hold a `sentiment` field, while an organization may hold a `funding round` field). 

As we mentioned in the visual query editor section, there are some queries we can make via DQL that we can’t complete within the visual query editor. These queries tend to involve one of three operation types: **faceting**, **nested queries**, and **utility statements**. 


### Facet Queries
<iframe width="560" height="315" src="https://www.youtube.com/embed/ii3CNboQ2YI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Faceting** within the Knowledge Graph involves returning a summary view of one field across all entities returned by a search. It’s a great technique for jumping from underlying data to an observation or to quickly assess the distribution of one data across a range of entities. 

At its simplest, faceting can be achieved by adding “facet:” followed by the field you would like to facet by to the end of your query. This will provide a summary view of the field you pass to the facet call for all entities that would have been returned by the query before the facet call. 



![Preview Query](/img/kg-get-started/facet.gif)


The bins through which the facet query aggregates results will be automatically generated. If you’re looking for specific ranges in your facet results, you can specify these within square brackets prior to the colon after facet. 



`type:Organization facet['palo alto','menlo park','redwood city']:location.city.name`


In the above example we ask to return all entities and then provide a facet view of cities in which they’re located. In square brackets we note we only want to see facet results for these three values: Palo Alto, Menlo Park, and Redwood City. 

A range of quick valuable observations are possible using bounded facet responses. For example, you can quickly survey whether there are more AI companies in London or New York. 


`type:Organization industries:"Artificial Intelligence Companies" facet["London","New York City"]:locations.city.name`

When bounding facet responses by a field that is numerical or date based, be sure to check out the nuances of the syntax. For precise number matches, numbers can be included directly within square brackets. Separate number ranges with a colon. 

A look at how to bound a facet query by numerical values can be seen below where we compare the number of natural language processing companies with &lt;20 employees to those with between 500 and 1000. 

`type:Organization industries:"Natural Language Processing Companies" facet[0:20,500:1000]:nbEmployeesMax`

Try out faceting on your own to return some of the following search results: 



* Number of articles about solar power by publisher ([View in Knowledge Graph](https://app.diffbot.com/search/?query=type%3AArticle+tags%3A%22Solar+Power%22+facet%3AsiteName&from=0&size=50&output_format=&kgversion=))([Video Walkthrough](https://www.youtube.com/watch?v=dZSkXyk-p4c))
* The most recirculated quotes by Joe Biden in the last 30 days ([View in Knowledge Graph](https://app.diffbot.com/search/?query=type%3AArticle+date%3C30d+quotes.speaker%3A%22Joe+Biden%22+facet%3Aquotes.quote&from=0&size=50&output_format=&kgversion=))([Video Walkthrough](https://www.youtube.com/watch?v=82VSvx-9-Fo))

Try out bounding facets to return the following search results: 



* Funding raised by AI companies by &lt;$1MM and $1MM-$5MM ([View in Knowledge Graph](https://app.diffbot.com/search/?query=type%3AOrganization+industries%3A%22Artificial+Intelligence+Companies%22+facet%5B0%3A1000000%2C1000000%3A5000000%5D%3Ainvestments.amount.value&from=0&size=50&output_format=&kgversion=))([Video Walkthrough](https://www.youtube.com/watch?v=auxnkGjn6fo))


### Nested Queries

**Nested queries** are a second invaluable DQL operator that cannot be utilized within the visual query editor. Nested queries take one filter within a DQL query and return entities that match multiple conditions related to this filter. If you’ve played around with DQL much, you’ve likely noticed that many filters have sub-filters separated by a period. Nested queries are placed before one of these periods to note that multiple subfields must be true. Nested queries occur between two curly braces. 

There are two ways in which nested queries are commonly utilized. First, to ensure that a value is current (for example, a person entity who _presently _works at Facebook). 

In this case, person entities have employments values. But these values include their entire work history. Market intelligence, sales, and recruiting use cases often care about current employment statuses. 

To obtain a list of person entities who presently work at Facebook we can utilize the employments.employer.name field in tandem with the isCurrent field inside of a nested query. 

`type:Person employments.{employer.name:"Facebook" isCurrent:true}`

Note that nested queries inside of nested queries are also possible. Though it may become seemingly complex prior to greater experience with DQL. 

Try out a nested query of your own to return one of the following subsets of entities: 



* Past (non-current) employees at Google ([View in Knowledge Graph](https://app.diffbot.com/search/?query=type%3APerson+employments.%7Bemployer.name%3A%22Google%22+isCurrent%3Afalse%7D+&from=0&size=25&output_format=&kgversion=))([Video Walkthrough](https://youtu.be/m8RpF5ztA_Y))
* AI companies with Female CEOs who live in San Francisco ([View in Knowledge Graph](https://app.diffbot.com/search/?query=type%3AOrganization+industries%3A%22Artificial+Intelligence+Companies%22+ceo.%7Blocations.city.name%3A%22San+Francisco%22+gender%3Afemale%7D&from=0&size=50&output_format=&kgversion=))([Video Walkthrough](https://www.youtube.com/watch?v=9nnfGLYkTTI))

Combine two nested queries to return the following: 



* Indiana University Alumni who work at dentistry clinics ([View in Knowledge Graph](https://app.diffbot.com/search/?query=type%3APerson+educations.%7BisCurrent%3Afalse+institution.name%3A%22Indiana+University%22%7D+employments.%7B+isCurrent%3Atrue+employer.descriptors%3A%22dentist%22+%7D&from=0&size=50&output_format=&kgversion=))([Video Walkthrough](https://www.youtube.com/watch?v=jEtYBbVsigI))

Combine a nested query with a facet query to return the following: 



* A list of the top employers of current data scientists ([View in Knowledge Graph](https://app.diffbot.com/search/?query=type%3APerson+employments.%7Btitle%3A%22data+scientist%22+isCurrent%3Atrue%7D+facet%3Aemployments.employer.name&from=0&size=25&output_format=&kgversion=))([Video Walkthrough](https://youtu.be/DdhJ-bh9r-U))


### Utility Statements

Finally, **utility statements** can be used to specify a range of or lack of a set of fields within a set of entities. Most of these statements operate as they sound: “or,” “min/max,” “has,” “not,” “near,” and “similarTo.” 

The **or** operator lets you specify multiple inputs to a given filter. Entities that match any of the inputs as well as the rest of the query will be returned. Common uses for the or operator include passing in multiple related job titles, locations of interest, or a list of organizations. These portions of queries could look like the following: 

`employments.{title:or("data scientist", "analyst", "data science", "business intelligence")`

`locations.city.name:or(“London”,”New York City”)`

`investors.name:or("AIG","CNA Financial","Manulife","Munich Re","Swiss Re")` 

You can even pass entire portions of a query through an or statement. In the below example we want AI companies whose CEO’s live in San Francisco and previously worked at Google, or whose CEO’s live in London and attended Oxford University.  
 
`type:Organization or(ceo.{location.city.name:"San Francisco" employments.{employer.name:"Google" isCurrent:false}}, ceo.{location.city.name:"London" educations.institution.name:"Oxford University"})`

The **min/max** operators work on numeric fields and specify that entities returned should meet a minimum or maximum threshold for this value. There are a range of numeric fields within the Knowledge Graph including revenue, number of employees, capitalization, number of locations, number of collections, sentiment, net worth, price, among others. 

The syntax for min and max is simple. Both are simply prepended to a field name that is numerical. For example max:revenue.value:50000. 

The **has** operator is useful for returning entities who have a value in a given field. For example, if you’re prospecting startups, you may want to only return organizations who have funding rounds. The syntax for has is similar to min and max and can be seen as follows: has:investments. 

The **not** operator is useful for segmenting a group of otherwise returned entities. This is a particularly useful operator as you can “cut out” results that may not be what you’re looking for. For example, say you are looking for a list of all educational institutions in the state of California except for those that are located in Los Angeles. That query could look like the following: 

`type:Organization location.region.name:"California" industries:"Educational Institutions" not(location.city.name:"Los Angeles")` 

Joining the not operator with a facet query can allow you to remove outliers and see relative differences. For example, let’s take a look at where educational institutions are located in Georgia outside of Atlanta (by far the largest city). 


![Using Not Parameter](/img/kg-get-started/not.png)


The **near** operator – as you may expect – deals with location data. The Knowledge Graph contains precise longitude and latitude data on over 182 million organizations as well as less precise city or region-level data on the remaining organizations. This enables the ability to query for organizations within a radius with great precision.  
 
By default the near operator provides all entities within a 15km radius. Though an optional distance in metric or imperial distance measurements can be provided. 

The near operator can additionally accept an unique entity ID or the name of an administrative area (e.g. a city) and will default to the city with the most importance within the Knowledge Graph. 

An example of a near query that utilizes a custom distance as well as an entity ID as a point of reference can be seen below: 

`type:Organization name:"Bank" near[10mi](name:"Springfield")`

The **similarTo** operator is a powerful new addition to the Knowledge Graph wherein each entity has a similarTo score for every other entity in the Knowledge Graph. Uses include market intelligence, competitive analysis, sales prospecting, account-based marketing, and news monitoring. To find entities most similar to others, start by specifying the type of entity you want returned, then pass in an ID (or IDs) or name. By default similarTo queries return the 25 most similar organizations. 

Syntax for a similarTo query with one organization ID as an input is as follows: 

`type:Organization similarTo(id:"ExADb18D6MAmunRrlVELe8A")`

**Unique Identifiers** are a core benefit of graph data structures. They support disambiguation between similarly named entities. For example, “John Doe” could refer to many people in the world. If a database relies on a name to identify an entity, this would lead to merging in fallacious data about multiple people. 

In the case of knowledge graphs, each entity has a unique identifier, so the “John Does” of the world can be accurately represented as separate entities in the graph. 

Within Diffbot’s Knowledge Graph, the unique identifier – of DiffbotUri – for each entity can be found when exporting data in CSV or JSON, as well as in the URL for the entity page. Each entity URL utilize the same structure starting with "https://app.diffbot.com/entity/". The alphanumerical characters past this portion of the URL are the unique identifier for that entity. 

Example DiffbotURIs: 

`https://app.diffbot.com/entity/EYX1i02YVPsuT7fPLUYgRhQ`

`https://app.diffbot.com/entity/EIsFKrN_ZNLSWsvxdQfWutQ`

Why are DiffbotURIs important? Because they let you disambiguate between similarly or identically named entities within the Knowledge Graph. If you have a list of organizations that you want to query against, using DiffbotURIs in an “or” statement is one of the best ways to return results that only relate to these organizations. 

For example, to obtain all subsidiaries of FAANG companies, we could pass in Facebook (err, Meta), Apple, Amazon, Netflix, and Alphabet. 

`type:Organization parentCompany.id:or("EU2HJUnMcNoWE3nR1cGBcZg","EHb0_0NEcMwyY8b083taTTw", "Ebm4UJoSuP1esww1rsLvu9g","E9QcCMms9Ozy69yX2_IKUKw","EUFq-3WlpNsq0pvfUYWXOEA")`

This form of querying can also be useful when you don’t want to filter around entire industries, but rather a collection of organizations that you have identified. 


## Exporting Data From The Knowledge Graph

Once you’ve found a set of entities that you’re interested in evaluating further, it often makes sense to export Knowledge Graph data. This can occur through any of our integrations, downloading a CSV or JSON, or obtaining data programmatically via our Knowledge Graph API. 

The ability to view, export, and utilize all underlying data is unique to Diffbot’s Knowledge Graph. Other web-wide crawling entities don’t release their underlying Knowledge Graph data, which is severely limiting for use cases including machine learning, data science, market intelligence, news monitoring, or powering your own intelligence application. 

To manually **download a dataset** from the Knowledge Graph, head to your results page and look to the top right corner of the page. Select “CSV” or “API Call.” 



![Download CSV](/img/kg-get-started/csv.gif)


In the CSV export function, you can determine which fields you would like to export as well as how many entities you would like to include. 



![Choose CSV Fields](/img/kg-get-started/choose_csv_fields.gif)


JSON is the default format for data returned via API calls. But you can also download one-off datasets by clicking the “API Call” button in the top right of the results screen. While JSON typically requires some analyst or coding skills to parse, this data structure is inherently better for representing nested data, meaning some fields may be easier to wrangle in this format. 


## Using the Knowledge Graph for Market Intelligence

At its simplest, market intelligence is the analysis and generation of insights about participants in a market. This information can be valuable for pricing, supply chain analysis, creating partnerships, triggering sales events, finding new markets and opportunities, and remaining competitive within your current sectors. 

Today, sources for market intelligence are primarily found online. The issue, however, is that signals can be in myriad formats as well as spread across the web. The ability to track even somewhat complex or wide-ranging markets can require significant time and resources, and can’t typically be scaled except for the hiring of additional team members. 

AI-enabled fact accumulation, as is provided by the Knowledge Graph, can be a great source of automated market intelligence. Knowledge graphs in particular are well suited for market intelligence due to a few facts: 



* Knowledge graphs provide disambiguation of similarly named entities through unique identifiers
* Knowledge graphs can easily add new fact types to entities as important new types of information emerge
* And knowledge graphs 

While the Knowledge Graph alone holds billions of market intel-related facts, we commonly see multiple Diffbot structured web data products combined for market intelligence solutions. For example, firmographic data may be pulled from the Knowledge Graph. Meanwhile custom web crawling via [Crawlbot](https://www.diffbot.com/products/crawl) may extract data from a collection of sites many times a day. This extracted crawl data may then be passed into our [Natural Language API](https://www.diffbot.com/products/natural-language) with the use of custom keywords to track fact types that you are most interested in. 

Below is a demo of a sample interface that utilizes multiple Diffbot structured data products. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/tNbFUzbUY_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For market intelligence the Knowledge Graph can supply, three entity types are primarily of interest: **organization entities**, **article entities**, and **person entities**. In the remainder of this section we’ll  jump into some of the most useful fields and query types for gaining insight into orgs, people, and market intel-related news. 

Organization entities are comprised of a range of fields of interest for market intelligence. **A large selection of our fields are facts extracted directly from the web.** And these are the types of fields that you may have experience with in other firmographic search engines. These may include values like funding rounds, employee counts, locations, and industries. Because we source these facts from web-wide crawls, our Knowledge Graph often picks up on additional facts as they’re expressed. 

For example, when a hundred new employees update their online bios, we extract this connection and add 100 to the nbEmployees field for an organization in the Knowledge Graph. When a corporate site adds a new office address on their website, we extract this fact to update or add to their existing location fields. 

**A second subset of fields attached to organizations are those that we’ve been able to compute using machine learning.** These fields include things like estimated revenue (for companies that don’t have to publicly disclose their revenue) and how similar two organizations are across all of their fields. 

Many of the techniques most useful for market intelligence use cases include query types we’ve already covered in this guide. These include: 



* The use of facet queries to get a survey of data distribution
    * Segment an organization by job function
    * See what industries orgs of interest are involved in
    * Look for commonalities or outliers in competitors, suppliers, etc. 
* The use of similarTo to extrapolate from organizations of interest
* Tracking of recent hirings or layoffs
* New subsidiaries or mergers and acquisitions
* Tracking news mentions of organizations
* Technographic shifts
* Among others

A second useful entity type for market intelligence centers around **article entities**. Article entities provide a structured route to gaining meaning from originally unstructured text at scale. Fields directly extracted from the web include the raw text of the article, author, title, date, publisher, comments, and relevant links. Additionally, a range of values relying on inference and natural language processing are supplied. These fields include topical tags, document and tag-level sentiment, the extraction of quotes, and the identification of entities that are mentioned in the text.

While we’ll deep dive into article entity data more in our next section on news monitoring, there are a range of article-related queries that are particularly useful for market intelligence. 



* Return articles tagged with an organization as a topical tag
* Look for the most circulated quotes within a specific industry
* See if news mentions of an organization vary by language or location
* Create a news feed about key events in your industry
* Among others

Finally, **person entities** can be useful for a range of market intelligence use cases. Hiring, talent distribution, and new locations for organizations can be discerned through fields that link person and organization entities. Additionally, the skill and educational history-related fields can help to infer where market players are placing their attention. 

To jump to a list of example queries for market intelligence, see our “Catalog of Useful Knowledge Graph Searches” section. 


## Using the Knowledge Graph for News Monitoring

While our article index is several times the size of Google News’ article index, our search differs from other article searches. Diffbot Knowledge Graph search does not return articles that it thinks will match your intent. Rather, it displays articles that match precisely what you’ve inputted. This means that you may get search results that don’t return as much data as you may think should be returned. 

To this end, individuals performing article searches should “step towards” their intended datasets. Start broader than you think you need to go, and add parameters until you have the dataset you’re looking for. 

Some particularly useful news monitoring queries include: 



* Querying for article coverage across languages (topical tags are translated to English)
* Tracking sentiment around topics, organizations, people, or products
* Analyzing discussion data
* Finding the most circulated quotes related to a topic
* Surfacing articles about key events among competitors, regulatory bodies, partners and more

Additionally, many users of Knowledge Graph news monitoring data will want to track a collection of documents for custom keywords (relationships, entities, or fact types). This can be accomplished by passing the full text of articles or discussions to Diffbot’s Natural Language API. While we’re expanding the range of custom fact types we track all the time. At times it can be advantageous to add custom keywords of your own. 

To jump to a list of example queries for news monitoring, see our “Catalog of Useful Knowledge Graph Searches” section. 


## Knowledge Graph Integrations

While you can manually or programmatically export Knowledge Graph data as JSON or CSV for import into another tool, sometimes it makes sense to pull Knowledge Graph data directly into programs of your choice. 

While our range of integrations is constantly growing, at present the following tools and use cases can be used to pull in Knowledge Graph data: 



* Google Sheets (Data Enrichment, Any DQL Query)
* Excel (Data Enrichment, News Monitoring, Market Intelligence)
* PowerBI (Market Intelligence)
* Tableau (Any DQL Query)

 
We see routine integration use for report and dashboard making, particularly in relation to market intelligence or news monitoring. One of the best features about our integrations is that as our Knowledge Graph is updated with web-wide crawls and extractions, data is automatically updated in integrations as well. This means you can create a low-code news aggregation or market-tracking tool that updates on its own!


### Google Sheets Integration

For **Diffbot’s Google Sheets Integration**, a more detailed getting started guide is available in the actual integration. But to get you set up, first you’ll need to open up a Google Sheets document, head to Extensions -> Add-Ons->Get Add-Ons and then search for Diffbot for sheets to install. 





![Preview Query](/img/kg-get-started/diffbot_for_sheets.gif)


Going forward, Diffbot for sheets will be available to log into in your extensions menu option. You’ll need your API key to login, which can be found by clicking on “API Key” in the upper right corner of the screen in the [Diffbot Dashboard](https://app.diffbot.com). 

Within the Google Sheets integration, you can find more detailed documentation in the “Getting Started Guide” but for starters, you’ll have your choice of six functions. 



* The `=DQL()` function allows you to pass in any valid Diffbot Query Language query and select which result fields you want returned in the results
* The `=Enhance_Organization()` function lets you input a selection of cells with data related to organizations. These organizations are paired up with their corresponding entry in the Knowledge Graph to enrich this data. 
* The `=Enhance_Person()` function lets you input a selection of cells with data related to people. These organizations are paired up with their corresponding entry in the Knowledge Graph to enrich this data. 
* The `=NLP_Sentiment()` function lets you pass in unstructured natural language and returns a sentiment score. Sentiment scores range from -1 (very negative) through 1 (very positive)
* The `=NLP_Entities()` function lets you pass in unstructured natural language to return entities who are identified in this data. 
* The `=NLP_Categorize()` function returns IABV codes for the text, what is the general topic being talked about in natural language? 

When determining which fields you want returned from the DQL or Enhance-related functions, you’ll potentially want to look through the [ontology](https://docs.diffbot.com/docs/en/kg-ont-diffbotentity) page for our Knowledge Graph entities. This page lists all possible fields that are attached to entity types and can inform which output of the function to specify. 

Another pointer is that because quotation marks have value inside of Google Sheets functions, you’ll need to change all quotes within your Diffbot Query Language query to single quotes and wrap the entire function in double quotation marks. An example of this may be seen below. 

 `=DQL("type:Organization name:'Diffbot'", "nbEmployeesMax, address, industries")`

A second tip is to use column or row labels to specify output, so you can drag across a range of fields to organize output.


### Excel Integration

**Diffbot’s Excel Integration** is built around three valuable news monitoring and market intelligence functionalities: **Enhance, Search, and Lookalike**. For Enhance and Lookalike, you’ll start with a list of organizations (or people for Enhance) inside of your own spreadsheet, and feed these values in to be paired with their values in the Knowledge Graph.  
 
The Lookalike feature relies on the SimilarTo field within the Knowledge Graph to output up to 25 organizations that are most similar to your input. This extremely powerful value can be used for prospecting, market research, or to extrapolate from lists of orgs of interest. 



![Preview Query](/img/kg-get-started/excel.gif)


The search function within Excel allows you to utilize either a visual query builder to return article, organization, or person entities from the Knowledge Graph. Alternatively, you can enter a Diffbot Query Language query directly within the interface. 


### PowerBI Integration

The **PowerBI Diffbot Integration** involves the installation of a template app which can be used to build news monitoring and market intelligence dashboards on the fly. Unique features of our PowerBI integration include the ability to plot changes over time for organizations (for example, employee count, or news mention sentiment). Additionally, our PowerBI integration serves up live updates of custom topics on Twitter. 



![Preview Query](/img/kg-get-started/powerbi.gif)


Within our market intelligence integration, a range of custom crawl and Knowledge Graph data on organizations can be compared. At latest release, these fields include: 



* Investment Amount
* Twitter Sentiment
* News Mention Sentiment
* Github Stars
* Glassdoor ratings
* News Tags
* Employment
* Stock Prices
* And a Summary View

For a test drive of how PowerBI works, request a version of our latest template app as well as installation instruction from our [sales team](mailto:sales@diffbot.com). 


### Tableau Integration

Our **Tableau Integration** allows users to pull in a wide range of firmographic, demographic, and article data via custom data connectors. Simply connect a new data source, select “Web Data Connector” and enter `https://tableau.diffbot.com/`. Follow the ensuing instructions to enter your API credentials and start pulling in Knowledge Graph data!


![Preview Query](/img/kg-get-started/tableau.gif)


Quickly visualize data coverage from across the Knowledge Graph. With easy exports within the Knowledge Graph you can turn a range of views into world class data visualizations. 


## Catalog of Useful Knowledge Graph Searches


Many new and learning users find Diffbot Query Language and the Knowledge Graph easier to traverse with some template queries. Start with some of the useful searches below and modify them to work towards your own external data needs! 
 
### Market Intelligence Search Queries

**_Companies in a City with Female CEO and Specified Size (San Francisco, &lt;500 FTE)_**

`type:Organization location.city.name:"San Francisco" nbEmployeesMax<500 ceo.gender:"Female"`

**_Top Current Employers of Data Science Roles_**

`type:Person employments.{title:or("data scientist", "analyst", "data science", "business intelligence") isCurrent:true} facet:employments.employer.name`

**_Investments by Companies in a Certain Industry (Insurance)_**

`type:Organization investments.{investors.name:or("AIG","CNA Financial","Manulife","Munich Re") date>="01/01/2019"} sortBy:name`

**_Global Mid-Market Software Companies_**

`type:Organization nbEmployeesMin>100 nbEmployeesMax<1000 industries:"Software Companies" not(industries:"Educational Companies") not(has:parentCompany) not(has:acquiredBy) revSortBy:nbActiveEmployeeEdges`

**_SMB Advertising Companies With No Investments_**

`type:Organization not(has:investments.amount.value) industries:"Advertising Companies" nbEmployeesMax<=100 nbEmployeesMin>=50`

**_Individuals Employed In Automotive Software Roles In Europe (&lt;1,100 miles from Hamburg)_**

`type:Person employments.{isCurrent:true title:"Software" employer.industries:"Car"} locations:near[1100mi] (name:"Hamburg") facet:locations.country.name`

**_Recent Founders Who Were VPs/Directors In Big Tech_**

`type:Person employments.{employer.name:or("Google","Facebook","Uber","Apple") title:or("VP","Director")} employments.{isCurrent:true title:"Founder"}`

**_Pre-IPO Companies_**

`type:Organization investments.series:"Series E" totalInvestment.value>500000000 isPublic:false nbLocations>2 not(has:parentCompany) revSortBy:nbActiveEmployeeEdges`

**_Small B2B Marketing Agencies Near Atlanta_**

`type:Organization industries:"Service Companies" industries:"Marketing Companies" industries:"Advertising Companies" nbEmployeesMax<=15 location.country.name:"United States" description:"b2b" not(description:or("b2c", "consumer")) near[30mi](name:"Atlanta")`

**_All Whole Foods Locations (By Fact Page Origin)_**

`type:LocalBusiness name:"Whole Foods Market" re:homepageUri:"wholefoodsmarket.com/stores/[a-z]+" `
 
**_Industry Co Occurrence_**

`type:Organization industries:"Manufacturing Companies" facet:industries`

**_Hires Post a Specific Date at Google_**

`type:Person employments.{employer.name:"Google" from>"2020-01-21" not(from<"2020-01-21")}`

**_Industries FAANG Companies Invested In IN 2019_**

`type:Organization investments.{investors.name:or("Facebook","Alphabet","Amazon","Microsoft","Apple","Netflix") date>="01/01/2019" date<="01/01/2020"} facet:industries`


### News Monitoring Search Queries

**_Negative Articles About Apple By Week_**

`type:Article tags.{uri:"http://diffbot.com/entity/CHb0_0NEcMwyY8b083taTTw" sentiment<0.0} facet[week]:date`

**_Media Mentions of Competitors_**

`type:Article date<30d tags.label:or("Microsoft Teams", "Facebook Workplace")`

**_Most Recirculated Quotes By Joe Biden (Last 30d)_**

`type:Article date<30d quotes.speaker:"Joe Biden" facet:quotes.quote`

**_Coverage About Protests By Country_**

`type:Article tags.label:"protests" facet:publisherCountry`

**_Most Prolific Authors on Medium.com_**

`type:Article pageUrl:"medium.com" facet:author`

**_Sentiment Distribution of Articles About GOP On CNN.com_**

`type:Article pageUrl:"cnn.com" tags.label:or("GOP", "republicans", "conservatives") facet[-1:-.75,-.75:-.5,-.5:-.25,-.25:0,0:.25,.25:.5,.5:.75,.75:1]:sentiment`


## API Access To the Knowledge Graph

For many users, the visual interfaces for the Knowledge Graph are ways to validate what data is available for programmatic consumption. For more in-depth coverage of accessing the Knowledge Graph via API, check out the following resources:  




* [Knowledge Graph API Reference](https://docs.diffbot.com/kgapi)
* [Enhance API Reference](https://docs.diffbot.com/enhance)
* [Knowledge Graph Entity Ontology Page](https://docs.diffbot.com/docs/en/kg-ont-diffbotentity)
* [Industry Hierarchy Guide](https://docs.diffbot.com/docs/en/kg-industry-list)

 





