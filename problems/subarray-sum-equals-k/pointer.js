/**
 * wa [-1,-1,1] 0
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0;
  let start = 0,
    end = 0;
  let len = nums.length;
  let sum = nums[0];
  while (end < len && start < len) {
    if (sum <= k) {
      if (sum == k) {
        count++;
      }
      end++;
      sum += nums[end];
    } else if (sum > k) {
      sum -= nums[start];
      start++;
    }
  }
  return count;
};
