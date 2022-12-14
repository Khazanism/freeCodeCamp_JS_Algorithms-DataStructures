//  js_algorithmsDataAndStructures

/*
// ---> Compare Scopes of the var and let Keywords <---

// The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
  console.log(checkScope());
  
  // ---> Mutate an Array Declared with const <---

// Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.

// However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  console.log(s);
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
console.log(editInPlace());

// ---> Prevent Object Mutation <---

// To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
// Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(freezeObj());

// ---> Use Arrow Functions to Write Concise Anonymous Functions <---

var magic = function() {
  return new Date();
};

const magic = () => new Date; // ANSWER

// ---> Write Arrow Functions with Parameters <---

// const myConcat = function (arr1, arr2) {
  //   return arr1.concat(arr2);
  // };
  
  // console.log(myConcat([1, 2], [3, 4, 5]));
  
  const myConcat = (arr1, arr2) => arr1.concat(arr2);
  
  console.log(myConcat([1, 2], [3, 4, 5]));
  
  // ---> Set Default Parameters for Your Functions <---
  
  // Only change code below this line
  const increment = (number, value = 1) => number + value;
  // Only change code above this line
  
  console.log(increment(5, 2));
  console.log(increment(5));
  
  // ---> Use the Rest Parameter with Function Parameters <---
  
  //  In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
  
  const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
  // ---> check diff between syntax
  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  };

  console.log(sum(0, 1, 2));
  console.log(sum(1, 2, 3, 4));
  console.log(sum(5));
  console.log(sum());
  
  // ---> Use the Spread Operator to Evaluate Arrays In-Place <---
  
  // ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
  // ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:
  // const spreaded = ...arr;
  
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;
  
  arr2 = [...arr1];  // Change this line just added ...arr1
  
  console.log(arr2);
  
  // ---> Use Destructuring Assignment to Extract Values from Objects <---
 const HIGH_TEMPERATURES = {
   yesterday: 75,
   today: 77,
   tomorrow: 80
  };
  
  // Only change code below this line
  
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line
  
  // --> answer 
  
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  // const today = HIGH_TEMPERATURES.today;
  // const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  const {today, tomorrow} = HIGH_TEMPERATURES
  
  // Only change code above this line
  
  // ---> Use Destructuring Assignment to Assign Variables from Objects <---

  // Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.
  
  // Using the same object from the last example:
  
  const user = { name: 'John Doe', age: 34 };
  // Here's how you can give new variable names in the assignment:
  
  const { name: userName, age: userAge } = user;
  // You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34.
  
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  // const highToday = HIGH_TEMPERATURES.today;
  // const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES
  
  // Only change code above this line
  console.log(HIGH_TEMPERATURES);
  
  // ---> Use Destructuring Assignment to Assign Variables from Nested Objects <---
  
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 },
  };
  
  // Only change code below this line
  
  // const lowToday = LOCAL_FORECAST.today.low;
  // const highToday = LOCAL_FORECAST.today.high;
  
  const {
    today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

// Only change code above this line

console.log(LOCAL_FORECAST);

// ---> Use Destructuring Assignment to Assign Variables from Arrays <---

// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
// The console will display the values of a and b as 1, 2.

// The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
// The console will display the values of a, b, and c as 1, 2, 5.

let a = 8,
b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(a, b);
// swap

// ---> Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements <---

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  // Only change code below this line
  // const arr = list; // Change this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

// ---> Use Destructuring Assignment to Pass an Object as a Function's Parameters <---

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
// const half = (stats) => (stats.max + stats.min) / 2.0; 
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line

console.log(half(stats));
// ---> Create Strings using Template Literals <---

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  let failuresList = [];
  for (let i = 0; i < arr.length; i += 1) {
    failuresList.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line
  
  return failuresList;
}

const failuresList = makeList(result.failure);

console.log(failuresList);

// answer 2 

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  let failureItems = [];
  for (let i = 0; i < arr.length; i ++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line
  
  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);

// ---> Write Concise Object Literal Declarations Using Object Property Shorthand <---
// const createPerson = (name, age, gender) => {
//   // Only change code below this line
//   return {
//     name: name,
//     age: age,
//     gender: gender
//   };
//   // Only change code above this line
// };

// console.log(createPerson("Zodiac Hasbro", 56, "male"));

// answer 

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name, age, gender
  };
  // Only change code above this line
};

console.log(createPerson("Zodiac Hasbro", 56, "male"));

// ---> Write Concise Declarative Functions with ES6 <---

// you can remove the function keyword and colon altogether when defining functions in objects.

// Only change code below this line
// const bicycle = {
//   gear: 2,
//   setGear: function (newGear) {
  //     this.gear = newGear;
  //   }
// };

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
bicycle.setGear(48);
console.log(bicycle.gear);

// ---> Use class Syntax to Define a Constructor Function <---

// ES6 provides a new syntax to create objects, using the class keyword.

// It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

// In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.

// In ES6, a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.

// Only change code below this line

class Vegetable {
  constructor (name) {
    this.name = name;
  }
}

// Only change code above this line

const carrot = new Vegetable('carrot');

console.log(carrot.name); // Should display 'carrot'

// ---> Use getters and setters to Control Access to an Object <---

// Getters and setters are critical parts of a class/object.
// They allow you to control their attributes from the outside.
// They will become more prominent when you get started with the Object-Oriented Programming unit (coming up!).
//  For now, this exercise shows you how to manipulate them with ES6.

// Only change code below this line

class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  // getter
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  // setter
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// ---> Create a Module Script <---
<html>
<body>
<!-- Only change code below this line -->
<script type="module" src="index.js"></script>
<!-- Only change code above this line -->
</body>
</html>

// ---> Use export to Share a Code Block <---

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString };



// export const uppercaseString = (string) => {
//   return string.toUpperCase();
// }

// export const lowercaseString = (string) => {
//   return string.toLowerCase()
// }

// ---> Reuse JavaScript Code Using import <---

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

import { uppercaseString, lowercaseString } from "./string_functions.js";

// ---> Use * to Import Everything from a File <---

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

import * as stringFunctions from "./string_functions.js";

// ---> Create an Export Fallback with export default <---

export default function subtract(x, y) {
  return x - y;
}

// ---> Import a Default Export <---

// Only change code above this line

subtract(7, 4);

import subtract from "./math_functions.js";

// ---> Create a JavaScript Promise <---

const makeServerRequest = new Promise((resolve, reject) => {});

// ---> Complete a Promise with resolve and reject <---

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
  
  if (responseFromServer) {
    // Change this line
    resolve("We got the data");
  } else {
    // Change this line
    reject("Data not received");
  }
});


// ---> Handle a Fulfilled Promise with then <---

// When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
  
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest.then((result) => {
  console.log(result);
});

*/

// ---> Handle a Rejected Promise with catch <---

// catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error);
});