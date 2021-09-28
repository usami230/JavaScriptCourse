// Chapter 17 Arrays: Removing, inserting, and extracting elements

// shift() = Use the shift method to remove an element from the beginning of an array.
// shift() returns the element it removes.

// unshift() = To add one or more elements to the beginning of an array, use the unshift method.

// The unshift() method adds new items to the beginning of an array, and returns the new length.

// unshift() overwrites the original array.

// The splice() method adds and/or removes array elements.

// Use the splice method to insert one or more elements anywhere in an array, while optionally removing one or more elements that come after it.

// splice() overwrites the original array.

// Santax Splice array.splice(index, howmany, item1, ....., itemX)

// shift()

// var pets = ["cat","dog","cow"];
// pets.shift();
// console.log(pets);

//console.log(pets.shift());

// unshift()

// var city = ["karachi","Lahore"];
// city.unshift("Pindi","Hyderabad")
// console.log(city);

//splice()

var country = ["Pakistan","India","America"];

// country.splice(1,0,"Bangladesh");
// console.log(country);

country.splice(0,1)
console.log(country);