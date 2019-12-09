---
id: explain-regex
title: The Regular Expressions used by Diffbot
sidebar_label: Diffbot Regex Syntax
---

<p>If you wish to explicitly control the pages Crawlbot crawls and/or processes, you can optionally use a regular expression. Each page URL will be evaluated against these regexes and matches will be spidered or processed.</p>
<p>There are a number of different regular expression implementations, all of which differ slightly in their syntax.&nbsp;Crawlbot does not use a specific implementation, but rather a custom regular expression engine to ensure the best possible performance while evaluating pages.</p>
<p>In terms of character class syntax — the most common regex concept/sequence used in Crawlbot parsing — Crawlbot supports all ASCII processing characters in the following table, and most Perl/Tcl shortcuts:</p>
<table class="wikitable">
<tbody>
<tr>
<th>Perl/Tcl</th>
<th>ASCII</th>
<th>Description</th>
</tr>
<tr>
<td></td>
<td><code>[A-Za-z0-9]</code></td>
<td>Alphanumeric characters</td>
</tr>
<tr>
<td><code>\w</code></td>
<td><code>[A-Za-z0-9_]</code></td>
<td>Alphanumeric characters plus “_”</td>
</tr>
<tr>
<td><code>\W</code></td>
<td><code>[^A-Za-z0-9_]</code></td>
<td>Non-word characters</td>
</tr>
<tr>
<td></td>
<td><code>[A-Za-z]</code></td>
<td>Alphabetic characters</td>
</tr>
<tr>
<td></td>
<td><code>[\t]</code></td>
<td>Space and tab</td>
</tr>
<tr>
<td><code>\b</code></td>
<td><code>(?&lt;=\W)(?=\w)|(?&lt;=\w)(?=\W)</code></td>
<td>Word boundaries</td>
</tr>
<tr>
<td></td>
<td><code>[\x00-\x1F\x7F]</code></td>
<td>Control characters</td>
</tr>
<tr>
<td><code>\d</code></td>
<td><code>[0-9]</code></td>
<td>Digits</td>
</tr>
<tr>
<td><code>\D</code></td>
<td><code>[^0-9]</code></td>
<td>Non-digits</td>
</tr>
<tr>
<td></td>
<td><code>[\x21-\x7E]</code></td>
<td>Visible characters</td>
</tr>
<tr>
<td></td>
<td><code>[a-z]</code></td>
<td>Lowercase letters</td>
</tr>
<tr>
<td></td>
<td><code>[\x20-\x7E]</code></td>
<td>Visible characters and the space character</td>
</tr>
<tr>
<td></td>
<td><code>[][!"#$%&amp;'()*+,./:;&lt;=&gt;?@\^_`{|}~-]</code></td>
<td>Punctuation characters</td>
</tr>
<tr>
<td><code>\s</code></td>
<td><code>[\t\r\n\v\f]</code></td>
<td>Whitespace characters</td>
</tr>
<tr>
<td><code>\S</code></td>
<td><code>[^ \t\r\n\v\f]</code></td>
<td>Non-whitespace characters</td>
</tr>
<tr>
<td></td>
<td><code>[A-Z]</code></td>
<td>Uppercase letters</td>
</tr>
<tr>
<td></td>
<td><code>[A-Fa-f0-9]</code></td>
<td>Hexadecimal digits</td>
</tr>
</tbody>
</table>
