function highAndLow(numberStr: string): string {
  const numbers = numberStr.split(' ').map(Number);

  const lowest = Math.min(...numbers);
  const highest = Math.max(...numbers);

  return `${highest} ${lowest}`;
}

export default highAndLow;
