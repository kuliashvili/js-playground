let person = { name: "Giorgi", age: 22 };
let otherObject = { city: "Tbilisi" };

// Creating and modifying objects

Object.create(person); // creates new object with prototype
Object.assign(person, otherObject); //copies propertys from other objects
Object.defineProperty(person, "key", { value: 42 }); //defines new property with value
Object.seal(person); //prefents adding/deleting properties
Object.freeze(person); //makes object immutable
Object.preventExtensions(person); //prevents adding new properties

console.log(person);
