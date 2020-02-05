---
id: guides-authenticated-crawling
title: Does Crawlbot support authenticated crawling?
sidebar_label: Does Crawlbot support authenticated crawling?
---

<div class="entry-content">
		<p>There are many authentication schemes on the web, but two of the most common are username+password HTML forms and HTTP basic authentication.</p>
<p><strong>HTML Forms</strong></p>

![](/img/elegant-modal-login-form-with-avatar-icon-267x300.png)

<p>Form-based authentication works by the setting a cookie in your browser using the <code>Set-Cookie</code> header.  Subsequent requests to the server from your browser will then send the <code>Cookie</code> header.  To retrieve the <code>Cookie</code> header, navigate to your intended site, log in with the username and password, and then in your <a href="https://codex.wordpress.org/Using_Your_Browser_to_Diagnose_JavaScript_Errors" target="_blank">Javascript console</a> enter the value <code>document.cookie</code> and save this value.</p>
<p>Then supply this value as the <code>Cookie</code> header using the <a href="guides-custom-headers">Crawlbot API</a>.</p>
<p><strong>HTTP Basic</strong></p>

![](/img/flask-basic-auth-300x190.png)

<p>For HTTP Basic based login, the browser will send an <code>Authorization</code> header that is calculated based on the values of the username and password. The header will be of the format <code>Authorization: Basic $hash</code> where the <code>$hash</code> is computed as the Base 64 encoding of the string <code>$username:$password</code>. More information about basic authentication can be found <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">here</a>.</p>
<p>Once you have the <code>Authorization</code> header, as above, you can then supply this via the <a href="guides-custom-headers" target="_blank">Crawlbot API</a> in order to perform authenticated crawling.</p>
			</div>
