/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let zero = 0;
  let product = nums.reduce((product, item) => {
    let times = item;
    if (item == 0) {
      zero++;
      times = 1;
    }
    return (product *= times);
  }, 1);
  return nums.map(item => {
    return zero ? (zero == 1 && item == 0 ? product : 0) : product / item;
  });
};
