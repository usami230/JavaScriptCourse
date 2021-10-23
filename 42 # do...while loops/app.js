// Chapter 42 do while loops


// The do while loop is a variant of the while loop. This loop will execute the code block once,
// before checking if the condition is true, then it will repeat the loop as long as the condition is true.

//The example below uses a do while loop. The loop will always be executed at least once, 
// even if the condition is false, because the code block is executed before the condition is tested:

// do {
//     // code block to be executed
// }
// while (condition);

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);


var i = 0;
var text = "";
do {
    text = "The number is " + i;
    console.log(text);
    i++;
}
while (i < 10);
