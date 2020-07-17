package stepDefinition;

import cucumber.api.java.After;
import resources.Base;

public class Hooks{
	
	@After
	public void AfterTest() {
		driver.close();
	}

}
