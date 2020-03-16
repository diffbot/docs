# Contributing Guide

This document goes into specifics on how to structure content when contributing, and how to spell or phrase certain things.

> Note that this is a reference guide and, due to the recent port from another knowledgebase, isn't fully integrated yet in all docs. A cleanup is in progress.

## Categories and Content

Each of Diffbot's major product categories has its own main navbar dropdown menu:

- Knowledge Graph: includes KG, Enhance, DQL
- Automatic API: includes automatic extraction APIs like Product, Article, Image, etc. but also meta-APIs like Account
- Batch Services: includes Crawlbot, Bulk jobs, and the related Search API which is used to search collections produced by the former two.

API and Batch have three main subcategories each:

- Basics
- Usage
- API Reference

### Basics

The Basics sub-category will have a subcategory for each of the relevant services. For example, for Automatic APIs, Basics will have Product API as a subcategory, Image API, Discussion API, and so on. Each of those categories MUST have a "Basic Usage" document which explains how and why the API is used in a maximum of 500 words, and links to more details.

A Basics section MUST NOT have links to errors or very specific use cases. Those belong into Usage.

The Basics sections are for becoming familiar with a product quickly, not for mastering it.

### Usage

The Usage subcategory will go into detail about a service or product. It SHOULD warn the user that it is recommended to read through the basics first, and the index page of a usage subcategory will be sparse on information, offering little more than links to specific scenarios or problems.

### API Reference

API reference contains details about query parameters, responses and return values, and ways to interact with the API programmatically. The API reference is intended for the technical user who wants to get right into it with minimal prose.

## Style Guide

TBD