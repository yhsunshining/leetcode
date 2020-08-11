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
  let mitrx = [];
  let sum = 0;
  let innermax = [0, -1, -1];
  let innermin = [1e10, -1, -1];
  let outtermax = [0, -1, -1];
  for (let i = 0; i < n; i++) {
    mitrx[i] = readline()
      .split(" ")
      .map((item, j) => {
        let num = parseInt(item, 10);
        if (i == j || j == n - i - 1) {
          if (i == j) {
            sum += num;
          }
          if (j == n - i - 1) {
            sum += num;
          }
          if (num < innermin[0]) {
            innermin[0] = num;
            innermin[1] = i;
            innermin[2] = j;
          }
          if (num > innermax[0]) {
            innermax[0] = num;
            innermax[1] = i;
            innermax[2] = j;
          }
        } else {
          if (num > outtermax[0]) {
            outtermax[0] = num;
            outtermax[1] = i;
            outtermax[2] = j;
          }
        }
        sum += num;
        sum += num;
        return num;
      });
  }

  if (n % 2 == 1) {
    // console.log(innermin, innermax, outtermax);
    let center = Math.floor(n / 2);

    let res = 0;

    // 交换 外大内小
    if (outtermax[0] > innermin[0]) {
      if (innermin[1] == center && innermin[2] == center) {
        res += outtermax[0] - innermin[0];
      }
      res = outtermax[0] - innermin[0];
    }

    // 内大内中交换
    if (res < innermax[0] - mitrx[center][center]) {
      res = innermax[0] - mitrx[center][center];
    }

    // 交换外大 内中
    if (outtermax[0] > mitrx[center][center]) {
      let tem = (outtermax[0] - mitrx[center][center]) * 2;
      if (tem > res) {
        res = tem;
      }
    }

    sum += res;
  } else {
    if (outtermax[0] > innermin[0]) {
      sum += outtermax[0] - innermin[0];
    }
  }
  console.log(sum);
}
