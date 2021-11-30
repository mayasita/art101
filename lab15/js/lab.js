/**
  *Creator: Maya Corona
  *Date: November 29, 2021
  *
  **/

//create variable for url
 var myUrl = "https://api.kanye.rest/";
//designate function to call data
function callAjax() {
  console.log("click");
// Using the core $.ajax() method
 $.ajax({
// The URL for the request (from the api docs)
  url: myUrl,
// The data to send (will be converted to a query string)
  type: "GET",
// The type of data we expect back
  dataType: "json",
})
// What do we do when the api call is successful
//all the action goes in here
 .done(function(data) {
   console.log("Success", data);
   $("#output").append("<p>" + data.quote);
 })
// What we do if the api call fails
 .fail(function(request, error) {
   console.log("request, error");
 })
   }
//create event listener for button
 $("#activate").click(callAjax);
