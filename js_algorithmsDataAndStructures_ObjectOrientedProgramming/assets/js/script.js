//  js_algorithmsDataAndStructures

/*
// ---> Object Oriented Programming <---

// ---> Create a Basic JavaScript Object <---
let dog = {
  name: "Ahbal",
  numLegs: 2
};
// ---> Use Dot Notation to Access the Properties of an Object <---

let dog = {
  name: "Spot",
  numLegs: 4,
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);
*/

// ---> Create a Method on an Object <---
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + dog.numLegs + " legs.";
  },
};

console.log(dog.sayLegs());
