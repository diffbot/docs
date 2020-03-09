---
id: error-diffbot-could-not-apply-rules
title: Diffbot Could Not Apply Rules Error
sidebar_label: Diffbot Could Not Apply Rules Error
---

> **Error message: "Diffbot could not apply rules"

This error means your custom rule is trying to find an element which doesn’t exist on the page, and that no other fields are being extracted that can be considered valid. In other words “I have nothing to extract according to the rules you gave me”.

If you want to avoid the error, you can add a wildcard field into the [Custom rule](api-basics-custom) you created. A wildcard field is one that **always** successfully extracts a value, so that Diffbot has something to extract even if the main content is not fetchable. 

This can be something like a field called `title` with a selector of `title`, as every page has a title. Doing this will make sure that each URL always has at least a title field, and then anything else you define on top of this.