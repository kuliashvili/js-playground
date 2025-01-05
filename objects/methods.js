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

// Getting Object information

Object.keys(person); //returns array of property names
Object.values(person); //returns array of values
Object.entries(person); //returns array of [key: value]
Object.getOwnPropertyNames(person); //return array of propertys

//Checking object state
Object.is(person, otherObject); //compares two values to equality
Object.isSealed(person); //checks if sealed
Object.isFrozen(person); //check if frozen
Object.isExtensible(person); //checks if new things can be added

// property operations

person.hasOwnProperty("name"); // checks if property exists in object
person.toString(); //returns string representation
person.valueOf(); //returns primitive value

//Object destructuring

const { car, workingHours } = person; // extract properties into variables

//property access

person["name"]; //bracket notation
person.name; //dot notation

// property existence check
"name" in person; //checks if property exists in person
