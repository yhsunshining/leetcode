/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
  let len = nums.length;
  if (len < 2) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    let slow = i;
    let fast = i;
    do {
      slow = jump(slow, nums, len);
      fast = jump(jump(fast, nums, len), nums, len);
    } while (slow != fast);

    let count = 0;
    let positive = nums[slow] > 0 ? 1 : -1;
    let index = slow;

    do {
      slow = jump(slow, nums, len);
      if (nums[slow] * positive < 0) {
        count = 0;
        break;
      } else {
        count++;
      }
    } while (index != slow);

    if (count <= 1) {
      continue;
    }
    return true;
  }

  return false;
};

function jump(index, nums, len) {
  let value = nums[index] + index;
  return value % len < 0 ? (value % len) + len : value % len;
}
