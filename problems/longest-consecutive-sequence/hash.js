/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let map = {};
  let count = 0;
  nums.forEach((item, index) => {
    if (!map[item]) {
      map[item] = [item, item];
      let min = map[item - 1] ? map[map[item - 1][0]] : map[item];
      let max = map[item + 1] ? map[map[item + 1][1]] : map[item];

      min[1] = max[1];
      max[0] = min[0];
      count = Math.max(min[1] - min[0] + 1, count);
    }
  });

  return count;
};
