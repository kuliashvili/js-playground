let array = [1, 2, 3];
let secondArray = [4, 5, 6];

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

// Creating new array
array.concat(secondArray); //merges arrays
array.slice(1, 2); // returns portion of array
array.flat(); // creates new array with sub-arrays concatenated
array.flatMap((x) => [x * 2]); //maps each element and flattens the nested arrays into one single array

// Finding elements
array.indexOf(3); // returns first index where element is found
array.lastIndexOf(3); // returns last index where element is found
array.includes(3); // checks if element exists in array
array.find((x) => x > 2); //returns first element that satisfies condition
array.findIndex((x) => x > 2); //returns first elements index that satisfies contition

// Filtering / testing
array.filter((x) => x > 2); //creates new array with items that passed test
array.some((x) => x % 2 === 0); // checks if at least 1 item passed test
array.every((x) => x > 0); //checks if every element passed test

// Transforming
array.map((x) => x * 2); // creates new array with transformed elements
array.reduce((a, b) => a + b); // reduces array to single value
array.forEach((x) => console.log(x)); //excudes function for each arr element

// String conversion
array.join("-"); // creates string by concatenating elements with separator
array.toString(); //converts array to comma separated string

// Static methods
Array.isArray(array); // checks if value is an array
Array.from("1234"); // creates array from araay-like
Array.of(1, 2, 3, 4, 5); //creates array from passed arguments
