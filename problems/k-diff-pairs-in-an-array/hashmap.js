/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let map = {};
  let count = 0;
  if (k == 0) {
    for (let item of nums) {
      map[item] = map[item] ? map[item] + 1 : 1;
    }
    for (let key in map) {
      if (map[key] > 1) {
        count++;
      }
    }
  } else if (k > 0) {
    for (let item of nums) {
      if (map[item]) {
        continue;
      }
      if (map[item + k]) {
        count++;
      }
      if (map[item - k]) {
        count++;
      }
      map[item] = true;
    }
  } else {
    return 0;
  }

  return count;
};
