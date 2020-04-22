
process.stdin.on("readable", function() {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    let inputStr = chunk.toString();

    if (isNum(inputStr)) {
      // 先定义测试数据有多少组
      const length = Number(inputStr);
      if (testGroupLength === 0) {
        testGroupLength = length;
      } else if (nextTestCaseLength === 0) {
        nextTestCaseLength = length;
      } else {
        process.stdout.write(
          "异常输入，请先输入一个数字表示测试组数，或测试数据长度"
        );
      }
      return;
    } else if (isNumArr(inputStr)) {
      // n个空格分隔的数列
      const numArr = toNumArr(inputStr);
      if (nextTestCaseLength === numArr.length) {
        nextTestCaseLength = 0;
        validTestCases.push(numArr);
        if (validTestCases.length === testGroupLength) {
          for (const testCase of validTestCases) {
            outputArr.push(testCase.run().join(" "));
          }
          process.stdout.write(outputArr.join("\n"));
          process.stdout.write("\n运行结束\n");
        }
      } else {
        process.stdout.write(
          "异常输入，标准为先输入一个长度n，后输入n个空格分隔的数字"
        );
      }
      return;
    }

    process.stdout.write("异常输入，请先输入一个长度n，表示测试数据组的数量");
  }
});
