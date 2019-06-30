/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let len = prices.length;
  let buy = [],
    sell = [0];
  if (len <= 1) {
    return 0;
  } else {
    buy[0] = -prices[0];
    for (let i = 1; i < len; i++) {
      buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i]);
      sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i] - fee);
    }
  }
  return sell[len - 1];
};
