//Chapter # 37 Functions: Passing data back from them



function getString(string) {
    return string;
}

var str = getString("Public");
console.log(str);


function exampleOfReturn() {
    return "Return";
    alert("Running");
}
var check = exampleOfReturn();
console.log(check);


function validate(input) {
    if (!input) return console.log("Enter Input!"); //Early Return

    console.log(input);
}
validate();
validate('Abc');