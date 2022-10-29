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
  */

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