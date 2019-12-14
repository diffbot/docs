---
id: guides-semantria
title: Semantria-powered sentiment, entity-extraction and other text analysis features
sidebar_label: Semantria-powered sentiment, entity-extraction and other text analysis features
---

<div class="entry-content">
		<p>Diffbot’s native integration with <a href="http://www.semantria.com" target="_blank">Semantria</a> allows for Diffbot customers to access advanced text analysis features directly within the Article API response.</p>
<p>These include:</p>
<ul>
<li>article sentiment</li>
<li>categorization</li>
<li>entity and concept extraction</li>
<li>keyword identification</li>
</ul>
<p>These fields are returned realtime alongside the other elements within the Article API.</p>
<p>Current Semantria users can optionally pass along their Semantria account credentials to take advantage of existing customizations, sub-accounts, or billing arrangements already in place.</p>
<p>View a sample of Semantria-powered output below, and <a href="mailto:support@diffbot.com" target="_blank">contact us</a> if you’d like to learn more about enabling this for your Diffbot account.</p>
<pre>"sentiment": {
   "sentiment": "positive",
   "sentiment_score": 0.22319745
  },
"keywords": [
  {
    "keyword": "particularly strong",
    "confidence": 0.876206
  },
  {
    "keyword": "net income",
    "confidence": 0.631716
  },
  {
    "keyword": "nearly tripled",
    "confidence": 0.61
  },
  {
    "keyword": "social network",
    "confidence": 0.607329
  },
  {
    "keyword": "strong growth",
    "confidence": 0.6
  },
  {
    "keyword": "first quarter",
    "confidence": null
  },
  {
    "keyword": "daily habit",
    "confidence": null
  },
  {
    "keyword": "long term",
    "confidence": null
  },
  {
    "keyword": "rocky initial",
    "confidence": null
  },
  {
    "keyword": "jumbo acquisitions",
    "confidence": null
  }
],
   "categories": [
  {
    "category": "Business",
    "confidence": 1.2328336
  },
  {
    "category": "Advertising",
    "confidence": 0.66118085
  },
  {
    "category": "Software and Internet",
    "confidence": 0.562218
  },
  {
    "category": "Business",
    "confidence": 1
  },
  {
    "category": "Internet",
    "confidence": 1
  },
  {
    "category": "Mobile_Phones",
    "confidence": 0.90280783
  },
  {
    "category": "Marketing",
    "confidence": 0.67634314
  },
  {
    "category": "IT",
    "confidence": 0.5385067
  }
],
   "concepts": [
  {
    "concept": "stock-based compensation costs",
    "confidence": 5.618938
  },
  {
    "concept": "great start",
    "confidence": 2.7584872
  },
  {
    "concept": "monthly users",
    "confidence": 2.6178324
  },
  {
    "concept": "jumbo acquisitions",
    "confidence": 2.516667
  },
  {
    "concept": "instant-messaging service",
    "confidence": 2.516667
  }
],
    "entities": [
  {
    "entity": "Facebook",
    "type": "Company"
  },
  {
    "entity": "Google",
    "type": "Company"
  },
  {
    "entity": "Tamara Gaffney",
    "type": "Person"
  },
  {
    "entity": "Adobe Systems",
    "type": "Company"
  },
  {
    "entity": "Mark Zuckerberg",
    "type": "Person"
  }
]</pre>
			</div>
