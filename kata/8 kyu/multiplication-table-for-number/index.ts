function multiTable(number: number): string {
  return Array.from(
    {
      length: 10,
    },
    (_, index) => `${index + 1} * ${number} = ${(index + 1) * number}`,
  ).join('\n');
}

export default multiTable;
