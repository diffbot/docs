# How to create effective queries that return relevant articles

Are you looking for a solution to help your team stay abreast with the latest news in key areas of technology relevant to your industry?

This document is a guide for the following problem: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Given a general topic of interest, how do I create effective queries that return relevant articles?*

For clarity, consider the following running example, in which we are searching for news articles about "robotic process automation".
<br>
<br>
## Step 1. Define relevant keywords and entities

First, we find entities that represent the topic of interest. For "robotic process automation", we can use [https://app.diffbot.com/entity/EuMHkFcG7MaOKqrWXA6xjcQ](https://app.diffbot.com/entity/EuMHkFcG7MaOKqrWXA6xjcQ). Searching for entities (rather than keywords) allows us to differentiate among the many potential meanings of a keyword. For instance, “RPA” can refer to “robotic process automation”, but it also refers to “Republian Party of Armenia” and many other organizations.

To find relevant entities, you can search the KG with queries such as [type:Miscellaneous name:"robotic process automation"](https://app.diffbot.com/search/?query=type%3AMiscellaneous+name%3A%22robotic+process+automation%22&from=0&size=25&output_format=&kgversion=) and select the correct Diffbot URI.

If you cannot find an entity for a topic of interest (e.g., "intelligent automation"), define keywords that unambiguously refer to this topic. You will be able to use these keywords in your query later.

You might also want to define keywords even when there is an entity for this concept (e.g., "robotic process automation"). This could help increase the coverage of the results.

## Step 2. Create the query

For each entity/keyword, create a query using one of the following examples:

1. Query for entities: 
    ```
    type:Article tags.uri:"https://app.diffbot.com/entity/EuMHkFcG7MaOKqrWXA6xjcQ" sortBy:date
    ```

2. Query for keywords: 
    ```
    type:Article or(title:"robotic process automation", text:"robotic process automation") sortBy:date
    ```

Note: It’s also possible to search tags by using the label (e.g., type:Article tags.label:"intelligent automation”). However, this method is not recommended if you’re looking for precise results. This is because the system will perform a best-effort matching based on the label provided.

## Step 3. Evaluate the results

Enter the query in [https://app.diffbot.com/search/](https://app.diffbot.com/search/) and check the quality of the results. Things to look for:

* The query returns recent articles

* The top results are indeed relevant to the topic

* The query returns a reasonable number of results

If you are not happy with the results of a tag query, please share your findings at the Slack channel #entity-linking.

## Step 4. Find similar entities to increase coverage

Given a keyword or entity, use the following facet query to find other entities that frequently appear together with input keyword/entity.

For keyword queries:
```
type:Article or(title:"robotic process automation", text:"robotic process automation") facet:tags
```

For entity queries:

```
type:Article tags.uri:"https://app.diffbot.com/entity/EuMHkFcG7MaOKqrWXA6xjcQ" facet:tags
```