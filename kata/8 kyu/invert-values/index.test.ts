import { describe, expect, it } from 'vitest';
import invert from './index.ts';

describe('invent', () => {
  it('should return inverse of each', () => {
    expect.assertions(4);

    expect(invert([1, 2, 3, 4, 5])).toStrictEqual([-1, -2, -3, -4, -5]);
    expect(invert([1, -2, 3, -4, 5])).toStrictEqual([-1, 2, -3, 4, -5]);
    expect(invert([])).toStrictEqual([]);
    expect(invert([0])).toStrictEqual([0]);
  });
});
