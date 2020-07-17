package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	
public WebDriver driver;
	
	@FindBy(id="small-searchterms")
	private WebElement searchBox;
	
	@FindBy(id="submit")
	private WebElement searchButton;
	
	@FindBy(xpath="//input[@class='button-2 product-box-add-to-cart-button']")
	private WebElement addToCart;
	
	
	public HomePage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement Search_Box() {
		return searchBox;
	}
	
	public WebElement Search_Button() {
		return searchButton;
	}
		
	public WebElement Add_To_Cart() {
		return addToCart;
	}

}
