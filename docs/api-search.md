---
id: api-search
title: Search API
sidebar_label: Search API
todo: Modify links to old Dashboard
---

<div id="docBody">

            <p>Diffbot's Search API allows you to search the extracted content of your Diffbot "collections." A collection is a discrete <a href="/dev/crawl">Crawlbot</a> or <a href="/dev/bulk">Bulk API</a> job, and includes all of the web pages processed within that job.</p>
<p>In order to search a collection, you must first create that collection using either Crawlbot or the Bulk API. A collection can be searched before a crawl or bulk job is finished.</p>
<h3 id="request">Request</h3>
  <p>To use the Search API, perform a GET request on the following endpoint:</p>
  <pre class="code">https://api.diffbot.com/v3/search</pre>
  <p>Provide the following arguments:</p>
  <table class="controls table table-bordered" border="0" cellpadding="5">
  <thead><tr>
<th>Argument</th>
<th>Description</th>
</tr></thead>
  <tbody>
  <tr>
<td><code>token</code></td>
<td>Developer <a href="https://diffbot.com/pricing">token</a>
</td>
</tr>
  <tr>
<td><code>query</code></td>
<td>Search query. Must be <a href="http://en.wikipedia.org/wiki/Percent-encoding" target="_blank">URL-encoded</a>. Please see <a href="#query">query operators</a> below.</td>
</tr>
  <tr>
<td><code>col</code></td>
<td>Name of the collection (Crawlbot or Bulk job name) to search.</td>
</tr>
  <tr><td colspan="2"><strong>Optional arguments</strong></td></tr>
  <tr>
<td><code>num</code></td>
<td>Number of results to return. Default is 20. To return all results in the search, pass <code>num=all</code>.</td>
</tr>
  <tr>
<td><code>start</code></td>
<td>Ordinal position of first result to return. (First position is 0.) Default is 0.</td>
</tr>
  </tbody>
  </table>

  <h3 id="query">Query Operators</h3>
  <p>The <code>query</code> argument contains the actual search contents you wish to perform on your collection(s). Multiple operators and values can be combined.</p>

  <table class="controls table vanilla" border="0" cellpadding="5">
  <thead><tr>
<th>query=</th>
<th>Returns...</th>
</tr></thead>
  <tbody>
  <tr>
<td>computer vision</td>
<td>All objects containing "computer" and "vision" anywhere in all Diffbot-extracted fields.</td>
</tr>
  <tr>
<td>"web page analysis"</td>
<td>All objects containing the phrase "web page analysis" anywhere in all Diffbot-extracted fields.</td>
</tr>
  <tr>
<td><span>author:<span style="color:#888">"John Henry"</span></span></td>
<td>
<span>All objects containing "John Henry" in the <code>author</code> field. All Diffbot fields within a collection can be queried against.</span><br><br>
  <strong>Other examples:</strong> tags:"Barack Obama", offerPrice:10.00</td>
</tr>
  <tr>
<td><span>images.caption:<span style="color:#888">flower</span></span></td>
<td>
<span>All objects containing "flower" in the <code>caption</code> field within a nested <code>images</code> array.</span><br><br>
  <strong>Other example:</strong> images.url:amazon.com</td>
</tr>
  <tr>
<td><span>type:<span style="color:#888">article</span></span></td>
<td>
<span>All objects identified as articles / processed by the Article API.</span><br><br><strong>Other examples:</strong> type:product, type:image</td>
</tr>
  <tr>
<td>
<span style="color:#888">football</span> -49ers</td>
<td>All objects containing "football" but not containing "49ers," in all Diffbot-extracted fields.<br><br><strong>Other examples:</strong> title:pantene -title:conditioner, text:diffbot -author:"farhad manjoo"</td>
</tr>
  <tr>
<td>
<span style="color:#888">john</span> OR <span style="color:#888">paul</span>
</td>
<td>Objects containing either "john" or "paul" in Diffbot-extracted fields. <code>OR</code> must be capitalized.<br><br><strong>Other examples:</strong> title:ukraine OR title:putin, "bill clinton" OR "george bush", title:"puppy chow" OR text:"dog food"
  </td>
</tr>
  <tr>
<td>
<span style="color:#888">george</span> AND <span style="color:#888">ringo</span>
</td>
<td>Objects containing both "george" and "ringo" in Diffbot-extracted fields. <code>AND</code> must be capitalized.<br><br><strong>Other examples:</strong> title:lakers AND text:basketball, "red sox" AND author:"bill simmons"</td>
</tr>
  <!--<tr><td><span style="color:#888">"beach boys"</span> AND NOT <span style="color:#888">beatles</span></td><td>Objects containing "beach boys" but not containing "beatles" in any Diffbot-extracted fields. <code>AND NOT</code> must be capitalized.<br><br><strong>Other examples:</strong> title:pantene AND NOT title:conditioner, text:diffbot AND NOT author:"farhad manjoo"</td></tr>-->
  <tr>
<td>(<span style="color:#888">obama</span> OR <span style="color:#888">clinton</span>) AND <span style="color:#888">president</span>
</td>
<td>Objects either "obama" or "clinton," and also "president." Parentheses can be used to nest Boolean queries.<br><br><strong>Other examples:</strong> (title:diffbot AND title:robots) OR title:startup</td>
</tr>
  <tr>
<td><span>site:<span style="color:#888">diffbot.com</span></span></td>
<td><span>All objects extracted from diffbot.com. The site operator queries against values in the <code>pageUrl</code> and <code>resolvedPageUrl</code> fields.</span></td>
</tr>
  <tr>
<td><span>sortby:<span style="color:#888">timestamp</span></span></td>
<td>Objects sorted (descending) by the specified Diffbot field. Must be a numeric (e.g. "offerPrice") or date field. For date formatting, see <a href="#date">Date Queries</a> below.</td>
</tr>
  <tr>
<td><span>revsortby:<span style="color:#888">date</span></span></td>
<td>Objects sorted (ascending) by the specified Diffbot field. Must be a numeric or date field. For date formatting, see <a href="#date">Date Queries</a> below.</td>
</tr>
 <tr>
<td><span>min:<span style="color:#888">timestamp:1426784899</span></span></td>
<td>All objects indexed (processed) after March 19, 2015 (in Unix epoch time). The <code>min</code> or <code>max</code> operators work only with numeric or date fields. For date formatting options, see <a href="#date">Date Queries</a> below.</td>
</tr>
 <tr>
<td><span>max:<span style="color:#888">offerPrice:1000</span></span></td>
<td>All objects with an offerPrice value equal to or less than "1000." Must be a numeric or date field. For date formatting options, see <a href="#date">Date Queries</a> below.</td>
</tr>
  </tbody>
  </table>
  <h4>Query URL Encoding</h4>
  <p>Be sure to <a href="http://en.wikipedia.org/wiki/Percent-encoding" target="_blank">URL-encode</a> your query. The following examples show some sample queries properly encoded.</p>
  <table class="controls table vanilla" border="0" cellpadding="5">
  <thead><tr>
<th>Query</th>
<th>URL-Encoded Query</th>
</tr></thead>
  <tbody>
  <tr>
<td>computer vision</td>
<td>computer%20vision</td>
</tr>
  <tr>
<td>obama type:article sortby:date</td>
<td>obama%20type%3Aarticle%20sortby%3Adate</td>
</tr>
  <tr>
<td>text:cats author:"Jet Li" min:date:1399669321</td>
<td><div class="wordwrap">text%3Acats%20author%3A%22Jet%20Li%22%20min%3Adate%3A1399669321</div></td>
</tr>
  <tr>
<td>min:date:"Thu, 22 May 2014 00:00:00 GMT"</td>
<td><div class="wordwrap">min%3Adate%3A%22Thu%2C%2022%20May%202014%2000%3A00%3A00%20GMT%22</div></td>
</tr>
  </tbody>
  </table>
  <p>The space character can be represented by "%20" or the "+"-sign.</p>
  <h4 id="date">Date Queries</h4>
  <p>You can query against Diffbot API <code>date</code> fields (the extracted article or discussion post date, for instance), or against the <code>timestamp</code> field, which represents the time of an object's indexing into the collection.</p>
  <p>The <code>timestamp</code> field can be used to <a href="guides-download-latest-round-crawl-results">return the latest content</a> from a crawl or bulk job (e.g. <code>min:timestamp:2015-03-01</code>, for instance only the objects found in the last crawl round, or since the last search was run.</p>
  <p>When querying dates, your date values should be in one the following formats:</p>
  <ul>
    <li>
<a href="http://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. <code>2014-05-09</code> or <code>2014-05-10T17:40:25+00:00</code>
</li>
    <li>
<a href="http://en.wikipedia.org/wiki/Unix_time" target="_blank">Unix timestamp</a>, e.g. <code>1399669321</code>
</li>
    <li>
<a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3" target="_blank">RFC 1123 (HTTP/1.1) </a>, e.g. <code>"Fri, 09 May 2014 23:41:22 GMT"</code>
</li>
    <!--<li>Any human-readable date-string in YMD order, which Diffbot will attempt to normalize, e.g. <code>20140501</code>.</li>-->
  </ul>
  <p>Be sure to wrap any space-containing date strings in quotation marks.</p>
  <p>


</p>
<hr>
<h3 id="response">Response</h3>
  <p>The Search API returns all matching objects found in the collection(s) searched in a JSON format.</p>
  <p>Each response includes a <code>request</code> object (metadata specific to the search request), and an <code>objects</code> array, which will include the extracted information for all matching objects.</p>
  <p>The specific fields returned within each object depend upon the type of each object, and the fields requested in the Crawlbot or Bulk API jobs that populate your collection(s).</p>

 <pre class="code">
{
  "request": {
    "num": 20,
    "col": sampleCollection,
    "start": 0,
    "token": "...",
    "query": "diffy"
  },
  "objects": [
    {
    "type": "article",
    "title": "Diffbot's New Product API Teaches Robots to Shop Online",
    "author": "John Davi",
    "date": "Wed, 31 Jul 2013 08:00:00 GMT",
    "videos": [
      {
        "primary": "true",
        "url": "http://www.youtube.com/embed/lfcri5ungRo?feature=oembed"
      }
    ],
    "tags": [
      "e-commerce",
      "SaaS"
    ],
    "pageUrl": "http://blog.diffbot.com/diffbots-new-product-api-teaches-robots-to-shop-online/",
    "humanLanguage": "en",
    "text": "Diffbot's human wranglers are proud today to announce the release of our newest product: an API for... products!\nThe Product API can be used for extracting clean, structured data from any e-commerce product page. It automatically makes available all the product data you'd expect: price, discount/savings amount, shipping cost, product description, any relevant product images, SKU and/or other product IDs.\nEven cooler: pair the Product API with Crawlbot, our intelligent site-spidering tool, and let Diffbot determine which pages are products, then automatically structure the entire catalog. Here's a quick demonstration of Crawlbot at work:\nWe've developed the Product API over the course of two years, building upon our core vision technology that's extracted structured data from billions of web pages, and training our machine learning systems using data from tens of thousands of unique shopping sites. We can't wait for you to try it out.\nWhat are you waiting for? Check out the Product API documentation and dive on in! If you need a token, check out our pricing and plans (including our Free plan).\nQuestions? Hit us up at support@diffbot.com.",
    "html": "&lt;p&gt;Diffbot’s human wranglers are proud today to announce the release of our newest product: an API for… products!&lt;/p&gt;&lt;p&gt;The &lt;a href=\"http://www.diffbot.com/products/automatic/product\"&gt;Product API&lt;/a&gt; can be used for extracting clean, structured data from any e-commerce product page. It automatically makes available all the product data you’d expect: price, discount/savings amount, shipping cost, product description, any relevant product images, SKU and/or other product IDs.&lt;/p&gt;&lt;p&gt;Even cooler: pair the Product API with &lt;a href=\"http://www.diffbot.com/products/crawlbot\"&gt;Crawlbot&lt;/a&gt;, our intelligent site-spidering tool, and let Diffbot determine which pages are products, then automatically structure the entire catalog. Here’s a quick demonstration of Crawlbot at work:&lt;/p&gt;&lt;figure&gt;&lt;iframe frameborder=\"0\" src=\"http://www.youtube.com/embed/lfcri5ungRo?feature=oembed\"&gt;&lt;/iframe&gt;&lt;/figure&gt;&lt;p&gt;We’ve developed the Product API over the course of two years, building upon our core vision technology that’s extracted structured data from billions of web pages, and training our machine learning systems using data from tens of thousands of unique shopping sites. We can’t wait for you to try it out.&lt;/p&gt;&lt;p&gt;What are you waiting for? Check out the &lt;a href=\"http://www.diffbot.com/products/automatic/product\"&gt;Product API documentation&lt;/a&gt; and dive on in! If you need a token, check out our &lt;a href=\"http://www.diffbot.com/pricing\"&gt;pricing and plans&lt;/a&gt; (including our Free plan).&lt;/p&gt;&lt;p&gt;Questions? Hit us up at &lt;a href=\"mailto:support@diffbot.com\"&gt;support@diffbot.com&lt;/a&gt;.&lt;/p&gt;",
    "diffbotUri": "article|3|768070723"
    }
  ]
}
</pre>


<hr>
<h3 id="examples">Example Searches</h3>
  <div class="example">
  <p>The most recently-written 40 articles in the "dailycrawl" collection.</p>
  <ul>
    <li>query: <code>type:article sortby:date</code>
</li>
    <li>col: <code>dailycrawl</code>
</li>
    <li>num: <code>40</code>
</li>
  </ul>
  <pre>https://api.diffbot.com/v3/search?token=...&amp;num=40&amp;col=dailycrawl&amp;query=type%3Aarticle%20sortby%3Adate</pre>
</div>
<div class="example">
  <p>100 articles written by Bill Simmons, at Grantland.com, from the "sports" collection, ordered by oldest first.</p>
  <ul>
    <li>query: <code>type:article author:"Bill Simmons" site:grandland.com revsortby:date</code>
</li>
    <li>col: <code>sports</code>
</li>
    <li>num: <code>100</code>
</li>
  </ul>
  <pre>https://api.diffbot.com/v3/search?token=...&amp;num=100&amp;col=sports&amp;query=type%3Aarticle%20author%3A%22Bill%20Simmons%22%20site%3Agrandland.com%20revsortby%3Adate</pre>
</div>
<div class="example">
  <p>20 articles mentioning "ukraine" or "Russia" in the main text, ordered by most recently indexed/crawled, from the "russiatoday" collections:</p>
    <ul>
    <li>query: <code>text:ukraine OR text:russia sortby:timestamp</code>
</li>
  </ul>
  <pre>https://api.diffbot.com/v3/search?token=...&amp;col=russiatoday&amp;query=text%3Aukraine%20OR%20text%3Arussia%20sortby%3Atimestamp</pre>
</div>
<div class="example">
  <p>The second page of 20 products with "Nike" in the title, between $40 and $50, from the "shoestores" collection:</p>
    <ul>
    <li>query: <code>type:product title:nike min:offerPrice:40 max:offerPrice:50</code>
</li>
    <li>col: <code>shoestores</code>
</li>
    <li>start: <code>20</code>
</li>
  </ul>
  <pre>https://api.diffbot.com/v3/search?token=...&amp;col=shoestores&amp;start=20query=type%3Aproduct%20title%3Anike%20min%3AofferPrice%3A40%20max%3AofferPrice%3A50</pre>
</div>


      </div>