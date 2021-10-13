// chap 22 Strings: Measuring length and extracting parts

//The length property returns the length of a string.

//The length of an empty string is 0.

// The slice() method extracts parts of a string and returns the extracted parts in a new string.
// Use the start and end parameters to specify the part of the string you want to extract.
// The first character has the position 0, the second has position 1, and so on.
// santax = string.slice(start, end)

// Paramter Start = Required. The position where to begin the extraction. First character is at position 0
// Parameter end = Optional. The position (up to, but not including) where to end the extraction. If omitted, slice() selects all characters from the start-position to the end of the string

// Length start 1

// var pakistan = "Pakistan";
// console.log(pakistan.length);


// var pakistan = "pakistan";
// console.log(pakistan.length);
// pakistan =  pakistan[0].toUpperCase();
// console.log(pakistan);

var pakistan = "pakistan";
var firstChar = pakistan[0].toUpperCase();
var restChar = pakistan.slice(1);

console.log(firstChar + restChar);

var message = "The quick brown fox jumps over the lazy dog.";

// if(message.length > 10)
// {
//     var trimMessage = message.slice(0,9) + '...';
//     console.log(trimMessage);
// }else{
//     console.log(message)
// }

var testingText = message.slice(5);
console.log(testingText);