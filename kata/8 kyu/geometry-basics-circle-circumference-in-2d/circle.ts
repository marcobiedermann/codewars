import Point from './point.ts';

class Circle {
  private center: Point;
  private radius: number;

  constructor(center: Point, radius: number) {
    this.center = center;
    this.radius = radius;
  }
}

export default Circle;
