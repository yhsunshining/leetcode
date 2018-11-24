/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let tem = nums[0];
  let max = tem;
  for (let i = 1, len = nums.length; i < len; i++) {
    tem = nums[i] + (tem > 0 ? tem : 0);
    if (tem > max) {
      max = tem;
    }
  }
  return max;
};
