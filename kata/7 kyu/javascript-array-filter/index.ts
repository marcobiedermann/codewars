function isEven(n: number): boolean {
  return n % 2 === 0;
}

function getEvenNumbers(numbersArray: number[]): number[] {
  return numbersArray.filter(isEven);
}

export default getEvenNumbers;
