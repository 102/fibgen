/**
 * @callback FibonacciGeneralizationFunction
 * @param {bigint} n
 * @returns {bigint}
 */

/**
 * @param {bigint} order
 * @param {string} name
 * @returns {FibonacciGeneralizationFunction}
 */
function createFibonacciGeneralizationFunction(order, name) {
  function fn(n) {
    if (n < order - 1n) return 0n;
    if (n === order - 1n) return 1n;
    return Array.from({ length: Number(order) })
      .map((_, i) => fn(n - 1n - BigInt(i)))
      .reduce((a, b) => a + b);
  }
  return Object.defineProperty(fn, "name", { value: name });
}

module.exports.createFibonacciGeneralizationFunction = createFibonacciGeneralizationFunction;
