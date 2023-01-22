//  js_algorithmsDataAndStructures

/*
 */
// ---> Intermediate Algorithm Scripting <---
// ---> Sum All Numbers in a Range <---
function sumAll(arr) {
  return arr.sort((a, b) => a - b).reduce((a, b) => a + b);

  // return 1;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
