import { expect } from 'vitest';
import arr from '.';

describe('arr', () => {
  it('should return an array', () => {
    expect(arr()).toBeInstanceOf(Array);
  });

  it('should return a blank array when called with no argument', () => {
    expect(arr()).toStrictEqual([]);
  });

  it('should return 0 to 3 when called with 4', () => {
    expect(arr(4)).toStrictEqual([0, 1, 2, 3]);
  });
});
