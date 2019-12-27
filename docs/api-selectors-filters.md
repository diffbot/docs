---
id: api-selectors-filters
title: Custom API Selectors and Filters
sidebar_label: Custom API Selectors and Filters
---

<div id="docBody">
            
<p>The API Toolkit uses advanced CSS selector logic to override the output of default Diffbot fields (in an Automatic API) or to create entirely new fields. When editing your rules, you can use the following selectors and logic to populate your output.</p>
<h3 id="customheaders">Basic Selectors</h3>

<table class="table table-bordered" border="0" cellpadding="5">
            <tbody>
            <tr>
            <th align="left">Pattern</th>
            <th align="left">Matches</th>
            <th align="left">Example</th>
            </tr>
            <tr>
            <td><code>*</code></td>
            <td>any element</td>
            <td><code>*</code></td>
            </tr>
            <tr>
            <td><code>tagname</code></td>
            <td>elements with the given tag name</td>
            <td>
<code>div</code>, <code>p</code>
</td>
            </tr>
            <tr>
            <td><code>namespace|type</code></td>
            <td>elements of type 'type' in the namespace <i>ns</i>
</td>
            <td>
<code>fb|name</code> finds <code>&lt;fb:name&gt;</code> elements</td>
            </tr>
            <tr>
            <td><code>#id</code></td>
            <td>elements with attribute ID of "id"</td>
            <td>
<code>div#container</code>, <code>#header</code>
</td>
            </tr>
            <tr>
            <td><code>.class</code></td>
            <td>elements with a class name of "class"</td>
            <td>
<code>div.left</code>, <code>.post-body</code>
</td>
            </tr>
            <tr>
            <td>
<code>element[attr]</code> or <code>[attr]</code>
</td>
            <td>elements with an attribute named "attr" (with any value)</td>
            <td>
<code>a[href]</code>, <code>[title]</code>
</td>
            </tr>
            <tr>
            <td>
<code>element[attr=val]</code> or <code>[attr=val]</code>
</td>
            <td>elements with an attribute named "attr" and value equal to "val"</td>
            <td>
<code>img[width=500]</code>, <code>a[rel=nofollow]</code>
</td>
            </tr>
            <tr>
            <td><code>[^attrPrefix]</code></td>
            <td>elements with an attribute name starting with "attrPrefix". Use to find elements with HTML5 datasets</td>
            <td>
<code>[^data-]</code>, <code>div[^data-]</code>
</td>
            </tr>
            <tr>
            <td><code>[attr^=valPrefix]</code></td>
            <td>elements with an attribute named "attr", and value starting with "valPrefix"</td>
            <td><code>a[href^=http:]</code></td>
            </tr>
            <tr>
            <td><code>[attr$=valSuffix]</code></td>
            <td>elements with an attribute named "attr", and value ending with "valSuffix"</td>
            <td><code>img[src$=.png]</code></td>
            </tr>
            <tr>
            <td><code>[attr*=valContaining]</code></td>
            <td>elements with an attribute named "attr", and value containing "valContaining"</td>
            <td><code>a[href*=/search/]</code></td>
            </tr>
            <tr>
            <td><code>[attr~=<em>regex</em>]</code></td>
            <td>elements with an attribute named "attr", and value matching the regular expression</td>
            <td><code>img[src~=(?i)\\.(png|jpe?g)]</code></td>
            </tr>
            <tr>
            <td colspan="2"><em>The above may be combined in any order</em></td>
            <td><code>div.header[title]</code></td>
            </tr>
           </tbody>
            </table>
<h3 id="combinators">Combinators</h3>
<p>The following can be used to specify certain elements based on their relation to other elements on the page (parents, children, siblings, etc.).</p>
<table class="table table-bordered" border="0" cellpadding="5">
            <tbody>
            <tr>
            <th align="left">Pattern</th>
            <th align="left">Matches</th>
            <th align="left">Example</th>
            </tr>
           <tr>
            <td><code>E F</code></td>
            <td>an F element descended from an E element</td>
            <td>
<code>div a</code>, <code>.logo h1</code>
</td>
            </tr>
            <tr>
            <td><code>E &gt; F</code></td>
            <td>an F direct child of E</td>
            <td><code>ol &gt; li</code></td>
            </tr>
            <tr>
            <td><code>E + F</code></td>
            <td>an F element immediately preceded by sibling E</td>
            <td>
<code>li + li</code>, <code>div.head + div</code>
</td>
            </tr>
            <tr>
            <td><code>E ~ F</code></td>
            <td>an F element preceded by sibling E</td>
            <td><code>h1 ~ p</code></td>
            </tr>
            <tr>
            <td><code>E, F, G</code></td>
            <td>all matching elements E, F, or G</td>
            <td><code>a[href], div, h3</code></td>
            </tr>
            </tbody>
          </table>

<h3 id="pseudo">Pseudo Selectors</h3>
  <p>The following advanced selectors are also available.</p>

<table class="table table-bordered" border="0" cellpadding="5">
            <tbody>
            <tr>
            <th align="left">Pattern</th>
            <th align="left">Matches</th>
            <th align="left">Example</th>
            </tr>

            <tr>
            <td><code>:first-child</code></td>
            <td>elements that are the first child of some other element</td>
            <td>
<code>div &gt; p:first-child</code> finds the first child element of a <code>div</code> that happens to be a <code>p</code>
</td>
            </tr>
            <tr>
            <td><code>:last-child</code></td>
            <td>elements that are the last child of some other element</td>
            <td>
<code>ul &gt; li:last-child</code> finds the last list-item in each unordered list</td>
            </tr>
            <tr>
            <td><code>:only-child</code></td>
            <td>elements that are the only child of a parent element</td>
            <td>
<code>p:only-child</code> finds paragraphs without sibling elements</td>
            </tr>
            <td><code>:first-of-type</code></td>
            <td>elements that are the first sibling <strong>of its type</strong> in the list of children of its parent element</td>
            <td>
<code>div &gt; p:first-of-type</code> finds the first <code>p</code> element of each <code>div</code>
</td>
            
            <tr>
            <td><code>:last-of-type</code></td>
            <td>elements that are the last sibling <strong>of its type</strong> in the list of children of its parent element</td>
            <td>
<code>div &gt; span:last-of-type</code> finds the last <code>span</code> element within <code>div</code> elements</td>
            </tr>
            <tr>
            <td><code>:only-of-type</code></td>
            <td>an element that has a parent element and whose parent element has no other element children <em>with the same expanded element name</em>
</td>
            <td>
<code>p:only-of-type</code> finds paragraphs without sibling <code>p</code> elements</td>
            </tr>
            <td><code>:empty</code></td>
            <td>elements that have no children at all</td>
            <td>
<code>p:empty</code> finds paragraphs without children</td>
            
            <tr>
            <td><code>:nth-child(<em>an+b</em>)</code></td>
            <td>elements that have <em>an+b-1</em> siblings <strong>before</strong> them in the document tree, for any positive integer or zero value of <em>n</em>, and have a parent element. Can also take 'odd' and 'even' as arguments. </td>
            <td>
<code>tr:nth-child(2n+1)</code> finds every odd row of a table</td>
            </tr>
            <tr>
            <td><code>:nth-last-child(<em>an+b</em>)</code></td>
            <td>elements that have <em>an+b-1</em> siblings after <strong>after</strong> them in the document tree.</td>
            <td>
<code>tr:nth-lastchild(-n+2)</code> finds the last two rows of a table</td>
            </tr>
            <tr>
            <td><code>:nth-of-type(<em>an+b</em>)</code></td>
            <td>represents an element that has <em>an+b-1</em> siblings with the same expanded element name <strong>before</strong> it in the document tree, for any zero or positive integer value of n, and has a parent element</td>
            <td><code>img:nth-of-type(2n+1)</code></td>
            </tr>
            <tr>
            <td><code>:nth-last-of-type(<em>an+b</em>)</code></td>
            <td>represents an element that has <em>an+b-1</em> siblings with the same expanded element name <strong>after</strong> it in the document tree, for any zero or positive integer value of n, and has a parent element</td>
            <td><code>img:nth-last-of-type(2n+1)</code></td>
            </tr>
            <tr>
            <td><code>:lt(<em>n</em>)</code></td>
            <td>elements whose sibling index is less than <em>n</em>
</td>
            <td>
<code>td:lt(3)</code> finds the first 2 cells of each row</td>
            </tr>
            <tr>
            <td><code>:gt(<em>n</em>)</code></td>
            <td>elements whose sibling index is greater than <em>n</em>
</td>
            <td>
<code>td:gt(1)</code> finds cells after skipping the first two</td>
            </tr>
            <tr>
            <td><code>:eq(<em>n</em>)</code></td>
            <td>elements whose sibling index is equal to <em>n</em>
</td>
            <td>
<code>td:eq(0)</code> finds the first cell of each row</td>
            </tr>
            <tr>
            <td><code>:has(<em>selector</em>)</code></td>
            <td>elements that contains at least one element matching the <em>selector</em>
</td>
            <td>
<code>div:has(p)</code> finds divs that contain p elements </td>
            </tr>
            <tr>
            <td><code>:not(<em>selector</em>)</code></td>
            <td>elements that do not match the <em>selector</em>
</td>
            <td>
<code>div:not(.logo)</code> finds all divs that do not have the "logo" class.<br><code>div:not(:has(div))</code> finds divs that do not contain divs.</td>
            </tr>
            <tr>
            <td><code>:contains(<em>text</em>)</code></td>
            <td>elements that contains the specified text. The search is case insensitive. The text may appear in the found element, or any of its descendants.</td>
            <td>
<code>p:contains(jsoup)</code> finds p elements containing the text "jsoup".</td>
            </tr>
            <tr>
            <td><code>:matches(<em>regex</em>)</code></td>
            <td>elements whose text matches the specified regular expression. The text may appear in the found element, or any of its descendants.</td>
            <td>
<code>td:matches(\\d+)</code> finds table cells containing digits. <code>div:matches((?i)login)</code> finds divs containing the text, case insensitively.</td>
            </tr>
            <tr>
            <td><code>:containsOwn(<em>text</em>)</code></td>
            <td>elements that directly contains the specified text. The search is case insensitive. The text must appear in the found element, not any of its descendants.</td>
            <td>
<code>p:containsOwn(jsoup)</code> finds p elements with own text "jsoup".</td>
            </tr>
            <tr>
            <td><code>:matchesOwn(<em>regex</em>)</code></td>
            <td>elements whose own text matches the specified regular expression. The text must appear in the found element, not any of its descendants.</td>
            <td>
<code>td:matchesOwn(\\d+)</code> finds table cells directly containing digits. <code>div:matchesOwn((?i)login)</code> finds divs containing the text, case insensitively.</td>
            </tr>
            <tr>
            <td colspan="2"><em>The above may be combined in any order and with other selectors.</em></td>
            <td><code>.light:contains(name):eq(0)</code></td>
            </tr>
            </tbody>
            </table>

<h3 id="filters">Output Filters</h3>
<p>When creating a new rule, the following filters can be applied to the default selector output to further refine returned data.</p>
            <table class="table table-bordered" border="0" cellpadding="5">
            <tbody>
            <tr>
            <th align="left">Filter</th>
            <th align="left">Description</th>
            </tr>
            <tr>
              <td><strong>Attribute</strong></td>
              <td>Retrieves the specified attribute value of an element. For example, to extract the link (http://blog.diffbot.com) from the anchor tag <code>&lt;a href="http://www.blog.diffbot.com" class="outbound"&gt;</code>, you would enter <code>href</code> as your attribute filter. You can only use a single attribute filter per rule.</td>
            </tr>
            <tr>
              <td><strong>Ignore</strong></td>
              <td>Ignores the specified selectors (and all descendants) if they are found within the primary CSS selector. You may use any of the selector formats specified in this help screen.</td>
            </tr>
            <tr>
              <td><strong>Replace</strong></td>
              <td>Allows you to specify match and replace regular expressions to alter the output returned by the Diffbot API. To remove matching content, simply leave the "replace with" field blank.
                  Backreferences are also supported.  For example, you can prepend text with the replace selector <code>(^.*$)</code> and replacement <code>prefix: $1</code><br><br>Diffbot uses a Java implementation for its regular expression parsing. <a href="http://www.regular-expressions.info/refcharacters.html" target="_blank">Regular-Expressions.info</a> offers an excellent overview of language-specific distinctions. For more details on Diffbot's regular expression implementation, please see <a href="guides-regex-custom-api" target="_blank">this Support article</a>.
              </td>
            </tr>
          </tbody>
</table>

            </div>