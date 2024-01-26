function smash (words) {
    let word = ""
    let lastIdx = words.length - 1;
   if(words){
      words.map((e, idx) => {
      if(idx == lastIdx){
        word = word + e;
      }else{
        word = word + e + ' ';
      }
    })
     return word;
   }else{
     return '';
   }
    
  };