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

// ---> Create a Method on an Object <---
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + dog.numLegs + " legs.";
  },
};

console.log(dog.sayLegs());

// ---> Make Code More Reusable with the this Keyword <---
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

console.log(dog.sayLegs());

// ---> Define a Constructor Function <---

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

function Dog() {
  this.name = "a7oka";
  this.color = "gray";
  this.numLegs = 6;
}

// ---> Use a Constructor to Create Objects <---
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog();

// ---> Extend Constructors to Receive Arguments <---

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("A7oka", "White");
console.log(terrier.color);

// ---> Verify an Object's Constructor with instanceof <---

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Only change code below this line
let myHouse = new House(5);
console.log(myHouse instanceof House);

// ---> Understand Own Properties <---

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}
console.log(canary instanceof Bird);
console.log(ownProps);
*/

// ---> Use Prototype Properties to Reduce Duplicate Code <---

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");
let techno = new Dog("tezo");
console.log(beagle.numLegs);
console.log(techno.numLegs);
