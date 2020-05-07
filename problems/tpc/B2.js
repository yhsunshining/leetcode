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
  let [total, persion] = readline().split(" ");
  total = parseInt(total, 10);
  try {
    tick(total, persion);
  } catch (e) {}
  return 0;
});

const A = "Alice";
const B = "Bob";

function tick(total, persion) {
  let candys = readline().split(" ");
  let map = {};
  let type_num = 0;
  let res = [];
  candys.forEach((item, index) => {
    if (map[item]) {
      map[item] = map[item] + 1;
    } else {
      type_num++;
      map[item] = 1;
    }
  });

  if (total == 1) {
    console.log(A);
    return;
  } else if (total == 2) {
    if (type_num == 1) {
      console.log(persion);
      return;
    } else if (type_num == total) {
      console.log(A);
      return;
    }
  } else {
    if (type_num == 1) {
      console.log(B);
      return;
    }

    for (let key in map) {
      let number = map[key];
      if (res[number]) {
        res[number] = res[number] + 1;
      } else {
        res[number] = 1;
      }
      if (map[key] == 1) {
        console.log(A);
        return;
      }
      if (map[key] == 2 && persion == A) {
        console.log(A);
        return;
      }
    }

    if (type_num == total) {
      console.log(A);
      return;
    }

    if (res[2] >= 2) {
      console.log(A);
      return;
    }

    console.log(B);
    return;
  }
}
