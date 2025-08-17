/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        const string = s;

    function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
    }

    const stringFiltered = string.split("").filter((item) => {
        return isAlphanumeric(item)
    }).join("").toLowerCase()

    const reverseString = stringFiltered.split("").reverse().join(""); 

    return stringFiltered === reverseString;
};