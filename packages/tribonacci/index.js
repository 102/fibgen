const { createFibonacciGeneralizationFunction } = require("@3/fibgen-utils");

module.exports.tribonacci = createFibonacciGeneralizationFunction(
  3n,
  "tribonacci"
);
