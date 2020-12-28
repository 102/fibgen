const { createFibonacciGeneralizationFunction } = require("@3/fibgen-utils");

module.exports.tetranacci = createFibonacciGeneralizationFunction(
  4n,
  "tetranacci"
);
