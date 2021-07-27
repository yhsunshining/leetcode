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

process.stdin.on("readable", function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
  buffer_array = buf.split("\n");
  let total = parseInt(readline(), 10);
  for (let i = 0; i < total; i++) {
    tick();
  }
  return 0;
});

function tick() {
  let count = parseInt(readline(), 10);
  let arr = readline()
    .split(" ")
    .map((str) => parseInt(str, 10));
  let zero = 0;
  let neg = 0;
  let opt = 0;
  arr.forEach((num) => {
    if (num > 0) {
      opt++;
    } else if (num == 0) {
      zero++;
    } else {
      neg++;
    }
  });
  let max = Math.max(neg, opt);
  if (max > Math.ceil(count / 2)) {
    console.log("No");
    return;
  } else {
    console.log("Yes");
    return;
  }
  // console.log(Math.ceil(count / 2));
  // if (Math.floor(count / 2)) console.log(max);
  // console.log(neg, zero, opt);
}
