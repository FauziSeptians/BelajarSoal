/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const digitVal = BigInt(digits.join(""));
    const result = digitVal + BigInt(1);

    return result.toString().split("").map(Number);
};