a;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  nums = nums.sort((a, b) => a - b);
  let count = 0;
  let start = 0,
    end = 1;
  while (start < end && end < nums.length) {
    while (nums[end + 1] == nums[end]) {
      end++;
    }
    if (nums[end] - nums[start] < k) {
      end++;
    } else if (nums[end] - nums[start] == k) {
      count++;
      end++;
    } else {
      while (nums[start + 1] == nums[start]) {
        start++;
      }
      start++;
    }
    if (start == end) {
      end++;
    }
  }
  return count;
};
