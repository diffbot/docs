---
id: guides-fixing-analyze-page-type
title: Fixing a misidentified page type with Analyze API
sidebar_label: Fixing a misidentified page type with Analyze API
todo: Modify links to old API docs
todo: Modify links to old Dashboard
---

<div class="entry-content">
		<p>Sometimes Diffbot’s <a href="api-analyze">Analyze API</a> might misidentify a page as an unsupported type. In such cases, the page type might read <code>other</code> and not return any extracted content. There’s a way to override this.</p>
<ol>
<li>Go to the <a href="https://www.diffbot.com/dev/customize/">Custom API UI</a>
</li>
<li>Preview the page being misidentified:

![](/img/Screen-Shot-2018-10-28-at-02.50.24.png)

</li>
<li>Edit the <code>type</code> field by clicking on Edit.

![](/img/Screen-Shot-2018-10-28-at-02.51.43.png)

</li>
<li>Enter the literal value of the page type. One of five is supported: <code>product</code>, <code>article</code>, <code>video</code>, <code>image</code>, <code>discussion</code>.</li>
</ol>
<p>Save and retry processing the page. Your rule will now see the page matching this rule’s domain regex as the type you defined.</p>

![](/img/Screen-Shot-2018-10-28-at-02.53.02.png)
			</div>
