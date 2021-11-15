/**
  *Author: Maya Corona
  *Created: November 14, 2021
  *
  **/

//assign house descriptions to variables
 var gryffindorDesc = '"You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve, and chivalry Set Gryffindors apart."';
 var hufflepuffDesc = '"You might belong in Hufflepuff, n/Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil."';
 var slytherinDesc = '"Or perhaps in Slytherin, You\'ll make your real friends, Those cunning folk use any means, To achieve their ends"';
 var ravenclawDesc = '"Or yet in wise old Ravenclaw, If you\'ve a ready mind, Where those of wit and learning, Will always find their kind."';

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
//append output to include house descriptions
  if (house == "Gryffindor") {
    $("#output").append(gryffindorDesc + "<br></br>");
  }
  else if (house == "Hufflepuff") {
    $("#output").append(hufflepuffDesc + "<br></br>");
  }
  else if (house == "Slytherin") {
    $("#output").append(slytherinDesc + "<br></br>");
  }
  else {
    $("#output").append(ravenclawDesc + "<br></br>");
  }
});
