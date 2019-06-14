/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let sum = 0;
  let map = { [k]: 1 };
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let target = k + sum;
    if (map[sum]) {
      count += map[sum];
    }
    if (map[target]) {
      map[target] += 1;
    } else {
      map[target] = 1;
    }
  }
  return count;
};
