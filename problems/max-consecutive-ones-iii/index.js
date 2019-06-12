/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let start = 0,
    end = -1;
  let len = A.length;
  let count = end - start + 1;
  while (end < len - 1) {
    if (A[end + 1] == 0) {
      end++;
      if (K > 0) {
        K--;
      } else {
        while (A[start] != 0) {
          start++;
        }
        start++;
      }
    }
    while (A[end + 1] == 1) {
      end++;
    }
    count = Math.max(end - start + 1, count);
  }
  return count;
};
