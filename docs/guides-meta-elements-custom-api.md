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

![](/img/ss_2014-0218_55.png)

<p>Once that’s done, you’ll also need to specify the attribute you want to extract. In most cases this is the <code>content</code> attribute:<br>

![](/img/ss_2014-0218_56.png)

<p>With that, your field should now be populated with the contents of the <code>meta</code> tag you specified.</p>
<p><strong>Additional notes:</strong></p>
<ul>
<li>Did you know our <a href="http://www.diffbot.com/products/automatic">Automatic APIs</a> can automatically return all <code>meta</code> elements found on a page using the <code>fields=meta</code> parameter? Read more in our <a href="api-intro">API documentation</a>.</li>
<li>You can use the above syntax or attribute filters to extract nearly any other tag on a page. A <code>src</code> attribute will return the source URL of an image file, and the <code>href</code> attribute will return an anchor tag’s link location. <code>div[itemprop=author]</code> will retrieve any <code>div</code> elements that have an <code>itemprop</code> attribute of “author.”</li>
</ul>
			</div>
