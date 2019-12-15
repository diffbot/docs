---
id: guides-multiple-url-patterns-same-site
title: Can I create multiple custom rules for a single site?
sidebar_label: Can I create multiple custom rules for a single site?
---

<div class="entry-content">
		<p>Sometimes a single site needs multiple custom rules, perhaps due to template differences or because you wish to extract different data from different types of pages.</p>
<p>If you’re creating a completely custom API, you can always create multiple APIs for the same site. For instance:</p>
<ul>
<li>
<code>/api/categories</code> for category extraction</li>
<li>
<code>/api/item</code> for item extraction</li>
</ul>
<p>These APIs could then be used where needed on the sites that have been customized.</p>
<p>If, however, you need to apply the same API to different parts of the same site, you can customize where your rule is in effect by tailoring your rule’s Domain Regex (URL pattern) in the API Toolkit:</p>
<p><a href="https://support.diffbot.com/wp-content/uploads/2017/01/ss_2017-0119_1034.png"><img src="/docs/img/ss_2017-0119_1034-1024x139.png" alt="ss_2017-0119_1034" width="640" height="87" class="aligncenter size-large wp-image-531" srcset="https://support.diffbot.com/wp-content/uploads/2017/01/ss_2017-0119_1034-1024x139.png 1024w, https://support.diffbot.com/wp-content/uploads/2017/01/ss_2017-0119_1034-300x41.png 300w, https://support.diffbot.com/wp-content/uploads/2017/01/ss_2017-0119_1034-768x104.png 768w, https://support.diffbot.com/wp-content/uploads/2017/01/ss_2017-0119_1034.png 1414w" sizes="(max-width: 640px) 100vw, 640px"></a></p>
<p>By default when you create a new rule, the Domain Regex will apply it to the entire domain. By writing a customized regular expression, you can determine which subset of the web site will be affected by your rule. For example:</p>
<ul>
<li>Adjusting the default Domain Regex to <code>(http(s)?://)?(.*\.)?diffbot.com/products.*</code> will restrict rules from being applied unless a URL contains <code>diffbot.com/products</code>.</li>
<li>Adjusting a Domain Regex to <code>(http(s)?://)?(.*\.)?diffbot.com/company.*</code> will restrict rules to those URLs that contain <code>diffbot.com/company</code>.</li>
</ul>
<p>Using these different Domain Regex values will allow you to apply multiple rulesets within the same API to the same site.</p>
			</div>
