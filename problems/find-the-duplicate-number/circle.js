/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slow = 0,
    fast = 0;
  slow = nums[slow];
  fast = nums[nums[fast]];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  let pointer = 0;

  while (pointer != slow) {
    slow = nums[slow];
    pointer = nums[pointer];
  }
  return pointer;
};
