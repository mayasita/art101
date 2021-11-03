/**
 * Author: Maya Corona
 * Created: October 25, 2021
 *
 **/

// sortUserName - function that will take user input to arrange and output their sortUserName
function sortUserName() {
   var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
   console.log("userName =" + userName);
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

// Output
document.writeln("Hello! I've fixed your name: ",
    sortUserName(), "</br>");
