/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.number = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    let initial = 0;
    const result = this.number.reduce((a,b) => a + b, initial )
    return result;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    const result = `[${this.number.toString()}]`
    return result
}


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2);
 // 10
console.log(String(obj1)) // "[1,2]"
// String(obj2); // "[3,4]"
