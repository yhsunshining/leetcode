/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let length = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    let count = 1;
    while (nums[i] == nums[i + 1]) {
      count++;
      i++;
    }
    let number = nums[i];
    if (count >= 2) {
      nums[length] = number;
      nums[length + 1] = number;
      length += 2;
    } else {
      nums[length] = number;
      length++;
    }
  }
  return length;
};
