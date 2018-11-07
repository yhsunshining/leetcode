/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] > nums[end]) {
      start = middle + 1;
    } else if (nums[start] < nums[middle]) {
      //23333
      end = middle;
    } else if (nums[middle] == nums[end]) {
      //32333
      //33323
      start++;
      end--;
    } else {
      end = middle;
    }
  }
  return nums[start];
};
