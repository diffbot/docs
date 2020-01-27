---
id: api-account
title: Account API
sidebar_label: Account API
todo: Modify links to old API docs
---

The Account API returns information on a token's call volume and billing history.

## Request

To use the Account API, perform a HTTP GET request on the following endpoint:

```plaintext
https://api.diffbot.com/v3/account
```

Provide the following arguments:

| Argument | Description |
| :------- | :---------- |
| `token` | Developer [token](https://www.diffbot.com/pricing) </td></tr><td colspan="2">**Optional arguments**</td> |
| `days` | Pass the number of days (`&days=365`) for which you would like to retrieve API call volumes (default = 31). |
| `invoices` | Pass `&invoices=true` to return invoice and payment history. |

## Response

The Account API returns account details in JSON format. Items returned will include the following:

| Field | Description |
| :---- | :---------- |
| `name` | Name associated with the token. |
| `email` | Email address associated with the token. |
| `plan` | Current plan for the token. |
| `planCalls` | Amount of monthly calls included. |
| `status` | Status of the token. |
| `childTokens` | List of child or sub-tokens, if there are any associated with your account. |
| `apiCalls` | An array of days and call volume amounts for each day. By default this will return data from the most recent 31 days. Use the `days` argument to adjust the response window. Dates prior to token becoming active will not be returned. |
| &#x21B3;`date` |Date, e.g. `2015-10-01`. |
| &#x21B3;`calls` | Total number of API calls made. |
| &#x21B3;`proxyCalls` | Total number of calls made using proxy servers. [Read more](explain-using-different-proxies.md). |
| &#x21B3;`giCalls` | Total number of search calls made against the [Global Index](explain-global-index.md). |
| `invoices` | Array of invoices for paid accounts. |
| &#x21B3;`date` | Date of invoice. |
| &#x21B3;`periodStart` | Billing period start date (resolved to day). |
| &#x21B3;`periodEnd` | Billing period end date (resolved to day). |
| &#x21B3;`totalCalls` | Total calls made during the billing period. |
| &#x21B3;`totalAmount` | Total amount charged. |
| &#x21B3;`overageAmount` | Total overage amount billed if call volume exceeded included number of monthly calls. |
| &#x21B3;`status` | Payment status of invoice (`paid` or `unpaid`). |
