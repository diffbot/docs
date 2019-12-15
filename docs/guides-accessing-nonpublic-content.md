---
id: guides-accessing-nonpublic-content
title: Can Diffbot access content within an intranet or requiring a login?
sidebar_label: Can Diffbot access content within an intranet or requiring a login?
todo: Modify links to old API docs
---

<div class="entry-content">
		<p>(Quick answer: Yes!)</p>
<p>Diffbot APIs are commonly used to extract content from public web pages. There are a few ways to handle pages not publicly accessible or that provide additional information to logged-in users:</p>
<p><strong>Authenticate Using Custom Headers (Cookies)</strong></p>
<p>The most consistently applicable way to “log-in” to a site is to provide a cookie value corresponding to a logged-in user. (You can set custom headers in individual API requests, while crawling or while performing Bulk Processing jobs. <a href="guides-custom-headers">See how to set custom headers</a>.)</p>
<p>To capture a cookie value in the first place:</p>
<ol>
<li>First, log-in to the site using your regular browser.</li>
<li>Open your browser developer tools’ “Network” panel. If it’s empty, you may need to refresh your page to see the network requests made.</li>
<li>Select the primary page request and then find the “cookie” entry in your request headers. This will likely be a long string. Select and copy the entire string.</li>
<li>Optional: much of the data in a cookie string will not be necessary, so you can reduce some of the content here if you can easily determine which subset of the data is required for logging in.</li>
</ol>
<p>You can now use this cookie value in your individual requests or within your Crawlbot crawls or Bulk Processing jobs.</p>
<p><strong>POST the Content Directly</strong></p>
<p>If you have access to your target content (e.g., you are processing pages within a corporate intranet, or you have an offline archive of markup or text), you can POST HTML directly to any of our API endpoints, automatic or custom. Diffbot will process your content as it would a directly-accessible web page.</p>
<p>See specific API documentation for more details on how to craft your POST:</p>
<ul>
<li><a title="Article API: POSTing content" href="http://diffbot.com/dev/docs/article/#posting">Article API</a></li>
<li><a title="Image API: POSTing Content" href="http://diffbot.com/dev/docs/image/#posting">Image API</a></li>
<li><a title="Product API: POSTing Content" href="http://diffbot.com/dev/docs/product/#posting">Product API</a></li>
<li><a title="Custom API: POSTing Content" href="http://diffbot.com/dev/docs/custom/#posting">Custom APIs</a></li>
</ul>
<p><strong>Basic Authentication</strong></p>
<p>To access pages that require <a title="Wikipedia: Basic Access Authentication" href="http://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">basic access authentication</a>, include the username and password in your API request’s <code>url</code> parameter, e.g. <code>http%3A%2F%2FUSERNAME:PASSWORD@www.diffbot.com</code></p>
<p>A full request example:</p>
<pre>
<code>http://api.diffbot.com/v3/article?token=yourtoken&amp;url=http%3A%2F%2FUSERNAME:PASSWORD@www.diffbot.com</code>
</pre>
			</div>
