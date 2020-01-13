---
id: api-discussion
title: Discussion Extraction API
sidebar_label: Discussion Extraction API
todo: Modify links to old API docs
---

<div id="docBody">
<p>The Discussion API automatically structures and extracts entire threads or lists of reviews/comments from most discussion pages, forums, and similarly structured web pages.</p>
<h3>Request</h3>
<p>To use the Discussion Thread API, perform a HTTP GET request on the following endpoint:</p>
  

```text
https://api.diffbot.com/v3/discussion
```


<p>Provide the following arguments:</p>

<!--{arguments}--><table class="controls table table-bordered" id="arguments" border="0" cellpadding="5">
<thead><tr>
<th>Argument</th>
<th>Description</th>
</tr></thead>

<tr>
<td class=""><code>token</code></td>
<td class=" default"><div>Developer token</div></td>
</tr>
<tr>
<td class=""><code>url</code></td>
<td class=" default"><div>Web page URL of the discussion to process (URL encoded)</div></td>
</tr>

<tr>
<td colspan="2" class="header">Optional arguments</td>
</tr>
<tr>
<td class=""><code>fields</code></td>
<td class=" optional"><div>Used to specify optional fields to be returned by the Discussion API. See the <a href="#fields">Fields</a> section below.</div></td>
</tr>
<tr>
<td class=""><code>timeout</code></td>
<td class=" optional"><div>Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000).</div></td>
</tr>
<tr>
<td class=""><code>callback</code></td>
<td class=" optional"><div>Use for jsonp requests. Needed for cross-domain ajax.</div></td>
</tr>
<tr>
<td class=""><code>maxPages</code></td>
<td class=" optional"><div>Set the maximum number of pages in a thread to automatically concatenate in a single response. Default = 1 (no concatenation). Set <code>maxPages=all</code> to retrieve all pages of a thread regardless of length. Each individual page will count as a separate API call.</div></td>
</tr>
</table>
<!--{endarguments}-->

<h3 id="response">Response</h3>
<p>The Discussion API returns data in JSON format.</p>

<p>Each V3 response includes a <code>request</code> object (which returns request-specific metadata), and an <code>objects</code> array, which will include the extracted information for all objects on a submitted page. The Discussion API returns all post data in a single object within the <code>objects</code> array.
</p>
<p>Within the Article and Product APIs (to extract comments or review data), discussion data will be returned within the nested <code>discussion</code> object.</p>
<p>The Discussion API <code>objects</code> / <code>discussion</code> response will include the following fields:</p>

<!--{fields}--><table class="controls table table-bordered" id="fields" border="0" cellpadding="5">
<thead><tr>
<th>Field</th>
<th>Description</th>
</tr></thead>

<tr>
<td class=""><code>type</code></td>
<td class=" default"><div>Type of object (always <code>discussion</code>).</div></td>
</tr>
<tr>
<td class=""><code>pageUrl</code></td>
<td class=" default"><div>URL of submitted page / page from which the discussion is extracted.</div></td>
</tr>
<tr>
<td class=""><code>resolvedPageUrl</code></td>
<td class=" default"><div>Returned if the <code>pageUrl</code> redirects to another URL.</div></td>
</tr>
<tr>
<td class=""><code>title</code></td>
<td class=" default"><div>Title of the discussion.</div></td>
</tr>
<tr>
<td class=""><code>numPosts</code></td>
<td class=" default"><div>Number of individual posts in the thread.</div></td>
</tr>
<tr>
<td class="parent"><code>posts</code></td>
<td class="parent default"><div>Array of individual posts.</div></td>
</tr>
<tr>
<td class="posts indent"><code>type</code></td>
<td class="posts indent default"><div>Type of element (always <code>post</code>).</div></td>
</tr>
<tr>
<td class="posts indent"><code>id</code></td>
<td class="posts indent default"><div>ID of the individual post. The first post of a thread will have an ID of 0.</div></td>
</tr>
<tr>
<td class="posts indent"><code>parentId</code></td>
<td class="posts indent default"><div>ID of the parent, if the post is a reply or response.</div></td>
</tr>
<tr>
<td class="posts indent"><code>text</code></td>
<td class="posts indent default"><div>Full text of the extracted post.</div></td>
</tr>
<tr>
<td class="posts indent"><code>html</code></td>
<td class="posts indent default"><div>Diffbot-normalized HTML of the extracted post. Please see the <a href="api-article-html">HTML Specification</a> for a breakdown of elements and attributes returned.</div></td>
</tr>
<tr>
<td class="posts indent"><code>tags</code></td>
<td class="posts indent default"><div>If the post is long enough, an array of tags generated from its specific content.</div></td>
</tr>
<tr>
<td class="posts indent"><code>humanLanguage</code></td>
<td class="posts indent default"><div>Spoken/human language of the post, using two-letter <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">ISO 639-1 nomenclature</a>.</div></td>
</tr>
<tr>
<td class="posts indent"><code>images</code></td>
<td class="posts indent default"><div>If any images are detected within post content, they will be returned in a separate array. Individual array fields are the same as the <a href="api-article">Article API's</a> <code>images</code> array.</div></td>
</tr>
<tr>
<td class="posts indent"><code>date</code></td>
<td class="posts indent default"><div>Date of post, normalized in most cases to <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3">RFC 1123 (HTTP/1.1)</a>.</div></td>
</tr>
<tr>
<td class="posts indent"><code>author</code></td>
<td class="posts indent default"><div>Name/username of the post author.</div></td>
</tr>
<tr>
<td class="posts indent"><code>authorUrl</code></td>
<td class="posts indent default"><div>URL of the author profile page, if available.</div></td>
</tr>
<tr>
<td class="posts indent"><code>pageUrl</code></td>
<td class="posts indent default"><div>URL of the page on which the post was found.</div></td>
</tr>
<tr>
<td class="posts indent"><code>diffbotUri</code></td>
<td class="posts indent default"><div>Internal ID used for indexing.</div></td>
</tr>
<tr>
<td class=""><code>tags</code></td>
<td class=" default"><div>Array of tags/entities as generated from analysis of all extracted <code>posts</code> and cross-referenced with <a href="http://wiki.dbpedia.org/About" target="_new">DBpedia</a> and other data sources.</div></td>
</tr>
<tr>
<td class=""><code>participants</code></td>
<td class=" default"><div>Number of unique participants in the discussion thread or comments.</div></td>
</tr>
<tr>
<td class=""><code>numPages</code></td>
<td class=" default"><div>Number of pages in the thread concatenated to form the <code>posts</code> response. Use <code>maxPages</code> to define how many pages to concatenate. <a href="guides-multi-page-articles-discussions">More on automatic concatenation</a>.</div></td>
</tr>
<tr>
<td class=""><code>nextPage</code></td>
<td class=" default"><div>If discussion spans multiple pages, <code>nextPage</code> will return the subsequent page URL.</div></td>
</tr>
<tr>
<td class=""><code>nextPages</code></td>
<td class=" default"><div>Array of all page URLs concatenated in a multipage discussion. <a href="guides-multi-page-articles-discussions">More on automatic concatenation</a>.</div></td>
</tr>
<tr>
<td class=""><code>provider</code></td>
<td class=" default"><div>Discussion service provider (e.g., Disqus, Facebook), if known.</div></td>
</tr>
<tr>
<td class=""><code>humanLanguage</code></td>
<td class=" default"><div>Spoken/human language of the discussion / comment thread, using two-letter <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">ISO 639-1 nomenclature</a>.</div></td>
</tr>
<tr>
<td class=""><code>rssUrl</code></td>
<td class=" default"><div>URL of the discussion's RSS feed, if available.</div></td>
</tr>
<tr>
<td class=""><code>diffbotUri</code></td>
<td class=" default"><div>Unique object ID. The <code>diffbotUri</code> is generated from the values of various Discussion fields and uniquely identifies the object. This can be used for deduplication.</div></td>
</tr>

<tr>
<td colspan="2" class="header">Optional fields, available using <code>fields=</code> argument</td>
</tr>
<tr>
<td class=""><code>sentiment</code></td>
<td class=" optional"><div>Returns a sentiment score of each individual post, a value ranging from -1.0 (very negative) to 1.0 (very positive). For English-language posts only.</div></td>
</tr>
<tr>
<td class=""><code>links</code></td>
<td class=" optional"><div>Returns a top-level object (<code>links</code>) containing all hyperlinks found on the page.</div></td>
</tr>
<tr>
<td class=""><code>meta</code></td>
<td class=" optional"><div>Returns a top-level object (<code>meta</code>) containing the full contents of page <code>meta</code> tags, including sub-arrays for <a href="http://ogp.me/" target="_new">OpenGraph</a> tags, <a href="https://dev.twitter.com/docs/cards/markup-reference" target="_new">Twitter Card</a> metadata, <a href="http://www.schema.org" target="_new">schema.org</a> microdata, and -- if available -- <a href="http://www.oembed.com" target="_new">oEmbed</a> metadata.</div></td>
</tr>
<tr>
<td class=""><code>querystring</code></td>
<td class=" optional"><div>Returns any key/value pairs present in the URL querystring. Items without a discrete value will be returned as <code>true</code>.</div></td>
</tr>
<tr>
<td class=""><code>breadcrumb</code></td>
<td class=" optional"><div>Returns a top-level array (<code>breadcrumb</code>) of URLs and link text from page breadcrumbs.</div></td>
</tr>
</table>
<!--{endfields}-->


<h3>Example Response</h3>
<p>The following response shows the extracted contents from <a href="https://news.ycombinator.com/item?id=5608988" target="_blank">this Hacker News discussion thread</a>:</p>
<div class="indent">
<!--{codesample1}-->

```text
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
          "html": "&lt;table&gt; &lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;table&gt; &lt;tbody&gt;&lt;tr&gt;&lt;td&gt; &lt;a href=\"https://news.ycombinator.com/user?id=johncoogan\"&gt;johncoogan&lt;/a&gt; &lt;a href=\"https://news.ycombinator.com/item?id=5609164\"&gt;1132 days ago&lt;/a&gt;   &lt;br&gt; Huge fan of DiffBot and awesome projects like this. Really cool analysis, thanks for posting.&lt;p&gt;Would be possible for you to post / send me the original data? I have been very interested in working on more longitudinal analysis using DiffBot data and this seems like a fun and interesting place to start. I'm happy to open-source / clearly attribute DiffBot's contribution to whatever I find / hack together, and would feel a lot more comfortable about integrating DiffBot into larger projects in the future.&lt;/p&gt;&lt;p&gt;Please email me (in my profile) if this is a possibility. Thanks!&lt;/p&gt; &lt;p&gt; -----  &lt;/p&gt;&lt;/td&gt;&lt;/tr&gt; &lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;table&gt; &lt;tbody&gt;&lt;tr&gt;&lt;td&gt; &lt;a href=\"https://news.ycombinator.com/user?id=tswaterman\"&gt;tswaterman&lt;/a&gt; &lt;a href=\"https://news.ycombinator.com/item?id=5609252\"&gt;1132 days ago&lt;/a&gt;   &lt;br&gt; Great idea! We'd be happy to share/help. If more people are interested, we'll figure out a good way to distribute the dataset generally. But in fact, you can extract the same data set, and add whatever other smart things you want along with it, using the Diffbot APIs. Everything we did to get this information is explained on our blog at&lt;pre&gt;&lt;code&gt;    http://blog.diffbot.com/diffbots-hackernews-trend-analyzer/\n&lt;/code&gt;&lt;/pre&gt; Sounds like you're already using the Diffbot service, but for anyone who's not, they can sign up for a free access token on our 'pricing' page at &lt;a href=\"http://www.diffbot.com/\"&gt;http://www.diffbot.com/&lt;/a&gt; It's a few hundred thousand pages you'd need to analyze to get this, which doesn't quite fit under the free plan. You might not want to analyze as many years worth of stuff as we did for this demo, though.&lt;p&gt;All the pieces and services we used for this, including all the text extraction, topic detection, and crawling, are available to any user.&lt;/p&gt;&lt;p&gt;Have fun with it, and keep us informed about whatever cool stuff you build with it, and of course tell us about any features or capabilities you wish Diffbot can provide.&lt;/p&gt; &lt;p&gt; -----  &lt;/p&gt;&lt;/td&gt;&lt;/tr&gt; &lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;table&gt; &lt;tbody&gt;&lt;tr&gt;&lt;td&gt; &lt;a href=\"https://news.ycombinator.com/user?id=tliou\"&gt;tliou&lt;/a&gt; &lt;a href=\"https://news.ycombinator.com/item?id=5609057\"&gt;1132 days ago&lt;/a&gt;   &lt;br&gt; Had to figure out how to use it ... but interesting once you do! Android vs IPhone on Hackernews frontpage shows spike in iphone on launch dates, but mediocre to no activity for android. is it because android is less interesting and not as innovative? or not as fun to talk/read about?&lt;p&gt;&lt;a href=\"http://diffbot.com/robotlab/hackernews/#type=tags&amp;item=IPhone&amp;item=Android%20(operating%20system)&amp;item=\"&gt;http://diffbot.com/robotlab/hackernews/#type=tags&amp;amp;item=I...&lt;/a&gt;&lt;/p&gt; &lt;p&gt; -----  &lt;/p&gt;&lt;/td&gt;&lt;/tr&gt; &lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;table&gt; &lt;tbody&gt;&lt;tr&gt;&lt;td&gt; &lt;a href=\"https://news.ycombinator.com/user?id=mayank\"&gt;mayank&lt;/a&gt; &lt;a href=\"https://news.ycombinator.com/item?id=5609116\"&gt;1132 days ago&lt;/a&gt;   &lt;br&gt; Funny, I just built a HN article catcher that uses Diffbot to collect and classify submissions from the /new page [1]. I've been a Diffbot fan for quite a while now (although their entity recognition/tag classifier needs a bit of work as you can see from the categorization on my catcher page below).&lt;p&gt;[1] &lt;a href=\"http://lahiri.me/more\"&gt;http://lahiri.me/more&lt;/a&gt;&lt;/p&gt;&lt;p&gt;I should add that their API is fantastic, and far better than using BeautifulSoup/NLTK for extracting textual content from webpages.&lt;/p&gt; &lt;p&gt; -----  &lt;/p&gt;&lt;/td&gt;&lt;/tr&gt; &lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;table&gt; &lt;tbody&gt;&lt;tr&gt;&lt;td&gt; &lt;a href=\"https://news.ycombinator.com/user?id=tswaterman\"&gt;tswaterman&lt;/a&gt; &lt;a href=\"https://news.ycombinator.com/item?id=5609278\"&gt;1132 days ago&lt;/a&gt;   &lt;br&gt; Cool! How many articles, or what time period, did you use for this? It looks like you're using only a subset of the topic tags -- did you make a list of 'interesting stuff' to filter against? &lt;p&gt; -----  &lt;/p&gt;&lt;/td&gt;&lt;/tr&gt; &lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;table&gt; &lt;tbody&gt;&lt;tr&gt;&lt;td&gt; &lt;a href=\"https://news.ycombinator.com/user?id=mayank\"&gt;mayank&lt;/a&gt; &lt;a href=\"https://news.ycombinator.com/item?id=5609731\"&gt;1132 days ago&lt;/a&gt;   &lt;br&gt; It's been running for about a week I think, and I'm just taking the top 80 or so tags by article count. Glad you like it :) &lt;p&gt; -----  &lt;/p&gt;&lt;/td&gt;&lt;/tr&gt; &lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;table&gt; &lt;tbody&gt;&lt;tr&gt;&lt;td&gt; &lt;a href=\"https://news.ycombinator.com/user?id=minimax\"&gt;minimax&lt;/a&gt; &lt;a href=\"https://news.ycombinator.com/item?id=5609100\"&gt;1132 days ago&lt;/a&gt;   &lt;br&gt; Neat! Wish I could select by just domain name (i.e. just nytimes.com rather than dozen or so whatever.nytimes.com subdomains). &lt;p&gt; -----  &lt;/p&gt;&lt;/td&gt;&lt;/tr&gt; &lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt; &lt;/tbody&gt;&lt;/table&gt;",
          "pageUrl": "https://news.ycombinator.com/item?id=5608988",
          "id": 0,
          "text": "johncoogan 1132 days ago\nHuge fan of DiffBot and awesome projects like this. Really cool analysis, thanks for posting.\nWould be possible for you to post / send me the original data? I have been very interested in working on more longitudinal analysis using DiffBot data and this seems like a fun and interesting place to start. I'm happy to open-source / clearly attribute DiffBot's contribution to whatever I find / hack together, and would feel a lot more comfortable about integrating DiffBot into larger projects in the future.\nPlease email me (in my profile) if this is a possibility. Thanks!\n\n\n-----\n\n\n\n\ntswaterman 1132 days ago\nGreat idea! We'd be happy to share/help. If more people are interested, we'll figure out a good way to distribute the dataset generally. But in fact, you can extract the same data set, and add whatever other smart things you want along with it, using the Diffbot APIs. Everything we did to get this information is explained on our blog at\nhttp://blog.diffbot.com/diffbots-hackernews-trend-analyzer/ Sounds like you're already using the Diffbot service, but for anyone who's not, they can sign up for a free access token on our 'pricing' page at \nhttp://www.diffbot.com/ It's a few hundred thousand pages you'd need to analyze to get this, which doesn't quite fit under the free plan. You might not want to analyze as many years worth of stuff as we did for this demo, though.\nAll the pieces and services we used for this, including all the text extraction, topic detection, and crawling, are available to any user.\nHave fun with it, and keep us informed about whatever cool stuff you build with it, and of course tell us about any features or capabilities you wish Diffbot can provide.\n\n\n-----\n\n\n\n\ntliou 1132 days ago\nHad to figure out how to use it ... but interesting once you do! Android vs IPhone on Hackernews frontpage shows spike in iphone on launch dates, but mediocre to no activity for android. is it because android is less interesting and not as innovative? or not as fun to talk/read about?\nhttp://diffbot.com/robotlab/hackernews/#type=tags&amp;item=I...\n\n\n-----\n\n\n\n\nmayank 1132 days ago\nFunny, I just built a HN article catcher that uses Diffbot to collect and classify submissions from the /new page [1]. I've been a Diffbot fan for quite a while now (although their entity recognition/tag classifier needs a bit of work as you can see from the categorization on my catcher page below).[1] http://lahiri.me/more\nI should add that their API is fantastic, and far better than using BeautifulSoup/NLTK for extracting textual content from webpages.\n\n\n-----\n\n\n\n\ntswaterman 1132 days ago\nCool! How many articles, or what time period, did you use for this? It looks like you're using only a subset of the topic tags -- did you make a list of 'interesting stuff' to filter against?\n\n\n-----\n\n\n\n\nmayank 1132 days ago\nIt's been running for about a week I think, and I'm just taking the top 80 or so tags by article count. Glad you like it :)\n\n\n-----\n\n\n\n\nminimax 1132 days ago\nNeat! Wish I could select by just domain name (i.e. just nytimes.com rather than dozen or so whatever.nytimes.com subdomains).\n\n\n-----",
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


<!--{endcodesample1}-->
</div>

<h3 id="authenticating">Authentication and Custom Headers</h3>
<p>You can supply Diffbot with basic authentication credentials or custom HTTP headers (see below) to access intranet pages or other sites that require a login.</p>

<h4>Basic Authentication</h4>
<p>To access pages that require a login/password (using <a href="http://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">basic access authentication</a>), include the username and password in your <code>url</code> parameter, e.g.: <code>url=http%3A%2F%2FUSERNAME:PASSWORD@www.diffbot.com</code>.</p>

<h3 id="customheaders">Custom HTTP Headers</h3>
<p>You can supply Diffbot APIs with custom HTTP headers that will be passed along when making requests to third-party sites. These can be used to define specific Referer, User-Agent, Cookie or any other values.</p>
<p>Custom headers should be sent as HTTP headers in your request to <code>https://api.diffbot.com</code>, and prepended with <code>X-Forward-</code>.</p>
<p>For instance, to send custom <code>User-Agent</code>, <code>Referer</code> and <code>My-Custom-Header</code> header values:</p>
<table class="controls table table-bordered" border="0" cellpadding="5">
<thead><tr>
<th>Desired Header</th>
<th>Send to api.diffbot.com</th>
</tr></thead>
<tbody>
<tr>
<td><code>User-Agent:Diffbot</code></td>
<td><code>X-Forward-User-Agent:Diffbot</code></td>
</tr>
<tr>
<td><code>Referer:diffbot.com</code></td>
<td><code>X-Forward-Referer:diffbot.com</code></td>
</tr>
<tr>
<td><code>My-Custom-Header:CustomValue</code></td>
<td><code>X-Forward-My-Custom-Header:CustomValue</code></td>
</tr>
</tbody>
</table>

<h3 id="x-evaluate">Custom Javascript</h3>
<div class="alert">This functionality is currently in beta.</div>
<p>Using the <code>X-Evaluate</code> custom header (sent as <code>X-Forward-X-Evaluate</code>), you can inject your own Javascript code into web pages. Custom Javascript will be executed once the DOM has loaded.</p>
<p>Custom Javascript should be provided as a text string and contained in its own function. You must also include the special functions <code>start()</code> and <code>end()</code> to indicate the beginning and end of your custom script. Once <code>end()</code> fires, the updated document will be processed by your chosen extraction API.</p>
<p>It's recommended that your <code>end()</code> function be offset using <code>setTimeout</code> (see <a href="http://www.w3schools.com/js/js_timing.asp" target="_blank">JavaScript Timing Events</a>) in order to accommodate your primary function processing. Additionally, if your custom Javascript requires access to Ajax-delivered content, it may be necessary to offset your entire function using <code>setTimeout</code> in order to delay the start of your processing.</p>
<p>The following sample <code>X-Evaluate</code> header waits one-half second after the DOM has loaded, enacts a click on the <code>a.loadMore</code> element, then waits 800 milliseconds before signaling the <code>end()</code>:</p>


```text

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



<p>Delivered as a string value as a custom header:</p>


```text
"X-Forward-X-Evaluate": "function() {start();setTimeout(function(){var loadMoreNode=document.querySelector('a.loadMore');if (loadMoreNode != null) {loadMoreNode.click();setTimeout(function(){end();}, 800);} else {end();}},500);}"
```



<h3 id="posting">Posting Content</h3>
<p>If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to the Discussion API endpoint for analysis:
</p>


```text
https://api.diffbot.com/v3/discussion?token=...&amp;url=...
```


<p>Please note that the <code>url</code> argument is still required, and will be used to resolve any relative links contained in the markup.</p>
<p>Provide the content to analyze as your POST body, and specify the <code>Content-Type</code> header as <code>text/html</code>.</p>

</div>