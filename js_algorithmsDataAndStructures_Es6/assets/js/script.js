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
*/

// ---> Use Arrow Functions to Write Concise Anonymous Functions <---

var magic = function() {
  return new Date();
};

const magic = () => new Date; // ANSWER