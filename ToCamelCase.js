function toCamelCase(str){
    let StrConverted = '';
    let spacingIdx = undefined;
    for(let i = 0; i < str.length ; i++){
      if((str[i] == '-' || str[i] == '_')){
       spacingIdx = i;
      }else{
        if((spacingIdx + 1) == i){
          StrConverted += str[i].toUpperCase();
          spacingIdx = undefined;
        }else{
           StrConverted += str[i];
        }
       
      }
    }
    
    return StrConverted;
  } 