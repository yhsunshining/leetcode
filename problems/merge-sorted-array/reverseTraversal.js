/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let m_index = m - 1,
    n_index = n - 1;
  for (let i = n + m - 1; i >= 0 && n_index >= 0; i--) {
    if (m_index < 0 || nums2[n_index] >= nums1[m_index]) {
      nums1[i] = nums2[n_index];
      n_index--;
    } else {
      nums1[i] = nums1[m_index];
      m_index--;
    }
  }
};
