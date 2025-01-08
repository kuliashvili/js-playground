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
