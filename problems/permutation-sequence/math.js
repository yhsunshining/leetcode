/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let k_seq = [1];
  let nums = [1];
  for (let i = 1; i < n; i++) {
    k_seq[i] = k_seq[i - 1] * (i + 1);
    nums[i] = i + 1;
  }
  let res = "";
  for (let i = 0; i < n - 1; i++) {
    let div = k_seq[n - 2 - i];
    let index = Math.floor((k - 1) / div);
    let mod = k % div || div;
    res += nums[index];
    nums.splice(index, 1);
    k = mod;
  }
  res += nums[0];
  return res;
};
