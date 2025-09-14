function majorityElement(nums: number[]): number {
    let idx = 0;
    let maxFreq = 0;
    let array: number[] = [];

    nums.map((item) => {
        const newVal = (array[item] ?? 0) + 1;
        array[item] = newVal;
        if(newVal > maxFreq){
            idx = item;
            maxFreq = newVal;
        }
    })

    console.log(idx, maxFreq, array);
    return idx
};