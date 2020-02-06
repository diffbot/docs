---
id: api-managing-rules-programmatically
title: Managing Custom Rules Programmatically
sidebar_label: Managing Custom Rules Programmatically
todo: Modify links to old Dashboard
---

You can manage your Custom API using our Custom Rule Management API.

## Retrieving Existing Rules

To retrieve your existing rules, perform a HTTP GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/custom
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |

This returns a JSON-formatted ruleset which corresponds to the UI elements of the <a href="/dev/customize">Custom API Toolkit</a>.

| Field | Description |
| :---- | :---------- |
| `urlPattern` | Regular expression used to match URLs to the appropriate rule. |
| `api` | Diffbot API against which the ruleset should be appled. The `api` value should include the `/api/` string, e.g. `/api/article`. |
| `rules` | An array of rules applying to individual fields of the Diffbot API. The `rules` array can be empty (`rules=[]`), but the field must be included in API requests. |
| &#x21B3;`name` | Field to correct (e.g., `title`) or add (e.g., `customCategory`). |
| &#x21B3;`selector` | CSS selector to find the appropriate content on the page. |
| &#x21B3;`value` | Optional: a specific value to hard-code, in lieu of a selector. |
| &#x21B3;`filters` | Optional: additional options to replace content, ignore selectors, or extract HTML attribute values. See below. </td></tr><tr><td colspan="2">**Optional arguments:**</td> |
| `testUrl` | A sample URL used to preview your rule within the <a href="/dev/customize">Custom API Toolkit</a>. |
| `prefilters` | An array of selectors that should be completely dropped from the DOM. These selectors will be fully ignored by all Diffbot processing. |
| `renderOptions` | Querystring arguments to be passed to the Diffbot rendering engine, e.g. `wait=5000`. |
| `xForwardHeaders` | An object containing any custom headers to be passed along in all requests to URLs matching the `urlPattern`. Header values can either be a single string, or an array of strings (from which one will be selected at request-time). Custom headers can include:
| &#x21B3;`User-Agent` | User agent to use in place of Diffbot default. |
| &#x21B3;`Referer` | Custom referer to use in place of Diffbot default. |
| &#x21B3;`Cookie` | Custom cookie content to be sent with all requests. |
| &#x21B3;`Accept-Language` | Custom accept-language header to be sent. |
| &#x21B3;`X-Evaluate` | Custom Javascript to be executed at render-time. See [Custom Javascript](#custom-javascript) below. |

Rules for nested arrays (e.g., `images` or `videos` in the [Article API](api-article.md), or `products` in the [Product API](api-product.md)) should be nested within the `rules` object.

### Rule Filters (Optional)

A rule's `filters` element can contain multiple entries, which correspond to the filters within the API Toolkit. Each filter should contain:

| Field | Description |
| :---- | :---------- |
| `type` | Type of filter, either `replace`, `exclude` (ignore), or `attribute`. |
| `args` | Argument(s) to be used for the filter. If you are replacing content, your `args` should be a comma-separated list of the regular expression to search for and the expression to replace with. If you are excluding content, your `args` should enumerate the CSS selector(s) to ignore. If you are attempting to retrieve an HTML attribute, specify the attribute (e.g. `src`) in your `args` value. |

### Custom Javascript

<div class="alert">This functionality is currently in beta.</div>

Using the `X-Evaluate` custom header (sent as `X-Forward-X-Evaluate`), you can inject your own Javascript code into web pages. Custom Javascript will be executed once the DOM has loaded.

Custom Javascript should be provided as a text string and contained in its own function. You must also include the special functions `start()` and `end()` to indicate the beginning and end of your custom script. Once `end()` fires, the updated document will be processed by your chosen extraction API.

It's recommended that your `end()` function be offset using `setTimeout` (see [JavaScript Timing Events](https://www.w3schools.com/js/js_timing.asp)) in order to accommodate your primary function processing. Additionally, if your custom Javascript requires access to Ajax-delivered content, it may be necessary to offset your entire function using `setTimeout` in order to delay the start of your processing.

The following sample `X-Evaluate` header waits one-half second after the DOM has loaded, enacts a click on the `a.loadMore` element, then waits 800 milliseconds before signaling the `end()`:


```js
function() {
    start();
    setTimeout(function() {
        var loadMoreNode = document.querySelector('a.loadMore');
        if (loadMoreNode != null) {
            loadMoreNode.click();
            setTimeout(function() {
                end();
            }, 800);
        } else {
            end();
        }
    }, 500);
}
```

Delivered as a rule:

```json
"xForwardHeaders": {
   "X-Evaluate": "function() {start();setTimeout(function(){var loadMoreNode=document.querySelector('a.loadMore');if (loadMoreNode != null) {loadMoreNode.click();setTimeout(function(){end();}, 800);} else {end();}},500);}"
}
```

## Sample Ruleset

The following ruleset JSON gives an example of many of the fields and functionality described above.

```json
{
    "urlPattern": "(http(s)?://)?(.*\\.)?docs.diffbot.com.*",
    "testUrl": "https://docs.diffbot.com/docs/en/guides-zapier",
    "api": "/api/article",
    "prefilters": ["#footer",".advertisement-block"],
    "renderOptions": "wait=10000",
    "xForwardHeaders": {
      "Cookie": [
        "cookie value 1",
        "cookie value 2"
      ],
      "Referer": "http://www.diffbot.com",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36"
    },
    "rules": [
    {
      "selector": ".entry-content p",
      "name": "text"
    },
    {
      "selector": ".entry-content img",
      "name": "images",
      "rules": [
        {
          "name": "primary",
          "value": "true"
        },
        {
          "selector": "img",
          "name": "url",
          "filters": [
            {
              "args": [
                "src"
              ],
              "type": "attribute"
            }
          ]
        }
      ]
    }
  ]
}

```

The above:

- Specifies a URL pattern regular expression that matches *.docs.diffbot.com
- Includes a `testUrl` -- for preview in the Custom API UI.
- Specifies the API (`/api/article`).
- Then, within the `rules` object:
    - A simple selector to override the `text` (and `html`) field.
    - A selector for the `images` parent container, with its own sub-array of rules for individual images.
    - A filter on the specific image `url` field to retrieve the elements `src` attribute.

## Creating or Updating Rules

An individual rule is determined by a unique `urlPattern` and `api` combination. Create or update rules by POSTing to the following endpoint:

```plaintext
https://api.diffbot.com/v3/custom
```

Append the following querystring arguments to your POST URL:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token </td></tr><tr><td colspan="2">**Optional arguments**</td> |
| `replace` | Hash code of a single ruleset to update. This allows you to update an existing rule's API or `urlPattern` without adding a new set. |

Your POST body should either contain a JSON array of JSON objects -- corresponding to the above fields -- or a single JSON object.

To update or add a single ruleset, send a single JSON object. This will add the new ruleset to your token's rules (or update an existing  `urlPattern` and `api` pair). To update a ruleset while changing either the `api` or `urlPattern`, send that ruleset's hashcode, as returned from the ruleset's last update.

To update/overwrite all rules for your token, send a JSON array of objects. This will replace all rulesets for your token.

### Response

Updating or creating rules will return a JSON response containing an array of `hashes`. These hashes represent each of your updated or created rules, and can be used to update individual rules.

```json
{
  "hashes":
    [
      "507a31ce",
      "ax7n3sa1",
      "z992ns6c"
    ]
}
```
