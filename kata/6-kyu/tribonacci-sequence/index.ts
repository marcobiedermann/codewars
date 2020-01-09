function tribonacci(signature: number[], n: number, index = n): number[] {
  if (index <= 3) {
    return signature.slice(0, n);
  }

  const sum = signature
    .slice(-3)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return tribonacci([...signature, sum], n, index - 1);
}

export default tribonacci;
