const word = "Hello World";

// 1) Regular function declaration

function helloWorld(w) {
  console.log(w);
}

helloWorld(word);

// 2) storing function into variable

const byeWord = function () {
  console.log("Bye world");
};

// 3) arrow functions, shorter new way to write functions

const addNumbers = (a, b) => {
  return a + b;
};

const subtractNumber = (a, b) => a - b;

// 4) async function = for operations that takes time

const getData = async function () {
  const url = "https://someapi.com/users";
  try {
    const fetched = await fetch(url);
    const data = await fetched.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async () => {
  try {
    const response = await fetch("https://someapi/users");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// 5) callback functions

function doSth(callback) {
  callback("done");
}
