---
id: guides-backup-restore-rules
title: Backing up and restoring custom APIs and rules
sidebar_label: Backing up and restoring custom APIs and rules
---

<div class="entry-content">
		<p>Sometimes you might want to back up your custom rules – maybe you’re freezing your token for a while, or maybe you want to copy them to another token. In this short guide we’ll go through how to access all of your custom API rules and back them up for safe keeping.</p>
<h2 id="ipt_kb_toc_1067_0">Step 1: Access your rules</h2>
<p>Our Custom API toolkit exposes an API for itself which you can use to display all your rules. Assuming your token is "MYTOKEN", here’s how you would access your rules: just visit the following URL in the browser:</p>
<pre><code>https://api.diffbot.com/v3/custom?token=MYTOKEN
</code></pre>
<p>This should produce a screen not unlike the following one:</p>
<figure>
<img src="/docs/img/rules-output.png" alt="Rules output"><figcaption>Rules output</figcaption></figure>
<p>This is a simple JSON file (not important if you don’t know what this means) which contains a list of all your custom API rules. The collapsed rules (<code>{&lt;-&gt;}</code> in the image) are all different rules, but collapsed in the browser’s UI to make it more obvious that there are a lot of them. The code is made pretty with the help of <a href="https://github.com/tulios/json-viewer">this Chrome extension, if you need it</a>.</p>
<h2 id="ipt_kb_toc_1067_1">Step 2: Save the file</h2>
<p>To back up your rules, simply save this file somewhere onto the hard drive or your cloud storage with CMD/CTRL+S or File -&gt; Save As. Make sure the file’s extension is <code>.json</code>, so for example <code>myRules.json</code>.</p>
<p>You can now store this file somewhere for later use. Alternatively, if you’re making changes to the rules make them and then save the file.</p>
<h2 id="ipt_kb_toc_1067_2">Importing the rules</h2>
<p>So how do we use this file?</p>
<p>Using a handy tool like <a href="https://www.getpostman.com/">Postman</a>, you would do the following:</p>
<ol>
<li>
<p>In a new request tab, you would enter the API URL: <code>https://api.diffbot.com/v3/custom?token=MYTOKEN</code>. You can replace <code>MYTOKEN</code> with any token to which you want to upload the rules – does not have to be the one from which they were originally downloaded.</p>
<figure>
<img src="/docs/img/step1.png" alt="Step 1"><figcaption>Step 1</figcaption></figure>
</li>
<li>
<p>Switch the method to POST</p>
<figure>
<img src="/docs/img/step2.png" alt="Step 2"><figcaption>Step 2</figcaption></figure>
</li>
<li>
<p>In the "Body" tab, choose wither <code>raw</code> or <code>binary</code>. If you choose <code>binary</code>, then click on Choose Files and select the <code>.json</code> file we created earlier. If you choose <code>raw</code>, copy and paste that file’s content into the text area.</p>
<figure>
<img src="/docs/img/step3.png" alt="Step 3"><figcaption>Step 3</figcaption></figure>
</li>
<li>
<p>Finally, under the Headers tab, add "Content-Type" as the key, and "application/json" as the value, so that Diffbot knows to expect JSON content.</p>
<figure>
<img src="/docs/img/step4.png" alt="Step 4"><figcaption>Step 4</figcaption></figure>
</li>
<li>
<p>Press Send. This will upload the new rules into your token. You’ll get a response back that’s something like this:</p>
<pre><code class="json">  {
  "hashes":
    [
      "507a31ce",
      "ax7n3sa1",
      "z992ns6c"
    ]
  }
</code></pre>
<p>These are just IDs of the rules that were updated and can be safely ignored.</p>
</li>
</ol>
			</div>
