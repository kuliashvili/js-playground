// basic promise async/await structure

let promise = new Promise((resolve, reject) => {
  resolve("giorgi");
});

async function getName() {
  try {
    let name = await promise;
    console.log(name);
  } catch (error) {
    console.log(error);
  }
}
getName();

//fetch data example

async function fetchUsers() {
  try {
    const data = await fetch("https://someapi.com/users");
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// sequential vs parallel execution (one after other and all at once)

async function oneByOne() {
  let data1 = await fetch("https://someapi.com/users");
  let data2 = await fetch("https://someapi.com/cars");
}

async function allAtOnce() {
  const [data1, data2] = await Promise.all([
    fetch("https://someapi.com/users"),
    fetch("https://someapi.com/cars"),
  ]);
}

// errorhandling patterns

async function handleErrors() {
  try {
    await doesSth();
  } catch {
    //handle error
  } finally {
    //always executes
  }
}

// async with array map method

async function getDataWithMap() {
  const urls = ["apiexample/users", "apiexample/cars", "apiexample/swords"];

  const results = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      const data = response.json();
      return data;
    })
  );
}
