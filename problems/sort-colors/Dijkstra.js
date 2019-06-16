/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 每一次赋值实际上都是一次交换，游标到0时，要更新0游标，同时要将0游标旧值给1游标
 */
var sortColors = function(nums) {
  let zero = (one = 0);
  nums.forEach((item, index) => {
    nums[index] = 2;
    if (item < 2) {
      nums[one] = 1;
      one++;
    }
    if (item == 0) {
      nums[zero] = 0;
      zero++;
    }
  });
  return nums;
};
