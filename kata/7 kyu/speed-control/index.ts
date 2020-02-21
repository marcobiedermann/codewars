function gps(s: number, x: number[]): number {
  const xLength = x.length;
  const speeds = [];

  if (xLength <= 1) {
    return 0;
  }

  for (let i = 0; i < xLength - 1; i += 1) {
    const deltaDistance = x[i + 1] - x[i];
    const speed = (3600 * deltaDistance) / s;

    speeds.push(speed);
  }

  const maxSpeed = Math.max(...speeds);

  return Math.floor(maxSpeed);
}

export default gps;
