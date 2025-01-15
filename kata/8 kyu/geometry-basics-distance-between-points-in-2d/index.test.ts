import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import distanceBetweenPoints, { Point } from './index.ts';

describe('distanceBetweenPoints', () => {
  it('should return the distance between two points', () => {
    assert.strictEqual(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0);
    assert.strictEqual(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
    assert.strictEqual(
      distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6),
      '10.728001',
    );
  });
});
