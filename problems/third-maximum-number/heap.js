var thirdMax = function(nums) {
  for (let root = (nums.length - 1) >> 1; root >= 0; root--) {
    heap(nums, root);
  }
  let realMax = nums[0];
  let max;
  let index = 1;
  while (index <= 3) {
    if (max != nums[0]) {
      index++;
    }
    let root = 0;
    max = nums[root];
    if (nums.length == 1) {
      if (index > 3) {
        break;
      } else {
        return realMax;
      }
    }
    nums[root] = nums.pop();
    while (root * 2 + 1 <= nums.length - 1) {
      let left = nums[root * 2 + 1];
      let right = nums[root * 2 + 2] || -Infinity;
      if (left >= right && left > nums[root]) {
        nums[root * 2 + 1] = nums[root];
        nums[root] = left;
        root = root * 2 + 1;
      } else if (right > left && right > nums[root]) {
        nums[root * 2 + 2] = nums[root];
        nums[root] = right;
        root = root * 2 + 2;
      } else {
        break;
      }
    }
  }

  return max;
};

function heap(nums, root) {
  let left = nums[root * 2 + 1];
  let right = nums[root * 2 + 2] || -Infinity;
  if (left >= right && left > nums[root]) {
    nums[root * 2 + 1] = nums[root];
    nums[root] = left;
    heap(nums, root * 2 + 1);
  } else if (right > left && right > nums[root]) {
    nums[root * 2 + 2] = nums[root];
    nums[root] = right;
    heap(nums, root * 2 + 2);
  }
}
