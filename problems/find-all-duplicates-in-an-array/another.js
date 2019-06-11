/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let res = [];
  for (let item of nums) {
    let value = nums[Math.abs(item) - 1];
    if (value > 0) {
      nums[Math.abs(item) - 1] = -value;
    } else {
      res.push(Math.abs(item));
    }
  }
  return res;
};
