import { describe, expect, it } from 'vitest';
import toNumberArray from '.';

describe('toNumberArray', () => {
  it('should convert convert an array of strings to an array of numbers', () => {
    expect.assertions(1);

    expect(toNumberArray(['1.1', '2.2', '3.3'])).toStrictEqual([1.1, 2.2, 3.3]);
  });
});
