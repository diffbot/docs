---
id: kg-search-faq
title: KG Search FAQ
sidebar_label: KG Search FAQ
---

## Organization Data FAQ

### What is the importance of the 'Importance' field?

In the Diffbot KnowledgeGraph, importance is a relative measure of popularity from 0 (least popular) to 100 (most popular). For example, if you are searching for the company “Apple” are you more likely to be looking for Apple Inc. or Apple Corps? Both are large successful organizations, but one is a tech company based in Silicon Valley with a direct relationship with hundreds of millions of consumers globally while the other is a multimedia conglomerate based in the UK. With no additional information provided Apple Inc will have a higher importance score than Apple Corps given the vast number of linkages between Apple Inc and other entities in the graph.

Please note: _**importance**_ is a proxy to the popularity of a person or organization. importance does not measure the relevance of a person/org relative to a query. We do not recommend filtering results by importance.

### What is the confidence score?

Each fact has a confidence score that represents our level of belief on whether this fact is correct or not. A confidence score of one means that we're absolutely certain that this fact is correct — while a confidence score of zero means we're absolutely certain this fact is incorrect. We currently discard facts whose confidence score is below 0.5.

### What does the `nbIncomingEdges` measure? Is it links pointing to the company's website? Or even their social channels?

The `nbincomingedges` is the number of entities and facts in the Knowledge Graph that point to a specific organization entity. For example, the nbIncomingEdges field for Google is over 100,000. This number includes the number of people that work at Google, the number of investors who invested in google, and any other facts from other entities that point to Google.
 
### How do you determine `IsAcquired` and `IsDissolved` fields?

Both 'IsAcquired' and 'IsDissolved' fields are Boolean values set to either True or False. We monitor explicit references in company data sources, News Articles, SEC filings, on official corporate websites, etc. that mention the sale of/acquisition of one organization entity by another. If an entity has been acquired, isAcquired is set to True. isDissolved is only set to True if an entity is acquired and merged vs acquired and maintained as a wholly-owned or partially owned subsidiary or it is dissolved as a corporate entity without a sale event such as a bankruptcy that results in a new company or the sale of assets but not the entity itself. This data is still very experimental and can be very uneven in terms of it’s precision/accuracy, but we are investing in improving the quality of the data with each KG build cycle. 
 
### What does the nbOrigins field indicate?

The nbOrigins is a count of the number of unique origin URLs used to assemble the facts associated with an entity. In the Diffbot KnowledgeGraph, an origin refers to a publicly accessible location on the Web where data describing an Entity was discovered and extracted. Origin may also refer to a source of information used to infer a fact about an Entity, for example Diffbot’s website states that Diffbot is located in Menlo Park, CA. The DKG might infer that Diffbot is located in the United States since Menlo Park, CA is in the United States. Each entity and fact associated with an entity is compiled from data extracted or inferred from one or more unique origins. 
 
### Is there any differentiation between subsidiaries and branches (departments) of an organization in the KG?
 
So historically we have not defined a subsidiary entity using a formal legal definition. We have a project underway to try and improve sub-record-linking for parent-subsidiaries linkages by using formal definitions and official government filings made by Organizations to the US Federal Govt. Foreign organization subsidiary data is out of scope for this initial phase of the project.
 
We are still in the early stages of working on this problem. For this reason, the accuracy of subsidiary linkages is somewhat hit or miss. We are using SEC filings as our official source to try and improve linkages. [Example](https://www.sec.gov/Archives/edgar/data/51143/000104746919000712/a2237254zex-21.htm#toc_kc73601_1)
 
Even for the Fortune1000 companies, you will see examples of subsidiaries appearing under parent organizations that are no longer subsidiaries, there will be missing subsidiaries that should be listed and other inaccurate linkages due to over merging of organization entities. 
 
### What is the main difference between organization categories and industries -- if we would like to derive the Industry of an Org Entity/Company which field is best to use: Industry or Category? 
 
The main difference between category and industry is the signal of the labeling. If you have an attribute industry: that will be included in the industry field. We also specifically look for standard classification schemes for industry enforced by incorporation and reporting compliance requirements. We do not have a strongly typed list that bounds either category or industry currently.
 
Categories usually refers to the labels that have been used to describe the type of Corporation, Educational Institution, Local Business, or Organization; ex. Academic or Financial Institution, etc. but categories can also include labels used to facilitate navigation to resources (as in a Browse based navigation on LinkedIn of Companies categorized to facilitate recruiting) as well as more traditional vertical categorizations used in specific professional contexts that Diffbot discovered on the Web.
 
Industries usually refers to the labels that have been used to describe the type of business an organization entity engages in but industries can also include labels used to facilitate navigation to resources as well as more traditional vertical categorizations used in specific professional contexts that Diffbot discovered on the Web.
 
We recommend first mining categories and sicClassification fields when you are looking for informal or formal classification labels of organizations.

### Is there a taxonomy for Organization categories? What are 'Categories'? How do you define them?
 
There is no formal taxonomy for categories. Categories can be any descriptive tag or directory label used to classify an organization or to facilitate navigation to that organization entity. Any basic descriptive tag or navigational element in a directory used to tag a company in a website or any classification set by a publisher and discovered on the Web gets shoved under categories. The best way to explore categories is to facet by them. 
 
The upside of not having a formal taxonomy is that you can see all of the ways an organization is explicitly described online. The downside is that the field values vary wildly and do not map consistently to any well-defined organizational classification schemes.
 
### Is there a taxonomy for Organization industries? Where does the industry taxonomy come from? Why?
 
There is no formal taxonomy for industries. industries is another catchall that includes ANY type of classification labeled industry. We have an active project underway to strongly type industry classification as a separate set of fields, but the industries field will always be an aggregation of all labels discovered on the web for that entity. Faceting is the only way in the short term to view the array of industries in our data set.
 
We have added SIC codes for companies. Coverage is increasing with each build.
 
`sicClassification` contains an array of fields populated with SIC data (code, primary:true/false, name). For example, SIC classifications for GAP  include:

```json
"sicClassification": [
{
"code": "5651",
"isPrimary": false,
"name": "Retail-family clothing stores"
},
{
"code": "5600",
"isPrimary": false,
"name": "Apparel and accessory stores"
},
{
"code": "5",
"isPrimary": false,
"name": "Transportation, communications, and utilities"
}
```
 
We have also added NAICs codes for companies. Coverage is increasing with each build.
 
`naicsClassification` contains an array of fields populated with NAIC data (code, primary:true/false, name) akin to sicClassification. 

### What is the DiffbotUri?

Each entity in the Diffbot KnowledgeGraph is identified by a unique identifier, an alphanumeric string like `CWSwJ_SWQPfqO3HQsxY4lGg` that uniquely identifies an entity called an entityID.

To access or take action on an entity in the Diffbot KnowledgeGraph, you need the entity’s DiffbotURI which is a combination of the entityID and a corresponding web address or uniform resource identifier (URI), which is defined by appending the entityID to the URL [https://www.diffbot.com/entity/](https://www.diffbot.com/entity/). For example, Diffbot's entityID is `CWSwJ_SWQPfqO3HQsxY4lGg` and its DiffbotUri is [https://www.diffbot.com/entity/CWSwJ_SWQPfqO3HQsxY4lGg](https://www.diffbot.com/entity/CWSwJ_SWQPfqO3HQsxY4lGg)

### What does crawlTimestamp represent?

An origin is a publicly accessible location on the Web where data describing an Entity was discovered and extracted or it is a source used to infer a fact about an Entity. The crawlTimestamp records the most recent point in time an origin was visited as a UNIX Epoch timestamp measured in seconds. 

### What does default crawlTimestamp represent?

The default crawlTimestamp is the most recent date of all of the crawlTimestamps of the origins used to compute an Entity, returned as an Epoch UNIX timestamp expressed in seconds.

### ISO codes for Administrative Areas

Using an extension to include `nonCanonicalFacts` ( Add `&nonCanonicalFacts=true` to API calls) will give you access to the following ISO attributes:

- iso3166-1NumericCode
- iso3166-1Alpha-2Code
- iso3166-1Alpha-3Code

### Which kind of financial information are present in Diffbot Knowledge Graph?

We extract revenue information from the financial reports submitted by public companies in the US. 
For those companies, DKG contains current and historical (up to 2007) revenues information exposed by year (`yearlyRevenues`) and by quarter (`quarterlyRevenues`). For each revenue value we provide the date when the specific financial information has been filed with the Commission and its reference period end date (i.e. end of quarter, end of fiscal year FY).

For example, these are the yearly revenues declared by Apple Inc. from 2016 to 2019 (Apple FY ends 09/30). Note that for each value we pick the most recent filing date.

![Apple yearly revenues from 2016 to 2019](/img/dql/faq1.png)

Here there are last year Apple Inc. revenues grouped  by quarters:

![Apple last year revenues in quarters](/img/dql/faq2.png)

---

## Skills Ontology FAQ

When we refer to the 'Diffbot Skills graph/ontology' in the following questions we're referring to the skills included in the result set from [this query](https://app.diffbot.com/search/?query=type%3ASkill+&from=0&size=50&active_tab=visual).
 
 
### How are/were the existing tags/nodes in the Diffbot skills graph/ontology determined?

A skill has historically been included in the Diffbot skills ontology if 

- the skill was mentioned (and labeled as a skill) at least 100 times on a leading aggregator site like LinkedIn and StackOverflow, and
- we could map the skill to a Wikidata entity.

### What logic and related sources is or was used to form the skills?

We use the most frequently used skill labels mentioned in multiple sources, such as LinkedIn and StackOverflow, to construct the skill ontology. We normalize them to Wikidata entities, based on their surface form (text label). During the Knowledge Graph (DKG) build process, the skill entities are added to the DKG, and a person's skills are normalized to the skill entities if they exist.

### Is the skills ontology considered by Diffbot to be a comprehensive and exhaustive ontology of Skills?

No. The skills ontology is extensive but not comprehensive. Our current (~26k) skills cover around ~85+% of the most popular skills found on the Web (as of the point in time the ontology was generated). We do not include every skill label discovered on the Web in the ontology.
 

### Why are certain skills from 3rd party sources like LinkedIn included whilst others aren't?

_For Example: Blockchain isn't included in Diffbot but is in LinkedIn, which seems odd given the prevalence of blockchain in the technology industry today. Do you understand why it's missing?_

It is likely that when we last generated the ontology, Blockchain fell outside of the threshold for inclusion. We would expect that it will be included in the next update.

Currently, we are in the process of completing a comprehensive review and update of the DKG skills ontology. We expect that by the end of March, we will have an optimized version of the ontology ready to roll to production. 

It is important to note that the updated skills ontology when ready to release will not include 100% of all skill labels/tags you might find on a site like LinkedIn or StackFlow that enables individuals to tag profile data with skills information. Currently, the threshold for inclusion is at least 100 unique mentions of a skill. We are open to reducing the threshold and will be experimenting with what that mention threshold should be for ongoing automated inclusion of skills in the ontology but for the next round of updates the threshold of 100 mentions stands.

### What are the rules that determine a new skill gets added?

At the time of construction, each skill that has been mentioned over 100 times in LinkedIn or in aggregate are considered for inclusion in the ontology. Skills meeting the threshold are mapped to Wikidata entities. The vast majority of skills that meet the minimum threshold are ultimately added to the skills ontology. 

### Presumably adding new skills must happen periodically to account for new and evolving terminology? 

Currently, we manually update the ontology. We have historically targeted an annual update cycle although the last update occurred over one year ago. Going forward, we plan to automate the process and ensure that updates are made to the skills ontology on a quarterly basis, if not monthly.

### How frequently does the KG get updated with new skills?

Historically, we have targeted annual updates of the Skills ontology. There is evidence that we should update the ontology more often and we are researching what the optimal interval for updates should be as we automate the process going forward. The next comprehensive update of the skills ontology will roll out in late February/early March 2020. We plan to automate the process later this year.

### Are there any semantic relationships between the skills in the Diffbot graph? We've looked for this unsuccessfully ourselves. Perhaps there's a subtlety that we're missing? Or is the list of skills a completely flat list (and not considered a graph) where there are no relationships between the skills?

In the Diffbot skills ontology, we do have the concept of parent skills, which uses the Wikidata subclass property. For example, machine learning is a subclass of artificial intelligence, thus forming a parent skill relationship. Among the existing 26K skill entities, 46% of them have one or more parent skills. We also collect co-occurrence information among skills. However, they are not currently used in the DKG.
