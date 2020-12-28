const { createFibonacciGeneralizationFunction } = require("@3/fibgen-utils");

module.exports.fibonacci = createFibonacciGeneralizationFunction(
  2n,
  "fibonacci"
);
