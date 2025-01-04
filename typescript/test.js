var firstUser = "giorgi";
var helloUser = "Hello ".concat(firstUser);
console.log(helloUser);
var surname = "kuliashvili";
var usersAge = 18;
var isVerified = true;
function greetingUser(a, b, c) {
    var text = "hello dear ".concat(a, ", you are ").concat(b, " years old verified status: ").concat(c, " zd all");
    return console.log(text.toUpperCase());
}
function printCoordinates(x, y) {
    return console.log(x * 10, y * 10);
}
greetingUser(surname, usersAge, isVerified);
printCoordinates(10, 29);
var array1 = [2, 7, 9];
var array2 = [5, 8, 3];
function findDifference(arr1, arr2) {
    var firstVolume = arr1.reduce(function (sum, num) { return sum * num; }, 1);
    var secondVolume = arr2.reduce(function (sum, num) { return sum * num; }, 1);
    var answer = firstVolume - secondVolume;
    return answer >= 0 ? answer : answer * -1;
}
console.log(findDifference(array1, array2));
