// Chapter 38 Functions: Local vs. global variables 

//Global Scope
//Local Scope

function getValue() {
    var value = 10.99;
    return value;
}

//console.log(value);

var value = getValue();
console.log(value);