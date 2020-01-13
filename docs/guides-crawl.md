---
id: guides-crawl
title: Crawlbot
sidebar_label: Crawlbot
todo: Modify link beginning with "support.diffbot.com/topics"
todo: Modify links to old API docs
todo: Modify links to old Dashboard
---

<div id="docBody">
<p>Crawlbot allows you to apply a Diffbot API to entire sites, returning the complete structured data in JSON or CSV format.</p>
<div class="alert alert-info">
<strong>Related:</strong> <a href="http://support.diffbot.com/topics/crawlbot/" target="_blank">Crawlbot Support</a> | <a href="api-crawlbot-api">Crawlbot API Documentation</a> | <a href="tutorials-crawl-video">Video Tutorials</a>
</div>


<h3>Overview</h3>
<p>Crawlbot works hand-in-hand with a Diffbot API (either automatic or custom). It quickly spiders a site for appropriate links and hands these links to a Diffbot API for processing. All structured page results are then compiled into a single "collection," which can be downloaded in full or searched using the <a href="api-search">Search API</a>.</p>

<div class="alert">
<b>Crawlbot</b> is limited to Extraction API Plus plans and above, and is accessible in the Developer Dashboard <a href="/dev/crawl">here.</a>
</div>

<p>Note that the limit of active crawls on a single token is 1000. More information <a href="error-too-many-collections">here</a>.</p>

<h3>Creating a Crawl: Basics</h3>
<p>Each crawl requires, at minimum, the following:
</p>
<ol>
<li>A crawl name (e.g., "DiffbotCrawl").</li>
<li>A starting or "seed" URL. Multiple URLs can be provided to process more than one site in the same crawl. If the seed contains a non-www subdomain ("http://blog.diffbot.com" or "http://support.diffbot.com") Crawlbot will restrict spidering to the specified <strong>subdomain</strong>. If you wish to expand your crawl to multiple domains, enter each one as a separate seed; or consider the <code>restrictDomain</code> setting. <a href="guides-restrict-domain">Read more</a>.</li>
<li>A Diffbot API to be used for processing pages.</li>
</ol>

<figure>
<div>
<img src="/img/choose_api.png">
</div>
<figcaption>Select your Diffbot API from the dropdown menu.</figcaption>
</figure>
<h3>Creating an Automatic Crawl Using the Analyze API</h3>
<p>The simplest Crawlbot crawl will apply Diffbot's <a href="api-analyze">Analyze API</a> to a single site. The Analyze API determines the "page-type" of submitted URLs, and automatically extracts the contents if the page-type is currently supported.</p>
<p>To run your crawl:</p>
<ol>
<li>Enter a new crawl name.</li>
<li>Enter a seed URL, like "http://blog.diffbot.com."</li>
<li>Select the Analyze API from the "Diffbot API" menu.</li>
<li>Click "Start"</li>
</ol>
<p>In this situation, each page found on the site will be analyzed -- and all supported page-types (article, discussion, image, product, etc.) will be automatically extracted and made available in the resulting collection.</p>

<h3>Creating a Crawl Using a Specific Extraction API</h3>
<p>If you don't want to rely on the Analyze API's analysis of pages, you can use a specific Diffbot extraction API (e.g., Product or Article API). Because by default all pages on a domain will be processed by the API you select, in nearly all of these circumstances you will want to further narrow your crawl using the Crawl or Processing Patterns (or regular expressions), discussed below.

</p>
<h3>Controlling or Limiting Pages to Crawl</h3>
<div class="alert alert-info">
<strong>Related:</strong> <a href="explain-crawling-versus-processing" target="_blank">What's the Difference Between Crawling and Processing?</a>
</div>
<p>By default, Crawlbot will spider and process all links on the domain(s) matching your seed URL(s). You can limit which pages of a site to crawl (spider for links), and which pages of a site to process, using the "Crawling Limits" and "Page Processing Limits" sections.

</p>
<h4>Crawl Patterns</h4>
<p>Crawl patterns will limit crawling to only those URLs containing at least one of the matching strings. You may enter as many crawl patterns as you like, one per line. Any URLs not containing a match will be ignored.</p>

<p>For example, to limit crawling at diffbot.com to only "blog.diffbot.com" pages, you can enter a crawl pattern of <code>blog.diffbot.com</code>. If you only wanted to crawl the "Shoes" section of a site, you might enter a crawl pattern of <code>/category/shoes</code>.</p>
<p>You can also supply <strong>negative</strong> crawl patterns by prepending your pattern with a "!" (exclamation point). You can supply as many negative patterns as you like. All matching URLs will be skipped.
<figure>
<div>
<img src="/img/crawl_patterns.png">
</div>
<figcaption>This restricts the spider to "category" URLs, and prevents any URLs with "/author/" or "/page/" from being spidered.</figcaption>
</figure>
</p>
<p>You can also use the <code>^</code> and <code>$</code> characters -- borrowed from regular-expression syntax -- to specify the start and end of a pattern. For instance, <code>^http://www.diffbot.com</code> will match URLs starting with "http://www.diffbot.com," and <code>type=product$</code> will match all URLs ending in "type=product."

</p>
<h4>Page Processing Patterns</h4>
<p>Page processing patterns are identical to crawling patterns, except they define which pages will be <strong>processed</strong> by the selected Diffbot API.</p>

<div class="alert">
<strong>Note:</strong> If you limit site crawling via crawl patterns or regular expressions, but do not enter processing patterns, <strong>only pages matching your crawl patterns/regexes</strong> will be processed. A crawling restriction will serve for both crawling and processing in the absence of a dedicated processing restriction.</div>

<p>For example, to only process product pages for a site you might enter a page processing pattern of "/product/detail/" -- this would match a URL like http://shopping.diffbot.com/product/detail/8117a7?name=diffy_robot, but would not match the URLs http://shopping.diffbot.com or http://shopping.diffbot.com/category/plush.

<figure>
<div>
<img src="/img/processing_patterns.png">
</div>
<figcaption>This restricts processing to URLs containing "/product/detail/" -- and will skip any such URLs also containing  "?currency=euro."</figcaption>
</figure>

</p>
<h4>Crawl and Page Processing Regular Expressions</h4>
<p>If you know your way around regular expressions, you can write a crawl or page processing regex in place of patterns.</p>
<p>If you supply a regex, any patterns will be ignored: only the URLs that contain a match to your provided expression will be crawled and/or processed.</p>
<h4>HTML Processing Patterns</h4>
<p>The HTML Processing Pattern allows you to require exact <strong>markup</strong> strings that must be found in the page HTML in order for a page to be processed. For example, if a site's articles all contain the string:
</p>
<blockquote><code>&lt;div class="articleBody"&gt;&lt;/div&gt;</code></blockquote>
<p>You can specify an HTML Processing Pattern of <code>class="articleBody"</code> to limit processing only to the article pages (those containing the string in their HTML).</p>
<h4>Pages to Process / Pages to Crawl</h4>
<p>You can also set a fixed number of pages to crawl or process. Your crawl will complete as soon as one of these is reached.</p>
<p>By default, crawls are set to process and crawl a maximum of 100,000 pages.</p>

<h3>Passing Diffbot API Querystring Arguments</h3>
<p>Crawlbot hands off URLs to <a href="https://diffbot.com/products/automatic">specific Diffbot APIs</a> for processing. Each of these APIs has optional querystring arguments that can be used to modify the information returned -- most commonly the <code>fields</code> argument, for adding optional fields to the Diffbot response.</p>
<p></p>


<h3>Robots.txt and Politeness</h3>
<p>By default Crawlbot adheres to <a href="http://en.wikipedia.org/wiki/Robots_exclusion_standard" target="_blank">robots.txt</a> instructions, including the crawlDelay parameter. In rare cases -- e.g., when crawling a partner's site with permission -- Crawlbot can be configured to ignore robots.txt instructions.</p>
<p>Crawlbot also has a default "politeness" setting of 0.25 seconds -- spidering machines will wait a quarter of a second between page-loads in order to minimize the impact of sites being crawled. You can adjust this on a per-crawl basis.</p>

<h3>Repeating Crawls</h3>
<p>You can optionally set crawl jobs to repeat automatically. Each repeat crawl "round" will fully re-spider from each seed URL, and process pages according to your repeat settings.</p>
<p>For each URL:</p>
<ul>
<li>If the URL was previously processed, and the extracted data is different (e.g., a price change), the data will be updated and the <code>timestamp</code> value in the JSON response will be updated to indicate an updated record.</li>
<li>If the URL was previously processed and the extracted data is the same as the previous round (no changes), the data will remain the same and the <code>timestamp</code> value in the JSON response will not be updated.</li>
<li>If the URL is brand new, it will be processed for the first time.</li>
</ul>
<p>You can optionally choose to "only process if new," which will only process newly-discovered URLs. In this case, pages of a site will only be processed once -- regardless of the number of rounds. If "only process if new" is not selected, all pages in the site (and matching the process pattern / regular expression) will be processed each round.</p>

<p>You will also need to indicate:</p>
<ol>
<li>Repeat frequency: this is indicated in days ("1" for daily; "7" for weekly; "0.25" for every six hours). </li>
<li>Number of repeats. Set to 0 or leave blank to repeat indefinitely.</li>
</ol>

<figure>
<div>
<img src="/img/repeat_crawl.png">
</div>
<figcaption>This recurring crawl will repeat every 12 hours, only picking up new pages, for two weeks.</figcaption>
</figure>

<p>Repeat timing is based on the <strong>end</strong> of the previous crawl round. So if a daily ("1") repeating crawl ends on Tuesday at 12:00pm, the next round will <strong>start</strong> on Wednesday at noon. Using the Crawlbot API you can use the <strong>roundStart</strong> argument to control when your repeating crawl rounds start.</p>
<h3>Notifications</h3>
<p>You can choose to be notified at the conclusion of each crawl (or crawl round, if your crawl is repeating), either by <a href="http://en.wikipedia.org/wiki/Webhook" target="_blank">webhook</a> or email.</p>
<p>If "webhook" is chosen, you will need to supply a URL that is capable of receiving a POST request. One alternative to building your own: use the Diffbot app on <a href="https://zapier.com/zapbook/diffbot/" target="_blank">Zapier</a> to receive webhook notifications.</p>
<h3>Accessing Crawl Data</h3>


<p>You can access processed data anytime during a crawl, or after it completes. Crawlbot offers two download options within the interface:</p>
<ol>
<li>Full JSON Output: A single file, in valid <a href="http://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a>, containing all of the processed objects from your crawl.</li>
<li>CSV Output: A single comma-separated-values file of the <strong>top-level</strong> objects. Nested elements (article images, tags, etc.) will not be returned in the CSV.</li>
</ol>
<p>If you only want to access a subset of your data, the <a href="api-search">Search API</a> allows much more flexibility in searching and retrieving only the matching items from queries.</p>
<h4>The URL Report</h4>
<p>Also provided with each crawl is a downloadable (CSV) report on each page crawled and/or processed within a crawling job. This file is a log of each URL analyzed by Crawlbot, and is useful in diagnosing issues -- "Why wasn't this page processed?" -- or simply cataloguing which URLs have been processed.</p>
<p>Each row in the URLs report contains diagnostic information, including:</p>
<ul>
<li>Whether the URL was processed by a Diffbot extraction API</li>
<li>Crawling timestamp</li>
<li>Last status of the URL</li>
</ul>
<p><a href="explain-crawl-url-report">See complete details on the URL Report</a>.</p>

</div>