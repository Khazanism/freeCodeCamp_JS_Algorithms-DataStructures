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

// ===> Chaining If Else Statements <===

// if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

function testSize(num) {
    // Only change code below this line
  
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
  } else if (num < 15) {
    return "Medium";
    [--]
  } else if (num < 20) {
      return "Large";
    } else {
    return "Huge";
  }
  // Only change code above this line
}

console.log(testSize(0));
console.log(testSize(4));
console.log(testSize(5));
console.log(testSize(8));
console.log(testSize(10));
console.log(testSize(14));
console.log(testSize(15));
console.log(testSize(17));
console.log(testSize(20));
console.log(testSize(25));

// ===> Golf Code <===

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
  if (strokes === 1) {
    return names[0];
}
else if (strokes <= par - 2) {
    return names[1];
  }
  else if (strokes === par - 1) {
    return names[2];
}
else if (strokes === par) {
    return names[3];
}
else if (strokes === par + 1) {
    return names[4];
}
else if (strokes === par + 2) {
    return names[5];
}
else {
    return names[6];
}

// Only change code above this line
}

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));

// ===> Selecting from Many Options with Switch Statements <===

// If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

function caseInSwitch(val) {
let answer = "";
// Only change code below this line
switch (val) {
case 1:
answer = "alpha";
break;
case 2:
answer = "beta";
break;
case 3:
answer = "gamma";
break;
case 4:
answer = "delta";
break;
}

// Only change code above this line
return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
                

// ===>Adding a Default Option in Switch Statements<===

// In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
      
      case "b":
        answer = "bird";
        break;
        
        case "c":
          answer = "cat";
      break;

    default:
      answer = "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log(switchOfStuff(4));

// ===> Multiple Identical Options in Switch Statements <===

// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;

    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;

    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));

// ===> Replacing If Else Chains with Switch <===

// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

// if (val === 1) {
  //   answer = "a";
  // } else if (val === 2) {
    //   answer = "b";
    // } else {
      //   answer = "c";
      // } ===> EXDPLANATION
      
      function chainToSwitch(val) {
        let answer = "";
        // Only change code below this line
        switch (val) {
          case "bob":
            answer = "Marley";
            break;
            case 42:
              answer = "The Answer";
              break;
              case 1:
                answer = "There is no #1";
                break;
                case 99:
                  answer = "Missed me by this much!";
                  break;
                  case 7:
                    answer = "Ate Nine";
                    break;
                    
                    default:
                      answer = "";
                    }
                    
                    // Only change code above this line
                    return answer;
                  }

      console.log(chainToSwitch("bob"));
      console.log(chainToSwitch(42));
      console.log(chainToSwitch(1));
      console.log(chainToSwitch(99));
      console.log(chainToSwitch(7));
      console.log(chainToSwitch("John"));
      console.log(chainToSwitch(156));
      
      // ===> Returning Boolean Values from Functions <===.
      
      // You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.
      
      function isLess(a, b) {

        // Only change code below this line
        return a < b;
        
        // Only change code above this line
      }
      
      console.log(isLess(10, 15));
      console.log(isLess(15, 10));
      
      // ===> Return Early Pattern for Functions <==

      // When a return statement is reached, the execution of the current function stops and control returns to the calling location.
      
      // Setup
      function abTest(a, b) {
          // Only change code below this line
          
          if (a < 0 || b < 0) {
              return undefined;
            }
            
            // Only change code above this line
            
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
console.log(abTest(-2, 2));
console.log(abTest(2, -2));
console.log(abTest(2, 8));
console.log(abTest(3, 3));
console.log(abTest(0, 0));

// ===> Counting Cards <==

let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
            case 3:
                case 4:
                    case 5:
                        case 6:
                            count += 1;
                            break;
                            case 7:
                                case 8:
                                    case 9:
                                        count += 0;
                                        break;
                                        case 10:
                                            case "j":
                                                case "q":
                                                    case "k":
                                                        case "a":
                                                            count -= 1;
                                                            break;
                                                        }
                                                        
                                                        
                                                        if (count > 0) {
                                                            return count + "Bet";
                                                        } else {
    return count + "Hold";
}


// Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");


// ===> Counting Cards 01 <==
let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
            case 3:
                case 4:
                    case 5:
                        case 6:
                            count++;
                            break;
                            case 10:
                                case "J":
                                    case "Q":
                                        case "K":
                                            case "A":
                                                count--;
                                                break;
                                            }
                                            if (count > 0) {
                                                return count + " Bet";
                                            } else {
                                                return count + " Hold";
                                            }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// ===> Build JavaScript Objects <==

// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

const myDog = {
    // Only change code below this line
    
    // Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
    
    // Here’s a sample object:
    
    const cat = {
        name: "Whiskers",
        legs: 4,
        tails: 1,
        enemies: ["Water", "Dogs"]
    };

    // Objects are useful for storing data in a structured way, and can represents real world objects, like a cats.
    // Only change code above this line
};

// ===> Build JavaScript Objects <==
const myDog = {
    // Only change code below this line
  name: "lilly",
  legs: 4,
  tails:1,
  "friends": ["mimi", "modi"]
  // Only change code above this line
};

// ===> Accessing Object Properties with Dot Notation <==

// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

// Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line
  
  // ===> Accessing Object Properties with Bracket Notation <==
  
  //   The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

// However, you can still use bracket notation on object properties without spaces.
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
  
  // Only change code below this line
  const entreeValue = testObj ["an entree"];   // Change this line
  const drinkValue = testObj ["the drink"];    // Change this line
  
  
  // ===> Accessing Object Properties with Variables <==
  
  //  Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
  
  // Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj [playerNumber];   // Change this line
console.log(player);

// ===>Updating Object Properties<==

// After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog ["name"] = "happy Coder";


// ===> Add New Properties to a JavaScript Object <==

// You can add new properties to existing JavaScript objects the same way you would modify them.

const myDog = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
};

myDog["bark"] = "woof";
console.log(myDog);

// ===> Delete Properties from a JavaScript Object <==

// Setup
const myDog = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
    bark: "woof",
};

// Only change code below this line
delete myDog.tails;
console.log(myDog);

// ===> Using Objects for Lookups <==

// Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

// Setup
function phoneticLookup(val) {
    let result = "";
    
    //   // Only change code below this line
    //   switch (val) {
        //     case "alpha":
        //       result = "Adams";
        //       break;
        //     case "bravo":
        //       result = "Boston";
        //       break;
        //     case "charlie":
        //       result = "Chicago";
        //       break;
        //     case "delta":
        //       result = "Denver";
        //       break;
        //     case "echo":
        //       result = "Easy";
        //       break;
        //     case "foxtrot":
        //       result = "Frank";
        //   }
        
        //   // Only change code above this line
        //   return result;
        // }
        
// phoneticLookup("charlie");

// Setup
function phoneticLookup(val) {
    let result = "";
    
    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    
    result = lookup[val]
    // Only change code above this line
    return result;
}

console.log(phoneticLookup("alpha"));
console.log(phoneticLookup("bravo"));a
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("delta"));
console.log(phoneticLookup("echo"));
console.log(phoneticLookup("foxtrot"));
//   console.log(phoneticLookup(""));

// ===> Testing Objects for Properties <==

// Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
    // Only change code above this line
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet"));
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house"));
console.log(checkObj({ city: "Seattle" }, "city"));
console.log(checkObj({ city: "Seattle" }, "district"));
console.log(checkObj({ pet: "kitten", bed: "sleigh" }, "gift"));

// ===> Manipulating Complex Objects <==

// Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Polar Bear",
        "title": "Aqua Man",
        "release_year": 2005,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];

// ===> Accessing Nested Objects <==

// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

const myStorage = {
    car: {
        inside: {
            "glove box": "maps",
            "passenger seat": "crumbs",
        },
        outside: {
            trunk: "jack",
        },
    },
};

// let x = myStorage.car["inside"]["glove box"];
const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

// ===> Accessing Nested Arrays <==

// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

const myPlants = [
    {
        type: "flowers",
        list: ["rose", "tulip", "dandelion"],
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"],
    },
];

const secondTree = myPlants[1].list[1];

console.log(secondTree);

// ===> Record Collection <==

// Setup
const recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
},
1245: {
    artist: "Robert Palmer",
    tracks: [],
},
5439: {
      albumTitle: "ABBA Gold",
  },
};

// Only change code below this line

function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id][prop] == undefined) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
} else if (value === "") {
    delete records[id][prop];
}
return records;
}

console.log(
    JSON.stringify(updateRecords(recordCollection, 5439, "artist", "ABBA"))
    );
    console.log(
        updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
        );
        console.log(
            JSON.stringify(updateRecords(recordCollection, 2548, "artist", ""))
            );
            console.log(
                JSON.stringify(
                    updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
        )
        );
        console.log(
            JSON.stringify(updateRecords(recordCollection, 2468, "tracks", "Free"))
);
console.log(
    JSON.stringify(updateRecords(recordCollection, 2548, "tracks", ""))
    );
    console.log(
        JSON.stringify(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"))
        );
        
// ===> Iterate with JavaScript While Loops <==

// The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.
// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i >= 0) {
    myArray.push(i);
  i--;
}
console.log(myArray);


// ===> Iterate with JavaScript For Loops <==

// You can run the same code multiple times by using a loop.

// The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

// For loops are declared with three optional expressions separated by semicolons:

// for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

// The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

// Setup
const myArray = [];

// Only change code below this line
 for (let i = 1; i <= 5; i++) {
   myArray.push(i);
 };

 console.log(myArray);
 
 // ===> Iterate Odd Numbers With a For Loop <==

// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
};

console.log(myArray);


// ===> Count Backwards With a For Loop <===

// A for loop can also count backwards, so long as we can define the right conditions.

// In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

// Setup
const myArray = [];

// Only change code below this line

for ( let i = 9; i > 0; i -= 2) {
    myArray.push(i) ;
};

console.log(myArray);

// ===> Iterate Through an Array with a For Loop <===

// A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
};

console.log(total);

// ===> Nesting For Loops <===

// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays.

function multiplyAll(arr) {
    let product = 1;
  // Only change code below this line
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
}
// Only change code above this line
return product;
}

console.log(multiplyAll([[1], [2], [3]]));
console.log(
    multiplyAll([
        [1, 2],
        [3, 4],
    [5, 6, 7],
])
);
console.log(
    multiplyAll([
        [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
])
);

// ===> Iterate with JavaScript Do...While Loops <===

// It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i < 5);
{
    // myArray.push(i);
    // i++;
}

console.log(myArray);
console.log([i]);

// ===> Replace Loops using Recursion <===

// Recursion is the concept that a function can be expressed in terms of itself.

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

console.log(sum([1], 0));

console.log(sum([2, 3, 4], 1));

console.log(sum([2, 3, 4, 5], 3));

// ===> Profile Lookup <===

// Setup
const contacts = [
    {
        firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
},
{
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
},
{
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
},
{
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
    // Only change code above this line
}
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));

// ===> Generate Random Fractions with JavaScript <===

// Random numbers are useful for creating random behavior.

// JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

// Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

function randomFraction() {
    // Only change code below this line
    
    return Math.random();
    
    // Only change code above this line
}
console.log(randomFraction());

// ===> Generate Random Whole Numbers with JavaScript <===

// It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

// Use Math.random() to generate a random decimal.
// Multiply that random decimal by 20.
// Use another function, Math.floor() to round the number down to its nearest whole number.
// Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.
function randomWholeNum() {
    
    // Only change code below this line
    
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());


// ===> Generate Random Whole Numbers within a Range <===

// Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

// To do this, we'll define a minimum number min and a maximum number max.

// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

// Math.floor(Math.random() * (max - min + 1)) + min

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // Only change code above this line
}

console.log(randomRange(1, 2));

// ===> Use the parseInt Function <===

// The parseInt() function parses a string and returns an integer.

function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));
console.log(convertToInteger("77"));
console.log(convertToInteger("JamesBond"));

// ===> Use the parseInt Function with a Radix <===

// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"));
console.log(convertToInteger("111001"));
console.log(convertToInteger("JamesBond"));

// ===> Use the Conditional (Ternary) Operator <===

// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

// The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2));
console.log(checkEqual(1, 1));
console.log(checkEqual(1, -1));


// ===> Use Multiple Conditional (Ternary) Operators <===

// In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

// The following function uses if, else if, and else statements to check multiple conditions:

// function findGreaterOrEqual(a, b) {
//   if (a === b) {
    //     return "a and b are equal";
//   }
//   else if (a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater";
//   }
// }
// The above function can be re-written using multiple conditional operators:

// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal" 
//     : (a > b) ? "a is greater" 
//     : "b is greater";
// }

function checkSign(num) {
  return num > 0 ? "positive" 
  : num < 0 ? "negative" 
  : "zero";
}

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));

// ===> Use Recursion to Create a Countdown <===

// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
    // return;
}
// Only change code above this line
console.log(countdown(-1));
console.log(countdown(10));
console.log(countdown(5));
*/

// ===> Use Recursion to Create a Range of Numbers <===

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const x = rangeOfNumbers(startNum, endNum - 1);
    x.push(endNum);
    return x;
  }
}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));
