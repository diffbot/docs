---
id: kg-ont-product
title: Product
---

The product entity type encompasses products found throughout the web known to the Knowledge Graph. 

Note that fields are not guaranteed to exist in every entity record.

>New to the Diffbot Knowledge Graph? [Start here](dql-quickstart).

## Product Fields
* [availability](#availability) 
* [brand](#brand) 
* [breadcrumb](#breadcrumb) 
* [category](#category) 
* [discussion](#discussion) 
* [images](#images) 
* [isbn](#isbn) 
* [language](#language) 
* [mpn](#mpn) 
* [multipleProducts](#multipleproducts) 
* [offerPrice](#offerprice) 
* [offerPriceDetails](#offerpricedetails) 
* [prefixCode](#prefixcode) 
* [productId](#productid) 
* [productOrigin](#productorigin) 
* [regularPrice](#regularprice) 
* [regularPriceDetails](#regularpricedetails) 
* [saveAmount](#saveamount) 
* [saveAmountDetails](#saveamountdetails) 
* [shippingAmount](#shippingamount) 
* [sku](#sku) 
* [text](#text) 
* [title](#title) 
* [upc](#upc) 

## Product Field Details
Note that certain longer field examples may be truncated for readability.

### availability
  
* **Type:** Boolean
* **Example:**
```
{
	"availability": false
}
```
### brand
  
* **Type:** String
* **Example:**
```
{
	"brand": "Digital Decor"
}
```
### breadcrumb
  
* **Type:** GlobalIndexBreadcrumb
* **Example:**
```
{
	"breadcrumb": []
}
```
### category
  
* **Type:** String
* **Example:**
```
{
	"category": "Indoor Living"
}
```
### discussion
  
* **Type:** GIDiscussionField
* **Example:**
```
{
	"discussion": {
		"summary": "Digital Decor Set of Two (2) Premium Gold Down Alternative Sleeping Pillows PLUS 2 FREE Pillowcases",
		"numPages": 1,
		"image": "",
		"name": "Digital Decor Set of Two (2) Premium Gold Down Alternative Sleeping Pillows PLUS 2 FREE Pillowcases",
		"numPosts": 8,
		"title": "Digital Decor Set of Two (2) Premium Gold Down Alternative Sleeping Pillows PLUS 2 FREE Pillowcases",
		"posts": [
			{
				"date": {
					"str": "d2017-06-29T00:00",
					"precision": 4,
					"timestamp": 1498694400000
				},
				"summary": "Because buy these.\nI'm a freak about my bed being my #1 spot for comfort. I've been using the same d...",
				"image": "",
				"author": "Jayme B",
				"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AGMHFY23GL6KJMTJCPDPAS6K7MYA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
				"name": "Because buy these.\nI'm a freak...",
				"language": "en",
				"html": "<p>Because buy these.</p>\n<p>I'm a freak about my bed being my #1 spot for comfort. I've been using the same damn feather pillows almost five years, and I simply cannot take it anymore! They're so comfortable to sleep on (layered with multiple pillowcases to keep my face from getting poked by feathers), but they're such a mess! I think I'll find little feathers in my belongings forever until I die. They. Are. LITERALLY. Everywhere.</p>\n<p>Anyways, I purchased these pillows after reading reviews, which were obviously great considering I bought them, but I was still a skeptic because I was so used to sleeping on the same feather pillows for years. The packaging was really cute -- tied with a white, silky bow. Inside, the pillows were wrapped in plastic with all the air sucked out. They were completely flat, which made me nervous. I need fluffy. Still skeptical, but remembering the reviews said the pillows needed to be fluffed, I took them out of the plastic...</p>\n<p>EXPECTATIONS -- BLOWN. AWAY.</p>\n<p>They're just as soft, mushy, and all-around comfortable as my feathers pillows are. I can enjoy these and not getting stabbed in the face by feathers and still have the comfort of cuddling with a fluffy pillow!</p>\n<p>If you're a miserable person/like your pillows firm, you will hate this product. If you're a normal human-being, you'll be like me and write a review about them after opening because BUY THESE!</p>\n<p>In regard to price - these pillows cost at least half the price of my feather pillows. They also relieve some emotional stress because I no longer have to worry about finding new feathers stuck in my panties' fabric after wondering why I was feeling something prick me all day. 🙌🏼</p>",
				"pageUrl": "https://www.amazon.com/Digital-Decor-Alternative-Sleeping-Pillowcases/dp/B017MA074Y",
				"id": 0,
				"text": "Because buy these.\nI'm a freak about my bed being my #1 spot for comfort. I've been using the same damn feather pillows almost five years, and I simply cannot take it anymore! They're so comfortable to sleep on (layered with multiple pillowcases to keep my face from getting poked by feathers), but they're such a mess! I think I'll find little feathers in my belongings forever until I die. They. Are. LITERALLY. Everywhere.\nAnyways, I purchased these pillows after reading reviews, which were obviously great considering I bought them, but I was still a skeptic because I was so used to sleeping on the same feather pillows for years. The packaging was really cute -- tied with a white, silky bow. Inside, the pillows were wrapped in plastic with all the air sucked out. They were completely flat, which made me nervous. I need fluffy. Still skeptical, but remembering the reviews said the pillows needed to be fluffed, I took them out of the plastic...\nEXPECTATIONS -- BLOWN. AWAY.\nThey're just as soft, mushy, and all-around comfortable as my feathers pillows are. I can enjoy these and not getting stabbed in the face by feathers and still have the comfort of cuddling with a fluffy pillow!\nIf you're a miserable person/like your pillows firm, you will hate this product. If you're a normal human-being, you'll be like me and write a review about them after opening because BUY THESE!\nIn regard to price - these pillows cost at least half the price of my feather pillows. They also relieve some emotional stress because I no longer have to worry about finding new feathers stuck in my panties' fabric after wondering why I was feeling something prick me all day. 🙌🏼"
			},
			{
				"date": {
					"str": "d2017-06-01T00:00",
					"precision": 4,
					"timestamp": 1496275200000
				},
				"summary": "received a tiny box with 2 flat-as-a-pancake pillows folded in half. Was disappointed until I broke ...",
				"image": "",
				"author": "Amazon Customer",
				"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AE7TGXIJ7M6WRFLJ77XFNEELCPOA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
				"name": "received a tiny box with 2 fla...",
				"language": "en",
				"html": "<p>received a tiny box with 2 flat-as-a-pancake pillows folded in half. Was disappointed until I broke the seal on the bag. I couldn't unpack them fast enough! Better than a down pillow by far. If you're expecting a firm pillow, don't order. BUT if you want plush and snuggly, this is perfect!!!! Is it available in king size?</p>",
				"pageUrl": "https://www.amazon.com/Digital-Decor-Alternative-Sleeping-Pillowcases/dp/B017MA074Y",
				"id": 1,
				"text": "received a tiny box with 2 flat-as-a-pancake pillows folded in half. Was disappointed until I broke the seal on the bag. I couldn't unpack them fast enough! Better than a down pillow by far. If you're expecting a firm pillow, don't order. BUT if you want plush and snuggly, this is perfect!!!! Is it available in king size?"
			},
			{
				"date": {
					"str": "d2017-07-10T00:00",
					"precision": 4,
					"timestamp": 1499644800000
				},
				"summary": "I hardly ever take the time to write reviews (sorry) but I just had to for these pillows. They are g...",
				"image": "",
				"author": "L",
				"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AHA2GWUY32DTXOWPJP3V76M7N4KA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
				"name": "I hardly ever take the time to...",
				"language": "en",
				"html": "<p>I hardly ever take the time to write reviews (sorry) but I just had to for these pillows. They are great - very comfy and fluffy; they cradle your head perfectly without mushing down flat. I have neck issues, and these pillows keep my spine aligned without being too stiff. I ordered 6 to replace our pillows, and also some extra pillows. They were vacuum sealed and contained in a small box. So nice-they will be so easy to store - they don't take up much room. I placed my usual pillow cases over the ones that came with the pillows. I assume the extra cases will keep the pillows protected for longer.</p>",
				"pageUrl": "https://www.amazon.com/Digital-Decor-Alternative-Sleeping-Pillowcases/dp/B017MA074Y",
				"id": 2,
				"text": "I hardly ever take the time to write reviews (sorry) but I just had to for these pillows. They are great - very comfy and fluffy; they cradle your head perfectly without mushing down flat. I have neck issues, and these pillows keep my spine aligned without being too stiff. I ordered 6 to replace our pillows, and also some extra pillows. They were vacuum sealed and contained in a small box. So nice-they will be so easy to store - they don't take up much room. I placed my usual pillow cases over the ones that came with the pillows. I assume the extra cases will keep the pillows protected for longer."
			},
			{
				"date": {
					"str": "d2017-05-22T00:00",
					"precision": 4,
					"timestamp": 1495411200000
				},
				"summary": "Do not buy these. When I received these, the end seam was split on one pillow exposing stuffing. The...",
				"image": "",
				"author": "Margaret Godfrey",
				"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AF2FU53KMWBOGMYNAHKM4KE5OMDA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
				"name": "Do not buy these. When I recei...",
				"language": "en",
				"html": "<p>Do not buy these. When I received these, the end seam was split on one pillow exposing stuffing. The pillow cases are extremely rough. All in all poor quality. I had overnight guests arriving and this was forced to see up pillow seam in order to use it.</p>",
				"pageUrl": "https://www.amazon.com/Digital-Decor-Alternative-Sleeping-Pillowcases/dp/B017MA074Y",
				"id": 3,
				"text": "Do not buy these. When I received these, the end seam was split on one pillow exposing stuffing. The pillow cases are extremely rough. All in all poor quality. I had overnight guests arriving and this was forced to see up pillow seam in order to use it."
			},
			{
				"date": {
					"str": "d2018-02-20T00:00",
					"precision": 4,
					"timestamp": 1519084800000
				},
				"summary": "I ordered these 2 pillows for my guest bedroom and they came super quickly (you can't beat the price...",
				"image": "",
				"author": "Bradley",
				"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AGL3Z5FQLJBNS43GKNO2OIYIHHRA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
				"name": "I ordered these 2 pillows for ...",
				"language": "en",
				"html": "<p>I ordered these 2 pillows for my guest bedroom and they came super quickly (you can't beat the price either). They come vacuum sealed but upon opening them, within a few hours, they are large and plush. I didn't notice any smell, but before I used them I tossed them in the dryer (medium heat) with a damp towel and dryer sheet.</p>\n<p>These pillows are literally the definition of a standard pillow. Neither firm nor soft, they are the perfect balance of in-between if that's what you're looking for. I wouldn't want to sleep on them every single night, but they are great for a guest/spare bedroom.</p>",
				"pageUrl": "https://www.amazon.com/Digital-Decor-Alternative-Sleeping-Pillowcases/dp/B017MA074Y",
				"id": 4,
				"text": "I ordered these 2 pillows for my guest bedroom and they came super quickly (you can't beat the price either). They come vacuum sealed but upon opening them, within a few hours, they are large and plush. I didn't notice any smell, but before I used them I tossed them in the dryer (medium heat) with a damp towel and dryer sheet.\nThese pillows are literally the definition of a standard pillow. Neither firm nor soft, they are the perfect balance of in-between if that's what you're looking for. I wouldn't want to sleep on them every single night, but they are great for a guest/spare bedroom."
			},
			{
				"date": {
					"str": "d2017-02-02T00:00",
					"precision": 4,
					"timestamp": 1485993600000
				},
				"summary": "LOVE the pillows.. They are exactly as I thought they would be... I had to contact the Seller and th...",
				"image": "",
				"author": "brenda",
				"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AE7YYPF4VNJHQBXPYLEBVEUBJOMQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
				"name": "LOVE the pillows.. They are ex...",
				"language": "en",
				"html": "<p>LOVE the pillows.. They are exactly as I thought they would be... I had to contact the Seller and they are AWESOME people to do business with.. I would recommend these pillows to anyone.. Very pleased with them...</p>",
				"pageUrl": "https://www.amazon.com/Digital-Decor-Alternative-Sleeping-Pillowcases/dp/B017MA074Y",
				"id": 5,
				"text": "LOVE the pillows.. They are exactly as I thought they would be... I had to contact the Seller and they are AWESOME people to do business with.. I would recommend these pillows to anyone.. Very pleased with them..."
			},
			{
				"date": {
					"str": "d2017-06-07T00:00",
					"precision": 4,
					"timestamp": 1496793600000
				},
				"summary": "These weren't bad pillows at all. The cases are a bit rough, but nothing a good washing didn't fix. ...",
				"image": "",
				"author": "Shade Koopa",
				"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AFJ42TVXCTZIRESNV7VXXRF5DGZA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
				"name": "These weren't bad pillows at a...",
				"language": "en",
				"html": "<p>These weren't bad pillows at all. The cases are a bit rough, but nothing a good washing didn't fix. They did have a &quot;new pillow&quot; smell but again, washing or Febreze will take care of it. Comfortable to sleep on and didn't give me a headache like my usual standards pillow do. I don't see them lasting too long, but still a good pillow to have.</p>",
				"pageUrl": "https://www.amazon.com/Digital-Decor-Alternative-Sleeping-Pillowcases/dp/B017MA074Y",
				"id": 6,
				"text": "These weren't bad pillows at all. The cases are a bit rough, but nothing a good washing didn't fix. They did have a \"new pillow\" smell but again, washing or Febreze will take care of it. Comfortable to sleep on and didn't give me a headache like my usual standards pillow do. I don't see them lasting too long, but still a good pillow to have."
			},
			{
				"date": {
					"str": "d2017-07-21T00:00",
					"precision": 4,
					"timestamp": 1500595200000
				},
				"summary": "Poor quality outer fabric, not the same one ot the other, and smells terrible. No hotel i ever staye...",
				"image": "",
				"author": "Knobsandfaders",
				"authorUrl": "https://www.amazon.com/gp/profile/amzn1.account.AGMCYVTORI7FEJAUHZLRCCOJXXWA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
				"name": "Poor quality outer fabric, not...",
				"language": "en",
				"html": "<p>Poor quality outer fabric, not the same one ot the other, and smells terrible. No hotel i ever stayed in had such awful pillows. The end they are filled from is practically empty and the 'down alternative' doesnt seem to be able to be repositioned. Seems more like stuffing. The 'free pillow cases' are just more if the same awful fabric used as the outer pillow. Thin, rough, with dirt already on them. Really disappointed in this purchase. I don't underatand all the good reviews. They were very slow to ship so maybe they had to outsource to a bad factory someplace.</p>",
				"pageUrl": "https://www.amazon.com/Digital-Decor-Alternative-Sleeping-Pillowcases/dp/B017MA074Y",
				"id": 7,
				"text": "Poor quality outer fabric, not the same one ot the other, and smells terrible. No hotel i ever stayed in had such awful pillows. The end they are filled from is practically empty and the 'down alternative' doesnt seem to be able to be repositioned. Seems more like stuffing. The 'free pillow cases' are just more if the same awful fabric used as the outer pillow. Thin, rough, with dirt already on them. Really disappointed in this purchase. I don't underatand all the good reviews. They were very slow to ship so maybe they had to outsource to a bad factory someplace."
			}
		],
		"numParticipants": 8
	}
}
```
### images
  
* **Type:** GlobalIndexImage
* **Example:**
```
{
	"images": [
		{
			"summary": "",
			"image": "https://images-na.ssl-images-amazon.com/images/I/51y5AzETmPL.jpg",
			"naturalHeight": 379,
			"name": "",
			"url": "https://images-na.ssl-images-amazon.com/images/I/51y5AzETmPL.jpg",
			"naturalWidth": 569
		}
	]
}
```
### isbn
  
* **Type:** String
* **Example:**
```
{
	"isbn": ""
}
```
### language
  
* **Type:** String
* **Example:**
```
{
	"language": "en"
}
```
### mpn
  
* **Type:** String
* **Example:**
```
{
	"mpn": ""
}
```
### multipleProducts
  
* **Type:** Boolean
* **Example:**
```
{
	"multipleProducts": false
}
```
### offerPrice
  
* **Type:** String
* **Example:**
```
{
	"offerPrice": "$18.99"
}
```
### offerPriceDetails
  
* **Type:** PriceDetails
* **Example:**
```
{
	"offerPriceDetails": {
		"symbol": "$",
		"amount": 18.99,
		"text": "$18.99"
	}
}
```
### prefixCode
  
* **Type:** String
* **Example:**
```
{
	"prefixCode": ""
}
```
### productId
  
* **Type:** String
* **Example:**
```
{
	"productId": "B017MA074Y"
}
```
### productOrigin
  
* **Type:** String
* **Example:**
```
{
	"productOrigin": ""
}
```
### regularPrice
  
* **Type:** String
* **Example:**
```
{
	"regularPrice": "$59.99"
}
```
### regularPriceDetails
  
* **Type:** PriceDetails
* **Example:**
```
{
	"regularPriceDetails": {
		"symbol": "$",
		"amount": 59.99,
		"text": "$59.99"
	}
}
```
### saveAmount
  
* **Type:** String
* **Example:**
```
{
	"saveAmount": "$41.00"
}
```
### saveAmountDetails
  
* **Type:** PriceDetails
* **Example:**
```
{
	"saveAmountDetails": {
		"symbol": "$",
		"amount": 41,
		"text": "$41.00"
	}
}
```
### shippingAmount
  
* **Type:** String
* **Example:**
```
{
	"shippingAmount": ""
}
```
### sku
  
* **Type:** String
* **Example:**
```
{
	"sku": "B017MA074Y"
}
```
### text
  
* **Type:** String
* **Example:**
```
{
	"text": "100% Cotton Hypoallergenic Outer Fabric\n Made in USA\n DREAMY RESTFUL SLUMBER: Sink into our sleeping pillows and drift to sleep on soft clouds of comfort!\n HIGH THREAD COUNT: Pillows for sleeping with a T200 thread count for coolness and breath-ability\n 100% HYPOALLERGENIC PILLOW: Dust Mite Resistant and Down alternative pillow - gentle Virgin Polyester filling. No Irritation\n EVERY KIND OF SLEEPER: Hotel & bed pillows perfect for all back, stomach & side sleepers out there!\n MADE IN USA QUALITY: A sleeping pillow you can count on - crafted from Made in US premium materials."
}
```
### title
  
* **Type:** String
* **Example:**
```
{
	"title": "Digital Decor Set of Two (2) Premium Gold Down Alternative Sleeping Pillows PLUS 2 FREE Pillowcases"
}
```
### upc
  
* **Type:** String
* **Example:**
```
{
	"upc": ""
}
```
