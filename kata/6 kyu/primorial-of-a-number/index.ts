function isPrime(n: number): boolean {
  const sqrt = Math.sqrt(n);

  for (let i = 2; i <= sqrt; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return n > 1;
}

function numPrimorial(n: number): number {
  const primes = [];
  let index = 2;

  while (primes.length < n) {
    if (isPrime(index)) {
      primes.push(index);
    }

    index += 1;
  }

  return primes.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
}

export default numPrimorial;
