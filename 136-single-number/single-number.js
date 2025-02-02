/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let newData = [];

    for(let i = 0; i < nums.length ; i++){
        const dataExists = i !== 0 ? newData.find((item) => item.val === nums[i]) : null;

        if(!dataExists){
            const newObject = {
                val : nums[i],
                freq : 1
            }

            newData.push(newObject);
        }

        if(dataExists) {
            newData = newData.map((item) => 
                item.val === nums[i] 
                    ? { ...item, freq: item.freq + 1 }
                    : item
            )
        }
    }
    
    const result = newData.find((item) => item.freq === 1).val;

    return result;
};