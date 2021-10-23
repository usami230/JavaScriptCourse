// Chapter 35 Functions

// => Functions => which makes your code module based // Break your code in chunks // Also you can reuse it

// function funcName() {
//     //Statemenet
// }

//Type of functions
// 1) Simple Function (Non Parameterized)
// 2) Parameterize Function

function tellTime(){
    var now = new Date();
    var hrs = now.getHours();
    var mins = now.getMinutes();
    console.log("Current Time " + hrs+":" + mins);
}

tellTime();


// 1) Simple Function (Non Parameterized)
function showConsole() {
    console.log("This is executed");
  }