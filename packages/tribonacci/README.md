# Tribonacci function

Tribonacci function as defined in the [OEIS A000073](https://oeis.org/A000073)
article.

This is a recursive function that works the following way:

```js
tribonacci(0n) // => 0n
tribonacci(1n) // => 0n
tribonacci(2n) // => 1n
tribonacci(3n) // => 1n, as a result of tribonacci(2n) + tribonacci(1n) + tribonacci(0n)
// ...
tribonacci(9n) // => 44n, as a result of tribonacci(8n) + tribonacci(7n) + tribonacci(6n)
```
