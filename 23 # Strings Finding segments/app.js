// chap 23 Strings: Finding segments

// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// indexOf() returns -1 if the value is not found.
// indexOf() is case sensitive.
// santax ==  string.indexOf(searchvalue, start)
// Parameter = searchvalue = Required. The string to search for
// Parameter = start = Optional. Default 0. At which position to start the search


var str = "Hello world, welcome to the universe.";
console.log(str.indexOf("e"));
console.log(str.indexOf("e",5));
console.log(str.indexOf("Hello" ,10));