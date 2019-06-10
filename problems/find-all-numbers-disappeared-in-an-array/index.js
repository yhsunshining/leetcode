/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]) - 1;
    if (nums[val] > 0) {
      nums[val] = -nums[val];
    }
  }

  let res = [];

  nums.forEach((item, index) => {
    if (item > 0) {
      res.push(index + 1);
    }
  });
  return res;
};
