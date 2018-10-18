/**
 * @param {number[]} nums
 * @return {number[][]}
 * 60ms
 */
var subsetsWithDup = function(nums) {
  let res = [[]];
  nums = nums.sort((a, b) => a - b);
  var times = 0;
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

/**
 * another solution
 * easy to understand
 * 62ms
 */
var subsetsWithDup_ii = function(nums) {
  let res = [[]];
  nums = nums.sort((a, b) => a - b);
  var res_len = 1;
  for (let i = 0, len = nums.length; i < len; i++) {
    let count = 0;
    if (i == 0 || nums[i] != nums[i - 1]) {
      res_len = res.length;
    }
    let max_length = res.length;
    for (let j = max_length - res_len; j < max_length; j++) {
      res.push(res[j].concat(nums[i]));
    }
  }
  return res;
};
