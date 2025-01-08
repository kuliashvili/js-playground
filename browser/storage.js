// 1) Localstorage - stays until manually deleted..

localStorage.setItem("name", "giorgi");
localStorage.setItem("age", "22");
localStorage.setItem(
  "settings",
  JSON.stringify({ theme: "black", language: "en" })
);

//  get data from localstorage
const userName = localStorage.getItem("name");
const userAge = localStorage.getItem("age");
const userSettings = JSON.parse(localStorage.getItem("settings"));

//  remove item

localStorage.removeItem("age");

// or clear all data
localStorage.clear();

//check if item exists
const hasUserName = localStorage.getItem("name") !== null;

// get number of stored items
const storedItemsCount = localStorage.length;

// 2) Sessionstorage - clear when tab close / refresh

//store data

sessionStorage.setItem("task", "developing");
sessionStorage.setItem("items", JSON.stringify([1, 3, 7, 9]));

// get data

const task = sessionStorage.getItem("task");
const ourItems = JSON.parse(sessionStorage.getItem("items"));

// remove item

sessionStorage.remove("task");

// clear all session data

sessionStorage.clear();

// 3) cookies - can set expiration date

document.cookie = "username=giorgi";
document.cookie = "language=en; max-age: 80";

// set cookie with path
document.cookie = "user=giorgi; path/users";

//read all cookies
const allCookies = document.cookie;
