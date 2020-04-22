/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let map = {};
  let res = 0;
  for (let i = 0, len = A.length; i < len; i++) {
    let key = "";
    for (j = i; j < len; j++) {
      key += A[j] + ",";
      map[key] = j - i + 1;
    }
  }
  //console.log(map)
  for (let i = 0, len = B.length; i - 1 + res < len; i++) {
    let key = "";
    let temline = i + res;
    //console.log(res)
    for (j = i; j < temline; j++) {
      key += B[j] + ",";
    }
    //console.log(key)
    for (; j < len; j++) {
      key += B[j] + ",";
      if (map[key] !== undefined) {
        res++;
      }
    }
  }
  return res;
};
