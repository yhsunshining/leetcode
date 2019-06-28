/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let map = {};
  nums.forEach((num, index) => {
    if (map[num]) {
      map[num].count++;
      map[num].range[1] = index;
    } else {
      map[num] = {
        count: 1,
        range: [index, index]
      };
    }
  });
  let max = 0;
  let min = nums.length;
  for (let key in map) {
    if (map[key].count > max) {
      max = map[key].count;
      min = map[key].range[1] - map[key].range[0] + 1;
    } else if (map[key].count == max) {
      max = map[key].count;
      min = Math.min(min, map[key].range[1] - map[key].range[0] + 1);
    }
  }
  return min;
};
