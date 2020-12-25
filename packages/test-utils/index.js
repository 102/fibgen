const { readFile } = require("fs/promises");
const { strictEqual } = require("assert");

const runTests = (testcasesFilename, fn, fnName) =>
  readFile(testcasesFilename, {
    encoding: "utf-8",
  }).then((testcases) =>
    testcases
      .split("\n")
      .filter(Boolean)
      .forEach((testcase) => {
        const [n, result] = testcase.split(" ");

        strictEqual(fn(BigInt(n)), BigInt(result));
        console.log("✅", fnName, n);
      })
  );

module.exports.runTests = runTests;
