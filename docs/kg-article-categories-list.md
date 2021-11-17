---
id: kg-article-categories-list
title: Article Categories
onPageNav: false
---

**BETA** — Article categories provide structured context to the topic discussed in a particular piece of text. Unlike [tags](kg-ont-article#tags), categories describe the text as a whole and tend to be more abstract. 

> As of Nov 17, 2021, article categories is in beta and is only supported through [Article Extract](api-intro-article) currently. Ontology and access may be subject to change at any time.

Here's a sample request to extract categories alongside your article extraction —


```python
https://api.diffbot.com/v3/article?token=TOKEN&url=https://blog.diffbot.com/a-less-biased-way-to-discern-media-bias-using-knowledge-graph-enhanced-ai/&naturalLanguage=categories
```

The category list below outlines all possible categories that may be returned by Diffbot Extract.


| Name                  | Category Type      | Notes                               |
| --------------------- | ------------------ | ----------------------------------- |
| Acquisitions, Mergers and Takeovers         | Diffbot |    |
| Partnerships and Joint Ventures         | Diffbot | Strategic Partner, Supplier, Distributor, Promoter, Agent, Joint Venture, etc. |
| Stock Offerings and IPOs         | Diffbot |   |
| Products and Services Announcements         | Diffbot | Launch, Integration, Innovation  |
| Sales and Earnings         | Diffbot | Quarterly, Annual, Any article where sales/earning reporting is the main topic  |
| Awards         | Diffbot |   |
| Real Estate Transactions         | Diffbot | Land, Office, Manufacturing Facility, Distribution Center, Branch/Store, Lease, Sale, Opening, Closure, etc.  |
| Bankruptcy         | Diffbot |   |
| Personnel Changes         | Diffbot | Leadership Change, Key Exit , Key Hire, Promotion, Succession, Executive Search, Layoff, Downsizing, Hiring, Death  |
| Environmental, Social and Governance (ESG)         | Diffbot | Environment impact, Carbon footprint, Diversity issues, Fraud, Labor issues (child labor, modern slavery)   |
| Funding         | Diffbot | Investments and financing received by a company |
| Bond Issue         | Diffbot |   |
| Contracts and Agreements         | Diffbot |   |
| Dividends         | Diffbot |   |
| Investment Opinion         | Diffbot |   |
| Litigation         | Diffbot |   |
| Stock Split         | Diffbot |   |
| Intellectual Property         | Diffbot | Patent, Copyright, Awarded, Renewed, Filed  |

Additionally, most of the IABv2 categories are supported as well. (See the [full excel list](https://www.iab.com/wp-content/uploads/2017/11/IAB_Tech_Lab_Content_Taxonomy_V2_Final_2017-11.xlsx))

<style>
/* Hides the Right-Hand Secondary Nav for a Full Width Industry Table */
.onPageNav {
    display: none;
}
/* Hides the Unnecessary Prev/Next Buttons for this Reference Doc */
.docs-prevnext {
    display: none;
}
</style>