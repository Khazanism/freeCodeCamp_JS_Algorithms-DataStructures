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

// ---> Match All Letters and Numbers <---
// shorthand character classes----> the name of shortcut character classes

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);

// ---> Match Everything But Letters and Numbers <---

// ou can search for the opposite of the \w with \W. 
// Note, the opposite pattern uses a capital letter.
//This shortcut is the same as [^A-Za-z0-9_].

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);

// ---> Match All Numbers <---

// The shortcut to look for digit characters is \d, with a lowercase d.
// This is equal to the character class [0-9], 
// which looks for a single character of any number between zero and nine.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
console.log(result);

// ---> Match All Non-Numbers <---

// The shortcut to look for non-digit characters is \D.
// This is equal to the character class [^0-9], 
// which looks for a single character that is not a number between zero and nine.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
console.log(result);

// ---> Restrict Possible Usernames <---

let username = "Z97";
let userCheck = /^[a-z][a-z]+\d*$|[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
console.log(result);

// ---> Match Whitespace <---

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

// ---> Match Non-Whitespace Characters <---

// You can also search for everything except whitespace.

// Search for non-whitespace using \S, which is an uppercase s.
// This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
// You can think of it being similar to the character class [^ \r\t\f\n\v].

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
console.log(result);

// ---> Specify Upper and Lower Number of Matches <---

// Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters.
// These are convenient but sometimes you want to match a certain range of patterns.
// You can specify the lower and upper number of patterns with quantity specifiers.
// Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);

// ---> Specify Only the Lower Number of Matches <---

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
console.log(result);

// ---> Specify Exact Number of Matches <---

// To specify a certain number of patterns, just have that one number between the curly brackets.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
console.log(result);

// ---> Check for All or None <---

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
console.log(result);


// ---> Positive and Negative Lookahead <---

// positive lookahead ---> (?=...)  where the ... is the required part that is not matched.
// negative lookahead ---> (?!...)  where the ... is the pattern that you do not want to be there. 

// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{5,})(?=\d\d*)/; // Change this line
// let result = pwRegex.test(sampleWord);
// console.log(result);

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d\d)/; // Change this line----------> check
let result = pwRegex.test(sampleWord);
console.log(result);


// ---> Check For Mixed Grouping of Characters <---

// let myString = "Eleanor Roosevelt";
let myString = "Franklin D. Roosevelt";
let myRegex = /(Franklin|Eleanor)\s.*Roosevelt/; // Change this line
// let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // option 2 --> model answer
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result);

// ---> Reuse Patterns Using Capture Groups <---

let repeatNum = "42 42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);

// ---> Use Capture Groups to Search and Replace <---

// You can search and replace text in a string using .replace() on a string. The inputs for .replace() is 
// first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result);
*/

// ---> Remove Whitespace from Start and End <---

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result);

 