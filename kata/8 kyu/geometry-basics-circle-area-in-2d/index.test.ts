import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Circle from './circle.ts';
import circleArea from './index.ts';
import Point from './point.ts';

describe('circleArea', () => {
  it('should calculate the area of a circle', () => {
    assert.strictEqual(+circleArea(new Circle(new Point(10, 10), 30)).toFixed(6), 2827.433388);
    assert.strictEqual(+circleArea(new Circle(new Point(25, -70), 30)).toFixed(6), 2827.433388);
    assert.strictEqual(+circleArea(new Circle(new Point(-15, 5), 0)).toFixed(6), 0);
    assert.strictEqual(+circleArea(new Circle(new Point(-15, 5), 12.5)).toFixed(6), 490.873852);
  });
});
