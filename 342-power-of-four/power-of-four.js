/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    const x = Math.log2(n) / 2;

    const result = (x % 1 === 0);

    return result;
};