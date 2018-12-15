/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let curZero = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] != 0) {
      if (curZero != i) {
        let tem = nums[curZero];
        nums[curZero] = nums[i];
        nums[i] = 0;
      }
      curZero++;
    }
  }
};
