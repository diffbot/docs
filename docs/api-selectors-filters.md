---
id: api-selectors-filters
title: Custom API Selectors and Filters
sidebar_label: Custom API Selectors and Filters
---

The API Toolkit uses advanced CSS selector logic to override the output of default Diffbot fields (in an Automatic API) or to create entirely new fields. When editing your rules, you can use the following selectors and logic to populate your output.

## Basic Selectors

| Pattern | Matches | Example |
| :------ | :------ | :------ |
| `*` | any element | `*` |
| `tagname` | elements with the given tag name | `div`, `p` |
| <code>namespace&#124;type</code> | elements of type 'type' in the namespace *ns* | <code>fb&#124;name</code> finds `<fb:name>` elements |
| `#id` | elements with attribute ID of "id" | `div#container`, `#header` |
| `.class` | elements with a class name of "class" | `div.left`, `.post-body` |
| `element[attr]` or `[attr]` | elements with an attribute named "attr" (with any value) | `a[href]`, `[title]` |
| `element[attr=val]` or `[attr=val]` | elements with an attribute named "attr" and value equal to "val" | `img[width=500]`, `a[rel=nofollow]` |
| `[^attrPrefix]` | elements with an attribute name starting with "attrPrefix". Use to find elements with HTML5 datasets |`[^data-]`, `div[^data-]` |
| `[attr^=valPrefix]` | elements with an attribute named "attr", and value starting with "valPrefix" | `a[href^=http:]` |
| `[attr$=valSuffix]` | elements with an attribute named "attr", and value ending with "valSuffix" | `img[src$=.png]` |
| `[attr*=valContaining]` | elements with an attribute named "attr", and value containing "valContaining" | `a[href*=/search/]` |
| <code>[attr~=<em>regex</em>]</code> | elements with an attribute named "attr", and value matching the regular expression | <code>img[src~=(?i)\\.(png&#124;jpe?g)]</code> |

The above may be combined in any order, such as `div.header[title]`

## Combinators

The following can be used to specify certain elements based on their relation to other elements on the page (parents, children, siblings, etc.).

| Pattern | Matches | Example |
| :------ | :------ | :------ |
| `E F` | an F element descended from an E element | `div a`, `.logo h1` |
| `E > F` | an F direct child of E | `ol > li` |
| `E + F` | an F element immediately preceded by sibling E | `li + li`, `div.head + div` |
| `E ~ F` | an F element preceded by sibling E | `h1 ~ p` |
| `E, F, G` | all matching elements E, F, or G | `a[href], div, h3` |

## Pseudo Selectors

The following advanced selectors are also available.

| Pattern | Matches | Example |
| :------ | :------ | :------ |
| `:first-child` | elements that are the first child of some other element | `div > p:first-child` finds the first child element of a `div` that happens to be a `p` |
| `:last-child` | elements that are the last child of some other element | `ul > li:last-child` finds the last list-item in each unordered list |
| `:only-child` | elements that are the only child of a parent element | `p:only-child` finds paragraphs without sibling elements
| `:first-of-type` | elements that are the first sibling **of its type** in the list of children of its parent element | `div > p:first-of-type` finds the first `p` element of each `div` |
| `:last-of-type` | elements that are the last sibling **of its type** in the list of children of its parent element | `div > span:last-of-type` finds the last `span` element within `div` elements |
| `:only-of-type` | an element that has a parent element and whose parent element has no other element children *with the same expanded element name* | `p:only-of-type` finds paragraphs without sibling `p` elements
| `:empty` | elements that have no children at all | `p:empty` finds paragraphs without children |
| <code>:nth-child(<em>an+b</em>)</code> | elements that have *an+b-1* siblings **before** them in the document tree, for any positive integer or zero value of *n*, and have a parent element. Can also take 'odd' and 'even' as arguments. | `tr:nth-child(2n+1)` finds every odd row of a table |
| <code>:nth-last-child(<em>an+b</em>)</code> | elements that have *an+b-1* siblings after **after** them in the document tree. | `tr:nth-lastchild(-n+2)` finds the last two rows of a table |
| <code>:nth-of-type(<em>an+b</em>)</code> | represents an element that has *an+b-1* siblings with the same expanded element name **before** it in the document tree, for any zero or positive integer value of n, and has a parent element | `img:nth-of-type(2n+1)` |
| <code>:nth-last-of-type(<em>an+b</em>)</code> | represents an element that has *an+b-1* siblings with the same expanded element name **after** it in the document tree, for any zero or positive integer value of n, and has a parent element | `img:nth-last-of-type(2n+1)` |
| <code>:lt(<em>n</em>)</code> | elements whose sibling index is less than *n* | `td:lt(3)` finds the first 2 cells of each row |
| <code>:gt(<em>n</em>)</code> | elements whose sibling index is greater than *n* | `td:gt(1)` finds cells after skipping the first two |
| <code>:eq(<em>n</em>)</code> | elements whose sibling index is equal to *n* | `td:eq(0)` finds the first cell of each row |
| <code>:has(<em>selector</em>)</code> | elements that contains at least one element matching the *selector* | `div:has(p)` finds divs that contain p elements |
| <code>:not(<em>selector</em>)</code> | elements that do not match the *selector* | `div:not(.logo)` finds all divs that do not have the "logo" class.<br>`div:not(:has(div))` finds divs that do not contain divs. |
| <code>:contains(<em>text</em>)</code> | elements that contains the specified text. The search is case insensitive. The text may appear in the found element, or any of its descendants. | `p:contains(jsoup)` finds p elements containing the text "jsoup". |
| <code>:matches(<em>regex</em>)</code> | elements whose text matches the specified regular expression. The text may appear in the found element, or any of its descendants. | `td:matches(\\d+)` finds table cells containing digits. `div:matches((?i)login)` finds divs containing the text, case insensitively. |
| <code>:containsOwn(<em>text</em>)</code> | elements that directly contains the specified text. The search is case insensitive. The text must appear in the found element, not any of its descendants. | `p:containsOwn(jsoup)` finds p elements with own text "jsoup". |
| <code>:matchesOwn(<em>regex</em>)</code> | elements whose own text matches the specified regular expression. The text must appear in the found element, not any of its descendants. | `td:matchesOwn(\\d+)` finds table cells directly containing digits. `div:matchesOwn((?i)login)` finds divs containing the text, case insensitively. |

The above may be combined in any order and with other selectors, such as `.light:contains(name):eq(0)`

## Output Filters

When creating a new rule, the following filters can be applied to the default selector output to further refine returned data.

| Filter | Description |
| :----- | :---------- |
| **Attribute** | Retrieves the specified attribute value of an element. For example, to extract the link (http://blog.diffbot.com) from the anchor tag `<a href="http://www.blog.diffbot.com" class="outbound">`, you would enter `href` as your attribute filter. You can only use a single attribute filter per rule. |
| **Ignore** | Ignores the specified selectors (and all descendants) if they are found within the primary CSS selector. You may use any of the selector formats specified in this help screen. |
| **Replace** | Allows you to specify match and replace regular expressions to alter the output returned by the Diffbot API. To remove matching content, simply leave the "replace with" field blank. Backreferences are also supported. For example, you can prepend text with the replace selector `(^.*$)` and replacement `prefix: $1`<br><br>Diffbot uses a Java implementation for its regular expression parsing. [Regular-Expressions.info](https://www.regular-expressions.info/refcharacters.html) offers an excellent overview of language-specific distinctions. For more details on Diffbot's regular expression implementation, please see [this Support article](guides-regex-custom-api.md). |
