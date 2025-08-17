/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const lengthArray = s.length;
    const idxLoop = Math.round(lengthArray / 2);

    console.log(idxLoop);

    for(let i = 0; i < idxLoop; i++){
        const lastIdx = s.length - (1 + i);
        let temp = s[i];
        s[i] = s[lastIdx];
        s[lastIdx] = temp;
    }

    console.log(s);
};