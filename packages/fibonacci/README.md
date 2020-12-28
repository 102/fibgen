# Fibonacci function

Fibonacci function as defined in the [OEIS A000045](https://oeis.org/A000045)
article.

This is a recursive function that works the following way:

```js
fibonacci(0n) // => 0n
fibonacci(1n) // => 1n
fibonacci(2n) // => 1n, as a result of fibonacci(1n) + fibonacci(0n)
// ...
fibonacci(9n) // => 34n, as a result of fibonacci(8n) + fibonacci(7n)
```
