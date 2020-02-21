function sum(numbers: number[]): number {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export default sum;
