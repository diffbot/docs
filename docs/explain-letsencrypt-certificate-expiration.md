---
id: explain-letsencrypt-certificate-expiration
title: 9/30 - SSL Errors May Require HTTP Client Upgrade
sidebar_label: 9/30/21 - SSL Errors May Require HTTP Client Upgrade
---

Customers who are receiving SSL errors connecting to our API may need to update their HTTP clients in order to continue connecting.  Many of these clients use certificates issued by LetsEncrypt, and their root certificate (based on which other certificates are authored) expired on September 30, 2021.  More on this can be found at https://techcrunch.com/2021/09/21/lets-encrypt-root-expiry/.

In most cases it will be enough to upgrade your HTTP libraries, but in some cases it may be necessary to do a system/OS update to resolve these issues.
