function sumOfMinimums(arr: number[][]): number {
  return arr.reduce((accumulator, currentValue) => accumulator + Math.min(...currentValue), 0);
}

export default sumOfMinimums;
