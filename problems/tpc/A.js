var fs = require("fs");
var buf = "";
let current = 0;
let buffer_array = [];
let map = {};

function prime(a, b) {
  //辗转相除法求出最大公约数
  let temp = 0;
  while (b != 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

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
  let num = parseInt(readline(), 10);
  let res = [];
  if (num == 1) {
    console.log(1);
    return;
  }

  res = [];
  for (let i = 2; i <= num; i++) {
    if (map[i]) {
      res = map[i];
      continue;
    }
    let inserted = false;
    groupIt: for (let group of res) {
      let continued = false;
      for (let item of group) {
        let a = prime(i, item);
        if (a !== 1) {
          continue groupIt;
        }
      }
      group.push(i);
      inserted = true;
    }
    if (!inserted) {
      res.push([i]);
    }
    map[i] = res;
  }

  console.log(res.length);
  return res.length;
}
