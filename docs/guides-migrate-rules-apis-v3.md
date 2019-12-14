---
id: guides-migrate-rules-apis-v3
title: Transitioning Custom Rules to Updated API Versions
sidebar_label: Transitioning Custom Rules to Updated API Versions
---

<div class="entry-content">
		<p>Diffbot’s Custom API Toolkit allows you to override default Diffbot API fields (and add new fields, and create new APIs entirely).</p>
<p>As Diffbot’s API fields and structure have changed (see <a title="Moving to New Versions of Diffbot APIs" href="explain-moving-to-new-api-versions">this guide</a> to migrating to newer versions of our APIs), so too has the structure behind our API Toolkit.</p>
<p>To ensure your API overrides continue to work as you transition to newer versions of our APIs, follow this quick guide:</p>
<p><strong>Product API</strong></p>
<p>If you have created rules against the V2 API, you will need to migrate your previous rules when you transition to V3. Either delete and recreate your rules, or contact <a href="mailto:support@diffbot.com">Diffbot Support</a> for help migrating.</p>
<p><strong>Article API</strong></p>
<p>Article API fields have largely stayed the same between V1 and V3, with media elements being the primary exception. (In V1 images and videos were returned within the <code>media</code> element; in V2 and V3 these were returned in separate <code>images</code> and <code>videos</code> arrays.) If you have media rules from V1 of the Article API, you will need to delete and recreate your rule, or contact <a href="mailto:support@diffbot.com">Diffbot Support</a> for help migrating.</p>
			</div>
