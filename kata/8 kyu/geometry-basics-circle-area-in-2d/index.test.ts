import circleArea from '.';
import Circle from './circle';
import Point from './point';

describe('circleArea', () => {
  it('should calculate the area of a circle', () => {
    expect.assertions(4);

    expect(+circleArea(new Circle(new Point(10, 10), 30)).toFixed(6)).toStrictEqual(2827.433388);
    expect(+circleArea(new Circle(new Point(25, -70), 30)).toFixed(6)).toStrictEqual(2827.433388);
    expect(+circleArea(new Circle(new Point(-15, 5), 0)).toFixed(6)).toStrictEqual(0);
    expect(+circleArea(new Circle(new Point(-15, 5), 12.5)).toFixed(6)).toStrictEqual(490.873852);
  });
});
