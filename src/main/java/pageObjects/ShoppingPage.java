package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShoppingPage {
	
	public WebDriver driver;
	
	//By productPrice = By.xpath("//*[@class='product-unit-price']");
	//By productQuantity = By.xpath("//*[@class='qty-input']");
	//By productTotal = By.xpath("//*[@class='product-subtotal']");
	
	@FindBy(xpath="//*[@class='product-unit-price']")
	private WebElement productPrice;
	
	@FindBy(xpath="//*[@class='qty-input']")
	private WebElement productQuantity;
	
	@FindBy(xpath="//*[@class='product-subtotal']")
	private WebElement productTotal;
	
	public ShoppingPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement Product_Price() {
		return productPrice;
	}
	
	public WebElement Product_Quantity() {
		return productQuantity;
	}
	
	public WebElement Product_Total() {
		return productTotal;
	}
	

}
