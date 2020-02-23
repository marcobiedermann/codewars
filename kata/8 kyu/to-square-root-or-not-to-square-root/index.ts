function squareOrSquareRoot(array: number[]): number[] {
  return array.map(number => {
    const sqrt = Math.sqrt(number);

    return sqrt % 1 ? number ** 2 : sqrt;
  });
}

export default squareOrSquareRoot;
