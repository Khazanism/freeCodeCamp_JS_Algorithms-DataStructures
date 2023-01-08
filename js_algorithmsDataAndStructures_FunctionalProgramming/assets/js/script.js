//  js_algorithmsDataAndStructures

/*
// ---> Functional Programming <---

// ---> Learn About Functional Programming <---

// Functional programming is about:
// Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
// Pure functions - the same input always gives the same output
// Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

// Function that returns a string representing a cup of green tea
const prepareTea = () => "greenTea";
console.log(prepareTea());

// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
//   a specific type of tea).

const getTea = (numOfCups) => {
  const teaCups = [];
  
  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
// console.log(teaCups);
// Only change code below this line
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);
// Only change code above this line
*/
// ---> Understand Functional Programming Terminology <---

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => "greenTea";

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => "blackTea";

// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
