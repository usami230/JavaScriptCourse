// Chapt 33 Specifying a date and time
//The getTime() method returns the number of milliseconds between midnight of January 1, 1970 and the specified date.

var DateDiff = {

    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
    },

    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },

    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}
var dString = "oct, 01, 2019";


var d1 = new Date(dString);

var d2 = new Date();

console.log(dString + " : " + DateDiff.inDays(d1, d2))
console.log(dString + " : " + DateDiff.inWeeks(d1, d2))
console.log(dString + " : " + DateDiff.inMonths(d1, d2))
console.log(dString + " : " + DateDiff.inYears(d1, d2))