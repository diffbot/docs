---
id: api-basics-events
title: Events API Basic Usage
sidebar_label: Basic Usage
description: Basic usage of the Diffbot Events API
---

This tutorial will show you how to use the Events API (BETA). The Diffbot Events API BETA is designed to facilitate the extraction of online and in-person event data for individual events. Support for multi-day, multi-track events, i.e. full conferences and festivals, is planned for a future release.

The BETA program enables you to extract data for 

a meetup (in Lake Tahoe or another location): 
https://www.meetup.com/BAS-G1Outdoors/events/271921536/

or an online networking event: 
https://www.eventbrite.ca/e/relit-2020-bring-your-brave-tickets-109259768910

or a live stream: 
https://www.cnbcevents.com/smallbusinessplaybook/

To try out the API directly, insert your token into one or more of these API calls:
- http://api.diffbot.com/v3/event?token=YOURTOKEN&url=https://www.meetup.com/BAS-G1Outdoors/events/271921536/
- http://api.diffbot.com/v3/event?token=YOURTOKEN&url=https://www.eventbrite.ca/e/relit-2020-bring-your-brave-tickets-109259768910
- http://api.diffbot.com/v3/event?token=YOURTOKEN&url=https://www.cnbcevents.com/smallbusinessplaybook/

or use the Analyze API.

For full developer API documentation go here: https://docs.diffbot.com/docs/en/api-intro-events


