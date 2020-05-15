---
id: nl-index
title: Natural Language API
---

The Natural Language API allows developers to extract entities (e.g., people, organizations, products) and data about them (e.g., sentiment, relationships) from text. 

>New to the Natural Language API? [Start here](nl-quickstart).

## API Reference
* [Quickstart](nl-quickstart)
* [Demo](http://relex.diffbot.com/)
* [API documentation](https://nl.diffbot.com/documentation/)
* [Getting started with Python](https://colab.research.google.com/drive/1gvCCbuRRiF5ISo6oaQ2uDQLX2_ySMdyl)
* [Entity types and properties](http://relex.diffbot.com/schema/)

## Terminology:
* **Entity**: anything in the real world. Example: Apple Inc, Steve Jobs. 
* **Entity Type**: a class of an entity. Example: organization, person.
* **Statement (or fact)**: define a relationship between entities (Apple Inc; founder; Steve Jobs) or an entity and a literal (Apple Inc; number of employees; 137,000). 
* **Property**: defines the relationship type (founder, number of employees).
* **Sentiment of a document**: represents the overall sentiment of the text. It ranges from -1.0 (very negative) to 1.0 (very positive). Sentiment around 0.0 is considered neutral.
* **Sentiment of an entity**: represents the sentiment of the text towards an entity. Example: "I love Apple products, but the Mac Pro is too pricey." is positive towards Apple and negative towards the Mac Pro.
* **Salience**: represents how prominent an entity is in the text (close to 1.0 means very prominent, close to 0.0 means not prominent). Salience helps you answer the question: what is this text mainly about?

