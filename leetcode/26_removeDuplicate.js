// Given an integer array nums sorted in non-decreasing order,
//  remove the duplicates in-place such that each unique element appears only once.
//   The relative order of the elements should be kept the same. Then return the number of unique elements in nums.


// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        console.log("i", i, nums[i])
        for (j = nums.length; j >= i + 1; j--) {
            console.log("j", j, nums[j])
            if (nums[i] == nums[j]) {
                nums.splice(i, 1)
            }
        }
    }
    return nums
};
let nums = [1, 1, 2]
console.log(removeDuplicates(nums))


var removeDuplicates = function (nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        console.log("i", i)
        console.log(nums[i], nums[i - 1])
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1); // Remove duplicate
        }
    }
    return nums; // Return the count of unique elements
};

let nums2 = [1, 1, 2]
console.log(removeDuplicates(nums2))