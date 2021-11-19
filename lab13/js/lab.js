/*
* Author: Margarita Rodriguez
* Created: 18 November 2021
*
* License: Public Domain
*/

function fizzbuzzboom() {
  for (var i = 1; i < 201; i++) {             // loop from 1 to 200
    if (i % 15 == 0) {
      document.writeln("FizzBuzz");
      console.log("FizzBuzz");
      }           // if divisble by 15
    else if (i % 21 == 0) {
      console.log("FizzBoom");
      }          // if divisible by 21
    else if (i % 35 == 0) {
      console.log("BuzzBoom");
      }          // if divisible by 3
    else if (i % 3 == 0) {
      console.log("Fizz");
      }                 // if divisible by 3
    else if (i % 5 == 0) {
      console.log("Buzz");
      }                 // if divisble by 5
    else if (i % 7 == 0) {
      console.log("Boom");
      }                // if divisble by 7
    }
 }

fizzbuzzboom();
