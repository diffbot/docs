---
id: kg-ont-discussion
title: Discussion
---

The Discussion entity type encompasses forum and other similar discussions found throughout the web and known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Discussion Fields
* [language](#language) 
* [nextPage](#nextpage) 
* [nextPages](#nextpages) 
* [numPages](#numpages) 
* [numParticipants](#numparticipants) 
* [numPosts](#numposts) 
* [posts](#posts) 
* [provider](#provider) 
* [rssUrl](#rssurl) 
* [tags](#tags) 
* [title](#title) 

## Discussion Field Details
Note that certain longer field examples may be truncated for readability in these docs. 

### language
  Refers to the language which a Discussion is written
* **Type:** String
* **Example:**
```
{
	"language": ""
}
```
### nextPage
  If discussion spans multiple pages, nextPage will return the subsequent page URL
* **Type:** String
* **Example:**
```
{
	"nextPage": "https://www.amazon.com/Sea-Wolves-History-Vikings/dp/B00ZGL8HYE/?plink=0dbf4148-955b-43&ref=adblp13nvvxx_next"
}
```
### nextPages
  Array of all page URLs concatenated in a multipage discussion
* **Type:** String
* **Example:**
```
{
	"nextPages": ""
}
```
### numPages
  
* **Type:** Integer
* **Example:**
```
{
	"numPages": 1
}
```
### numParticipants
  Number of unique participants in the discussion thread or comments
* **Type:** Integer
* **Example:**
```
{
	"numParticipants": 18
}
```
### numPosts
  
* **Type:** Integer
* **Example:**
```
{
	"numPosts": 18
}
```
### posts
  
* **Type:** DiscussionPost
* **Example:**
```
{
	"posts": [
		{
			"date": {
				"str": "d2017-03-01T00:00",
				"precision": 4,
				"timestamp": 1488326400000
			},
			"summary": "Lars Brownworth's \"The Sea Wolves\" is a nice introduction to the Vikings. The strength of the book i...",
			"image": "",
			"author": "Otter",
			"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AGQCWXQIRAXMUCRLB4E2KSFKQRTQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
			"name": "Lars Brownworth's \"The Sea Wol...",
			"language": "en",
			"html": "<p>Lars Brownworth's &quot;The Sea Wolves&quot; is a nice introduction to the Vikings. The strength of the book is that it aims at a general audience, refusing to get bogged down in scholarly disputes (some of which are noted in passing, others of which are passed over silently). It's a narrative, with thumbnail sketches of significant figures, and quite readable.</p>\n<p>The book has two main weaknesses. The first is that it was evidently rushed into print by a second-rate editor. For instance, a footnote on page 134 refers to &quot;the following ruse&quot; where the author clearly meant &quot;the preceding ruse.&quot; Elsewhere, we read &quot;suite&quot; for &quot;suit.&quot; On page 159, Tyrker, Leif Erikson's &quot;foster-father,&quot; loses &quot;her&quot; way. Comma-usage is spotty and irregular. Errors of this kind crop up often enough that it's irritating.</p>\n<p>Perhaps, too, a more gifted editor would have curtailed some of Brownworth's stylistic excesses. He has a light-bordering-on-smarmy tone that runs away with him at times. Describing the murderous Hastein as a &quot;nuisance&quot; to the Franks once (on page 128) is cute. Doing it twice (again one paragraph later) is obnoxious. This also tends to misdirect the reader emotionally: there was nothing light or entertaining about the northern raiders, and while Brownworth clearly aims to play the lightly-ironic history teacher, in print he just feels strangely disconnected from his subject.</p>\n<p>Second, the subtitle promises a &quot;HISTORY&quot; of the Vikings. But there's history and then there's history. The scholarship in this book, while not precisely _wrong_, is a bit shallow. This is always a tricky criticism in a book that so obviously means to popularize the subject and to make it easy: Brownworth doesn't intend to write a scholarly book, just one that's responsible to the scholarship. He is after all a high school teacher, not a research professor, which means that he probably concentrates on breadth rather than depth of knowledge.</p>\n<p>That's not necessarily a weakness, but the book must be read with this in mind: if your knowledge of the Vikings is small, this won't bother you at all. If you know much about them at all, the book won't increase your knowledge, and you might find yourself suspecting that Brownworth is unintentionally misrepresenting some events by keeping them light. After all, history takes a little precision and sobriety. But for all that, it's not a bad book.</p>",
			"pageUrl": "https://www.amazon.com/Sea-Wolves-History-Vikings/dp/B00ZGL8HYE/?sr=",
			"id": 0,
			"text": "Lars Brownworth's \"The Sea Wolves\" is a nice introduction to the Vikings. The strength of the book is that it aims at a general audience, refusing to get bogged down in scholarly disputes (some of which are noted in passing, others of which are passed over silently). It's a narrative, with thumbnail sketches of significant figures, and quite readable.\nThe book has two main weaknesses. The first is that it was evidently rushed into print by a second-rate editor. For instance, a footnote on page 134 refers to \"the following ruse\" where the author clearly meant \"the preceding ruse.\" Elsewhere, we read \"suite\" for \"suit.\" On page 159, Tyrker, Leif Erikson's \"foster-father,\" loses \"her\" way. Comma-usage is spotty and irregular. Errors of this kind crop up often enough that it's irritating.\nPerhaps, too, a more gifted editor would have curtailed some of Brownworth's stylistic excesses. He has a light-bordering-on-smarmy tone that runs away with him at times. Describing the murderous Hastein as a \"nuisance\" to the Franks once (on page 128) is cute. Doing it twice (again one paragraph later) is obnoxious. This also tends to misdirect the reader emotionally: there was nothing light or entertaining about the northern raiders, and while Brownworth clearly aims to play the lightly-ironic history teacher, in print he just feels strangely disconnected from his subject.\nSecond, the subtitle promises a \"HISTORY\" of the Vikings. But there's history and then there's history. The scholarship in this book, while not precisely _wrong_, is a bit shallow. This is always a tricky criticism in a book that so obviously means to popularize the subject and to make it easy: Brownworth doesn't intend to write a scholarly book, just one that's responsible to the scholarship. He is after all a high school teacher, not a research professor, which means that he probably concentrates on breadth rather than depth of knowledge.\nThat's not necessarily a weakness, but the book must be read with this in mind: if your knowledge of the Vikings is small, this won't bother you at all. If you know much about them at all, the book won't increase your knowledge, and you might find yourself suspecting that Brownworth is unintentionally misrepresenting some events by keeping them light. After all, history takes a little precision and sobriety. But for all that, it's not a bad book."
		},
		{
			"date": {
				"str": "d2018-03-21T00:00",
				"precision": 4,
				"timestamp": 1521590400000
			},
			"summary": "This is a good follow-up to fans of Bernard Cornwell and/or the Vikings series; it's very broad and ...",
			"image": "",
			"author": "Matthew",
			"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AGAYXHF7DD3CCBRNWLPEPKHIGGUA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
			"name": "This is a good follow-up to fa...",
			"language": "en",
			"html": "<p>This is a good follow-up to fans of Bernard Cornwell and/or the Vikings series; it's very broad and its tone and pace are generally punchy enough to keep things moving while providing salient details. It gave me a quick-and-dirty overview of all things Viking, but it is not a source I would want to put on my works cited page for a graduate history course, for two reasons.</p>\n<p>First, as the author's own bibliographic page makes clear, his own source pool is (on average) very recent and relatively shallow. The number and type of sources make clear that this is not a scholarly work. To be fair, the author never claims to be an academic expert, but I feel like anything labeled historical non-fiction has a certain implicit burden of scholarship.</p>\n<p>Second, as one of the highly-rated reviews said, this book suffers greatly from a lack of even basic proofreading. Like, as a person with a basic degree in English, I wish the author had asked someone with a basic degree in English to look over his manuscript even once before publishing it. And, to clarify: I don't mean, &quot;OMG, he used the Oxford comma on page 47 but failed to use it on page 216! Burn it with fire!&quot; I mean glaring, smack-your-head-into-the-desk errors that totally pull you out of the book and make you start to doubt if the author is even getting his historical facts right.</p>\n<p>I gave this book four stars because A) the author is a high-school history teacher, not a career academic, so I cut him slack on the errors, and B) it whetted my appetite for more material from that age and area; I've now got a half-dozen more scholarly (and probably less-entertaining) books on my wish list.</p>",
			"pageUrl": "https://www.amazon.com/Sea-Wolves-History-Vikings/dp/B00ZGL8HYE/?sr=",
			"id": 1,
			"text": "This is a good follow-up to fans of Bernard Cornwell and/or the Vikings series; it's very broad and its tone and pace are generally punchy enough to keep things moving while providing salient details. It gave me a quick-and-dirty overview of all things Viking, but it is not a source I would want to put on my works cited page for a graduate history course, for two reasons.\nFirst, as the author's own bibliographic page makes clear, his own source pool is (on average) very recent and relatively shallow. The number and type of sources make clear that this is not a scholarly work. To be fair, the author never claims to be an academic expert, but I feel like anything labeled historical non-fiction has a certain implicit burden of scholarship.\nSecond, as one of the highly-rated reviews said, this book suffers greatly from a lack of even basic proofreading. Like, as a person with a basic degree in English, I wish the author had asked someone with a basic degree in English to look over his manuscript even once before publishing it. And, to clarify: I don't mean, \"OMG, he used the Oxford comma on page 47 but failed to use it on page 216! Burn it with fire!\" I mean glaring, smack-your-head-into-the-desk errors that totally pull you out of the book and make you start to doubt if the author is even getting his historical facts right.\nI gave this book four stars because A) the author is a high-school history teacher, not a career academic, so I cut him slack on the errors, and B) it whetted my appetite for more material from that age and area; I've now got a half-dozen more scholarly (and probably less-entertaining) books on my wish list."
		},
		{
			"date": {
				"str": "d2015-12-01T00:00",
				"precision": 4,
				"timestamp": 1448928000000
			},
			"summary": "If you're looking for an exploration of Viking customs and culture, this probably isn't the book for...",
			"image": "",
			"author": "Verity Brown",
			"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AGFJETADE4GMIAMJGAICOJRTFJ3Q/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
			"name": "If you're looking for an explo...",
			"language": "en",
			"html": "<p>If you're looking for an exploration of Viking customs and culture, this probably isn't the book for you. Rather, it explores the profound impact of the Vikings on future history across the entire map of Europe, from Ireland to Russia to Byzantium (yes, you read that correctly--Byzantium). It's rather mindboggling to consider that Harald Hardrada--the Viking invader that the Saxons had to fight off mere weeks before they lost to the Normans (Frenchified Vikings) at Hastings--had previously traveled east and south through nascent Russia (founded by Swedish Vikings) and served as a commander in a special Byzantine imperial guard unit that had been made up of Vikings for generations. The world was not small to the Vikings, who also discovered the Americas centuries before Columbus.</p>\n<p>My only real complaint about this book is that it lacks a few extra sentences here and there that could have made it clearer what events were were happening at the same time in the various parts of the widespread area of Viking influence. Perhaps an appendix timeline could have served the same purpose, but it doesn't have one, leaving the reader to try to keep track (something that might have been easier with a paper copy rather the Kindle edition I read).</p>",
			"pageUrl": "https://www.amazon.com/Sea-Wolves-History-Vikings/dp/B00ZGL8HYE/?sr=",
			"id": 2,
			"text": "If you're looking for an exploration of Viking customs and culture, this probably isn't the book for you. Rather, it explores the profound impact of the Vikings on future history across the entire map of Europe, from Ireland to Russia to Byzantium (yes, you read that correctly--Byzantium). It's rather mindboggling to consider that Harald Hardrada--the Viking invader that the Saxons had to fight off mere weeks before they lost to the Normans (Frenchified Vikings) at Hastings--had previously traveled east and south through nascent Russia (founded by Swedish Vikings) and served as a commander in a special Byzantine imperial guard unit that had been made up of Vikings for generations. The world was not small to the Vikings, who also discovered the Americas centuries before Columbus.\nMy only real complaint about this book is that it lacks a few extra sentences here and there that could have made it clearer what events were were happening at the same time in the various parts of the widespread area of Viking influence. Perhaps an appendix timeline could have served the same purpose, but it doesn't have one, leaving the reader to try to keep track (something that might have been easier with a paper copy rather the Kindle edition I read)."
		}
	]
}
```
### provider
  
* **Type:** String
* **Example:**
```
{
	"provider": ""
}
```
### rssUrl
  
* **Type:** String
* **Example:**
```
{
	"rssUrl": ""
}
```
### tags
  Array of tags&#x2F;entities, generated from analysis of the extracted text and cross-referenced with DBpedia and other data sources. Language-specific tags will be returned if the source text is in English, Chinese, French, German, Spanish or Russian.
* **Type:** GlobalIndexTag
* **Example:**
```
{
	"tags": [
		{
			"score": "",
			"sentiment": 0,
			"types": "",
			"count": 0,
			"label": "",
			"uri": ""
		}
	]
}
```
### title
  Title of the Article
* **Type:** String
* **Example:**
```
{
	"title": "The Sea Wolves: A History of the Vikings"
}
```
