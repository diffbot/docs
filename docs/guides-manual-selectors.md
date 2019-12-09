---
id: guides-manual-selectors
title: Creating Custom Rules without a Browser Preview
sidebar_label: Creating Custom Rules without a Browser Preview
---

It's possible you'll sometimes have to (or want to) manually create your rules, rather than by clicking through the Custom API dashboard - the preview might be imprecise and a manual target might yield better results, the [preview might be failing](error-missing-preview), or you might even be making rules programmatically and without a dashboard at all. This guide will show you how to manually target selectors.

## Example

The page kreo.net is failing to render, as evident by the screenshot below.

![Kreo.net is failing to preview in Custom API](/docs/img/kreo1.png)

Let’s assume we want to extract the second paragraph of the text in every Kreo blog article into a field called "secondary-intro", but we cannot preview the site and click on the paragraph.

We open the page in a normal browser session, right click on the element we’re interested in, and click "Inspect". The developer tools will open, probably targeting our desired element. If not, you can use the list of elements now opened to expand the parent elements into children and move your mouse cursor over them and find the desired element...

![Example of manually finding the target element in a browser's inspect tool](/docs/img/kreo2.gif)

… or even click the top-most "inspect element" button which turns your cursor into a pointer which you can use to select elements.

![Selecting elements using the Inspect Element pointer](/docs/img/kreo3.gif)

Once you’ve managed to target the specific element you’re looking to extract, right click on it in the element list and select `Copy` -> `Selector`. Paste that selector into the custom field you’re building.

![Pasting the selector into the Custom API field](/docs/img/kreo5.png)

Clicking save will reveal that the paragraph is now being extracted.

![The Custom API now extracts our desired element](/docs/img/kreo6.png)

In this case, our automatically copied selector is fine but sometimes we need more precision. Don’t be afraid to experiment with selectors – nothing can go wrong, and a bit of CSS is all you need. For example, the selector that got copied for us: `#hs_cos_wrapper_post_body > p:nth-child(3)` might look scary, but in reality means: "in the HTML element with the ID `hs_cos_wrapper_post_body`, if there are several direct (`>`) child elements of the type `p` (meaning paragraph), select the third one (`nth-child`)!"

Note that we’re using the third one despite the paragraph being the second one because the first paragraph is occupied by the header image.