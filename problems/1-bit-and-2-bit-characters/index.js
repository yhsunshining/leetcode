/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let res = true;
  let len = bits.length;
  if (len <= 1) {
    return true;
  } else {
    for (let i = 0; i < bits.length; ) {
      let cur = bits[i];
      let next = bits[i + 1];
      if (cur == 1) {
        i += 2;
        res = false;
      } else {
        i++;
        res = true;
      }
    }
  }
  return res;
};
