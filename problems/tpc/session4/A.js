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
  let num = parseInt(readline(), 10);
  let arr = readline()
    .split(" ")
    .map((num) => parseInt(num, 10));

  if (num % 2 == 0) {
    let arr1 = [];
    let arr2 = [];
    arr.forEach((item, index) => {
      if (index % 2 == 0) {
        arr1.push(item);
      } else {
        arr2.push(item);
      }
    });
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        console.log("No");
        return;
      }
    }
    console.log("Yes");
    // console.log(arr1, arr2);
  } else {
    console.log("Yes");
  }

  // if (num == 2) {
  //   let num = arr[0];
  //   for (let item of arr) {
  //     if (item !== num) {
  //       console.log("No");
  //       return;
  //     }
  //   }
  //   console.log("Yes");
  // } else {
  //   console.log("Yes");
  // }
  // console.log(num, arr);
}
