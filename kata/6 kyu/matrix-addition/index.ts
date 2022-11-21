function matrixAddition(a: number[][], b: number[][]) {
  return a.map((row, i) =>
    row.map((cellA, j) => {
      const cellB = b[i][j];

      return cellA + cellB;
    }),
  );
}

export default matrixAddition;
