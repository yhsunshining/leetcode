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
  let n = parseInt(readline(), 10);
  let arr = readline()
    .split(" ")
    .map(function(item) {
      return parseInt(item, 10);
    });

  let sort = [].concat(arr).sort();
  let max = sort[n / 2 - 1];
  let min = sort[n / 2];
  let p1 = 0,
    p2 = n - 1;
  let res = 0;
  while (p1 < p2 && p1 < n / 2) {
    if (arr[p1] > max) {
      while (arr[p2] >= min && p2 > n / 2) {
        p2--;
      }
      res += p2 - p1;
      p2--;
    }
    p1++;
  }
  console.log(res);
}
