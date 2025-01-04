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

let array1: number[] = [2, 7, 9];
let array2: number[] = [5, 8, 3];

function findDifference(arr1: number[], arr2: number[]) {
  let firstVolume: number = arr1.reduce((sum, num) => sum * num, 1);
  let secondVolume: number = arr2.reduce((sum, num) => sum * num, 1);
  let answer = firstVolume - secondVolume;

  return answer >= 0 ? answer : answer * -1;
}

console.log(findDifference(array1, array2));
