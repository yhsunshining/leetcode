/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  num = (num + "").split("");
  let map = num.reduce((map, item, index) => {
    map[item] = index;
    return map;
  }, {});
  for (let index in num) {
    for (let number = 9; number >= 0; number--) {
      if (
        map[number] != undefined &&
        number > num[index] &&
        map[number] > index
      ) {
        num[map[number]] = num[index];
        num[index] = number;
        return num.join("");
      }
    }
  }

  return num.join("");
};
