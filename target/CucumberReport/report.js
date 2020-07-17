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
  "duration": 4164304600,
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
formatter.result({
  "duration": 2215765200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple MacBook Pro 13-inch",
      "offset": 20
    }
  ],
  "location": "stepDefinition.user_search_for_the_and_hits_enter(String)"
});
formatter.result({
  "duration": 1598181300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_selects_add_to_cart_when_the_product_is_displayed()"
});
formatter.result({
  "duration": 90898700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 42
    }
  ],
  "location": "stepDefinition.user_add_product_to_basket_with_necessary_and_closes_banner_after_landing_on_product_page(String)"
});
formatter.result({
  "duration": 2775168800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_hover_over_cart_and_navigates_to_shopping_cart_page_by_selecting_go_to_cart()"
});
formatter.result({
  "duration": 3842020500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1800.00",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 55
    }
  ],
  "location": "stepDefinition.verify_the_products_and_total_price_based_on(String,String)"
});
formatter.result({
  "duration": 93431400,
  "status": "passed"
});
formatter.after({
  "duration": 177100,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.Hooks.AfterTest(Hooks.java:10)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});