// Chapter 31 Getting the current date and time

var date = new Date();

console.log(date);
console.log( typeof date);
console.log(date.toString().slice(0,15))

var dayname = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var day = date.getDay();
console.log(day);

console.log(dayname[day]);