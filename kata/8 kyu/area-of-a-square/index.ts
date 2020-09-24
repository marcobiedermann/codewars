function round(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function squareArea(a: number): number {
  const area = ((2 * a) / Math.PI) ** 2;

  return round(area);
}

export default squareArea;
