function slope(points: [number, number, number, number]): string {
  const [x1, y1, x2, y2] = points;
  const dx = x2 - x1;
  const dy = y2 - y1;

  if (!dx) {
    return 'undefined';
  }

  return (dy / dx).toString();
}

export default slope;
