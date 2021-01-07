---
id: guides-correct-images-custom-api
title: How do I correct the ‘images’ field in the Article API?
sidebar_label: Correcting the Images field
menus: api-intro-article:recipes, api-intro-custom:recipes
todo: screenshotted tutorial needed, make it more detailed
---

The images field of the Article API is a collection (an array of individual image objects), and, if overridden, requires that two fields be updated within the API Toolkit:

- The repeating container or element that represents each image.
- The actual image element (typically IMG) itself.

See [Help with Custom Collection](guides-custom-collections) for help with the basics of a collection within the Toolkit. But as an example, let’s assume we need to create a rule to return images from this post. Let’s stick in a sample image of Diffy to play with:

![](/img/e50292938335d1d2c8138bcae829c07f-1-copy.png)

First, edit the “images” rule, and find the CSS selector or element that appears for each image you want to retrieve:

![](/img/ss_2015-1123_913.png)

In the case of this page, there is no containing div or similar element that wraps each image. Instead, each image is simply present within its own p element within the entry-content parent. So our repeating selector will be: `.entry-content p img`

(It’s OK to use the img itself as your repeating element.)

This means that when returning images from this web site, the Article API will return every `img` within any `p` element within the `.entry-content container`.

Now, confirm the “url” field is representative of what you want to extract from each repeating object. By default the Toolkit will look for the src of the img element, and in this case, that’s exactly what we want:

![](/img/ss_2015-1123_912.png)

Once you’ve confirmed or edited the “url” field, your subsequent API requests will return the overridden image values instead of the default Diffbot response.

Note that some additional fields — caption, image dimension information, etc. — will not be returned when an image is manually selected.
