//  js_algorithmsDataAndStructures

/*
// ---> Use the JavaScript Console to Check the Value of a Variable <---
let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);
let sumAB = a + b;
console.log(sumAB);

// ---> Understanding the Differences between the freeCodeCamp and Browser Console <---
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

// ---> Use typeof to Check the Type of a Variabl <---

// JavaScript recognizes seven primitive (immutable) data types: Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

// ---> Catch Misspelled Variable and Function Names <---
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// ---> Catch Unclosed Parentheses, Brackets, Braces and Quotes <---

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(arraySum);
console.log(`Sum of array values is: ${arraySum}`);

// ---> Catch Mixed Usage of Single and Double Quotes <---

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

// ---> Catch Use of Assignment Operator Instead of Equality Operator <---
let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// ---> Catch Missing Open and Closing Parenthesis After a Function Call <---

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
let result = getNine();
console.log(result);
*/

// ---> Catch Arguments Passed in the Wrong Order When Calling a Function <---

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
