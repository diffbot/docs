---
id: explain-improving-crawl-efficiency
title: Improving Crawl Efficiency
sidebar_label: Improving Crawl Efficiency
---

Crawlbot jobs must first crawl pages for links and then process pages by submitting them to a Diffbot Extraction API. (See [The Difference Between Crawling and Processing](explain-crawling-versus-processing) for more on this.) Each crawled page requires that Crawlbot make at least one request to the target website and check the response for links, but if the page is not processed this won't add any data to the job's results. If a Crawlbot job is crawling many more pages than it is processing, the job will run slowly.

Because of this, when using [patterns and regexes](guides-patterns) to narrow the pages crawled or processed by a Crawlbot job it's best to do as much of the narrowing as possible in the *crawling* stage rather than relying on it only in the *processing* stage.

For example, suppose there is a site you'd like to crawl for articles and you are not interested in its other content. You notice the articles have URLs like `https://example.com/2020/01/improving-inefficient-crawls/` so you consider running a crawl with a configuration like the following:

* Seed URL: `https://example.com`
* Crawl Patterns: *none*
* Crawl Regex: *none*
* Processing Patterns: *none*
* Processing Regex: `https:\/\/example\.com\/\d+\/\d+\/[\w-]+\/`

This would result in processing all the articles and no other pages. However, it would also mean that Crawlbot would crawl the entire site even though it only processes the articles. That's a lot of pages downloaded and crawled just to be thrown away. It's likely that this crawl would end up being very slow.

A better approach is to more strongly constrain the crawling to avoid crawling many pages that will not be processed. Suppose the site's article archive pages have URLs like `https://example.com/articles/`, `https://example.com/articles/page/2/`, `https://example.com/articles/page/3/` and so on. You could then crawl these archive pages and process the articles linked from them and skip crawling the rest of the site, like so:

* Seed URL: `https://example.com/articles/`
* Crawl Patterns: `https://example.com/articles/page/`
* Crawl Regex: *none*
* Processing Patterns: *none*
* Processing Regex: `https:\/\/example\.com\/\d+\/\d+\/[\w-]+\/`

This way you'd only crawl the article archive pages and process the article pages. There'd be no extra time waiting while the rest of the site is crawled without adding any useful data to your results. This crawl would gather the same results in a much shorter time.
