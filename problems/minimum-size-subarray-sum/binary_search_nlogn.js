/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let start = 0;
  let len = nums.length;
  let sum = [nums[0]];
  let res = 1e10;
  for (let index = 1; index < len; index++) {
    sum[index] = sum[index - 1] + nums[index];
  }
  if (sum[len - 1] < s) {
    return 0;
  } else {
    for (let i = 0; i < len; i++) {
      let target = s + sum[i] - nums[i];
      let start = i,
        end = len - 1;
      while (start <= end) {
        let mid = (start + end) >> 1;
        if (sum[mid] == target) {
          res = Math.min(res, mid - i + 1);
          break;
        } else if (sum[mid] > target) {
          res = Math.min(res, mid - i + 1);
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }
  }
  return res == 1e10 ? 0 : res;
};

minSubArrayLen(4, [1, 4, 4]);
