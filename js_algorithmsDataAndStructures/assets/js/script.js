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

*/

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