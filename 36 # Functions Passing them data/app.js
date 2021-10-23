// Chapter 36 Function Passing them Data

// 2) Parameterize Function

function sayHelloTo(name) {
    alert("Hello, " + name);
}

//sayHelloTo('Sami')


function calculator(num1, num2, op) {
  if (op == "+") {
    console.log("Adding: ", num1 + num2);
  } else if (op == "-") {
    console.log("Subtracting: ", num1 - num2);
  } else if (op == "*") {
    console.log("Multiplication: ", num1 * num2);
  } else if (op == "/") {
    console.log("Division: ", num1 / num2);
  } else if (op == "%") {
    console.log("Reminder: ", num1 % num2);
  } else {
    alert("Invalid Operator!");
  }
}

//calculator(5,10,"-")