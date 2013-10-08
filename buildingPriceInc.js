/*
Programmer: 	Nanette K. Hartley
Language: 		JavaScript
Filename:  		buildingPriceinc.js
Date: 			10/08/2013
Description: 	 
*/

//declaration of variables and constants
var BR = "<br />";						//HTML line break
var ES = " ";							//HTML extra space
var LE = ".";							//HTML line end
var initial_price = 0.0;				//initial price of building
var initial_year = " ";					//initial year of calculation
var final_price = 0.0;					//final price of building
var final_year = " ";					//final year of calculation
var name = " ";							//name of building
change = " ";							//will be used to show if change is + or -

//Welcome the user to the program
document.write("Hello!  Welcome to the Building Change Calculator!" + BR + BR);

//Gathering input from user
name = prompt("Would you like to calculate a percent change on this building?  If so, we need the name of the building.");
initial_year = prompt("What is the intial year of the calculation?");
initial_price = prompt("What is the intitial price of the" + ES + name + ES + "building?");
parseFloat(initial_price);				//turn the input into a number
final_year = prompt("What is the final year of the calculation?");
final_price = prompt("What is the final price of the" + ES + name + ES + "building?");
parseFloat(final_price);				//turn the input into a number

//Processing of the user data
difference = final_price - initial_price;			//calculate difference
percentage = (difference * 100)/initial_price;		//calculate percentage

if (percentage < 0)
{
	change = "percent decrease";
}
else
{
	change = "percent increase"
}

//Output of data
document.write("The name fo the building is:" + ES + name + ES + "Building" + LE + BR);
document.write("The cost of the building in" + ES + initial_year + ES + "was: $" + initial_price + LE + ES + ES + "The cost of the building in" + ES + final_year + ES + "was: $" + final_price + LE + BR);
document.write("The difference in price of the" + ES + name + ES + "building is: $" + difference + LE + BR);
document.write("The" + ES + change + ES + "of the" + ES + name + ES + "building from" + ES + initial_year + ES + "to" + ES + final_year + ES + "is:" + ES + percentage.toFixed(2) + "%" + LE + BR + BR);

//Thank the user and end the program
document.write("Thank you for using the Building Change Calculator!" + BR);