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

// ---> Iterate Over All Properties <---

function Dog(name) {
  this.name = name; // ownProperty
}

Dog.prototype.numLegs = 4; // proprotype property

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let ownProperty in beagle) {
  if (beagle.hasOwnProperty(ownProperty)) {
    ownProps.push(ownProperty);
  } else {
    prototypeProps.push(ownProperty);
  }
}

console.log(ownProps);
console.log(prototypeProps);

// ---> Understand the Constructor Property <---

// The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

// function joinBirdFraternity(candidate) {
//   if (candidate.constructor === Bird) {
//     return true;
//   } else {
//     return false;
//   }
// }

function Dog(name) {
  this.name = name; // ownProperty
}

let hund = new Dog();

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

console.log(joinDogFraternity(hund));

// ---> Change the Prototype to a New Object <---

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,

  eat: function () {
    console.log("aww awww awwww");
  },

  describe: function () {
    console.log("My name is " + this.name);
  },
};

// ---> Remember to Set the Constructor Property when Changing the Prototype <---

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

// ---> Understand Where an Object’s Prototype Comes From <---

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
console.log(Dog.prototype.isPrototypeOf(beagle));

// ---> Understand the Prototype Chain <---

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
console.log(Object.prototype.isPrototypeOf(Dog.prototype));

// ---> Use Inheritance So You Don't Repeat Yourself <---

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  // eat: function () {
    //   console.log("nom nom nom");
    // }
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
    // eat: function () {
      //   console.log("nom nom nom");
      // }
    };
    
    function Animal() {}
    
    Animal.prototype = {
      constructor: Animal,
      eat: function () {
        console.log("nom nom nom");
      },
    };
    
    // ---> Inherit Behaviors from a Supertype <---
    
    function Animal() {}
    
    Animal.prototype = {
      constructor: Animal,
      eat: function () {
        console.log("nom nom nom");
      },
    };
    
    // Only change code below this line
    
    let duck = Object.create(Animal.prototype); // Change this line
    let beagle = Object.create(Animal.prototype); // Change this line
    
    console.log(duck instanceof Animal);
    console.log(beagle instanceof Animal);
    
    // ---> Set the Child's Prototype to an Instance of the Parent <---
    
    // Remember that the prototype is like the "recipe" for creating an object.
    // In a way, the recipe for Bird now includes all the key "ingredients" from Animal.
    
    function Animal() {}
    
    Animal.prototype = {
      constructor: Animal,
      eat: function () {
        console.log("nom nom nom");
      },
    };
    
    function Dog() {}
    
    // Only change code below this line
    
    Dog.prototype = Object.create(Animal.prototype);
    let beagle = new Dog();
    console.log(beagle.eat("")); // nom nom nom
    console.log(Dog.prototype instanceof Animal); // true
*/

// ---> Reset an Inherited Constructor Property <---

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

let duck = new Bird();
Bird.prototype.constructor = Bird;
duck.constructor;
console.log(duck.constructor);

let beagle = new Dog();
Dog.prototype.constructor = Dog;
beagle.constructor;
console.log(beagle.constructor);
