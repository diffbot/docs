---
id: api-semantria
title: Semantria-Powered Text Analysis Features
sidebar_label: Semantria-Powered Text Analysis Features
---

## Request

<div class="alert">By default, Semantria accounts have a document-length limit of 2048 characters. In our integration, Diffbot will send up to 8192 characters of content to Semantria for analyis. Please contact your Semantria account manager to request an increase to 8192 characters in your Semantria account.</div>

To include Semantria-powered text analysis in your Article API response, include the following additional arguments:

| Argument | Description |
| :------- | :---------- |
| `textAnalysis` | Pass either `&textAnalysis` or request the field `textAnalysis` to return the Semantria-powered object in your response. |
| `semantriaKey` | Include your Semantria API key (available from your Semantria dashboard). |
| `semantriaSecret` | Include your Semantria API secret (available from your Semantria dashboard). |

## Response

When using the above parameters, your Article API response will include a `textAnalysis` object, including the following Semantria objects: `autoCategories`, `entities`, `phrases`,  `themes`, `topics` and overall text `sentiment`. Sample response:

```json
"textAnalysis": {
   "sentiment":{
      "sentiment":"neutral",
      "sentiment_score":0.16984577
   },
   "topics":[
      {
         "sentimentPolarity":"neutral",
         "title":"Business",
         "strengthScore":1.0288622,
         "hitCount":0,
         "sentimentScore":0.16
      },
      {
         "sentimentPolarity":"neutral",
         "title":"Software and Internet",
         "strengthScore":0.66311085,
         "hitCount":0,
         "sentimentScore":0.35878357
      },
      {
         "sentimentPolarity":"neutral",
         "title":"Technology",
         "strengthScore":0.5827793,
         "hitCount":0,
         "sentimentScore":0.14941517
      }
   ],
   "themes":[
      {
         "sentimentPolarity":"positive",
         "concept":"artificial intelligence work",
         "isAbout":false,
         "strengthScore":2.191726,
         "evidence":7,
         "sentimentScore":0.56
      },
      {
         "sentimentPolarity":"positive",
         "concept":"Diffbot knowledge graph",
         "isAbout":true,
         "strengthScore":2.1505294,
         "evidence":7,
         "sentimentScore":3.3855999
      },
      {
         "sentimentPolarity":"positive",
         "concept":"semantic data",
         "isAbout":true,
         "strengthScore":2.138518,
         "evidence":7,
         "sentimentScore":1.6089513
      },
      {
         "sentimentPolarity":"positive",
         "concept":"using machine",
         "isAbout":true,
         "strengthScore":2.138518,
         "evidence":7,
         "sentimentScore":1.7184318
      },
      {
         "sentimentPolarity":"positive",
         "concept":"learning algorithms",
         "isAbout":true,
         "strengthScore":2.138518,
         "evidence":7,
         "sentimentScore":1.7731719
      }
   ],
   "phrases":[
      {
         "sentimentPolarity":"positive",
         "title":"smartphones",
         "isNegated":false,
         "sentimentScore":1.35,
         "type":"detected",
         "negatingPhrase":null
      },
      {
         "sentimentPolarity":"negative",
         "title":"effective",
         "isNegated":true,
         "sentimentScore":-0.6,
         "type":"detected",
         "negatingPhrase":"not"
      },
      {
         "sentimentPolarity":"positive",
         "title":"significantly",
         "isNegated":false,
         "sentimentScore":0.9889138,
         "type":"detected",
         "negatingPhrase":null
      },
      {
         "sentimentPolarity":"negative",
         "title":"artificial",
         "isNegated":false,
         "sentimentScore":-0.48759997,
         "type":"detected",
         "negatingPhrase":null
      },
      {
         "sentimentPolarity":"positive",
         "title":"entire range",
         "isNegated":false,
         "sentimentScore":0.608809,
         "type":"detected",
         "negatingPhrase":null
      },
      {
         "sentimentPolarity":"neutral",
         "title":"Skrillex song",
         "isNegated":null,
         "sentimentScore":null,
         "type":"possible",
         "negatingPhrase":null
      },
      {
         "sentimentPolarity":"neutral",
         "title":"instant reviews",
         "isNegated":null,
         "sentimentScore":null,
         "type":"possible",
         "negatingPhrase":null
      },
      {
         "sentimentPolarity":"neutral",
         "title":"Android smartphone",
         "isNegated":null,
         "sentimentScore":null,
         "type":"possible",
         "negatingPhrase":null
      },
      {
         "sentimentPolarity":"neutral",
         "title":"soon work",
         "isNegated":null,
         "sentimentScore":null,
         "type":"possible",
         "negatingPhrase":null
      },
      {
         "sentimentPolarity":"neutral",
         "title":"semantic data",
         "isNegated":null,
         "sentimentScore":null,
         "type":"possible",
         "negatingPhrase":null
      }
   ],
   "autoCategories":[
      {
         "title":"Internet",
         "strengthScore":1,
         "subCategories": [
            {
               "strengthScore": 0.5909194,
               "title": "Web_syndication"
            },
            {
               "strengthScore": 0.51794964,
               "title": "Web_design"
            }
         ]
      },
      {
         "title":"IT",
         "strengthScore":1,
         "subCategories": [
            {
               "strengthScore": 0.5565067,
               "title": "Cloud_platforms"
            },
            {
               "strengthScore": 0.4739992,
               "title": "Data_warehousing"
            }
         ]
      },
      {
         "title":"Computer_Science",
         "strengthScore":1
      },
      {
         "title":"Mobile_Phones",
         "strengthScore":0.77090555
      },
      {
         "title":"Computers",
         "strengthScore":0.7093105
      }
   ],
   "entities":[
      {
         "sentimentPolarity":"positive",
         "title":"Google",
         "isAbout":true,
         "confident":true,
         "evidence":7,
         "sentimentScore":2.452183,
         "type":"Company"
      },
      {
         "sentimentPolarity":"positive",
         "title":"Microsoft",
         "isAbout":true,
         "confident":true,
         "evidence":7,
         "sentimentScore":0.9013969,
         "type":"Company"
      },
      {
         "sentimentPolarity":"positive",
         "title":"Mike Tung",
         "isAbout":true,
         "confident":true,
         "evidence":7,
         "sentimentScore":2.8511598,
         "type":"Person"
      },
      {
         "sentimentPolarity":"positive",
         "title":"Peter Kerwin",
         "isAbout":false,
         "confident":true,
         "evidence":7,
         "sentimentScore":0.75828093,
         "type":"Person"
      },
      {
         "sentimentPolarity":"neutral",
         "title":"George Clooney",
         "isAbout":false,
         "confident":true,
         "evidence":6,
         "sentimentScore":0.07280645,
         "type":"Person"
      }
   ]
}
```
