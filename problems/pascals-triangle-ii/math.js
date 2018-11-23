/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let res = [1];
  for (let i = 1; i < rowIndex + 1; i++) {
    res[i] = (res[i - 1] * (rowIndex - i + 1)) / i;
  }
  return res;
};
