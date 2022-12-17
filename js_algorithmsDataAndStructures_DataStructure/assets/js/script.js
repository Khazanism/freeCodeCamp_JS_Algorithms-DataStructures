//  js_algorithmsDataAndStructures

/*
// ---> Use an Array to Store a Collection of Data <---
let yourArray = ["a", 1, undefined, 50, true]; // Change this line
console.log(yourArray.length);
// ---> Access an Array's Contents Using Bracket Notation <---

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "A7o";
// Only change code above this line
console.log(myArray);

// ---> Add Items to an Array with push() and unshift() <---

function mixedNumbers(arr) {
    // Only change code below this line
    arr.push(7, "VIII", 9);
    arr.unshift("I", 2, "three");
    // Only change code above this line
    return arr;
}
console.log(mixedNumbers(["IV", 5, "six"]));

// ---> Remove Items from an Array with pop() and shift() <---
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// ---> Remove Items Using splice() <---

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);

// ---> Add Items Using splice() <---

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(
    htmlColorNames([
        "DarkGoldenRod",
        "WhiteSmoke",
        "LavenderBlush",
        "PaleTurquoise",
        "FireBrick",
    ])
    );
    
    // ---> Copy Array Items Using slice() <---
    
    function forecast(arr) {
        // Only change code below this line
        //   arr.splice(0, 2); // answer 1
//   arr.splice(2, 4); // answer 1
//   let forecast = arr .slice(0,1); // answer 1
return arr.slice(2, 4); // answer 2
}

  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  
  // ---> Copy an Array with the Spread Operator <---
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  console.log(copyMachine([true, false, true], 2));
  console.log(copyMachine([1, 2, 3], 5));
  console.log(copyMachine([true, true, null], 1));
  console.log(copyMachine(["it works"], 3));
  
  // ---> Combine Arrays with the Spread Operator <---
  
  // Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index.

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

console.log(spreadOut());

// ---> Check For The Presence of an Element With indexOf() <---

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) === -1) {
    return false;
  } else {
    return true;
  }
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
console.log(quickCheck(["onions", "squash", "shallots"], "onions"));
console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
console.log(quickCheck([true, false, false], undefined));

// ---> Iterate Through All an Array's Items Using For Loops <---

function filteredArray(arr, elem) {
  let newArr = [];

  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

// ---> Create complex multi-dimensional arrays <---

let myNestedArray = [
  // Only change code below this line

  ["unshift", false, 1, 2, 3, "complex", "nested"],
  
  [["loop", "shift", 6, 7, 1000, "method"]],

  [
    [
      ["concat", false, true, "spread", "array"],
      ["mutate", 1327.98, "splice", "slice", "push"],
    ],
  ],

  [[[["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"]]]],
  
  // Only change code above this line
];
myNestedArray[1][0][0] = "deep";
myNestedArray[2][0][0][1] = "deeper";
myNestedArray[3][0][0][0][2] = "deepest";
console.log(myNestedArray[3][0][0][0][2]);
console.log(myNestedArray[2][0][0]);
console.log(myNestedArray);

// ---> Add Key-Value Pairs to JavaScript Objects <---

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line
// const bananas = "bananas";
// foods[bananas] = 13;
// const strawberries = "strawberries";
// foods[strawberries] = 27;
// const grapes = "grapes";
// foods[grapes] = 35;

foods.bananas = 13;
foods.strawberries = 27;
foods.grapes = 35;
// Only change code above this line

console.log(foods);

// ---> Modify an Object Nested Within an Object <---

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45
// Only change code above this line

console.log(userActivity);

// ---> Access Property Names with Bracket Notation <---

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));

// ---> Use the delete Keyword to Remove Object Properties <---

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);

// ---> Check if an Object has a Property <---

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));
  
  // ---> Iterate Through the Keys of an Object with a for...in Statement <---

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let usersOnline = 0;
  //  let userStatus = usersObj[users][online];
  for (let user in users) {
    let onlineStatus = usersObj[user]["online"];
    if (onlineStatus) {
      usersOnline += 1;
    }
  }
  console.log(usersOnline);
  return usersOnline;
  // Only change code above this line
}

console.log(countOnline(users));
*/

// ---> Generate an Array of All Object Keys with Object.keys() <---

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
  // Only change code below this line

  return Object.keys(obj)
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
