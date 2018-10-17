/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let nums = 0;
  let res = [];
  let arr = S.toLowerCase().split("");
  let chars = [];
  arr.forEach((item, index) => {
    if (isNaN(+item)) {
      chars[nums] = index;
      nums++;
    }
  });
  let res_count = Math.pow(2, nums);
  for (let i = 0; i < res_count; i++) {
    let tem = [].concat(arr);
    for (let j = 0, len = nums; j < len; j++) {
      if ((i >> j) & 1) {
        tem[chars[j]] = tem[chars[j]].toUpperCase();
      }
    }
    res[i] = tem.join("");
  }
  return res;
};
