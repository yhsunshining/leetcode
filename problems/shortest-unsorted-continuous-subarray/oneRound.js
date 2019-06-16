/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let i = 0,
    j = -1;
  let max = -1e10,
    min = 1e10;

  for (let l = 0, r = nums.length - 1; r >= 0; l++, r--) {
    max = Math.max(max, nums[l]);
    if (nums[l] != max) j = l;

    min = Math.min(min, nums[r]);
    if (nums[r] != min) i = r;
  }

  return j - i + 1;
};
