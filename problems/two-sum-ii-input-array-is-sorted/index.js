/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = {};
  for (let i = 0, len = numbers.length; i < len; i++) {
    let num = numbers[i];
    if (map[target - num]) {
      return [map[target - num], i + 1];
    } else {
      map[num] = i + 1;
    }
  }
  return null;
};
