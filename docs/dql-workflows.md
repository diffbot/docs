---
id: dql-workflows
title: DQL Workflow Example
sidebar_label: DQL Workflow Example
---

Crafting a DQL query or queries that may be run in parallel is made easier if at first you define the spectrum of criteria you might want to use to constrain or explore the data. For example, to identify ways you might define a DQL statement or statements that would:

"retrieve all news on 

- M&A transactions
- VC investments
- events
- other major news (partnerships) 

that happened in Silicon Valley in the last Quarter in the Industry Vertical X."

X could be Electric Mobility.

## Step One: Break Out Each Aspect of the Data Need

1. The type of information wanted is news so you’d start with a query using `type:Article`

2. Location constraint: “in Silicon Valley”

    Silicon Valley is generally used to describe only the southern region of the larger San Francisco Bay Area. The Valley's exact boundaries are debatable, but it's centered around Santa Clara County which includes Palo Alto, Mountain View, Sunnyvale, Cupertino, San Jose, Santa Clara, Milpitas, Los Gatos, Campbell, Los Altos, and Stanford. Should we assume it also includes Menlo Park, Burlingame, San Carlos, San Mateo, Oakland, San Francisco, etc., i.e. do you mean the physical region of Silicon Valley or the San Francisco Bay Area where the businesses said to make up Silicon Valley currently operate?

    Given the controversy, Silicon Valley isn’t defined in the KG as a region so you will need to enter each location you are interested in as an OR statement. You can constrain to location entities tagged in the article like:

    `tags.label:or("San Francisco Bay Area", "San Jose", “Santa Clara”, “Cupertino”, “Palo Alto”, “Mountain View”, “Los Altos”, “Sunnyvale”)`

    But for maximum coverage, you’ll want to mine the text for references to a location such as

    `text:or("San Jose", "Santa Clara", "Cupertino", "Palo Alto", "Mountain View", "Los Altos", "Sunnyvale")`

    We are currently investing in aliases for locations that overlap multiple locations (cities, states, etc.) like Silicon Valley and Greater NYC but they are not yet available. We expect to roll them out in Q2 in support of more elaborate dashboards, data exploration, and custom data set definition features and functionality that clients will be able to leverage pre-download.

    To ensure you don’t end up with data for cities outside of CA/California you’ll want to add: `text:OR("CA", "California")`

3. Time constraint: in the last Last Quarter

    Do you mean a rolling 90-day window? The last fiscal or calendar quarter? The current quarter we are about to complete?

    We do have special syntax supporting `lastCrawlDate` which you can specify in minutes (m), hours (h), days (d), weeks (w), or years (y), i.e. you might use `lastCrawlTime<13w` to define a rolling 3-month interval. Alternatively, you could constrain via publication date using: 
    
    `date<91d or estimatedDate<91d `, `date.timestamp>1569801600` or `estimatedDate.timestamp>1569801600`

    We recommend using `lastCrawlTime` for maximum coverage.

    For the current fiscal quarter (spanning Oct-Dec 2019), you might specify a date after 9/30/2019 (the last day of the prior fiscal quarter) represented in UNIX time as `1569801600` and constrain using `lastCrawlTime` with `lastCrawlTime>1569801600` or as `lastCrawlTime>'2019-06-30'`

    To narrow to the last completed fiscal quarter (July - Sept 2019), i.e. crawled after 6/30/2019, on or before 9/30/2019 you would define the date constraint this way:
    
    `lastCrawlTime>1561852800 lastCrawlTime<1569888000` or
    `lastCrawlTime>'2019-06-30' lastCrawlTime<'2019-10-01'`

    And for each of these cases, you will likely want to specify 
    `sortBy:date`
    to sort articles from most recent to least recent publication date.

4. Sources of news about Silicon Valley

    Often the source of the information about a geographic region is also important. There is no requirement to constrain to a source, but if you would like to for less well known publications than The Financial Times or The Wall Street Journal like Silicon Valley Business Journal (bizjournals.com/sanjose/) or SiliconValley.com (operated by the San Jose Mercury News), etc. then you would define a statement like:

    `pageUrl:"bizjournals.com/sanjose/"`
    `pageUrl:"www.bizjournals.com/sanjose/news/"` or 
    `pageUrl:"siliconvalley.com"`

    Currently, these sources are largely behind a paywall or login preventing us from aggregating then in the KG. However, you could aggregate them in a private collection using Crawlbot/ExtractionAPIs and combine them with KG article data.

5. M&A Transactions

    What common terms are used to describe M&A transactions? You’ll want to use OR statements to mine the text of the article, excerpted quotes, tags &/or the title. There is a list of common terms in the Appendix for your reference and a list of the terms most frequently referenced in article text. And, here is an example syntax you can use to mine the text:

    `text:"Silicon Valley" text:or("acquisition", "consolidation", "LOI", "leveraged buyout", "liquidation", "merger", "partnership", "offer price", "stock deal", "investment", "buyout", "IPO", "public offer", "Series A", "Series B", "Series C", "Series D")`

    If you facet by `tags.label`, you can see all of the tags in the article subset selected as well:
    
    `type:Article text:"Silicon Valley" text:or("acquisition", "consolidation", "LOI", "leveraged buyout", "liquidation", "merger", "partnership", "offer price", "stock deal", "buyout") lastCrawlTime>1561852800 facet:tags.label`

    Then you might want to constrain to a `tags.label` like ‘initial public offering’ which appears in the list of facets (labels) using the Diffbot entityID for that tag and the strict operator: `strict:tags.label:"diffbot_com_entity_XEDoCGkjFPfGi4bmKrWidJw"`

    `type:Article text:"Silicon Valley" text:or("acquisition", "consolidation", "leveraged buyout", "liquidation", "merger", "partnership", "offer price", "stock deal", "buyout") lastCrawlTime>1561852800 strict:tags.label:"diffbot_com_entity_XEDoCGkjFPfGi4bmKrWidJw" sortBy:date`

    In general, you will want to optimize the length of your query for performance and efficiency as well as to maximize unique article coverage (i.e. avoid duplication) if you are running more than one query to get at the data. In the Appendix, we have recommended guidelines for how to achieve this.

6. VC Investment

    What common terms are used to describe VC investments? You’ll want to use OR statements to mine the text of the article, excerpted quotes, tags, &/or the title. There is a list of common terms in the Appendix for your reference and a separate list of the terms most frequently referenced in article text. And, here is an example syntax you can use to mine the text:
    
    `type:Article text:"Silicon Valley" text:or("IPO", "public offer", "Series A", "Series B", "Series C", "Series D", "investment") lastCrawlTime>1561852800 facet:tags.label sortBy:date`

    In general, you will want to optimize the length of your query for performance and efficiency as well as to maximize unique article coverage (i.e. avoid duplication) if you are running more than one query to get at the data. In the Appendix, we have recommended guidelines for how to achieve this.

7. Other major news, i.e. partnership announcements
    What labels are commonly used to describe a partnership announcement or similar event in article data (see a brief list of examples below)? These labels will be present only as text strings in the Title or text of the article itself.

    Terms frequently used to describe strategic partnerships include:
    
    - Strategic restructuring
    - Collaboration
    - Alliance
    - Strategic partnership
    - Cooperation
    - Partner
    - Supplier
    - Distributor

    To mine this data you might use a statement like:

    `text:"Silicon Valley" text:or("strategic restructuring", "collaboration", "alliance", "strategic partnership", "cooperation", "partner", "supplier", "distributor")`

    Or

    `title:or("strategic restructuring", "collaboration", "alliance", "strategic partnership", "cooperation", "partner", "supplier", "distributor")`

8. Events

    What labels are commonly used to describe an event in article data (see a brief list of examples below)? These labels will be present only as text strings in the Title or text of the article itself for now. We plan to add Events as entities to the Knowledge Graph in the first half of 2020.

    Terms frequently used to describe an event include:

    - Meeting
    - Conference
    - Roundtable
    - Meetup
    - Panel discussion
    - Pitch event
    - Expo
    - Advisory Board
    - Expert Talk

    To mine this data you might use a statement like:
    
    `text:"Silicon Valley" text:or("meeting", "conference", "roundtable discussion", "panel", "meetup", "Talk", "pitch event", "expo", "advisory board")`

    Or

    `title:or("meeting", "conference", "roundtable discussion", "panel", "meetup", "expert talk", "pitch event", "expo", "advisory board")`

    In the Appendix, we have recommended guidelines for how to optimize queries using these constraints.

9. Organization categories (industry labels)

    What labels are commonly used to describe an industry in article data? In the Appendix is a list of category labels for industries frequently used in online publications (outside of highly structured classification schemes like SIC, NAICs etc.).

    Some of these labels will be present as article tags that you can constrain by, others will exist only as text strings in the Title or text of the article itself. In the Appendix, we have recommended guidelines for how to package a query template into which you can insert each industry of interest to you.

    To mine this data you might use a statement like:

    `text:"robotics"`

    Or

    `tags.label:"robotics"`

    You could also use company names to locate announcements like _Fenwick & West_ or _Sequoia Capital_.

## Step Two: Combine Constraints to Achieve Maximum Coverage and Accuracy with Minimal Duplication

It is important to keep in mind that there is a limit in terms of the number of strings that can be combined in an OR statement (something around 60 terms). You can swap other phrases in for these but you’ll want to limit your statements to something along this length.

`
text:OR("Multiple", "Acquisition", "LOI", "Subsidiary", "Cash flow", "Capitalization", "Consolidation", "EBITDA", "EBITDA", "Warrants", "Goodwill", "Due diligence", "Synergies", "CAPEX", "Dilution", "Economies of scale", "Net debt", "Covenants", "Intangibles", "Preferred stock", "Letter of intent", "Capital structure", "Amalgamation", "Accretion", "Divestiture", "Intrinsic value", "Portfolio company", "Acquirer", "Discontinued Operations", "Offer price", "Restructuring charges", "Angel investor", "Vertical integration", "Term sheet", "Cash consideration", "Recapitalization", "Sensitivity analysis", "Bootstrapping", "Earn out", "Leveraged buyout", "Pari passu", "Deal Structure", "Sandbagging", "Golden parachute", "Backward integration", "Liquidation value", "Purchase price allocation", "Horizontal integration", "Capital asset pricing model", "Pre-money valuation", "Asset deal", "Identifiable assets", "Post-money valuation", "Indication of interest", "Fully diluted shares outstanding", "Normalized earnings", "Stock consideration", "Economies of scope", "Other closing costs", "Tag-along rights", "Drag-along rights", "Confidential Information Memorandum")text:OR("Palo Alto","Mountain View","Sunnyvale","Cupertino","San Jose","Santa Clara","Milpitas","Los Gatos","Campbell","Los Altos","Stanford","Menlo Park","Burlingame","San Carlos","San Mateo","Oakland","San Francisco","San Francisco Bay Area") lastCrawlTime>'2019-06-30' lastCrawlTime<'2019-10-01 tags.label:'INSERT INDUSTRY LABEL or COMPANY NAME' sortBy:date
`

## Step Three: Review Output and Review Constraints

To support the query you will need to compile a series of queries using terms you are most interested in matching. You can swap in the events and partnership terms as their own query or combine them with M&A or VC terms. We’ve compiled the most frequently occurring terms found in the text or articles during the last full calendar quarter as an illustration of a query you might want to run to start: 

`
type:Article text:OR("Acquisition", "LOI", "Subsidiary", "Cash flow", "Capitalization", "Consolidation", "EBITDA", "EBITDA", "Warrants", "Due diligence", "Synergies", "CAPEX", "Dilution", "Economies of scale", "Net debt", "Covenants", "Intangibles", "Preferred stock", "Letter of intent", "Capital structure", "Amalgamation", "Accretion", "Divestiture", "Intrinsic value", "Portfolio company", "Acquirer", "Discontinued Operations", "Offer price", "Restructuring charges", "Angel investor", "Vertical integration", "Term sheet", "Cash consideration", "Recapitalization", "Sensitivity analysis", "Bootstrapping", "Earn out", "Leveraged buyout", "Pari passu", "Deal Structure", "Sandbagging", "Golden parachute", "Backward integration", "Liquidation value", "Purchase price allocation", "Horizontal integration", "Capital asset pricing model", "Pre-money valuation", "Asset deal", "Identifiable assets", "Post-money valuation", "Indication of interest", "Fully diluted shares outstanding", "Normalized earnings", "Stock consideration", "Economies of scope", "Other closing costs", "Tag-along rights", "Drag-along rights", "Confidential Information Memorandum")text:OR("Palo Alto","Mountain View","Sunnyvale","Cupertino","San Jose","Santa Clara","Milpitas","Los Gatos","Campbell","Los Altos","Stanford","Menlo Park","Burlingame","San Carlos","San Mateo","Oakland","San Francisco","San Francisco Bay Area")text:OR("CA", "California") lastCrawlTime>'2019-06-30' lastCrawlTime<'2019-10-01 sortBy:date
`

Then you can swap text or add a `tags.label:'INSERT INDUSTRY LABEL or COMPANY NAME'` constraint if desired.

For example:

`
type:Article text:OR("Acquisition", "LOI", "Subsidiary", "Cash flow", "Capitalization", "Consolidation", "EBITDA", "EBITDA", "Warrants", "Due diligence", "Synergies", "CAPEX", "Dilution", "Economies of scale", "Net debt", "Covenants", "Intangibles", "Preferred stock", "Letter of intent", "Capital structure", "Amalgamation", "Accretion", "Divestiture", "Intrinsic value", "Portfolio company", "Acquirer", "Discontinued Operations", "Offer price", "Restructuring charges", "Angel investor", "Vertical integration", "Term sheet", "Cash consideration", "Recapitalization", "Sensitivity analysis", "Bootstrapping", "Earn out", "Leveraged buyout", "Pari passu", "Deal Structure", "Sandbagging", "Golden parachute", "Backward integration", "Liquidation value", "Purchase price allocation", "Horizontal integration", "Capital asset pricing model", "Pre-money valuation", "Asset deal", "Identifiable assets", "Post-money valuation", "Indication of interest", "Fully diluted shares outstanding", "Normalized earnings", "Stock consideration", "Economies of scope", "Other closing costs", "Tag-along rights", "Drag-along rights", "Confidential Information Memorandum")text:OR("Palo Alto","Mountain View","Sunnyvale","Cupertino","San Jose","Santa Clara","Milpitas","Los Gatos","Campbell","Los Altos","Stanford","Menlo Park","Burlingame","San Carlos","San Mateo","Oakland","San Francisco","San Francisco Bay Area")text:OR("CA", "California") lastCrawlTime>'2019-06-30' lastCrawlTime<'2019-10-01 tags.label:'media' sortBy:date
`

## APPENDIX A: Common Terms Used in M&A transactions and VC Investment

List of common M&A terms:

- Accretion
- EBITDA
- LOI
- Acquirer
- Acquisition
- Amalgamation
- Consolidation
- Angel investor
- Asset deal
- Backward integration
- CAPEX
- Capitalization
- Bootstrapping
- Capital structure
- Capital asset pricing model
- Cash consideration
- Cash flow
- CIM (Confidential Information Memorandum
- Covenants
- Deal Structure
- Dilution
- Discontinued Operations
- Discount for lack of control
- Discount for lack of marketability
- Discount for lack of voting rights
- Divestiture
- Drag-along rights
- Due diligence
- Earn out
- EBITDA
- Exclusivity (no-shop) requirement
- Economies of scale
- Economies of scope
- Fully diluted shares outstanding
- Golden parachute
- Goodwill
- Horizontal integration
- Identifiable assets
- Indication of interest (IOI)
- Intangibles
- Intrinsic value
- Letter of intent (LOI)
- Leveraged buyout
- Liquidation value
- Merger/Statutory
- Multiple
- Net book value of assets
- Net cash/Net debt deal
- Net debt
- Normalized earnings
- Offer price
- Other closing costs
- Pari passu
- Portfolio company
- Post-money valuation
- Pre-money valuation
- Preferred stock
- Pro forma shares outstanding
- Purchase price allocation
- Recapitalization
- Restructuring charges
- Sandbagging
- Sensitivity analysis
- Share/Stock deal
- Stock consideration
- Subsidiary
- Synergies
- Tag-along rights
- Target (Acquiree)
- Term sheet
- Timing of synergies
- Transaction close date
- Vertical integration
- Warrants
- 338(h)(10) election

List of common terms used in VC investment:

- Accelerator
- Accredited Investor
- Angel Investor
- Antidilution
- Assets Under Management
- Benchmark
- Blind Pool
- Board of Directors
- Board-Observer Rights
- Bootstrapped
- Bridge Loan
- Burn Rate
- Buyout
- Cap Table
- Capital Efficiency
- Capped Note
- Capped Participation
- Cash Position
- Closing
- Common Stock
- Conversion
- Convertible Debt
- Convertible Stock
- Corporate VC
- Crossover Investors
- Deal Flow
- Debt Financing
- Dilution
- Disruption
- Direct Financing
- Down Round 
- Due Diligence
- Employee Option Pool
- Entrepreneur in Residence
- Equity
- Exit
- First-Mover Advantage
- First-Round Financing
- Follow-on Investments
- “Friends and Family Round”
- Full Ratchet
- Fund of Funds
- Gamification
- General Partner
- Growth Equity
- Incubator
- Internal Rate of Return
- IPO
- Lead Investor
- Leveraged buyout
- Limited Partner
- Liquidation
- Liquidation Preference
- Liquidation Preference Stacking
- Liquidity Event
- Lock-up Period
- Master Limited Partnership
- Merger
- Mezzanine Debt
- Mezzanine Financing
- Micro VCs
- Monetize
- Non-Participating Preferred Stock
- Paas
- Pari Passu 
- Participating Preferred Stock
- Party Round
- Pay-to-Play
- Piggy Round
- Pitch
- Pivot
- Post-Money Valuation
- Pre-Money Valuation
- Preferred Stock (Preferential Shares)
- Preferred Directors
- Private IPO
- ROI
- Runway
- SaaS
- Seed Money
- Series A Funding
- Series B (and beyond)
- Shares Outstanding
- Shareholder Vote
- Signaling Risk
- Stock Options
- Term Sheet
- Traction
- Treasury Stock
- Uncapped Note
- Unicorn
- Use of Proceeds
- Value-Add Services (or add-on services)
- Valuation
- Venture Capital
- Venture Capitalist
- Vesting
- Voting Rights
- Warrant
- Waterfall Chart
- Weighted Average

## APPENDIX B: Industry tags commonly found on the Web 

- Agricultural Machinery Manufacturers
- Agricultural Organizations
- Air Forces
- Aircraft Manufacturers
- Airlines
- Amusement Park Companies
- Architecture Firms
- Arts Venues
- Banks
- Biotechnology Companies
- Book Publishing Companies
- Broadcasting Companies
- Building Materials Companies
- Bus Manufacturers
- Bus Operating Companies
- Business Intelligence Companies
- Business Software Companies
- Car Manufacturers
- Car Rental Companies
- Casinos
- Cement Companies
- Ceramics Manufacturers
- Chemical Companies
- Cinemas And Movie Theaters
- Clothing Companies
- Cloud Computing Providers
- Coal Companies
- Comics Publishing Companies
- Computer Companies
- Computer Hardware Companies
- Computer Security Companies
- Computer Security Software Companies
- Construction Equipment Manufacturers
- Construction Industry
- Construction Organizations
- Cosmetics Companies
- Crm Software Companies
- Cruise Lines
- Cycle Manufacturers
- Database Companies
- Dentistry
- Development Software Companies
- Drink Companies
- Drinking Establishments
- Educational Organizations
- Electronic Design Automation Companies
- Electronics Companies
- Energy Companies
- Engine Manufacturers
- Entertainment Companies
- Entertainment Venues
- Erp Software Companies
- Event Management Companies
- Explosives Manufacturers
- Fertilizer Companies
- Film Companies
- Film Distributors
- Film Production Companies
- Financial Data Vendors
- Financial Services Companies
- Financial Software Companies
- Financial Technology Companies
- Food And Drink Companies
- Food Companies
- Free Software Companies
- Freight Transport Companies
- Furniture Manufacturers
- Gambling Companies
- Geographic Data And Information Companies
- Government Agencies
- Government Bodies
- Government-Related Organizations
- Health Care
- Health Insurance
- Heating, Ventilation, And Air Conditioning Companies
- Helicopter Operators
- High Fashion Brands
- Home Appliance Manufacturers
- Home Video Distributors
- Hospitality Companies
- Hotels
- Industrial Machine Manufacturers
- Information Technology Consulting Firms
- Insurance Companies
- International Organizations
- Internet Of Things Companies
- Investment Companies
- Jewellery Companies
- Knife Manufacturing Companies
- Law Firms
- Leather Manufacturers
- Libraries
- Luggage Manufacturers
- Machine Manufacturers
- Magazine Publishing Companies
- Marketing Companies
- Matchmaking Software Companies
- Media Companies
- Medical And Health Organizations
- Metal Companies
- Military Academies
- Military Units And Formations
- Mining Companies
- Ministries
- Mortgage Lenders
- Motor Vehicle Manufacturers
- Motorcycle Manufacturers
- Museums
- Music Companies
- Music Equipment Manufacturers
- Music Production Companies
- Music Publishing Companies
- National Academies
- Natural Gas Companies
- Networking Companies
- Newspaper Companies
- Oil Companies
- Online Publishing Companies
- Online Retailers
- Optics Manufacturing Companies
- Packaging Companies
- Paint Manufacturers
- Peer-To-Peer Lending Companies
- Pen Manufacturers
- Performing Arts Companies
- Petrochemical Companies
- Pharmaceutical Companies
- Pharmacy
- Photography Companies
- Plastics Companies
- Political Parties
- Polling Companies
- Postal Organizations
- Primary Industries
- Public Transport Operators
- Pulp And Paper Companies
- Radio Stations
- Railway Companies
- Real Estate Companies
- Renewable Energy Companies
- Research Institutes
- Restaurants
- Retailers
- Schools
- Security Companies
- Semiconductor Companies
- Service Industries
- Sex Businesses
- Shipbuilding Companies
- Shoe Brands
- Shopping Delivery Services
- Software Companies
- Spacecraft Manufacturers
- Special Effects Companies
- Sporting Goods Manufacturers
- Sports Clubs
- Sportswear Brands
- Stock Exchanges
- Technology Companies
- Telecommunications Companies
- Television Companies
- Textile Industry
- Textile Mills
- Textile Organizations
- Tobacco Companies
- Tool Manufacturers
- Toy Companies
- Tractor Manufacturers
- Transport Companies
- Travel Agencies
- Truck Manufacturers
- Underwear Brands
- Universities And Colleges
- Video Game Companies
- Watch Manufacturing Companies
- Weapons Manufacturing Companies
- Wholesalers
- Zoos

