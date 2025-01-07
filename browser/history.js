// browser history api methods and examples

// 1) go back one page

function goBack() {
  window.history.back();
  //or
  history.go(-1);
}

// 2) go forward one page

function goForward() {
  window.history.goForward();
  //or
  window.history.go(1);
}

// go back/forward multiple page

function changePage(number) {
  history.go(number); // negative number for back, positive to forward
}

// 4) listen to history changes

window.addEventListener("popstate", (event) => {
  console.log("navigation happened");
  console.log(`data: ${event.state}`);
});
