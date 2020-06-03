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
});


let map = {
  1: {
    divide_by_three: 2,
    divide_by_four: 3,
    divide_by_five: 4,
    indivisible: 1
  },
  2: {
    divide_by_three: 1,
    divide_by_four: 2,
    divide_by_five: 3,
    indivisible: 0
  },
  3: {
    divide_by_three: 0,
    divide_by_four: 1,
    divide_by_five: 2,
    indivisible: 0
  },
  4: {
    divide_by_three: 2,
    divide_by_four: 0,
    divide_by_five: 1,
    indivisible: 1
  },
  5: {
    divide_by_three: 1,
    divide_by_four: 3,
    divide_by_five: 0,
    indivisible: 0
  },
  6: {
    divide_by_three: 0,
    divide_by_four: 2,
    divide_by_five: 4,
    indivisible: 1
  },
  7: {
    divide_by_three: 2,
    divide_by_four: 1,
    divide_by_five: 3,
    indivisible: 0
  },
  8: {
    divide_by_three: 1,
    divide_by_four: 0,
    divide_by_five: 2,
    indivisible: 3
  },
  9: {
    divide_by_three: 0,
    divide_by_four: 3,
    divide_by_five: 1,
    indivisible: 2
  }
}

function tick() {
  let [hp, op] = readline().split(' ')
  hp = parseInt(hp, 10)
  console.log(map[hp][op])
  return
}
