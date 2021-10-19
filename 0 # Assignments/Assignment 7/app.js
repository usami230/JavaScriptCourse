// Assignment 7

var text  = " The quick brown fox jumps over the lazy dog the quick brown "+
            " fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy "+
            " dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog";

for(var i = 0; i < text.length; i++){
      console.log(text.slice(i,i+5))
    if(text.slice(i,i+5) === "quick"){
        text = text.slice(0,i) + 'lazy' + text.slice(i+5) ;
    }
    else if(text.slice(i,i+5) === "brown"){
        text = text.slice(0,i) + 'black' + text.slice(i+5) ;
    }
    else if(text.slice(i,i+5).trim() === "fox"){
        text = text.slice(0,i) + ' cat ' + text.slice(i+5) ;
    }
    
}

console.log(text);