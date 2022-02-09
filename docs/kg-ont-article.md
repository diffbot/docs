---
id: kg-ont-article
title: Article
generatedBy: generateOntology.js
---

The article entity type encompasses news, blog posts, and article content known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Article Fields
* [author](#author) 
* [authorUrl](#authorurl) 
* [breadcrumb](#breadcrumb) 
* [categories](#categories) 
* [date](#date) 
* [discussion](#discussion) 
* [estimatedDate](#estimateddate) 
* [html](#html) 
* [icon](#icon) 
* [images](#images) 
* [language](#language) 
* [nextPage](#nextpage) 
* [nextPages](#nextpages) 
* [numPages](#numpages) 
* [publisherCountry](#publishercountry) 
* [publisherRegion](#publisherregion) 
* [quotes](#quotes) 
* [sentiment](#sentiment) 
* [siteName](#sitename) 
* [tags](#tags) 
* [text](#text) 
* [title](#title) 
* [videos](#videos) 

## Article Field Details
Note that certain longer field examples may be truncated for readability.

### author
  
* **Type:** String
* **Example:**
```
{
	"author": "George Anadiotis"
}
```
### authorUrl
  
* **Type:** String
* **Example:**
```
{
	"authorUrl": "https://www.zdnet.com/meet-the-team/us/george-anadiotis/"
}
```
### breadcrumb
  
* **Type:** GlobalIndexBreadcrumb
* **Example:**
```
{
	"breadcrumb": [
		{
			"link": "",
			"name": ""
		}
	]
}
```
### categories
  
* **Type:** ArticleCategory
* **Example:**
```
{
	"categories": [
		{
			"score": "",
			"name": "",
			"id": ""
		}
	]
}
```
### date
  
* **Type:** DDateTime
* **Example:**
```
{
	"date": {
		"str": "d2018-08-30T00:00",
		"precision": 4,
		"timestamp": 1535587200000
	}
}
```
### discussion
  
* **Type:** GIDiscussionField
* **Example:**
```
{
	"discussion": {
		"nextPages": "",
		"numPages": 0,
		"provider": "",
		"nextPage": "",
		"language": "",
		"numPosts": 0,
		"title": "",
		"posts": [
			{
				"date": {
					"str": "",
					"precision": 0,
					"timestamp": 0
				},
				"sentiment": "",
				"images": [
					{
						"displayHeight": 0,
						"xpath": "",
						"breadcrumb": [
							{
								"link": "",
								"name": ""
							}
						],
						"displayWidth": 0,
						"naturalHeight": 0,
						"language": "",
						"links": "",
						"anchorUrl": "",
						"title": "",
						"url": "",
						"naturalWidth": 0,
						"tags": [
							{
								"score": "",
								"sentiment": "",
								"types": "",
								"count": 0,
								"label": "",
								"uri": ""
							}
						]
					}
				],
				"author": "",
				"authorUrl": "",
				"language": "",
				"html": "",
				"pageUrl": "",
				"text": ""
			}
		],
		"numParticipants": 0,
		"tags": [
			{
				"score": "",
				"sentiment": "",
				"types": "",
				"count": 0,
				"label": "",
				"uri": ""
			}
		],
		"rssUrl": ""
	}
}
```
### estimatedDate
  
* **Type:** DDateTime
* **Example:**
```
{
	"estimatedDate": {
		"str": "d2018-08-30T14:09:17",
		"precision": 4,
		"timestamp": 1535638157000
	}
}
```
### html
  
* **Type:** String
* **Example:**
```
{
	"html": "<p><a href=\"https://www.zdnet.com/pictures/a-basic-guide-to-the-deep-dark-web/\">The web</a> is among humankind's greatest achievements and resources. Ever-expanding and nearly all-encompassing, we've all come to depend on it. There's just one problem: It takes work to get information out of it.</p>\n<p>That's because the <a href=\"https://www.zdnet.com/article/hackers-target-security-researchers-with-malware-laden-document/\">information is in documents</a>, and documents on the web are all over the place, and someone needs to locate them, and read them, to extract that information. Search engines have come a long way, and they greatly assist in the locating part, but not so much in the extracting part. At least, not until today.</p>\n<p><strong>Also: <a href=\"https://www.zdnet.com/article/zen-and-the-art-of-data-structures-from-self-tuning-to-self-designing-data-systems/\">Zen and the art of data structures: From self-tuning to self-designing data systems</a></strong></p>\n<p>Google and its ilk may sometimes give the impression they can understand and answer questions. Part of the reason is the addition of human knowledge in the mix. Google famously went from using purely text-based and statistical methods to adding a form of curation when it bought <a href=\"https://www.zdnet.com/article/google-says-it-wont-build-ai-for-weapons/\">MetaWeb</a>. MetaWeb developed Freebase, which was a crowd-sourced knowledge graph, similar in approach to Wikipedia, which was integrated in Google's search engine.</p>\n<h2>Eat your heart out, Google</h2>\n<p>That enables Google to do some of its magic. If you Google &quot;<a href=\"https://www.google.com/search?q=Google&rlz=1CAZZAF_enUS792US792&oq=Google&aqs=chrome..69i57j69i60l3j69i65j69i60.381j0j9&sourceid=chrome&ie=UTF-8\">Google</a>,&quot; for example, you don't just get a bunch of links. You also get an info-box that lists facts such as Google's CEO, founders, and address. That's because there is an entry in Google's knowledge graph that lists Google as a company, and these are some of the properties companies have, so Google fetches and displays that information from Wikipedia.</p>\n<p>But if you try Googling &quot;how many employees does Google have,&quot; or &quot;what is Google's address&quot;, what you will get is a bunch of links. You are on your own -- you have to read the documents and figure out the answer. If that information was in a database, you would type something like &quot;<em>SELECT Address FROM Organizations WHERE Name=Google</em>&quot; and you'd have your answer in seconds. That is the difference between structured and unstructured information.</p>\n<p><strong>Also: <a href=\"https://www.zdnet.com/article/memsql-6-5-newsql-with-autonomous-workload-optimization-improved-data-ingestion-and-query-execution/\">MemSQL 6.5: NewSQL with autonomous workload optimization, improved data ingestion and query execution speed</a></strong></p>\n<p>That is also what <a href=\"https://www.diffbot.com/\">Diffbot</a> is unveiling today: The ability to query the web as a database. This impressive feat is also based on a knowledge graph. The difference is that, in Diffbot's case, the knowledge graph is only partially curated by humans, and is automatically populated by crawling the web. <em>ZDNet </em>talked to Mike Tung, Diffbot's CEO and Founder, to find out how Diffbot does this.</p>\n<figure><img alt=\"opera-snapshot2018-08-30101415www-diffbot-com.png\" src=\"https://zdnet2.cbsistatic.com/hub/i/r/2018/08/30/ad927664-7ba0-4352-a3d7-6c3efdd8a18d/resize/470xauto/466e3fcf32bac06b562faa1ae8637f74/opera-snapshot2018-08-30101415www-diffbot-com.png\"></img><figcaption>Diffbot ingests and parses the entire web into a knowledge graph - a database you can query. Image: Diffbot</figcaption></figure>\n<p>First off, you have to crawl the web. This is where <a href=\"https://www.gigablast.com/about.html\">Gigablast</a> and Matt Wells come in. Gigablast is a search engine created by Matt Wells, Diffbot's VP of Search, in 2000. Tung says this is what Diffbot uses to crawl, and store, every single document on the web. Hard as this may be, however, it's not even half the job.</p>\n<p>The really hard part is getting the information out of documents, and this is where the magic is. Tung explains this is done using computer vision, machine learning (ML), and natural language processing (NLP).</p>\n<p>Computer vision helps <a href=\"https://www.diffbot.com/\">Diffbot</a> understand the structure of documents. It mimics the way humans break down documents, figuring out what are the structural elements of each document -- things such as headers, blocks, etc. In a perfect world, this should be possible by inspecting the HTML structure of web documents. But not everything on the web is HTML, and HTML documents are not perfect either.</p>\n<p><strong>Also: <a href=\"https://www.zdnet.com/article/memsql-6-5-newsql-with-autonomous-workload-optimization-improved-data-ingestion-and-query-execution/\">MemSQL 6.5: NewSQL with autonomous workload optimization, improved data ingestion and query execution speed</a></strong></p>\n<p>After structure comes content. Content is parsed using a combination of NLP and ML, the result of which is structured knowledge which is added to <a href=\"https://www.diffbot.com/knowledge-graph\">Diffbot's knowledge graph</a> (DKG). Tung showcased an example based on Marissa Mayer, ex-CEO of Yahoo.</p>\n<p>Taking a brief text about Mayer as input, Diffbot's system processed it and was able to extract all kinds of facts described in the text: Mayer's gender, employment history, education, etc. By doing this, Diffbot adds an entry for Mayer in its knowledge graph, and populates it with properties such as gender, age, and the like.</p>\n<p>&quot;Contrary to popular perception, <a href=\"https://searchengineland.com/google-builds-next-gen-knowledge-graph-future-201640\">Google's knowledge graph is not derived primarily from automation</a>,&quot; says Tung. &quot;Unlike Google, the goal of our processing is not to rank pages for humans to read (and inject some advertising along the way), but rather to avoid human reading altogether.</p>\n<p>DKG is the first web-scale knowledge graph that is entirely synthesized by an <a href=\"https://www.zdnet.com/article/five-tech-jobs-that-ai-and-automation-will-make-radically-more-efficient/\">automated AI system</a>, without a human-in-the-loop. That is why the main constraint to growth is the number of machines that we dedicate to it acquiring knowledge,&quot; he adds, concluding that DKG currently contains something in the area of one billion facts.</p>\n<h2>From a web of documents to a web of data</h2>\n<p>This is not entirely new. The first one who put forward the vision of going from a web of documents to a web of data was none other than the web's inventor, <a href=\"https://www-sop.inria.fr/acacia/fabien/lecture/licence_travaux_etude2002/TheSemanticWeb/\">Tim Berners Lee, who published his Semantic Web manifesto in 2001</a>.</p>\n<p>As Tung notes, however, &quot;a long line of history (ranging from RDF/microformats/RSS/semantic markup) has shown that requiring human annotation is never going to scale in terms of economic incentive and accuracy to all of knowledge.&quot;</p>\n<p>Even though annotation does not necessarily have to be human (it can come from automation as well), Tung does have a point: Most content on the web is very poorly, if at all, annotated. Tung thinks that building this global knowledge graph using the current state of AI is the right approach -- and it seems to be working.</p>\n<p><strong>Also: <a href=\"https://www.zdnet.com/article/moving-fast-without-breaking-data-governance-for-managing-risk-in-machine-learning-and-beyond/\">Moving fast without breaking data: Governance for managing risk in machine learning and beyond</a></strong></p>\n<p>The applications are wide and far-reaching. Tung notes that &quot;enterprise functions such as sales, recruiting, supply chain, accounting, business intelligence and market intelligence all work off of databases that can be kept updated and accurate by integrating directly with the knowledge graph.&quot;</p>\n<figure><img alt=\"diffbot-kg-record-linking.jpg\" data-original=\"    https://zdnet3.cbsistatic.com/hub/i/r/2018/08/30/79b11205-86a0-4b60-ad1a-658a49e3bcc1/resize/470xauto/287cba267d3c5cbb262778944f9d1eb3/diffbot-kg-record-linking.jpg\" src=\"https://zdnet3.cbsistatic.com/hub/i/r/2018/08/30/79b11205-86a0-4b60-ad1a-658a49e3bcc1/resize/470xauto/287cba267d3c5cbb262778944f9d1eb3/diffbot-kg-record-linking.jpg\"></img><figcaption>Diffbot natural language processing in action. Note how facts extracted from text are represented as subject -- predicate -- object triples. (Image: Diffbot)</figcaption></figure>\n<p>Tung demonstrated such a scenario, using DKG to query for people who work for Uber. Initially the query returned nearly 40,000 results, which Tung was able to filter using standard filtering as one would expect from a <a href=\"https://www.zdnet.com/article/the-new-era-of-the-multi-model-database/\">database</a>: Get only current employees, filter by region, etc.</p>\n<p>And that reference to integrating with databases has far-reaching implications too. The above scenario was based only on information found on the web. But enterprises don't just work with what they find on the web -- they also have their own internal systems and databases, and Tung says DKG can support those as well, offering one access point to rule them all.</p>\n<p><strong>Also: <a href=\"https://www.zdnet.com/article/graphql-for-databases-a-layer-for-universal-database-access/\">GraphQL for databases: A layer for universal database access?</a></strong></p>\n<p>DKG may well count as Diffbot's greatest achievement to date, but it did not come out of nowhere. Tung has strong credentials to show for, having designed web-scale information extraction architectures and worked for <a href=\"https://www.zdnet.com/topic/microsoft/\">Microsoft</a>, eBay, and Yahoo. Diffbot has been around since 2008, it has names such as eBay Microsoft Bing, and Salesforce among its clients, and Tencent and Bloomberg among its investors.</p>\n<p>Impressive as all of that may sound, however, there are a few gotchas.</p>\n<h2>Language, son</h2>\n<p>To begin with, not all of DKG is auto-magically created. That's not necessarily a bad thing, but it goes to show the limits of even what &quot;the current state of AI&quot; can do. DKG is seeded by Diffbot's knowledge engineers, who have decided that the entities it will handle are people, companies, locations, articles, products, discussions, and images.</p>\n<p>This means that everything Diffbot <a href=\"https://www.zdnet.com/article/robot-will-crawl-through-pipes-to-help-decommission-nuclear-facility/\">crawls</a> from the web will be classified as one of those things. Clearly, this decision was driven by what Diffbot's clients are mostly interested in, but that does not mean every page on the web is classified as one of the 20 types DKG currently knows. Tung says they plan to expand this to include categories such as events or medical information.</p>\n<p>In other words, Diffbot has consciously chosen to limit the scope of what it handles, to make a well-known problem manageable. To anyone familiar with <a href=\"http://connected-data.london/2018/06/11/building-enterprise-knowledge-graphs-in-the-real-world/\">knowledge graphs (also going by the name of ontologies for the connaisseurs</a>), what Diffbot does is defining an upper ontology, and populating it from the web. The concept and related challenges are well-known, but the way Diffbot handles this is state of the art.</p>\n<p><strong>Also: <a href=\"https://www.zdnet.com/article/aws-neptune-going-ga-the-good-the-bad-and-the-ugly-for-graph-database-users-and-vendors/\">AWS Neptune going GA: The good, the bad, and the ugly for graph database users and vendors</a></strong></p>\n<p>Which bring us to another key topic: Question answering. If you have the whole web at your fingertips, how are you going to query it? It depends. If you are a business person, ideally, you would like to use natural language. At present, DKG does not support this. It does, however, have its own Diffbot Query Language (DQL).</p>\n<p>DQL looks pretty simple, if you are familiar with query languages. But, then again, if you are familiar with query languages, why would you want to have to learn yet another one? There already is bunch of <a href=\"https://www.zdnet.com/article/back-to-the-future-does-graph-database-success-hang-on-query-language/\">graph query languages</a> out there, such as SPARQL, Gremlin, and OpenCypher, and with the <a href=\"https://www.zdnet.com/article/the-rise-and-rise-of-graph-databases/\">rise of graph databases</a>, we expect them to become more and more widespread.</p>\n<p>This touches upon another issue: Even though Diffbot's approach shares many similarities with semantic web concepts and standards (Tung even specifically mentioned <a href=\"https://www.zdnet.com/article/nba-analytics-and-rdf-graphs-game-data-and-metadata-evolution-and-occams-razor/\">RDF-like subject-predicate-object triples</a> in his breakdown of text processing), its approach is proprietary.</p>\n<p>Regardless of whether you know or like those standards, would it not have made Diffbot's life easier to use them? For example, by building DKG on top of an off-the-shelf graph database. Tung acknowledges it would, but he says they tested over a dozen <a href=\"http://yearofthegraph.xyz\">graph databases</a>, and they all broke down at around 10-100M entities, so they had to build something proprietary.</p>\n<p>As for the language issue, Tung says their approach is to meet users where they are, eliminating the need for directly using a query language (or an API, which DKG also supports) as much as possible. The way to do this, Tung says, is by integrating DKG with popular systems such as Salesforce, SAP, or Tableau, so users can transparently get data from DKG in their applications.</p>\n<p>That may be good for users, but it also places quite a burden of Diffbot to develop and maintain all those integrations. Tung says they intend to develop bridges for popular query languages, however, so integrations will not have to be hand-crafted.</p>\n<p><strong>Also: <a href=\"https://www.zdnet.com/article/planet-analytics-1-0-from-the-lab-to-production/\">Planet analytics 1.0: From the UN lab to the globe</a></strong></p>\n<p>Last but not least, does being able to query the web also mean you should automatically trust the results? Not necessarily. This is why Google and its ilk have developed sophisticated algorithms to rank results, trying to determine the most relevant ones. DKG only partially does this.</p>\n<p>You can filter Uber employees by age, for example, but what is the definitive source for that? If source X says a person was born in 1974, and source Y says they were born in 1947, which one should you trust? How do you know they are talking about the same person to begin with?</p>\n<p>These are well-known, hard-to-tackle issues, and Diffbot has to tackle them like anyone else who has come before them. Even as it is, however, DKG is an impressive achievement with many potential applications.</p>\n<p><a href=\"https://www.zdnet.com/article/ai-chips-for-big-data-and-machine-learning-gpus-fpgas-and-hard-choices-in-the-cloud-and-on-premise/\"><strong>AI chips for big data and machine learning: GPUs, FPGAs, and hard choices in the cloud and on-premise</strong></a></p>\n<p>How can GPUs and FPGAs help with data-intensive tasks such as operations, analytics, and machine learning, and what are the options?</p>\n<p>With natural disasters picking up in frequency and intensity, the role of NGOs in disaster relief is picking up as well. A key requirement for all NGOs is transparency, and applying data-driven techniques may help.</p>\n<p>Wolfram, having been into AI before it was cool, now gets a piece of the deep learning hype, in its sui generis way. Where does it stand compared to the competition, and how easy is it to use and integrate Wolfram with the rest of the world?</p>"
}
```
### icon
  
* **Type:** String
* **Example:**
```
{
	"icon": "https://zdnet2.cbsistatic.com/fly/bundles/zdnetcss/images/logos/logo-192x192.png"
}
```
### images
  
* **Type:** GlobalIndexImage
* **Example:**
```
{
	"images": [
		{
			"summary": "",
			"image": "https://zdnet2.cbsistatic.com/hub/i/r/2018/08/30/ad927664-7ba0-4352-a3d7-6c3efdd8a18d/resize/470xauto/466e3fcf32bac06b562faa1ae8637f74/opera-snapshot2018-08-30101415www-diffbot-com.png",
			"naturalHeight": 186,
			"name": "Diffbot ingests and parses the entire web into a knowledge graph - a database you can query. Image: Diffbot",
			"title": "Diffbot ingests and parses the entire web into a knowledge graph - a database you can query. Image: Diffbot",
			"url": "https://zdnet2.cbsistatic.com/hub/i/r/2018/08/30/ad927664-7ba0-4352-a3d7-6c3efdd8a18d/resize/470xauto/466e3fcf32bac06b562faa1ae8637f74/opera-snapshot2018-08-30101415www-diffbot-com.png",
			"naturalWidth": 470
		},
		{
			"summary": "",
			"image": "https://zdnet3.cbsistatic.com/hub/i/r/2018/08/30/79b11205-86a0-4b60-ad1a-658a49e3bcc1/resize/470xauto/287cba267d3c5cbb262778944f9d1eb3/diffbot-kg-record-linking.jpg",
			"naturalHeight": 347,
			"name": "Diffbot natural language processing in action. Note how facts extracted from text are represented as subject -- predicate -- object triples. (Image: Diffbot)",
			"title": "Diffbot natural language processing in action. Note how facts extracted from text are represented as subject -- predicate -- object triples. (Image: Diffbot)",
			"url": "https://zdnet3.cbsistatic.com/hub/i/r/2018/08/30/79b11205-86a0-4b60-ad1a-658a49e3bcc1/resize/470xauto/287cba267d3c5cbb262778944f9d1eb3/diffbot-kg-record-linking.jpg",
			"naturalWidth": 470
		}
	]
}
```
### language
  Refers to the language in which an Article is written
* **Type:** String
* **Example:**
```
{
	"language": "en"
}
```
### nextPage
  
* **Type:** String
* **Example:**
```
{
	"nextPage": ""
}
```
### nextPages
  
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
	"numPages": 0
}
```
### publisherCountry
  
* **Type:** String
* **Example:**
```
{
	"publisherCountry": "United States"
}
```
### publisherRegion
  
* **Type:** String
* **Example:**
```
{
	"publisherRegion": "North America"
}
```
### quotes
  Returns quotes found in the article text and who said them. For English-language text only
* **Type:** GlobalIndexQuote
* **Example:**
```
{
	"quotes": [
		{
			"speakerUri": "",
			"quote": "",
			"speaker": ""
		}
	]
}
```
### sentiment
  Sentiment of the article. Positive sentiments have positive values and negative sentiments have a negative value.
* **Type:** Float
* **Example:**
```
{
	"sentiment": 0.0049
}
```
### siteName
  
* **Type:** String
* **Example:**
```
{
	"siteName": "ZDNet"
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
			"score": 0.94,
			"sentiment": -0.15,
			"types": [
				"http://dbpedia.org/ontology/Agent",
				"http://dbpedia.org/ontology/Organisation",
				"http://dbpedia.org/ontology/Media",
				"http://dbpedia.org/ontology/Identifier",
				"http://dbpedia.org/ontology/Work",
				"http://dbpedia.org/ontology/Activity",
				"http://dbpedia.org/ontology/Software"
			],
			"count": 12,
			"label": "Knowledge Graph",
			"uri": "http://dbpedia.org/page/Knowledge_Graph"
		},
		{
			"score": 0.62,
			"count": 2,
			"label": "Artificial intelligence",
			"uri": "http://dbpedia.org/page/Artificial_intelligence"
		},
		{
			"score": 0.58,
			"types": [
				"http://dbpedia.org/ontology/Agent",
				"http://dbpedia.org/ontology/Person"
			],
			"count": 1,
			"label": "Marissa Mayer",
			"uri": "http://dbpedia.org/page/Marissa_Mayer"
		}
	]
}
```
### text
  
* **Type:** String
* **Example:**
```
{
	"text": "The web is among humankind's greatest achievements and resources. Ever-expanding and nearly all-encompassing, we've all come to depend on it. There's just one problem: It takes work to get information out of it.\nThat's because the information is in documents, and documents on the web are all over the place, and someone needs to locate them, and read them, to extract that information. Search engines have come a long way, and they greatly assist in the locating part, but not so much in the extracting part. At least, not until today.\nAlso: Zen and the art of data structures: From self-tuning to self-designing data systems\nGoogle and its ilk may sometimes give the impression they can understand and answer questions. Part of the reason is the addition of human knowledge in the mix. Google famously went from using purely text-based and statistical methods to adding a form of curation when it bought MetaWeb. MetaWeb developed Freebase, which was a crowd-sourced knowledge graph, similar in approach to Wikipedia, which was integrated in Google's search engine.\nEat your heart out, Google\nThat enables Google to do some of its magic. If you Google \"Google,\" for example, you don't just get a bunch of links. You also get an info-box that lists facts such as Google's CEO, founders, and address. That's because there is an entry in Google's knowledge graph that lists Google as a company, and these are some of the properties companies have, so Google fetches and displays that information from Wikipedia.\nBut if you try Googling \"how many employees does Google have,\" or \"what is Google's address\", what you will get is a bunch of links. You are on your own -- you have to read the documents and figure out the answer. If that information was in a database, you would type something like \"SELECT Address FROM Organizations WHERE Name=Google\" and you'd have your answer in seconds. That is the difference between structured and unstructured information.\nAlso: MemSQL 6.5: NewSQL with autonomous workload optimization, improved data ingestion and query execution speed\nThat is also what Diffbot is unveiling today: The ability to query the web as a database. This impressive feat is also based on a knowledge graph. The difference is that, in Diffbot's case, the knowledge graph is only partially curated by humans, and is automatically populated by crawling the web. ZDNet talked to Mike Tung, Diffbot's CEO and Founder, to find out how Diffbot does this.\nFirst off, you have to crawl the web. This is where Gigablast and Matt Wells come in. Gigablast is a search engine created by Matt Wells, Diffbot's VP of Search, in 2000. Tung says this is what Diffbot uses to crawl, and store, every single document on the web. Hard as this may be, however, it's not even half the job.\nThe really hard part is getting the information out of documents, and this is where the magic is. Tung explains this is done using computer vision, machine learning (ML), and natural language processing (NLP).\nComputer vision helps Diffbot understand the structure of documents. It mimics the way humans break down documents, figuring out what are the structural elements of each document -- things such as headers, blocks, etc. In a perfect world, this should be possible by inspecting the HTML structure of web documents. But not everything on the web is HTML, and HTML documents are not perfect either.\nAlso: MemSQL 6.5: NewSQL with autonomous workload optimization, improved data ingestion and query execution speed\nAfter structure comes content. Content is parsed using a combination of NLP and ML, the result of which is structured knowledge which is added to Diffbot's knowledge graph (DKG). Tung showcased an example based on Marissa Mayer, ex-CEO of Yahoo.\nTaking a brief text about Mayer as input, Diffbot's system processed it and was able to extract all kinds of facts described in the text: Mayer's gender, employment history, education, etc. By doing this, Diffbot adds an entry for Mayer in its knowledge graph, and populates it with properties such as gender, age, and the like.\n\"Contrary to popular perception, Google's knowledge graph is not derived primarily from automation,\" says Tung. \"Unlike Google, the goal of our processing is not to rank pages for humans to read (and inject some advertising along the way), but rather to avoid human reading altogether.\nDKG is the first web-scale knowledge graph that is entirely synthesized by an automated AI system, without a human-in-the-loop. That is why the main constraint to growth is the number of machines that we dedicate to it acquiring knowledge,\" he adds, concluding that DKG currently contains something in the area of one billion facts.\nFrom a web of documents to a web of data\nThis is not entirely new. The first one who put forward the vision of going from a web of documents to a web of data was none other than the web's inventor, Tim Berners Lee, who published his Semantic Web manifesto in 2001.\nAs Tung notes, however, \"a long line of history (ranging from RDF/microformats/RSS/semantic markup) has shown that requiring human annotation is never going to scale in terms of economic incentive and accuracy to all of knowledge.\"\nEven though annotation does not necessarily have to be human (it can come from automation as well), Tung does have a point: Most content on the web is very poorly, if at all, annotated. Tung thinks that building this global knowledge graph using the current state of AI is the right approach -- and it seems to be working.\nAlso: Moving fast without breaking data: Governance for managing risk in machine learning and beyond\nThe applications are wide and far-reaching. Tung notes that \"enterprise functions such as sales, recruiting, supply chain, accounting, business intelligence and market intelligence all work off of databases that can be kept updated and accurate by integrating directly with the knowledge graph.\"\nTung demonstrated such a scenario, using DKG to query for people who work for Uber. Initially the query returned nearly 40,000 results, which Tung was able to filter using standard filtering as one would expect from a database: Get only current employees, filter by region, etc.\nAnd that reference to integrating with databases has far-reaching implications too. The above scenario was based only on information found on the web. But enterprises don't just work with what they find on the web -- they also have their own internal systems and databases, and Tung says DKG can support those as well, offering one access point to rule them all.\nAlso: GraphQL for databases: A layer for universal database access?\nDKG may well count as Diffbot's greatest achievement to date, but it did not come out of nowhere. Tung has strong credentials to show for, having designed web-scale information extraction architectures and worked for Microsoft, eBay, and Yahoo. Diffbot has been around since 2008, it has names such as eBay Microsoft Bing, and Salesforce among its clients, and Tencent and Bloomberg among its investors.\nImpressive as all of that may sound, however, there are a few gotchas.\nLanguage, son\nTo begin with, not all of DKG is auto-magically created. That's not necessarily a bad thing, but it goes to show the limits of even what \"the current state of AI\" can do. DKG is seeded by Diffbot's knowledge engineers, who have decided that the entities it will handle are people, companies, locations, articles, products, discussions, and images.\nThis means that everything Diffbot crawls from the web will be classified as one of those things. Clearly, this decision was driven by what Diffbot's clients are mostly interested in, but that does not mean every page on the web is classified as one of the 20 types DKG currently knows. Tung says they plan to expand this to include categories such as events or medical information.\nIn other words, Diffbot has consciously chosen to limit the scope of what it handles, to make a well-known problem manageable. To anyone familiar with knowledge graphs (also going by the name of ontologies for the connaisseurs), what Diffbot does is defining an upper ontology, and populating it from the web. The concept and related challenges are well-known, but the way Diffbot handles this is state of the art.\nAlso: AWS Neptune going GA: The good, the bad, and the ugly for graph database users and vendors\nWhich bring us to another key topic: Question answering. If you have the whole web at your fingertips, how are you going to query it? It depends. If you are a business person, ideally, you would like to use natural language. At present, DKG does not support this. It does, however, have its own Diffbot Query Language (DQL).\nDQL looks pretty simple, if you are familiar with query languages. But, then again, if you are familiar with query languages, why would you want to have to learn yet another one? There already is bunch of graph query languages out there, such as SPARQL, Gremlin, and OpenCypher, and with the rise of graph databases, we expect them to become more and more widespread.\nThis touches upon another issue: Even though Diffbot's approach shares many similarities with semantic web concepts and standards (Tung even specifically mentioned RDF-like subject-predicate-object triples in his breakdown of text processing), its approach is proprietary.\nRegardless of whether you know or like those standards, would it not have made Diffbot's life easier to use them? For example, by building DKG on top of an off-the-shelf graph database. Tung acknowledges it would, but he says they tested over a dozen graph databases, and they all broke down at around 10-100M entities, so they had to build something proprietary.\nAs for the language issue, Tung says their approach is to meet users where they are, eliminating the need for directly using a query language (or an API, which DKG also supports) as much as possible. The way to do this, Tung says, is by integrating DKG with popular systems such as Salesforce, SAP, or Tableau, so users can transparently get data from DKG in their applications.\nThat may be good for users, but it also places quite a burden of Diffbot to develop and maintain all those integrations. Tung says they intend to develop bridges for popular query languages, however, so integrations will not have to be hand-crafted.\nAlso: Planet analytics 1.0: From the UN lab to the globe\nLast but not least, does being able to query the web also mean you should automatically trust the results? Not necessarily. This is why Google and its ilk have developed sophisticated algorithms to rank results, trying to determine the most relevant ones. DKG only partially does this.\nYou can filter Uber employees by age, for example, but what is the definitive source for that? If source X says a person was born in 1974, and source Y says they were born in 1947, which one should you trust? How do you know they are talking about the same person to begin with?\nThese are well-known, hard-to-tackle issues, and Diffbot has to tackle them like anyone else who has come before them. Even as it is, however, DKG is an impressive achievement with many potential applications.\nAI chips for big data and machine learning: GPUs, FPGAs, and hard choices in the cloud and on-premise\nHow can GPUs and FPGAs help with data-intensive tasks such as operations, analytics, and machine learning, and what are the options?\nWith natural disasters picking up in frequency and intensity, the role of NGOs in disaster relief is picking up as well. A key requirement for all NGOs is transparency, and applying data-driven techniques may help.\nWolfram, having been into AI before it was cool, now gets a piece of the deep learning hype, in its sui generis way. Where does it stand compared to the competition, and how easy is it to use and integrate Wolfram with the rest of the world?"
}
```
### title
  Title of the Article
* **Type:** String
* **Example:**
```
{
	"title": "The web as a database: The biggest knowledge graph ever"
}
```
### videos
  
* **Type:** GlobalIndexVideo
* **Example:**
```
{
	"videos": [
		{
			"embedUrl": "",
			"date": {
				"str": "",
				"precision": 0,
				"timestamp": 0
			},
			"images": [
				{
					"displayHeight": 0,
					"xpath": "",
					"breadcrumb": [
						{
							"link": "",
							"name": ""
						}
					],
					"displayWidth": 0,
					"naturalHeight": 0,
					"language": "",
					"links": "",
					"anchorUrl": "",
					"title": "",
					"url": "",
					"naturalWidth": 0,
					"tags": [
						{
							"score": "",
							"sentiment": "",
							"types": "",
							"count": 0,
							"label": "",
							"uri": ""
						}
					]
				}
			],
			"author": "",
			"mime": "",
			"naturalHeight": 0,
			"language": "",
			"title": "",
			"url": "",
			"naturalWidth": 0,
			"duration": 0,
			"html": "",
			"text": "",
			"viewCount": 0
		}
	]
}
```
