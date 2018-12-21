/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = nums.reduce((sum, item) => {
    return (sum += item);
  }, 0);
  let n = nums.length;
  return ((1 + n) * n) / 2 - sum;
};
