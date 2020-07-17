package resources;

public class SupFunctions {
	
	public double Calculate_Product_Total(String x, String y) {
		double a = Double.parseDouble(x);
		int b = Integer.parseInt(y);
		double sum=0;
		for(int i=0; i<b ; i++)
			sum=sum+a;
		return sum;
		
	}

}
