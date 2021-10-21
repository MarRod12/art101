/*
* Author: Margarita Rodriguez and Brenda Alvarez
* Created: 19 October 2021
* License: Public Domain
*
*/

//declare variables
myTransport = [' walking', ' driving', ' using the bus'];
myMainRide = {
  make: "Hyundai",
  model: "Elantra",
  color: "Grey",
  year: "2018",
  age: function() {
    return 2021 - age;
  }
};

//output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("<br>My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'),
"</pre>");
