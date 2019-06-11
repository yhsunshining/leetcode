/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let res = [];
  for (let index = 0, len = nums.length; index < len; index++) {
    if (nums[index] < 0) {
      continue;
    }
    let currentIndex = index; // 0
    let currentValue = nums[currentIndex]; // 4
    while (currentValue > 0) {
      nums[index] = 0;
      currentIndex = currentValue - 1;
      let tem = nums[currentIndex];
      nums[currentIndex] = -currentValue;
      currentValue = tem;
    }
    if (currentValue < 0) {
      res.push(-currentValue);
    }
  }
  return res;
};
