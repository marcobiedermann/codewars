function isEven(number: number): boolean {
  return number % 2 === 0;
}

function simpleMultiplication(number: number): number {
  return isEven(number) ? number * 8 : number * 9;
}

export default simpleMultiplication;
