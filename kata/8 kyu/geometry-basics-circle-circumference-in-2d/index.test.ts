import circleCircumference from '.';
import Circle from './circle';
import Point from './point';

describe('circleCircumference', () => {
  it('should calculate the circumference of a circle', () => {
    expect.assertions(4);

    expect(+circleCircumference(new Circle(new Point(10, 10), 30)).toFixed(6)).toBe(188.495559);
    expect(+circleCircumference(new Circle(new Point(25, -70), 30)).toFixed(6)).toBe(188.495559);
    expect(+circleCircumference(new Circle(new Point(-15, 5), 0)).toFixed(6)).toBe(0);
    expect(+circleCircumference(new Circle(new Point(-15, 5), 12.5)).toFixed(6)).toBe(78.539816);
  });
});
