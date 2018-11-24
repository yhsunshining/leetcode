/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let res = [];
  res[0] = triangle[0];

  for (let i = 1, len = triangle.length; i < len; i++) {
    res[i] = [];
    res[i][0] = triangle[i][0] + res[i - 1][0];
    res[i][i] = triangle[i][i] + res[i - 1][i - 1];
    for (let j = 1; j < i; j++) {
      res[i][j] = triangle[i][j] + Math.min(res[i - 1][j], res[i - 1][j - 1]);
    }
  }

  return Math.min(...res[res.length - 1]);
};
