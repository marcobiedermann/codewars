function isEven(number: number): boolean {
  return number % 2 === 0;
}

function isOdd(number: number): boolean {
  return !isEven(number);
}

function iqTest(numberString: string): number {
  const numbers = numberString.split(' ').map(Number);

  const evenNumbers = numbers.filter(isEven);
  const oddNumbers = numbers.filter(isOdd);

  return evenNumbers.length < oddNumbers.length
    ? numbers.indexOf(evenNumbers[0]) + 1
    : numbers.indexOf(oddNumbers[0]) + 1;
}

export default iqTest;
