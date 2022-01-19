---
id: kg-article-categories-list
title: Article Categories
onPageNav: false
---

Article categories provide structured context to the topic discussed in a particular piece of text. Unlike [tags](kg-ont-article#tags), categories describe the text as a whole and tend to be more abstract. 

Categories are fully supported for article data types across all relevant Diffbot products, including Extract, Crawl, and Knowledge Graph.

Here's a sample request to extract categories alongside your article extraction —


```python
https://api.diffbot.com/v3/article?token=TOKEN&url=https://blog.diffbot.com/a-less-biased-way-to-discern-media-bias-using-knowledge-graph-enhanced-ai/&naturalLanguage=categories
```

To search the Knowledge Graph for articles falling under a particular category, [try this DQL](https://app.diffbot.com/search/?query=type%3AArticle+categories.name%3A%22Acquisitions%2C+Mergers+and+Takeovers%22&from=0&size=25&output_format=&kgversion=) —

```python
type:Article categories.name:"Acquisitions, Mergers and Takeovers"
```

The category list below outlines all possible categories that may be returned by Diffbot Extract.

| Primary Category    | Secondary Category | Tertiary Category                   |  Quaternary Category |
| ------------------- | ------------------ | ----------------------------------- | ---- |
|  Automotive         |                   |   |  |
|          |  Auto Body Styles                 |  |  |
|          |                  | Commercial Trucks  |  |
|          |                  | Convertible  |  |
|          |                  | Coupe  |  |
|          |                  | Crossover  |  |
|          |                  | Hatchback  |  |
|          |                  | Minivan  |  |
|          |                  | Off-Road Vehicles  |  |
|          |                  | Pickup Trucks  |  |
|          |                  | SUV  |  |
|          |                  | Sedan  |  |
|          |                  | Van  |  |
|          |  Auto Buying and Selling                 |  |  |
|          |  Auto Insurance                 |  |  |
|          |  Auto Parts                 |  |  |
|          |  Auto Recalls                 |  |  |
|          |  Auto Rentals                 |  |  |
|          |  Auto Repair                 |  |  |
|          |  Auto Safety                 |  |  |
|          |  Auto Shows                 |  |  |
|          |  Auto Type                 |  |  |
|          |                  | Budget Cars  |  |
|          |                  | Certified Pre-Owned Cars  |  |
|          |                  | Classic Cars  |  |
|          |                  | Concept Cars  |  |
|          |                  | Driverless Cars  |  |
|          |                  | Green Vehicles  |  |
|          |                  | Luxury Cars  |  |
|          |                  | Performance Cars  |  |
|          |  Car Culture                 |  |  |
|          |  Motorcycles                 |  |  |
|          |  Scooters                 |  |  |
|  Careers         |                   |   |  |
|          |  Apprenticeships                 |  |  |
|          |  Career Advice                 |  |  |
|          |  Career Planning                 |  |  |
|          |  Job Search                 |  |  |
|          |  Remote Working                 |  |  |
|          |  Vocational Training                 |  |  |
|  Education         |                   |   |  |
|          |  Adult Education                 |  |  |
|          |  College Education                 |  |  |
|          |  Early Childhood Education                 |  |  |
|          |  Educational Assessment                 |  |  |
|          |  Homeschooling                 |  |  |
|          |  Homework and Study                 |  |  |
|          |  Language Learning                 |  |  |
|          |  Online Education                 |  |  |
|          |  Primary Education                 |  |  |
|          |  Private School                 |  |  |
|          |  Secondary Education                 |  |  |
|          |  Special Education                 |  |  |
|  Events and Attractions         |                   |   |  |
|          |  Amusement and Theme Parks                 |  |  |
|          |  Bars &amp; Restaurants                 |  |  |
|          |  Business Expos &amp; Conferences                 |  |  |
|          |  Casinos &amp; Gambling                 |  |  |
|          |  Comedy Events                 |  |  |
|          |  Concerts &amp; Music Events                 |  |  |
|          |  Historic Site and Landmark Tours                 |  |  |
|          |  Museums &amp; Galleries                 |  |  |
|          |  Musicals                 |  |  |
|          |  National &amp; Civic Holidays                 |  |  |
|          |  Nightclubs                 |  |  |
|          |  Outdoor Activities                 |  |  |
|          |  Parks &amp; Nature                 |  |  |
|          |  Party Supplies and Decorations                 |  |  |
|          |  Zoos &amp; Aquariums                 |  |  |
|  Family and Relationships         |                   |   |  |
|          |  Bereavement                 |  |  |
|          |  Dating                 |  |  |
|          |  Divorce                 |  |  |
|          |  Eldercare                 |  |  |
|          |  Parenting                 |  |  |
|  Fine Art         |                   |   |  |
|          |  Digital Arts                 |  |  |
|          |  Modern Art                 |  |  |
|          |  Opera                 |  |  |
|          |  Theater                 |  |  |
|  Food &amp; Drink         |                   |   |  |
|          |  Alcoholic Beverages                 |  |  |
|          |  Barbecues and Grilling                 |  |  |
|          |  Cooking                 |  |  |
|          |  Desserts and Baking                 |  |  |
|          |  Dining Out                 |  |  |
|          |  Food Allergies                 |  |  |
|          |  Healthy Cooking and Eating                 |  |  |
|          |  Non-Alcoholic Beverages                 |  |  |
|          |  Vegan Diets                 |  |  |
|          |  Vegetarian Diets                 |  |  |
|  Healthy Living         |                   |   |  |
|          |  Fitness and Exercise                 |  |  |
|          |  Men&#39;s Health                 |  |  |
|          |  Nutrition                 |  |  |
|          |  Senior Health                 |  |  |
|          |  Weight Loss                 |  |  |
|          |  Wellness                 |  |  |
|          |  Women&#39;s Health                 |  |  |
|  Hobbies &amp; Interests         |                   |   |  |
|          |  Antiquing and Antiques                 |  |  |
|          |  Arts and Crafts                 |  |  |
|          |  Beekeeping                 |  |  |
|          |  Birdwatching                 |  |  |
|          |  Cigars                 |  |  |
|          |  Musical Instruments                 |  |  |
|  Home &amp; Garden         |                   |   |  |
|          |  Gardening                 |  |  |
|          |  Home Appliances                 |  |  |
|          |  Home Improvement                 |  |  |
|          |  Home Security                 |  |  |
|          |  Interior Decorating                 |  |  |
|          |  Landscaping                 |  |  |
|          |  Remodeling &amp; Construction                 |  |  |
|          |  Smart Home                 |  |  |
|  Medical Health         |                   |   |  |
|          |  Cosmetic Medical Services                 |  |  |
|          |  Diseases and Conditions                 |  |  |
|          |                  | Allergies  |  |
|          |                  | Blood Disorders  |  |
|          |                  | Bone and Joint Conditions  |  |
|          |                  | Brain and Nervous System Disorders  |  |
|          |                  | Cancer  |  |
|          |                  | Cold and Flu  |  |
|          |                  | Dental Health  |  |
|          |                  | Diabetes  |  |
|          |                  | Digestive Disorders  |  |
|          |                  | Ear, Nose and Throat Conditions  |  |
|          |                  | Endocrine and Metabolic Diseases  |  |
|          |                  |   | Hormonal Disorders |
|          |                  |   | Menopause |
|          |                  |   | Thyroid Disorders |
|          |                  | Eye and Vision Conditions  |  |
|          |                  | Foot Health  |  |
|          |                  | Heart and Cardiovascular Diseases  |  |
|          |                  | Infectious Diseases  |  |
|          |                  | Injuries  |  |
|          |                  |   | First Aid |
|          |                  | Lung and Respiratory Health  |  |
|          |                  | Mental Health  |  |
|          |                  | Reproductive Health  |  |
|          |                  |   | Birth Control |
|          |                  |   | Infertility |
|          |                  |   | Pregnancy |
|          |                  | Sexual Health  |  |
|          |                  |   | Sexual Conditions |
|          |                  | Skin and Dermatology  |  |
|          |                  | Sleep Disorders  |  |
|          |                  | Substance Abuse  |  |
|          |  Medical Tests                 |  |  |
|          |  Surgery                 |  |  |
|          |  Vaccines                 |  |  |
|  Movies         |                   |   |  |
|  Music and Audio         |                   |   |  |
|  News and Politics         |                   |   |  |
|          |  Crime                 |  |  |
|          |  Disasters                 |  |  |
|          |  Law                 |  |  |
|          |  Politics                 |  |  |
|          |                  | Elections  |  |
|          |                  | Political Issues  |  |
|          |                  | War and Conflicts  |  |
|          |  Weather                 |  |  |
|  Personal Finance         |                   |   |  |
|          |  Financial Assistance                 |  |  |
|          |  Financial Planning                 |  |  |
|          |  Frugal Living                 |  |  |
|          |  Insurance                 |  |  |
|          |  Personal Investing                 |  |  |
|          |  Retirement Planning                 |  |  |
|  Books and Literature         |                   |   |  |
|          |  Biographies                 |  |  |
|          |  Cookbooks                 |  |  |
|          |  Poetry                 |  |  |
|  Pets         |                   |   |  |
|          |  Birds                 |  |  |
|          |  Cats                 |  |  |
|          |  Dogs                 |  |  |
|          |  Pet Supplies                 |  |  |
|          |  Reptiles                 |  |  |
|          |  Veterinary Medicine                 |  |  |
|  Pop Culture         |                   |   |  |
|          |  Celebrity Deaths                 |  |  |
|          |  Celebrity Homes                 |  |  |
|          |  Celebrity Style                 |  |  |
|          |  Humor and Satire                 |  |  |
|  Real Estate         |                   |   |  |
|  Religion &amp; Spirituality         |                   |   |  |
|          |  Astrology                 |  |  |
|          |  Atheism                 |  |  |
|          |  Buddhism                 |  |  |
|          |  Christianity                 |  |  |
|          |  Hinduism                 |  |  |
|          |  Islam                 |  |  |
|          |  Judaism                 |  |  |
|          |  Spirituality                 |  |  |
|  Science         |                   |   |  |
|          |  Biological Sciences                 |  |  |
|          |  Chemistry                 |  |  |
|          |  Environment                 |  |  |
|          |  Genetics                 |  |  |
|          |  Geography                 |  |  |
|          |  Geology                 |  |  |
|          |  Physics                 |  |  |
|          |  Space and Astronomy                 |  |  |
|  Shopping         |                   |   |  |
|          |  Coupons and Discounts                 |  |  |
|          |  Flower Shopping                 |  |  |
|          |  Gifts and Greetings Cards                 |  |  |
|          |  Grocery Shopping                 |  |  |
|          |  Holiday Shopping                 |  |  |
|  Sports         |                   |   |  |
|          |  American Football                 |  |  |
|          |  Australian Rules Football                 |  |  |
|          |  Auto Racing                 |  |  |
|          |  Badminton                 |  |  |
|          |  Baseball                 |  |  |
|          |  Basketball                 |  |  |
|          |  Bodybuilding                 |  |  |
|          |  Bowling                 |  |  |
|          |  Boxing                 |  |  |
|          |  College Sports                 |  |  |
|          |                  | College Baseball  |  |
|          |                  | College Basketball  |  |
|          |                  | College Football  |  |
|          |  Cricket                 |  |  |
|          |  Cycling                 |  |  |
|          |  Darts                 |  |  |
|          |  Disabled Sports                 |  |  |
|          |  Diving                 |  |  |
|          |  Extreme Sports                 |  |  |
|          |                  | Canoeing and Kayaking  |  |
|          |                  | Climbing  |  |
|          |                  | Scuba Diving  |  |
|          |                  | Skateboarding  |  |
|          |                  | Snowboarding  |  |
|          |                  | Surfing and Bodyboarding  |  |
|          |  Fantasy Sports                 |  |  |
|          |  Field Hockey                 |  |  |
|          |  Figure Skating                 |  |  |
|          |  Golf                 |  |  |
|          |  Gymnastics                 |  |  |
|          |  Horse Racing                 |  |  |
|          |  Ice Hockey                 |  |  |
|          |  Lacrosse                 |  |  |
|          |  Martial Arts                 |  |  |
|          |  Olympic Sports                 |  |  |
|          |                  | Summer Olympic Sports  |  |
|          |                  | Winter Olympic Sports  |  |
|          |  Poker and Professional Gambling                 |  |  |
|          |  Rodeo                 |  |  |
|          |  Rowing                 |  |  |
|          |  Rugby                 |  |  |
|          |  Sailing                 |  |  |
|          |  Skiing                 |  |  |
|          |  Snooker&#x2F;Pool&#x2F;Billiards                 |  |  |
|          |  Soccer                 |  |  |
|          |  Softball                 |  |  |
|          |  Sports Equipment                 |  |  |
|          |  Squash                 |  |  |
|          |  Swimming                 |  |  |
|          |  Table Tennis                 |  |  |
|          |  Tennis                 |  |  |
|          |  Track and Field                 |  |  |
|          |  Volleyball                 |  |  |
|          |  Walking                 |  |  |
|          |  Water Polo                 |  |  |
|          |  Weightlifting                 |  |  |
|          |  Wrestling                 |  |  |
|  Business and Finance         |                   |   |  |
|          |  Business                 |  |  |
|          |                  | Awards  |  |
|          |                  | Business Accounting &amp; Finance  |  |
|          |                  | Business Administration  |  |
|          |                  | Business Banking &amp; Finance  |  |
|          |                  |   | Acquisitions, Mergers and Takeovers |
|          |                  |   | Angel Investment |
|          |                  |   | Bankruptcy |
|          |                  |   | Business Loans |
|          |                  |   | Debt Factoring &amp; Invoice Discounting |
|          |                  |   | Private Equity |
|          |                  |   | Venture Capital |
|          |                  | Business I.T.  |  |
|          |                  | Business Operations  |  |
|          |                  | Business Utilities  |  |
|          |                  | Consumer Issues  |  |
|          |                  |   | Recalls |
|          |                  | Contracts and Agreements  |  |
|          |                  | Dividends  |  |
|          |                  | Environmental, Social and Governance (ESG)  |  |
|          |                  | Executive Leadership &amp; Management  |  |
|          |                  | Funding  |  |
|          |                  | Government Business  |  |
|          |                  | Green Solutions  |  |
|          |                  | Human Resources  |  |
|          |                  | Intellectual Property  |  |
|          |                  | Investment Opinion  |  |
|          |                  | Large Business  |  |
|          |                  | Logistics  |  |
|          |                  | Marketing and Advertising  |  |
|          |                  | Partnerships and Joint Ventures  |  |
|          |                  | Personnel Changes  |  |
|          |                  | Products and Services Announcements  |  |
|          |                  | Real Estate Transactions  |  |
|          |                  | Sales  |  |
|          |                  | Sales and Earnings  |  |
|          |                  | Small and Medium-sized Business  |  |
|          |                  | Startups  |  |
|          |                  | Stock Offerings and IPOs  |  |
|          |                  | Stock Split  |  |
|          |  Economy                 |  |  |
|          |                  | Commodities  |  |
|          |                  | Currencies  |  |
|          |                  | Financial Crisis  |  |
|          |                  | Financial Reform  |  |
|          |                  | Financial Regulation  |  |
|          |                  | Gasoline Prices, Gas Prices  |  |
|          |                  | Housing Market  |  |
|          |                  | Interest Rates  |  |
|          |                  | Job Market  |  |
|          |  Industries                 |  |  |
|          |                  | Advertising Industry  |  |
|          |                  | Agriculture  |  |
|          |                  | Apparel Industry  |  |
|          |                  | Automotive Industry  |  |
|          |                  | Aviation Industry  |  |
|          |                  | Biotech and Biomedical Industry  |  |
|          |                  | Civil Engineering Industry  |  |
|          |                  | Construction Industry  |  |
|          |                  | Defense Industry  |  |
|          |                  | Education industry  |  |
|          |                  | Entertainment Industry  |  |
|          |                  | Environmental Services Industry  |  |
|          |                  | Financial Industry  |  |
|          |                  | Food Industry  |  |
|          |                  | Healthcare Industry  |  |
|          |                  | Hospitality Industry  |  |
|          |                  | Information Services Industry  |  |
|          |                  | Legal Services Industry  |  |
|          |                  | Logistics and Transportation Industry  |  |
|          |                  | Management Consulting Industry  |  |
|          |                  | Manufacturing Industry  |  |
|          |                  | Mechanical and Industrial Engineering Industry  |  |
|          |                  | Media Industry  |  |
|          |                  | Metals Industry  |  |
|          |                  | Non-Profit Organizations  |  |
|          |                  | Pharmaceutical Industry  |  |
|          |                  | Power and Energy Industry  |  |
|          |                  | Publishing Industry  |  |
|          |                  | Real Estate Industry  |  |
|          |                  | Retail Industry  |  |
|          |                  | Technology Industry  |  |
|          |                  | Telecommunications Industry  |  |
|  Style &amp; Fashion         |                   |   |  |
|          |  Beauty                 |  |  |
|          |  Body Art                 |  |  |
|          |  Fashion Trends                 |  |  |
|  Technology &amp; Computing         |                   |   |  |
|          |  Artificial Intelligence                 |  |  |
|          |  Augmented Reality                 |  |  |
|          |  Computing                 |  |  |
|          |                  | Computer Networking  |  |
|          |                  | Computer Peripherals  |  |
|          |                  | Computer Software and Applications  |  |
|          |                  |   | 3-D Graphics |
|          |                  |   | Antivirus Software |
|          |                  |   | Browsers |
|          |                  |   | Computer Animation |
|          |                  |   | Databases |
|          |                  |   | Desktop Publishing |
|          |                  |   | Digital Audio |
|          |                  |   | Graphics Software |
|          |                  |   | Operating Systems |
|          |                  |   | Photo Editing Software |
|          |                  |   | Shareware and Freeware |
|          |                  |   | Video Software |
|          |                  |   | Web Conferencing |
|          |                  | Data Storage and Warehousing  |  |
|          |                  | Desktops  |  |
|          |                  | Information and Network Security  |  |
|          |                  | Internet  |  |
|          |                  |   | Cloud Computing |
|          |                  |   | Email |
|          |                  |   | IT and Internet Support |
|          |                  |   | Internet for Beginners |
|          |                  |   | Internet of Things |
|          |                  |   | Search |
|          |                  |   | Social Networking |
|          |                  |   | Web Design and HTML |
|          |                  |   | Web Development |
|          |                  |   | Web Hosting |
|          |                  | Laptops  |  |
|          |                  | Programming Languages  |  |
|          |  Consumer Electronics                 |  |  |
|          |                  | Cameras and Camcorders  |  |
|          |                  | Home Entertainment Systems  |  |
|          |                  | Smartphones  |  |
|          |                  | Tablets and E-readers  |  |
|          |                  | Wearable Technology  |  |
|          |  Robotics                 |  |  |
|          |  Virtual Reality                 |  |  |
|  Television         |                   |   |  |
|  Travel         |                   |   |  |
|          |  Travel Locations                 |  |  |
|          |                  | Africa Travel  |  |
|          |                  | Asia Travel  |  |
|          |                  | Europe Travel  |  |
|          |                  | North America Travel  |  |
|          |                  | Polar Travel  |  |
|          |                  | South America Travel  |  |
|          |  Travel Preparation and Advice                 |  |  |
|          |  Travel Type                 |  |  |
|          |                  | Adventure Travel  |  |
|          |                  | Air Travel  |  |
|          |                  | Budget Travel  |  |
|          |                  | Business Travel  |  |
|          |                  | Camping  |  |
|          |                  | Cruises  |  |
|          |                  | Day Trips  |  |
|          |                  | Family Travel  |  |
|          |                  | Honeymoons and Getaways  |  |
|          |                  | Hotels and Motels  |  |
|          |                  | Rail Travel  |  |
|          |                  | Road Trips  |  |
|          |                  | Spas  |  |
|  Video Gaming         |                   |   |  |
|          |  Console Games                 |  |  |
|          |  Mobile Games                 |  |  |
|          |  PC Games                 |  |  |
|          |  eSports                 |  |  |


<style>
/* Hides the Right-Hand Secondary Nav for a Full Width Industry Table */
.onPageNav {
    display: none;
}
/* Hides the Unnecessary Prev/Next Buttons for this Reference Doc */
.docs-prevnext {
    display: none;
}
</style>
