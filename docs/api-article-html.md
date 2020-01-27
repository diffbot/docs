---
id: api-article-html
title: Article API: HTML Field Specification
sidebar_label: Article API: HTML Field Specification
---

Diffbot's `html` field returns normalized HTML maintaining the structure and layout of the source article, while standardizing its element and attributes for reliable parsing and processing. Content will be normalized into the following elements and attributes:

| Element | Attributes | Description |
| :------ | :--------- | :---------- |
| `*` | `data-*` | As of January 2017 normalized HTML will retain and return [data-&#42;](https://www.w3schools.com/tags/att_global_data.asp) attributes.</td></tr><td colspan="3">*Block elements*</td> |
| `p` | -- | Unless returned within a more specific element below, all text will be returned within `p` elements at the top-level of the HTML response. |
| `h1` - `h5` | -- | Headers will be maintained if originally provided. |
| `aside` | -- | Returned at top-level of HTML response. |
| `blockquote` | -- | Returned at top-level of HTML response. |
| `code`, `pre` | -- | Returned at top-level of HTML response. |
| `ul`, `ol` | `start` | Returned at top-level of HTML response. |
| &#x21B3;`li` | -- | |
| `table` | -- | Original content within `table` elements will be largely retained, including images and other media items. |
| &#x21B3;`tbody` | -- | |
| &#x21B3;`th` | -- | |
| &#x21B3;`tr` | -- | |
| &#x21B3;`td` | `valign`, `colspan` | |
| `dl` | -- | Returned at top-level of HTML response. |
| &#x21B3;`dt` | -- | |
| &#x21B3;`dd` | -- | </td></tr><td colspan="3">*Inline elements*</td> |
| `br` | -- | Single linebreaks entities will be maintained in markup and returned as `<br>`. Double-linebreaks will be removed and surrounding content will be returned within `p` block elements. |
| `b`, `strong` | -- | Inline emphasis tags will be retained inside of other elements. |
| `i`, `em` | -- | |
| `u` | -- | |
| `sup` | -- | |
| `sub` | -- | |
| `a` | `href` | Anchor tags and their `href` values will be retained. </td></tr><td colspan="3">*Media*</td> |
| `figure` | -- | Media elements will be returned at the top-level of the HTML content and contained within `figure` tags. |
| `img` | `src`, `alt`, `srcset`, `sizes` | Image layout specifics (floats, etc.) and CSS-specified widths/heights will be discarded. |
| `video`/`audio` | `src` | The child `source` elements within `video` and `audio` elements will be retained along with the `type` attribute, if provided. |
| &#x21B3;`source` | `src`, `type`, `srcset`, `sizes` | |
| `figcaption` | -- | If present, media captions will be returned as `figcaption` elements within the `figure` container. |
| `iframe` | `src`, `frameborder` | |
| `embed`, `object` | `src`, `type` | |

## Example HTML Response

```html
<p>Diffbot's human wranglers are proud today to announce the release of our newest product: an API for... products!</p>

<p>The <a href="http://www.diffbot.com/products/automatic/product">Product API</a> can be used for extracting clean, structured data from any e-commerce product page. It automatically makes available all the product data you'd expect: price, discount/savings amount, shipping cost, product description, any relevant product images, SKU and/or other product IDs.</p>

<p>Even cooler: pair the Product API with <a href="http://www.diffbot.com/products/crawlbot">Crawlbot</a>, our intelligent site-spidering tool, and let Diffbot determine which pages are products, then automatically structure the entire catalog. Here's a quick demonstration of Crawlbot at work:</p>

<figure>
  <iframe frameborder="0" src="http://www.youtube.com/embed/lfcri5ungRo?feature=oembed"></iframe>
</figure>

<p>We've developed the Product API over the course of two years, building upon our core vision technology that's extracted structured data from billions of web pages, and training our machine learning systems using data from tens of thousands of unique shopping sites. We can't wait for you to try it out.</p>

<p>What are you waiting for? Check out the <a href="http://www.diffbot.com/products/automatic/product">Product API documentation</a> and dive on in! If you need a token, check out our <a href="http://www.diffbot.com/pricing">pricing and plans</a> (including our Free plan).</p>

<p>Questions? Hit us up at <a href="mailto:support@diffbot.com">support@diffbot.com</a>.</p>
```
