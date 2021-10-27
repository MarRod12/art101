/**
* Author: Margarita Rodriguez
* Created: 26 October 2021
*
* License: Public Domain
*/

var array = [4, 8, 10, 9, 14]       //array

function divbyThree(x){                //is it divisible by three
  return (x % 3 == 0);                //return true or false
  }

  divbyThree(4);                    //is 4 divisble by 3
  divbyThree(24);                   //is 24 divisble by 3

  array.map(divbyThree);            //check if any integer in the array inspect
                                   //divisble by 3

  console.log(divbyThree);            //print in console
  console.log(divbyThree(4));         //print true or false in console
  console.log(divbyThree(24));        // print true or false in console

  console.log(array.map(divbyThree));     //print answers to if the array is
                                          //divisble by 3

  function answer(x){                     //multiply array times 3
    return (x * 3);
  }

  console.log(answer);                    //print function in console
  console.log(array.map(answer));         //print the array multiplied by 3
