/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0];
  let res = 0;
  prices.forEach(item => {
    if (item <= min) {
      min = item;
    } else {
      res = Math.max(item - min, res);
    }
  });
  return res >= 0 ? res : 0;
};
