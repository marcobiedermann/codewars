import { describe, expect, it } from 'vitest';
import newAvg from '.';

describe('newAvg', () => {
  it('should find the missing number to reach the new average', () => {
    expect.assertions(3);

    expect(newAvg([14, 30, 5, 7, 9, 11, 16], 90)).toBe(628);
    expect(newAvg([14, 30, 5, 7, 9, 11, 15], 92)).toBe(645);
    expect(() => newAvg([14, 30, 5, 7, 9, 11, 15], 2)).toThrow('Expected New Average is too low');
  });
});
