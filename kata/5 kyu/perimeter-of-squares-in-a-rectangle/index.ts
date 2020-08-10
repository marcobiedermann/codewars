function fibonacci(n: number, cache: number[] = []): number {
  if (cache[n]) {
    return cache[n];
  }

  if (n < 3) {
    return 1;
  }

  return fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
}

function perimeter(n: number): number {
  return (
    4 *
    Array.from({ length: n + 1 }).reduce((accumulator: number, _currentValue, index) => {
      return accumulator + fibonacci(index + 1);
    }, 0)
  );
}

export default perimeter;
