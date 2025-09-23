---
warning: DO NOT EDIT THIS DOC DIRECTLY (SEE ORIGIN)
origin: https://kg.diffbot.com/kg/ontology
id: kg-ont-research
title: Research
generatedBy: generateOntology.js
---

The Research entity type includes public access research papers and journal articles found throughout the web and known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

For convenience, a complete ontology source in JSON format is also [available here](https://kg.diffbot.com/kg/ontology).

> 🙋 
> 
> New to the Diffbot Knowledge Graph? [Start here](doc:getting-started-with-diffbot-knowledge-graph).

## Research Fields
* [abstractText](#abstracttext) 
* [author](#author) 
* [authorUrl](#authorurl) 
* [authors](#authors) 
* [category](#category) 
* [citedByCount](#citedbycount) 
* [crawlTimestamp](#crawltimestamp) 
* [date](#date) 
* [diffbotUri](#diffboturi) 
* [hasFullTextInRepository](#hasfulltextinrepository) 
* [id](#id) 
* [isOpenAccess](#isopenaccess) 
* [language](#language) 
* [openAccessStatus](#openaccessstatus) 
* [openAccessUrl](#openaccessurl) 
* [origins](#origins) 
* [pageUrl](#pageurl) 
* [pdfUrl](#pdfurl) 
* [publisher](#publisher) 
* [resolvedPageUrl](#resolvedpageurl) 
* [tags](#tags) 
* [text](#text) 
* [title](#title) 
* [type](#type) 
* [types](#types) 
* [url](#url) 

## Research Field Details
Note that certain longer field examples may be truncated for readability.

### abstractText
  The abstract of the article
* **Type:** String
* **Example:**
```
{
	"abstractText": "Filipe Mesquita, Matteo Cannaviccio, Jordan Schmidek, Paramita Mirza, Denilson Barbosa. Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP). 2019."
}
```
### author
  Author of the article
* **Type:** String
* **Example:**
```
{
	"author": "Filipe Mesquita"
}
```
### authorUrl
  Author url
* **Type:** String
* **Example:**
```
{
	"authorUrl": "https://api.openalex.org/authors/A5072734578"
}
```
### authors
  List of authors of the article
* **Type:** GlobalIndexAuthor
* **Example:**
```
{
	"authors": [
		{
			"name": "Filipe Mesquita",
			"link": "https://api.openalex.org/authors/A5072734578",
			"institution": {
				"name": "Menlo School",
				"link": "http://diffbot.com/entity/Edh4LPutRPKSwA2QCVW9Qhw"
			}
		},
		{
			"name": "Matteo Cannaviccio",
			"link": "https://api.openalex.org/authors/A5055764364",
			"institution": {
				"name": "Menlo School",
				"link": "http://diffbot.com/entity/Edh4LPutRPKSwA2QCVW9Qhw"
			}
		},
		{
			"name": "Jordan Schmidek",
			"link": "https://api.openalex.org/authors/A5079899001",
			"institution": {
				"name": "Menlo School",
				"link": "http://diffbot.com/entity/Edh4LPutRPKSwA2QCVW9Qhw"
			}
		}
	]
}
```
### category
  The category can be article, book-chapter, dissertation, book, dataset, paratext, report, reference-entry, peer-review or other
* **Type:** String
* **Example:**
```
{
	"category": "article"
}
```
### citedByCount
  The citations received by the article
* **Type:** Integer
* **Example:**
```
{
	"citedByCount": 43
}
```
### crawlTimestamp
  Last time a site was crawled&#x2F;indexed
* **Type:** Integer
* **Example:**
```
{
	"crawlTimestamp": 1750204800
}
```
### date
  
* **Type:** DDateTime
* **Example:**
```
{
	"date": {
		"str": "d2019-01-01T00:00",
		"precision": 4,
		"timestamp": 1546300800000
	}
}
```
### diffbotUri
  diffbotUri is a combination of an entityID and a corresponding web address or uniform resource identifier (URI), which is defined by appending the entityID to the URL https:&#x2F;&#x2F;www.diffbot.com&#x2F;entity&#x2F;. For example, Diffbot&#39;s entityID is CWSwJ_SWQPfqO3HQsxY4lGg and its DiffbotUri is https:&#x2F;&#x2F;www.diffbot.com&#x2F;entity&#x2F;CWSwJ_SWQPfqO3HQsxY4lGg
* **Type:** String
* **Example:**
```
{
	"diffbotUri": "http://diffbot.com/entity/RCHEi3Kc_jqUPOGF1sk2oBfZHg"
}
```
### hasFullTextInRepository
  Whether or not the article has full text available in repository
* **Type:** Boolean
* **Example:**
```
{
	"hasFullTextInRepository": false
}
```
### id
  Each entity in the Diffbot KnowledgeGraph (DKG) is identified by a unique identifier, an alphanumeric string like CWSwJ_SWQPfqO3HQsxY4lGg that uniquely identifies that entity. The id is directly derived from the most authoritative origin from the origins array.
* **Type:** String
* **Example:**
```
{
	"id": "RCHEi3Kc_jqUPOGF1sk2oBfZHg"
}
```
### isOpenAccess
  Whether or not the article is open access
* **Type:** Boolean
* **Example:**
```
{
	"isOpenAccess": false
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
### openAccessStatus
  Open access status - Gold: published in an DOAJ indexed OA journal, Green: toll-access on publisher page but free copy in OA repository, Hybrid: free under an open license in a toll-access journal, Bronze: free to read on publisher page but without any identifiable license, Closed: other articles
* **Type:** String
* **Example:**
```
{
	"openAccessStatus": "hybrid"
}
```
### openAccessUrl
  Url which is open access
* **Type:** String
* **Example:**
```
{
	"openAccessUrl": "https://www.aclweb.org/anthology/D19-1069.pdf"
}
```
### origins
  Origins of the research article
* **Type:** String
* **Example:**
```
{
	"origins": [
		"explore.openalex.org/works/W2970808735",
		"zenodo.org/record/54328",
		"doi.org/10.18653/v1/d19-1069"
	]
}
```
### pageUrl
  URL of submitted page &#x2F; page from which the entity is extracted
* **Type:** String
* **Example:**
```
{
	"pageUrl": "https://zenodo.org/record/54328"
}
```
### pdfUrl
  Pdf url of the article
* **Type:** String
* **Example:**
```
{
	"pdfUrl": "https://www.aclweb.org/anthology/D19-1069.pdf"
}
```
### publisher
  The publisher of the article
* **Type:** String
* **Example:**
```
{
	"publisher": "INFM-OAR (INFN Catania)"
}
```
### resolvedPageUrl
  Returned if the pageUrl redirects to another URL
* **Type:** String
* **Example:**
```
{
	"resolvedPageUrl": ""
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
			"score": 0.81748056,
			"types": [
				"http://dbpedia.org/ontology/Work"
			],
			"label": "Benchmark (surveying)",
			"uri": "http://diffbot.com/entity/E3fuo_p-hMy6W9j3odSS2iw"
		},
		{
			"score": 0.6928679,
			"types": [
				"http://dbpedia.org/ontology/AcademicSubject",
				"http://dbpedia.org/ontology/TopicalConcept",
				"http://dbpedia.org/ontology/Skill"
			],
			"label": "Computer science",
			"uri": "http://diffbot.com/entity/ETezqyVyRMgCMXNzqF5S5Mg"
		},
		{
			"score": 0.52127504,
			"types": [
				"http://dbpedia.org/ontology/Algorithm",
				"http://dbpedia.org/ontology/Skill"
			],
			"label": "Natural language processing",
			"uri": "http://diffbot.com/entity/ENM9ojRqwMOS3bpIPkr4VHQ"
		}
	]
}
```
### text
  The full text of the article
* **Type:** String
* **Example:**
```
{
	"text": "KnowledgeNet: A Benchmark Dataset for Knowledge Base Population\n\nKnowledgeNet: A Benchmark Dataset for Knowledge Base Population\n\nFilipe Mesquita, Matteo Cannaviccio,\nJordan Schmidek, Paramita Mirza\n\nDiffbot Technologies Corp.\nMenlo Park, California\n\n{filipe,matteo,jay,paramita}@diffbot.com\n\nDenilson Barbosa\nDepartment of Computing Science\n\nUniversity of Alberta\nEdmonton, Canada\n\ndenilson@ualberta.ca\n\nAbstract\n\nKnowledgeNet is a benchmark dataset for the\ntask of automatically populating a knowledge\nbase (Wikidata) with facts expressed in natural\nlanguage text on the web. KnowledgeNet pro-\nvides text exhaustively annotated with facts,\nthus enabling the holistic end-to-end evalua-\ntion of knowledge base population systems as\na whole, unlike previous benchmarks that are\nmore suitable for the evaluation of individ-\nual subcomponents (e.g., entity linking, rela-\ntion extraction). We discuss five baseline ap-\nproaches, where the best approach achieves an\nF1 score of 0.50, significantly outperforming a\ntraditional approach by 79% (0.28). However,\nour best baseline is far from reaching human\nperformance (0.82), indicating our dataset is\nchallenging. The KnowledgeNet dataset and\nbaselines are available at https://github.\ncom/diffbot/knowledge-net\n\n1 Introduction\n\nKnowledge Bases (KBs) are valuable resources\nfor developing intelligent applications, including\nsearch, question answering, data integration, and\nrecommendation systems. High-quality KBs still\nrely almost exclusively on human-curated struc-\ntured or semi-structured data. Such a reliance on\nhuman curation is a major obstacle to the creation\nof comprehensive, always-up-to-date KBs.\n\nKB population (KBP) is the task of automati-\ncally augmenting a KB with new facts. Tradition-\nally, KBP has been tackled with datasets for in-\ndividual components to be arranged in a pipeline,\ntypically: (1) entity discovery and linking (Ji et al.,\n2017; Shen et al., 2015) and (2) relation extrac-\ntion (Angeli et al., 2015; Zhang et al., 2017). En-\ntity discovery and linking seeks to recognize and\ndisambiguate proper names in text that refer to en-\ntities (e.g., people, organizations and locations) by\nlinking them to a reference KB. Relation extrac-\n\ntion seeks to detect facts involving two entities (or\nan entity and a literal, such as a number or date).\n\nKnowledgeNet is a benchmark dataset for pop-\nulating a KB (Wikidata) with facts expressed in\nnatural language on the web. KnowledgeNet facts\nare of the form (subject; property; object), where\nsubject and object are linked to Wikidata. For in-\nstance, the dataset contains text expressing the fact\n(Gennaro Basile1; RESIDENCE; Moravia2), in the\npassage:\n\n“Gennaro Basile was an Italian painter,\nborn in Naples but active in the German-\nspeaking countries. He settled at Brünn,\nin Moravia, and lived about 1756...”\n\nKnowledgeNet’s main goal is to evaluate the\noverall task of KBP rather than evaluating its sub-\ncomponents in separate. We refer to this type of\nevaluation as end-to-end. The dataset supports the\nend-to-end evaluation of KBP systems by exhaus-\ntively annotating all facts in a sentence. For in-\nstance, the dataset contains all RESIDENCE facts\n(two) from the sentence “He settled at Brünn, in\nMoravia, and lived about 1756”. This allows our\nevaluation to assess precision and recall of RESI-\n\nDENCE facts extracted from this sentence.\nA popular initiative to evaluate KBP is the\n\nText Analysis Conference, or TAC (Getman et al.,\n2018). TAC evaluations are performed manually\nand are hard to reproduce for new systems. Un-\nlike TAC, KnowledgeNet employs an automated\nand reproducible way to evaluate KBP systems\nat any time, rather than once a year. We hope a\nfaster evaluation cycle will accelerate the rate of\nimprovement for KBP.\n\nIn addition to providing an evaluation bench-\nmark, KnowledgeNet’s long-term goal is to pro-\nvide exhaustively annotated training data at large\n\n1http://www.wikidata.org/wiki/Q1367602\n2http://www.wikidata.org/wiki/Q43266\n\n\n\nscale. Our goal for the coming years is to annotate\n100,000 facts for 100 properties. To accomplish\nthis goal, we propose a new framework for anno-\ntating facts with high accuracy and low effort.\n\nContributions. Our contributions are as fol-\nlows. We introduce KnowledgeNet, a benchmark\ndataset for end-to-end evaluation of KBP systems\n(Section 3). We propose a new framework for\nexhaustive yet efficient annotation of facts (Sec-\ntion 3.1). We implement five baseline approaches\nthat build upon state-of-the-art KBP systems (Sec-\ntion 4). Finally, we present an experimental anal-\nysis of our baseline approaches, comparing their\nperformance to human performance (Section 5).\n\n2 Related Work\n\nKBP has traditionally been tackled with pipeline\nsystems. For instance, Stanford’s TAC 2015\nwinning system employs the following pipeline:\nnamed entity recognition (NER)→ entity linking\n→ relation extraction (Angeli et al., 2015). Stan-\nford’s latest TAC system continues to use the same\npipeline architecture with one additional com-\nponent: coreference resolution (Chaganty et al.,\n2017).\n\nThe main shortcoming of pipeline systems is er-\nror propagation. Mistakes made by components\nin the beginning of the pipeline are propagated to\nthe final output of the system, negatively affecting\nthe overall precision and recall. For instance, our\nexperiments show that the pipeline employed by\nStanford’s TAC 2015 winning system can achieve\na maximum recall of 0.32 in KnowledgeNet3.\n\nEnd-to-end systems (Liu et al., 2018; Miwa and\nBansal, 2016) are a promising solution for ad-\ndressing error propagation. However, a major\nroadblock for the advancement of this line of re-\nsearch is the lack of benchmark datasets. We hope\nKnowledgeNet can help support this line of re-\nsearch.\n\n2.1 Datasets\nTAC is a series of evaluation workshops organized\nas several tracks by NIST (Getman et al., 2018).\nThe Cold Start track provides an end-to-end eval-\nuation of KBP systems, while other tracks focus\non subtasks (e.g., entity disambiguation and link-\ning). The Cold Start track is the current standard\n\n3Maximum recall is the recall of candidate facts, which\nare used as input to the last component of the pipeline (rela-\ntion extraction).\n\nto evaluate KBP systems. To compete in this track,\nparticipants have a limited time window to submit\nthe results of their KBP systems. After this win-\ndow, the systems are evaluated by pooling facts\nextracted by the contestants. Despite its effec-\ntiveness for running a contest, this methodology\nhas been shown to be biased against new systems,\nwhich are not part of the pooling (Chaganty et al.,\n2017). TAC also manually evaluates a system’s\n“justification”, a span of text provided as evidence\nfor a fact. A correct fact with an incorrect justifica-\ntion is considered invalid. Therefore, reproducing\nTAC’s evaluation for new systems is challenging.\n\nWe propose KnowledgeNet as an automated\nand reproducible alternative to TAC’s evaluation.\nBefore creating KnowledgeNet, we considered us-\ning one of the datasets presented in Table 1. We\ncompare these datasets according to five criteria\nthat we consider desirable for a KBP benchmark\ndataset:\n\n• Human annotation: the dataset should be\nannotated by (multiple) humans to support\naccurate evaluation.\n\n• Exhaustive annotation: for each property,\nthe dataset should exhaustively enumerate all\nfacts of that property that are expressed in the\ntext. Exhaustive annotation allows measuring\ntrue precision and recall for a system.\n\n• Text annotation: the dataset should con-\ntain text spans for entities involved in a fact.\nThis allows evaluating whether the text ex-\npresses an extracted fact (as alternative to\nTAC’s manual justification assessments).\n\n• Links to reference KB: the dataset should\ncontain a link to the reference KB for entities\ninvolved in every fact (or indicate that such\nan entity doesn’t exist in the KB). This allows\nthe evaluation to confirm that the reference\nKB is being correctly populated.\n\n• Cross-sentence facts: the dataset should\ncontain facts involving entities whose names\nnever appear in the same sentence. This is be-\ncause a significant portion of facts expressed\nin text require coreference resolution of en-\ntity mentions spanning multiple sentences.\n\nACE 20054 is a popular dataset for end-to-\nend relation extraction systems (Li and Ji, 2014;\n\n4https://catalog.ldc.upenn.edu/\nLDC2006T06\n\n\n\nDataset KnowledgeNet ACE TAC TACRED FewRel DocRED GoogleRE T-REx\nHuman annotation yes yes yes yes yes yes yes no\nExhaustive annotation yes yes no no no no no no\nExhaus. anno. sentences 9,000 11,000 N/A N/A N/A N/A N/A N/A\nText span annotation yes yes no yes yes yes no yes\nLinks to reference KB yes yes yes no yes no yes yes\nCross-sentence facts yes yes yes no no yes yes yes\nAnnotated facts 13,000 8,000 84,000 22,000 56,000 56,000 40,000 11M\nProperties 15 18 41 41 100 96 5 353\nNew KB facts annotated 77% 100% 100% 100% 0% 100% 0% 0%\n\nTable 1: A dataset comparison according to our criteria for a desirable KBP benchmark dataset. “Exhaus. anno.\nsentences” shows the number of exhaustively annotated sentences. “New KB facts annotated” shows the percent-\nage of annotated facts that can be found in the reference KB. Most datasets contain only facts with no links to a\nreference KB (100% new facts) or contain only facts that exist in the KB (0% new facts).\n\nMiwa and Bansal, 2016). According to our crite-\nria, ACE might seem the most complete bench-\nmark dataset for end-to-end evaluation of KBP.\nIt exhaustively annotates every sentence of 599\ndocuments with mentions, coreference chains and\nfacts for 18 properties. Also, ACE has been inde-\npendently extended with links to Wikipedia (Ben-\ntivogli et al., 2010). However, a closer look at\nACE’s annotations reveals that most of them are\nill-suited for general-purpose KBs. These anno-\ntations include facts about broad properties (e.g.,\npart-whole, physical location) or mentions that do\nnot refer to named entities (e.g., “two Moroccan\nmen”, “women on the verge of fainting”, “African\nimmigrants who came ashore Thursday”). Per-\nhaps not coincidently, we are unaware of any work\nusing it for the purpose of evaluating a KBP sys-\ntem.\n\nOur annotation framework (Section 3.1) is in-\nspired by ACE’s framework but tailored towards\nKBP. First, we only annotate mentions that re-\nfer to named entities. Second, while our anno-\ntation is exhaustive, we focus on annotating sen-\ntences rather than documents, eliminating the need\nto annotate every fact described in the entire doc-\nument. Such a requirement creates a significant\nimbalance in the number of annotations per prop-\nerty. For instance, the most popular property from\nACE has 1,400 annotated facts, while the majority\nof properties from ACE have less than 300 anno-\ntated facts. This might explain why most relation\nextraction evaluations use only 6 properties from\nACE.\n\nAnnotating every sentence with facts for all\nproperties is also detrimental to the incremental\nnature of KnowledgeNet. Adding one property\nto the dataset would require an annotator to re-\nannotate every sentence in the dataset. In contrast,\n\nour framework selects a limited set of sentences\nto be annotated for a particular property. The re-\nmaining sentences are ignored during annotation\nand evaluation. As a consequence, our annotation\nframework allows incremental annotation of new\nproperties and is better suited for the goal of anno-\ntating 100,000 facts for 100 properties.\n\nDatasets employing non-exhaustive annotation.\nRecent datasets like T-REx automatically anno-\ntate facts in text as a way to produce training data\ncheaply. This is performed by aligning facts in\nthe KB to sentences referring to them (Elsahar\net al., 2018). Other datasets go further and use hu-\nman annotators to label every alignment as correct\nor incorrect. These semi-supervised datasets in-\nclude TACRED (Zhang et al., 2017), GoogleRE5,\nFewRel (Han et al., 2018) and DocRED (Yao\net al., 2019). Annotations created in this way are\nuseful for training KBP systems. However, they\ndo not provide an exhaustive annotation of facts,\nwhich is needed for end-to-end evaluation of KBP.\nFor instance, Zhang et al. (2017) train their KBP\nsystem with TACRED, but rely on TAC to evaluate\nthe system.\n\n3 KnowledgeNet Dataset\n\nThis section discusses the first release of Knowl-\nedgeNet and our annotation framework. The doc-\numents in this first release are either DBpedia ab-\nstracts (i.e., first paragraphs of a Wikipedia page)\nor short biographical texts about a person or or-\nganization from the web. These web texts were\ncollected using the Diffbot Knowledge Graph6.\n\nTable 2 presents the number of annotated facts\nfor each property. We chose 9,073 sentences\n\n5https://code.google.com/archive/p/\nrelation-extraction-corpus/downloads\n\n6https://www.diffbot.com/\n\n\n\nProperty Facts Sent. Relevant\nDATE OF BIRTH (PER–DATE) 761 731 468\nDATE OF DEATH (PER–DATE) 664 512 347\nRESIDENCE (PER–LOC) 1,456 796 387\nBIRTHPLACE (PER–LOC) 1137 936 407\nNATIONALITY (PER–LOC) 639 801 396\nEMPLOYEE OF (PER–ORG) 1,625 650 543\nEDUCATED AT (PER–ORG) 951 463 335\nPOLITICAL AFF. (PER–ORG) 635 537 318\nCHILD OF (PER–PER) 888 471 296\nSPOUSE (PER–PER) 1,338 504 298\nDATE FOUNDED (ORG–DATE) 500 543 315\nHEADQUARTERS (ORG–LOC) 880 564 296\nSUBSIDIARY OF (ORG–ORG) 544 481 299\nFOUNDED BY (ORG–PER) 764 558 346\nCEO (ORG–PER) 643 526 350\nTotal 13,425 9,073 5,423\n\nTable 2: KnowledgeNet properties and their number of\nannotated facts and sentences. “Relevant” indicates the\nnumber of relevant sentences (i.e., those with one or\nmore annotated facts). Subjects and objects belong to\none of the following types: person, organization, loca-\ntion and date.\n\nfrom 4,991 documents to be exhaustively anno-\ntated with facts about a particular property of in-\nterest. Because our annotation is exhaustive, neg-\native examples of facts can be automatically gen-\nerated. In total, KnowledgeNet comprises 13,425\nfacts from 15 properties.\n\nHoldout test set. We split the documents into\nfive folds in a round-robin manner, keeping the\nfifth fold (20% of the dataset) as the test set. To\npreserve the integrity of the results, we will release\nthe test set without annotations and will provide\na service through which others can evaluate their\nKBP systems. In our experiments, we used folds\n1-3 for training and fold 4 for development and\nvalidation, including hyperparameter tuning.\n\n3.1 Dataset Annotation\n\nThe dataset has been generated by multiple an-\nnotators using a new multi-step framework. We\nconjecture our framework can help annotators pro-\nduce higher quality annotations by allowing them\nto focus on one small, more specific task at a time.\nThe annotation consists of four different steps: (1)\nfetch sentences, (2) detect mentions, (3) classify\nfacts and (4) link entities.\n\nStep 1: Fetch sentences. We employ two meth-\nods of choosing a sentence for annotation. The\nfirst method leverages T-REx’s automatic align-\nments (Elsahar et al., 2018) to find sentences that\nare likely to describe facts from Wikidata. The\n\n(a) Interface to detect mentions of an entity type.\n\n(b) Interface to classify facts.\n\n(c) Interface to link a mention to a Wikidata entity.\n\nFigure 1: Interface for Steps 2-4 of our framework.\nStep 1 fetches sentences to be exhaustively annotated\nfor one property. The remaining steps guide annota-\ntors to detect entity mentions, facts and links in each\nsentence.\n\n\n\nsecond method chooses sentences that contain a\nkeyword that might indicate the presence of a fact\nfor a property (e.g., “born” for DATE OF BIRTH).\nWe have chosen these keywords by leveraging\nWikidata’s “also known as” values for properties\nas well as WordNet synonyms. By using these\nkeywords, we prevent the dataset to be exclusively\nannotated with facts that are known in Wikidata.\nIn fact, only 23% of facts annotated in this release\nare present in Wikidata.\n\nFor each fetched sentence, an annotator decides\nwhether the sentence is relevant for the property\nof interest (i.e., whether this sentence describes\none or more facts for this property). Relevant sen-\ntences go through steps 2 through 4; while irrel-\nevant sentences are kept to be used for detecting\nincorrectly extracted facts (i.e., false positives).\n\nIt is worth noting that this step might not fetch\nsome relevant sentences. Our framework does not\nrequire all relevant sentences to be annotated and\ndoes not penalize systems for extracting facts from\nsentences that were not annotated.\n\nStep 2: Detect mentions. In this step, we ask\nannotators to highlight entity names (Figure 1a).\nWe consider only entities whose type is relevant\nto the property being annotated. For instance, an\nannotator will only be asked to highlight names\nof people and organizations when annotating the\nproperty FOUNDED BY. Pronouns are automati-\ncally annotated with a gazetteer. To decrease the\nlikelihood of missing a mention, we consider the\nunion of mentions highlighted by two annotators\nfor the following step.\n\nStep 3: Classify facts. We ask annotators to\nclassify a candidate fact (i.e., a pair of mentions)\nin a sentence as a positive or negative example for\na property (Figure 1b). Each candidate fact is an-\nnotated by at least two annotators. A third anno-\ntator breaks the tie when the first two annotators\ndisagree.\n\nWe follow ACE’s reasonable reader rule,\nwhich states that a fact should only be annotated\nwhen there is no reasonable interpretation of the\nsentence in which the fact does not hold. In other\nwords, annotators are asked to only annotate facts\nthat are either explicitly stated in the sentence or\ninferred with absolute certainty from the sentence\nalone (i.e., without using external world knowl-\nedge).\n\nStep 4: Link entities. Finally, we ask annota-\ntors to link every mention involved in a fact to\na single Wikidata entity. In this step, annotators\ncan read the entire document and resolve mentions\n(e.g., pronouns) that refer to names in other sen-\ntences. Every mention is annotated by at least two\nannotators. When there is disagreement, we ask\nother annotators to join in the process until con-\nsensus is reached. In total, excluding the proper-\nties having literal objects (Table 2) we can assign\na link to both subject and object for 52% of the\nfacts.\n\nInter-annotator agreement. A total of five an-\nnotators have contributed to KnowledgeNet so far.\nIn Step 3, the initial two annotators have anno-\ntated 33,165 candidate facts with 96% agreement.\nThey disagreed on 1,495 candidate facts, where\n599 have been deemed positive by a third anno-\ntator. In Step 4, the initial two annotators have an-\nnotated 13,453 mentions with agreement of 93%.\nThe remaining 7% of mentions were resolved with\nadditional annotators.\n\nTiming. On average, annotating a sentence for\none property takes 3.9 minutes. This total time in-\ncludes two annotators (plus additional annotators\nfor tiebreaking). It also includes inspecting sen-\ntences that express no facts and therefore do not go\nthrough steps 2-4 (but are included in the dataset\nand are helpful for assessing false positives). The\nmost expensive step is Step 3 (40% of the total\ntime), followed by Step 4 (28%), Step 2 (22%) and\nStep 1 (10%).\n\n3.2 Limitations\nOur first release is comparable to other bench-\nmarks in size (e.g., ACE 2005), but it is perhaps\ninsufficient to train data-hungry models. This is\nby design. Most organizations do not have the re-\nsources to produce tens of thousands of examples\nfor each property of interest. As we expand the\nnumber of properties to achieve our goal of anno-\ntating 100,000 facts, we expect to keep the number\nof facts per property to around a thousand. In this\nway, we hope to promote approaches that can learn\nfrom multiple properties, requiring less annota-\ntions per property. We also hope to promote ap-\nproaches using KnowledgeNet together with semi-\nsupervised or unsupervised datasets for training.\n\nAnother limitation of our first release is the fo-\ncus on individual sentences. Currently, our frame-\nwork can only annotate a fact when the subject and\n\n\n\nthe object are explicitly mentioned by a name or\npronoun in a sentence. Others have reported that\nthe majority of facts fall into this category. For\nexample, the authors of DocRED report that 41%\nof facts require reasoning over multiple sentences\nin a document (Yao et al., 2019). This indicates\nthat a fact’s subject and object are mentioned by\ntheir full name in a single sentence 59% of the\ntime. The percentage of facts that can be anno-\ntated in KnowledgeNet is significantly higher than\n59%. This is because our framework can also an-\nnotate facts that require resolving (partial) names\nand pronouns referring to full names in other sen-\ntences. These facts are particularly common in our\ndocument collection.\n\n4 Baseline Approaches\n\nThis section presents five baseline approaches for\nKBP. We evaluate these approaches and compare\ntheir performance relative to human annotators in\nSection 5.\n\nFigure 2 illustrates the architecture shared by\nour five baseline approaches. We start by splitting\na given document into sentences. For each sen-\ntence, we detect entity mentions using a named\nentity recognizer (NER) and a gazetteer for pro-\nnoun mentions and their type (e.g., person, orga-\nnizations, location). We also detect coreference\nchains, that is, groups of mentions within a docu-\nment that refer to the same entity. Figure 2 illus-\ntrates how coreference chains help disambiguate\npronouns and partial names by clustering them to-\ngether with the full name of an entity. Finally, we\nlink these coreference chains to Wikidata entities.\n\nNext, we produce candidate facts by consider-\ning pair of mentions from the same sentence, as il-\nlustrated in Figure 2. The relation extraction com-\nponent makes the final decision on whether a can-\ndidate fact is expressed by the text.\n\n4.1 Relation Extraction\n\nFigure 2 illustrates our relation extraction model.\nThis model follow the literature by using a Bi-\nLSTM network (Miwa and Bansal, 2016; Xu et al.,\n2015; Zhou et al., 2016; Zhang et al., 2017), which\nis effective in capturing long-distance dependen-\ncies between words. We train a single multi-task\nmodel for all properties using both positive exam-\nples (i.e., annotated facts) and automatically gen-\nerated negative examples.\n\nThe model outputs two values for each property.\n\nThe first value represents the likelihood of the sub-\nject and object mentions (i.e., text spans) to be cor-\nrect, while the second value represents the likeli-\nhood of the subject and object links to be correct.\nWe learn individual thresholds for each value and\nproperty. When both values are above the thresh-\nold, the system outputs the fact with links. When\nthe first value is above the threshold and the sec-\nond value is below the threshold, we output the\nfact without links.\n\nFeatures. Figure 3 illustrates features encoding\nsyntactic and positional information, which are\nconcatenated to the embedding of every word.\n\n1. Enriched NER: NER label for names (us-\ning a NER system) and pronouns (using\ngazetteers for each type).\n\n2. Mention distance: distance between each\nword and the subject and object mention, fol-\nlowing Zhang et al. (2017).\n\n3. Shortest dependency path (SDP) length:\nnumber of edges in the SDP between the\nword and the subject and object.\n\n4. SDP distance: number of edges separating\nthe word to the closest word in the SDP be-\ntween the subject and object.\n\n5. Coreference confidence: confidence score\nof the coreference resolution system that a\nword refers to the subject and object.\n\n6. Coreference distance: distance to the clos-\nest mention in the coreference chain of the\nsubject and object.\n\n7. Coreference SDP length: number of edges\nin the SDP between the word and the closest\nmention in the subject and object chain.\n\n8. Coreference SDP distance: number of\nedges separating the word to the closest word\nin the SDP between the subject and object\ncoreference chains.\n\n9. KB entity types: entity types for the subject\nand object from Wikidata.\n\n10. KB properties: the property p where (sub-\nject; p; object) exists in Wikidata (when both\nthe subject and object have links).\n\n\n\nFigure 2: The architecture of our baseline approaches, illustrated with an example. Red arrows and boxes represent\ncoreference chains and blue arrows represent links to Wikidata. The subject and object of candidate facts are\nhighlighted in bold (blue) and italics (orange), respectively.\n\nFigure 3: Features representing the relationships be-\ntween the words. Significant relationships with the sub-\nject and object are highlighted in blue and orange, re-\nspectively.\n\nFeatures 9 and 10 are generated by querying\nWikidata and are relative to a single entity pair. We\nconcatenate those features to the Bi-LSTM output,\nas illustrated in Figure 2.\n\n4.2 Baseline Approaches\n\nWe propose five baselines obtained by improving\nthe candidate generation and relation extraction\ncomponents.\n\nBaseline 1. Our first baseline is a standard\npipeline approach inspired by the TAC 2015 Cold\nStart winning system (Angeli et al., 2015). It gen-\nerates candidate mentions by using NER and the\npronoun gazetteers. For mentions of the correct\ntype (e.g., person for the property SPOUSE), the sys-\ntem then links these mentions using an entity link-\ning system. The relation extraction component\nuses features 1-4.\n\nBaseline 2. Our second baseline adds corefer-\nence resolution. This baseline is inspired by Stan-\nford’s TAC 2017 system (Chaganty et al., 2017).\nWe leverage coreference chains to both increase\nthe number of candidate mentions linked to KB\nentities (e.g., pronouns) as well as to introduce ad-\nditional features. This model uses features 1-8.\n\nBaseline 3. Our third baseline adds features 9\nand 10 to the relation extraction model. These fea-\ntures leverage Wikidata information for the linked\nentities, such as entity types and known facts.\n\nBaseline 4. Our fourth baseline seeks to de-\ncrease error propagation by allowing more candi-\ndate facts to be evaluated by the relation extraction\ncomponent. This is done in two ways. First, Base-\nline 4 uses all mentions regardless of their NER\ntype when creating candidate facts. Second, this\nbaseline adds a candidate link to mentions that had\nno candidate link in Baseline 1-3 (due to incor-\nrect coreference chains). This is done by choos-\ning a link outside of the mention’s coreference\nchain that maximizes a combination of entity link-\ning score and coreference resolution score.\n\nBaseline 5. Our final baseline seeks to improve\nthe relation extraction component by employing\nBERT’s pre-trained representations (Devlin et al.,\n2018) in addition to all other features. To pro-\nduce a contextual representation for every word,\nwe learn a linear weighted combination of BERT’s\n12 layers, following Peters et al. (2019).\n\n\n\n4.3 Implementation\nAll our baseline systems follow the same ar-\nchitecture (Figure 2). We use spaCy7 for the\nNLP pipeline (sentence splitting, tokenization,\nPOS tagging, dependency parsing, NER), Hug-\nging Face’s coreference resolution system8, and\nthe Diffbot Entity Linker9 for entity linking.\n\nFor relation extraction we implement a standard\nBiLSTM network with two 500-dimensional hid-\nden layers. We use spaCy pre-trained word em-\nbeddings (size 300) concatenated with additional\nfeatures illustrated in Figure 3. The output of the\nBiLSTM network is concatenated with features\nfrom Wikidata (Features 9-10).\n\nWe train all the networks using mini-batches of\n128 examples and Adam optimizer (Kingma and\nBa, 2015) with a learning rate of 0.001. We use\nthe fourth fold of the dataset as validation set, se-\nlecting the model that minimize the loss function\nvalue. The same validation set is used to find\nthresholds for the output values that maximize the\nF1 score for each property.\n\n5 Experiments\n\nTable 3 presents the performance of our baseline\nsystems compared to the human performance. We\nreport precision (P ), recall (R) and F-score (F1):\n\nP =\ncorrectly extracted facts\n\nextracted facts\n,\n\nR =\ncorrectly extracted facts\n\nannotated facts\n,\n\nF1 =\n2 · P ·R\nP +R\n\n.\n\nWe evaluate our baseline systems from two per-\nspectives. The text evaluation deems an extracted\nfact correct when the text spans of the subject and\nobject overlap with the text spans of a ground truth\nfact. The link evaluation deems an extracted fact\ncorrect when the links of the subject and object\nmatch the links of a ground truth fact. In the link\nevaluation, we consider only facts where both the\nsubject and object links are present.\n\nHuman performance. To measure the human\nperformance on the end-to-end KBP task, one of\nour annotators was asked to enumerate all facts de-\nscribed in a sample of the test sentences. We re-\nport the performance of our annotator in Table 3.\n\n7https://spacy.io/\n8https://huggingface.co/coref/\n9https://diffbot.com/\n\nSystem Text evaluation Link evaluation\nP R F1 P R F1\n\nBaseline 1 0.44 0.64 0.52 0.31 0.26 0.28\nBaseline 2 0.49 0.64 0.55 0.37 0.32 0.34\nBaseline 3 0.47 0.66 0.55 0.35 0.37 0.36\nBaseline 4 0.60 0.65 0.62 0.51 0.48 0.49\nBaseline 5 0.68 0.70 0.69 0.53 0.48 0.50\nHuman 0.88 0.88 0.88 0.81 0.84 0.82\n\nTable 3: The performance of our baseline approaches\nis well below human performance.\n\nA closer look at the annotator’s mistakes shows\nthat 32% of the mistakes are due to incorrect an-\nnotations in KnowledgeNet (i.e., the annotator is\nactually correct). The remaining mistakes (68%)\nare mostly due to the annotator entering an in-\ncorrect fact (30%) or missing a link on a correct\nfact (18%). These results show that our annota-\ntion framework produces significantly better anno-\ntations than individual annotators working without\nour framework.\n\nBaseline performance. Table 3 presents the\nperformance of our baselines. Our best baseline\n(Baseline 5) significantly outperforms the standard\npipeline approach (Baseline 1) in both the text\nand link evaluation. However, the performance of\nBaseline 5 is well below the human performance.\nThe most impactful improvements over Baseline\n1 are due to (a) incorporating coreference when\nchoosing candidate links for pronouns in Baseline\n2; (b) allowing more candidate facts and links to\nbe classified by the relation extraction component\nin Baseline 4; and (c) incorporating BERT’s pre-\ntrained model in Baseline 5.\n\nTable 4 shows the “maximum recall” for each\nbaseline (i.e., recall of candidate facts used as in-\nput for the relation extraction component). These\nresults indicate that error propagation significantly\nlimits recall. Our best baseline shows higher max-\nimum recall due to coreference resolution (intro-\nduced in Baseline 2) and removing the filtering of\ncandidate facts based on NER types (introduced\nin Baseline 4). The low maximum recall for link\nevaluation is mainly due to incorrect candidate\nlinks, which can only be omitted (but not fixed)\nin our baselines.\n\n6 Conclusion\n\nWe introduce KnowledgeNet, an end-to-end\nbenchmark dataset for populating Wikidata with\nfacts expressed in natural language text on the\n\n\n\nSystem Text evaluation Link evaluation\nMaximum Recall Maximum Recall\n\nBaseline 1 0.80 0.33\nBaseline 2 0.80 0.37\nBaseline 3 0.80 0.37\nBaseline 4 0.90 0.59\nBaseline 5 0.90 0.59\n\nTable 4: The relation extraction component’s recall is\nlimited by error propagation. Maximum recall is the re-\ncall of the candidate facts used as input for the relation\nextraction component on the dev set.\n\nweb. We build KnowledgeNet using a new multi-\nstep framework that helps human annotators to\nproduce high-quality annotations efficiently. We\nalso introduce five baseline systems and evaluate\ntheir performance. Our best baseline outperforms\na traditional pipeline approach by 79% (F1 score\nof 0.50 vs. 0.28). Human performance is sig-\nnificantly higher (0.82), indicating that Knowled-\ngeNet can support further research to close this\ngap.\n\nOur experiments show that the traditional\npipeline approach for KB population is notably\nlimited by error propagation. Performance gains\nachieved by our best baseline are mainly due to\nmore candidates being passed along to the final\npipeline component (relation extraction), allow-\ning this component to fix errors made by previous\ncomponents. A closer inspection reveals that even\nour best baseline is fairly limited by error propa-\ngation and can only achieve a maximum recall of\n0.59. These results indicate that end-to-end mod-\nels might be a promising alternative to the tradi-\ntional pipeline approach.\n\nAcknowledgments\n\nWe would like to thank Veronica Romualdez and\nGeraldine Fajardo for their diligent annotation\nwork. We would also like to thank Mike Tung,\nZhaochen Guo, Sameer Singh and the anonymous\nreviewers for their helpful comments. This work\nwas supported by the Natural Sciences and En-\ngineering Research Council of Canada (NSERC)\nand Diffbot.\n\nReferences\n\nGabor Angeli, Victor Zhong, Danqi Chen, Arun Te-\njasvi Chaganty, Jason Bolton, Melvin Jose Johnson\nPremkumar, Panupong Pasupat, Sonal Gupta, and\nChristopher D. Manning. 2015. Bootstrapped self\n\ntraining for knowledge base population. In TAC.\nNIST.\n\nLuisa Bentivogli, Pamela Forner, Claudio Giu-\nliano, Alessandro Marchetti, Emanuele Pianta, and\nKateryna Tymoshenko. 2010. Extending English\nACE 2005 corpus annotation with ground-truth links\nto Wikipedia. In Proceedings of the 2nd Workshop\non The People’s Web Meets NLP: Collaboratively\nConstructed Semantic Resources, pages 19–27, Bei-\njing, China. Coling 2010 Organizing Committee.\n\nArun Chaganty, Ashwin Paranjape, Percy Liang, and\nChristopher D. Manning. 2017. Importance sam-\npling for unbiased on-demand evaluation of knowl-\nedge base population. In Proceedings of the 2017\nConference on Empirical Methods in Natural Lan-\nguage Processing, pages 1038–1048, Copenhagen,\nDenmark. Association for Computational Linguis-\ntics.\n\nJacob Devlin, Ming-Wei Chang, Kenton Lee, and\nKristina Toutanova. 2018. Bert: Pre-training of deep\nbidirectional transformers for language understand-\ning. In NAACL-HLT.\n\nHady Elsahar, Pavlos Vougiouklis, Arslen Remaci,\nChristophe Gravier, Jonathon Hare, Frederique\nLaforest, and Elena Simperl. 2018. T-REx: A large\nscale alignment of natural language with knowledge\nbase triples. In Proceedings of the 11th Language\nResources and Evaluation Conference, Miyazaki,\nJapan. European Language Resource Association.\n\nJeremy Getman, Joe Ellis, Stephanie Strassel, Zhiyi\nSong, and Jennifer Tracey. 2018. Laying the\nGroundwork for Knowledge Base Population: Nine\nYears of Linguistic Resources for TAC KBP. In\nProceedings of the Eleventh International Confer-\nence on Language Resources and Evaluation (LREC\n2018), Miyazaki, Japan. European Language Re-\nsources Association (ELRA).\n\nXu Han, Hao Zhu, Pengfei Yu, Ziyun Wang, Yuan Yao,\nZhiyuan Liu, and Maosong Sun. 2018. Fewrel: A\nlarge-scale supervised few-shot relation classifica-\ntion dataset with state-of-the-art evaluation. In Pro-\nceedings of the 2018 Conference on Empirical Meth-\nods in Natural Language Processing, Brussels, Bel-\ngium, October 31 - November 4, 2018, pages 4803–\n4809.\n\nHeng Ji, Xiaoman Pan, Boliang Zhang, Joel Nothman,\nJames Mayfield, Paul McNamee, and Cash Costello.\n2017. Overview of TAC-KBP2017 13 languages en-\ntity discovery and linking. In Proceedings of the\n2017 Text Analysis Conference, TAC 2017, Gaithers-\nburg, Maryland, USA, November 13-14, 2017.\n\nDiederik P. Kingma and Jimmy Ba. 2015. Adam: A\nmethod for stochastic optimization. In 3rd Inter-\nnational Conference on Learning Representations,\nICLR 2015, San Diego, CA, USA, May 7-9, 2015,\nConference Track Proceedings.\n\n\n\nQi Li and Heng Ji. 2014. Incremental joint extrac-\ntion of entity mentions and relations. In Proceed-\nings of the 52nd Annual Meeting of the Association\nfor Computational Linguistics (Volume 1: Long Pa-\npers), pages 402–412, Baltimore, Maryland. Asso-\nciation for Computational Linguistics.\n\nYue Liu, Tongtao Zhang, Zhicheng Liang, Heng Ji,\nand Deborah L. McGuinness. 2018. Seq2rdf: An\nend-to-end application for deriving triples from nat-\nural language text. In Proceedings of the ISWC\n2018 Posters & Demonstrations, Industry and Blue\nSky Ideas Tracks co-located with 17th International\nSemantic Web Conference (ISWC 2018), Monterey,\nUSA, October 8th - to - 12th, 2018.\n\nMakoto Miwa and Mohit Bansal. 2016. End-to-end re-\nlation extraction using lstms on sequences and tree\nstructures. pages 1105–1116.\n\nJeffrey Pennington, Richard Socher, and Christo-\npher D. Manning. 2014. Glove: Global vectors for\nword representation. In Empirical Methods in Nat-\nural Language Processing (EMNLP), pages 1532–\n1543.\n\nMatthew E. Peters, Sebastian Ruder, and Noah A.\nSmith. 2019. To tune or not to tune? adapt-\ning pretrained representations to diverse tasks. In\nProceedings of the 4th Workshop on Representa-\ntion Learning for NLP, RepL4NLP@ACL 2019, Flo-\nrence, Italy, August 2, 2019., pages 7–14.\n\nPouya Pezeshkpour, Liyan Chen, and Sameer\nSingh. 2018. Embedding multimodal relational\ndata for knowledge base completion. CoRR,\nabs/1809.01341.\n\nWei Shen, Jianyong Wang, and Jiawei Han. 2015. En-\ntity linking with a knowledge base: Issues, tech-\nniques, and solutions. IEEE Trans. Knowl. Data\nEng., 27(2):443–460.\n\nQuan Wang, Zhendong Mao, Bin Wang, and Li Guo.\n2017. Knowledge graph embedding: A survey of\napproaches and applications. IEEE Trans. Knowl.\nData Eng., 29(12):2724–2743.\n\nPeng Xu and Denilson Barbosa. 2019. Connecting lan-\nguage and knowledge with heterogeneous represen-\ntations for neural relation extraction. In Proceed-\nings of the 2019 Conference of the North American\nChapter of the Association for Computational Lin-\nguistics: Human Language Technologies, NAACL-\nHLT 2019, Minneapolis, Minnesota, USA, June 2-7,\n2019, Volume 2 (Short Papers), page 4.\n\nYan Xu, Lili Mou, Ge Li, Yunchuan Chen, Hao Peng,\nand Zhi Jin. 2015. Classifying relations via long\nshort term memory networks along shortest depen-\ndency paths. In Proceedings of the 2015 Confer-\nence on Empirical Methods in Natural Language\nProcessing, pages 1785–1794, Lisbon, Portugal. As-\nsociation for Computational Linguistics.\n\nYuan Yao, Deming Ye, Peng Li, Xu Han, Yankai Lin,\nZhenghao Liu, Zhiyuan Liu, Lixin Huang, Jie Zhou,\nand Maosong Sun. 2019. Docred: A large-scale\ndocument-level relation extraction dataset. In Pro-\nceedings of the 57th Conference of the Association\nfor Computational Linguistics, ACL 2019, Florence,\nItaly, July 28- August 2, 2019, Volume 1: Long Pa-\npers, pages 764–777.\n\nYuhao Zhang, Victor Zhong, Danqi Chen, Gabor An-\ngeli, and Christopher D. Manning. 2017. Position-\naware attention and supervised data improve slot fill-\ning. In Proceedings of the 2017 Conference on Em-\npirical Methods in Natural Language Processing,\npages 35–45, Copenhagen, Denmark. Association\nfor Computational Linguistics.\n\nPeng Zhou, Wei Shi, Jun Tian, Zhenyu Qi, Bingchen\nLi, Hongwei Hao, and Bo Xu. 2016. Attention-\nbased bidirectional long short-term memory net-\nworks for relation classification. In Proceedings of\nthe 54th Annual Meeting of the Association for Com-\nputational Linguistics (Volume 2: Short Papers),\npages 207–212, Berlin, Germany. Association for\nComputational Linguistics.\n\nA Beyond Binary Relationships\n\nWhile it would be convenient to express all facts\nas (subject; property; object) triples, this is not al-\nways possible. Many facts require further annota-\ntions to be sufficiently and accurately expressed\nin the KB. Take for instance (United States;\nhead of government; Barack Obama), which only\nholds true in the past.\n\nQualifiers allow facts to be expanded or contex-\ntualized beyond what can be expressed with binary\nrelationships. More specifically, qualifiers can be\nused to constrain the validity of a fact in time or\nspace, e.g., (employment fact; end time; 2017);\nrepresent n-ary relationships, e.g., (casting fact;\ncharacter role; Tony Stark); and track provenance.\n\nThis release contains 4,518 facts annotated\nwith three temporal qualifiers: IS CURRENT,\nSTART TIME and END TIME. We use one of our\nbaseline system to obtain facts to be annotated\nwith qualifiers, along with the the sentence where\neach fact was found. Given a fact and a sentence,\nhuman annotators must decide the value of a quali-\nfier (true or false for IS CURRENT or a time expres-\nsion for START TIME, END TIME). A third option\nunclear can be chosen in the case of uncertainty.\nTo be included in the dataset, each fact must be\nannotated by two annotators in agreement. While\npreliminary experiments show promising results\nfor qualifier extraction, they are out-of-scope of\nthis work.\n\n\n"
}
```
### title
  Title of the article
* **Type:** String
* **Example:**
```
{
	"title": "KnowledgeNet: A Benchmark Dataset for Knowledge Base Population"
}
```
### type
  The top-level type of a Diffbot entity. Examples of type include Person, Organization, Article, Product.
* **Type:** Type
* **Example:**
```
{
	"type": "Research"
}
```
### types
  There are tags.types which can only refer to dbpedia rdf types, while there are also the general DiffbotEntity types which is just an array of all the types an object belongs to. For instance a LocalBusiness would have &#x60;types:[&quot;Organization&quot;,&quot;LocalBusiness&quot;]&#x60; Finally, there are types that indicate a belonging to a subgroup such as business vs personal email address.
* **Type:** String
* **Example:**
```
{
	"types": [
		"Research"
	]
}
```
### url
  Page url of the article
* **Type:** String
* **Example:**
```
{
	"url": "https://explore.openalex.org/works/W2970808735"
}
```
