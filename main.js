//abbreviations
const h = "Hotdogs";
const f = "Fries";
const s = "Sodas"; 
//price info
const hotdogPrice = 3.25;
const friesPriceNF = 2.00;
const friesPrice = friesPriceNF.toFixed(2);
const sodaPriceNF = 1.50;
const sodaPrice = sodaPriceNF.toFixed(2);
//discount and tax info
const discount = 0.1;
const massMealTax = 0.0625;
//quantity of each item
const hotdogs = prompt("How many hotdogs?", "1");
const fries = prompt("How many orders of fries?", "1");
const sodas = prompt("How many sodas", "1");


//total price of each item is numItems * itemPrice
const totalHotdogPriceNF = hotdogs * hotdogPrice;
const totalFriesPriceNF = fries * friesPrice;
const totalSodaPriceNF = sodas * sodaPrice;
document.write("<h1 style='margin-top:5px;font-size:35px;" + 
	           "color:#d72121'>" + 
	              "Welcome to Joe's Hotdogs!" + 
	           "</h1>");
document.write("<h2 style='margin:20px 0 20px 0;font-size30px'>" + 
	              "Your Order" + 
	           "</h2>");
const totalHotdogPrice = totalHotdogPriceNF.toFixed(2);
document.write("<p><span style='font-weight:bold'># </span> of " + 
	           h + ": " + hotdogs + " at $" + hotdogPrice + 
	           " is $" + totalHotdogPrice + 
	           "</p>");
const totalFriesPrice = totalFriesPriceNF.toFixed(2);
document.write("<p><span style='font-weight:bold'># </span> of " + 
	           h + ": " + fries + " at $" + friesPrice + 
	           " is $" + totalFriesPrice + 
	           "</p>");
const totalSodaPrice = totalSodaPriceNF.toFixed(2);
document.write("<p><span style='font-weight:bold'># </span> of " + 
	           h + ": " + sodas + " at $" + sodaPrice + 
	           " is $" + totalSodaPrice + 
	           "</p>");


//pre-tax price / subtotal
let preTaxPriceNF = totalHotdogPriceNF + totalFriesPriceNF + totalSodaPriceNF;
if(preTaxPriceNF >= 20) //discount for over 20 dollars
{
	preTaxPriceNF = preTaxPriceNF - (preTaxPriceNF * discount); //10% discount
	document.write("<p style='margin: 10px 0 10px 0;font-weight:bold;" + 
		           "font-size:25px;'>" + 
		              "You qualified for our 10% discount." + 
		           "</p>");
}
const preTaxPrice = preTaxPriceNF.toFixed(2);
document.write("<p style='margin-top:20px'>Subtotal: $" + preTaxPrice);


//tax
const taxNF = preTaxPriceNF * massMealTax;//6.25% meals tax
const tax = taxNF.toFixed(2);
document.write("<p>Massachusetts meal tax: $" + tax + "</p>");


//post-tax price / total
const postTaxPriceNF = preTaxPriceNF + taxNF;
const postTaxPrice = postTaxPriceNF.toFixed(2);
document.write("<p>Total: $" + postTaxPrice + "</p>");

//acknowledgement of rounding
document.write("<p style='margin:25px 0 0 0;color:#000000'>" + 
	           "No figures are rounded until the final calculation is made." + 
	           "</p>" + 
	           "<p>(So you don't have to worrry about paying too much!)</p>");
