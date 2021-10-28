/**
 * Author: Maya Corona
 * Created: October 27, 2021
 *
 **/


function findSquareRoot(x){
    var results = Math.sqrt(x)
    return results;
  }

//test function
console.log("What is the square root of 4? ", findSquareRoot(4));
console.log("What is the square root of 100? ", findSquareRoot(100));

//define array
var numArray = [1, 4, 9, 16, 121, 225];
console.log("My Array ", numArray);

var results = numArray.map(findSquareRoot);
//should return square root of each number [1, 2, 3, 4, 11, 15]
console.log("Find square roots ", results);

var results = numArray.map(function(x) {
return x * 1.5;
} );
//should multiply each number by 1.5 [1.5, 6, 13.5, 24, 181.5, 337.5]
console.log("Multiply Array by 1.5", results);
