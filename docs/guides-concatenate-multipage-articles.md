---
id: guides-concatenate-multipage-articles
title: How to concatenate multiple-page articles using a custom rule
sidebar_label: Auto-merge multi-page articles with custom rules
todo: Make it an actual screenshotted tutorial, perhaps on a sample page hosted by diffbot.
menus: api-intro-article:recipes, api-intro-custom:recipes
---


Diffbot’s [Article API](api-intro-article) attempts to concatenate (string together) multiple-page articles, returning up to twenty pages of content in a single response.
On some sites or pages our automated algorithm is unable to concatenate automatically. In these cases you can use the [Custom API](api-intro-custom) to create a `nextPage` rule, providing the CSS selector of an article’s next page link.

To do this:

- Create a new custom field named nextPage.
- Select the element that contains the link to the next page.
- Add an “attribute” filter using the Filters drop-down, and in this field enter HREF to make sure the URL value is returned. (Note that in some Javascript-based pagination, this URL value may not be available or may be available in a different attribute.)

The Article API will subsequently use this value to concatenate up 20 pages, creating a single text (and html) field response.

## A note on tricky selectors

Sometimes sites don’t identify the next page link using unique CSS selectors (particularly on sites that have links to individually-numbered pages).

For instance, an older layout of Slate.com used the same class — `.sl-art-pag-link` — for all links to individual pages, even pages prior to the current page. Using this class alone could result in multiple ‘nextPage’ values and an infinite processing loop.

Our concatenation algorithm will generally prevent infinite loops and repeated content, but writing better CSS selectors will ensure the best performance. In this case, using the following selector will ensure that only the correct next page is identified:

```js
.sl-art-curpage + .sl-art-pag-link
```

This uses the plus-sign combinator to identify only the page link that is immediately preceded by the current page (.sl-art-curpage). This ensures that only the next page — if it exists — is identified.