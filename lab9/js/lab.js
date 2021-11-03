/**
 * Author: Maya Corona
 *Created: November 2, 2021
 *
 **/

//find your output and assign it to a variable
var outputEl = document.getElementById("output");
//create new element and assign it to variable, change html attribute
var new1El = document.createElement("p");
new1El.innerHTML = "It's me, paragraph!";
//create new element and assign it to variable, change html attribute
var new2El = document.createElement("p");
new2El.innerHTML = "I hate paragraphs!";
//append both new elements
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//assign div in html  to variable
var fontDiv = document.getElementById("font");
//change css style of div
fontDiv.style.color = "purple";
fontDiv.style.backgroundColor = "green";
