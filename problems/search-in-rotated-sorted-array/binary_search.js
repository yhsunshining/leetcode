/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let end = nums.length - 1;
  let start = 0;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let _start = Math.min(middle + 1, end);
    let _end = Math.max(start, middle - 1);
    if (nums[middle] == target) {
      return middle;
    } else if (nums[_end] >= target && nums[start] <= target) {
      end = _end;
    } else if (nums[_start] <= target && nums[end] >= target) {
      start = _start;
    } else if (nums[start] > nums[_end]) {
      end = _end;
    } else if (nums[_start] > nums[end]) {
      start = _start;
    } else {
      start++;
    }
  }
  return -1;
};
