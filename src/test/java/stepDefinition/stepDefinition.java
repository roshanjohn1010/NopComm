package stepDefinition;

import static org.testng.Assert.assertEquals;

import javax.swing.text.Utilities;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.HomePage;
import pageObjects.ProductPage;
import pageObjects.ShoppingPage;
import resources.Base;
import resources.SupFunctions;

public class stepDefinition extends Base {
	

		@Given("^Get browser details and trigger broswer$")
		public void get_browser_details_and_trigger_broswer() throws Throwable {
			driver=InitializeDriver();
		}
		
	
		@Given("^User lands on the home page after hitting url$")
	    public void user_lands_on_the_home_page_after_hitting_url() throws Throwable {
			String url=prop.getProperty("url");
			driver.get(url);
	    }

	    @When("^User search for the (.+) and hits enter$")
	    public void user_search_for_the_and_hits_enter(String product) throws Throwable {
	    	HomePage hp = new HomePage(driver);
	    	hp.Search_Box().sendKeys(product);
	    	hp.Search_Box().sendKeys(Keys.ENTER);
	        
	    }

	    @Then("^verify the product's' (.+) and Total price based on (.+)$")
	    public void verify_the_products_and_total_price_based_on(String unitprice, String quantity) throws Throwable {
	    	ShoppingPage sp = new ShoppingPage(driver);
	    	SupFunctions sf = new SupFunctions();
	    	double total = sf.Calculate_Product_Total(unitprice, quantity);
	    	String unPri = sp.Product_Price().getText().substring(1);
	    	String ProTtl = sp.Product_Total().getText().substring(1);
	    	String productUnitPrice = unPri.replaceAll(",", "");
	    	String productTotal = ProTtl.replaceAll(",", "");
	    	double actualUnitPrice = Double.parseDouble(productUnitPrice);
	    	double actualTotal = Double.parseDouble(productTotal);
	    	double unitPrice = Double.parseDouble(unitprice);
	    	int qty = Integer.parseInt(quantity);
	    	assertEquals(unitPrice, actualUnitPrice);
	    	assertEquals(total, actualTotal);
	    	
	    	  	
	    }

	    @And("^User add product to basket with necessary (.+) and closes banner after landing on product page$")
	    public void user_add_product_to_basket_with_necessary_and_closes_banner_after_landing_on_product_page(String quantity) throws Throwable {
	    	ProductPage pp = new ProductPage(driver);
	    	pp.Item_Quantity().clear();
	        pp.Item_Quantity().sendKeys(quantity);
	        pp.Item_Add_To_Cart().click();
	        pp.Close_banner().click();
	    }

	    @And("^User hover over cart and navigates to shopping cart page by selecting Go To cart$")
	    public void user_hover_over_cart_and_navigates_to_shopping_cart_page_by_selecting_go_to_cart() throws Throwable {
	    	ProductPage pp = new ProductPage(driver);
	    	Actions actions = new Actions(driver);
	    	actions.moveToElement(pp.Shopping_Cart()).build().perform();
	    	pp.Go_To_Cart().click();
	    }
	    
	    @And("^User selects add to cart when the product is displayed$")
	    public void user_selects_add_to_cart_when_the_product_is_displayed() throws Throwable {
	    	HomePage hp = new HomePage(driver);
	    	hp.Add_To_Cart().click();
	    }

}
