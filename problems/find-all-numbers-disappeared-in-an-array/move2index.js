/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (let index = 0, len = nums.length; index < len; index++) {
    let currentIndex = index; // 0
    let currentValue = nums[currentIndex]; // 4
    while (currentValue > 0) {
      nums[index] = 0;
      currentIndex = currentValue - 1;
      let tem = nums[currentIndex];
      nums[currentIndex] = -currentValue;
      currentValue = tem;
    }
  }

  let res = [];

  nums.forEach((item, index) => {
    if (item == 0) {
      res.push(index + 1);
    }
  });
  return res;
};
