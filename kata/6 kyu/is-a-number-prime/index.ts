function isPrime(num: number): boolean {
  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}

export default isPrime;
