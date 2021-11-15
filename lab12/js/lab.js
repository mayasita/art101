/**
  *Author: Maya Corona
  *Created: November 14, 2021
  *
  **/

//create function assorting string
function sortingHat(name) {
//assigns string to variable length
    var num = name.length;
//use modulus to get remainder, if can be divided by 4, then
    if (num%4 === 0) {
        return "Gryffindor";
    }
//if divided by 4 and remainder is 1
    else if (num%4 === 1) {
        return "Hufflepuff";
    }
//if divided by 4 and remainder is 2
    else if (num%4 === 2) {
        return "Slytherin";
    }
//if divided by 4 and remainder is 3
    else {
        return "Ravenclaw";
    }
}

//add event listener to button
  $("button#button").click(function(){
//print message to console to check button functionality
  console.log("Click me again,I dare you...");
//receive value of input
  var input= $("#input").val();
//assign input to variable name
  var house= sortingHat(input);
//append new paragraph to output stating results
  $("#output").append("The sorting hat has sorted you into " + house + "<br></br>");
 });
