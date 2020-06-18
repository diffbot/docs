---
id: guides-custom-collections
title: Help with custom collections
sidebar_label: Help with custom collections
description: A basic guide on creating custom collections in the Diffbot Customization dashboard
---

A custom collection enables you to extract content from multiple/recurring elements on a page. For instance, to extract the name and address of <strong>each result</strong> in a business directory, you would need a collection. To extract multiple images on a page, you will typically need a collection. (And, in fact, to override the default media output within our Article API, you will need to edit a collection.)

The first step in creating a collection is identifying the “repeating parent” of the content you wish to extract. This will depend entirely on the markup of the page. In the case of a business directory example, you may have markup as follows:

```html
<div class="business">
   <h3 class="title">Hamburger Central</h3>
   <span class="phone">650.555.5512</span>
</div>
<div class="business">
   <h3 class="title">Jim's Shake Shop</h3>
   <span class="phone">650.555.9127</span>
</div>
<div class="business">
   <h3 class="title">Steaks and More</h3>
   <span class="phone">650.555.2100</span>
</div>
```

In the above example our “repeating parent” is `div.business`.

![](/img/ss_2014-0218_57.png)

Once you have created your collection, it’s time to add custom fields to be extracted from within each collection item. In the above example, we can add a field for the business name (`h3.title`) and phone number (`span.phone`).

![](/img/ss_2014-0218_58.png)

When the fields are added, your JSON response will include an array of the items on the page, and for each matching item, the fields defined within your custom collection.
