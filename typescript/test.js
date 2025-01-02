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
