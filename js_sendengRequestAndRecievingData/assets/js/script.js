//  js_algorithmsDataAndStructures

/*
// -----> Sending Request And Recieving Data <-----

// any data i request ---> is recieved as array of objects 20 <---> 11:20.

// -----> Xhttp Request <-----
//1st METHOD
let xhttp = new XMLHttpRequest();

xhttp.onload = function () {
  //   console.log(xhttp.responseText); // but this returns string of objects
  console.log(JSON.parse(xhttp.responseText));
};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/users"); // key open we use it to recieve  or "POST"
// second variable is where we get the data from
xhttp.send(); // send request to ge t users

// json is data that looks like normal objects but all keys are in douple quotes " data "
// ------------> but we want to convert this string to array by using ---> JSON.parse

//2nd METHOD

// promise [resolve "if the data came"- reject "if th data didn;t came"]
*/

// fetch--> is a type of Promise

fetch("https://jsonplaceholder.typicode.com/users")
// wriring the resolve
.then(function (test) {
    test.json() // it holds the info (object) <---its a peomise by itself so we write then and catch again
    .then(function (data) {
      console.log(data);
    })

    .catch();
})
// writting the rejection
.catch(function () {
    
});
// IMPORTANT we write ; at the end of the last catch 
