package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",monochrome=true,
		glue = "stepDefinition",
		plugin= {"pretty", "html:target/CucumberReport"})
public class TestRunner {

}

