---
id: guides-patterns
title: Crawl and Processing Patterns and Regexes
sidebar_label: Crawl and Processing Patterns and Regexes
---

Crawlbot offers many ways to manually narrow or refine the pages crawled or processed by Diffbot APIs.

([Read our overview of crawling vs processing](explain-crawling-versus-processing))

## Patterns ("Crawl" and "Processing")

Patterns allow you to quickly and easily restrict pages crawled or processed based on simple URL string matches.

For example, if a web site organizes its pages under categories — e.g., http://www.example.com/sports/heres-a-sports-article.html — I can instruct Crawlbot to only crawl pages within the "sports" category by specifying a crawl pattern of `/sports/`. (Including the slashes is even more precise and makes sure not to match a "sports" string elsewhere in the URL.)

I can also use a crawl pattern if I want to limit crawling to a particular subdomain. For instance, on a crawl starting at https://docs.diffbot.com, I can enter a crawl pattern of `docs.diffbot.com` to keep Crawlbot from following links to http://www.diffbot.com and http://blog.diffbot.com.

You can enter multiple patterns to match multiple strings. For instance, to crawl both https://docs.diffbot.com and http://blog.diffbot.com (but not http://www.diffbot.com), I would enter a crawl pattern of:

```
docs.diffbot.com
blog.diffbot.com
```

In the Crawlbot interface, place each individual pattern on a new line. Via the API, separate patterns with a `||`.

## Limiting Matches to the Beginning of URLs

You can use the caret character (`^`) to limit pattern matches only to the beginning of a URL. For instance, a processing pattern of:

```
^https://docs.diffbot.com
```

...will limit processing only to pages whose URLs begin with https://docs.diffbot.com. This will prevent processing of URLs like http://www.twitter.com/share?tweet=https://docs.diffbot.com.

## Negative-Match Patterns

Use the exclamation-point to specify a "negative match" if you want to explicitly exclude pages from being crawled or processed. For instance, to process all pages except those containing "sports" in the URL, I would enter a crawl pattern of `!sports`.

When entering multiple patterns, negative matches will override other crawl patterns. That is, a URL with a negative match will be fully ignored, even if another (positive) crawl pattern is also a match.

## Regular Expressions (Crawl and Processing Regexes)

([Which regular expression syntax does Crawlbot use?](explain-regex))

If you want complete control over your crawling or processing URL matches, you can write a regular expression to only crawl or process URLs that contain a match to your expression.

For example, to only process pages at https://docs.diffbot.com/ under the "/crawlbot" path and containing "regex", you could enter a processing regex of:

```
\/crawlbot.*?regex
```

Note that crawling and processing regular expressions cannot be used simultaneously with crawling/processing patterns. If both are provided, the crawling/processing patterns will be ignored.

## HTML Processing Patterns

Crawlbot offers one more option for limiting pages processed. If you enter an HTML Processing Pattern, only pages whose HTML source contains the exact string will be processed.

Note that Crawlbot only examines the raw source, and does not execute Javascript/Ajax at crawl-time.
