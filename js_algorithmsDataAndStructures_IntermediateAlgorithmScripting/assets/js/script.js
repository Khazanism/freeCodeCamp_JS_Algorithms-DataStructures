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

// ---> Diff Two Arrays <---

// ----------> 1st Opt
function diffArray(arr1, arr2) {
  const newArr = [];
  
  for (let i = 0; i < arr1.length; i++) {
    if (!newArr.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  
  for (let i = 0; i < arr2.length; i++) {
    if (!newArr.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  
  const symmDif = [];
  for (let i = 0; i < newArr.length; i++) {
    const currentEl = newArr[i];
    if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
      symmDif.push(currentEl);
    } else if (arr2.includes(currentEl) && !arr1.includes(currentEl)) {
      symmDif.push(currentEl);
    }
  }
  return symmDif;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

// ----------> 2nd Opt
function diffArray(arr1, arr2) {
  const newArr = [];
  
  for (const el of arr1) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }
  
  for (const el of arr2) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }
  
  const symmDif = [];
  for (const currentEl of newArr) {
    if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
      symmDif.push(currentEl);
    } else if (arr2.includes(currentEl) && !arr1.includes(currentEl)) {
      symmDif.push(currentEl);
    }
  }
  return symmDif;
}

// ----------> 3rd Opt

// The Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references.
// Note: Set() can only be constructed with new. Attempting to call it without new throws a TypeError.

function diffArray(arr1, arr2) {
  const newArr = new Set([...arr1, ...arr2]);
  console.log(newArr);
  const symmDif = [];
  for (const currentEl of newArr) {
    if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
      symmDif.push(currentEl);
    } else if (arr2.includes(currentEl) && !arr1.includes(currentEl)) {
      symmDif.push(currentEl);
    }
  }
  return symmDif;
}

// ---> Seek and Destroy <---

// ----------> 1st Opt
function destroyer(arr) {
  const newArr = Array.from(arguments).slice(1);
  console.log(newArr); // object withot arr.
  
  return arr.filter((val) => !newArr.includes(val));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan"
    )
    );
    
    // ----------> 2nd Opt
    
    function destroyer(arr, ...newArr) {
      return arr.filter((val) => !newArr.includes(val));
    }
    
    // ---> Wherefore art thou <---
// ----------> 1st Opt
function whatIsInAName(collection, source) {
  const arr = [];
  const keys = Object.keys(source);
  console.log(keys); // keys of source.
  
  for (const obj of collection) {
    let keyVal = true;
    for (const key of keys) {
      if (obj[key] !== source[key]) {
        keyVal = false;
        break;
      }
    }
    if (keyVal) {
      arr.push(obj);
    }
  }
  return arr;
}

let x = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
  );
  
  console.log(x);
  
  // ----------> 2nd Opt
  
  function whatIsInAName(collection, source) {
    const keys = Object.keys(source);
    console.log(keys); // keys of source.
    
    return collection.filter((obj) => {
      let keyVal = true;
      for (const key of keys) {
        if (obj[key] !== source[key]) {
          keyVal = false;
          break;
        }
      }
      
      return keyVal;
      
      // if (keyVal) {
        //   return true;
        // } else {
          //   return false;
          // }
        });
      }
      
      let x = whatIsInAName(
        [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" },
      ],
      { last: "Capulet" }
      );
      
      console.log(x);
      
      // ----------> 2nd Opt
      
      function whatIsInAName(collection, source) {
        const keys = Object.keys(source);
        return collection.filter((obj) => {
          return keys.reduce((acc, key) => {
            if (obj[key] !== source[key]) {
              return false;
            }
            return acc;
          }, true);
        });
      }
      
      let x = whatIsInAName(
        [
          { first: "Romeo", last: "Montague" },
          { first: "Mercutio", last: null },
          { first: "Tybalt", last: "Capulet" },
        ],
        { last: "Capulet" }
        );
        
        console.log(x);
        */

// ---> Spinal Tap Case <---

// ----------> 1st Opt

function spinalCase(str) {
  const words = [];
  let word = "";

  for (const c of str) {
    if (c === "_" || c === " ") {
      words.push(word);
      word = "";
    } else if (c >= "A" && c <= "Z" && !word.length) {
      word = c.toLowerCase();
    } else if (c >= "A" && c <= "Z" && word.length) {
      words.push(word);
      word = c.toLowerCase();
    } else {
      word += c;
    }
  }

  if (word.length) {
    words.push(word);
  }
  const spinalCase = words.join("-");
  return spinalCase;
}

console.log(spinalCase("This Is Spinal Tap"));

console.log(spinalCase("AllThe-small Things"));

// 1- all lowercase
// 2- (_) and " " (spaces) becomes hyphens(-)
// 3- capital case always determine the start  of a new word(but not always the case)
