/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    // 顺序时 middle 一定小于 end，若middle > end 则 [middle,end] 中发生选择， min一定在其中
    if (nums[middle] > nums[end]) start = middle + 1;
    else end = middle;
  }
  return nums[start];
};
