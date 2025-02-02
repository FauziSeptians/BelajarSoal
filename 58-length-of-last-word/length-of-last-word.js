/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   const lengthString = s.length - 1;
   let count = 0;

   for(let i = lengthString; i >= 0 ; i--){
    console.log(s[i + 1] !== " " && s[i] === " ")
    console.log(lengthString);
    if(s[i + 1] !== " " && s[i] === " " && i !== lengthString) break;
    if(s[i] !== " ") count++;
   }

   return count;
};