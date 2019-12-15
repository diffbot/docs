---
id: guides-extract-recent-news-content
title: How can I crawl (news) sites and monitor/extract only recent content?
sidebar_label: How can I crawl (news) sites and monitor/extract only recent content?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>There are a few ways to use Crawlbot to extract only the most recent content from a site, and/or to do so on a regular basis. Here is a description of some options:</p>
<p><strong>Best: Crawl the Entire Site</strong></p>
<p>Proper date identification is difficult — that’s why the normalized date field is one of the key components of our automatic <a href="http://www.diffbot.com/dev/docs/article">Article API</a>. Ultimately the most thorough approach to extracting the most recent content from a site is to completely crawl and process the entire site, so that you have a complete catalog of the content, including datestamps.</p>
<p><span style="line-height: 1.5em;">This can be done using either  the Analyze API (which will automatically identify and process any article pages), or the Article API directly along with processing patterns or regular expressions to limit the URLs processed. This will provide you with the entire site’s articles in an easily searchable or parseable form: you can then either filter by date while searching, or simply restrict your data processing to those articles with a date in the range you’re seeking.</span></p>
<p>For a recurring crawl, you’ll want to also make sure that “Only Process New Pages” is set to “on.” This will ensure that on repeated crawl rounds, only newly-appearing URLs will be processed. Thus, ongoing, only the new articles will appear within each crawl round.</p>
<p><strong>Narrow the Crawler Using Crawl and Processing Patterns</strong></p>
<p>(For more on crawling and processing, see <a title="Crawl and Processing Patterns and Regexes" href="guides-patterns">this support article</a>.)</p>
<p>Depending on the site you are crawling, you may be able to use information in the URL to your advantage. For instance, if a site’s article URLs look something like:</p>
<p><code>http://news.diffbot.com/2014/10/01/diffbot-releases-discussion-api</code></p>
<p>…you can enter a processing regular expression or processing pattern (e.g., <code>news.diffbot.com/2014/</code>) to limit pages processed to those with “2014” in the URL.</p>
<p>You can also restrict processing based on page markup using an HTML Processing Pattern. This will limit pages processed to those whose markup contains the exact string. For instance, if articles on a site contain certain metadata or other date-specific markup, you can limit processing to a string like:</p>
<p><code>itemprop="datePublished" content="2014</code></p>
<p>or even:</p>
<p><code>2014&lt;/div&gt;</code></p>
<p>(presuming the year, 2014, is always at the end of a specific element)</p>
<p>Note: if you do this you will need to update your pattern(s) or regular expressions to ensure that content in subsequent years (2015, 2016, etc.) is included.</p>
<p><strong>Do Shallow Crawl Rounds (from a Few Seeds)</strong></p>
<p>To minimize pages processed and/or time spent crawling, you can limit the number of pages processed in a crawl using the “Max Pages to Process” setting (and the pages crawled using “Max Pages to Crawl”). Typically this will prioritize most of the new content from a site. If you include multiple seed URLs — for example, the main pages of a news site’s subsections — this will be even more focused on the new content from various areas of a larger site.</p>
<p>If you are only interested in getting new content on a regular basis, one Crawlbot trick is to do the following:</p>
<ol>
<li>Initially, set your crawl up to process a medium number of pages using the “Maximum Pages to Process” value, e.g. 1000.</li>
<li>Set your crawl to repeat daily, and to “only process new pages.”</li>
<li>After the initial round completes, change your “Maximum Pages to Process” to a smaller number (depending on the amount of content you expect on a daily basis from the site). For a site that publishes ~20 articles a day, set it to 25. For a site that publishes 200, set it to 250.</li>
<li>Then Crawlbot will look for only new pages — up to your smaller number — each day thereafter, and you can use the Search API or date filters to ensure that the content you use is only the most recent by date.</li>
</ol>
<p><strong>Use the maxHops Parameter to Limit the Depth of Your Crawl</strong></p>
<p>The <code>maxHops</code> parameter controls the depth of your crawl. For instance, a value of 1 will spider all outlinks from your seed URL(s), but will prevent Crawlbot from following any other links beyond these original outlinks. A value of 2 will go two layers deep within the site. A value of 0 will only crawl the seed URL(s).</p>
<p>On a news site with numerous category or section pages you can make the category/section pages your seed URLs, and set <code>maxHops</code> to 0 prevent any crawling into the site; only links directly on these seeds will be analyzed/processed. By repeating your crawl regularly (and setting it to “Only Process New Pages”), you can ensure that only the latest content (at least the content that is linked-to from these section pages) is being extracted.</p>
			</div>
