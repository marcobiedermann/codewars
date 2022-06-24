function closeCompare(a: number, b: number, margin = 0): number {
  const difference = a - b;
  const distance = Math.abs(difference);

  if (distance <= margin) {
    return 0;
  }

  return Math.sign(difference);
}

export default closeCompare;
