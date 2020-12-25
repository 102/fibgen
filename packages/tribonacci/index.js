function tribonacci(n) {
  if (n < 2n) return 0n;
  if (n === 2n) return 1n;
  return tribonacci(n - 1n) + tribonacci(n - 2n) + tribonacci(n - 3n);
}

module.exports.tribonacci = tribonacci;
