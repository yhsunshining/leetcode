/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let start = 0;
  let len = nums.length;
  let res = [];
  if (!len) {
    return res;
  }
  for (let i = 1; i <= len; i++) {
    if (nums[i] - nums[i - 1] != 1) {
      if (i - 1 == start) {
        res.push(`${nums[start]}`);
      } else {
        res.push(`${nums[start]}->${nums[i - 1]}`);
      }
      start = i;
    }
  }
  return res;
};
