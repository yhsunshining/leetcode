/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let zero = 0,
    one = 0,
    two = nums.length - 1;
  while (nums[zero] == 0) {
    zero++;
  }
  while (nums[two] == 2) {
    two--;
  }
  one = zero;
  while (one <= two) {
    let val = nums[one];
    if (val == 1) {
      one++;
    } else if (val == 2) {
      if (nums[two] == 0) {
        nums[one] = nums[zero];
        nums[zero] = 0;
        nums[two] = 2;
        zero++;
        two--;
        one++;
      } else if (nums[two] == 1) {
        nums[one] = nums[two];
        nums[two] = val;
        one++;
        two--;
      }
      while (nums[two] == 2) {
        two--;
      }
    } else if (val == 0) {
      nums[one] = nums[zero];
      nums[zero] = val;
      zero++;
      one++;
    }
  }
  return nums;
};
