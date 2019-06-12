/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let currentMax = 0;
  let count = 0;
  for (let item of nums) {
    if (item == 1) {
      count++;
    } else {
      currentMax = Math.max(currentMax, count);
      count = 0;
    }
  }
  currentMax = Math.max(currentMax, count);
  return currentMax;
};
