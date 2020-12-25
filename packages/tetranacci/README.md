# Tetranacci function

Tetranacci function as defined in the [OEIS A000078](https://oeis.org/A000078)
article.

This is a recursive function that works the following way:

```js
tetranacci(0n) // => 0n
tetranacci(1n) // => 0n
tetranacci(2n) // => 0n
tetranacci(3n) // => 1n
tetranacci(4n) // => 1n, as a result of tetranacci(3n) + tetranacci(2n) + tetranacci(1n) + tetranacci(0n)
// ...
tetranacci(9n) // => 29n, as a result of tetranacci(8n) + tetranacci(7n) + tetranacci(6n) + tetranacci(5n)
```
