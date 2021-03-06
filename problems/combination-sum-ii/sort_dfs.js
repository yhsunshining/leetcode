/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 104 ms 27.15
 */
var combinationSum2 = function(candidates, target) {
  let res = [];
  let tem = [];
  candidates = candidates.sort((a, b) => a - b);
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
    helper(candidates, target - candidates[i], i + 1, res, tem);
    tem.pop();
    while (candidates[i] === candidates[i + 1]) {
      i++;
    }
  }
};
