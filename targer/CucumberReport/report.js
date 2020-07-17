$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PriceTest.feature");
formatter.feature({
  "line": 1,
  "name": "Product price verification",
  "description": "",
  "id": "product-price-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verification of Apple MacBook Pro 13-inch price in shopping cart page",
  "description": "",
  "id": "product-price-verification;verification-of-apple-macbook-pro-13-inch-price-in-shopping-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User lands on the home page after hitting url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User search for the \u003cproduct\u003e and hits enter",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User selects add to cart when the product is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User add product to basket with necessary \u003cquantity\u003e and closes banner after landing on product page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User hover over cart and navigates to shopping cart page by selecting Go To cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify the product\u0027s\u0027 \u003cunit price\u003e and Total price based on \u003cquantity\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "product-price-verification;verification-of-apple-macbook-pro-13-inch-price-in-shopping-cart-page;",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "unit price"
      ],
      "line": 15,
      "id": "product-price-verification;verification-of-apple-macbook-pro-13-inch-price-in-shopping-cart-page;;1"
    },
    {
      "cells": [
        "Apple MacBook Pro 13-inch",
        "5",
        "1800.00"
      ],
      "line": 16,
      "id": "product-price-verification;verification-of-apple-macbook-pro-13-inch-price-in-shopping-cart-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Get browser details and trigger broswer",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.get_browser_details_and_trigger_broswer()"
});
formatter.result({
  "duration": 4136226800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verification of Apple MacBook Pro 13-inch price in shopping cart page",
  "description": "",
  "id": "product-price-verification;verification-of-apple-macbook-pro-13-inch-price-in-shopping-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User lands on the home page after hitting url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User search for the Apple MacBook Pro 13-inch and hits enter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User selects add to cart when the product is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User add product to basket with necessary 5 and closes banner after landing on product page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User hover over cart and navigates to shopping cart page by selecting Go To cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify the product\u0027s\u0027 1800.00 and Total price based on 5",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_lands_on_the_home_page_after_hitting_url()"
});
