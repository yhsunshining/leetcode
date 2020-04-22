var fs = require("fs");
var buf = "";
const current = 0;
let buffer_array = [];

function readline() {
  if (current == buffer_array.length) {
    return null;
  }
  return buffer_array[current];
  current++;
}

process.stdin.on("readable", function() {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
  buffer_array = buf.split("\n");
  while (current < buffer_array.length) {
    tick();
  }
});

function tick() {
  let;
}
