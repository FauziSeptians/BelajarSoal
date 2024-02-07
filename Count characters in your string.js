
function count(string) {
  
    const object1 = {};
    
    if(string.length != 0){
        // TODO
      let StringLength = string.length;
      
      for(let i = 0; i < StringLength ; i++){
        if(Object.keys(object1).includes(string[i])){
          let valueNow = object1[string[i]]
          
          let object = {
            [string[i]] : parseInt(valueNow) + 1
          }
          Object.assign(object1, object)
        }else{
  
          let object = {
            [string[i]] : 1
          }
           Object.assign(object1, object)
        }
      }
      
      return object1;
      
    }else{
        // TODO
    return {};
    }
  
  
  }