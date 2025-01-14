import { describe, expect, it } from 'vitest';
import numberOfRectangles from './index.ts';

describe('numberOfRectangles', () => {
  it('should calculate number of rectangles in rectangle', () => {
    expect.assertions(2);

    expect(numberOfRectangles(4, 4)).toBe(100);
    expect(numberOfRectangles(5, 5)).toBe(225);
  });
});
