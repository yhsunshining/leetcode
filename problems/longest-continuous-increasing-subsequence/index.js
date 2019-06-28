/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let start = 0,
    end = 0;
  let max = 1;
  let len = nums.length;
  if (len) {
    while (end < nums.length - 1) {
      if (nums[end + 1] > nums[end]) {
        end++;
      } else {
        max = Math.max(max, end - start + 1);
        start = end + 1;
        end += 1;
      }
    }
    return Math.max(max, end - start + 1);
  } else {
    return 0;
  }
};
