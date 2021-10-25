/**
* Author: Margarita Rodriguez
* Created: 25 Oct 2021
*
* License: Public Domain
*/

function userInput() {
  var userName = prompt("Hi. Please tell me your name so I can fix it. (in all lowercase)");                                    //take in user user input
  console.log("userName =", userName);     //print

  var array = userName.split('');          //turn string into array
  console.log("array =", array);           //print

  var arraySort = array.sort();            //sort the array
  console.log("arraySort =", arraySort);  //print

  var sorted = arraySort.join('');        //turn the array back into a string
  console.log("sorted =", sorted);        //print

  return sorted;
}

//output
document.writeln("Oh hey, I've fixed your name: ", userInput());
