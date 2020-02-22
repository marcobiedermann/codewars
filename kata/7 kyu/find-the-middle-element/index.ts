function gimme(inputArray: number[]): number {
  return inputArray.indexOf([...inputArray].sort((a, b) => a - b)[1]);
}

export default gimme;
