/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let start = 0,
    end = nums.length - 1;
  while (nums[start] <= nums[start + 1]) {
    start++;
  }
  while (nums[end] >= nums[end - 1]) {
    end--;
  }
  if (start > end) {
    return 0;
  }
  let min = 1e10,
    max = -1e10;
  for (let index = start; index <= end; index++) {
    let num = nums[index];
    min = min <= num ? min : num;
    max = max >= num ? max : num;
  }
  while (nums[start - 1] > min) {
    max = nums[start - 1] > max ? nums[start - 1] : max;
    start--;
  }
  while (nums[end + 1] < max) {
    min = nums[end + 1] < min ? nums[end + 1] : min;
    end++;
  }

  while (nums[start - 1] > min) {
    start--;
  }
  if (start == end) {
    return 0;
  }
  return end - start + 1;
};
