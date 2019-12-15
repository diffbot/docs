---
id: error-could-not-download-page
title: Could Not Download Page Error
sidebar_label: Could Not Download Page Error
---

<div class="entry-content">
		<p><strong>Error message: Could not download page</strong></p>
<hr>
<p>This is either a blocking error (see <a href="error-error-downloading-url">this error</a> for potential solutions) or your <a href="http://tldrify.com/jao">X-evaluate custom JavaScript code</a> has an error in it. If you’re using Custom JS, please try without it. If it works, try debugging the JS by rewriting it, simplifying, testing in a real browser’s JS console, etc.</p>
<p><strong>Tips on debugging X-evaluate scripts:</strong></p>
<ol>
<li>Check if the site can even run X-eval by putting in <a href="https://jsbin.com/xodujipono/edit?js">something simple</a>, then picking that content up with a Custom API selector. This JS creates a new element with dummy content which you can target with the Custom API to make sure the injection of the new element was successful. If OK, go to next step.</li>
<li>Check if the script has the start() and end() functions. If OK, go to next step.</li>
<li>Check that the script without start() and end() successfully runs in a browser’s regular console. If OK, go to next step.</li>
<li>Check that the script doesn’t take longer than 60 seconds to execute. If OK, go to next step.</li>
<li>Avoid using JavaScript classes. Instead of var re = new RegExp(‘ab+c’); use var re = /ab+c/;</li>
<li>Use try/catch blocks to isolate running and failing parts of the script, line by line, until you find on which line it fails. You can put the simple injection script from step 1 after every line and you’ll know it executed.</li>
</ol>
<p>We are working on better X-eval debugging, but this generally helps matters.</p>
<p>Good luck!</p>
			</div>
