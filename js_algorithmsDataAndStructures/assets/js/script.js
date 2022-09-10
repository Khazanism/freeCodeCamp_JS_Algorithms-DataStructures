//  js_algorithmsDataAndStructures

/*

// ===>Find the length of the string<===
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastNameLength);


// ===>Use Bracket Notation to Find the First Character in a String<===

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
// firstLetterOfLastName = lastName; // Change this line
firstLetterOfLastName = lastName[0]; // Change this line


// ===>Understand String Immutability<===

// Setup
let myStr = "Jello World";

// Only change code below this line
//Correct the assignment to myStr so it contains 
//the string value of Hello World 

// myStr[0] = "H"; // Change this line
myStr = "Hello World"; // Change this line
// Only change code above this line



// ===>Use Bracket Notation to Find the Nth Character in a String<===

// Setup
const lastName = "Lovelace";

//You can also use bracket notation to get the character at other positions within a string.

//Remember that computers start counting at 0, so the first character is actually the zeroth character.

// Only change code below this line
// const thirdLetterOfLastName = lastName; // Change this line
const thirdLetterOfLastName = lastName[2]; // Change this line


// ===>Use Bracket Notation to Find the Last Character in a String<===

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line


// ===>Use Bracket Notation to Find the Nth-to-Last Character in a String<===

// Setup
const lastName = "Lovelace";

// Only change code below this line
// const secondToLastLetterOfLastName = lastName; // Change this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line



// ===> Word Blanks <===

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
// const wordBlanks = ""; // Change this line
const wordBlanks = "The" + " " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
console.log(wordBlanks)
// Only change code above this line


// ===> Store Multiple Values in one Variable using JavaScript Arrays <===

// Only change code below this line
// const myArray = [];
const myArray = ["This is number", 9];



// ===>Nest one Array within Another Array<===

// Only change code below this line
// const myArray = [];
const myArray = [["Salme", 29], ["Fayzeh", 25], ["Farhad", 26]];

// This is also called a multi-dimensional array.
// Create a nested array called myArray.


// ===> Access Array Data with Indexes <===
// const myArray = [50, 60, 70]; 

// Array indexes are written in the same bracket notation 
//that strings use, except that instead of specifying a character, 
//they are specifying an entry in the array. Like strings, 
//arrays use zero-based indexing, 
//so the first element in an array has an index of 0.

const myArray = [50, 60, 70];
const myData = myArray[0];
console.log(myData);

// ===> Modify Array Data With Indexes <===
// Setup
// const myArray = [18, 64, 99];

const myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

// Only change code below this line

// Unlike strings, the entries of arrays are mutable
// and can be changed freely,
//even if the array was declared with const.


// ===> Access Multi-Dimensional Arrays With Indexes <===
// One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

// Example
// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
//   ];

//   const myData = myArray[0][0];

const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14], ];
const myData = myArray[2][1];
console.log(myData);

// ===> Manipulate Arrays With push() <===

// An easy way to append data to the end of an array is via the push() function.

// .push() takes one or more parameters and "pushes" them onto the end of the array.

// Setup
const myArray = [["John", 23], ["cat", 2]];


// Only change code below this line
myArray.push(["dog", 3]);
console.log(myArray);
// Only change code below this line

// ===> Manipulate Arrays With pop() <===

// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

// Setup
// const myArray = [["John", 23], ["cat", 2]];
const myArray = [["John", 23], ["cat", 2]];

const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);
console.log(myArray);

// Only change code below this line

// ===> Manipulate Arrays With shift() <===

// Setup
// pop() always removes the last element of an array. What if you want to remove the first?
// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last

// const myArray = [["John", 23], ["dog", 3]];
const myArray = [["John", 23], ["dog", 3]];

const removedFromMyArray = myArray.shift();
console.log(myArray);
console.log(removedFromMyArray);

// Only change code below this line

// ===> Manipulate Arrays With unshift() <===

// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line
myArray.unshift(["Paul", 35]);
console.log(myArray);

// ===> Shopping List <===
// create a shopping list with 5 elements 
// const myList = [];
// answer below
const myList = [
    ["Mars", 15],
    ["Snikkers", 14],
    ["Kitkat", 13],
    ["Bueno", 12],
    ["Milka", 11],
];
console.log(myList);
*/

// ===> Write Reusable JavaScript with Functions <===

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();


