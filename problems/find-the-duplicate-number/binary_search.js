/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let min = 1,
    max = nums.length - 1;
  let mid = (min + max) >> 1;

  while (min < max) {
    mid = (min + max) >> 1;
    if (count(nums, mid) <= mid) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }
  return min;
};

function count(nums, mid) {
  let count = 0;
  for (let num of nums) {
    if (num <= mid) {
      count++;
    }
  }
  return count;
}
