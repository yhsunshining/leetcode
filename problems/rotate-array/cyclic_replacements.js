/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let len = nums.length;
  let count = 0;
  for (let i = 0; count < len; i++) {
    let tem = nums[i];
    index = (k + i) % len;
    do {
      let cur = nums[index];
      nums[index] = tem;
      tem = cur;
      index = (index + k) % len;
      count++;
    } while (index !== i);
    nums[index] = tem;
    count++;
  }
  return nums;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
