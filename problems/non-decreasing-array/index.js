/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 1
  for(let i=1,len = nums.length;i<len;i++){
      if(nums[i]<nums[i-1]){
          count--
          if(i-2<0 || nums[i]>=nums[i-2]){
              nums[i-1] = nums[i]
          }else {
              nums[i] = nums[i-1]
          }
      }

  }
  return count>=0 ? true:false
};
