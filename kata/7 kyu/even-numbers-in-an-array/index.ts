function isEven(n: number) {
  return n % 2 === 0;
}

function evenNumbers(array: number[], number: number): number[] {
  return array.filter(isEven).slice(-number);
}

export default evenNumbers;
