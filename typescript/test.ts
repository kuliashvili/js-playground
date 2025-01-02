let firstUser: String = "giorgi";
let helloUser: string = `Hello ${firstUser}`;

console.log(helloUser);

let surname: string = "kuliashvili";
let usersAge: number = 18;
let isVerified: boolean = true;

function greetingUser(a: string, b: number, c: boolean) {
  let text: string = `hello dear ${a}, you are ${b} years old verified status: ${c} zd all`;
  return console.log(text.toUpperCase());
}

function printCoordinates(x: number, y: number) {
  return console.log(x * 10, y * 10);
}

greetingUser(surname, usersAge, isVerified);
printCoordinates(10, 29);
