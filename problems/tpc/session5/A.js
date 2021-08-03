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
  let [total, gold] = readline()
    .split(" ")
    .map((num) => parseInt(num, 10));

  let a = readline()
    .split(" ")
    .map((num) => parseInt(num, 10));
  let b = readline()
    .split(" ")
    .map((num) => parseInt(num, 10));

  let t = a[0] + b[0];
  // a[0] = a[0] + b[0];
  for (let item of a) {
    if (item > t) {
      gold--;
    }
  }
  console.log(gold > 0 ? "Yes" : "No");
  // console.log(total, gold);
}
