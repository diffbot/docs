---
id: guides-regex-custom-api
title: Regular Expressions in the API Toolkit
sidebar_label: Regular Expressions in the API Toolkit
---

<div class="entry-content">
		<p>Rules in the Custom API Toolkit can optionally include Search/Replace filters. These are regular expression operators that allow you to make changes to the returned output.</p>
<div id="attachment_90" style="width: 912px" class="wp-caption aligncenter">
<a href="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0228_68.png"><img aria-describedby="caption-attachment-90" class="size-full wp-image-90" src="/docs/img/ss_2014-0228_68.png" alt='A simple example: removing "By: " from author bylines.' width="902" height="216" srcset="https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0228_68.png 902w, https://support.diffbot.com/wp-content/uploads/2014/02/ss_2014-0228_68-300x71.png 300w" sizes="(max-width: 902px) 100vw, 902px"></a><p id="caption-attachment-90" class="wp-caption-text">A simple example: removing “By: ” from author bylines.</p>
</div>
<p>Diffbot’s underlying regular expression engine is in Java, which has some distinctions in its processing compared to other language implementations. For an overview and interactive comparison of operator-level availability, please see <a href="http://www.regular-expressions.info/refcharacters.html" target="_blank">http://www.regular-expressions.info/refcharacters.html</a>.</p>
<p>The live-preview (the “Diffy the Robot,” above) operates against the live HTML of the page being previewed, and may differ from the actual output. Be sure to confirm the output after saving your rule.</p>
<p><strong>Specific regular expression notes:</strong></p>
<ul>
<li>The ‘wildcard’ dot-character (<code>.</code>) does not match the newline character, <code>\n</code>. If your output includes a line-break, preface your regular expression with the “<a href="http://www.regular-expressions.info/modifiers.html" target="_blank">single-line mode modifier</a>“: <code>(?s)</code>
</li>
<li>To remove matching content, simply leave “replace with” blank, as in the example above.</li>
<li>Backreferences are  supported. For example, you can prepend text with the replace selector <code>(^.*$)</code> and replacement <code>prefix: $1</code>
</li>
</ul>
			</div>
