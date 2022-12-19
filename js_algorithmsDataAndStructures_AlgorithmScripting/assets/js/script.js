//  js_algorithmsDataAndStructures

/*
 */
// ---> Convert Celsius to Fahrenheit <---
function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(20));
console.log(convertCtoF(30));

// ---> Reverse a String <---

function reverseString(str) {
  let array = str.split("").reverse().join("");
  return array;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
