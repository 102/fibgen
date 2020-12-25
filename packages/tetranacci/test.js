const { runTests } = require("@3/fibgen-test-utils");
const { tetranacci } = require("./");
const path = require("path");

runTests(path.resolve(__dirname, "testcases.txt"), tetranacci, "Tetranacci");
