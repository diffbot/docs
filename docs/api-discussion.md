---
id: api-discussion
title: Discussion Extraction API
sidebar_label: Discussion Extraction API
---

The Discussion API automatically structures and extracts entire threads or lists of reviews/comments from most discussion pages, forums, and similarly structured web pages.

## Request

To use the Discussion Thread API, perform a HTTP GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/discussion
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |
| `url` | Web page URL of the discussion to process (URL encoded) </td></tr><tr><td colspan="2">**Optional arguments**</td> |
| `fields` | Used to specify optional fields to be returned by the Discussion API. See the [Fields](#the-fields-argument) section below. |
| `timeout` | Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000). |
| `callback` | Use for jsonp requests. Needed for cross-domain ajax. |
| `maxPages` | Set the maximum number of pages in a thread to automatically concatenate in a single response. Default = 1 (no concatenation). Set `maxPages=all` to retrieve all pages of a thread regardless of length. Each individual page will count as a separate API call. |

### The fields argument

Use the `fields` argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or `*` to return all sub-fields.

For example, to return `meta` (in addition to the default fields), your `&fields` argument would be:

```plaintext
&fields=meta
```

## Response

The Discussion API returns data in JSON format.

Each V3 response includes a `request` object (which returns request-specific metadata), and an `objects` array, which will include the extracted information for all objects on a submitted page. The Discussion API returns all post data in a single object within the `objects` array.

Within the Article and Product APIs (to extract comments or review data), discussion data will be returned within the nested `discussion` object.

The Discussion API `objects` / `discussion` response will include the following fields:

| Field | Description |
| :---- | :---------- |
| `type` | Type of object (always `discussion`). |
| `pageUrl` | URL of submitted page / page from which the discussion is extracted. |
| `resolvedPageUrl` | Returned if the `pageUrl` redirects to another URL. |
| `title` | Title of the discussion. |
| `numPosts` | Number of individual posts in the thread. |
| `posts` | Array of individual posts. |
| &#x21B3;`type` | Type of element (always `post`). |
| &#x21B3;`id` | ID of the individual post. The first post of a thread will have an ID of 0. |
| &#x21B3;`parentId` | ID of the parent, if the post is a reply or response. |
| &#x21B3;`text` | Full text of the extracted post. |
| &#x21B3;`html` | Diffbot-normalized HTML of the extracted post. Please see the [HTML Specification](api-article-html.md) for a breakdown of elements and attributes returned. |
| &#x21B3;`tags` | If the post is long enough, an array of tags generated from its specific content. |
| &#x21B3;`humanLanguage` | Spoken/human language of the post, using two-letter [ISO 639-1 nomenclature](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). |
| &#x21B3;`images` | If any images are detected within post content, they will be returned in a separate array. Individual array fields are the same as the [Article API's](api-article.md) `images` array. |
| &#x21B3;`date` | Date of post, normalized in most cases to [RFC 1123 (HTTP/1.1)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3). |
| &#x21B3;`author` | Name/username of the post author. |
| &#x21B3;`authorUrl` | URL of the author profile page, if available. |
| &#x21B3;`pageUrl` | URL of the page on which the post was found. |
| &#x21B3;`diffbotUri` | Internal ID used for indexing. |
| `tags` | Array of tags/entities as generated from analysis of all extracted `posts` and cross-referenced with [DBpedia](https://wiki.dbpedia.org/About) and other data sources. |
| `participants` | Number of unique participants in the discussion thread or comments. |
| `numPages` | Number of pages in the thread concatenated to form the `posts` response. Use `maxPages` to define how many pages to concatenate. [More on automatic concatenation](guides-multi-page-articles-discussions.md). |
| `nextPage` | If discussion spans multiple pages, `nextPage` will return the subsequent page URL. |
| `nextPages` | Array of all page URLs concatenated in a multipage discussion. [More on automatic concatenation](guides-multi-page-articles-discussions.md). |
| `provider` | Discussion service provider (e.g., Disqus, Facebook), if known. |
| `humanLanguage` | Spoken/human language of the discussion / comment thread, using two-letter [ISO 639-1 nomenclature](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). |
| `rssUrl` | URL of the discussion's RSS feed, if available. |
| `diffbotUri` | Unique object ID. The `diffbotUri` is generated from the values of various Discussion fields and uniquely identifies the object. This can be used for deduplication. </td></tr><tr><td colspan="2">**Optional fields, available using `fields=` argument**</td> |
| `sentiment` | Returns a sentiment score of each individual post, a value ranging from -1.0 (very negative) to 1.0 (very positive). For English-language posts only. |
| `links` | Returns a top-level object (`links`) containing all hyperlinks found on the page. |
| `meta` | Returns a top-level object (`meta`) containing the full contents of page `meta` tags, including sub-arrays for [OpenGraph](https://ogp.me/) tags, [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup) metadata, [schema.org](https://www.schema.org) microdata, and -- if available -- [oEmbed](https://www.oembed.com) metadata. |
| `querystring` | Returns any key/value pairs present in the URL querystring. Items without a discrete value will be returned as `true`. |
| `breadcrumb` | Returns a top-level array (`breadcrumb`) of URLs and link text from page breadcrumbs. |

## Example Response

The following response shows the extracted contents from [this Hacker News discussion thread](https://news.ycombinator.com/item?id=5608988):

```json
{
  "request": {
    "pageUrl": "https://news.ycombinator.com/item?id=5608988",
    "api": "discussion",
    "version": 3
  },
  "objects": [
    {
      "numPages": 1,
      "humanLanguage": "en",
      "confidence": 0.34803802321952554,
      "diffbotUri": "discussion|3|-110040828",
      "pageUrl": "https://news.ycombinator.com/item?id=5608988",
      "numPosts": 1,
      "type": "discussion",
      "title": "Show HN: Analysis of 2.5 Years of Frontpage Articles",
      "posts": [
        {
          "humanLanguage": "en",
          "author": "miket",
          "authorUrl": "https://news.ycombinator.com/user?id=miket",
          "diffbotUri": "post|3|1167619016",
          "html": "<table> <tbody><tr><td><table> <tbody><tr><td> <a href=\"https://news.ycombinator.com/user?id=johncoogan\">johncoogan</a> <a href=\"https://news.ycombinator.com/item?id=5609164\">1132 days ago</a>   <br> Huge fan of DiffBot and awesome projects like this. Really cool analysis, thanks for posting.<p>Would be possible for you to post / send me the original data? I have been very interested in working on more longitudinal analysis using DiffBot data and this seems like a fun and interesting place to start. I'm happy to open-source / clearly attribute DiffBot's contribution to whatever I find / hack together, and would feel a lot more comfortable about integrating DiffBot into larger projects in the future.</p><p>Please email me (in my profile) if this is a possibility. Thanks!</p> <p> -----  </p></td></tr> </tbody></table></td></tr> <tr><td><table> <tbody><tr><td> <a href=\"https://news.ycombinator.com/user?id=tswaterman\">tswaterman</a> <a href=\"https://news.ycombinator.com/item?id=5609252\">1132 days ago</a>   <br> Great idea! We'd be happy to share/help. If more people are interested, we'll figure out a good way to distribute the dataset generally. But in fact, you can extract the same data set, and add whatever other smart things you want along with it, using the Diffbot APIs. Everything we did to get this information is explained on our blog at<pre><code>    http://blog.diffbot.com/diffbots-hackernews-trend-analyzer/\n</code></pre> Sounds like you're already using the Diffbot service, but for anyone who's not, they can sign up for a free access token on our 'pricing' page at <a href=\"http://www.diffbot.com/\">http://www.diffbot.com/</a> It's a few hundred thousand pages you'd need to analyze to get this, which doesn't quite fit under the free plan. You might not want to analyze as many years worth of stuff as we did for this demo, though.<p>All the pieces and services we used for this, including all the text extraction, topic detection, and crawling, are available to any user.</p><p>Have fun with it, and keep us informed about whatever cool stuff you build with it, and of course tell us about any features or capabilities you wish Diffbot can provide.</p> <p> -----  </p></td></tr> </tbody></table></td></tr> <tr><td><table> <tbody><tr><td> <a href=\"https://news.ycombinator.com/user?id=tliou\">tliou</a> <a href=\"https://news.ycombinator.com/item?id=5609057\">1132 days ago</a>   <br> Had to figure out how to use it ... but interesting once you do! Android vs IPhone on Hackernews frontpage shows spike in iphone on launch dates, but mediocre to no activity for android. is it because android is less interesting and not as innovative? or not as fun to talk/read about?<p><a href=\"http://diffbot.com/robotlab/hackernews/#type=tags&item=IPhone&item=Android%20(operating%20system)&item=\">http://diffbot.com/robotlab/hackernews/#type=tags&amp;item=I...</a></p> <p> -----  </p></td></tr> </tbody></table></td></tr> <tr><td><table> <tbody><tr><td> <a href=\"https://news.ycombinator.com/user?id=mayank\">mayank</a> <a href=\"https://news.ycombinator.com/item?id=5609116\">1132 days ago</a>   <br> Funny, I just built a HN article catcher that uses Diffbot to collect and classify submissions from the /new page [1]. I've been a Diffbot fan for quite a while now (although their entity recognition/tag classifier needs a bit of work as you can see from the categorization on my catcher page below).<p>[1] <a href=\"http://lahiri.me/more\">http://lahiri.me/more</a></p><p>I should add that their API is fantastic, and far better than using BeautifulSoup/NLTK for extracting textual content from webpages.</p> <p> -----  </p></td></tr> </tbody></table></td></tr> <tr><td><table> <tbody><tr><td> <a href=\"https://news.ycombinator.com/user?id=tswaterman\">tswaterman</a> <a href=\"https://news.ycombinator.com/item?id=5609278\">1132 days ago</a>   <br> Cool! How many articles, or what time period, did you use for this? It looks like you're using only a subset of the topic tags -- did you make a list of 'interesting stuff' to filter against? <p> -----  </p></td></tr> </tbody></table></td></tr> <tr><td><table> <tbody><tr><td> <a href=\"https://news.ycombinator.com/user?id=mayank\">mayank</a> <a href=\"https://news.ycombinator.com/item?id=5609731\">1132 days ago</a>   <br> It's been running for about a week I think, and I'm just taking the top 80 or so tags by article count. Glad you like it :) <p> -----  </p></td></tr> </tbody></table></td></tr> <tr><td><table> <tbody><tr><td> <a href=\"https://news.ycombinator.com/user?id=minimax\">minimax</a> <a href=\"https://news.ycombinator.com/item?id=5609100\">1132 days ago</a>   <br> Neat! Wish I could select by just domain name (i.e. just nytimes.com rather than dozen or so whatever.nytimes.com subdomains). <p> -----  </p></td></tr> </tbody></table></td></tr> </tbody></table>",
          "pageUrl": "https://news.ycombinator.com/item?id=5608988",
          "id": 0,
          "text": "johncoogan 1132 days ago\nHuge fan of DiffBot and awesome projects like this. Really cool analysis, thanks for posting.\nWould be possible for you to post / send me the original data? I have been very interested in working on more longitudinal analysis using DiffBot data and this seems like a fun and interesting place to start. I'm happy to open-source / clearly attribute DiffBot's contribution to whatever I find / hack together, and would feel a lot more comfortable about integrating DiffBot into larger projects in the future.\nPlease email me (in my profile) if this is a possibility. Thanks!\n\n\n-----\n\n\n\n\ntswaterman 1132 days ago\nGreat idea! We'd be happy to share/help. If more people are interested, we'll figure out a good way to distribute the dataset generally. But in fact, you can extract the same data set, and add whatever other smart things you want along with it, using the Diffbot APIs. Everything we did to get this information is explained on our blog at\nhttp://blog.diffbot.com/diffbots-hackernews-trend-analyzer/ Sounds like you're already using the Diffbot service, but for anyone who's not, they can sign up for a free access token on our 'pricing' page at \nhttp://www.diffbot.com/ It's a few hundred thousand pages you'd need to analyze to get this, which doesn't quite fit under the free plan. You might not want to analyze as many years worth of stuff as we did for this demo, though.\nAll the pieces and services we used for this, including all the text extraction, topic detection, and crawling, are available to any user.\nHave fun with it, and keep us informed about whatever cool stuff you build with it, and of course tell us about any features or capabilities you wish Diffbot can provide.\n\n\n-----\n\n\n\n\ntliou 1132 days ago\nHad to figure out how to use it ... but interesting once you do! Android vs IPhone on Hackernews frontpage shows spike in iphone on launch dates, but mediocre to no activity for android. is it because android is less interesting and not as innovative? or not as fun to talk/read about?\nhttp://diffbot.com/robotlab/hackernews/#type=tags&item=I...\n\n\n-----\n\n\n\n\nmayank 1132 days ago\nFunny, I just built a HN article catcher that uses Diffbot to collect and classify submissions from the /new page [1]. I've been a Diffbot fan for quite a while now (although their entity recognition/tag classifier needs a bit of work as you can see from the categorization on my catcher page below).[1] http://lahiri.me/more\nI should add that their API is fantastic, and far better than using BeautifulSoup/NLTK for extracting textual content from webpages.\n\n\n-----\n\n\n\n\ntswaterman 1132 days ago\nCool! How many articles, or what time period, did you use for this? It looks like you're using only a subset of the topic tags -- did you make a list of 'interesting stuff' to filter against?\n\n\n-----\n\n\n\n\nmayank 1132 days ago\nIt's been running for about a week I think, and I'm just taking the top 80 or so tags by article count. Glad you like it :)\n\n\n-----\n\n\n\n\nminimax 1132 days ago\nNeat! Wish I could select by just domain name (i.e. just nytimes.com rather than dozen or so whatever.nytimes.com subdomains).\n\n\n-----",
          "type": "post",
          "title": "Show HN: Analysis of 2.5 Years of Frontpage Articles"
        }
      ],
      "tags": [
        {
          "score": 0.52,
          "count": 2,
          "label": "Ellipsis",
          "uri": "http://dbpedia.org/resource/Ellipsis",
          "rdfTypes": [
            "http://www.w3.org/2002/07/owl#Thing"
          ]
        }
      ],
      "participants": 1
    }
  ]
}
```

## Authentication

You can supply Diffbot with basic authentication credentials or custom HTTP headers (see below) to access intranet pages or other sites that require a login.

### Basic Authentication

To access pages that require a login/password (using [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)), include the username and password in your `url` parameter, e.g.: `url=http%3A%2F%2FUSERNAME:PASSWORD@www.diffbot.com`.

## Custom HTTP Headers

You can supply Diffbot APIs with custom HTTP headers that will be passed along when making requests to third-party sites. These can be used to define specific Referer, User-Agent, Cookie or any other values.

Custom headers should be sent as HTTP headers in your request to `https://api.diffbot.com`, and prepended with `X-Forward-`.

For instance, to send custom `User-Agent`, `Referer` and `My-Custom-Header` header values:

| Desired Header | Send to api.diffbot.com |
| :-- | :-- |
| `User-Agent:Diffbot` | `X-Forward-User-Agent:Diffbot` |
| `Referer:diffbot.com` | `X-Forward-Referer:diffbot.com` |
| `My-Custom-Header:CustomValue` | `X-Forward-My-Custom-Header:CustomValue` |

## Custom Javascript

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

Delivered as a string value as a custom header:

```json
"X-Forward-X-Evaluate": "function() {start();setTimeout(function(){var loadMoreNode=document.querySelector('a.loadMore');if (loadMoreNode != null) {loadMoreNode.click();setTimeout(function(){end();}, 800);} else {end();}},500);}"
```

## Posting Content

If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to the Discussion API endpoint for analysis:

```plaintext
https://api.diffbot.com/v3/discussion?token=...&url=...
```

Please note that the `url` argument is still required, and will be used to resolve any relative links contained in the markup.

Provide the content to analyze as your POST body, and specify the `Content-Type` header as `text/html`.
