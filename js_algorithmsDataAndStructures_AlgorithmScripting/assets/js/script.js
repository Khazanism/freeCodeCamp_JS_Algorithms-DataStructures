//  js_algorithmsDataAndStructures

/*
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

// ---> Factorialize a Number <---
function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(5));
*/

// ---> Find the Longest Word in a String <---

function findLongestWordLength(str) {
  let array = str.split(" ");
  if (array.length == 1) {
    return array[0].length;
  }

  return Math.max(
    array[0].length,
    findLongestWordLength(array.slice(1).join(" "))
  );
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

console.log(findLongestWordLength("May the force be with you"));

console.log(findLongestWordLength("Google do a barrel roll"));

console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow"
  )
);

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
