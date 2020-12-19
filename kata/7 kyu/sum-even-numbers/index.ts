function isEven(n: number): boolean {
  return n % 2 === 0;
}

function sumEvenNumbers(input: number[]): number {
  let result = 0;

  input.forEach((number) => {
    if (isEven(number)) {
      result += number;
    }
  });

  return result;
}

export default sumEvenNumbers;
