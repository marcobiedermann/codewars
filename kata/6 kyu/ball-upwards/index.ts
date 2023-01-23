function maxBall(v0: number): number {
  const g = 9.81;
  const kmh = 3600 / 1000;

  return Math.round((10 * v0) / kmh / g);
}

export default maxBall;
