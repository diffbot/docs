---
id: dql-index
title: Diffbot Query Language (DQL)
sidebar_label: Diffbot Query Language (DQL)
---

Diffbot's Query Language (DQL) is used to search and filter the [Knowledge Graph](kg-index).

The query argument contains the actual search contents you wish to perform on the knowledge graph. Multiple operators and values can be combined. Diffbot's query language is reminiscent of dot notation and uses the fields that are returned in the JSON response. To create a query, you use a combination of the fields along with the values that match those fields.

## Query Types

There are two types of queries, `ID` and `Type`. Type is the most common.

### ID 

You can query the Knowledge Graph directly if you know the unique identifier (ID) of the entity you are interested in accessing. The query format is `id:id-string`. 

For Example: To query for the Facebook entity, type [`id:Cbm4UJoSuP1esww1rsLvu9g`](https://app.diffbot.com/search/?query=id%3ACPdsrDmLiMQCskvBLp_dloQ&from=0&size=50&active_tab=query).

You will see two results returned. The first is the Organization entity profile you requested. The second is a list of all Persons linked to that entity.

### Type

For type queries, the format is `type:EntityType`. Entering a Type clause alone will return all entities of that type.

For example: To get all organization entities regardless of subtype (Corporation, Local Business, University, etc.) specify: [`type:Organization`](https://app.diffbot.com/search/?query=type%3AOrganization&from=0&size=50&active_tab=query).

A Type query allows us to use various query operators to describe search criteria.  We can search against the value of a specific field by defining a path from the root of the Diffbot ontology down to the desired terminal field.

For example: To get all companies in the United States sorted largest to smallest by number of employees, specify [`type:Organization location.country.name:"United States" revSortBy:nbEmployeesMax`](https://app.diffbot.com/search/?query=type%3AOrganization+location.country.name%3A%22United+States%22+revSortBy%3AnbEmployeesMax&from=0&size=50&active_tab=query)

---

## Querying with Multiple Fields

Multiple-field queries search across multiple independent field-value combinations, all of which must match in order for the query to match an entity.

A query can contain multiple search clauses, i.e. multiple fields all of which must match in order for an entity to be returned. To search across multiple fields, we separate our field-value combinations with a space.

For example: This query returns all organizations located in the city of San Francisco with more than 5000 employees across all of their locations: [`type:Organization locations.city.name:"San Francisco" nbEmployeesMin>5000`](https://app.diffbot.com/search/?query=type%3AOrganization+locations.city.name%3A%22San+Francisco%22+nbEmployeesMin%3E5000&from=0&size=50&active_tab=query&kgversion=)

---

## Nested Query

A nested query searches against nested fields. By wrapping multiple subfields of a field into a single query, it can return results for which all of those subfields match an entity at the same time.

In a previous example, we searched for all of the organizations located in San Francisco. Suppose we wanted to narrow our query to return only those organizations currently located in San Francisco. To do so we must find Organizations with a single `location` field for which `location.city.name` is `San Francisco`, and for which `isCurrent` is true.  We might try the following query: [`type:Organization locations.city.name:"San Francisco" location.isCurrent:true`](https://app.diffbot.com/search/?query=type%3AOrganization+locations.city.name%3A%22San+Francisco%22+location.isCurrent%3Atrue&from=0&size=50&active_tab=query&kgversion=)

Unfortunately, this would not have the intended result. This query specifies that an Organization must have a location "San Francisco", and that there must be a location for which isCurrent is true, but it does not specify that both must be true for the same location.

The correct way to approach such a problem is to nest the subfields we are searching on under the field for which we would like them both to apply, using curly braces.  

For example: To get all organizations that are currently located in San Francisco, specify: [`type:Organization location.{city.name:"San Francisco" isCurrent:true}`](https://app.diffbot.com/search/?query=type%3AOrganization+location.%7Bcity.name%3A%22San+Francisco%22+isCurrent%3Atrue%7D&from=0&size=50&active_tab=query&kgversion=).

It is also possible to have nested queries within nested queries. Here is an example: [`type:Organization ceo.{locations.city.name:"San Francisco" educations.{degree.name:"Master’s" institution.name:"Stanford"}}`](https://app.diffbot.com/search/?query=type%3AOrganization+ceo.%7Blocations.city.name%3A%22New+York%22+educations.%7Bdegree.name%3A%22Masters%22+institution.name%3A%22Harvard%22%7D%7D&from=0&size=50&active_tab=query&kgversion=)

This query will match all organizations whose CEO is located in San Francisco and has a Masters Degree from Stanford.

Note that the depth of your nested queries is only limited by the total number of characters in the query submitted. You can have nested queries within nested queries, within nested queries, and so on.

---

## Facets

Faceted queries allow you to gain insight into large data sets by displaying summary data about the values of some field, as they are represented across all entities returned by the primary query.  For instance, a faceted query could provide a list of the most widely-held skills of employees at a company and the number of employees possessing each of those skills.  A single facet query may return up to 1000 results.

To perform a faceted query, you first write your primary DQL query describing the entities you want to analyze, then add the facet keyword and specify the field you want summary data about.

We can use facet queries to view the entire list of values for some field, across an entire result set.

For example, to view a list of all sicClassification codes and their distribution across all companies in the KG, you can query:
[`type:Organization facet:sicClassification.code`](https://app.diffbot.com/search/?query=type%3AOrganization+facet%3AsicClassification.code&from=0&size=50&active_tab=query&kgversion=).

Or, to view a list of all industry tags associated with any organization in the KG, you can query: [`type:Organization facet:categories.name`](https://app.diffbot.com/search/?query=type%3AOrganization+facet%3Acategories.name&from=0&size=50&active_tab=query&kgversion=).

If you wanted to narrow your results to only show industry tags applied to organizations located in San Francisco that have 5000 or more employees and have a SIC classification, you can add those criteria to limit the primary result set: [`type:Organization location.{city.name:"San Francisco" isCurrent:true} nbEmployeesMax>=5000 has:sicClassification facet:categories.name`](https://app.diffbot.com/search/?query=type%3AOrganization+location.%7Bcity.name%3A%22San+Francisco%22+isCurrent%3Atrue%7D+nbEmployeesMax%3E%3D5000+has%3AsicClassification+facet%3Acategories.name&from=0&size=50&active_tab=query&kgversion=)

To view a breakdown of how SIC classification codes are distributed among corporations that had over $100,000,000 in revenue for the 2019 fiscal year, we can query: [`type:Organization yearlyRevenues.{year:2019 revenue.value>100000000} facet:sicClassification.code`](https://app.diffbot.com/search/?query=type%3AOrganization+yearlyRevenues.%7Byear%3A2019+revenue.value%3E100000000%7D+facet%3AsicClassification.code&from=0&size=50&active_tab=query).

Facet queries return values in order of greatest number of matching entities, allowing you to gain insight about the most frequent values for some field, at a glance.
For example, to find the most common universities attended by Facebook employees who also have skills in Java, you can query: [`type:Person employments.{isCurrent:true employer.name:"Facebook"} skills.name:"Java" facet:educations.institution.name`](https://app.diffbot.com/search/?query=type%3APerson+employments.%7BisCurrent%3Atrue+employer.name%3A%22Facebook%22%7D+skills.name%3A%22Java%22+facet%3Aeducations.institution.name&from=0&size=50&active_tab=query&kgversion=)

Or, to list the most common skills held by Facebook employees who studied at Carnegie Mellon: [`type:Person employments.{isCurrent:true employer.name:"Facebook"} educations.institution.name:"Carnegie Mellon University" facet:skills.name`](https://app.diffbot.com/search/?query=type%3APerson+employments.%7BisCurrent%3Atrue+employer.name%3A%22Facebook%22%7D+educations.institution.name%3A%22Carnegie+Mellon+University%22+facet%3Askills.name&from=0&size=50&active_tab=query&kgversion=).

When faceting on a numeric field, instead of displaying each possible value of that field, the facet will be performed against a series of smaller ranges that encompass the entire range of values for that field.

For example, to view the number of companies in the banking industry whose company size by maximum number of employees falls into each of a range of possible values, you can query: [`type:Organization industries:"banking" facet:nbEmployeesMax`](https://app.diffbot.com/search/?query=type%3AOrganization+industries%3A%E2%80%9Dbanking%E2%80%9D+facet%3AnbEmployeesMax&from=0&size=50&active_tab=query&kgversion=).

![Number of companies in the banking industry whose company size by maximum number of employees falls into each of a range of possible values](/img/dql/operators1.png)

The query then performs the facet against multiple ranges of numerical values, with those ranges encompassing the entire range of possible values for the field we are faceting against. In the results for the above query, you can see the number of companies having between 30 and 40 employees, or between 1,000 and 5,000 employees, for example.

### Facet Query Response

Successful facet queries will return a `data` object at the top level of the JSON response. The resulting field values are returned in order of the number of matching entities.

Each facet will contain the following fields:

* `count` (integer) - Number of documents in the overall search query matching this facet value or range.
* `value` (string) - Value of the specific facet.
* `callbackQuery` (string) - The query to return entities matching the value for this facet.

---

## Has Operator

The **has** operator enables you to only return entities that include a value for that field.

For example: This query returns all organizations located in San Francisco with 5000 or more employees that have a SIC Classification on file in their Diffbot company profile.

[`type:Organization location.{city.name:"San Francisco" isCurrent:true} nbEmployeesMax>=5000 has:sicClassification`](https://app.diffbot.com/search/?query=type%3AOrganization+location.%7Bcity.name%3A%22San+Francisco%22+isCurrent%3Atrue%7D+nbEmployeesMax%3E%3D5000+has%3AsicClassification&from=0&size=50&active_tab=query&kgversion=)

You can also combine this with a facet search to view other industry tags (not specific to SIC):

[`type:Organization location.{city.name:"San Francisco" isCurrent:true} nbEmployeesMax>=5000 has:sicClassification facet:categories.name`](https://app.diffbot.com/search/?query=type%3AOrganization+location.%7Bcity.name%3A%22San+Francisco%22+isCurrent%3Atrue%7D+nbEmployeesMax%3E%3D5000+has%3AsicClassification+facet%3Acetegories.name+&from=0&size=50&active_tab=query&kgversion=)

---

## Regex (re) Operator

The **re** (regex) operator allows you to use regular expressions to match the value of a string field.  Diffbot supports [ElasticSearch's regular expression syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/regexp-syntax.html).

For Example: To return all Organization entities with a name consisting of the string "Faceb", followed by any number of other characters (including "Facebook, Inc.", "Facebot", "Facebooking", etc.), you can use: [`type:Organization re:name:"faceb.+"`](https://app.diffbot.com/search/?query=type%3AOrganization+re%3Aname%3A%22faceb.%2B%22&from=0&size=50&active_tab=query&kgversion=)

---

## Comparison Operators

The Knowledge Graph API also supports many of the standard comparison operators found in most languages.

### Contains (Colon)

The contains operator tests for equality between a field and its value. The contains operator is not case-sensitive. To perform a case-sensitive search, see the [`strict` operator](#strict-operator-equals).

If the value is a double-quoted string, the entire string is treated as a single query. If the search string has multiple words, the query will allow for up to one missing word between each consecutive pair of words, and an unlimited number of surrounding words.

For example: To find all Articles whose authors have "Matt" anywhere in their name, you can query: [`type:Article author:"Matt"`](https://app.diffbot.com/search/?query=type%3AArticle+author%3A%22Matt%22&from=0&size=50&active_tab=query&kgversion=).

To find all Organizations having “Facebook” within any one of their known aliases, including Facebook, Facebook Advertising, etc.: [`type:Organization name:"Facebook"`](https://app.diffbot.com/search/?query=type%3AOrganization+name%3A%22Walmart%22&from=0&size=50&active_tab=query&kgversion=).

This will do a “contains” search against all names (`allNames`) associated with an entity.

To narrow the results, you might use the Corporation sub-type and the strict operator with the formal company name. For example: [`type:Organization strict:name:"Microsoft Corporation"`](https://app.diffbot.com/search/?query=type%3AOrganization+strict%3Aname%3A%22Walmart+Inc.%22+&from=0&size=50&active_tab=query&kgversion=).

### Not Equals

The Not Equals operator `!=` specifies that entities matching a particular field value should be omitted from the results.

This query returns all Organization entities in San Francisco, except for those companies whose name is "San Francisco State University":
[`type:Organization location.{city.name:"San Francisco" isCurrent:true} name!="San Francisco State University"`](https://app.diffbot.com/search/?query=type%3AOrganization+location.%7Bcity.name%3A%22San+Francisco%22+isCurrent%3Atrue%7D+name%21%3D%22San+Francisco+State+University%22&from=0&size=50&active_tab=query).

This query returns all Organizations located in the city of San Francisco that are not local businesses:
[`type:Organization location.city.name:"San Francisco" types!="LocalBusiness"`](https://app.diffbot.com/search/?query=type%3AOrganization+location.%7Bcity.name%3A%22San+Francisco%22+isCurrent%3Atrue%7D+types%21%3D%22LocalBusiness%22&from=0&size=50&active_tab=query&kgversion=)

The Not Equals operator can also be used with the regex operator.

This query returns all Organizations whose name does not begin with "University": [`type:Organization re:name!="University.*"`](https://app.diffbot.com/search/?query=type%3AOrganization+re%3Aname%21%3D%22University.*%22&from=0&size=50&active_tab=query&kgversion=)

To exclude entities compiled from one or more data sources, i.e. origins, specify:
[`type:Organization origins!="wikidata.org" origins!="en.wikipedia.org"`](https://app.diffbot.com/search/?query=type%3AOrganization+origins%21%3D%22wikidata.org%22+origins%21%3D%22en.wikipedia.org%22&from=0&size=50&active_tab=query&kgversion=) 

The above example excludes all Organizations whose origins do not include Wikipedia or Wikidata.

### Greater / Less Than (or Equal To)

We can apply the > (greater than) and < (less than) operators to specify that the value of a field should fall within a particular range.  To include the endpoints of a range, you would use the >= (greater than or equal to) and <= (less than or equal to) operators.

This query will match all Articles published to “*.nytimes.*” since Sept 1, 2019: [`type:Article date.timestamp>=1567350060 pageUrl:"nytimes" sortBy:date`](https://app.diffbot.com/search/?query=type%3AArticle+date.timestamp%3E%3D1567350060+pageUrl%3A%22nytimes%22+sortBy%3Adate&from=0&size=50&active_tab=query&kgversion=)

This query will match companies who have between 500 and 1000 employees: [`type:Organization nbEmployeesMin>=500 nbEmployeesMax<=1000`](https://app.diffbot.com/search/?query=type%3AOrganization+nbEmployeesMin%3E%3D500+nbEmployeesMax%3C%3D1000&from=0&size=50&active_tab=query&kgversion=)

### Strict Operator (Equals)

The **strict** operator modifies a text search on a field, so that the field value must be exactly equal to the search string in order for a match to occur.

We have seen in all of the examples above how the colon operator (`:`) is used to match a field with a value, similar to the equals operator in most programming languages.  It is important to note that the colon does not perform an exact match. It will account for a single missing word in the result. To perform an exact match you must apply the strict operator.

For example: To match only Facebook, and not Facebook affiliates: 

[`type:Organization strict:name:"Facebook"`](https://app.diffbot.com/search/?query=type%3AOrganization+strict%3Aname%3A%22Google%22&from=0&size=50&active_tab=query&kgversion=)

---

## OR Operator

The or operator allows you to specify a list of values or expressions that can match the field we are querying against.  If any of the fields match, the entire query is a match.

To search across multiple fields enclose the list in parentheses, and add the or keyword.

For example: To search for all companies whose name is "Google" or "Facebook": [`type:Organization strict:name:or("Google", "Facebook")`](https://app.diffbot.com/search/?query=type%3AOrganization+strict%3Aname%3Aor%28%22Google%22%2C+%22IBM%22%29&from=0&size=50&active_tab=query&kgversion=)

The or operator can be used with literal values as well as complete expressions.

For example: To search for all Organizations that either have the exact name "Microsoft Corporation" or have over 100,000 employees, you can query:
[`type:Organization  or(strict:name:"Microsoft Corporation", nbEmployeesMin>100000)`](https://app.diffbot.com/search/?query=type%3AOrganization++or%28strict%3Aname%3A%22Microsoft+Corporation%22%2C+nbEmployeesMin%3E100000%29&from=0&size=50&active_tab=query&kgversion=)

Or operators can also be nested.

For example, to return all companies that are either in San Francisco or New York OR that have a CEO who was either educated at Stanford or Harvard OR who was previously or currently employed by Facebook, Google, or Microsoft, specify: [`type:Organization or(locations.city.name:or("San Francisco", "New York"), ceo.{educations.from.str:or("Stanford", "Harvard") employments.employer.name:or("Facebook", "Google", "Microsoft")})`](https://app.diffbot.com/search/?query=type%3AOrganization+or%28locations.city.name%3Aor%28%22San+Francisco%22%2C+%22New+York%22%29%2C+ceo.%7Beducations.from.str%3Aor%28%22Stanford%22%2C+%22MIT%22%29+employments.employer.name%3Aor%28%22Microsoft%22%2C+%22IBM%22%2C+%22Google%22%29%7D%29&from=0&size=50&active_tab=query&kgversion=)

For example, to return all articles mentioning data privacy that also mention Facebook, Google, or Microsoft:
[`type:Article text:"data privacy" text:or("Facebook" , "Google" , "Microsoft") sortBy:date`](https://app.diffbot.com/search/?query=type%3AArticle+text%3A%22data+privacy%22+text%3Aor%28%22Google%22+%2C+%22Microsoft%22+%2C+%22Facebook%22%29+sortBy%3Adate&from=0&size=50&active_tab=query&kgversion=)

Or use DiffbotIDs and constrain to articles with tagged/linked entities:

[`type:Article text:"data privacy" tags.uri:or("https://diffbot.com/entity/Cbm4UJoSuP1esww1rsLvu9g", "https://diffbot.com/entity/CUFq-3WlpNsq0pvfUYWXOEA", "https://diffbot.com/entity/CIsFKrN_ZNLSWsvxdQfWutQ") sortBy:date`](https://app.diffbot.com/search/?query=type%3AArticle+text%3A%22data+privacy%22+tags.uri%3Aor%28%22https%3A%2F%2Fdiffbot.com%2Fentity%2FCUFq-3WlpNsq0pvfUYWXOEA%22%2C+%22https%3A%2F%2Fdiffbot.com%2Fentity%2FCU2HJUnMcNoWE3nR1cGBcZg%22%2C+%22https%3A%2F%2Fdiffbot.com%2Fentity%2FCbm4UJoSuP1esww1rsLvu9g%22%29+sortBy%3Adate&from=0&size=50&active_tab=query&kgversion=)

---

## MIN/MAX Operators

The min and max operators allow you to specify the minimum and maximum values, respectively, that a field must have in order to match. The min and max operators apply only to numeric fields.

For example: This query returns all companies with maximum market capitalization of 1 million USD: [`type:Organization max:capitalization.value:1000000`](https://app.diffbot.com/search/?query=type%3AOrganization+max%3Acapitalization.value%3A1000000+&from=0&size=50&active_tab=query&kgversion=)

--- 

## GET Operator

The **get** operator describes a list of fields to either include (while excluding all other fields), or exclude from the default set of fields.  Each terminal field is returned in the JSON result as an object that contains the fields **confidence**, **origin**, and **value**, instead of just the value.

To include fields, for example, to search for all Organizations, but only return their `subsidiaries.locations` fields (and all descendants), specify: [`type:Organization get:subsidiaries.location`](https://app.diffbot.com/search/?query=type%3AOrganization+get%3Asubsidiaries.location)

Or, to return the names of all of Facebook’s subsidiaries:
[`type:Organization name:"Facebook" get:subsidiaries.name`](https://app.diffbot.com/search/?query=type%3AOrganization+name%3A%22Facebook%22+get%3Asubsidiaries.location)

To exclude fields, for example to return all companies with logos and mottos, but omit the phoneNumbers, nbEmployeesMin, nbEmployeesMax fields from each profile matched, specify:

[`type:Organization has:logo has:motto get:!nbEmployeesMax,!nbEmployeesMin,!phoneNumbers`](https://app.diffbot.com/search/?query=type%3AOrganization+has%3Alogo+has%3Amotto+get%3A%21nbEmployeesMax%2C%21nbEmployeesMin%2C%21phoneNumbers&from=0&size=50&active_tab=query&kgversion=)

Or, to return all Organization entities located in San Francisco, but omit the CEO and board members specify:

[`type:Organization location.city.name:"San Francisco" get:!ceo,!boardMembers`](https://app.diffbot.com/search/?query=type%3AOrganization+location.city.name%3A%22Mountain+View%22+get%3A%21ceo%2C%21boardMembers&from=0&size=50&active_tab=query&kgversion=)

---

## NOT Operator

The NOT operator describes search criteria which must not be true in order for an entity to match.

For example: To search for articles about “hacking” that were not written by Andy Greenberg or Joseph Marks, query:

[`type:Article title:"hacking" not(author:or("Andy Greenberg","Joseph Marks"))`](https://app.diffbot.com/search/?query=type%3AArticle+title%3A%22hacking%22+not%28author%3Aor%28%22Andy+Greenberg%22%2C%22The+Canadian+Press%22%29%29&from=0&size=50&active_tab=query&kgversion=)

To search for articles about hacking that were not published by the New York Times:

[`type:Article title:"hacking" not(pageUrl:"nytimes.com") sortBy:date`](https://app.diffbot.com/search/?query=type%3AArticle+title%3A%22khashoggi%22+not%28pageUrl%3A%22nytimes.com%22%29+sortBy%3Adate&from=0&size=50&active_tab=query&kgversion=)

Note that NOT can be used to negate any query expression, including expressions containing the OR operator.

---

## Near Operator

The near operator searches for entities that are located within a particular distance (default 15km) of an Administrative Area.  It is always coupled with a single-field subquery that returns one or more AdministrativeArea entities.

For example: this query returns all Organization entities with "University" in their name that are located within 15km of San Francisco, California: 
[`type:Organization near(id:"A8AV-O2v0MBuACAY7pFZzbg")`](https://app.diffbot.com/search/?query=type%3AOrganization+near%28id%3A%22ALVqnqwXjOZqEtIVHP2uiow%22%29&from=0&size=50&active_tab=query&kgversion=)

`near` can only operate on a single `AdministrativeArea` entity, so if the subquery returns more than one result, near will only operate on the most important entity returned (as defined by the importance field in the KG results for that entity).

Example: this query returns all Organizations with “Bank” in their name, that are within 15km of the most important `AdministrativeArea` named "Springfield": 
[`type:Organization name:"Bank" near(name:"Springfield")`](https://app.diffbot.com/search/?query=type%3ALocalBusiness+name%3A%22Starbucks%22+near%28name%3A%22Springfield%22%29&from=0&size=50&active_tab=query&kgversion=)

There are many places in the world named "Springfield" (for example, "Springfield, Illinois" in the United States and "Springfield, Birmingham" in England, but `near` will compare the [importance](dql-faq) fields of all of them and operate only on the most important entity.

`near` accepts an optional distance modifier, to specify the maximum distance from the Administrative Area that a returned entity should be located within. Units for distance can be given in miles ("mi") or kilometers ("km").

For example: This query returns all companies whose business is associated in some way with banking, that are also located within 10 miles of San Francisco, CA (the “most important” city named San Francisco): 
[`type:Organization categories.name:"banking" near[10mi](name:"San Francisco")`](https://app.diffbot.com/search/?query=type%3AOrganization+location.%7Bcity.name%3A%22San+Francisco%22+isCurrent%3Atrue%7D+nbEmployeesMax%3E%3D5000+has%3AsicClassification+facet%3Acategories.name&from=0&size=50&active_tab=query&kgversion=)

---

## Sorting Results

DQL allows you to define the sort order of your results in various ways, including sorting on a particular response field, reverse-sorting on a field, and sorting in a random order.

### SORTBY

The `sortBy` operator is used to specify that results should be sorted by a particular field.  Note that results are sorted in ascending order by default.

For example: This query will match all organizations located in the city of San Francisco, and return them in ascending order by name:
[`type:Organization isPublic:true location.city.name:"San Francisco" sortBy:name`](https://app.diffbot.com/search/?query=type%3AOrganization+isPublic%3Atrue+location.city.name%3A%22Los+Angeles%22+sortBy%3Aname&from=0&size=50&active_tab=query&kgversion=)

### REVSORTBY

The `revSortBy` operator is used to specify that results should be sorted according to a particular field, but in descending order.

For example: To search for all articles published by New York Times and return them in order by date published, from oldest to most recent, specify:
[`type:Article pageUrl:"nytimes.com" revSortBy:date`](https://app.diffbot.com/search/?query=type%3AArticle+pageUrl%3A%22newsweek.com%22+revSortBy%3Adate&from=0&size=50&active_tab=query&kgversion=)

### RANDOM SORTING

We can use the parameter `sortBy:random` to have the results returned in a totally random order.

For example: To retrieve all organizations who have ever had an address in the United States, and return them in a random order, you can specify:
[`type:Organization locations.country.name:"United States" sortBy:random`](https://app.diffbot.com/search/?query=type%3AOrganization+locations.country.name%3A%22United+States%22+sortBy%3Arandom&from=0&size=50&active_tab=query&kgversion=)

### RANDOM ORDER WITH SEED

We can use the parameter `sortBy:randomSeed` with some integer value to have the results returned in a predictable and reproducible random order.

For Example: This query will match all organizations with a presence in the United States, and return them in a predictably random order:
[`type:Organization locations.country.name:"United States" sortBy:randomSeed:501`](https://app.diffbot.com/search/?query=type%3AOrganization+locations.country.name%3A%22United+States%22+sortBy%3ArandomSeed%3A501&from=0&size=50&active_tab=query&kgversion=)

The key thing to note here is that this query will always produce the exact same sort order, and as long as the set of results has not changed (as a result of a KG update) the response will always be identical.

---

## Dates and Timestamps

Dates in the knowledge graph are typically given as an epoch timestamp, representing the number of seconds or milliseconds since 00:00:00 UTC on January 1, 1970.  Such a date field will contain the following fields:

| Field Name | Example Value | Field Description |
| - | - | - |
| str | d2018-10-04T08:11:28 | A string representation of the given timestamp |
| precision | 4 | The arithmetic precision of the given timestamp. |
| timestamp | 1538640688000 | The number of seconds or milliseconds since 00:00:00 UTC on January 1, 1970.  Which unit is used can be determined by examining the precision field.  A value of 4 would indicate that the timestamp is in milliseconds, while a precision of 1 would indicate seconds |

Here's an example in JSON:

```json
"fieldXXX": {
  "str": "d2018-10-04T08:11:28",
  "precision": 4,
  "timestamp": 1538640688000
}
```

### Crawl Timestamps

Each entity in the KG also includes a field that represents the last time that any of that entity’s origins were crawled and extracted.  This field therefore represents the maximum possible freshness of any individual data point.

The name of the crawl timestamp field varies depending on the entity type.  The table below explains which field name is associated with each entity type:

![](/img/dql/table.jpg)

It should be noted that all crawl timestamps are represented in seconds.

### Querying for Dates

#### Date Field Expansion

When referring to any date/timestamp field (not including crawl timestamps) in a query, if the timestamp subfield is omitted from the field specification, the field in the query will be expanded to include the timestamp subfield. For example, these two queries are equivalent, with the first being automatically expanded to the second:

`type:Organization foundingDate<1438387200000` vs `type:Organization foundingDate.timestamp<1438387200000`

#### Epoch vs. Date Literal

You can represent a timestamp in a query using an Epoch timestamp, in either milliseconds or seconds, given as an integer.

Example (these 2 queries are equivalent): 

`type:Article estimatedDate.timestamp<1438387200000` vs `type:Article estimatedDate.timestamp<1438387200`

Timestamps can also be represented as a literal date string (a “Date Literal”) with one of the following formats:

- MM-dd-yyyy (ex. “08-01-2015”)
- MM/dd/yyyy (ex. “08/01/2015”)
- yyyy-MM-dd (ex. “2015-08-01”)
- yyyy/MM/dd (ex. “2015/08/01”)

Note that equivalent min/max and greater/less than expressions can be used interchangeably, whether we are using an epoch timestamp or a Date Literal to represent the timestamp in our query. For example, these 4 queries are all equivalent:

- `type:Organization foundingDate<='2015-08-01'`
- `type:Organization max:foundingDate.timestamp:'2015-08-01'`
- `type:Organization foundingDate<=1438387200000`
- `type:Organization max:foundingDate.timestamp:1438387200000`

#### Special Time Period Literals

For a Crawl Timestamp, or for the date field of an Article entity, we can use a Time Period Literal to represent some length of time.  A Time Period Literal consists of a numeric value and a unit specifier.  For example, the Time Period Literal “4h” represents 4 hours.  These are the time units that are supported:

- s: seconds
- m: minutes
- h: hours
- d: days
- w: weeks
- y: 365 days

Example: To find all Articles that were published at least 4 hours ago: `type:Article date>=4h`

Example: To find all Articles for which any origin was crawled within the last 4 hours: `type:Article lastCrawlTime<=4h`

Example: To find all Organizations for which any origin was crawled within the last 365 days: `type:Organization crawlTimestamp<=1y`

#### Special handling for Article “date” fields

Every Article entity has a `date` field representing the publication date of the article.  We can reference this field as either `date` or `date.str` in our DQL query.