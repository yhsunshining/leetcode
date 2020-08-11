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
  let num = parseInt(readline(), 10);
  let origin = readline().split("");
  let target = readline().split("");
  let res = [];
  let tem = [];
  for (let i = 0; i < num; i++) {
    if (origin[i] !== target[i]) {
      if (!tem.length) {
        tem[0] = i;
        tem[1] = i;
      } else {
        if (origin[i] !== origin[tem[0]]) {
          console.log(-1);
          return 0;
        }
        tem[1] = i;
      }
    } else {
      if (tem.length) {
        res.push(tem);
        tem = [];
      }
    }
  }
  if (tem.length) {
    res.push(tem);
  }

  for (let item of res) {
    let [start, end] = item;
    if (start >= 1 && origin[start - 1] === origin[start]) {
      console.log(-1);
      return 0;
    }
    if (end < num - 1 && origin[end + 1] === origin[end]) {
      console.log(-1);
      return 0;
    }
  }
  console.log(res.length);
  return 1;
}
