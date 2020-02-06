---
id: guides-correct-images-custom-api
title: How do I correct the ‘images’ field in the Article API?
sidebar_label: How do I correct the ‘images’ field in the Article API?
---

<div class="entry-content">
		<p>The <code>images</code> field of the Article API is a collection (an array of individual image objects), and, if overridden, requires that two fields be updated within the API Toolkit:</p>
<ol>
<li>The repeating container or element that represents each image.</li>
<li>The actual image element (typically <code>IMG</code>) itself.</li>
</ol>
<p>See <a title="Help with custom collections" href="tutorials-custom-collections">this related article</a> for help with the basics of a collection within the Toolkit. But as an example, let’s assume we need to create a rule to return images from this post. Let’s stick in a sample image of Diffy to play with:</p>
<div id="attachment_264" style="width: 210px" class="wp-caption aligncenter">

![](/img/e50292938335d1d2c8138bcae829c07f-1-copy.png)

</div>
<p>First, edit the “images” rule, and find the CSS selector or element that appears for each image you want to retrieve:</p>

![](/img/ss_2015-1123_913.png)

<p>In the case of this post, there is no containing <code>div</code> or similar element that wraps each image. Instead, each image is simply present within its own <code>p</code> element within the <code>entry-content</code> parent. So our repeating selector will be:</p>
<pre><code>.entry-content p img</code></pre>
<p>(It’s OK to use the <code>img</code> itself as your repeating element.)</p>
<p>This means that when returning images from this web site, the Article API will return every <code>img</code> within any <code>p</code> element within the <code>.entry-content</code> container.</p>
<p>Now, confirm the “url” field is representative of what you want to extract from each repeating object. By default the Toolkit will look for the src of the img element, and in this case, that’s exactly what we want:</p>

![](/img/ss_2015-1123_912.png)

<p>Once you’ve confirmed or edited the “url” field, your subsequent API requests will return the overridden image values instead of the default Diffbot response.</p>
<p>Note that some additional fields — caption, image dimension information, etc. — will not be returned when an image is manually selected.</p>
			</div>
