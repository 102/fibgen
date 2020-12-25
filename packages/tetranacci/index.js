function tetranacci(n) {
  if (n < 3n) return 0n;
  if (n === 3n) return 1n;
  return (
    tetranacci(n - 1n) +
    tetranacci(n - 2n) +
    tetranacci(n - 3n) +
    tetranacci(n - 4n)
  );
}

module.exports.tetranacci = tetranacci;
