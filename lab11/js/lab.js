/**
 *
 * Author: Maya Corona
 * Created: November 8, 2021
 *
 **/

//add event listener to button
$("button.snap").click(function(){
console.log("yello");
//toggle class special within div of section
  $("#challenge").toggleClass("beep");
});

//add event listener to button
$("button.crackle").click(function(){
//toggle class special within div of section
  $("#problem").toggleClass("boop");
});

//add event listener to button
$("button.pop").click(function(){
//toggle class special within div of section
  $("#result").toggleClass("bop");
});
