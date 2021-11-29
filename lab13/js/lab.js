/*
* Author: Margarita Rodriguez
* Created: 18 November 2021
*
* License: Public Domain
*/

function fizzbuzzboom() {
  for (var i = 1; i < 201; i++) {             // loop from 1 to 200
    if (i % 15 == 0) {
      document.writeln("FizzBuzz ");
      console.log("FizzBuzz ");
      }           // if divisble by 15
    else if (i % 21 == 0) {
      document.writeln("FizzBoom ");
      console.log("FizzBoom");
      }          // if divisible by 21
    else if (i % 35 == 0) {
      document.writeln("BuzzBoom ");
      console.log("BuzzBoom");
      }          // if divisible by 3
    else if (i % 3 == 0) {
      document.writeln("Fizz ");
      console.log("Fizz");
      }                 // if divisible by 3
    else if (i % 5 == 0) {
      document.writeln("Buzz ");
      console.log("Buzz");
    }                 // if divisible by 5
    else if (i % 7 == 0) {
      document.writeln("Boom ");
      console.log("Boom");
    }                // if divisible by 7
    }
 }

fizzbuzzboom();
