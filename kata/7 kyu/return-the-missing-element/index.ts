function getMissingElement(superImportantArray: number[]): number {
  const sum = superImportantArray.reduce((a, b) => a + b, 0);
  const expectedSum = (superImportantArray.length * (superImportantArray.length + 1)) / 2;

  return expectedSum - sum;
}

export default getMissingElement;
