import { describe, expect, it } from 'vitest';
import uniqueInOrder from '.';

describe('uniqueInOrder', () => {
  it('should return unique items in order', () => {
    expect.assertions(1);

    expect(uniqueInOrder('AAAABBBCCDAABBB')).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B']);
  });
});
