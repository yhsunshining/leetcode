/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result_num = Math.pow(2, nums.length);
  let result = [];
  for (let i = 0; i < result_num; i++) {
    result[i] = [];
  }
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = 0; j < result_num; j++) {
      if ((j >> i) & 1) {
        result[j].push(nums[i]);
      }
    }
  }
  var a = "";
  return result;
};
