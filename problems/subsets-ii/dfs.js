/**
 *
 * @param {number[]} nums
 * @return {number[][]}
 */

function subsetsWithDup(nums) {
  let res = [];
  nums = nums.sort((a, b) => a - b);
  if (nums.length == 0) {
    return [];
  }
  let curr = [];
  solve(nums, 0, res, curr);
  return res;
}

function solve(nums, index, res, curr) {
  res.push([].concat([].concat(curr)));
  if (index == nums.length) {
    return;
  }

  let map = {};
  for (let i = index; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
      curr.push(nums[i]);
      solve(nums, i + 1, res, curr);
      curr.pop();
    }
  }
}
