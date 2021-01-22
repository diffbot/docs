---
id: kg-ont-article
title: Article
---

The article entity type encompasses news, blog posts, and article content known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Article Fields
* [author](#author) 
* [authorUrl](#authorurl) 
* [breadcrumb](#breadcrumb) 
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
Note that certain longer field examples may be truncated for readability in these docs. 

### author
  
* **Type:** String
* **Example:**
```
{
	"author": "Jillian D'Onfro"
}
```
### authorUrl
  
* **Type:** String
* **Example:**
```
{
	"authorUrl": "https://www.forbes.com/sites/jilliandonfro/"
}
```
### breadcrumb
  
* **Type:** GlobalIndexBreadcrumb
* **Example:**
```
{
	"breadcrumb": [
		{
			"link": "https://www.forbes.com/sites/andygreenberg/2013/08/14/agent-of-intelligence-how-a-deviant-philosopher-built-palantir-a-cia-funded-data-mining-juggernaut/",
			"name": "using artificial intelligence"
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
		"str": "d2019-05-13T15:04",
		"precision": 4,
		"timestamp": 1557759840000
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
				"sentiment": 0,
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
						"naturalWidth": 0
					}
				],
				"author": "",
				"authorUrl": "",
				"language": "",
				"html": "",
				"pageUrl": "",
				"id": 0,
				"text": ""
			}
		],
		"numParticipants": 0,
		"tags": [
			{
				"score": "",
				"sentiment": 0,
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
		"str": "d2019-05-13T15:04",
		"precision": 4,
		"timestamp": 1557759840000
	}
}
```
### html
  
* **Type:** String
* **Example:**
```
{
	"html": "<p><sup>C</sup>isco wanted to provide users of its conferencing system profiles on everyone who signed on to a call&mdash;say, where they used to work or if they turned up in a news article. It&rsquo;s using a Mountain View, California, startup called Diffbot to make that happen.</p>\n<p>Diffbot scours the Web and serves up its findings in customized bites for companies. For Cisco, it scrapes articles for mentions of conference call participants. For a sneaker company, it culls consumer reviews and discussion threads. For a business software firm, it finds prospective clients. Gathering this kind of data usually takes time or can be incomplete. Diffbot claims it scrapes nearly all of the public Web&mdash;and can produce search results in less than a second.</p>\n<p>&ldquo;It&rsquo;s not possible for humans to learn everything,&rdquo; says Diffbot founder Mike Tung. &ldquo;So we have to design a system that can.&rdquo;</p>\n<p>Businesses in every industry are beefing up their data science teams and <a data-ga-track=\"InternalLink:https://www.forbes.com/sites/andygreenberg/2013/08/14/agent-of-intelligence-how-a-deviant-philosopher-built-palantir-a-cia-funded-data-mining-juggernaut/#7f40ea977852\" href=\"https://www.forbes.com/sites/andygreenberg/2013/08/14/agent-of-intelligence-how-a-deviant-philosopher-built-palantir-a-cia-funded-data-mining-juggernaut/#7f40ea977852\">using artificial intelligence</a> to model product demand, analyze competitive threats and source new customers. But this AI-powered analysis is only as good as the data that goes into it, and that&rsquo;s where Diffbot comes in: It promises to provide better data, faster.</p>\n<p>Tung, 36, says that after nearly ten years of false starts and technical breakthroughs, Diffbot has created an index that&rsquo;s analyzed more than 90% of the public Web, tracking 1 trillion facts and counting.</p>\n<p>That&rsquo;s a lot, even compared to Google. The search engine&rsquo;s knowledge graph, the source of all the answers that appear at the top of results when users ask specific questions, only had 70 billion facts the last time the company revealed the number in late 2016.</p>\n<p>Like Google, Diffbot constantly crawls billions of Web pages, but instead of using that index to give people the best links to information, it provides businesses with data that they can then plug into their own analytics tools.</p>\n<p>With $12 million in funding, Diffbot has nabbed big-name customers like Salesforce, eBay, Snapchat and Intel, and made a profit on last year&rsquo;s nearly $5 million in revenue. Tung expects sales to double as more companies seek out large-scale datasets.</p>\n<p>&ldquo;Diffbot is like the secret sauce for a lot of companies,&rdquo; he says.</p>\n<h3><strong>Google vs. Diffbot</strong></h3>\n<p><sup>T</sup>ung was information-obsessed from an early age. He was born in Taiwan, but his family came to the U.S. for his father to attend college. When they were living in Marlborough, Massachusetts, his mother would take him to the library and he would methodically move from shelf to shelf. He didn&rsquo;t choose books based on his interests: He wanted to read every single one.</p>\n<p>&ldquo;I was very comprehensive&mdash;at least until I got to a bigger library,&rdquo; he quips.</p>\n<p>Growing up, he reprogrammed video games on a Microsoft QuickBASIC compiler to score extra lives and wrote a computer model predicting stock moves, dabbling in day trading while attending high schools in Pennsylvania and Georgia. His tech chops impressed Microsoft during an internship, and it hired him to work on the Windows Vista team right after he graduated from high school. With a year of work experience under his belt, he bounced back to school for a computer science degree at the University of California, Berkeley, and then headed to Stanford for his Master&rsquo;s in artificial intelligence and started to pursue a Ph.D. Throughout, he remained fixed on the idea of organizing human knowledge.</p>\n<p>Just as it was impossible for him to read and synthesize all the books in the bigger libraries when he was a kid, sifting the public Web for information ran into limits. A big one: The Web was developed by humans to be understood by humans. Tung wanted to find a way to take the mess of data scattered across the public Web and organize it in a structure that computer systems could read.</p>\n<p>He envisioned a search engine that would only deliver concrete answers. Instead of spitting out links where people could find information themselves, he wanted every search to automatically surface either an exact piece of information or a massive dataset for analysis.</p>\n<p>So while working as a patent agent and doing search-related projects for eBay and Yahoo, Tung began to mold this vision into an actual company. After a few failed iterations, Diffbot finally gained traction with a tool that could retrieve and sort news articles. AOL signed on as a customer. With several hundred thousand dollars starting to flow in, Tung dropped his side hustles (and his Ph.D. research) to focus on Diffbot full-time in 2012.</p>\n<p>A breakthrough came later that year when he scored a meeting with <a data-ga-track=\"InternalLink:https://www.forbes.com/profile/andreas-von-bechtolsheim/\" href=\"https://www.forbes.com/profile/andreas-von-bechtolsheim/\">billionaire Andy Bechtolsheim</a>, the Sun Microsystems cofounder who made one of the first investments in Google. His pitch convinced Bechtolsheim to write a check for $100,000, the same amount he originally invested in Google founders Larry Page and Sergey Brin in 1998. Later that day, Bechtolsheim emailed to say that he wanted to double his investment.</p>\n<p>Bechtolsheim&rsquo;s check kicked off $2 million in angel investments and an eventual $10 million Series A led by Felicis Ventures and Chinese internet giant Tencent. The company says it&rsquo;s currently valued at over $100 million.</p>\n<p>&ldquo;This is an incredibly hard problem, and Mike and his team of AI researchers have done a great job to deliver,&rdquo; Bechtolsheim says today.</p>\n<p>Diffbot now operates out of a cluttered office near the Mountain View Caltrain station, though it will soon be moving to a bigger space in Menlo Park, California. More than 20 of the team&rsquo;s 30 employees are artificial intelligence researchers and engineers; Tung plans to double Diffbot&rsquo;s workforce over the next 18 months.</p>\n<figure><figcaption> <p>Diffbot CEO Mike Tung says that the company's goal is to &quot;build the first comprehensive map of all human knowledge.&quot;</p> Tim Pannell for Forbes </figcaption></figure>\n<p>Customers pay Diffbot a monthly fee, with different tiers depending on how much they use the service, ranging from $299 per month to custom pricing for large enterprises. Cisco, for example, uses Diffbot to pull information from news articles about participants in its WebEx conferencing system. Privacy-focused search engine DuckDuckGo partners with Diffbot to enhance its queries. Diffbot says Amazon is using it to find prospective customers for its cloud-computing business. The company recently inked the company&rsquo;s biggest deal yet: A seven-figure annual agreement with a government contractor.</p>\n<p>While business has grown, so has <a data-ga-track=\"InternalLink:https://www.forbes.com/sites/louiscolumbus/2018/08/26/25-machine-learning-startups-to-watch-in-2018/#21d693f56f99\" href=\"https://www.forbes.com/sites/louiscolumbus/2018/08/26/25-machine-learning-startups-to-watch-in-2018/#21d693f56f99\">the competition</a>. The information economy has produced a host of other startups that gather and clean huge amounts of data. Companies like Import.io and WebHose have their own methods for scraping data from across the Web, and the space has already had a few exits, too: Palantir snapped up <a data-ga-track=\"ExternalLink:https://techcrunch.com/2016/02/15/palantir-acquires-kimono-labs-for-its-web-scraping-service/\" href=\"https://techcrunch.com/2016/02/15/palantir-acquires-kimono-labs-for-its-web-scraping-service/\">Kimono Labs</a> and IBM <a data-ga-track=\"ExternalLink:https://www-03.ibm.com/press/us/en/pressrelease/46205.wss\" href=\"https://www-03.ibm.com/press/us/en/pressrelease/46205.wss\">bought AlchemyAPI</a>.</p>\n<p>Svetlana Sicular, a Gartner analyst who covers data management and AI, says that the breadth of Diffbot&rsquo;s database may set it apart.</p>\n<p>&ldquo;I think Diffbot will be growing in importance,&rdquo; she says, &ldquo;Because they figured out how to sort the entire Web.&rdquo;</p>"
}
```
### icon
  
* **Type:** String
* **Example:**
```
{
	"icon": "https://i.forbesimg.com/48X48-F.png"
}
```
### images
  
* **Type:** GlobalIndexImage
* **Example:**
```
{
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
			"naturalWidth": 0
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
			"speakerUri": "https://diffbot.com/entity/ESGMaGV9uP0SuTmfPTtNEoA",
			"quote": "So we have to design a system that can.",
			"speaker": "Mike Tung"
		},
		{
			"quote": "This is an incredibly hard problem, and Mike and his team of AI researchers have done a great job to deliver.",
			"speaker": "Bechtolsheim"
		}
	]
}
```
### sentiment
  Sentiment of the article. Positive sentiments have positive values and negative sentiments have a negative value.
* **Type:** Double
* **Example:**
```
{
	"sentiment": 0
}
```
### siteName
  
* **Type:** String
* **Example:**
```
{
	"siteName": "Forbes"
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
			"score": 0.7479038,
			"sentiment": 0,
			"types": [
				"http://dbpedia.org/ontology/Organisation",
				"http://dbpedia.org/ontology/Place"
			],
			"count": 1,
			"label": "The Seeing Eye",
			"uri": "https://diffbot.com/entity/E3lOzJ9DdNwyNCoPCRWgkEg"
		},
		{
			"score": 0.96843374,
			"sentiment": 0.814,
			"types": [
				"http://dbpedia.org/ontology/Organisation"
			],
			"count": 17,
			"label": "Diffbot",
			"uri": "https://diffbot.com/entity/EYX1i02YVPsuT7fPLUYgRhQ"
		},
		{
			"score": 0.9959318,
			"sentiment": 0,
			"count": 5,
			"label": "World Wide Web",
			"uri": "https://diffbot.com/entity/EY_g7tZEcMhSgcUOfMvVAQQ"
		}
	]
}
```
### text
  
* **Type:** String
* **Example:**
```
{
	"text": "Cisco wanted to provide users of its conferencing system profiles on everyone who signed on to a call—say, where they used to work or if they turned up in a news article. It’s using a Mountain View, California, startup called Diffbot to make that happen.\nDiffbot scours the Web and serves up its findings in customized bites for companies. For Cisco, it scrapes articles for mentions of conference call participants. For a sneaker company, it culls consumer reviews and discussion threads. For a business software firm, it finds prospective clients. Gathering this kind of data usually takes time or can be incomplete. Diffbot claims it scrapes nearly all of the public Web—and can produce search results in less than a second.\n“It’s not possible for humans to learn everything,” says Diffbot founder Mike Tung. “So we have to design a system that can.”\nBusinesses in every industry are beefing up their data science teams and using artificial intelligence to model product demand, analyze competitive threats and source new customers. But this AI-powered analysis is only as good as the data that goes into it, and that’s where Diffbot comes in: It promises to provide better data, faster.\nTung, 36, says that after nearly ten years of false starts and technical breakthroughs, Diffbot has created an index that’s analyzed more than 90% of the public Web, tracking 1 trillion facts and counting.\nThat’s a lot, even compared to Google. The search engine’s knowledge graph, the source of all the answers that appear at the top of results when users ask specific questions, only had 70 billion facts the last time the company revealed the number in late 2016.\nLike Google, Diffbot constantly crawls billions of Web pages, but instead of using that index to give people the best links to information, it provides businesses with data that they can then plug into their own analytics tools.\nWith $12 million in funding, Diffbot has nabbed big-name customers like Salesforce, eBay, Snapchat and Intel, and made a profit on last year’s nearly $5 million in revenue. Tung expects sales to double as more companies seek out large-scale datasets.\n“Diffbot is like the secret sauce for a lot of companies,” he says.\nGoogle vs. Diffbot\nTung was information-obsessed from an early age. He was born in Taiwan, but his family came to the U.S. for his father to attend college. When they were living in Marlborough, Massachusetts, his mother would take him to the library and he would methodically move from shelf to shelf. He didn’t choose books based on his interests: He wanted to read every single one.\n“I was very comprehensive—at least until I got to a bigger library,” he quips.\nGrowing up, he reprogrammed video games on a Microsoft QuickBASIC compiler to score extra lives and wrote a computer model predicting stock moves, dabbling in day trading while attending high schools in Pennsylvania and Georgia. His tech chops impressed Microsoft during an internship, and it hired him to work on the Windows Vista team right after he graduated from high school. With a year of work experience under his belt, he bounced back to school for a computer science degree at the University of California, Berkeley, and then headed to Stanford for his Master’s in artificial intelligence and started to pursue a Ph.D. Throughout, he remained fixed on the idea of organizing human knowledge.\nJust as it was impossible for him to read and synthesize all the books in the bigger libraries when he was a kid, sifting the public Web for information ran into limits. A big one: The Web was developed by humans to be understood by humans. Tung wanted to find a way to take the mess of data scattered across the public Web and organize it in a structure that computer systems could read.\nHe envisioned a search engine that would only deliver concrete answers. Instead of spitting out links where people could find information themselves, he wanted every search to automatically surface either an exact piece of information or a massive dataset for analysis.\nSo while working as a patent agent and doing search-related projects for eBay and Yahoo, Tung began to mold this vision into an actual company. After a few failed iterations, Diffbot finally gained traction with a tool that could retrieve and sort news articles. AOL signed on as a customer. With several hundred thousand dollars starting to flow in, Tung dropped his side hustles (and his Ph.D. research) to focus on Diffbot full-time in 2012.\nA breakthrough came later that year when he scored a meeting with billionaire Andy Bechtolsheim, the Sun Microsystems cofounder who made one of the first investments in Google. His pitch convinced Bechtolsheim to write a check for $100,000, the same amount he originally invested in Google founders Larry Page and Sergey Brin in 1998. Later that day, Bechtolsheim emailed to say that he wanted to double his investment.\nBechtolsheim’s check kicked off $2 million in angel investments and an eventual $10 million Series A led by Felicis Ventures and Chinese internet giant Tencent. The company says it’s currently valued at over $100 million.\n“This is an incredibly hard problem, and Mike and his team of AI researchers have done a great job to deliver,” Bechtolsheim says today.\nDiffbot now operates out of a cluttered office near the Mountain View Caltrain station, though it will soon be moving to a bigger space in Menlo Park, California. More than 20 of the team’s 30 employees are artificial intelligence researchers and engineers; Tung plans to double Diffbot’s workforce over the next 18 months.\nCustomers pay Diffbot a monthly fee, with different tiers depending on how much they use the service, ranging from $299 per month to custom pricing for large enterprises. Cisco, for example, uses Diffbot to pull information from news articles about participants in its WebEx conferencing system. Privacy-focused search engine DuckDuckGo partners with Diffbot to enhance its queries. Diffbot says Amazon is using it to find prospective customers for its cloud-computing business. The company recently inked the company’s biggest deal yet: A seven-figure annual agreement with a government contractor.\nWhile business has grown, so has the competition. The information economy has produced a host of other startups that gather and clean huge amounts of data. Companies like Import.io and WebHose have their own methods for scraping data from across the Web, and the space has already had a few exits, too: Palantir snapped up Kimono Labs and IBM bought AlchemyAPI.\nSvetlana Sicular, a Gartner analyst who covers data management and AI, says that the breadth of Diffbot’s database may set it apart.\n“I think Diffbot will be growing in importance,” she says, “Because they figured out how to sort the entire Web.”"
}
```
### title
  Title of the Article
* **Type:** String
* **Example:**
```
{
	"title": "The Web’s All-Seeing Eye: This Startup Is Getting In On Google’s Game By Searching A Trillion Facts"
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
					"naturalWidth": 0
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
