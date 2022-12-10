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
*/

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