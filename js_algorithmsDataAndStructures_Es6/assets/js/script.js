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
  */

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
