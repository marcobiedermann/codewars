import { describe, expect, it } from 'vitest';
import binaryArrayToNumber from '.';

describe('binaryArrayToNumber', () => {
  it('should convert binary value in array to integer', () => {
    expect.assertions(4);

    expect(binaryArrayToNumber([0, 0, 0, 1])).toBe(1);
    expect(binaryArrayToNumber([0, 0, 1, 0])).toBe(2);
    expect(binaryArrayToNumber([1, 1, 1, 1])).toBe(15);
    expect(binaryArrayToNumber([0, 1, 1, 0])).toBe(6);
  });
});
