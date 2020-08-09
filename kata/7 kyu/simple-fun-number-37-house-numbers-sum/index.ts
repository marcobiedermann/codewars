function houseNumbersSum(inputArray: number[]): number {
  return inputArray
    .slice(0, inputArray.indexOf(0))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export default houseNumbersSum;
