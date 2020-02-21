function divisors(integer: number): number[] | string {
  const numbers = Array.from({ length: integer - 2 }, (_, index) => index + 2).filter(
    number => integer % number === 0,
  );

  if (!numbers.length) {
    return `${integer} is prime`;
  }

  return numbers;
}

export default divisors;
