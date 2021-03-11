---
id: guides-fixing-analyze-page-type
title: Fixing a misidentified page type with Analyze API
sidebar_label: Fixing a misidentified page type with Analyze API
todo: Add new dashboard instruction
---

Sometimes Diffbot’s [Analyze API](api-basics-analyze) might misidentify a page as an unsupported type. In such cases, the page type might read `other` and not return any extracted content. There’s a way to override this.

Go to the [Custom API UI](https://app.diffbot.com/custom/) and live preview the page being processed using the Analyze API:

![](/img/Screen-Shot-2018-10-28-at-02.50.24.png)

Then, edit the `type` field by clicking on Edit:

![](/img/Screen-Shot-2018-10-28-at-02.51.43.png)

Enter the literal value of the page type: `product`, `article`, `video`, `image`, and `discussion`.

Save and retry processing. Your rule will now see the page matching this rule’s domain regex as the type you defined.

![](/img/Screen-Shot-2018-10-28-at-02.53.02.png)
