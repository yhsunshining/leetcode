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

let prefixes = ["0000", "000", "00", "0", ""];
const group_num = 8;

function tick() {
  let string = readline();
  let arr = string.split(":");
  let res = [];
  if (string[0] == ":" && string[1] == ":") {
    arr.shift();
  }
  arr.forEach((hex, index) => {
    let prefix = prefixes[hex.length];
    if (hex == "") {
      for (let i = index; i < group_num; i++) {
        res[i] = prefix;
      }
    } else {
      if (res[index]) {
        res[index - arr.length + group_num] = prefix + hex;
      } else {
        res[index] = prefix + hex;
      }
    }
  });
  console.log(res.join(":"));
  // console.log(res);
}
