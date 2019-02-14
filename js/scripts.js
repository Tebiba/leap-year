//This is the beginning of the leap year function

function leapYear(){
var year = parseInt(prompt("Enter the year: "))
if(year%100===0 && year%400!==0){
	 alert("This is not a leap year");
 } else if(year%4===0 || year%400===0)	{
	 alert("This is a leap year");
 } else {
	alert("This is not a leap year");
}

//End of year test//
//Begin loop//

var entry = confirm("Would you like to continue?");
if (entry){
	leapYear();
} else {
	alert("Thank You!")
}

}
leapYear();
