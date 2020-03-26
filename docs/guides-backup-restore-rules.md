---
id: guides-backup-restore-rules
title: Backing up and restoring custom APIs and rules
sidebar_label: Back up / restore custom APIs
---


Sometimes you might want to back up your custom rules – maybe you’re freezing your token for a while, or maybe you want to copy them to another token. In this short guide we’ll go through how to access all of your custom API rules and back them up for safe keeping.

## Step 1: Access your rules

Our Custom API toolkit exposes an API for itself which you can use to display all your rules. Assuming your token is "MYTOKEN", here’s how you would access your rules: just visit the following URL in the browser: https://api.diffbot.com/v3/custom?token=MYTOKEN

This should produce a screen not unlike the following one:

![JSON output of rules](/img/rules-output.png)

This is a simple JSON file (JSON is a specific data format) which contains a list of all your custom API rules. The collapsed rules ({&lt;-&gt;} in the image) are all different rules, but collapsed in the browser’s UI to make it more obvious that there are a lot of them. The code is made pretty with the help of [this JSON viewer Chrome Extension](https://github.com/tulios/json-viewer).

## Step 2: Save the file

To back up your rules, simply save this file somewhere onto the hard drive or your cloud storage with CMD/CTRL+S or File -&gt; Save As. Make sure the file’s extension is `.json`, so for example `myRules.json`.
You can now store this file somewhere for later use. Alternatively, if you’re making changes to the rules make them and then save the file.

## Importing the rules

So how do we use this file?

Using a handy tool like [Postman](https://www.getpostman.com/), you would do the following:

In a new request tab, you would enter the API URL: https://api.diffbot.com/v3/custom?token=MYTOKEN. You can replace MYTOKEN with any token to which you want to upload the rules – does not have to be the one from which they were originally downloaded.

![Step 1 - enter the API URL intro the new request tab](/img/step1.png)

Switch the method to POST

![Step 2 - switch method to POST](/img/step2.png)

In the "Body" tab, choose wither raw or binary. If you choose binary, then click on Choose Files and select the `.json` file we created earlier. If you choose raw, copy and paste that file’s content into the text area.

![Step 3 - Adding content](/img/step3.png)

Finally, under the Headers tab, add `Content-Type` as the key, and `application/json` as the value, so that Diffbot knows to expect JSON content.

![Step 4 - Change content type to application/json](/img/step4.png)

Press Send. This will upload the new rules into your token. You’ll get a response back that’s something like this:

```json
{
  "hashes":
    [
      "507a31ce",
      "ax7n3sa1",
      "z992ns6c"
    ]
  }
```

These are just IDs of the rules that were updated and can be safely ignored. The token you used will now have the rules you uploaded, along with any customizations.
