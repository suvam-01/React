import React from "react";
import ReactDOM from "react-dom/client";


const Title= ()=>(
  <a href="/">
  <img
  className="logo"
    alt="logo"
    src="https://content.jdmagicbox.com/comp/chandauli/a9/9999p5412.5412.211225124946.d8a9/catalogue/spice-villa-mughalsarai-chandauli-restaurants-cnnfjztpe1.jpg"
  
  />
  </a>
)

const Header=()=>{
  return(
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>

      </div>
    </div>

  )
}


const restrauntList={
    "sections": {
        "SECTION_SEARCH_RESULT": [
            {
                "type": "restaurant",
                "info": {
                    "resId": 19318233,
                    "name": "Arsalaan Biryani",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/19318233\/ec2c1dd7a4c8f9eeb7ca35a17cdceff9_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/19318233\/ec2c1dd7a4c8f9eeb7ca35a17cdceff9_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.4",
                        "rating_text": "3.4",
                        "rating_subtitle": "Average",
                        "rating_color": "CDD614",
                        "votes": "2,630",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Dining",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "grey",
                                    "tint": "500"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.4",
                                "reviewCount": "2,630",
                                "reviewTextSmall": "2,630 Reviews",
                                "subtext": "2,630 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.4",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9350 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "Picnic Garden, Kolkata",
                        "address": "2\/1, Chowbaga Road, Picnic Garden, Kolkata",
                        "localityUrl": "kolkata\/picnic-garden-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/biryani\/",
                            "name": "Biryani"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "50 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/arsalaan-biryani-picnic-garden\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/arsalaan-biryani-picnic-garden\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "5.5 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19318233\",\"element_type\":\"listing\",\"rank\":1}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "\u20b9450 OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": [
                    {
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                            "aspect_ratio": 2.66666666667
                        },
                        "text": "Follows all Max Safety measures to ensure your food is safe"
                    }
                ]
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20754,
                    "name": "Balwant Singh's Eating House",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/20754\/f7c8b095e1b59f7ed4ab014dad8e83d5_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/20754\/f7c8b095e1b59f7ed4ab014dad8e83d5_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.9",
                        "rating_text": "3.9",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "12.7K",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.7",
                                "reviewCount": "2,221",
                                "reviewTextSmall": "2,221 Reviews",
                                "subtext": "2,221 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.7",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "10.5K",
                                "reviewTextSmall": "10.5K Reviews",
                                "subtext": "10.5K Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9500 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "Bhawanipur, Kolkata",
                        "address": "10\/B, Harish Mukherjee Road, Near Bhawanipur Gurudwara, Bhawanipur, Kolkata",
                        "localityUrl": "kolkata\/bhawanipur-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 6am",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/street-food\/",
                            "name": "Street Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/modern-indian\/",
                            "name": "Modern Indian"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "38 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/balwant-singhs-eating-house-bhawanipur\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/balwant-singhs-eating-house-bhawanipur\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "4.4 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20754\",\"element_type\":\"listing\",\"rank\":2}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "10% OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": [
                    {
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                            "aspect_ratio": 2.66666666667
                        },
                        "text": "Follows all Max Safety measures to ensure your food is safe"
                    }
                ]
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20875646,
                    "name": "Daddy Burger",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/20875646\/2b4016baf8eb43fba94accac09fef5c8_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/20875646\/2b4016baf8eb43fba94accac09fef5c8_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.0",
                        "rating_text": "4.0",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "430",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "",
                                "reviewCount": "2",
                                "reviewTextSmall": "2 Reviews",
                                "subtext": "Does not offer Dining",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "grey",
                                    "tint": "500"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "428",
                                "reviewTextSmall": "428 Reviews",
                                "subtext": "428 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9400 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "Dalhousie BBD Bagh, Kolkata",
                        "address": "74, Ground Floor, Phear Lane, Dalhousie BBD Bagh, Kolkata",
                        "localityUrl": "kolkata\/dalhousie-bbd-bagh-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/burger\/",
                            "name": "Burger"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "21 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/daddy-burger-dalhousie-bbd-bagh\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/daddy-burger-dalhousie-bbd-bagh\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "664 m",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20875646\",\"element_type\":\"listing\",\"rank\":3}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "\u20b9100 OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 19066718,
                    "name": "Ronit Dhaba",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/19066718\/9f5c4ab0d12463805fef18d3df95e996_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/19066718\/9f5c4ab0d12463805fef18d3df95e996_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.5",
                        "rating_text": "3.5",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "3,390",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.7",
                                "reviewCount": "35",
                                "reviewTextSmall": "35 Reviews",
                                "subtext": "35 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.7",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.2",
                                "reviewCount": "3,355",
                                "reviewTextSmall": "3,355 Reviews",
                                "subtext": "3,355 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.2",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "Hatibagan, Kolkata",
                        "address": "49\/3, Ramdulal Sarkar Street, Hatibagan, Kolkata",
                        "localityUrl": "kolkata\/hatibagan-restaurants"
                    },
                    "timing": {
                        "text": "Closes in 1 hour 25 minutes",
                        "color": "#e5521f"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/bengali\/",
                            "name": "Bengali"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "26 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/ronit-dhaba-hatibagan\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/ronit-dhaba-hatibagan\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "1.7 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19066718\",\"element_type\":\"listing\",\"rank\":4}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "Free Chanaa Masala",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": [
                    {
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                            "aspect_ratio": 2.66666666667
                        },
                        "text": "Follows all Max Safety measures to ensure your food is safe"
                    }
                ]
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 19537693,
                    "name": "Al Kai Cafe",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/19537693\/ef7dc72409f0fdeece4797724bceaac3_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/19537693\/ef7dc72409f0fdeece4797724bceaac3_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.8",
                        "rating_text": "3.8",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "4,900",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.6",
                                "reviewCount": "37",
                                "reviewTextSmall": "37 Reviews",
                                "subtext": "37 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.6",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "4,863",
                                "reviewTextSmall": "4,863 Reviews",
                                "subtext": "4,863 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9350 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "Park Circus Area, Kolkata",
                        "address": "38, Jannagar Road, Near Aradhana Saloon, Park Circus Area, Kolkata",
                        "localityUrl": "kolkata\/park-circus-area-restaurants"
                    },
                    "timing": {
                        "text": "Closes in 1 hour 55 minutes",
                        "color": "#e5521f"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "43 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/al-kai-cafe-park-circus-area\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/al-kai-cafe-park-circus-area\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "2.8 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19537693\",\"element_type\":\"listing\",\"rank\":5}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "\u20b9450 OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": [
                    {
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                            "aspect_ratio": 2.0625
                        },
                        "text": "Restaurant partner follows WHO protocol"
                    }
                ]
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20746040,
                    "name": "The Sky Chef",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/20746040\/035282d1b406d313225a386ae25b036e_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/20746040\/035282d1b406d313225a386ae25b036e_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.7",
                        "rating_text": "3.7",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "387",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Dining",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "grey",
                                    "tint": "500"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.7",
                                "reviewCount": "387",
                                "reviewTextSmall": "387 Reviews",
                                "subtext": "387 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.7",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9600 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "Bhawanipur, Kolkata",
                        "address": "2, Dr. Rajendra Road, Near D N Mitra Square, Bhawanipur, Kolkata",
                        "localityUrl": "kolkata\/bhawanipur-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "56 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/the-sky-chef-bhawanipur\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/the-sky-chef-bhawanipur\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "4.5 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20746040\",\"element_type\":\"listing\",\"rank\":6}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "Flat 20% OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20043410,
                    "name": "Keventers Ice Cream",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/19723671\/94dfb59e50f2ef05593f75d1cd14c76a_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/19723671\/94dfb59e50f2ef05593f75d1cd14c76a_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.2",
                        "rating_text": "4.2",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "928",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Dining",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "grey",
                                    "tint": "500"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.2",
                                "reviewCount": "928",
                                "reviewTextSmall": "928 Reviews",
                                "subtext": "928 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.2",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "New Market Area, Kolkata",
                        "address": "1, Humayan Place, Ground Floor, New Empire Cinema Building, New Market Area, Kolkata",
                        "localityUrl": "kolkata\/new-market-area-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/shake\/",
                            "name": "Shake"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/ice-cream\/",
                            "name": "Ice Cream"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "25 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/keventers-ice-cream-new-market-area\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/keventers-ice-cream-new-market-area\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "1.9 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20043410\",\"element_type\":\"listing\",\"rank\":7}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "30% OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20043399,
                    "name": "Keventers - Milkshakes & Desserts",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/3\/18343753\/a3576eda413310dfc1d2ad5e052f4f23_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/3\/18343753\/a3576eda413310dfc1d2ad5e052f4f23_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.9",
                        "rating_text": "3.9",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "2,248",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.4",
                                "reviewCount": "5",
                                "reviewTextSmall": "5 Reviews",
                                "subtext": "5 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.4",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.3",
                                "reviewCount": "2,243",
                                "reviewTextSmall": "2,243 Reviews",
                                "subtext": "2,243 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.3",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9400 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "New Market Area, Kolkata",
                        "address": "1, Humayan Place, Ground Floor, New Empire Cinema Building, New Market Area, Kolkata",
                        "localityUrl": "kolkata\/new-market-area-restaurants"
                    },
                    "timing": {
                        "text": "Closes in 55 minutes",
                        "color": "#e5521f"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/shake\/",
                            "name": "Shake"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/ice-cream\/",
                            "name": "Ice Cream"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "28 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/keventers-milkshakes-desserts-new-market-area\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/keventers-milkshakes-desserts-new-market-area\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "1.9 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20043399\",\"element_type\":\"listing\",\"rank\":8}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "30% OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21080091,
                    "name": "Royal India Cafe",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21080091\/10e977ab14ee34f092efc1e76862c5c1_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21080091\/10e977ab14ee34f092efc1e76862c5c1_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.8",
                        "rating_text": "3.8",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "106",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Dining",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "grey",
                                    "tint": "500"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.8",
                                "reviewCount": "106",
                                "reviewTextSmall": "106 Reviews",
                                "subtext": "106 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.8",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "Paikpara, Kolkata",
                        "address": "15G, Ward 4, Raja Manindra Road, Paikpara, Kolkata",
                        "localityUrl": "kolkata\/paikpara-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/sichuan\/",
                            "name": "Sichuan"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/momos\/",
                            "name": "Momos"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "48 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/royal-india-cafe-paikpara\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/royal-india-cafe-paikpara\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "4.9 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21080091\",\"element_type\":\"listing\",\"rank\":9}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 19656646,
                    "name": "Safe House",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/19656646\/11371bfbad32252cddfdcf2989936ef8_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/19656646\/11371bfbad32252cddfdcf2989936ef8_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.8",
                        "rating_text": "3.8",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "1,478",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Dining",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "grey",
                                    "tint": "500"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.8",
                                "reviewCount": "1,478",
                                "reviewTextSmall": "1,478 Reviews",
                                "subtext": "1,478 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.8",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "Sector 4, Salt Lake, Kolkata",
                        "address": "P 351, Sukant Nagar, Bidhannagar, Sector 4, Salt Lake, Kolkata",
                        "localityUrl": "kolkata\/sector-4-salt-lake-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/pasta\/",
                            "name": "Pasta"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/burger\/",
                            "name": "Burger"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/sandwich\/",
                            "name": "Sandwich"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "49 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/safe-house-sector-4-salt-lake\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/safe-house-sector-4-salt-lake\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "5.4 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19656646\",\"element_type\":\"listing\",\"rank\":10}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "\u20b9450 OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": [
                    {
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                            "aspect_ratio": 2.66666666667
                        },
                        "text": "Follows all Max Safety measures to ensure your food is safe"
                    }
                ]
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 18712547,
                    "name": "Purple Haze",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/7\/18712547\/c3ad2c712467aa550321e174c93f77b6_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/7\/18712547\/c3ad2c712467aa550321e174c93f77b6_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.5",
                        "rating_text": "3.5",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "5,940",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Dining",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "grey",
                                    "tint": "500"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.5",
                                "reviewCount": "5,940",
                                "reviewTextSmall": "5,940 Reviews",
                                "subtext": "5,940 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.5",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "Park Circus Area, Kolkata",
                        "address": "24\/1\/1\/H4, Bright Street, Park Circus Area, Kolkata",
                        "localityUrl": "kolkata\/park-circus-area-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/shake\/",
                            "name": "Shake"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/sichuan\/",
                            "name": "Sichuan"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "39 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/purple-haze-park-circus-area\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/purple-haze-park-circus-area\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "3.7 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18712547\",\"element_type\":\"listing\",\"rank\":11}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "\u20b9150 OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": [
                    {
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                            "aspect_ratio": 2.0625
                        },
                        "text": "Restaurant partner follows WHO protocol"
                    }
                ]
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20580189,
                    "name": "WOW! Chicken by WOW! Momo",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/20580189\/4166a4ed1f5e54ad51a330864a60723c_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/20580189\/4166a4ed1f5e54ad51a330864a60723c_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.8",
                        "rating_text": "3.8",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "931",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.0",
                                "reviewCount": "58",
                                "reviewTextSmall": "58 Reviews",
                                "subtext": "58 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.0",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.6",
                                "reviewCount": "873",
                                "reviewTextSmall": "873 Reviews",
                                "subtext": "873 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.6",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9200 for one"
                    },
                    "locality": {
                        "name": "Paddapukur, Kolkata",
                        "address": "39\/1, Sarat Bose Road, Paddapukur, Kolkata",
                        "localityUrl": "kolkata\/paddapukur-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/american\/",
                            "name": "American"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/burger\/",
                            "name": "Burger"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/kolkata\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for one"
                    }
                },
                "order": {
                    "deliveryTime": "41 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/kolkata\/wow-chicken-by-wow-momo-paddapukur\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/kolkata\/wow-chicken-by-wow-momo-paddapukur\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "4.5 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20580189\",\"element_type\":\"listing\",\"rank\":12}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "40% OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": []
            }
        ],
        "SECTION_SEARCH_META_INFO": {
            "searchMetaData": {
                "previousSearchParams": "{\"PreviousSearchId\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\",\"PreviousSearchFilter\":[\"{\\\"category_context\\\":\\\"delivery_home\\\"}\",\"\"]}",
                "postbackParams": "{\"processed_chain_ids\":[18761176,19193204,20171226,24815,19389263,20199029,18561959,21257,21060,18573069,20407,20287,20733459,19264953,21964,21146,20273,18588048,19241635,19315935,19473263,18767033,18535156,20800159,18965888,20797,18926302,19273295,20976,18390916,19661056,18536551,20685961,19471134,18783239,20410689,18513005,19210809,21063,24834,19551662,18573295,20613527,23342,20134843,19318233,20754,20875646,19066718,19537693,20746040,19723671,18343753,21080091,19656646,18712547,20064535],\"shown_res_count\":57,\"search_id\":\"b069eed1-1508-4db0-94f9-6b78a5c8b00a\"}",
                "totalResults": 3234,
                "hasMore": true,
                "getInactive": false
            }
        }
    },
    "entities": []
}


const RestaurantCard=(props)=>{
  return(
    <div className="card">
      <img
        src={
          props.restaurant.info.image.url
        }
      />
      <h2>{props.restaurant.info?.name}</h2>
      <h3>{props.restaurant.info?.cuisine[0].name}</h3>
      <h4>{props.restaurant.distance} </h4>

      {/* <h1>{props.restaurant.info.name}</h1> */}
    </div>
  )
}

const Body=()=>{
  return(
    <div className="restaurant-list">
      <RestaurantCard restaurant={restrauntList.sections.SECTION_SEARCH_RESULT[0]}/>
      <RestaurantCard restaurant={restrauntList.sections.SECTION_SEARCH_RESULT[1]}/>
      <RestaurantCard restaurant={restrauntList.sections.SECTION_SEARCH_RESULT[2]}/>
      <RestaurantCard restaurant={restrauntList.sections.SECTION_SEARCH_RESULT[3]}/>
      <RestaurantCard restaurant={restrauntList.sections.SECTION_SEARCH_RESULT[4]}/>
      <RestaurantCard restaurant={restrauntList.sections.SECTION_SEARCH_RESULT[5]}/>
      
      

    </div>
  )
}


const Footer=()=>{
  return(
    <h4>Footer</h4>
  )
}
const AppLayout=()=>{
  return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);