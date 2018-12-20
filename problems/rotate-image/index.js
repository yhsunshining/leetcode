/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let len = matrix.length;

  let round = 0;
  while (len > 1) {
    for (let i = 0; i < len - 1; i++) {
      let tem = matrix[round][round + i];
      matrix[round][round + i] = matrix[round + len - 1 - i][round];
      matrix[round + len - 1 - i][round] =
        matrix[round + len - 1][round + len - 1 - i];
      matrix[round + len - 1][round + len - 1 - i] =
        matrix[round + i][round + len - 1];
      matrix[round + i][round + len - 1] = tem;
    }
    len -= 2;
    round++;
  }
};
