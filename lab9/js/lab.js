/**
* Author: Margarita Rodriguez
* Created: 1 November 2021
*
* License: Public Domain
*/

let outputEl = document.getElementById('output');  //get the elements in the content div
console.log(outputEl);  //print in console

let new1El = document.createElement("p");  //create element p
let linebreak = document.createElement("br");  //create line break element
let linebreak2 = document.createElement("br"); //second line break

let change1El = document.createTextNode("This is something new! ");  //change text of new element
console.log(change1El);  //print in console

outputEl.appendChild(change1El);   //add it to the results div
outputEl.appendChild(linebreak);   //add linebreak
outputEl.appendChild(linebreak2);  //add second line break

let new2El = document.createElement("p");  //new element

//create a variable to change the new2El
let change2El = document.createTextNode("This is a second new element. :)");
console.log(change2El);  //print in console

outputEl.appendChild(change2El);   //add it to the results div
