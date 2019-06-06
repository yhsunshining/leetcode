/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = [];
  if (nums.length == 0) {
    return [];
  }
  let curr = [];
  solve(nums.sort((a, b) => a - b), 0, res, curr);
  return res;
};

function solve(nums, index, res, curr) {
  if (!nums.length) {
    res.push([].concat(curr));
    return;
  }

  for (let i = index; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      continue;
    }
    curr.push(nums[i]);
    let tem = [].concat(nums);
    tem.splice(i, 1);
    solve(tem, 0, res, curr);
    curr.pop();
  }
}
