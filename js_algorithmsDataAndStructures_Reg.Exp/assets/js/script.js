//  js_algorithmsDataAndStructures

/*
// ---> Using the Test Method <---

// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
// If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. 
// The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let myString = "Hello, World!";
let myRegex = /Hello/;
// let result = myRegex; // Change this line

let result = myRegex.test(myString); // Change this line

// ---> Match Literal Strings <---

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

// ---> Match a Literal String with Different Possibilities <---

// Using regexes like /coding/, you can look for the pattern coding in another string.
// This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

// ---> Ignore Case While Matching <---

// You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag.
// You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line ------> the i 
let result = fccRegex.test(myString);

// ---> Extract Matches <---

// You can also extract the actual matches you found with the .match() method.
// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result);

// ---> Find More Than the First Match <---

// To search or extract a pattern more than once, you can use the global search flag: g.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result);

// ---> Match Anything with Wildcard Period <---

// Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

// The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /run|sun|fun|pun|nun|bun./; // Change this line
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

// ---> Match Single Character with Multiple Possibilities <---

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);

// ---> Match Letters of the Alphabet <---

// Inside a character set, you can define a range of characters to match using a hyphen character: -.
// For example, to match lowercase letters a through e you would use [a-e].

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

// ---> Match Numbers and Letters of the Alphabet <---

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);

// ---> Match Single Characters Not Specified <---

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);

// ---> Match Characters that Occur One or More Times <---

// You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

// If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);

// ---> Match Characters that Occur Zero or More Times <---

// There's also an option that matches characters that occur zero or more times.
// The character to do this is the asterisk or star: *.

// Only change code below this line
// let chewieRegex = /Aa/; // Change this line * is before /
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result);

// ---> Find Characters with Lazy Matching <---

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(text.match(myRegex));


// ---> Find One or More Criminals in a Hunt <---

let text = "P1P5P4CCCcP2P6P3";
let reCriminals = /C+/g; // Change this line

let result = text.match(reCriminals);
console.log(result);

// ---> Match Beginning String Patterns <---

// Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result);

// ---> Match Ending String Patterns <---
// You can search the end of strings using the dollar sign character $ at the end of the regex.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
console.log(result);
*/

// ---> Match All Letters and Numbers <---
// shorthand character classes----> the name of shortcut character classes

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);
