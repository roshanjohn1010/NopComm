package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage {
	
	public WebDriver driver;
	
	@FindBy(className="qty-input")
	private WebElement itemQuantity;
	
	@FindBy(id="add-to-cart-button-4")
	private WebElement item_AddToCart;
	
	@FindBy(className="close")
	private WebElement closeBanner;
	
	@FindBy(className="cart-label")
	private WebElement shoppingCart;
	
	@FindBy(xpath="//div[@class='mini-shopping-cart']/div[4]/input")
	private WebElement goToCart;
	
	
	public ProductPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement Item_Quantity() {
		return itemQuantity;
	}
	
	public WebElement Item_Add_To_Cart() {
		return item_AddToCart;
	}
		
	public WebElement Close_banner() {
		return closeBanner;
	}
	
	public WebElement Shopping_Cart() {
		return shoppingCart;
	}
	
	public WebElement Go_To_Cart() {
		return goToCart;
	}

}

