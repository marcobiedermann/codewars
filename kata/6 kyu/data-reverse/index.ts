function chunk<T>(arr: T[], size: number): T[][] {
  const chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

function dataReverse(data: number[]): number[] {
  return chunk(data, 8).reverse().flat();
}

export default dataReverse;
