/**
 * Author: Maya Corona
 * Created: October 20, 2021
 *
 */

 //Declared what type of transportation used on a regular basis.
 var myTransport = ["car", "bike", "skateboard"];

 //Declared my main method of transportation and the specifications of said vehicle.
 var myMainRide = {};
 myMainRide.name = "Toyota";
 myMainRide.model = "Corolla";
 myMainRide.color = "grey-blue";
 myMainRide.year = 2017;

 //Use document.writeln() to output myTransport
 document.writeln("My Rides: " + myTransport + "<br>");

 //Print out myMainRide
 document.writeln("My Car: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
