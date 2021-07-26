---
id: dql-endpoints
title: DQL Endpoints
sidebar_label: DQL Endpoints
---

# DQL Endpoints

Diffbot offers 2 different API endpoints for sending DQL queries, the DQL API and the DQL Stream API.  The endpoints differ only in the formats they return by default.

The standard DQL endpoint contains all the functionality of the Stream API, and we recommend this standard endpoint for all general use.  The Stream API is maintained for backwards compatibility with legacy customer implementations.

The DQL endpoint returns JSON by default, while the Stream endpoint (https://kg.diffbot.com/kg/dql_endpoint/stream) returns JSON Lines format by default. For either endpoint the format can be modified with either `&format=json` or `&format=jsonl`.

The endpoints can return a very large number of results per call, but there is a recommended limit of no more than one million entities exported per call, for either endpoint.



## DQL Endpoint (https://kg.diffbot.com/kg/dql_endpoint)

The DQL endpoint returns JSON by default, and supports the following request parameters:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |
| `type` | Web page URL of the analyze to process (URL encoded)</td></tr><td colspan="2">**Optional arguments**</td> |
| `query` | Query type. Can be one of `query`, `text`, `queryTextFallback` |
| `size` | Maximum number of results to return. Max size is 1000. |
| `from` | Return results starting at from index. from + size should be not more than 10000 (1000 for facet queries). |
| `format` | `format=jsonl` returns results in a jsonl format. Otherwise, results are returned in jsonl format |
| `jsonmode` | `jsonmode=extended` returns origin information for facts. |
| `nonCanonicalFacts` | `nonCanonicalFacts=true` returns non-canonical facts. |
| `noDedupArticles` | `noDedupArticles=true` indicates that articles should not be deduplicated but all of them returned |

### Making a GET request to the DQL Endpoint

When making a GET request, all of these parameters are encoded in the URL:

[https://kg.diffbot.com/kg/dql_endpoint?token=TOKEN&type=query&size=1&query=type%3AOrganization+name%3A%22diffbot%22](https://kg.diffbot.com/kg/dql_endpoint?token=YOUR_TOKEN&type=query&size=1&query=type%3AOrganization+name%3A%22diffbot%22)



`curl -o output.json "https://kg.diffbot.com/kg/dql_endpoint?token=TOKEN&type=query&size=1&query=type%3AOrganization+name%3A%22diffbot%22"`


Making a POST request to the DQL Endpoint

When making a POST request, only the token parameter is passed in the URL, while all of the other parameters must be specified in the body of the POST request:



`curl -X POST -H 'Content-Type: application/json' -o output.json "https://kg.diffbot.com/kg/dql_endpoint/stream?token=TOKEN" -d '{
    "query": "type:Organization name:\"diffbot\"",
    "size": 1
}' `





## DQL Stream Endpoint
(https://kg.diffbot.com/kg/dql_endpoint/stream)

The DQL Stream API returns results in **JSON Lines** format by default, and supports the following API parameters:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |
| `type` | Web page URL of the analyze to process (URL encoded)</td></tr><td colspan="2">**Optional arguments**</td> |
| `query` | Query type. Can be one of `query`, `text`, `queryTextFallback` |
| `size` | Maximum number of results to return.|
| `from` | Return results starting at from index. |
| `format` | `format=json` returns results in a json format. Otherwise, results are returned in jsonl format |
| `jsonmode` | `jsonmode=extended` returns origin information for facts. |
| `nonCanonicalFacts` | `nonCanonicalFacts=true` returns non-canonical facts. |
| `noDedupArticles` | `noDedupArticles=true` indicates that articles should not be deduplicated but all of them returned |


### Making a GET request to the DQL Stream Endpoint
When making a GET request to the DQL 
Stream endpoint, all of your parameters should be encoded and passed in the URL:

[https://kg.diffbot.com/kg/dql_endpoint/stream?token=TOKEN&type=query&size=1&query=type:Organization+name%3A%22diffbot%22](https://kg.diffbot.com/kg/dql_endpoint/stream?token=TOKEN&type=query&size=1&query=type:Organization+name%3A%22diffbot%22)



`curl -o output.jsonl "https://kg.diffbot.com/kg/dql_endpoint/stream?token=TOKEN&type=query&size=1&query=type:Organization+name%3A%22diffbot%22"`

### Making a POST request to the DQL Stream Endpoint

When making a POST request to the DQL Stream endpoint, only the token parameter is passed in the URL, while all other parameters should be passed in the request body:





`curl -X POST -H 'Content-Type: application/json' -o output.jsonl "https://kg.diffbot.com/kg/dql_endpoint/stream?token=TOKEN" -d '{
    "query": "type:Organization name:\"diffbot\"",
    "size": 1
}'`

## Pagination

A particular DQL query may match a very large number of results on the backend, but you may wish to request these results in smaller batches.  We can use the from and size parameters to control this behavior.  For example, this call will retrieve only the first 1,000 results:

[https://kg.diffbot.com/kg/dql_endpoint?type=query&token=TOKEN&query=type%3Aorganization+name%3Abank&from=0&size=1000](https://kg.diffbot.com/kg/dql_endpoint?type=query&token=YOUR_TOKEN&query=type%3Aorganization+name%3Abank&from=0&size=1000)


We can use this logic to "step through" the results 1,000 at a time:

[https://kg.diffbot.com/kg/dql_endpoint?type=query&token=TOKEN&query=type%3Aorganization+name%3Abank&from=0&size=1000](https://kg.diffbot.com/kg/dql_endpoint?type=query&token=YOUR_TOKEN&query=type%3Aorganization+name%3Abank&from=0&size=1000)

[https://kg.diffbot.com/kg/dql_endpoint?type=query&token=TOKEN&query=type%3Aorganization+name%3Abank&from=1000&size=1000](https://kg.diffbot.com/kg/dql_endpoint?type=query&token=YOUR_TOKEN&query=type%3Aorganization+name%3Abank&from=1000&size=1000)

[https://kg.diffbot.com/kg/dql_endpoint?type=query&token=TOKEN&query=type%3Aorganization+name%3Abank&from=2000&size=1000](https://kg.diffbot.com/kg/dql_endpoint?type=query&token=YOUR_TOKEN&query=type%3Aorganization+name%3Abank&from=2000&size=1000)

If a value for size is not specified, the value will default to 50.