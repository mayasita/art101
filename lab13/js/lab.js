/**
  *Author: Maya Corona
  *Created: November 17, 2021
  *
  **/

//Compile a long string to output numbers and results in html
var oneLongString = "";
//loop every number through 200
  for (i=1; i <= 200; i++) {
//if number is a multiple of 3, 5, and 7, label as FizzBuzzBoom!
    if (i%3 == 0 && i%5 == 0 && i%7 == 0) {
       oneLongString += i + "FizzBuzzBoom!<br>";
        console.log("FizzBuzzBoom!");
//if number is a multiple of 5 and 7 label as BuzzBoom!
      } else if (i%5 == 0 && i%7 == 0) {
       oneLongString += i + "BuzzBoom!<br>";
        console.log("BuzzBoom!");
//if number is mutiple of 3 and 7 label as FizzBoom!
      } else if (i%3 == 0 && i%7 == 0) {
       oneLongString += i + "FizzBoom!<br>";
          console.log("Fizzboom!");
//if number is multiple of 3 and 5 label as FizzBuzz!
      } else if (i%3 == 0 && i%5 == 0) {
       oneLongString += i + "FizzBuzz!<br>";
          console.log("Fizzbuzz!");
//if number is multiple of 3 label as Fizz!
      } else if (i%3 == 0) {
       oneLongString += i + "Fizz!<br>";
          console.log("Fizz!");
//if number is multiple of 5 label as Buzz!
      } else if (i%5 == 0) {
       oneLongString += i + "Buzz!<br>";
          console.log("Buzz!");
//if number is multiple of 7 label as Boom!
      } else if (i%7 == 0) {
        oneLongString += i + "Boom!<br>";
          console.log("Boom!");
//if number is not multiple of 3, 5, or 7, list number as is
      } else {
        oneLongString += i + "<br>";
          console.log(i);
      }
//list loop of numbers in html output div
    $("#output").html(oneLongString);
  }
