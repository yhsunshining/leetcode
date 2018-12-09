/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [],
    tem = [];
  helper(n, k, 1, res, tem);
  return res;
};

var helper = function(n, k, start, res, tem) {
  if (k == 0) {
    res.push(tem.slice());
    return;
  } else if (k < 0) {
    return;
  }
  // i <= n - k + 1
  // 循环到这里已经够了，不然组不成长度k的数组了
  for (let i = start; i <= n; i++) {
    tem.push(i);
    helper(n, k - 1, i + 1, res, tem);
    tem.pop();
  }
};
