import { describe, expect, it } from 'vitest';
import distanceBetweenPoints, { Point } from './index.ts';

describe('distanceBetweenPoints', () => {
  it('should return the distance between two points', () => {
    expect.assertions(3);

    expect(distanceBetweenPoints(new Point(3, 3), new Point(3, 3))).toBe(0);
    expect(distanceBetweenPoints(new Point(1, 6), new Point(4, 2))).toBe(5);
    expect(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6)).toBe(
      '10.728001',
    );
  });
});
