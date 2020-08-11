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
  let a = readline()
    .split(" ")
    .map(num => parseInt(num, 10));
  let b = readline()
    .split(" ")
    .map(num => parseInt(num, 10));

  if (a[0] != b[0]) {
    console.log("No");
    return;
  }

  let map = {},
    count = 0;
  let tree = [];

  for (let i = 0; i < n; i++) {
    tree[i] = -1;
  }
  tree[a[0]] = 0;

  for (let i = 1; i < n; i++) {
    if (map[a[i]]) {
      map[a[i]] = 0;
      count--;
    } else {
      map[a[i]] = 1;
      count++;
    }

    if (map[b[i]]) {
      map[b[i]] == 0;
      count--;
    } else {
      map[b[i]] = 1;
      count++;
    }
    if (count == 0) {
    }
  }

  console.log(tree.join(" "));

  console.log(a);
  console.log(b);
}
