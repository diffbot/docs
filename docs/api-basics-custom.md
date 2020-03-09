---
id: api-basics-custom
title: Custom API Basic Usage
sidebar_label: Basic Usage
description: Basic usage of Diffbot's API Customization interface
---

Have you run into a problem where the Diffbot extraction from a particular site is incorrect or needs adjusting? Our [API customization dashboard](tutorials-new-dashboard) not only allows you to create new APIs entirely, but also to override or correct the output returned by our Automatic APIs.

Correcting a field’s output takes immediate effect for your account, and also serves to train our system, improving Diffbot extraction over the long run.

Here’s how to make a correction if you have a problem with a particular site.

## Find a problematic URL

Start with a web page that is exhibiting the problem, then visit the [dahsboard](https://app.diffbot.com), and enter the Custom API section and click Create New (or go there [directly](https://app.diffbot.com/custom/create/)). Pick the type of API you want to process this page with, and enter the problematic URL.

![Creating a new API and entering a link into the Test URL field](/img/custom-api-tut/01.jpg)

The example above processes [this wiki page](https://wiki.polkadot.network/docs/en/learn-staking) which has a clearly defined author at the bottom, but this wasn't picked up by Diffbot as evident by the results in the image below.

![Author is missing from extraction](/img/custom-api-tut/02.jpg)

Edit the field you wish to correct.

Click “edit” next to the field you wish to adjust. In our example, we’ll edit the `author` field.

![Edit field popup with preview window](/img/custom-api-tut/03.jpg)

In the resulting preview window, you can either manually enter a [CSS Selector](https://www.w3schools.com/cssref/css_selectors.asp), or point-and-click to choose the correct element. A preview of the output will be displayed at the top of the screen.

In our example case, the CSS selector we want is `.docLastUpdate`:

![Selector is producing a result](/img/custom-api-tut/04.jpg)

We're getting some extra information! Diffbot's API customization allows us to apply regular expression filters to some output in order to tweak it to our very specific needs. Let's apply one and clear up the unneeded information.

Click on _Filters_, select _Replace_, under value put `^(.*)by\s(.*)$` and under Replace with put `$2`.

![Regular expression filter applied](/img/custom-api-tut/05.jpg)

The above means "split the result into two groups separated by `by `, and then replace the whole output with the content of the second group".

> Note: if you're not familiar with regular expressions, fear not - they aren't needed often. But if you're curious and want to learn more about this powerful string manipulation language, [Regex101](https://regex101.com) is an excellent playground.

Click _Save_ to save and apply your rule.

Once saved, your rule will take immediate effect for API calls (a) using the specified API and (b) matching the [domain regular expression](guides-domain-regex).

![Accurate result given by modified API](/img/custom-api-tut/06.jpg)

## Custom API Basics

- [Custom API Video Tutorials](tutorials-custom-video)
- [Building Custom Collections](guides-custom-collections)