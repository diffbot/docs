---
id: guides-fixing-analyze-page-type
title: Fixing a misidentified page type with Analyze API
sidebar_label: Fixing a misidentified page type with Analyze API
todo: Modify links to old API docs
todo: Modify links to old Dashboard
---

<div class="entry-content">
		<p>Sometimes Diffbot’s <a href="https://www.diffbot.com/dev/docs/analyze/">Analyze API</a> might misidentify a page as an unsupported type. In such cases, the page type might read <code>other</code> and not return any extracted content. There’s a way to override this.</p>
<ol>
<li>Go to the <a href="https://www.diffbot.com/dev/customize/">Custom API UI</a>
</li>
<li>Preview the page being misidentified:
<p><a href="https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.50.24.png"><img class="alignnone size-medium wp-image-1192" src="/docs/img/Screen-Shot-2018-10-28-at-02.50.24.png" alt="Screen Shot 2018-10-28 at 02.50.24" srcset="https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.50.24.png 1090w, https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.50.24-300x156.png 300w, https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.50.24-768x399.png 768w, https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.50.24-1024x532.png 1024w" sizes="(max-width: 1090px) 100vw, 1090px"></a></p>
</li>
<li>Edit the <code>type</code> field by clicking on Edit.
<p><a href="https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.51.43.png"><img class="alignnone size-medium wp-image-1190" src="/docs/img/Screen-Shot-2018-10-28-at-02.51.43.png" alt="Screen Shot 2018-10-28 at 02.51.43" srcset="https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.51.43.png 2034w, https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.51.43-300x116.png 300w, https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.51.43-768x296.png 768w, https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.51.43-1024x395.png 1024w" sizes="(max-width: 2034px) 100vw, 2034px"></a></p>
</li>
<li>Enter the literal value of the page type. One of five is supported: <code>product</code>, <code>article</code>, <code>video</code>, <code>image</code>, <code>discussion</code>.</li>
</ol>
<p>Save and retry processing the page. Your rule will now see the page matching this rule’s domain regex as the type you defined.</p>
<p><a href="https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.53.02.png"><img class="alignnone size-medium wp-image-1188" src="/docs/img/Screen-Shot-2018-10-28-at-02.53.02.png" alt="Screen Shot 2018-10-28 at 02.53.02" srcset="https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.53.02.png 2274w, https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.53.02-300x215.png 300w, https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.53.02-768x549.png 768w, https://support.diffbot.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-28-at-02.53.02-1024x732.png 1024w" sizes="(max-width: 2274px) 100vw, 2274px"></a></p>
			</div>
