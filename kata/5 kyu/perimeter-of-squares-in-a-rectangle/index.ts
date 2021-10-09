/* eslint-disable no-param-reassign */

function fibonacci(n: number, cache: number[] = []): number {
  if (cache[n]) {
    return cache[n];
  }

  if (n < 3) {
    return 1;
  }

  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);

  return cache[n];
}

function perimeter(n: number): number {
  return (
    4 *
    Array.from({ length: n + 1 }).reduce(
      (accumulator: number, _currentValue, index) => accumulator + fibonacci(index + 1),
      0,
    )
  );
}

export default perimeter;
