/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let start = 0,
    end = 0;
  let product = 1;
  let count = 0;
  let length = nums.length;
  while (end < length) {
    product *= nums[end];
    while (start <= end && product >= k) {
      product /= nums[start];
      start++;
    }
    count += end - start + 1;
    end++;
  }
  return count;
};

/**
 * Input [10,2,2,5,4,4,4,3,7,7]
 *        289
 * Output 27
 * Expected 31
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var numSubarrayProductLessThanK = function(nums, k) {
//   let start = 0,
//     end = -1;
//   let product = 1;
//   let count = 0;
//   let length = nums.length;
//   while (end < length - 1) {
//     product *= nums[end + 1];
//     if (product < k) {
//       count++;
//       end++;
//     } else {
//       product /= nums[end + 1];
//       console.log(nums[start]);
//       if (start > end) {
//         end = start;
//       } else {
//         switch (end - start) {
//           case 0:
//             break;
//           case 1:
//             count++;
//             break;
//           default:
//             count += 2;
//             break;
//         }
//       }
//       product /= nums[start];
//       start++;
//     }
//   }
//   for (let i = end - start; i > 0; i--) {
//     count += i;
//   }
//   return count;
// };
