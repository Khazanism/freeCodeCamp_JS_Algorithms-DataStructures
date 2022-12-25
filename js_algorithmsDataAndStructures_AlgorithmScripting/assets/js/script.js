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
*/

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
  if (num < 0) {
    return "";
  }

  if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
