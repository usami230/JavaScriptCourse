// Chap 25 Strings: Replacing characters

// The replace() method searches a string for a specified value, or a regular expression, 
// and returns a new string where the specified values are replaced.


// string.replace(searchvalue, newvalue)

var message = "The quick brown fox jumps over the lazy dog. brown";
var replace = message.replace("brown","Yellow");
console.log(replace);

var replace = message.replace(/brown/g,"Yellow");
console.log(replace);

