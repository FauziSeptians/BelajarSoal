/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let maxFreq = 0;
    let array = [];
    let res = nums[0];

    nums.map((val) => {
        if(array[val]){
            let newValue = array[val] + 1;
            array[val] = newValue;
            if(newValue > maxFreq) res = val;
            if(maxFreq < newValue) maxFreq = newValue;
        }else{
            array[val] = 1;
            if(maxFreq < array[val]) maxFreq = array[val];
        }
    })

    return res;
};