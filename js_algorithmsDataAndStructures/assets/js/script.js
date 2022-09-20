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

// ===> Write Reusable JavaScript with Functions <===

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// ===> Passing Values to Functions with Arguments <===
// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

function functionWithArgs(x, y) {
    console.log(x + y);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

// ===> Return a Value from a Function with Return <===

// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

function timesFive(num) {
    return num*5;
    
}

const answer = timesFive(5);


// ===> Global Scope and Functions <===

// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope.
// This means, they can be seen everywhere in your JavaScript code.

// Variables which are declared without the let or const keywords are automatically created in the global scope.
// This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

// Declare the myGlobal variable below this line

// answer
const myGlobal = 10
// answer

function fun1() {
    // Assign 5 to oopsGlobal Here
}

// answer
const oopsGlobal = 5
// answer

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}


// ===> Local Scope and Functions <===

// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

function myLocalScope() {
    // Only change code below this line
    // answer
    const myVar = "Potato"
    // answer
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// ===> Global vs. Local Scope in Functions <===

// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    // answer
    const outerWear = "sweater";
    // answer
    // Only change code above this line
    return outerWear;
}

myOutfit();


// ===> Understanding Undefined Value returned from a Function <===

// A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement,
// when you call it, the function processes the inner code but the returned value is undefined.

// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
console.log(sum);

// ===> Assignment with a Returned Value <===

// If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
console.log(processed);

// ===> Stand in Line <===

// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removed = arr.shift();
    return removed;
    
    //   return item;
    // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

console.log(nextInLine([], 1));
console.log(nextInLine([2], 1));
console.log(nextInLine([5, 6, 7, 8, 9], 1));
console.log(nextInLine(testArr, 10));
console.log(testArr[4]);


// ===> Understanding Boolean Values <===

// Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.

// Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

function welcomeToBooleans() {
    // Only change code below this line
    
    return  true//false; // Change this line
    
    // Only change code above this line
}

// ===> Use Conditional Logic with If Statements <===

// if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

// When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
    
    // Only change code above this line
}

trueOrFalse(true);
// trueOrFalse(false);

// ===> Comparison with the Equality Operator == <===

// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

// The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

// Setup
function testEqual(val) {
    if (val == 12) {
        // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);
//answer
testEqual(12);
//answer

// ===> Comparison with the Strict Equality Operator === <===

// Setup
function testStrict(val) {
    if (val === 7) {
        // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);
testStrict(7);

// ===> Practice comparing different values <===

// In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

// Setup
function compareEquality(a, b) {
    if (a == b) {
        // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");
compareEquality(20, "20");

// ===> Comparison with the Inequality Operator <===

// Setup
function testNotEqual(val) {
    if (val != "99") {
        // Change this line
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual("99"));
console.log(testNotEqual(99));
console.log(testNotEqual(12));
console.log(testNotEqual("12"));
console.log(testNotEqual("bob"));


// ===> Comparison with the Strict Inequality Operator <===

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) {
        // Change this line
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(17));
console.log(testStrictNotEqual("17"));
console.log(testStrictNotEqual(12));
console.log(testStrictNotEqual("bob"));

// ===> Comparison with the Greater Than Operator <===

// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, the greater than operator will convert data types of values while comparing.

function testGreaterThan(val) {
    if (val > 100) {
        // Change this line
        return "Over 100";
    }
    
    if (val > 10) {
        // Change this line
        return "Over 10";
    }
    
    return "10 or Under";
}

console.log(testGreaterThan(0));
console.log(testGreaterThan(10));
console.log(testGreaterThan(11));
console.log(testGreaterThan(99));
console.log(testGreaterThan(100));
console.log(testGreaterThan(101));
console.log(testGreaterThan(150));

// ===> Comparison with the Greater Than Or Equal To Operator <===

function testGreaterOrEqual(val) {
    if (val >= 20) {
        // Change this line
        return "20 or Over";
    }
    
    if (val >= 10) {
        // Change this line
        return "10 or Over";
    }
    
    return "Less than 10";
}

console.log(testGreaterOrEqual(0));
console.log(testGreaterOrEqual(9));
console.log(testGreaterOrEqual(10));
console.log(testGreaterOrEqual(11));
console.log(testGreaterOrEqual(19));
console.log(testGreaterOrEqual(100));
console.log(testGreaterOrEqual(21));

// ===> Comparison with the Less Than Operator <===

function testLessThan(val) {
    if (val < 25) {
        // Change this line
        return "Under 25";
    }
    
    if (val < 55) {
        // Change this line
        return "Under 55";
    }
    
    return "55 or Over";
}

console.log(testLessThan(0));
console.log(testLessThan(24));
console.log(testLessThan(25));
console.log(testLessThan(54));
console.log(testLessThan(55));
console.log(testLessThan(99));

// ===> Comparison with the Less Than Or Equal To Operator <===

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }
    
    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }
    
    return "More Than 24";
}

console.log(testLessOrEqual(0));
console.log(testLessOrEqual(11));
console.log(testLessOrEqual(12));
console.log(testLessOrEqual(23));
console.log(testLessOrEqual(24));
console.log(testLessOrEqual(25));
console.log(testLessOrEqual(55));

// ===> Comparisons with the Logical And Operator <===

// Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

function testLogicalAnd(val) {
    // Only change code below this line
    
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    
    // Only change code above this line
    return "No";
}

console.log(testLogicalAnd(0));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));

// ===> Comparisons with the Logical Or Operator || <===

// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

function testLogicalOr(val) {
    // Only change code below this line
    
    if (val > 20 || val < 10) {
        return "Outside";
    }
    
    // Only change code above this line
    return "Inside";
}
console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log(testLogicalOr(25));

// ===> Introducing Else Statements <===

// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

function testElse(val) {
    let result = "";
    // Only change code below this line
    
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    
    // Only change code above this line
    return result;
}

console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log(testElse(10));

// ===> Introducing Else If Statements <===

// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(0));
console.log(testElseIf(5));
console.log(testElseIf(7));
console.log(testElseIf(10));
console.log(testElseIf(12));
*/

// ===> Logical Order in If Else Statements <===

// Order is important in if, else if statements.

// The function is executed from top to bottom so you will want to be careful of what statement comes first.

function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(0));
console.log(orderMyLogic(4));
console.log(orderMyLogic(6));
console.log(orderMyLogic(11));
