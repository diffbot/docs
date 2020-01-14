---
id: tutorials-new-dashboard
title: Introducing the New Diffbot Dashboard
sidebar_label: Introducing the New Diffbot Dashboard
description: A guide on using the new dashboard
---

The new Diffbot dashboard is being developed to replace the old customization UI and to be the one-stop-shop for all your Diffbot product subscriptions. This dashboard will allow you to use [Diffbot's crawlbot](https://www.diffbot.com/products/crawlbot/), [automatic APIs](https://www.diffbot.com/products/automatic/) and our [knolwedge graph](https://www.diffbot.com/products/knowledge-graph/).

To access the new dashboard, first contact [support@diffbot.com](mailto:support@diffbot.com?subject=New%20Dashboard%20Access%2C%20Please). Support will then immediately create an account for you.

## Landing page

![New dashboard landing page](/img/newdash/01.png)

The landing page will give you an overview of your account and the system. To the right, you'll see your active token(s) and Diffbot's recent changes.

The central area will show interesting links from the Diffbot ecosystem, while the leftmost sidebar will contain links to useful pages of the dashboard. Let's cover some of them now.

## Knowledge Graph

![A visual query of the knowledge graph](/img/newdash/02.png)

You will only have access to the Knowledge Graph (KG) area if you've subscribed to it. Check our plans [here](https://diffbot.com/pricing).

This interface will allow you to visually construct KG queries and get the results in the same UI, or downloaded as JSON. In the image above, you can see a query looking for all corporations with any female board members.

Queries you build in this UI can be saved for recalling later.

![Saving a query](/img/newdash/03.png)

## Enhance

The Enhance service is a part of our KG offering and allows you to enhance data you currently have with new information from Diffbot's knowledge graph. For example, if all you have a subscriber's name, you can try to enhance it.

![Enahncing Bruno](/img/newdash/04.png)

If we enhance the name of this post's author (Bruno Škvorc), we get an entity that's much more descriptive:

![Enhanced Bruno](/img/newdash/05.png)

## Crawlbot and Bulk Processing

The crawlbot interface should be familiar - it's the same as in the old dashboard, with some additional features. Specifically, entering a job now allows you to search its collection in the same UI, while the job is still running.

![Search a job in-progress](/img/newdash/06.png)

The UI also allows you to see the live URL report of your job as it's progressing, though note that this will only work if your job is in progress - not paused.

## Custom API

Finally, there's custom API functionality. It differs from the old dashboard in two main ways:

1. It's still under development, so some features are missing, like [custom collections](guides-custom-collections).
2. You can now use the fields shown in the gif below to attach specific meta-values to your rules for that domain, like prefilters (they help you completely ignore some parts of a website - [guide here](guides-prefilters)), User Agent (helps you pretend you're visiting a website as something else - [guide here](guides-ua)), Cookies (these help you access paywalled content or content behind logins - [guide here](guides-data-behind-login)), and more.

![Gif of custom fields in custom rules](/img/newdash/dash.gif)