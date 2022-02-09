---
id: kg-ont-video
title: Video
generatedBy: generateOntology.js
---

The Video entity type encompasses videos found throughout the web and known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Video Fields
* [author](#author) 
* [date](#date) 
* [duration](#duration) 
* [embedUrl](#embedurl) 
* [html](#html) 
* [images](#images) 
* [language](#language) 
* [mime](#mime) 
* [naturalHeight](#naturalheight) 
* [naturalWidth](#naturalwidth) 
* [text](#text) 
* [title](#title) 
* [url](#url) 
* [viewCount](#viewcount) 

## Video Field Details
Note that certain longer field examples may be truncated for readability.

### author
  
* **Type:** String
* **Example:**
```
{
	"author": "Io-Tahoe"
}
```
### date
  
* **Type:** DDateTime
* **Example:**
```
{
	"date": {
		"str": "d2018-12-12T00:00",
		"precision": 4,
		"timestamp": 1544572800000
	}
}
```
### duration
  
* **Type:** Integer
* **Example:**
```
{
	"duration": 2964
}
```
### embedUrl
  
* **Type:** String
* **Example:**
```
{
	"embedUrl": ""
}
```
### html
  
* **Type:** String
* **Example:**
```
{
	"html": "<video controls><source src=\"https://r4---sn-vgqs7ns7.googlevideo.com/videoplayback?ratebypass=yes&mm=31%2C29&dur=2964.096&lmt=1544647458750109&c=WEB&signature=BDFC5B6365BCB570015CF0DB39639303EE480D2E.A2568676D096E9103EAC2689DCDB93658447CFF9&txp=2211222&itag=22&expire=1547667225&fvip=3&id=o-AAMvdWHz8tI28JlykIQJzVRSY-s917ZTmeSL3h6iFYRV&mime=video%2Fmp4&source=youtube&key=yt6&mn=sn-vgqs7ns7%2Csn-vgqsener&ei=uDI_XMrOOJWYigTdq4n4Cg&ms=au%2Crdu&requiressl=yes&sparams=dur%2Cei%2Cid%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&ipbits=0&pl=16&mv=m&ip=35.232.157.82&mt=1547645504\" type=\"video/mp4\"></video><p>It is undeniable that the amount and complexity of data is growing within the modern enterprise. But why and what to do about it is the question that every enterprise leader must now face.\n\nIn this insightful and thought-provoking webinar, we will deconstruct what is fueling data growth and increased data complexity, the approaches organizations have used to deal with the challenges that this growth brings, and why the only hope for dealing with it in the future may be smart data discovery approaches powered by artificial intelligence (AI).\n\nKey topics that will be discussed during this webinar are:\n\n• Why traditional data discovery no longer works\n• Why AI may be the answer or part of the solution\n• Why self-service is a strategic imperative\n• An executive's perspective\n\nBe sure to like and subscribe to our channel for more webinar videos!\n\nVisit our website https://io-tahoe.com to learn more about Io-Tahoe's Smart Data Discovery platforms.\n\n\nFollow us on Twitter at: https://twitter.com/iotahoe\n\nFollow us on LinkedIn at: https://www.linkedin.com/company/9194521\n\nLike us on Facebook at: https://www.facebook.com/iotahoe\n\nFollow us on Instagram at: https://instagram.com/iotahoe</p>"
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
			"image": "https://i.ytimg.com/vi/-w6blCJ0CTY/maxresdefault.jpg",
			"name": "Deconstructing Data Complexity and the Case for AI-Driven Smart Data Discovery",
			"title": "Deconstructing Data Complexity and the Case for AI-Driven Smart Data Discovery",
			"url": "https://i.ytimg.com/vi/-w6blCJ0CTY/maxresdefault.jpg"
		}
	]
}
```
### language
  
* **Type:** String
* **Example:**
```
{
	"language": "en"
}
```
### mime
  Indicates the nature and format of a document; MIME type, if available, as specified by the Video&#39;s &#x60;Content-Type.&#x60;
* **Type:** String
* **Example:**
```
{
	"mime": "video/mp4"
}
```
### naturalHeight
  
* **Type:** Integer
* **Example:**
```
{
	"naturalHeight": 720
}
```
### naturalWidth
  
* **Type:** Integer
* **Example:**
```
{
	"naturalWidth": 1280
}
```
### text
  
* **Type:** String
* **Example:**
```
{
	"text": "It is undeniable that the amount and complexity of data is growing within the modern enterprise. But why and what to do about it is the question that every enterprise leader must now face.\n\nIn this insightful and thought-provoking webinar, we will deconstruct what is fueling data growth and increased data complexity, the approaches organizations have used to deal with the challenges that this growth brings, and why the only hope for dealing with it in the future may be smart data discovery approaches powered by artificial intelligence (AI).\n\nKey topics that will be discussed during this webinar are:\n\n• Why traditional data discovery no longer works\n• Why AI may be the answer or part of the solution\n• Why self-service is a strategic imperative\n• An executive's perspective\n\nBe sure to like and subscribe to our channel for more webinar videos!\n\nVisit our website https://io-tahoe.com to learn more about Io-Tahoe's Smart Data Discovery platforms.\n\n\nFollow us on Twitter at: https://twitter.com/iotahoe\n\nFollow us on LinkedIn at: https://www.linkedin.com/company/9194521\n\nLike us on Facebook at: https://www.facebook.com/iotahoe\n\nFollow us on Instagram at: https://instagram.com/iotahoe"
}
```
### title
  Title of the Video
* **Type:** String
* **Example:**
```
{
	"title": "Deconstructing Data Complexity and the Case for AI-Driven Smart Data Discovery"
}
```
### url
  URL of the video
* **Type:** String
* **Example:**
```
{
	"url": "https://r4---sn-vgqs7ns7.googlevideo.com/videoplayback?ratebypass=yes&mm=31%2C29&dur=2964.096&lmt=1544647458750109&c=WEB&signature=BDFC5B6365BCB570015CF0DB39639303EE480D2E.A2568676D096E9103EAC2689DCDB93658447CFF9&txp=2211222&itag=22&expire=1547667225&fvip=3&id=o-AAMvdWHz8tI28JlykIQJzVRSY-s917ZTmeSL3h6iFYRV&mime=video%2Fmp4&source=youtube&key=yt6&mn=sn-vgqs7ns7%2Csn-vgqsener&ei=uDI_XMrOOJWYigTdq4n4Cg&ms=au%2Crdu&requiressl=yes&sparams=dur%2Cei%2Cid%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&ipbits=0&pl=16&mv=m&ip=35.232.157.82&mt=1547645504"
}
```
### viewCount
  
* **Type:** Integer
* **Example:**
```
{
	"viewCount": 0
}
```
