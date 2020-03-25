---
id: explain-regex
title: The Regular Expressions used by Diffbot
sidebar_label: Diffbot Regex Syntax
---

If you wish to explicitly control the pages Crawlbot crawls and/or processes, you can optionally use a regular expression. Each page URL will be evaluated against these regexes and matches will be spidered or processed.    

There are a number of different regular expression implementations, all of which differ slightly in their syntax.&nbsp;Crawlbot does not use a specific implementation, but rather a custom regular expression engine to ensure the best possible performance while evaluating pages.    

In terms of character class syntax — the most common regex concept/sequence used in Crawlbot parsing — Crawlbot supports all ASCII processing characters in the following table, and most Perl/Tcl shortcuts:  

<table class="wikitable">
<tbody>
<tr>
<th>Perl/Tcl</th>
<th>ASCII</th>
<th>Description</th>
</tr>
<tr>
<td></td>
<td>    [A-Za-z0-9]    </td>
<td>Alphanumeric characters</td>
</tr>
<tr>
<td>    \w    </td>
<td>    [A-Za-z0-9_]    </td>
<td>Alphanumeric characters plus “_”</td>
</tr>
<tr>
<td>    \W    </td>
<td>    [^A-Za-z0-9_]    </td>
<td>Non-word characters</td>
</tr>
<tr>
<td></td>
<td>    [A-Za-z]    </td>
<td>Alphabetic characters</td>
</tr>
<tr>
<td></td>
<td>    [\t]    </td>
<td>Space and tab</td>
</tr>
<tr>
<td>    \b    </td>
<td>    (?&lt;=\W)(?=\w)|(?&lt;=\w)(?=\W)    </td>
<td>Word boundaries</td>
</tr>
<tr>
<td></td>
<td>    [\x00-\x1F\x7F]    </td>
<td>Control characters</td>
</tr>
<tr>
<td>    \d    </td>
<td>    [0-9]    </td>
<td>Digits</td>
</tr>
<tr>
<td>    \D    </td>
<td>    [^0-9]    </td>
<td>Non-digits</td>
</tr>
<tr>
<td></td>
<td>    [\x21-\x7E]    </td>
<td>Visible characters</td>
</tr>
<tr>
<td></td>
<td>    [a-z]    </td>
<td>Lowercase letters</td>
</tr>
<tr>
<td></td>
<td>    [\x20-\x7E]    </td>
<td>Visible characters and the space character</td>
</tr>
<tr>
<td></td>
<td>    [][!"#$%&amp;'()*+,./:;&lt;=&gt;?@\^_`{|}~-]    </td>
<td>Punctuation characters</td>
</tr>
<tr>
<td>    \s    </td>
<td>    [\t\r\n\v\f]    </td>
<td>Whitespace characters</td>
</tr>
<tr>
<td>    \S    </td>
<td>    [^ \t\r\n\v\f]    </td>
<td>Non-whitespace characters</td>
</tr>
<tr>
<td></td>
<td>    [A-Z]    </td>
<td>Uppercase letters</td>
</tr>
<tr>
<td></td>
<td>    [A-Fa-f0-9]    </td>
<td>Hexadecimal digits</td>
</tr>
</tbody>
</table>
