---
id: tutorials-crawl
title: Crawlbot walkthrough
sidebar_label: Crawlbot walkthrough
todo: Modify links to old Dashboard, clarify pages to crawl and pages to process with per-round info  (is it per round or total?)
---

Crawlbot allows you to apply a Diffbot API to entire sites, returning the complete structured data in JSON or CSV format.

### Overview

Crawlbot works hand-in-hand with a [Diffbot API](api-basics-index) (either automatic or custom). It quickly spiders a site for appropriate links and hands these links to a Diffbot API for processing. All structured page results are then compiled into a single "collection," which can be downloaded in full or searched using the [Search API](cb-basics-search).

Crawlbot is limited to Extraction API Plus plans and above, and is accessible in the Developer Dashboard here.

Note that the limit of active crawls on a single token is 1000. More information [here](error-too-many-collections).

### Creating a crawl: basics

Each crawl requires, at minimum, the following:

- a name (e.g. "DiffbotCrawl")
- a starting or "seed" URL. Multiple URLs can be provided to process more than one site in the same crawl. If the seed contains a non-www subdomain ("http://blog.diffbot.com" or "https://docs.diffbot.com") Crawlbot will restrict spidering to the specified subdomain. If you wish to expand your crawl to multiple domains, enter each one as a separate seed; or consider the `restrictDomain` setting ([more info here](guides-restrict-domain)).
- a Diffbot API to be used for processing pages.

![Choosing the API](/img/choose_api.png)

### Creating an Automatic Crawl Using the Analyze API

The simplest Crawlbot crawl will apply Diffbot's [Analyze API](api-basics-analyze) to a single site. The Analyze API determines the "page-type" of submitted URLs, and automatically extracts the contents if the page-type is currently supported.

To run your crawl:

- enter a crawl name
- enter a seed URL like https://blog.diffbot.com
- select the Analyze API from the "Diffbot API" menu
- click "Start"

Each page found on the site will be analyzed and all supported page-types (article, discussion, image, product, etc.) will be automatically extracted and made available in the resulting collection.

### Creating a Crawl Using a Specific Extraction API

If you don't want to rely on the Analyze API's analysis of pages, you can use a specific Diffbot extraction API (e.g., [Product](api-basics-product) or [Article API](api-basics-article)). Because by default all pages on a domain will be processed by the API you select, in nearly all of these circumstances you will want to further narrow your crawl using the Crawl or Processing Patterns (or regular expressions), discussed below.

### Controlling or Limiting Pages to Crawl

> Note: Know the difference between [crawling and processing](explain-crawling-versus-processing)

By default, Crawlbot will spider and process all links on the domain(s) matching your seed URL(s). You can limit which pages of a site to crawl (spider for links), and which pages of a site to process, using the "Crawling Limits" and "Page Processing Limits" sections.

#### Crawl Patterns

Crawl patterns will limit crawling to only those URLs containing at least one of the matching strings. You may enter as many crawl patterns as you like, one per line. Any URLs not containing a match will be ignored.

For example, to limit crawling at `diffbot.com` to only "blog.diffbot.com" pages, you can enter a crawl pattern of `blog.diffbot.com`. If you only wanted to crawl the "Shoes" section of a site, you might enter a crawl pattern of `/category/shoes`.

You can also supply **negative** crawl patterns by prepending your pattern with a "!" (exclamation point). You can supply as many negative patterns as you like. All matching URLs will be skipped.

![Restricting the spider to "category" URLs and preventing spidering of author and page URLs](/img/crawl_patterns.png)

This restricts the spider to "category" URLs, and prevents any URLs with "/author/" or "/page/" from being spidered.

You can also use the `^` and `$` characters - borrowed from regular-expression syntax - to specify the start and end of a pattern. For instance, `^http://www.diffbot.com` will match URLs starting with "http://www.diffbot.com," and `type=product$` will match all URLs ending in "type=product."

#### Page Progcessing Patterns

Page processing patterns are identical to crawling patterns, except they define which pages will be **processed** by the selected Diffbot API.

> Note:If you limit site crawling via crawl patterns or regular expressions, but do not enter processing patterns, **only pages matching your crawl patterns/regexes** will be processed. A crawling restriction will serve for both crawling and processing in the absence of a dedicated processing restriction.

For example, to only process product pages for a site you might enter a page processing pattern of "/product/detail/" - this would match a URL like http://shopping.diffbot.com/product/detail/8117a7?name=diffy_robot, but would not match the URLs http://shopping.diffbot.com or http://shopping.diffbot.com/category/plush.

![This restricts processing to URLs containing "/product/detail/" -- and will skip any such URLs also containing  "?currency=euro."](/img/processing_patterns.png)
This restricts processing to URLs containing "/product/detail/" -- and will skip any such URLs also containing  "?currency=euro."

#### Crawl and Page Processing Regular Expressions

If you know your way around regular expressions, you can write a crawl or page processing regex in place of patterns.
If you supply a regex, any patterns will be ignored: only the URLs that contain a match to your provided expression will be crawled and/or processed.

#### HTML Processing Patterns

The HTML Processing Pattern allows you to require exact **markup** strings that must be found in the page HTML in order for a page to be processed. For example, if a site's articles all contain the string:

```html
<div class="articleBody">
```

You can specify an HTML Processing Pattern of `class="articleBody"` to limit processing only to the article pages (those containing the string in their HTML).

#### Pages to Process / Pages to Crawl

You can also set a fixed number of pages to crawl or process. Your crawl will complete as soon as one of these is reached.

By default, crawls are set to process and crawl a maximum of 100,000 pages.

### Passing Diffbot API Querystring Arguments

Crawlbot hands off URLs to <a href="https://diffbot.com/products/automatic">specific Diffbot APIs</a> for processing. Each of these APIs has optional querystring arguments that can be used to modify the information returned -- most commonly the `fields` argument, for adding optional fields to the Diffbot response.

### Robots.txt and Politeness

By default Crawlbot adheres to [robots.txt instructions](http://en.wikipedia.org/wiki/Robots_exclusion_standard) instructions, including the crawlDelay parameter. In rare cases -- e.g., when crawling a partner's site with permission -- Crawlbot can be configured to ignore `robots.txt` instructions.

Crawlbot also has a default "politeness" setting of 0.25 seconds -- spidering machines will wait a quarter of a second between page-loads in order to minimize the impact of sites being crawled. You can adjust this on a per-crawl basis.

### Repeating Crawls

You can optionally set crawl jobs to repeat automatically. Each repeat crawl "round" will fully re-spider from each seed URL, and process pages according to your repeat settings.

For each URL:

- If the URL was previously processed, and the extracted data is different (e.g., a price change), the data will be updated and the `timestamp` value in the JSON response will be updated to indicate an updated record.
- If the URL was previously processed and the extracted data is the same as the previous round (no changes), the data will remain the same and the `timestamp` value in the JSON response will not be updated.
- If the URL is brand new, it will be processed for the first time.

You can optionally choose to "only process if new," which will only process newly-discovered URLs. In this case, pages of a site will only be processed once -- regardless of the number of rounds. If "only process if new" is not selected, all pages in the site (and matching the process pattern / regular expression) will be processed each round.

You will also need to indicate:

- Repeat frequency: this is indicated in days ("1" for daily; "7" for weekly; "0.25" for every six hours). 
- Number of repeats. Set to 0 or leave blank to repeat indefinitely.

![This recurring crawl will repeat every 12 hours, only picking up new pages, for two weeks.](/img/repeat_crawl.png)

Repeat timing is based on the **end** of the previous crawl round. So if a daily ("1") repeating crawl ends on Tuesday at 12:00pm, the next round will **start** on Wednesday at noon. Using the Crawlbot API you can use the **roundStart** argument to control when your repeating crawl rounds start.

### Notifications

You can choose to be notified at the conclusion of each bulk job, either by [webhook](http://en.wikipedia.org/wiki/Webhook) or email.

For webhook, you will need to supply a URL that is capable of receiving a POST request. One alternative to building your own: use the Diffbot app on [Zapier](https://zapier.com/zapbook/diffbot/) to receive webhook notifications.

### Accessing Crawl Data

You can access processed data anytime during a crawl, or after it completes. Crawlbot offers two download options within the interface:

- Full JSON Output: A single file, in valid JSON, containing all of the processed objects from your crawl.
- CSV Output: A single comma-separated-values file of the **top-level** objects. Nested elements (article images, tags, etc.) will not be returned in the CSV.

If you only want to access a subset of your data, the [Search API](cb-basics-search) allows much more flexibility in searching and retrieving only the matching items from queries.

### The URL Report

Also provided with each crawl is a downloadable (CSV) report on each page crawled and/or processed within a crawling job. This file is a log of each URL analyzed by Crawlbot, and is useful in diagnosing issues -- "Why wasn't this page processed?" -- or simply cataloguing which URLs have been processed.

Each row in the URLs report contains diagnostic information, including:

-Whether the URL was processed by a Diffbot extraction API
-Crawling timestamp
-Last status of the URL

<a href="explain-crawl-url-report">See complete details on the URL Report</a>.