function createArray(number: number): number[] {
  const newArray = [];

  for (let counter = 1; counter <= number; counter += 1) {
    newArray.push(counter);
  }

  return newArray;
}

export default createArray;
