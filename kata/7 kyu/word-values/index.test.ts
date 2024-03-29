import { describe, expect, it } from 'vitest';
import wordValue from '.';

describe('wordValue', () => {
  it('should count word value', () => {
    expect.assertions(2);

    expect(wordValue(['codewars', 'abc', 'xyz'])).toStrictEqual([88, 12, 225]);
    expect(wordValue(['abc abc', 'abc abc', 'abc', 'abc'])).toStrictEqual([12, 24, 18, 24]);
  });
});
