import { describe, expect, it } from 'vitest';
import getRealFloor from './index.ts';

describe('getRealFloor', () => {
  it('should return the floor in the european system', () => {
    expect.assertions(4);

    expect(getRealFloor(0)).toBe(0);
    expect(getRealFloor(1)).toBe(0);
    expect(getRealFloor(5)).toBe(4);
    expect(getRealFloor(15)).toBe(13);
  });
});
