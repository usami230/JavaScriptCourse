// Chap 21 # Changing Case


// The toLowerCase() method converts a string to lowercase letters.
//The toLowerCase() method does not change the original string.

// The toUpperCase() method converts a string to uppercase letters.

//The toUpperCase() method does not change the original string.


// var nationality = "pakistani";
// var city = "KaRaChi";

// // console.log(nationality.toUpperCase())
// // console.log(city.toLowerCase())
// // console.log(city.toUpperCase())

// var cityToCheck = prompt("Enter Your City");
// cityToCheck = cityToCheck.toLowerCase();
// console.log(cityToCheck);

// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];

// for(var i = 0 ; i <=4;i++)
// {
//     if(cityToCheck == cleanestCities[i])
//     {
//         alert("It's one of the cleanest cities")
//     }
// }

var nametocheck = prompt("Enter Your Name");
nametocheck = nametocheck.toUpperCase();
console.log(nametocheck);
var names = ["SAMI","FAHAD","HAMMAD"];

for(var i = 0; i < names.length; i++){
    if(nametocheck == names[i])
    {
        alert("Valid");
    }
   
}



