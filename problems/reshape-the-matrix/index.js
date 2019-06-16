/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  let originR = nums.length;
  let originC = nums[0].length;
  if (originR * originC !== r * c) {
    return nums;
  } else {
    let res = [];
    for (let index = 0; index < r * c; index++) {
      let row = Math.floor(index / c);
      let col = index % c;
      if (!res[row]) {
        res[row] = [];
      }
      res[row][col] = nums[Math.floor(index / originC)][index % originC];
    }
    return res;
  }
};
