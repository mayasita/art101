/**
  *Creator: Maya Corona
  *Date: November 30, 2021
  *
  **/

//create variable to store ajax function within
var comicObj = {};
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: "https://xkcd.com/1/info.0.json",
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
          comicObj = data;
          console.log(comicObj);
          $("#imgTitle").html(comicObj.title);
          var imgUrl = comicObj.img;
          var imgTag = "<img src=" + imgUrl + ">";
          var altText = comicObj.alt
          $("#comic").html(imgTag);
          $("imgUrl").html(comicObj.img);
          $("#altText").html(comicObj.alt);
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
