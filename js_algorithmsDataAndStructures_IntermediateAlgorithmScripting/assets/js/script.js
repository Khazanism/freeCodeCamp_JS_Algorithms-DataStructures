//  js_algorithmsDataAndStructures

/*
// ---> Intermediate Algorithm Scripting <---
// ---> Sum All Numbers in a Range <---

// ----------> 1st Opt
function sumAll(arr) {
  let min, max;
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0];
  }
  
  let sum = 0;
  
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
console.log(sumAll([1, 0]));

// ----------> 2nd Opt

function sumAll(arr) {
  const min = arr[0] < arr[1] ? arr[0] : arr[1];
  const max = arr[0] > arr[1] ? arr[0] : arr[1];
  
  let sum = 0;
  
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
}

// ----------> 3rd Opt

function sumAll(arr) {
  let sum = 0;
  
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  
  return sum;
}
*/

// ---> Sum All Numbers in a Range <---

function diffArray(arr1, arr2) {
  const newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
