function multiplicationTable(size: number): number[][] {
  const table = [];

  for (let i = 1; i <= size; i += 1) {
    const row = [];

    for (let j = 1; j <= size; j += 1) {
      row.push(i * j);
    }

    table.push(row);
  }

  return table;
}

export default multiplicationTable;
