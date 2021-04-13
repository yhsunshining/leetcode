var fs = require("fs");
var buf = "";
let current = 0;
let buffer_array = [];

function readline() {
  if (current == buffer_array.length) {
    return null;
  }
  let res = buffer_array[current];
  current++;
  return res;
}

process.stdin.on("readable", function() {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
  buffer_array = buf.split("\n");
  let total = parseInt(readline(), 10);
  for (let i = 0; i < total; i++) {
    tick();
  }
  return 0;
});

function tick() {
  let arr = readline()
    .split("")
    .map(str => parseInt(str, 10));

  let len = arr.length;
  let zeroCount = 0;
  let oneCount = 0;
  for (let num of arr) {
    if (num) {
      oneCount++;
    } else {
      zeroCount++;
    }
  }
  let count = Math.abs(zeroCount - oneCount);
  let more = zeroCount > oneCount ? 0 : 1;
  let findCount = count >> 1;

  if (!findCount) {
    console.log("1 " + len);
    return;
  }

  let left = 0,
    right = 0;

  while (left < len) {
    if (arr[left] == more) {
      break;
    } else {
      left++;
    }
  }
  right = left;

  while (right < len) {
    if (right - left + 1 == findCount) {
      console.log("" + (left + 1) + " " + (right + 1));
      return;
    }
    if (arr[right + 1] === more) {
      right++;
    } else {
      left = right + 1;
      while (left < len) {
        if (arr[left] == more) {
          break;
        } else {
          left++;
        }
      }
      right = left;
    }
  }
}
