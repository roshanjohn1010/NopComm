Feature: Product price verification

Background: 
Given Get browser details and trigger broswer

Scenario Outline: Verification of Apple MacBook Pro 13-inch price in shopping cart page
Given User lands on the home page after hitting url
When User search for the <product> and hits enter
And User selects add to cart when the product is displayed
And User add product to basket with necessary <quantity> and closes banner after landing on product page
And User hover over cart and navigates to shopping cart page by selecting Go To cart
Then verify the product's' <unit price> and Total price based on <quantity>

Examples:
|product					|quantity	| unit price		|
|Apple MacBook Pro 13-inch	|5			| 1800.00			|
