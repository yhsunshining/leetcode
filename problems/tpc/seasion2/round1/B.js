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
  let [n, m] = readline()
    .split(" ")
    .map(number => parseInt(number, 10));
  let arr = readline()
    .split(" ")
    .map(number => parseInt(number, 10));
  let sum = 0;
  let values = [arr[0], arr[1], arr[2]];

  if (arr[2] == -1) {
    if (arr[1] == -1) {
      if (arr[0] == -1) {
        values[0] = 0;
      }
      values[1] = 0;
    } else if (arr[0] == -1) {
      values[0] = 0;
    }
    values[2] = Math.max(m - values[1] - values[0], 0);
  } else {
    if (arr[1] == -1) {
      if (arr[0] == -1) {
        values[0] = 0;
      }
      values[1] = Math.max(m - values[2] - values[0], 0);
    } else if (arr[0] == -1) {
      values[0] = Math.max(m - values[2] - values[1], 0);
    }
  }
  sum = values[0] + values[1] + values[2];
  if (sum < m) {
    console.log("Impossible");
    return;
  }
  for (let i = 3; i < n; i++) {
    let pre = values[i - 2] + values[i - 1];
    if (arr[i] == -1) {
      values[i] = Math.max(m - pre, 0);
    } else {
      values[i] = arr[i];
      if (pre + values[i] < m) {
        if (arr[i - 1] == -1) {
          sum -= values[i - 1];
          values[i - 1] = m - values[i] - values[i - 2];
          sum += values[i - 1];
        } else if (arr[i - 2] == -1) {
          sum -= values[i - 2];
          values[i - 2] = m - values[i] - values[i - 1];
          sum += values[i - 2];
        } else {
          console.log("Impossible");
          return;
        }
      }
    }
    sum += values[i];
  }

  console.log(sum);
}
