const { runTests } = require("@3/fibgen-test-utils");
const { fibonacci } = require("./");
const path = require("path");

runTests(path.resolve(__dirname, "testcases.txt"), fibonacci, "Fibonacci");
