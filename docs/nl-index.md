---
id: nl-index
title: Natural Language API
---

The Natural Language API allows developers to extract entities (e.g., people, organizations, products) and data about them (e.g., sentiment, relationships) from text. 

>New to the Natural Language API? [Start here](nl-quickstart).

## API Reference
* [Quickstart with python](nl-quickstart)
* [Demo](http://demo.nl.diffbot.com/)
* [API documentation](https://nl.diffbot.com/documentation/)
* [Entity types and properties](https://demo.nl.diffbot.com/schema/)

## Terminology:
* **Entity**. Anything in the real world. Example: Apple Inc, Steve Jobs. 
* **Entity Type**. A class of an entity. Example: organization, person. The list of entity types we support can be found [here](https://demo.nl.diffbot.com/schema/).
* **Fact**. A fact defines a relationship between entities (Apple Inc; founder; Steve Jobs) or an entity and a literal (Apple Inc; number of employees; 137,000). 
* **Property**. A property defines the relationship type (founder, number of employees) of a fact. The list of properties we support can be found [here](https://demo.nl.diffbot.com/schema/).
* **Open Fact**. Unlike a regular fact, an open fact does not follow a pre-defined list of properties. An open fact's property is extracted directly from the text. This enables new properties to be discovered.
* **Sentiment of a document**. This value represents the overall sentiment of the text. It ranges from -1.0 (very negative) to 1.0 (very positive). Sentiment around 0.0 is considered neutral.
* **Sentiment of an entity**. This value represents the sentiment of the text towards an entity. Example: "I love Apple products, but the iMac Pro is too pricey." is positive towards Apple and negative towards the iMac Pro.
* **Salience**. This value helps answer the question: "What is this text mainly about?". Salience of 1.0 means the entity is the main topic of the document, while salience of 0.0 means that the entity is unnecessary to understand the document. 

## Supported Languages
 * Sentiment: Over a 100 languages.
 * Entities and salience: English (en), French (fr), Spanish (es), Chinese (zh), German (de), Russian (ru), Japanese (ja), Dutch (nl), Polish (pl), Norwegian (no), Danish (da), Swedish (sv)
 * Other fields: English (en) only.

## Credits

Each document consumes 1 credit up to 10,000 characters. Additional blocks of 10,000 characters consume 1 credit each. 

## Limits

Maximum of 100,000 characters per document and 1,000,000 total characters per API request.
