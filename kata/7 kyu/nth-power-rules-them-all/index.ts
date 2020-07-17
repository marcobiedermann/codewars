function modifiedSum(a: number[], n: number): number {
  return a.reduce((accumulator, currentValue) => accumulator + currentValue ** n - currentValue, 0);
}

export default modifiedSum;
