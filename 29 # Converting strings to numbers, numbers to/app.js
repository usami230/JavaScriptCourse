// Chapter 29 Converting strings to numbers, numbers to strings

// The Number() function converts the object argument to a number that represents the object's value.
// If the value cannot be converted to a legal number, NaN is returned.

var integerString = "24"
var num = Number(integerString);
console.log(num);


var str = 123;
console.log(str.toString());

var floatingNumString = "24.9876";
var num = Number(floatingNumString);

console.log(num);

