---
id: api-list
title: List Extraction API
sidebar_label: List Extraction API
todo: Modify links to old API docs
---

The List API automatically extracts data from any single listings page. Automatically extract pages that contain a primary list of items, such as news index pages, product listings pages, and search engine results pages.

## Request

To use the List API, perform a HTTP GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/list
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer token |
| `url` | Web page URL of the URL to process (URL encoded) </td></tr><tr><td colspan="2">**Optional arguments**</td> |
| `fields` | Used to specify optional fields to be returned by the List API. See the [Fields](#the-fields-argument) section below. |
| `timeout` | Sets a value in milliseconds to wait for the retrieval/fetch of content from the requested URL. The default timeout for the third-party response is 30 seconds (30000). |
| `callback` | Use for jsonp requests. Needed for cross-domain ajax. |
| `proxy` | Leave value empty to use default proxies, or specify an IP address of a custom proxy that will be used to fetch the target page, instead of Diffbot's default IPs/proxies. (Ex: `&proxy` or `&proxy=168.212.226.204`) |
| `proxyAuth` | Used to specify the authentication parameters that will be used with a custom proxy specified in the `&proxy` parameter. (Ex: `&proxyAuth=username:password`) |

### The fields argument

Use the `fields` argument to return optional fields in the JSON response. The default fields will always be returned. For nested arrays, use parentheses to retrieve specific fields, or `*` to return all sub-fields.

For example, to return `links` and `meta` (in addition to the default fields), your `&fields` argument would be:</p>

```plaintext
&fields=links,meta
```

## Response

The Event API returns data in JSON format.

Each V3 response includes a `request` object (which returns request-specific metadata), and an `objects` array, which will include the extracted information for all objects on a submitted page.

Objects in the Event API's `objects` array will include the following fields:

| Field | Description |
| :---- | :---------- |
| `type` | Type of object (always `event`). |
| `pageUrl` | URL of submitted page / page from which the event is extracted. |
| `resolvedPageUrl` | Returned if the `pageUrl` redirects to another URL. |
| `title` | Title of the page. |
| `items` | The primary list of items found on the page. |
| &#x21B3;`title` | The title of the item |
| &#x21B3;`summary` | A longer text summary, when available, found in the item. |
| &#x21B3;`date` | The publication date of the item. |
| &#x21B3;`link` | A permalink to the item (when availabe). |
| &#x21B3;`image` | The image associated with the item. |


## Example Response

```json
{
  "request": {
    "pageUrl": "https://slashdot.org/",
    "api": "list",
    "version": 3
  },
  "objects": [
    {
      "diffbotUri": "list|3|-768312769",
      "icon": "https://slashdot.org/favicon.ico",
      "pageUrl": "https://slashdot.org/",
      "type": "list",
      "title": "News for nerds, stuff that matters",
      "items": [
        {
          "date": "Tue, 05 Oct 2021 00:00:00 GMT",
          "summary": "According to fluent Korean speaker Youngmi Mayer, Squid Game features \"botched\" subtitles that have changed the show's meaning for English-speaking viewers.\nFor those unaware of Squid Game, it's a Korean-language drama about an alternative world where people in debt compete in deadly games. The plot sees a group of people tempted into a survival game where they have the chance to walk away with 45.6 billion Korean won ($38 million) if they win a series of six games. According to a BBC article, it's currently on track to become Netflix's biggest original series. From the report:  \"The dialogue was so well written and zero of it was preserved [in the subtitles],\" Youngmi said in a Twitter post. In a TikTok video that's had almost nine million views, Youngmi gave several examples of mistranslation. In one scene a character tries to convince people to play the game with her, and the closed-caption subtitles read: \"I'm not a genius, but I still got it worked out.\" But what the character actually says, Youngmi explains, is: \"I am very smart, I just never got a chance to study.\" That translation puts more emphasis on the wealth disparity in society -- which is also a theme in the Oscar-winning 2019 Korean film, Parasite. \"Almost everything she says is being botched translation-wise... the writers, all they want you to know about her is that,\" Youngmi said. \"[It] seems so small, but it's the entire character's purpose of being in the show.\"  Youngmi later clarifies that her initial comments were about the automatically generated closed-caption subtitles rather than the English language subtitles, which are \"substantially better.\" But she added: \"The misses in the metaphors -- and what the writers were trying to actually say -- are still pretty present.\"",
          "link": "https://entertainment.slashdot.org/story/21/10/05/0146245/squid-game-subtitles-change-meaning-of-netflix-show",
          "title": "Squid Game Subtitles 'Change Meaning' of Netflix Show",
        },
        {
          "date": "Mon, 04 Oct 2021 00:00:00 GMT",
          "summary": "An anonymous reader quotes a report from The Verge:  Sarah was the patient in a proof-of-concept trial of a new approach to treating severe, treatment-resistant depression, published today in the journal Nature Medicine. The findings open up another possible strategy for helping people with the disorder. The study only involved Sarah, and it's still not clear how well it might work in other people. The lessons from the trial, though, helped the researchers understand more about the nature of depression and could apply to other efforts to treat the disease. The trial used a technique called deep brain stimulation, where electrodes implanted within the brain deliver electrical impulses in an attempt to change or regulate abnormal brain activity. It's common for conditions like epilepsy and Parkinson's disease. Research over the past decade has shown that it can sometimes help with depression, but the findings have been inconsistent. Most previous efforts delivered stimulation to individual regions of the brain thought to be involved in depression. This study, though, was targeted at regions that were part of specific brain circuits -- interconnected parts of the brain that are responsible for specific functions.\nIn addition, the circuits involved might be different for each person. So in this trial, the study team personalized the treatment approach to the specific patient's depression. They mapped out the type of brain activity that occurred when Sarah's depression symptoms flared. Then, they surgically implanted a device that could detect that brain activity and send stimulation to the circuit where the activity was happening. For Sarah, the procedure was highly effective. Her scores on depression rating scales dropped the morning after the device was turned on. And perhaps more importantly, she felt dramatic changes in her mood. During her first time getting the stimulation, she laughed out loud in the lab. \"And everyone in the room went, 'Oh my god,' because that's the first time I spontaneously laughed and smiled, where it wasn't faked, in five years,\" she said. Sarah's depression circuit flares up hundreds of times a day, and each time, the implanted device delivers a brief stimulating pulse. In total, she gets around 30 minutes of stimulation each day [...]. Sarah can't feel the pulses, but she said she does have a general idea of when they're happening throughout the day. \"There's a sense of alertness and energy or positivity that I'll feel,\" she said.",
          "link": "https://science.slashdot.org/story/21/10/04/2241244/a-surgically-implanted-brain-stimulation-device-could-help-treat-severe-depression",
          "title": "A Surgically Implanted Brain Stimulation Device Could Help Treat Severe Depression",
        },
        {
          "date": "Mon, 04 Oct 2021 00:00:00 GMT",
          "summary": "German officials on Monday unveiled what they said is the world's first commercial plant for making synthetic kerosene, touted as a climate-friendly fuel of the future. The Associated Press reports:  The facility in Werlte, near Germany's northwestern border with the Netherlands, will use water and electricity from four nearby wind farms to produce hydrogen. In a century-old process, the hydrogen is combined with carbon dioxide to make crude oil, which can then be refined into jet fuel. Burning that synthetic kerosene releases only as much CO2 into the atmosphere as was previously removed to produce the fuel, making it \"carbon neutral.\"\nThe amount of fuel that the plant can produce beginning early next year is modest: just eight barrels a day, or about 336 gallons of jet fuel. That would be enough to fill up one small passenger plane every three weeks. By comparison, total fuel consumption of commercial airlines worldwide reached 95 billion gallons in 2019, before the pandemic hit the travel industry, according to the International Air Transport Association, or IATA. But Atmosfair, a German non-profit group behind the project, says its purpose is to show that the process is technologically feasible and -- once it is scaled up and with sufficient demand -- economically viable.\nInitially the price of synthetic kerosene produced in Werlte will be far higher than that of regular jet fuel, though Atmosfair won't divulge how much it will be charging its first customer, the German airline Lufthansa. However Atmosfair's chief executive, Dietrich Brockhagen, says a price of 5 euros ($5.80) per liter (0.26 gallons) is possible. That's still several times what kerosene currently costs, but Atsmofair is banking on carbon taxes driving up the price of fossil fuels, making his product more competitive. Additionally, authorities at the national and European level are putting in place quotas for the amount of e-fuel that airlines will have to use in future. That will create demand, making it more attractive to invest in bigger and better plants. Ueckerdt said 5 euros per liter is feasible by 2030, when the European Union's executive may require airlines to meet 0.7% of their kerosene needs with e-fuels. Under current plans, that would rise to 28% by 2050.",
          "link": "https://news.slashdot.org/story/21/10/04/2236211/germany-unveils-worlds-first-commercial-plant-for-making-synthetic-kerosene",
          "title": "Germany Unveils World's First Commercial Plant For Making Synthetic Kerosene",
        },
        {
          "date": "Mon, 04 Oct 2021 00:00:00 GMT",
          "summary": "We thought the carnage was over for popular decentralized finance, or DeFi, staking protocol Compound, but as it turns out, millions more than we thought are at risk. About $162 million is up for grabs after an upgrade gone very wrong, according to Robert Leshner, founder of Compound Labs. CNBC reports:  At first, the Compound chief tweeted Friday that there was a cap to how many comp tokens could be accidentally distributed, noting that âoethe impact is bounded, at worst, 280,000 comp tokens,â or about $92.6 million. But on Sunday morning, Leshner revealed that the pool of cash that had already been emptied once had been replenished â\" exposing another 202,472.5 comp tokens to exploit, or roughly $66.9 million at its current price.\nOn Wednesday, Compound rolled out what should have been a pretty standard upgrade. Soon after implementation, however, it was clear that something had gone seriously wrong, once users started to receive millions of dollars in comp tokens. For example, $30 million worth of comp tokens were claimed in one transaction. The saving grace of the entire debacle, however, was the fact that the pool of cash that was open to exploit -- something called the Comptroller contract -- had a finite amount of tokens. The problem is that this leaky pool got a fresh influx of cash, and 0.5 comp tokens are being added roughly every 15 seconds, according to Gupta. \"When the drip() function was called this morning, it sent the backlog (202,472.5, about two months of COMP since the last time the function was called) into the protocol for distribution to users,\" Leshner wrote in a tweet Sunday morning. Leshner noted that this brought the total comp at risk to 490,000 comp tokens, or about $162 million.\nThere are a few proposals to fix the bug, but Compound's governance model is such that any changes to the protocol require a multiday voting window, and Gupta said it takes another week for the successful proposal to be executed. In the meantime, this pool of cash is once again up for grabs for users who know how to exploit the bug. Compound made clear that no supplied or borrowed funds were at risk, which is some consolation. \"No user funds are or were at risk so it's not that big of a deal,\" said Gupta. \"Everyone kinda got diluted but didn't lose anything directly.\"",
          "link": "https://news.slashdot.org/story/21/10/04/2228209/bug-puts-162-million-up-for-grabs-says-founder-of-defi-platform-compound",
          "title": "Bug Puts $162 Million Up For Grabs, Says Founder of DeFi Platform Compound",
        }
      ]
    }
  ]
}

```


## Authentication

You can supply Diffbot with basic authentication credentials or custom HTTP headers (see below) to access intranet pages or other sites that require a login.

### Basic Authentication

To access pages that require a login/password (using [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)), include the username and password in your `url` parameter, e.g.: `url=http%3A%2F%2FUSERNAME:PASSWORD@www.diffbot.com`.

## Custom HTTP Headers

You can supply Diffbot APIs with custom HTTP headers that will be passed along when making requests to third-party sites. These can be used to define specific Referer, User-Agent, Cookie or any other values.

Custom headers should be sent as HTTP headers in your request to `https://api.diffbot.com`, and prepended with `X-Forward-`.

For instance, to send custom `User-Agent`, `Referer` and `My-Custom-Header` header values:

| Desired Header | Send to api.diffbot.com |
| :-- | :-- |
| `User-Agent:Diffbot` | `X-Forward-User-Agent:Diffbot` |
| `Referer:diffbot.com` | `X-Forward-Referer:diffbot.com` |
| `My-Custom-Header:CustomValue` | `X-Forward-My-Custom-Header:CustomValue` |

## Custom Javascript

<div class="alert">This functionality is currently in beta.</div>

Using the `X-Evaluate` custom header (sent as `X-Forward-X-Evaluate`), you can inject your own Javascript code into web pages. Custom Javascript will be executed once the DOM has loaded.

Custom Javascript should be provided as a text string and contained in its own function. You must also include the special functions `start()` and `end()` to indicate the beginning and end of your custom script. Once `end()` fires, the updated document will be processed by your chosen extraction API.

It's recommended that your `end()` function be offset using `setTimeout` (see [JavaScript Timing Events](https://www.w3schools.com/js/js_timing.asp)) in order to accommodate your primary function processing. Additionally, if your custom Javascript requires access to Ajax-delivered content, it may be necessary to offset your entire function using `setTimeout` in order to delay the start of your processing.

The following sample `X-Evaluate` header waits one-half second after the DOM has loaded, enacts a click on the `a.loadMore` element, then waits 800 milliseconds before signaling the `end()`:


```js
function() {
    start();
    setTimeout(function() {
        var loadMoreNode = document.querySelector('a.loadMore');
        if (loadMoreNode != null) {
            loadMoreNode.click();
            setTimeout(function() {
                end();
            }, 800);
        } else {
            end();
        }
    }, 500);
}
```

Delivered as a string value as a custom header:

```json
"X-Forward-X-Evaluate": "function() {start();setTimeout(function(){var loadMoreNode=document.querySelector('a.loadMore');if (loadMoreNode != null) {loadMoreNode.click();setTimeout(function(){end();}, 800);} else {end();}},500);}"
```

> Note: X-Evaluate will only be executed if called from the API the rule resides in. If you have an X-Evaluate script in your Article API rule and make a request with the Analyze API that identifies the page as an article, the X-Evaluate will not be executed.

### Saving Data to a Custom Field Using Javascript

We support a custom function `save(_name_, _value_)` that can be used to save Javascript data directly to the JSON output of an extraction API.  For example, the following code will grab the JSON object from a `<script>` tag wholesale, and output the entire object to the JSON output of the Extraction API:

```js
function() {
    start();
    setTimeout(function() {
        var jsonNode = document.querySelector('script#PRODUCT_PROPERTIES');
        if (jsonNode !== null) {
            save("json", JSON.parse(jsonNode.innerText));
            setTimeout(function() {
                end();
            }, 800);
        } else {
            end();
        }
    }, 500);
}
```

## Posting Content

If your content is not publicly available (e.g., behind a firewall), you can POST markup directly to the Event API endpoint for analysis:

```plaintext
https://api.diffbot.com/v3/list?token=...&url=...
```

Please note that the `url` argument is still required, and will be used to resolve any relative links contained in the markup.

Provide the content to analyze as your POST body, and specify the `Content-Type` header as `text/html`.

### HTML Post Sample

```plaintext
curl -H "Content-Type: text/html" -d '<html><head><title>Some List Name</title></head><body><h2>Come join us on February 22nd, 2020</h2><div> at the Chase Center, 1301 2nd Ave, Seattle, WA 98101</div></body></html>' 'https://api.diffbot.com/v3/event?token=...&url=http%3A%2F%2Fstore.diffbot.com'
```
