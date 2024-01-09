---
id: kg-ont-faq
title: Faq
generatedBy: generateOntology.js
---

The FAQ entity type is a specialized list of questions and corresponding answers. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Faq Fields
* [faqs](#faqs) 
* [title](#title) 

## Faq Field Details
Note that certain longer field examples may be truncated for readability.

### faqs
  List of the faqs
* **Type:** FaqQnA
* **Example:**
```
{
	"faqs": [
		{
			"q": "How is Zika virus disease treated?",
			"a": "Revised Zika virus country classification scheme"
		},
		{
			"q": "How was the Zika virus country classification scheme developed?",
			"a": "Zika and neurological complications"
		},
		{
			"q": "Are there other explanations for microcephaly and Guillain-Barré syndrome?",
			"a": "Mosquitoes transmitting Zika virus"
		}
	]
}
```
### title
  Faq title
* **Type:** String
* **Example:**
```
{
	"title": "Zika virus and complications: Questions and answers"
}
```
