function longestConsec(strarr, k) {
    // your code
let ArrayConcatString = []
let idx = 0;
let max = 0;


if(strarr.length != 0){
  for(let i = 0; i < strarr.length ; i++){
    if(!((i + k) > strarr.length)){
      let string = "";
      for(let j = 0; j < k ; j++){
        string += strarr[i + j]
      }
      ArrayConcatString.push(string);
      if(max < string.length){
        max = string.length;
        idx = ArrayConcatString.length
      }
    }
  }
 console.log("hallo1")
  console.log(idx);
  return ArrayConcatString[idx - 1];
}else{
  console.log("hallo")
  return '';
}

  
  
  
}