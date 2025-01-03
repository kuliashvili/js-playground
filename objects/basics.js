// Creating and modifying

let person = {
  name: "Gio",
  age: 22,
  nameAndAge: function () {
    return `Name: ${this.name}, age: ${this.age}`;
  },
};
person.job = "Developer";
delete person.age;

//methods
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

//merging
let location = { location: "Tbilisi" };
let merged = { ...person, ...location };

let calculator = {
  addTwo(a, b) {
    return a + b;
  },
};

let defaults = { language: "en", theme: "light" };
let settings = Object.assign({}, defaults);
console.log(settings);
