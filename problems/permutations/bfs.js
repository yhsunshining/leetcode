/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  if (nums.length == 0) {
    return [];
  }
  let curr = [];
  var max_length = nums.length;
  solve(nums, 0, res, curr, max_length);
  return res;
};

function solve(nums, index, res, curr, max_length) {
  if (!nums.length) {
    res.push([].concat(curr));
    return;
  }

  let map = {};
  for (let i = index; i < nums.length; i++) {
    curr.push(nums[i]);
    let tem = [].concat(nums);
    tem.splice(i, 1);
    solve(tem, 0, res, curr, max_length);
    curr.pop();
  }
}
