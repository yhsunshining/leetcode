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
  let [n, k] = readline()
    .split(" ")
    .map((num) => parseInt(num, 10));

  let list = [];

  for (let index = 0; index < k; index++) {
    let a = readline()
      .split(" ")
      .map((num) => parseInt(num, 10));
    a.shift();
    list.push(a);
  }

  let round = 0;
  while (true) {
    let map = {};
    let empty = true;
    let done = false;
    for (let item of list) {
      if (item[0] !== undefined) {
        empty = false;
        if (map[item[0]]) {
          map[item[0]].shift();
          item.shift();
          round++;
          done = true;
          continue;
        } else {
          // console.log(item);
          map[item[0]] = item;
        }
      }
    }
    if (empty) {
      break;
    }
    if (!done) {
      break;
    }
  }

  console.log(round % 2 == 0 ? "Nacho" : "Kelly");
}
