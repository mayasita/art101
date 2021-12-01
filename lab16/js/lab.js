/**
  *Creator: Maya Corona
  *Date: November 30, 2021
  *
  **/

//create variable to store ajax function within

  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: "https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg",
      // The data to send (will be converted to a query string)
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType: "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          console.log(data);
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
