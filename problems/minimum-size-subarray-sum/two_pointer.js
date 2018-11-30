/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let start = 0;
  let sum = 0;
  let res = 1e10;
  for (let end = 0, len = nums; end < len; end++) {
    sum += nums[end];
    while (sum >= s) {
      res = end - start + 1 < res ? end - start + 1 : res;
      sum -= nums[start];
      start++;
    }
  }
  return res == 1e10 ? 0 : res;
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
