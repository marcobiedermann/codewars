import { describe, expect, it } from 'vitest';
import areaLargestSquare from './index.ts';

describe('areaLargestSquare', () => {
  it('should get the area of the largest square that can fit inside a circle', () => {
    expect.assertions(3);

    expect(areaLargestSquare(5)).toBe(50);
    expect(areaLargestSquare(7)).toBe(98);
    expect(areaLargestSquare(15)).toBe(450);
  });
});
