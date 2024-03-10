let OpeningBraces = ["[", "(", "{"];
let ClosingBraces = ["]", ")", "}"];

function validBraces(braces) {
   //TODO
   let data = [];
   for (let idx in braces) {
      if (OpeningBraces.includes(braces[idx])) {
         data.push(braces[idx]);
      } else if (ClosingBraces.includes(braces[idx])) {
         let lengthData = data.length - 1;

         if (
            OpeningBraces.indexOf(data[lengthData]) !=
            ClosingBraces.indexOf(braces[idx])
         ) {
            return false;
         } else {
            data.splice(lengthData, 1);
         }
      }
   }

   if (braces.length == data.length) {
      return false;
   }else{
    return true;
   }
}

console.log(validBraces("(((({{"));
