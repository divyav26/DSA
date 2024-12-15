// Given an integer array nums and an integer val, remove all occurrences
//  of val in nums in-place. The order of the elements may be changed
// . Then return the number of elements in nums which are not equal to val.



// var removeElement = function(nums, val) {
//     for(let i=nums.length-1; i>=0; i--){
//         if(nums[i]==val){
//             nums.splice(i,1)
//         }
//     }
// };
const removeEle = (nums, val) => {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[count] = nums[i]
            console.log(" nums[count] = nums[i]", nums[count] = nums[i])
            count++

        }
    }
    return count


}


let nums = [3, 2, 2, 3]
let val = 3
console.log(removeEle(nums, val))
