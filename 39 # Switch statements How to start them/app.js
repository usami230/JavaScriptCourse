// Chapter 39 switch statements: How to start them

//Use the switch statement to select one of many code blocks to be executed.

switch ("Sat") {
    case "Sat":
        alert("Whoopee");
        break;
    case "Sun":
        alert("Whoopee");
        break;
    case "Fri":
        alert("TGIF!");
        break;
    default:
        alert("Shoot me now!");
}


switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        console.log(day);
        break;
    case 1:
        day = "Monday";
        console.log(day);
        break;
    case 2:
        day = "Tuesday";
        console.log(day);
        break;
    case 3:
        day = "Wednesday";
        console.log(day);
        break;
    case 4:
        day = "Thursday";
        console.log(day);
        break;
    case 5:
        day = "Friday";
        console.log(day);
        break;
    case 6:
        day = "Saturday";
        console.log(day);
}

