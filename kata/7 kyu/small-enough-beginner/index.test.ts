import { describe, expect, it } from 'vitest';
import smallEnough from '.';

describe('smallEnough', () => {
  it('should check if all values are below or equal to the limit', () => {
    expect.assertions(4);

    expect(smallEnough([66, 101], 200)).toBe(true);
    expect(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).toBe(false);
    expect(smallEnough([101, 45, 75, 105, 99, 107], 107)).toBe(true);
    expect(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).toBe(true);
  });
});
