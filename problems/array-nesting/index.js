/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  let count = 0;
  for (let index = 0, len = nums.length; index < len; index++) {
    let tem = 0,
      cur = index;
    while (nums[cur] >= 0) {
      let next = nums[cur];
      nums[cur] = -1;
      cur = next;
      tem++;
    }
    count = count > tem ? count : tem;
  }
  return count;
};
