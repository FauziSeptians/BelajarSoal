/**
 * @param {number} num
 * @return {number}
 */

function valueReturn (num){
    let initial = 0;
    const arrayNum = num.split("");
    
    if(arrayNum.length === 1) return arrayNum[0];
    
    if(arrayNum.length > 1){
        const sumOfArray = arrayNum.reduce((a, b) => parseInt(a) + parseInt(b), initial);
        
        return valueReturn(sumOfArray.toString());
    }
}

var addDigits = function(num) {
    console.log(num);
    const result = parseInt(valueReturn(num.toString()));
    return result;
};