// 1. Array Creation

const empty = [];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["nina", 33, { name: "gio" }, [1, 2, 3], true, false];
const fromConstructor = new Array(3);
const fromValue = Array.from("giorgi");
const spread = [...numbers];

// 2. Array Access

const firstElement = numbers[0];
const lastElement = numbers[numbers.length - 1];
const slicedArray = numbers.slice(1, 3);
const includes = numbers.includes(5);
const indexOf = numbers.indexOf(4);

// 3. Array Basic Methods add/remove/joining

numbers.push(6);
numbers.unshift(0);
numbers.splice(1, 0, 999);
const lastItem = number.pop();
const firstItem = numbers.shift();
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const joined = arr1.concat(arr2);
const joinedWithSpreat = [...arr1, ...arr2];
