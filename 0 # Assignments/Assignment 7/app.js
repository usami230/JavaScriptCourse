// Assignment 7

var text  = " The quick brown fox jumps over the lazy dog the quick brown "+
            " fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy "+
            " dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog";

 // Task 1 Start           
// for(var i = 0; i < text.length; i++){
//     //   console.log(text.slice(i,i+5))
//     if(text.slice(i,i+5) === "quick"){
//         text = text.slice(0,i) + 'lazy' + text.slice(i+5) ;
//     }
//     else if(text.slice(i,i+5) === "brown"){
//         text = text.slice(0,i) + 'black' + text.slice(i+5) ;
//     }
//     else if(text.slice(i,i+5).trim() === "fox"){
//         text = text.slice(0,i) + ' cat ' + text.slice(i+5) ;
//     }
//     else if(text.slice(i,i+5).trim() === "lazy"){
//         text = text.slice(0,i) + ' big ' + text.slice(i+5) ;
//     }
//     else if(text.slice(i,i+5).trim() === "dog"){
//         text = text.slice(0,i) + ' wall ' + text.slice(i+5) ;
//     }
// }
// console.log(text);

// Task 1 End ============

// Task 2 Start ==========

//text = text.indexOf("jumps");
//console.log(text.indexOf('jumps'))




// Task 4 Start ==========

//console.log(text.replace("The","A"));

// Task 4 End ==========



// Task 5 Start ==========

//console.log(text.replace(/jumps/g,"jumping"));

// Task 5 End ==========