// Chapter 40 switch statements: How to complete them

calculator("+")
function calculator(op) {
    switch (op)
     {
        case "+":
            console.log("Adding");
            break;

        case "-":
            console.log("Subtracting");
            break;

        case "*":
            console.log("Multiplication");
            break;

        case "/":
            console.log("Division");
            break;

        case "%":
            console.log("Reminder");
            break;

        default:
            console.log("Invalid Input!");
    }
}