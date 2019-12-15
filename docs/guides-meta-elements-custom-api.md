---
id: guides-meta-elements-custom-api
title: How can I access META elements using the Custom API Toolkit?
sidebar_label: How can I access META elements using the Custom API Toolkit?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>The Custom API Toolkit makes it easy to access all elements on a page, including all <code>META</code> elements.</p>
<p>A common <code>META</code> element may look like this:</p>
<pre>&lt;meta property="og:title" content="Supreme Court Bolsters Gay Marriage With Two Major Rulings" /&gt;</pre>
<p>When creating our rule, the first step is to create a CSS selector with the proper syntax to identify the specific <code>meta</code> property, <code>og:title</code>: <code>meta[property=og:title]</code></p>
<p><a href="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_55.png"><img class="aligncenter size-full wp-image-71" alt="" src="/docs/img/ss_2014-0218_55.png" width="670" height="63" srcset="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_55.png 670w, https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_55-300x28.png 300w" sizes="(max-width: 670px) 100vw, 670px"></a></p>
<p>Once that’s done, you’ll also need to specify the attribute you want to extract. In most cases this is the <code>content</code> attribute:<br>
<a href="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_56.png"><img class="aligncenter size-full wp-image-72" alt="ss_2014-0218_56" src="/docs/img/ss_2014-0218_56.png" width="692" height="101" srcset="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_56.png 692w, https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0218_56-300x43.png 300w" sizes="(max-width: 692px) 100vw, 692px"></a></p>
<p>With that, your field should now be populated with the contents of the <code>meta</code> tag you specified.</p>
<p><strong>Additional notes:</strong></p>
<ul>
<li>Did you know our <a href="http://www.diffbot.com/products/automatic">Automatic APIs</a> can automatically return all <code>meta</code> elements found on a page using the <code>fields=meta</code> parameter? Read more in our <a href="http://www.diffbot.com/dev/docs">Documentation</a>.</li>
<li>You can use the above syntax or attribute filters to extract nearly any other tag on a page. A <code>src</code> attribute will return the source URL of an image file, and the <code>href</code> attribute will return an anchor tag’s link location. <code>div[itemprop=author]</code> will retrieve any <code>div</code> elements that have an <code>itemprop</code> attribute of “author.”</li>
</ul>
			</div>
