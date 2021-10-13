// chap 23 Strings: Finding segments

// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// indexOf() returns -1 if the value is not found.
// indexOf() is case sensitive.
// santax ==  string.indexOf(searchvalue, start)
// Parameter = searchvalue = Required. The string to search for
// Parameter = start = Optional. Default 0. At which position to start the search


// var str = "Hello world, welcome to the universe.";
// console.log(str.indexOf("e"));
// console.log(str.indexOf("e",5));
// console.log(str.indexOf("Hello" ,10));


var paragraph = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog brown.";

for (var i = 0; i < paragraph.length; i++) {
    //  console.log(paragraph.slice(i ,i+5));
    if (paragraph.slice(i, i + 5) == 'brown') {
        paragraph = paragraph.slice(0, i) + 'blue' + paragraph.slice(i + 5)
    }
}

var text = " The New Yorker magazine doesn't allow the phrase World War II.  They say it should " +
    " be the Second World War. So lets search the following sentence for the banned characters " +
    " and replace them with the phrase that the New Yorker prefers";

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    }
}