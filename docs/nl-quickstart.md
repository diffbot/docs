---
id: nl-quickstart
title: Natural Language Quickstart
sidebar_label: Quickstart
---

The [Natural Language Demo](https://demo.nl.diffbot.com) is a great place to start. It illustrates the features of the Natural Language API. 

[![Natural Language Demo Screenshot](/img/nl-demo.png)](http://demo.nl.diffbot.com)

The "Graph" tab shows a knowledge graph extracted from the text. The graph is enhanced with facts from the Diffbot KG. Blue edges represent facts extracted from the text, while grey edges represent facts retrieved from the Diffbot KG. Doubleclick on a node to expand it with more facts from the KG.

The "Entities" tab shows the extracted entities sorted by salience. Click on an entity to see their link to the Diffbot KG and highlight all the mentions to this entity in the text.

The "Facts" tab shows extracted facts whose property has been pre-defined in our schema. You can hover over a fact to see the part of the text where this fact was found. See the "Documentation" tab for a list of properties we currently support in our schema.

The "Open Facts" tab shows open-domain facts whose description has been extracted from the text alone. Rather than following a particular schema, these facts enable new properties to be discovered.

## Getting started with the API

[This notebook](https://colab.research.google.com/drive/1gvCCbuRRiF5ISo6oaQ2uDQLX2_ySMdyl) shows how to get started with Python. 

First, enter your token below and choose which fields to return. For a list of all fields, please refer to the [API documentation](https://nl.diffbot.com/documentation/).
```
TOKEN = 'add your token here'
FIELDS = "entities,sentiment,facts"
HOST = "nl.diffbot.com"
PORT = "80"
```

This is how you make a request.
```
import json
import requests

def get_request(payload):
    res = requests.post("https://{}/v1/?fields={}&token={}".format(HOST, FIELDS, TOKEN), json=payload)
    return res.json()

title = "Robert Sowell"
content = title +"\n\nRobert Sowell was an American football player who played defensive back for the Miami Dolphins. He died June 22, 2015 of a heart attack."

res = get_request({
    "content": content,
    "lang": "en",
    "format": "plain text with title"
})

```

Now, we can explore which entities are mentioned in the text by listing by salience (i.e., from most prominent entity in the text to least prominent).
```
import pandas as pd
if "entities" in res:
    df = pd.DataFrame.from_dict(sorted(res["entities"], key = lambda ent: ent["salience"], reverse=True))
    pd.options.display.max_columns = None
    pd.set_option('display.width', 1000)
    print(df.head())
```
```plaintext
                                         name                                         diffbotUri  confidence  salience  sentiment                                    allUris                                           allTypes                                           mentions
0                               Robert Sowell  https://diffbot.com/entity/PYwbLa__MNVGtPMryqq...    0.784124  0.896936   0.008566  [http://www.wikidata.org/entity/Q7349932]  [{'name': 'person', 'diffbotUri': 'https://dif...  [{'text': 'Robert Sowell', 'beginOffset': 0, '...
1                              Miami Dolphins  https://diffbot.com/entity/CSwPrbfilOHqM2q3omo...    0.989229  0.652256   0.000000   [http://www.wikidata.org/entity/Q223243]  [{'name': 'corporation', 'diffbotUri': 'https:...  [{'text': 'Miami Dolphins', 'beginOffset': 95,...
2                              defensive back  https://diffbot.com/entity/X_jqE4MDsNUy3hKdSvy...    0.968278  0.490431   0.350826   [http://www.wikidata.org/entity/Q674953]  [{'name': 'role', 'diffbotUri': 'https://diffb...  [{'text': 'defensive back', 'beginOffset': 72,...
3                       myocardial infarction  https://diffbot.com/entity/Xx3IeVZxcNnC_ggX4gf...    0.740677  0.371698  -0.861011    [http://www.wikidata.org/entity/Q12152]  [{'name': 'coronary artery disease', 'diffbotU...  [{'text': 'heart attack', 'beginOffset': 138, ...
```

We can also explore the facts describing the relationships between these entities.
```
import pandas as pd
if "facts" in res:
    df = pd.DataFrame.from_dict(res["facts"])
    pd.options.display.max_columns = None
    pd.set_option('display.width', 1000)
    print(df.head())
```
```plaintext
                                       humanReadable                                             entity                                           property                                              value                                         qualifiers  confidence                                           evidence
0  [Robert Sowell] EMPLOYEE_OR_MEMBER_OF [Miami D...  {'name': 'Robert Sowell', 'diffbotUri': 'https...  {'name': 'employee or member of', 'diffbotUri'...  {'name': 'Miami Dolphins', 'diffbotUri': 'http...  [{'property': {'name': 'is current'}, 'value':...    0.935833  [{'entityMentions': [{'text': 'Robert Sowell',...
1             [Robert Sowell] NATIONALITY [American]  {'name': 'Robert Sowell', 'diffbotUri': 'https...  {'name': 'nationality', 'diffbotUri': 'https:/...  {'name': 'American', 'diffbotUri': 'https://di...                                                NaN    0.999107  [{'entityMentions': [{'text': 'who', 'beginOff...
2  [Robert Sowell] FIELD_OF_WORK [American football]  {'name': 'Robert Sowell', 'diffbotUri': 'https...  {'name': 'field of work', 'diffbotUri': 'https...                      {'name': 'American football'}                                                NaN    1.000000  [{'entityMentions': [{'text': 'Robert Sowell',...
3         [Robert Sowell] DATE_OF_DEATH [2015-06-22]  {'name': 'Robert Sowell', 'diffbotUri': 'https...  {'name': 'date of death', 'diffbotUri': 'https...                             {'name': '2015-06-22'}                                                NaN    0.999053  [{'entityMentions': [{'text': 'He', 'beginOffs...
4                      [Robert Sowell] GENDER [male]  {'name': 'Robert Sowell', 'diffbotUri': 'https...  {'name': 'gender', 'diffbotUri': 'https://docs...                                   {'name': 'male'}                                                NaN    0.500000  [{'entityMentions': [{'text': 'He', 'beginOffs...
```

For a list of all supported properties, please refer to the [schema page](http://relex.diffbot.com/schema/).
