---
id: kg-filtering
title: Filter Data Output from Knowledge Graph Queries
sidebar_label: Filter Data Output
---

Diffbot KG services implement a variant of [JsonPath](https://goessner.net/articles/JsonPath/). In several places in the guide below, we'll use language from the original spec.

## Basic Structure of Path

JsonPath expressions always refer to a JSON structure in the same way as XPath expression are used in combination with an XML document. The "root member object" in JsonPath is always referred to as `$` regardless if it is an object or array.

JSONPath expressions can use:

1. Dot–notation when path segment matches `[a-zA-Z0-9_]*` pattern
   * Example: `$.locations.country.name`
2. or bracket–notation
   * Example: `$['locations']['country']['name']`
3. Wildcard operator to match a single node
   * Example: `$.locations.*.name`
   * Example: `$['locations'][*]['name']`
4. Recursive-descent operator to match any number of interleaving nodes (from [E4X](https://en.wikipedia.org/wiki/ECMAScript_for_XML))
   * Example: `$.locations..name`
   * Example: `$['locations']..['name']`

## Operators
| Operator  | Description |
|-----------|-------------|
| `$`       | The root element to query. This starts all path expressions. |
| `@`       | The current node being processed by a filter predicate.      | 
| `*`       | Wildcard. Available anywhere a name or numeric are required. |
| `..`      | Deep scan. Available anywhere a name is required.            |
| `.<name>` | Dot-notated child                                            |
| `['<name>' (, '<name>')]` | Bracket-notated child or children            |
| `[<number> (, <number>)]` | Array index or indexes                       |
| `[start:end]` | Array slice operator (from [ECMA 2022 Language Specification](https://tc39.es/ecma262/#sec-array.prototype.slice)) |
| `[?(<expression>)]` | Filter expression. Expression must evaluate to a boolean value. |

## Filter Operators

Filters are logical expressions used to filter arrays.

* A typical filter would be `[?(@.year > 2018)]` where `@` represents the current item being processed.
* More complex filters can be created with logical operators `&&` and `||`. String literals must be enclosed by single or double quotes (`[?(@. name == 'Spain')]` or `[?(@.name == "France")]`).
* You can use `!` to negate a predicate `[?(!(@.year < 2018 && @.year > 2020))]`.

| Operator | Description |
|----------|-------------|
| ==       | left is equal to right (note that 1 is not equal to '1')   |
| !=       | left is not equal to right                                 |
| <        | left is less than right                                    |
| <=       | left is less or equal to right                             |
| >        | left is greater than right                                 |
| >=       | left is greater than or equal to right                     |
| =\~      | left matches regular expression `[?(@.name =~ /foo.*?/i)]` |
| in       | left exists in right `[?(@.name in ['S', 'M'])]`           |
| nin      | left does not exists in right                              |
| subsetof | left is a subset of right `[?(@.sizes subsetof ['S', 'M', 'L'])]`    |
| anyof    | left has an intersection with right `[?(@.sizes anyof ['M', 'L'])]`  |
| noneof   | left has no intersection with right `[?(@.sizes noneof ['M', 'L'])]` |
| size     | size of left (array or string) should match right                    |
| empty    | left (array or string) should be empty                               |

## Path Examples

The examples will refer to this partial Diffbot Organization entity sample:

```javascript
{
  "type": "Corporation",
  "name": "IBM",
  "homepageUri": "ibm.com",
  "nbEmployees": 345000,
  "yearlyRevenues": [
    {
      "revenue": {
        "value": 7.362E+10
      },
      "isCurrent": false,
      "year": 2020
    },
    {
      "revenue": {
        "value": 7.9591E+10
      },
      "isCurrent": false,
      "year": 2018
    }
  ],
  "capitalization": {
    "currency": "USD",
    "value": 1.12935797E+11
  },
  "categories": [
    {
      "name": "Computer Hardware Companies"
    },
    {
      "name": "Cloud Computing Companies"
    },
    {
      "name": "Software Consulting Firms"
    }
  ],
  "locations": [
    {
      "country": {
        "summary": "Sovereign state in North America",
        "name": "United States of America"
      },
      "isCurrent": true,
      "address": "1 New Orchard Road, Armonk, 10504-1722, New York, United States"
    },
    {
      "country": {
        "summary": "Sovereign state in Southern Africa",
        "name": "South Africa"
      },
      "isCurrent": false,
      "address": "90 Grayston Dr, Sandton, Gauteng Province, South Africa"
    }
  ]
}
```
| JsonPath                     | Result                               |
|------------------------------|--------------------------------------|
| `$.name`                     | The name of the entity |
| `$.locations[?(@.country.name=='United States of America')]` | All locations in US |
| `$.locations[?(@.country.name=='United States of America')].['address', 'isCurrent']` | address and isCurrent for all locations in US |
| `$.locations[*].address`  | The address of all locations |
| `$.locations[0]`           | The first location |
| `$.locations[-2]`          | The second to last location |
| `$.locations[0,1]`         | The first two locations |
| `$.locations[:2]`     | All locations from index 0 (inclusive) until index 2 (exclusive) |
| `$.locations[1:2]`    | All locations from index 1 (inclusive) until index 2 (exclusive) |
| `$.locations[-2:]`    | Last two locations |
| `$.locations[?(@.isCurrent)]` | All locations which are current |
| `$.yearlyRevenues[?(@.year > 2018)]` | yearlyRevenues for years > 2018 |

## Specifying multiple paths
Multiple paths will be `;` separated.

Example: `$.name;$.homepageUri;$.yearlyRevenues[?(@.year > 2018)]` specifies 3 elements to be returned (separated by `;`):

- `$.name`: entity name
- `$.homepageUri`: entity homepageUri
- `$.yearlyRevenues[?(@.year > 2018)]`: yearlyRevenues for years > 2018

## Why do we support a variant of JsonPath?

* We need support for DiffbotEntity `extended` mode which is an implementation specific to Diffbot and hence not supported by JsonPath
* JsonPath does not support multiple paths being applied to a single Json. This is reflected in their recommended output structure. With this variant, multiple elements can be selected from a single json by specifying multiple paths.
* The output format as specified by JsonPath is simplistic and loses the original structure of the document.


> **COMPATIBILITY NOTE:** JsonPath supports `[start:end:step]` from ECMASCRIPT4, but we won't support step to be compatible with ECMA 2022. It doesn't seem to be supported by the Jayway Java implementation either.

> **COMPATIBILITY NOTE:** JsonPath uses `.length` to refer to the length of the array. This is inconsistent when there is actually an element named length, so we don't support this.

> **COMPATIBILITY NOTE:** We don't support any aggregation functions provided by the Jayway Java implementation as the goal of this implementation is to filter json.

> **COMPATIBILITY NOTE:** We won't support referencing an absolute path through an expression like `$..book[?(@.price <= $['expensive'])]`

> **COMPATIBILITY NOTE:** The original spec supports unions but not multiple paths. It's easier to use multiple paths when the filtered nodes are disjoint.


References for JsonPath:

* [https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/)
* [https://github.com/json-path/JsonPath](https://github.com/json-path/JsonPath)