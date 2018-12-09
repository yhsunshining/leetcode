/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = [];
  let tem = [];
  helper(candidates, target, 0, res, tem);
  return res;
};

let helper = function(candidates, target, start, res, tem) {
  if (target == 0) {
    res.push(tem.slice());
    return;
  } else if (target < 0) {
    return;
  }

  for (let i = start, len = candidates.length; i < len; i++) {
    tem.push(candidates[i]);
    helper(candidates, target - candidates[i], i, res, tem);
    tem.pop();
  }
};
