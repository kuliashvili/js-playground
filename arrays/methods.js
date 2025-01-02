let array = [1, 2, 3];

// Add / remove
array.push(4); // adds element to end
array.pop(); // removes last element
array.unshift(); // adds element to start
array.shift(); // removes first element
array.splice(1, 0, "new"); //changes array by adding/removing elements at any position

// Order manipulation
array.reverse(); // reverses array
array.sort((a, b) => a - b); // sorts elements
array.fill(0); // fills array with static value

