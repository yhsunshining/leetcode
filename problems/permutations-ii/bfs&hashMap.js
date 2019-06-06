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
  solve(nums, 0, res, curr);
  return res;
};

function solve(nums, index, res, curr) {
  if (!nums.length) {
    res.push([].concat(curr));
    return;
  }

  let map = {};
  for (let i = index; i < nums.length; i++) {
    let currentNum = nums[i];
    if (map[currentNum]) {
      continue;
    }
    map[currentNum] = true;
    curr.push(nums[i]);
    let tem = [].concat(nums);
    tem.splice(i, 1);
    solve(tem, 0, res, curr);
    curr.pop();
  }
}
