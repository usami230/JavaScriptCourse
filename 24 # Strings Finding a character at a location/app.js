// Chap 24 Strings: Finding a character at a location

// The charAt() method returns the character at a specified index in a string.
// The index of the first character is 0, the second character is 1, and so on.
// The index of the last character in a string is string.length-1, the second last character is string.length-2, and so on (See "More Examples").


var firstName = "Pakistan";
console.log(firstName.slice(0,1));


console.log(firstName.charAt(0));

var lastChar = firstName.charAt(firstName.length - 1);
console.log(lastChar);

var text = "Pakistan best ! Country";

for(var i = 0; i < text.length; i++){
    if(text.charAt(i) === "!"){
        console.log("Exclamation point found!")
        break;
    }
}