---
id: tutorials-custom-collections
title: Help with custom collections
sidebar_label: Help with custom collections
---

<div class="entry-content">
		<p>A custom collection enables you to extract content from multiple/recurring elements on a page. For instance, to extract the name and address of <strong>each result</strong> in a business directory, you would need a collection. To extract multiple images on a page, you will typically need a collection. (And, in fact, to override the default media output within our Article API, you will need to edit a collection.)</p>
<p>The first step in creating a collection is identifying the “repeating parent” of the content you wish to extract. This will depend entirely on the markup of the page. In the case of a business directory example, you may have markup as follows:</p>
<pre>&lt;div class="business"&gt;
   &lt;h3 class="title"&gt;Hamburger Central&lt;/h3&gt;
   &lt;span class="phone"&gt;650.555.5512&lt;/span&gt;
&lt;/div&gt;
&lt;div class="business"&gt;
   &lt;h3 class="title"&gt;Jim's Shake Shop&lt;/h3&gt;
   &lt;span class="phone"&gt;650.555.9127&lt;/span&gt;
&lt;/div&gt;
&lt;div class="business"&gt;
   &lt;h3 class="title"&gt;Steaks and More&lt;/h3&gt;
   &lt;span class="phone"&gt;650.555.2100&lt;/span&gt;
&lt;/div&gt;</pre>
<p>In the above example our “repeating parent” is <code>div.business</code>.</p>
<p><a href="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_57.png"><img class="aligncenter size-full wp-image-76" alt="ss_2014-0218_57" src="/docs/img/ss_2014-0218_57.png" width="674" height="98" srcset="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_57.png 674w, https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_57-300x43.png 300w" sizes="(max-width: 674px) 100vw, 674px"></a></p>
<p>Once you have created your collection, it’s time to add custom fields to be extracted from within each collection item. In the above example, we can add a field for the business name (<code>h3.title</code>) and phone number (<code>span.phone</code>).<br>
<a href="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_58.png"><img src="/docs/img/ss_2014-0218_58.png" alt="ss_2014-0218_58" width="850" height="223" class="aligncenter size-full wp-image-78" srcset="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_58.png 850w, https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_58-300x78.png 300w" sizes="(max-width: 850px) 100vw, 850px"></a></p>
<p>When the fields are added, your JSON response will include an array of the items on the page, and for each matching item, the fields defined within your custom collection.</p>
			</div>
