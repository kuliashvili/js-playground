let price: number = 30;
let khinkali: number = 99;
let userName: string = "vakhtangi";
let greeting: string = `Hello ${userName}`;
let iActive: boolean = true;
let isLoggedIn: boolean = false;
let nullValie: null = null;
let undefinedValue: undefined = undefined;
let scores: number[] = [9, 9, 5, 6, 8];
let prices: Array<number> = [3.99, 9.88, 17];
let surnames: string[] = [
  "Kuliashvili",
  "Tatarashvili",
  "Melia",
  "Shengelia",
  "Rustaveli",
];

// Objects and interfaces, functions

interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "giorgi",
  age: 18,
  email: "giorgi@gmail.com",
};

function add(number1: number, number2: number): number {
  return number1 + number2;
}

const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};

const yourAge = (name: string, age: number): string => {
  return `Hello dear ${name}, your age is ${age}`;
};
