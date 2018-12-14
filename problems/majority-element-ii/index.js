/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let res=[0,0]
  let count = [0,0]
  if(!nums.length){
      return []
  }
  nums.forEach(item=>{
      if(item == res[0]){
          count[0]++
      }else if(item == res[1]){
          count[1]++
      }
      else if(count[0]== 0){
          res[0]=item
          count[0]=1
      }
      else if(count[1]==0){
          res[1] = item
          count[1] =1
      }
      else {
          count[0]--
          count[1]--
      }
  })
  count = [0,0]
  nums.forEach(item=>{
      if(item == res[0]){
          count[0]++
      }
      else if(item == res[1]){
          count[1]++
      }
  })
  let result = []
  let limit = nums.length /3
  if(count[0]>limit){
      result.push(res[0])
  }
  if(count[1]>limit){
      result.push(res[1])
  }
  return result
};