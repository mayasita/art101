/**
 *Author: Maya Corona
 *Created: November 3, 2021
 *
 **/

// sortUserName - function that will take user input to arrange and output their sortUserName
  function sortUserName(userName) {
// split string into an array
  var nameArray = userName.split('');
  console.log("nameArraySort =", nameArray);
// sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
// join array back into a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//create button element that receives user input
var button = document.getElementById("my-button");
//define button function
button.addEventListener("click", function() {
//caption input "Input Your Name"
var inputValue = document.getElementById("my-input").value;
  console.log("Input Your Name: ", inputValue);
//define results as output of function
var results = sortUserName(inputValue);
//replace div in html with output results
var div = document.getElementById("output");
    div.innerHTML = results
});

//add button to change color of background
var button2 = document.getElementById("color-button");
//assign button function
button2.addEventListener("click", function(){
  var colorChange =  document.getElementById("content");
  colorChange.style.backgroundColor = "#9c1414";
});
//add button to change color of border
var button3 = document.getElementById("color-reverse");
//assign button function
button3.addEventListener("click", function(){
  var colorChange =  document.getElementById("content");
  colorChange.style.borderColor = "#e5f054";
});
