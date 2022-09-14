class Point {
  // eslint-disable-next-line no-useless-constructor
  constructor(public x: number, public y: number) {}
}

function distanceBetweenPoints(a: Point, b: Point): number {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

export { Point };
export default distanceBetweenPoints;
