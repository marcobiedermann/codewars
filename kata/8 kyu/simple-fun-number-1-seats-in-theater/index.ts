function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
  return (nCols - col + 1) * (nRows - row);
}

export default seatsInTheater;
