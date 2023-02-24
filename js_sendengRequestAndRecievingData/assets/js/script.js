//  js_algorithmsDataAndStructures

/*
 */
// -----> Sending Request And Recieving Data <-----

// any data i request ---> is recieved as array of objects 20 <---> 11:20.

// -----> Xhttp Request <-----

let xhttp = new XMLHttpRequest();

xhttp.onload = function () {
  console.log(xhttp.responseText); // but this returns string of objects
};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/users"); // key open we use it to recieve  or "POST"
// second variable is where we get the data from
xhttp.send(); // send request to ge t users

// json is data that looks like normal objects but all keys are in douple quotes " data "
// --------------> but we want to convert this string to array ?!
