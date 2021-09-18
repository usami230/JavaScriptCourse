// Chapter 9 Prompt

// prompt(text, defaultText)  

//text	String	Required. The text to display in the dialog box
//defaultText	String	Optional. The default input text


// Return Value: A String. If the user clicks "OK", the input value is returned. 
// Return Value: If the user clicks "cancel", null is returned. 
// Return Value: If the user clicks OK without entering any text, an empty string is returned.

// 

//var name = prompt("Enter your Name");
//console.log(name);

// var question =  "Your species?"; 
// var defaultAnswer = "human"; 

// var spec = prompt(question, defaultAnswer);

// alert(spec);

// =+ only accept number 
// =+ if given string value returned NaN Not A number

// var numberOfCats =+ prompt("How many cats?"); 
// var tooManyCats = numberOfCats + 1;

// alert(tooManyCats);