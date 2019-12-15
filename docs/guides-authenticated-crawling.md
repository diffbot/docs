---
id: guides-authenticated-crawling
title: Does Crawlbot support authenticated crawling?
sidebar_label: Does Crawlbot support authenticated crawling?
---

<div class="entry-content">
		<p>There are many authentication schemes on the web, but two of the most common are username+password HTML forms and HTTP basic authentication.</p>
<p><strong>HTML Forms</strong></p>
<div id="attachment_1162" style="width: 161px" class="wp-caption alignnone">
<a href="https://support.diffbot.com/wp-content/uploads/2018/09/elegant-modal-login-form-with-avatar-icon.png"><img aria-describedby="caption-attachment-1162" class="wp-image-1162 alignleft" src="/docs/img/elegant-modal-login-form-with-avatar-icon-267x300.png" alt="elegant-modal-login-form-with-avatar-icon" width="151" height="169" srcset="https://support.diffbot.com/wp-content/uploads/2018/09/elegant-modal-login-form-with-avatar-icon-267x300.png 267w, https://support.diffbot.com/wp-content/uploads/2018/09/elegant-modal-login-form-with-avatar-icon.png 398w" sizes="(max-width: 151px) 100vw, 151px"></a><p id="caption-attachment-1162" class="wp-caption-text">A form with username &amp; password login</p>
</div>
<p>Form-based authentication works by the setting a cookie in your browser using the <code>Set-Cookie</code> header.  Subsequent requests to the server from your browser will then send the <code>Cookie</code> header.  To retrieve the <code>Cookie</code> header, navigate to your intended site, log in with the username and password, and then in your <a href="https://codex.wordpress.org/Using_Your_Browser_to_Diagnose_JavaScript_Errors" target="_blank">Javascript console</a> enter the value <code>document.cookie</code> and save this value.</p>
<p>Then supply this value as the <code>Cookie</code> header using the <a href="guides-custom-headers" target="_blank">Crawlbot API</a>.</p>
<p><strong>HTTP Basic</strong></p>
<div id="attachment_1160" style="width: 270px" class="wp-caption alignnone">
<a href="https://support.diffbot.com/wp-content/uploads/2018/09/flask-basic-auth.png"><img aria-describedby="caption-attachment-1160" class="wp-image-1160 alignleft" src="/docs/img/flask-basic-auth-300x190.png" alt="flask-basic-auth" width="260" height="165" srcset="https://support.diffbot.com/wp-content/uploads/2018/09/flask-basic-auth-300x190.png 300w, https://support.diffbot.com/wp-content/uploads/2018/09/flask-basic-auth-768x486.png 768w, https://support.diffbot.com/wp-content/uploads/2018/09/flask-basic-auth.png 779w" sizes="(max-width: 260px) 100vw, 260px"></a><p id="caption-attachment-1160" class="wp-caption-text">An HTTP Basic login prompt</p>
</div>
<p>For HTTP Basic based login, the browser will send an <code>Authorization</code> header that is calculated based on the values of the username and password. The header will be of the format <code>Authorization: Basic $hash</code> where the <code>$hash</code> is computed as the Base 64 encoding of the string <code>$username:$password</code>. More information about basic authentication can be found <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">here</a>.</p>
<p>Once you have the <code>Authorization</code> header, as above, you can then supply this via the <a href="guides-custom-headers" target="_blank">Crawlbot API</a> in order to perform authenticated crawling.</p>
			</div>
