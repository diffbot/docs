---
id: kg-search-quickstart
title: Search the Knowledge Graph
sidebar_label: Quickstart
---

This quickstart guide will take you through your first Knowledge Graph search with the Dashboard and building a dataset in around 6 minutes (plus some extra bonus material!)

If you fancy yourself a developer who don't need no web interface, feel free to jump ahead to [the API](kg-search-api).

## Pre-Requisites
- None - this should be easy peasy. 

## 1. Acquire a Diffbot Account
Sign up for a free trial account (no credit card required) [here](https://app.diffbot.com/get-started?utm_source=docs). You are good to go when you reach a page that looks like this.

![Dashboard Home](/img/kg/dashboard-home.png)

## 2. Search for Organizations
Click the "Search" box in the center-middle to arrive at our Search Builder.

![Search Builder](/img/kg/search-builder.png)

Let's start with something simple, a dataset of companies who have

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

⏰ **Time Check** — were you able to complete the previous two steps in under 6 minutes? If not, yell at me on [Twitter](https://twitter.com/hicheoo) or if you prefer, [Email](mailto:jerome@diffbot.com?subject=Diffbot%20Docs:%20I'd%20like%20to%20speak%20to%20your%20manager).

Feel free to experiment with this search query to your heart's content. Try narrowing your results even more by `locations` or `nbEmployeesMin` (minimum # of employees). Or start a completely fresh search by industry. 

Next, we'll try to perform a similar search for news articles. In case this is not what you signed up to do, feel free to skip over to [exporting your beautiful dataset of organizations.](kg-search-quickstart#5-export-data) 

## 3. Search for News Articles
Articles in the Knowledge Graph include news and blog posts. 

## 4. Search for News on Organizations

## 5. Export Data


