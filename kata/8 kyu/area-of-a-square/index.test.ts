import { describe, expect, it } from 'vitest';
import squareArea from '.';

describe('squareAre', () => {
  it('should return the area of the square', () => {
    expect.assertions(3);

    expect(squareArea(2)).toBe(1.62);
    expect(squareArea(0)).toBe(0);
    expect(squareArea(14.05)).toBe(80);
  });
});
