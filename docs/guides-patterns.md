---
id: guides-patterns
title: Crawl and Processing Patterns and Regexes
sidebar_label: Crawl and Processing Patterns and Regexes
---

<p>Crawlbot offers many ways to manually narrow or refine the pages crawled or processed by Diffbot APIs.</p>

([Read our overview of crawling vs processing](explain-cvp))

<p><strong>Patterns (“Crawl” and “Processing”)</strong></p>
<p>Patterns allow you to quickly and easily restrict pages crawled or processed based on simple URL string matches.</p>
<p>For example, if a web site organizes its pages under categories — e.g., http://www.example.com/sports/heres-a-sports-article.html — I can instruct Crawlbot to only crawl pages within the “sports” category by specifying a crawl pattern of <code>/sports/</code>. (Including the slashes is even more precise and makes sure not to match a “sports” string elsewhere in the URL.)</p>
<p>I can also use a crawl pattern if I want to limit crawling to a particular subdomain. For instance, on a crawl starting at https://docs.diffbot.com, I can enter a crawl pattern of <code>docs.diffbot.com</code> to keep Crawlbot from following links to http://www.diffbot.com and http://blog.diffbot.com.</p>
<p>You can enter multiple patterns to match multiple strings. For instance, to crawl both https://docs.diffbot.com and http://blog.diffbot.com (but not http://www.diffbot.com), I would enter a crawl pattern of:</p>
<pre>docs.diffbot.com
blog.diffbot.com</pre>
<p>(In the Crawlbot interface, place each individual pattern on a new line. Via the API, separate patterns with a <code>||</code>.</p>
<p><strong>Limiting Matches to the Beginning of URLs</strong></p>
<p>You can use the caret character (<code>^</code>) to limit pattern matches only to the beginning of a URL. For instance, a processing pattern of:</p>
<pre>^https://docs.diffbot.com</pre>
<p>…will limit processing only to pages whose URLs begin with https://docs.diffbot.com. This will prevent processing of URLs like http://www.twitter.com/share?tweet=https://docs.diffbot.com.</p>
<p><strong>Negative-Match Patterns</strong></p>
<p>Use the exclamation-point to specify a “negative match” if you want to explicitly exclude pages from being crawled or processed. For instance, to process all pages except those containing “sports” in the URL, I would enter a crawl pattern of <code>!sports</code>.</p>
<p>When entering multiple patterns, negative matches will override other crawl patterns. That is, a URL with a negative match will be fully ignored, even if another (positive) crawl pattern is also a match.</p>
<p><strong>Regular Expressions (Crawl and Processing Regexes)</strong></p>

([Which regular expression syntax does Crawlbot use?](explain-regex))

<p>If you want complete control over your crawling or processing URL matches, you can write a regular expression to only crawl or process URLs that contain a match to your expression.</p>
<p>For example, to only process pages at https://docs.diffbot.com/ under the “/crawlbot” path and containing “regex”, you could enter a processing regex of:</p>
<p><code>\/crawlbot.*?regex</code></p>
<p>Note that crawling and processing regular expressions cannot be used simultaneously with crawling/processing patterns. If both are provided, the crawling/processing patterns will be ignored.</p>
<p><strong>HTML Processing Patterns</strong><br>
Crawlbot offers one more option for limiting pages processed. If you enter an HTML Processing Pattern, only pages whose HTML source contains the exact string will be processed.</p>
<p>Note that Crawlbot only examines the raw source, and does not execute Javascript/Ajax at crawl-time.</p>