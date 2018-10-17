/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = [[]];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0, len = nums.length; i < len; ) {
    let count = 0;
    while (count + i < len && nums[count + i] == nums[i]) {
      count++;
    }
    let res_num = res.length;
    for (let res_index = 0; res_index < res_num; res_index++) {
      let item = res[res_index];
      let tem = [];
      for (let j = 0; j < count; j++) {
        tem[j] = nums[i];
        res.push(item.concat(tem));
      }
    }
    i += count;
  }
  return res;
};
