---
id: guides-replace-filter-custom-api
title: Using the Replace Filter in the Custom API Toolkit
sidebar_label: Using the Replace Filter in the Custom API Toolkit
todo: Modify links to old Dashboard
---

<div class="entry-content">
		<p>Diffbot offers various filters you can apply to your custom fields in the <a href="https://www.diffbot.com/dev/customize/">Custom API toolkit</a>. One such filter is the <em>replace filter</em>.</p>
<p>The replace filter’s purpose is reading a regular expression and then replacing the part of the captured text with whatever the “replace with” field contains.</p>
<p>Here is a rudimentary example.</p>
<p>Let’s say we only want to extract the type of currency from <a href="https://www.justkidding-me.com/ae/daily-deals-uae/nobodinoz-arizona-teepee">this page</a>:</p>
<figure>
<img src="/docs/img/01.png" alt="Justkidding page"><figcaption>Justkidding page</figcaption></figure>
<p>The price and currency are in the same HTML element, so we cannot simply select the currency alone.</p>
<figure>
<img src="/docs/img/02.png" alt="Info in the same DOM element"><figcaption>Info in the same DOM element</figcaption></figure>
<p>Therefore, we need to:</p>
<ol>
<li>
<p>Target the price with a custom field, let’s call it “theCurrency”. The selector <code>.special-price .price</code> will come in handy<br>
 <img src="/docs/img/03_0.png" alt="A new field is defined"></p>
</li>
<li>
<p>Then we click filters and use a replace filter.<br>
 <img src="/docs/img/04_1.png" alt="A replace filter is activated"></p>
</li>
<li>
<p>Finally, we enter <code>\s?\d+\s?\W?</code> into the first field and leave the second field empty (the second field is the value with which to replace the match from the first one).</p>
</li>
</ol>
<p>Testing this, we can see that we do indeed get currency back.</p>
<figure>
<img src="/docs/img/05_2.png" alt="Currency is returned"><figcaption>Currency is returned</figcaption></figure>
<h2 id="ipt_kb_toc_1127_0">Regex explanation</h2>
<p>The expression <code>\s?\d+\s?\W?</code> means:</p>
<ul>
<li>
<code>\s?</code> one or zero space characters</li>
<li>
<code>\d+</code> one or more digits</li>
<li>
<code>\s?</code> one or zero space characters</li>
<li>
<code>\W?</code> one or zero non-word characters</li>
</ul>
<p>In other words, it removes everything that doesn’t match the currency’s letters by replacing it with <em>nothing</em> – an empty second field. This regex could be re-used on any similar site now to solve a similar problem.</p>
<p>You can read some more about filters <a href="https://www.diffbot.com/dev/customize/help.jsp#tab_filters">here</a>.</p>
			</div>
