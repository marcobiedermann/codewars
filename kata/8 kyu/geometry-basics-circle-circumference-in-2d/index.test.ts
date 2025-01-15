import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Circle from './circle.ts';
import circleCircumference from './index.ts';
import Point from './point.ts';

describe('circleCircumference', () => {
  it('should calculate the circumference of a circle', () => {
    assert.strictEqual(
      +circleCircumference(new Circle(new Point(10, 10), 30)).toFixed(6),
      188.495559,
    );
    assert.strictEqual(
      +circleCircumference(new Circle(new Point(25, -70), 30)).toFixed(6),
      188.495559,
    );
    assert.strictEqual(+circleCircumference(new Circle(new Point(-15, 5), 0)).toFixed(6), 0);
    assert.strictEqual(
      +circleCircumference(new Circle(new Point(-15, 5), 12.5)).toFixed(6),
      78.539816,
    );
  });
});
