import { describe, expect, it } from 'vitest';
import areaOrPerimeter from '.';

describe('areaOrPerimeter', () => {
  it('should calculate area or perimeter, depending on shape', () => {
    expect.assertions(2);

    expect(areaOrPerimeter(4, 4)).toBe(16);
    expect(areaOrPerimeter(6, 10)).toBe(32);
  });
});
