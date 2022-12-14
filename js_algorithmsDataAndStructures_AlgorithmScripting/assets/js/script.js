//  js_algorithmsDataAndStructures

/*
// ---> Convert Celsius to Fahrenheit <---
function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(20));
console.log(convertCtoF(30));

// ---> Reverse a String <---

function reverseString(str) {
  let array = str.split("").reverse().join("");
  return array;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));

// ---> Factorialize a Number <---
function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(5));

// ---> Find the Longest Word in a String <---

// ------------------> option 1
function findLongestWordLength(str) {
  let array = str.split(" ");
  if (array.length == 1) {
    return array[0].length;
  }

  return Math.max(
    array[0].length,
    findLongestWordLength(array.slice(1).join(" "))
    );
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
  );

console.log(findLongestWordLength("May the force be with you"));

console.log(findLongestWordLength("Google do a barrel roll"));

console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow"
    )
    );
    
    console.log(
      findLongestWordLength(
        "What if we try a super-long word such as otorhinolaryngology"
        )
        );
        // ------------------> option 2
        
function findLongestWordLength(str) {
  let longestLength = 0;
  let currentLength = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      currentLength = 0;
    } else {
      currentLength++;
    }
  }
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }
  
  return longestLength;
}

// ------------------> option 3

function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  
  return maxLength;
}

// ------------------> option 4

function findLongestWordLength(s) {
  return s
  .split(" ")
  .reduce((longest, word) => Math.max(longest, word.length), 0);
}

// ------------------> option 5

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

// ---> Return Largest Numbers in Arrays <---

function largestOfFour(array) {
  // variabeles
  const result = [];
  // iterating throught first array
  for (let i = 0; i < array.length; i++) {
    let largestNumber = array[i][0];
    // iterating throught second array
    for (let j = 1; j < array[i].length; j++) {
      if (array[i][j] > largestNumber) {
        largestNumber = array[i][j];
      }
    }
    result[i] = largestNumber;
  }
  return result;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1], 
  ])
  );
  
  console.log(
    largestOfFour([
      [4, 9, 1, 3],
      [13, 35, 18, 26],
      [32, 35, 97, 39],
      [1000000, 1001, 857, 1],
    ])
    );
    
    console.log(
      largestOfFour([
        [17, 23, 25, 12],
        [25, 7, 34, 48],
        [4, -10, 18, 21],
        [-72, -3, -17, -10],
      ])
      );
      
      // ---> Confirm the Ending <---
      
      function confirmEnding(str, target) {
        var target = target;
        let strRegex = new RegExp(target + "$");
        
        let result = strRegex.test(str);
        
        // console.log(str.includes(target));
        
        return result;
      }
      
      console.log(confirmEnding("Bastian", "n"));
      console.log(confirmEnding("Connor", "n"));
      
      // ---> Repeat a String Repeat a String <---
// --------------------> 1st answer (while loop)
function repeatStringNumTimes(str, num) {
  let stringNum = "";
  while (num > 0) {
    stringNum += str;
    num--;
  }
  return stringNum;
}
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));

// --------------------> 2nd answer (recursion)
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

// ---> Truncate a String <---

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num) + "...";
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
    )
    );
    
    console.log(
      truncateString(
        "A-tisket a-tasket A green and yellow basket",
        "A-tisket a-tasket A green and yellow basket".length + 2
    )
    );
    
    console.log(truncateString("A-", 1));
    
    console.log(truncateString("Absolutely Longer", 2));
    
// --------------------> 2nd answer (terenary operator)
function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0, num) + "...";
}

// ---> Finders Keepers <---
// --------------------> 1st answer
function findElement(arr, func) {
  let num = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(arr[i]);
    if (element === 0) {
      return undefined;
    } else if (func(arr[i]) == true) {
      return arr[i];
    }
  }
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));

console.log(findElement([1, 3, 5, 9], (num) => num % 2 === 0));

// --------------------> 2nd answer

function findElement(arr, func) {
  return arr.find(func);
}

// ---> Boo who <---

function booWho(bool) {
  if (typeof bool == "boolean") {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho("false"));
console.log(booWho(null));
console.log(booWho(NaN));

// ---> Title Case a Sentence <---

// --------------------> 1st answer

function titleCase(str) {
  let text = str;
  let word = [];
  const myArray = text.split(" ");
  for (let i = 0; i < myArray.length; i++) {
    word[i] = myArray[i][0].toUpperCase() + myArray[i].slice(1).toLowerCase();

    console.log(word[i]);
  }
  return word.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// --------------------> 2nd answer

function titleCase(str) {
  let sentence = str.toLowerCase();
  let regx = /(^|\s)\S/g;
  let result = sentence.replace(regx, func => func.toUpperCase());
  return result;
}

console.log(titleCase("I'm a little tea pot"));


// ---> Slice and Splice <---

function frankenSplice(arr1, arr2, n) {
  console.log(arr2.splice(n, ...arr2));
  
  const elementOfFirst = arr1.slice();
  // console.log(elementOfFirst);
  // console.log(arr2[n]);
  const elementOfSecond = arr2.splice(n, ...arr2);
  console.log([elementOfSecond, elementOfFirst]);
  
  // return arr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// --------------------> 1st answer

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

// --------------------> 2nd answer

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

// --------------------> 3rd answer

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

// ---> Remove all falsy values from an array - Falsy Bouncer <---

// --------------------> 1st answer
function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

// --------------------> 2nd answer

function bouncer(arr) {
  let filtered = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filtered.push(arr[i]);
  }
  
  return filtered;
}

// ---> Return the lowest index from an array - Where do I Belong <---

// --------------------> 1st answer

function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return arr.indexOf(arr[i]);
    }
  }
  return arr.length;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([, 1], 1));

// --------------------> 2nd answer

function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
  }

  // ---> Mutations <---
  
  function mutation(arr) {
  let firstElement = arr[0].toLowerCase().split("");
  let secondElement = arr[1].toLowerCase().split("");
  
  for (let i = 0; i < secondElement.length; i++) {
    console.log(secondElement[i]);
    if (firstElement.indexOf(secondElement[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Noel", "Ole"]));
*/

// ---> Basic Algorithm Scripting: Chunky Monkey <---

// --------------------> 1st answer
function chunkArrayInGroups(arr, size) {
  let newArray = [];

  arr.slice(0, size);

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    newArray.push(arr[i]);
    // console.log(newArray);
  }
  return [arr.slice(0, size), arr.slice(size)];
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

// --------------------> 2nd answer
function chunkArrayInGroups(arr, size) {
  var newArray = [];
  for (let i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }
  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

// --------------------> 3rd answer
function chunkArrayInGroups(arr, size) {
  var newArray = [];
  while (arr.length) {
    newArray.push(arr.splice(0, size));
  }
  return newArray;
}
