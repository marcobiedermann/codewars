function fibonacci(n: number, cache = new Map<number, number>()): number {
  if (cache.has(n)) {
    return cache.get(n) || 0;
  }

  if (n < 2) {
    return n;
  }

  cache.set(n, fibonacci(n - 1, cache) + fibonacci(n - 2, cache));

  return cache.get(n) || 0;
}

export default fibonacci;
