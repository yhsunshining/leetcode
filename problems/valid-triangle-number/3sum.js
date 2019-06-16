/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  let count = 0;
  for (let index = len - 1; index >= 2; index--) {
    let end = index - 1,
      start = 0;
    while (start < end) {
      if (nums[start] + nums[end] > nums[index]) {
        count += end - start;
        end--;
      } else {
        start++;
      }
    }
  }
  return count;
};
