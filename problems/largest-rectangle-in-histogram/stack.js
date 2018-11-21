/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = [];
  heights.push(0);
  let max = 0;
  for (let i = 0, len = heights.length; i < len; i++) {
    let peek = stack[stack.length - 1];
    if (!stack.length || heights[peek] <= heights[i]) {
      stack.push(i);
    } else {
      let topIndex = stack.pop();
      let height = heights[topIndex];
      // 空栈 -> topIndex前都较高 -> 0-i 的宽度 都可以以 height为高
      let width = !!stack.length ? i - stack[stack.length - 1] - 1 : i;
      max = Math.max(max, height * width);
      i--;
    }
  }
  return max;
};

console.log(largestRectangleArea([4, 2, 0, 3, 2, 5]));
