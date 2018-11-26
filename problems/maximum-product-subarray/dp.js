/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let dpp = [];
  let dpn = [];
  dpp[0] = dpn[0] = nums[0];
  let max = nums[0];
  for (let i = 1, len = nums.length; i < len; i++) {
    let tem = nums[i];
    if (tem < 0) {
      dpn[i] = tem * (dpp[i - 1] <= 0 ? 1 : dpp[i - 1]);
      dpp[i] = tem * (dpn[i - 1] >= 0 ? 1 : dpn[i - 1]);
    } else {
      dpp[i] = tem * (dpp[i - 1] <= 0 ? 1 : dpp[i - 1]);
      dpn[i] = tem * (dpn[i - 1] >= 0 ? 1 : dpn[i - 1]);
    }
    if (dpp[i] > max) {
      max = dpp[i];
    }
  }
  return max;
};
