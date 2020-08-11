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



function tick() {
  let str = readline()
  let arr = str.split('')
  let total = arr.length
  let zcount = 0
  let ocount = 0
  arr.forEach(item => {
    if (item == 0) {
      zcount++
    }
    else {
      ocount++
    }
  })
  if (!zcount) {
    console.log(str)
    return
  }

  if (ocount >= (Math.ceil(zcount / 2) - 1)) {
    let res = ''
    let count = (Math.ceil(zcount / 2) - 1)
    for (let i = 0; i < ocount - count; i++) {
      res += '1'
    }
    for (let i = 0; i < count; i++) {
      res += '001'
    }
    if (zcount % 2 == 1) {
      res += '0'
    } else {
      res += '00'
    }
    console.log(res)
    return

  } else {
    console.log('Impossible')
    return
  }
}
