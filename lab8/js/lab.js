/**
* Author: Margarita Rodriguez
* Created: 26 October 2021
*
* License: Public Domain
*/

  function divbyThree(x){                //is it divisible by three
    return (x % 3 == 0);                //return true or false
    }

//test function
  console.log("Is 4 divisble by 3: ", divbyThree(4));
  console.log("Is 24 divisble by 3: ", divbyThree(24));

  var array = [5, 13, 27, 9, 360, 1200]       //array
  console.log("My array: ", array);          //print array in console

  var result = array.map(divbyThree);        //test the divisibility of my array
  console.log("Is my array divisble by 3: ", result);     //print results

  var result = array.map( function(x){        //new operation on array
    return x / 3;
  })

  console.log("My array divided by 3: ", result);
  //should print [1.66666667, 4.33333333, 9, 120, 400]
