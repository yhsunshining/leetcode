/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let start = 0,
    end = start + k - 1;
  let sum = 0;
  for (let index = start; index <= end; index++) {
    sum += nums[index];
  }
  let max = sum;

  for (; end < nums.length - 1; end++, start++) {
    sum += nums[end + 1] - nums[start];
    max = Math.max(max, sum);
  }
  return max / k;
};
