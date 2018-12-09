/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {};

let helper = function(candidates, target, start, res, tem) {
  if (n < start) {
    return null;
  } else if (k == 1 && n >= start && n <= 9) {
    return [[n]];
  } else if (k == 0) {
    return [];
  }
  let end = Math.ceil(n / k) - 1;
  let res = [];
  for (let i = start; i <= end; i++) {
    let _tem = helper(k - 1, n - i, i + 1);
    if (_tem) {
      _tem.forEach(arr => {
        res.push([i].concat(arr));
      });
    }
  }
  return res;
};
