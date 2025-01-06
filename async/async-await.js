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
