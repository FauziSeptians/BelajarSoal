
function alphabetPosition(text) {
    let StringAlphabet = "";
    
    for(let i = 0; i < text.length ; i++){
      if(text.toUpperCase().charCodeAt(i) >= 65 && text.toUpperCase().charCodeAt(i) <= 90){
         StringAlphabet = StringAlphabet + (parseInt(text.toUpperCase().charCodeAt(i)) - 64).toString() + ' ' ;
      }
    }
  
  
    return StringAlphabet.substring(0,StringAlphabet.length - 1);
    
  }