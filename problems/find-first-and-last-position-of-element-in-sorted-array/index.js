/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [-1, -1];
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = (start + end) >> 1;
    if (nums[mid] == target) {
      res[0] = mid;
      res[1] = mid;
      findMin(nums, target, start, mid - 1, res);
      findMax(nums, target, mid + 1, end, res);
      break;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return res;
};

let findMin = function(nums, target, start, end, res) {
  while (start <= end) {
    let mid = (start + end) >> 1;
    if (nums[mid] == target) {
      res[0] = mid;
      findMin(nums, target, start, mid - 1, res);
      break;
    } else if (nums[mid] < target) {
      start = mid + 1;
    }
  }
};

let findMax = function(nums, target, start, end, res) {
  while (start <= end) {
    let mid = (start + end) >> 1;
    if (nums[mid] == target) {
      res[1] = mid;
      findMax(nums, target, mid + 1, end, res);
      break;
    } else if (nums[mid] > target) {
      end = mid - 1;
    }
  }
};
