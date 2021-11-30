---
id: kg-article-categories-list
title: Article Categories
onPageNav: false
---

**BETA** — Article categories provide structured context to the topic discussed in a particular piece of text. Unlike [tags](kg-ont-article#tags), categories describe the text as a whole and tend to be more abstract. 

> As of Nov 17, 2021, article categories is in beta and is only supported through [Article Extract](api-intro-article). Ontology and access may be subject to change at any time.

Here's a sample request to extract categories alongside your article extraction —


```python
https://api.diffbot.com/v3/article?token=TOKEN&url=https://blog.diffbot.com/a-less-biased-way-to-discern-media-bias-using-knowledge-graph-enhanced-ai/&naturalLanguage=categories
```

The category list below outlines all possible categories that may be returned by Diffbot Extract.

| Primary Category    | Secondary Category | Tertiary Category                   |  Quaternary Category |
| ------------------- | ------------------ | ----------------------------------- | ---- |
{{ #articleCategories }}
|  {{ name }}         |                   |   |  |
{{ #children }}
|          |  {{ name }}                 |  |  |
{{ #children }}
|          |                  | {{ name }}  |  |
{{ #children }}
|          |                  |   | {{ name }} |
{{ /children }}
{{ /children }}
{{ /children }}
{{ /articleCategories }}


<style>
/* Hides the Right-Hand Secondary Nav for a Full Width Industry Table */
.onPageNav {
    display: none;
}
/* Hides the Unnecessary Prev/Next Buttons for this Reference Doc */
.docs-prevnext {
    display: none;
}
</style>