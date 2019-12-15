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
<a href="https://support.diffbot.com/wp-content/uploads/2015/03/e50292938335d1d2c8138bcae829c07f-1-copy.png"><img aria-describedby="caption-attachment-264" class="size-full wp-image-264" alt="Diffy" src="/docs/img/e50292938335d1d2c8138bcae829c07f-1-copy.png" width="200" height="200" srcset="https://support.diffbot.com/wp-content/uploads/2015/03/e50292938335d1d2c8138bcae829c07f-1-copy.png 200w, https://support.diffbot.com/wp-content/uploads/2015/03/e50292938335d1d2c8138bcae829c07f-1-copy-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px"></a><p id="caption-attachment-264" class="wp-caption-text">Diffy</p>
</div>
<p>First, edit the “images” rule, and find the CSS selector or element that appears for each image you want to retrieve:</p>
<div id="attachment_322" style="width: 842px" class="wp-caption aligncenter">
<a href="https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1123_913.png"><img aria-describedby="caption-attachment-322" class="size-full wp-image-322" alt="ss_2015-1123_913" src="/docs/img/ss_2015-1123_913.png" width="832" height="305" srcset="https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1123_913.png 832w, https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1123_913-300x109.png 300w" sizes="(max-width: 832px) 100vw, 832px"></a><p id="caption-attachment-322" class="wp-caption-text">Edit the “images” parent rule</p>
</div>
<p>In the case of this post, there is no containing <code>div</code> or similar element that wraps each image. Instead, each image is simply present within its own <code>p</code> element within the <code>entry-content</code> parent. So our repeating selector will be:</p>
<pre><code>.entry-content p img</code></pre>
<p>(It’s OK to use the <code>img</code> itself as your repeating element.)</p>
<p>This means that when returning images from this web site, the Article API will return every <code>img</code> within any <code>p</code> element within the <code>.entry-content</code> container.</p>
<p>Now, confirm the “url” field is representative of what you want to extract from each repeating object. By default the Toolkit will look for the src of the img element, and in this case, that’s exactly what we want:</p>
<p><a href="https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1123_912.png"><img class="aligncenter size-full wp-image-317" alt="ss_2015-1123_912" src="/docs/img/ss_2015-1123_912.png" width="677" height="93" srcset="https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1123_912.png 677w, https://support.diffbot.com/wp-content/uploads/2015/11/ss_2015-1123_912-300x41.png 300w" sizes="(max-width: 677px) 100vw, 677px"></a></p>
<p>Once you’ve confirmed or edited the “url” field, your subsequent API requests will return the overridden image values instead of the default Diffbot response.</p>
<p>Note that some additional fields — caption, image dimension information, etc. — will not be returned when an image is manually selected.</p>
			</div>
