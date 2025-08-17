/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    let object = {}

    let result = true;

    let splittedString = s.split(" ");
    let splittedPattern = pattern.split("");

    if(splittedString.length !== splittedPattern.length ) return false;

    for(let i = 0; i < pattern.length; i++){
        // console.log("char", pattern[i]);
        
        // console.log(Object.values(object));
        // console.log("splited", splittedString[i]);
        // console.log("test", Object.values(object).find((item) => item ===splittedString[i] ))
        
        if(i === 0 || (!object[pattern[i]] && !Object.values(object).find((item) => item ===splittedString[i] )?.length )   ) {
            object[pattern[i]] = splittedString[i];
            splittedPattern[i] = splittedString[i];
        }else if(object[pattern[i]]){
            // console.log("obj",pattern[i], object[pattern[i]], );
            splittedPattern[i] = object[pattern[i]];
        }
        
        // console.log("p",splittedPattern);
        // console.log("s",splittedString);
        
        // console.log(splittedPattern[i] !== splittedString[i]);
        
        if(splittedPattern[i] !== splittedString[i]){
            result = false;
            break;
        }
        
    }

    return result;
};