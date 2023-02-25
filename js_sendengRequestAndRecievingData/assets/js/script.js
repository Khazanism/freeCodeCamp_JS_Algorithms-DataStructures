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
*/

//3rd METHOD <-----> shorter Method

// fetch("https://jsonplaceholder.typicode.com/users")
//   // wriring the resolve
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log("please check main code");
//   });

// Arrow function

// its preferees that the fetch in not floating in the page and to include it in in a function.

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {        // will be removed in react
      return res.json();  // will be removed in react
    })                    // will be removed in react
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].email);
      }
    })
    .catch(err => {
      console.log("please check main code");
    });
}

fetchUsers(); // when we need to operate it --->  we just call the function <---
