---
id: kg-search-quickstart
title: Search the Knowledge Graph
sidebar_label: Quickstart
---

This quickstart guide will take you through your first Knowledge Graph search for organizations and articles with the Dashboard and building a dataset in around 9 minutes. 

If you fancy yourself a developer who doesn't need a web interface, feel free to jump ahead to [the API](kg-search-api).

## Pre-Requisites
- None - this should be easy peasy. 

## 1. Acquire a Diffbot Account
Sign up for a free trial account (no credit card required) [here](https://app.diffbot.com/get-started?utm_source=docs). You are good to go when you reach a page that looks like this.

![Dashboard Home](/img/kg/dashboard-home.png)

## 2. Search for Organizations
Click the "Search" box in the center-middle to arrive at our Search Builder.

![Search Builder](/img/kg/search-builder.png)

For this quickstart, let's try a search for a dataset of companies who have

- Raised at least a Series B
- No more than 50 employees

> 💭 **Organizations not your thing?** Feel free to skip to [searching for news/blog articles](kg-search-quickstart#3-search-for-news-articles).

Select `Organization` under "Select an Entity Type". 

Under "Filter By" click `Select a field +`, then `show all`, and look for `investments` > `series`. Select `series`.

![Search Builder - Investments > Series](/img/kg/search-visual-investments-series.png)

Once selected, we'll enter "Series B" into the newly appeared input field. This is effectively now a query for companies that have raised at least a series B. 

![Search Builder - Investments > Series](/img/kg/search-visual-investments-seriesb.png)

That said, there are plenty of companies that have raised a series B. How many have raised a series B with no more than 50 employees? Let's find out.

Click the `+` button to add a new filter to our query. Once again, `Select a field +`, then `show all`, and look for `nbEmployeesMax`. Select `nbEmployeesMax` and enter "50" into the input field. Change the comparator dropdown from `less than` to `less or equal to`. 

![Search Builder - Investments > Series](/img/kg/search-visual-investments-seriesb-50em.png)

That's it! When you're ready, hit Search!

> #### 🌟 **Congrats!** 
> You've built a dataset of companies that have raised at least a series B with no more than 50 employees! (turns out, over 7,200 companies globally!)
> 
> ![Search Builder - Investments > Series](/img/kg/search-visual-investments-seriesb-50em-results.png)

🤔 **Where is this data sourced from?** All Diffbot Knowledge Graph data is sourced completely from the *publicly* available web. In other words, if you can find the data with a typical search engine, you can find it in the Knowledge Graph. 

**So why use Diffbot?** It might be easy enough to find data on a few companies manually, but the process of filtering out junk and irrelevant sites becomes mechanically intensive and undeserving of human brain power when researching companies at the scale of 1000s or more. We believe in making menial data gathering obsolete. With Diffbot, when you search for organizations, you just get organizations. 

**Is your data GDPR friendly?** Absolutely 👍. Unlike other data providers, every single data point in the Knowledge Graph is fully cited to a publicly available web source. We call this [Data Provenance](), and it allows Diffbot Knowledge Graph is to 100% compatible with GDPR and other privacy regulations. See our [privacy policy](https://www.diffbot.com/privacy/) for more details.

**What's next —** Try narrowing your results even more by `locations` or `nbEmployeesMin` (minimum # of employees), or start a completely fresh search by industry. 

When you're ready to try a brand new search, move on to the next step, or feel free to skip over to [exporting your dataset of organizations.](kg-search-quickstart#5-export-data) 

## 3. Search for News Articles
Articles in the Knowledge Graph include both news and blog articles across the web. Let's start by starting a fresh [Knowledge Graph Search](https://app.diffbot.com/search/). 

![Search Builder](/img/kg/search-builder.png)

Select `Article` under "Select an Entity Type". 

For this quickstart, we'll be looking for articles on the topic of race/racism. 

Under "Filter By" click `Select a field +`, then `tags`, then `label`. Enter "racism" into the input field that appears. We should now be looking at a search for tags.label containing "racism". 

![Search Builder - Tags > Label](/img/kg/search-visual-tags-label.png)

Make sure `Sort By` is set to `Date (Newest First)` to ensure that we're looking for the latest published articles. Hit Search.

> #### 🌟 **Congrats!** 
> You've built a dataset of (just about 500k) articles across the web on the topic of racism!
> 
> ![Search Builder - Tags > Label set to Racism](/img/kg/search-visual-tags-label-racism-results.png)

🤯 **Whoa! How does this work?** As Diffbot's global crawlers scrape articles for the Knowledge Graph, we also apply [Natural Language Processing]() to infer and extrapolate important topics from content, even if it is not explicitly tagged with any. This generated field allows for incredibly precise news aggregation. There are generally at least 2 or more tags with each article. 

**I see Russian articles!** Unlike strict text searches that are common with other news databases, tag searches in the Knowledge Graph include both non-English language and other possible references to that same topic. For reference, here is [a full list of similar references and language translations for the "racism" tag.](https://app.diffbot.com/entity/E6aNyPmgGPe-ZtprhqAZG1Q)

**What can I search as a tag?** While tag searches come with convenient features, their nature as normalized fields sometimes overly constricts a search query (especially with ultra-niche topics). If a tag search doesn't turn up enough results for your needs, try searching the text of the article instead. 

#### 💥 Try This
On the top right hand corner of the Search page, just left of the JSON & CSV buttons are options to `View as Card` or `View as Table`. Clicking on `View as Table` will transform the default card view into a tabular layout with key data points including a [Natural Language inferred sentiment score](). 

![Search Buider - View As Table](/img/kg/search-builder-viewastable.png)

Later, we'll run a more advanced search to [find only articles with postive sentiment](kg-search-advanced#find-only-positive-or-negative-sentiment-articles). 

As with organizations, feel free to experiment further with your article search. When you're ready, Step 4 will show you how to leverage this extrapolated tagging feature to solve news aggregation for commonly mis-matched company names.

Alternatively, feel free to skip over to [exporting your article data.](kg-search-quickstart#5-export-data)

## 4. Search for News on Organizations
One use case of searching for news on the Knowledge Graph is aggregating mentions of a particular brand or company in the media for brand monitoring and sentiment tracking.

However, a common issue found in systems that aggregate news programmatically is inaccurate entity linking. Meaning the name of a company, person, or thing referenced in an article is matched to the wrong entity record. Here's an example of how that plays out in real life:

![Screenshot of a popular finance website confusing news articles of Zoom Technologies, ZoomInfo, and Zoom Communications](/img/kg/example-bad-entity-linking.png)

This screenshot (taken on Feb 23, 2021) of a popular finance website has a module that aggregates articles referencing the company whose profile you're reviewing. 

Except that only one of these articles (the one in the middle) is actually talking about *Zoom Technologies*, a relatively obscure communications equipment company, whose profile has been inaccurately matched to other news pieces referencing *ZoomInfo*, a software as a service company, and *Zoom Video Communications*, the popular web conference software tool. 

Inaccurate entity linking is part of the reason why [Zoom Technologies stock soared 56,000% as Zoom Video Communications launched its IPO](https://www.marketwatch.com/story/zoom-technologies-soared-56000-in-the-past-30-days-as-unrelated-zoom-video-prepared-its-ipo-2019-04-18). 

Diffbot's Knowledge Graph accurately infers the correct company, person, or thing when processing articles, allowing you to search for news on organizations with confidence. Here's how it works —

Similar to the [prior example of searching for news articles](kg-search-quickstart#3-search-for-news-articles), we will be running a tag search for the organization we're trying to find news for. 

Let's start by creating a query for Articles where the tag label is set to `Zoom Technologies`. This is the non-case-sensitive name for the previously mentioned [communications equipment company](https://app.diffbot.com/entity/EI6clb2iwNJSU2_lfbZEnwQ). 

![Search Builder - Article - Tags - Label - Zoom Technologies](/img/kg/search-visual-tags-label-zoomtech.png)

Now run the same search again but replace `Zoom Technologies` with `Zoom Video Communications` in the value for tag label. This is of course, the much more well known web conference software. 

![Search Builder - Article - Tags - Label - Zoom Video Communications](/img/kg/search-visual-tags-label-zoomvideo.png)

The difference in results, **48,988 articles on Zoom Video Communications** vs. just **152 for Zoom Technologies**, reveals just how confident we are in Diffbot's entity linking accuracy. 

## 5. Export Data

No matter the data type you're querying for with the Diffbot Knowledge Graph, exporting it to your own database for analysis and review is where true value creation happens. 

There are two options for exporting datasets out of the Knowledge Graph - JSON and CSV.

### JSON

JSON is the closest representation of the graph database schema of Diffbot's Knowledge Graph and thus the preferred export option. To export any search result as JSON, simply click the JSON button on the top right hand corner of the Search view.

![Search Results - Export JSON](/img/kg/search-results-exportjson.png)

Note that JSON is also the response format for the Knowledge Graph Search API and follows the same request structure. To modify parameters like dataset export size and more, refer to the [API Reference](kg-search-api).

### CSV

The CSV export option makes it easy to upload your dataset into your preferred spreadsheet tool and is a favorite for non-engineering users. Just like exporting as JSON, simply click the CSV button on the top right hand corner of the Search view. 

This will open a CSV export editor, allowing you to customize your dataset to just the specific columns and size you need. 

![Search Results - Export CSV](/img/kg/search-results-exportcsv.png)

## Takeaways & Next Steps
We've learned how to search for the two most popular data types in the Diffbot Knowledge Graph, Organizations and Articles, using the visual search builder. We also leveraged extrapolated tags to make ultra-precise searches for news on commonly mismatched organizations like Zoom Video Communications.

Next, we'll take a look at making more [advanced techniques](kg-search-advanced) utilizing a search query language called DQL. If you're remotely familiar with SQL at all, you should not have a problem. DQL allows for many familiar operators, sorting, and even introduces unique methods for summarizing (or pivot tabling) datasets by a field. 