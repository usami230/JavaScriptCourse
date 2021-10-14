// Chap 34 Changing elements of a date and time

var setDate = new Date();
console.log("Old Date =>", setDate);

setDate.setFullYear(2023, 4, 17);

setDate.setMonth(4);
setDate.setDate(4);
setDate.setHours(1);
setDate.setMinutes(2);
setDate.setSeconds(3);
setDate.setMilliseconds(500);

console.log("Old Date =>", setDate);