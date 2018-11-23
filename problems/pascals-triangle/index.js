/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = [];
  if (numRows >= 1) {
    res = [[1]];
  }
  for (let i = 1; i < numRows; i++) {
    res[i] = [];
    for (j = 0; j <= i; j++) {
      res[i][j] = (res[i - 1][j] || 0) + (res[i - 1][j - 1] || 0);
    }
  }
  return res;
};
