const { runTests } = require("@3/fibgen-test-utils");
const { tribonacci } = require("./");
const path = require("path");

runTests(path.resolve(__dirname, "testcases.txt"), tribonacci, "Tribonacci");
